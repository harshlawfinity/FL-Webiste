import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectWebhookDb } from "@/lib/webhookDb";
import TawkChatSession from "@/models/TawkChatSession";
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

function verifyWebhookSignature(rawBody, signature, secret) {
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

function resolvePayloadEntity(body = {}) {
  return body.data || body.payload || body.chat || body;
}

/** Safely extract message text; value can be string or object (e.g. { text, msg, body }). */
function extractMessageText(value) {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value !== "object") return String(value);
  const text =
    value.text ??
    value.msg ??
    value.body ??
    value.content ??
    value.message ??
    "";
  return typeof text === "string" ? text.trim() : "";
}

function normalizeTranscriptMessage(chatId, item, index) {
  const senderType = normalizeSenderType(
    item?.senderType || item?.sender_type || item?.sender?.type || item?.actor
  );
  const senderName =
    item?.senderName ||
    item?.sender_name ||
    item?.sender?.name ||
    item?.name ||
    "";
  const senderId =
    item?.senderId || item?.sender_id || item?.sender?.id || item?.userId || "";
  const type = item?.type || "text";
  const msg =
    extractMessageText(item?.message) ||
    extractMessageText(item?.msg) ||
    (typeof item?.text === "string" ? item.text.trim() : "") ||
    extractMessageText(item?.body) ||
    (typeof item?.content === "string" ? item.content.trim() : "") ||
    "";
  const timeIso = toIsoDate(
    item?.time || item?.timestamp || item?.createdAt || item?.created_at
  );
  const clientMessageId =
    item?.messageId || item?.id || item?._id || `transcript-${index}`;

  return {
    messageId: createMessageId({
      chatId,
      senderType,
      message: msg,
      time: timeIso,
      clientMessageId,
    }),
    senderType,
    senderName: String(senderName || ""),
    senderId: String(senderId || ""),
    type: String(type || "text"),
    msg: String(msg || ""),
    time: new Date(timeIso),
    attchs: Array.isArray(item?.attchs)
      ? item.attchs
      : Array.isArray(item?.attachments)
      ? item.attachments
      : [],
  };
}

function extractTranscriptEntries(body = {}, entity = {}) {
  const transcriptCandidates = [
    body.transcript,
    body.data?.transcript,
    body.payload?.transcript,
    entity.transcript,
  ];

  for (const candidate of transcriptCandidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }
    if (candidate && Array.isArray(candidate.messages)) {
      return candidate.messages;
    }
    if (candidate && Array.isArray(candidate.entries)) {
      return candidate.entries;
    }
  }

  if (Array.isArray(entity.messages)) {
    return entity.messages;
  }

  return [];
}

function extractVisitorFields(entity = {}) {
  const visitor = entity.visitor || entity.client || {};
  return {
    propertyId: entity.propertyId || entity.property_id || "",
    visitorId: visitor.id || entity.visitorId || entity.visitor_id || "",
    visitorName: visitor.name || entity.visitorName || entity.visitor_name || "",
    visitorEmail:
      visitor.email || entity.visitorEmail || entity.visitor_email || "",
  };
}

