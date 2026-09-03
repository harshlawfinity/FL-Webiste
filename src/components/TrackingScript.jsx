"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TrackingScript() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const popStateEvent = new PopStateEvent('popstate', { state: null });
      window.dispatchEvent(popStateEvent);
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined" || document.getElementById("lawfinity-monitor-script")) {
      return;
    }

    // Keep analytics off the critical path; PageSpeed counts early third-party work against LCP/TBT.
    const loadTracking = () => {
      const script = document.createElement("script");
      script.id = "lawfinity-monitor-script";
      script.src = "https://monitor.lawfinity.in/track.js";
      script.async = true;
      script.dataset.siteId = "6989a124a57940eaf353783f";
      script.dataset.siteName = "http://factorylicence.in/";
      script.dataset.debug = "false";
      document.body.appendChild(script);
    };

    const timer = window.setTimeout(loadTracking, 4500);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}

