import { NextResponse } from "next/server";
import { connectWebhookDb } from "@/lib/webhookDb";
import TawkChatSession from "@/models/TawkChatSession";
import {
  createMessageId,
  normalizeSenderType,
  toIsoDate,
} from "@/lib/tawkChat";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function badRequest(message) {
  return NextResponse.json({ success: false, message }, { status: 400 });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const chatId = body?.chatId ? String(body.chatId) : "";
    const senderType = normalizeSenderType(body?.senderType);
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!chatId) {
      return badRequest("chatId is required");
    }

    if (!message) {
      return badRequest("message is required");
    }

    const timeIso = toIsoDate(body?.time);
    const messageId = createMessageId({
      chatId,
      senderType,
      message,
      time: timeIso,
      clientMessageId: body?.clientMessageId,
    });

    const messageDoc = {
      messageId,
      senderType,
      senderName: body?.senderName ? String(body.senderName) : "",
      senderId: body?.senderId ? String(body.senderId) : "",
      type: body?.type ? String(body.type) : "text",
      msg: message,
      time: new Date(timeIso),
      attchs: Array.isArray(body?.attchs) ? body.attchs : [],
    };

    await connectWebhookDb();

    // Always target the same session by chatId only (never create a second doc)
    const existing = await TawkChatSession.findOne(
      { chatId },
      { _id: 1, "messages.messageId": 1 }
    );
    const alreadyHasMessage = existing?.messages?.some(
      (m) => m.messageId === messageId
    );
    if (alreadyHasMessage) {
      console.info(
        `[tawk:realtime] chatId=${chatId} messageId=${messageId} duplicate=skip`
      );
      return NextResponse.json({
        success: true,
        duplicate: true,
        messageId,
      });
    }

    const result = await TawkChatSession.updateOne(
      { chatId },
      {
        $setOnInsert: {
          chatId,
          startedAt: new Date(timeIso),
        },
        $set: {
          status: "active",
          lastMessageAt: new Date(timeIso),
          updatedAt: new Date(),
        },
        $push: { messages: messageDoc },
        $inc: { messageCount: 1 },
      },
      { upsert: true }
    );

    const isDuplicate = result.modifiedCount === 0 && result.upsertedCount === 0;

    console.info(
      `[tawk:realtime] chatId=${chatId} messageId=${messageId} duplicate=${isDuplicate}`
    );

    return NextResponse.json({
      success: true,
      duplicate: isDuplicate,
      messageId,
    });
  } catch (error) {
    console.error("[tawk:realtime] error", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
