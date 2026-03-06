"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

const FACTORY_CALLBACK_GUARD_KEY = "__factoryModuleTawkCallbacksAttached";
const DUPLICATE_WINDOW_MS = 5000;

export default function FactoryTawkTo() {
  const dedupeMapRef = useRef(new Map());
  const resetInProgressRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();

    const normalizeText = (value) => {
      if (typeof value === "string") {
        return value.trim();
      }

      if (!value || typeof value !== "object") {
        return "";
      }

      const candidate =
        value.message ??
        value.text ??
        value.body ??
        value.msg ??
        value.content ??
        "";

      return typeof candidate === "string" ? candidate.trim() : "";
    };

    const getChatId = () => {
      const api = window.Tawk_API || {};
      try {
        if (typeof api.getChatId === "function") {
          return api.getChatId();
        }
      } catch (error) {
        console.warn("[factory:tawk:frontend] getChatId failed", error);
      }

      return null;
    };

    const getMessageTime = (messagePayload) => {
      if (messagePayload?.time) {
        const date = new Date(messagePayload.time);
        if (!Number.isNaN(date.getTime())) {
          return date.toISOString();
        }
      }

      if (messagePayload?.timestamp) {
        const date = new Date(messagePayload.timestamp);
        if (!Number.isNaN(date.getTime())) {
          return date.toISOString();
        }
      }

      return new Date().toISOString();
    };

    const isRecentDuplicate = (fingerprint) => {
      const now = Date.now();
      const prev = dedupeMapRef.current.get(fingerprint);

      dedupeMapRef.current.forEach((value, key) => {
        if (now - value > DUPLICATE_WINDOW_MS) {
          dedupeMapRef.current.delete(key);
        }
      });

      if (prev && now - prev < DUPLICATE_WINDOW_MS) {
        return true;
      }

      dedupeMapRef.current.set(fingerprint, now);
      return false;
    };

    const sendRealtimeMessage = async (senderType, messagePayload) => {
      const message = normalizeText(messagePayload);
      if (!message) {
        return;
      }

      const chatId = getChatId();
      if (!chatId) {
        return;
      }

      const timestamp = getMessageTime(messagePayload);
      const clientMessageId =
        messagePayload?.id ||
        messagePayload?.messageId ||
        `${senderType}-${timestamp}-${message}`;
      const fingerprint = `${chatId}|${senderType}|${clientMessageId}`;

      if (isRecentDuplicate(fingerprint)) {
        return;
      }

      try {
        const res = await fetch("/api/factory/tawk/realtime", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatId,
            senderType,
            message: {
              msg: message,
              type: messagePayload?.type || "msg",
            },
            timestamp,
            clientMessageId,
          }),
        });

        if (!res.ok) {
          console.warn("[factory:tawk:frontend] realtime append failed", res.status);
        }
      } catch (error) {
        console.warn("[factory:tawk:frontend] realtime append error", error);
      }
    };

    const performControlledReset = () => {
      if (resetInProgressRef.current) {
        return;
      }

      resetInProgressRef.current = true;
      const api = window.Tawk_API || {};

      try {
        if (typeof api.endChat === "function") {
          api.endChat();
        }
      } catch (error) {
        console.warn("[factory:tawk:frontend] endChat reset failed", error);
      }

      setTimeout(() => {
        try {
          if (typeof api.hideWidget === "function") {
            api.hideWidget();
          }
        } catch (error) {
          console.warn("[factory:tawk:frontend] hideWidget failed", error);
        }
      }, 250);

      setTimeout(() => {
        try {
          if (typeof api.showWidget === "function") {
            api.showWidget();
          }
        } catch (error) {
          console.warn("[factory:tawk:frontend] showWidget failed", error);
        }
      }, 950);

      setTimeout(() => {
        resetInProgressRef.current = false;
      }, 3500);
    };

    const api = window.Tawk_API || {};
    if (api[FACTORY_CALLBACK_GUARD_KEY]) {
      return;
    }

    api.onChatMessageVisitor = (messagePayload) => {
      sendRealtimeMessage("visitor", messagePayload);
    };

    api.onChatMessageAgent = (messagePayload) => {
      sendRealtimeMessage("agent", messagePayload);
    };

    api.onChatStarted = () => {
      resetInProgressRef.current = false;
    };

    api.onChatEnded = () => {
      performControlledReset();
    };

    api[FACTORY_CALLBACK_GUARD_KEY] = true;
  }, []);

  return (
    <Script
      id="factory-tawkto-script"
      strategy="lazyOnload"
      src="https://embed.tawk.to/68e0e68ebe3099194f45662e/1j6n8986r"
      charSet="UTF-8"
      crossOrigin="*"
    />
  );
}
