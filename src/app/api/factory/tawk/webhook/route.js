import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectFactoryDb } from "@/lib/factoryDbConnect";
import FactoryChatModel from "@/models/FactoryChatModel";
import {
  createMessageId,
  extractChatId,
  extractEventId,
  extractEventName,
  normalizeSenderType,
  toIsoDate,
} from "@/lib/tawkChat";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeEqual(a, b) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) {
    return false;
  }
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function verifySignature(rawBody, signature, secret) {
  if (!secret) {
    return true;
  }
  if (!signature) {
    return false;
  }

  const normalized = signature.replace(/^sha(1|256)=/i, "");
  const sha1Hex = crypto.createHmac("sha1", secret).update(rawBody).digest("hex");
  const sha256Hex = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");
  const sha1Base64 = crypto
    .createHmac("sha1", secret)
    .update(rawBody)
    .digest("base64");
  const sha256Base64 = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("base64");

  return (
    safeEqual(normalized, sha1Hex) ||
    safeEqual(normalized, sha256Hex) ||
    safeEqual(normalized, sha1Base64) ||
    safeEqual(normalized, sha256Base64)
  );
}

function parseBody(rawBody) {
  try {
    return JSON.parse(rawBody || "{}");
  } catch {
    return null;
  }
}

function resolveEntity(body = {}) {
  return body.payload || body.data || body.chat || body;
}

function extractFactoryMeta(entity = {}) {
  const property = entity.property || {};
  const visitor = entity.visitor || entity.client || {};

  return {
    propertyId: String(
      entity.propertyId || entity.property_id || property.id || ""
    ),
    propertyName: String(
      entity.propertyName || entity.property_name || property.name || ""
    ),
    visitorName: String(
      entity.visitorName || entity.visitor_name || visitor.name || ""
    ),
    visitorCity: String(
      entity.visitorCity || entity.visitor_city || visitor.city || ""
    ),
    visitorCountry: String(
      entity.visitorCountry || entity.visitor_country || visitor.country || ""
    ),
  };
}

function mapTranscriptMessage(chatId, msg, index) {
  const senderType = normalizeSenderType(
    msg?.senderType || msg?.sender_type || msg?.sender?.type || msg?.actor
  );
  const senderName =
    msg?.senderName || msg?.sender_name || msg?.sender?.name || msg?.name || "";
  const senderId =
    msg?.senderId || msg?.sender_id || msg?.sender?.id || msg?.userId || "";
  const text = String(
    msg?.msg || msg?.message || msg?.text || msg?.body || msg?.content || ""
  ).trim();
  const timeIso = toIsoDate(
    msg?.time || msg?.timestamp || msg?.createdAt || msg?.created_at
  );
  const clientMessageId = msg?.messageId || msg?.id || msg?._id || `${index}`;

  return {
    messageId: createMessageId({
      chatId,
      senderType,
      message: text,
      time: timeIso,
      clientMessageId,
    }),
    senderType,
    senderName: String(senderName || ""),
    senderId: String(senderId || ""),
    type: String(msg?.type || "msg"),
    msg: text,
    time: new Date(timeIso),
  };
}

function extractTranscriptMessages(body = {}, entity = {}) {
  const chatPayload = body?.payload?.chat || body?.data?.chat || body?.chat || {};
  const list =
    chatPayload?.messages ||
    entity?.messages ||
    body?.transcript?.messages ||
    body?.transcript ||
    [];

  if (!Array.isArray(list)) {
    return [];
  }

  return list;
}