export async function POST(req) {
  const hitAt = new Date().toISOString();
  console.info(`[tawk:webhook] hit=${hitAt}`);

  // Production debug: ensure env is available (Vercel/hosting env vars must be set)
  console.log("[tawk:webhook] env check", {
    mongo:
      !!process.env.MONGODB_URI ||
      !!process.env.WEBHOOK_MONGO_URI ||
      !!process.env.WEBHOOK_MONGODB_URI,
    secret: !!process.env.TAWK_WEBHOOK_SECRET,
  });

  try {
    const rawBody = await req.text();
    const signature =
      req.headers.get("x-tawk-signature") ||
      req.headers.get("x-webhook-signature") ||
      req.headers.get("x-signature") ||
      "";
    const secret = process.env.TAWK_WEBHOOK_SECRET || "";

    if (secret && !verifyWebhookSignature(rawBody, signature, secret)) {
      console.warn("[tawk:webhook] signature verification failed");
      return NextResponse.json({ success: false }, { status: 401 });
    }

    if (!secret) {
      console.warn(
        "[tawk:webhook] TAWK_WEBHOOK_SECRET missing; signature verification bypassed"
      );
    }

    let body;
    try {
      body = JSON.parse(rawBody || "{}");
    } catch (parseError) {
      console.error("[tawk:webhook] invalid JSON body", parseError);
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const eventName = extractEventName(body);
    const entity = resolvePayloadEntity(body);
    const chatId = extractChatId(entity) || extractChatId(body);
    const eventId = extractEventId(body) || extractEventId(entity);
    const eventTimeIso = toIsoDate(
      body?.time || body?.timestamp || entity?.time || entity?.timestamp
    );

    console.log("[tawk:webhook] event:", body?.event ?? body?.eventName ?? eventName);
    console.info(
      `[tawk:webhook] event=${eventName || "unknown"} chatId=${chatId || "n/a"}`
    );

    if (!eventName || !chatId) {
      return NextResponse.json({
        success: true,
        ignored: true,
        reason: "missing_event_or_chatId",
      });
    }

    await connectWebhookDb();

    if (eventName === "chat:transcript_created") {
      const transcriptEntries = extractTranscriptEntries(body, entity)
        .map((item, index) => normalizeTranscriptMessage(chatId, item, index))
        .filter((msg) => msg.msg);

      transcriptEntries.sort((a, b) => {
        return new Date(a.time).getTime() - new Date(b.time).getTime();
      });

      const endedAt = new Date(eventTimeIso);
      const lastMessageAt =
        transcriptEntries.length > 0
          ? transcriptEntries[transcriptEntries.length - 1].time
          : endedAt;

      console.info(
        `[tawk:webhook] transcript chatId=${chatId} count=${transcriptEntries.length}`
      );

      const update = {
        $setOnInsert: {
          chatId,
          startedAt: transcriptEntries[0]?.time || endedAt,
        },
        $set: {
          status: "closed",
          endedAt,
          lastMessageAt,
          messages: transcriptEntries,
          messageCount: transcriptEntries.length,
          ...extractVisitorFields(entity),
        },
      };

      if (eventId) {
        update.$addToSet = { eventIds: String(eventId) };
      }

      const result = await TawkChatSession.updateOne({ chatId }, update, {
        upsert: true,
      });

      console.info(
        `[tawk:webhook] transcript overwrite matched=${result.matchedCount} modified=${result.modifiedCount} upserted=${result.upsertedCount}`
      );

      return NextResponse.json({ success: true, handled: eventName });
    }

    if (eventName === "chat:start") {
      // Always target the same session by chatId only (never create a second doc for same chat)
      const update = {
        $setOnInsert: {
          chatId,
          startedAt: new Date(eventTimeIso),
        },
        $set: {
          status: "active",
          lastMessageAt: new Date(eventTimeIso),
          ...extractVisitorFields(entity),
        },
      };
      if (eventId) {
        update.$addToSet = { eventIds: String(eventId) };
      }

      const startResult = await TawkChatSession.updateOne(
        { chatId },
        update,
        { upsert: true }
      );
      // Duplicate = event already processed (eventId already in doc, so nothing changed)
      const duplicateEvent =
        startResult.matchedCount === 1 &&
        startResult.modifiedCount === 0 &&
        startResult.upsertedCount === 0;

      if (duplicateEvent) {
        return NextResponse.json({
          success: true,
          handled: eventName,
          duplicate: true,
        });
      }

      const messageText =
        extractMessageText(body?.message) ||
        extractMessageText(body?.payload?.message) ||
        extractMessageText(body?.chat?.message) ||
        extractMessageText(entity?.message) ||
        (typeof entity?.msg === "string" ? entity.msg.trim() : "") ||
        (typeof body?.msg === "string" ? body.msg.trim() : "") ||
        "";
      console.log("[tawk:webhook] parsed message text:", messageText);

      if (messageText) {
        const visitor = entity?.visitor || entity?.client || {};
        const firstMessage = {
          messageId: createMessageId({
            chatId,
            senderType:
              normalizeSenderType(
                entity?.message?.sender?.type ||
                  body?.message?.sender?.type ||
                  entity?.senderType ||
                  body?.senderType
              ) || "visitor",
            message: messageText,
            time: eventTimeIso,
            clientMessageId:
              entity?.messageId || body?.messageId || `${chatId}-chat-start`,
          }),
          senderType: normalizeSenderType(
            entity?.message?.sender?.type ||
              body?.message?.sender?.type ||
              entity?.senderType ||
              body?.senderType ||
              "visitor"
          ),
          senderName: String(
            visitor?.name ||
              entity?.visitorName ||
              entity?.visitor_name ||
              body?.visitorName ||
              ""
          ),
          senderId: String(
            entity?.message?.sender?.id ||
              body?.message?.sender?.id ||
              entity?.senderId ||
              body?.senderId ||
              visitor?.id ||
              ""
          ),
          type: entity?.message?.type || body?.message?.type || "text",
          msg: messageText,
          time: new Date(eventTimeIso),
          attchs: [],
        };

        await TawkChatSession.updateOne(
          { chatId, "messages.messageId": { $ne: firstMessage.messageId } },
          {
            $push: { messages: firstMessage },
            $inc: { messageCount: 1 },
            $set: { lastMessageAt: new Date(eventTimeIso), status: "active" },
          }
        );
      }

      return NextResponse.json({ success: true, handled: eventName });
    }

    if (eventName === "chat:end") {
      // Always target the same session by chatId only (never create a second doc for same chat)
      const update = {
        $setOnInsert: { chatId, startedAt: new Date(eventTimeIso) },
        $set: {
          status: "closed",
          endedAt: new Date(eventTimeIso),
          ...extractVisitorFields(entity),
        },
      };
      if (eventId) {
        update.$addToSet = { eventIds: String(eventId) };
      }

      const endResult = await TawkChatSession.updateOne(
        { chatId },
        update,
        { upsert: true }
      );
      const duplicateEvent =
        endResult.matchedCount === 1 &&
        endResult.modifiedCount === 0 &&
        endResult.upsertedCount === 0;

      return NextResponse.json({
        success: true,
        handled: eventName,
        duplicate: duplicateEvent,
      });
    }

    if (eventName === "chat:message") {
      if (eventId) {
        await TawkChatSession.updateOne(
          { chatId },
          { $addToSet: { eventIds: String(eventId) }, $setOnInsert: { chatId } },
          { upsert: true }
        );
      }

      return NextResponse.json({
        success: true,
        handled: eventName,
        ignored: true,
      });
    }

    if (eventId) {
      await TawkChatSession.updateOne(
        { chatId },
        { $addToSet: { eventIds: String(eventId) }, $setOnInsert: { chatId } },
        { upsert: true }
      );
    }

    return NextResponse.json({
      success: true,
      handled: eventName,
      ignored: true,
    });
  } catch (error) {
    console.error("[tawk:webhook] error", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
