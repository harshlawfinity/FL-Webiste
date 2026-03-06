import { NextResponse } from "next/server";
import { connectFactoryDb } from "@/lib/factoryDbConnect";
import FactoryChatModel from "@/models/FactoryChatModel";
import { normalizeSenderType, toIsoDate } from "@/lib/tawkChat";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function makeMessageId({ chatId, senderType, msg, timeIso }) {
  return `${chatId}|${senderType}|${msg}|${timeIso}`;
}

function getMessageText(messageValue) {
  if (typeof messageValue === "string") {
    return messageValue.trim();
  }

  if (!messageValue || typeof messageValue !== "object") {
    return "";
  }

  return String(messageValue.text || messageValue.msg || "").trim();
}

export async function POST(req) {
  try {
    const body = await req.json();
    const chatId = body?.chatId ? String(body.chatId) : "";
    const senderType = normalizeSenderType(body?.senderType);
    const timeIso = toIsoDate(body?.timestamp || body?.time);
    const msg = getMessageText(body?.message);

    if (!chatId || !msg) {
      return NextResponse.json(
        { success: false, message: "chatId and message are required" },
        { status: 400 }
      );
    }

    const messageId =
      body?.clientMessageId ||
      makeMessageId({
        chatId,
        senderType,
        msg,
        timeIso,
      });

    await connectFactoryDb();

    const result = await FactoryChatModel.updateOne(
      { chatId, "messages.messageId": { $ne: messageId } },
      {
        $setOnInsert: {
          chatId,
          startedAt: new Date(timeIso),
          status: "active",
        },
        $push: {
          messages: {
            messageId,
            senderType,
            senderName: body?.senderName ? String(body.senderName) : "",
            senderId: body?.senderId ? String(body.senderId) : "",
            msg,
            type: body?.message?.type || body?.type || "msg",
            time: new Date(timeIso),
          },
        },
        $inc: { messageCount: 1 },
        $set: {
          lastMessageAt: new Date(timeIso),
          updatedAt: new Date(),
          status: "active",
        },
      },
      { upsert: true }
    );

    const duplicate = result.modifiedCount === 0 && result.upsertedCount === 0;
    console.info(
      `[factory:realtime] chatId=${chatId} duplicate=${duplicate} matched=${result.matchedCount} modified=${result.modifiedCount}`
    );

    return NextResponse.json({
      success: true,
      duplicate,
      messageId,
    });
  } catch (error) {
    console.error("[factory:realtime] error", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
