"use client";
import Script from "next/script";

export default function TawkTo() {
  return (
    <Script
      id="tawkto-script"
      strategy="lazyOnload"
      src="https://embed.tawk.to/68e0e68ebe3099194f45662e/1j6n8986r"
      charSet="UTF-8"
      crossOrigin="*"
    />
  );
}