export async function POST(req) {
  const hitAt = new Date().toISOString();
  console.info(`[factory:webhook] hit=${hitAt}`);

  try {
    const rawBody = await req.text();
    const secret =
      process.env.FACTORY_TAWK_WEBHOOK_SECRET || process.env.TAWK_WEBHOOK_SECRET || "";
    const signature =
      req.headers.get("x-tawk-signature") ||
      req.headers.get("x-webhook-signature") ||
      req.headers.get("x-signature") ||
      "";

    if (secret && !verifySignature(rawBody, signature, secret)) {
      console.warn("[factory:webhook] signature verification failed");
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const body = parseBody(rawBody);
    if (!body) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON" },
        { status: 400 }
      );
    }

    const eventName = extractEventName(body);
    const entity = resolveEntity(body);
    const chatId = extractChatId(entity) || extractChatId(body);
    const eventId = extractEventId(body) || extractEventId(entity);
    const eventTimeIso = toIsoDate(
      body?.time || body?.timestamp || entity?.time || entity?.timestamp
    );

    console.info(
      `[factory:webhook] event=${eventName || "unknown"} chatId=${chatId || "n/a"}`
    );

    if (!eventName || !chatId) {
      return NextResponse.json({
        success: true,
        ignored: true,
        reason: "missing_event_or_chatId",
      });
    }

    await connectFactoryDb();

    if (eventName === "chat:start") {
      const startFilter = eventId
        ? { chatId, eventIds: { $ne: String(eventId) } }
        : { chatId };

      const update = {
        $setOnInsert: {
          chatId,
          startedAt: new Date(eventTimeIso),
        },
        $set: {
          status: "active",
          lastMessageAt: new Date(eventTimeIso),
          ...extractFactoryMeta(entity),
        },
      };

      if (eventId) {
        update.$addToSet = { eventIds: String(eventId) };
      }

      const result = await FactoryChatModel.updateOne(startFilter, update, {
        upsert: true,
      });
      console.info(
        `[factory:webhook] chat:start matched=${result.matchedCount} modified=${result.modifiedCount} upserted=${result.upsertedCount}`
      );

      const firstMessage = String(
        entity?.message || entity?.msg || body?.message || body?.msg || ""
      ).trim();

      if (firstMessage) {
        const senderType = normalizeSenderType(
          entity?.senderType || body?.senderType || "visitor"
        );
        const firstMessageId = createMessageId({
          chatId,
          senderType,
          message: firstMessage,
          time: eventTimeIso,
          clientMessageId:
            entity?.messageId || body?.messageId || `${chatId}-chat-start`,
        });

        const msgResult = await FactoryChatModel.updateOne(
          { chatId, "messages.messageId": { $ne: firstMessageId } },
          {
            $push: {
              messages: {
                messageId: firstMessageId,
                senderType,
                senderName: String(
                  entity?.senderName || body?.senderName || entity?.visitorName || ""
                ),
                senderId: String(
                  entity?.senderId || body?.senderId || entity?.visitorId || ""
                ),
                type: "msg",
                msg: firstMessage,
                time: new Date(eventTimeIso),
              },
            },
            $inc: { messageCount: 1 },
            $set: { lastMessageAt: new Date(eventTimeIso), status: "active" },
          }
        );

        console.info(
          `[factory:webhook] chat:start first-msg matched=${msgResult.matchedCount} modified=${msgResult.modifiedCount}`
        );
      }

      return NextResponse.json({ success: true, handled: eventName });
    }

    if (eventName === "chat:end") {
      const endFilter = eventId
        ? { chatId, eventIds: { $ne: String(eventId) } }
        : { chatId };

      const update = {
        $setOnInsert: {
          chatId,
          startedAt: new Date(eventTimeIso),
        },
        $set: {
          status: "closed",
          endedAt: new Date(eventTimeIso),
          endedReason: String(entity?.endedReason || body?.endedReason || ""),
          ...extractFactoryMeta(entity),
        },
      };

      if (eventId) {
        update.$addToSet = { eventIds: String(eventId) };
      }

      const result = await FactoryChatModel.updateOne(endFilter, update, {
        upsert: true,
      });
      console.info(
        `[factory:webhook] chat:end matched=${result.matchedCount} modified=${result.modifiedCount} upserted=${result.upsertedCount}`
      );

      return NextResponse.json({ success: true, handled: eventName });
    }

    if (eventName === "chat:transcript_created") {
      const transcriptMessages = extractTranscriptMessages(body, entity)
        .map((msg, index) => mapTranscriptMessage(chatId, msg, index))
        .filter((msg) => msg.msg);

      transcriptMessages.sort((a, b) => {
        return new Date(a.time).getTime() - new Date(b.time).getTime();
      });

      const finalEndedAt =
        transcriptMessages.length > 0
          ? transcriptMessages[transcriptMessages.length - 1].time
          : new Date(eventTimeIso);

      const update = {
        $setOnInsert: {
          chatId,
          startedAt: transcriptMessages[0]?.time || new Date(eventTimeIso),
        },
        $set: {
          status: "closed",
          endedAt: finalEndedAt,
          lastMessageAt: finalEndedAt,
          messages: transcriptMessages,
          messageCount: transcriptMessages.length,
          ...extractFactoryMeta(entity),
        },
      };

      if (eventId) {
        update.$addToSet = { eventIds: String(eventId) };
      }

      const result = await FactoryChatModel.updateOne({ chatId }, update, {
        upsert: true,
      });

      console.info(
        `[factory:webhook] transcript chatId=${chatId} count=${transcriptMessages.length} matched=${result.matchedCount} modified=${result.modifiedCount} upserted=${result.upsertedCount}`
      );

      return NextResponse.json({ success: true, handled: eventName });
    }

    if (eventId) {
      await FactoryChatModel.updateOne(
        { chatId },
        { $addToSet: { eventIds: String(eventId) }, $setOnInsert: { chatId } },
        { upsert: true }
      );
    }

    return NextResponse.json({ success: true, ignored: true, handled: eventName });
  } catch (error) {
    console.error("[factory:webhook] error", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
