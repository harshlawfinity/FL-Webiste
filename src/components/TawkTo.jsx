"use client";
import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    if (document.getElementById("tawkto-script")) return;

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/68e0e68ebe3099194f45662e/1j6n8986r";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.body.appendChild(s1);

    return () => {
      s1.remove();
    };
  }, []);

  return null;
}
