import crypto from "crypto";

export function normalizeSenderType(senderType) {
  if (!senderType) {
    return "system";
  }

  const normalized = String(senderType).toLowerCase();

  if (normalized.includes("agent")) {
    return "agent";
  }

  if (normalized.includes("visitor") || normalized.includes("client")) {
    return "visitor";
  }

  if (normalized.includes("system")) {
    return "system";
  }

  return normalized;
}

export function toIsoDate(value, fallback = new Date()) {
  if (!value) {
    return new Date(fallback).toISOString();
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return new Date(fallback).toISOString();
  }

  return date.toISOString();
}

export function createMessageId({
  chatId,
  senderType,
  message,
  time,
  clientMessageId,
}) {
  if (clientMessageId) {
    return String(clientMessageId);
  }

  const hash = crypto.createHash("sha256");
  hash.update(
    [
      String(chatId || ""),
      normalizeSenderType(senderType),
      String(message || ""),
      toIsoDate(time),
    ].join("|")
  );

  return hash.digest("hex");
}

export function extractChatId(payload = {}) {
  return (
    payload.chatId ||
    payload.chat_id ||
    payload.conversationId ||
    payload.conversation_id ||
    payload.chat?.id ||
    payload.data?.chatId ||
    payload.data?.chat?.id ||
    payload.payload?.chatId ||
    payload.payload?.chat?.id ||
    null
  );
}

export function extractEventName(payload = {}) {
  return (
    payload.event ||
    payload.eventName ||
    payload.type ||
    payload.name ||
    payload.data?.event ||
    payload.payload?.event ||
    null
  );
}

export function extractEventId(payload = {}) {
  return (
    payload.eventId ||
    payload.event_id ||
    payload.id ||
    payload.webhookId ||
    payload.webhook_id ||
    payload.data?.eventId ||
    payload.payload?.eventId ||
    null
  );
}
