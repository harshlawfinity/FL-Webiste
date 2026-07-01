"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_BACKGROUND_IMAGES } from "@/lib/heroBackgrounds";

/**
 * Rotating hero backgrounds with purple gradient overlay.
 * @param {boolean} lcpOptimized — homepage only: slide 1 is SSR'd outside; this renders slides 2+ and the gradient.
 */
export default function HeroRotatingBackground({
  alts = [],
  images = HERO_BACKGROUND_IMAGES,
  intervalMs = 2000,
  lcpOptimized = false,
}) {
  const [currentBg, setCurrentBg] = useState(0);
  const [loadAllSlides, setLoadAllSlides] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || !loadAllSlides) return;

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [images.length, intervalMs, loadAllSlides]);

  useEffect(() => {
    // Defer non-LCP carousel slides so the first hero image gets network priority.
    const timer = window.setTimeout(() => setLoadAllSlides(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  const gradient = (
    <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
  );

  const renderImage = (src, index, { eager = false } = {}) => (
    <Image
      key={src}
      src={src}
      alt={alts[index] || `Hero background ${index + 1}`}
      fill
      sizes="100vw"
      priority={eager}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ease-in-out ${
        currentBg === index ? "opacity-100" : "opacity-0"
      }`}
    />
  );

  // Homepage: base slide is server-rendered; only overlay slides + gradient here.
  if (lcpOptimized) {
    return (
      <>
        {images.slice(1).map((src, index) => {
          const slideIndex = index + 1;
          if (!loadAllSlides) return null;
          return renderImage(src, slideIndex);
        })}
        {gradient}
      </>
    );
  }

  // Landing pages: full hero stack (positioning wrapper, all slides, gradient).
  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => {
        if (index > 0 && !loadAllSlides) return null;
        return renderImage(src, index, { eager: index === 0 });
      })}
      {gradient}
    </div>
  );
}
