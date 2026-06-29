"use client";

import { useEffect, useState } from "react";
import { HERO_BACKGROUND_IMAGES } from "@/lib/heroBackgrounds";

export default function HeroRotatingBackground({
  alts = [],
  images = HERO_BACKGROUND_IMAGES,
  intervalMs = 2000,
}) {
  const [currentBg, setCurrentBg] = useState(0);
  // Load extra slides after first paint so LCP image is not competing for bandwidth.
  const [loadAllSlides, setLoadAllSlides] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [images.length, intervalMs]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoadAllSlides(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => {
        if (index > 0 && !loadAllSlides) return null;

        return (
          <img
            key={src}
            src={src}
            alt={alts[index] || `Hero background ${index + 1}`}
            width={1920}
            height={1080}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentBg === index ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
    </div>
  );
}
