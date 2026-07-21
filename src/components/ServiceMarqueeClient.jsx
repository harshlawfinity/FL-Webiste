"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Client marquee: slow auto-scroll + left/right arrows (one chip per click).
 * Receives one "half" of items from the server; duplicates for a seamless loop.
 */
export default function ServiceMarqueeClient({ services }) {
  const viewportRef = useRef(null);
  const pausedRef = useRef(false);
  const snappingRef = useRef(false);
  const resumeTimerRef = useRef(null);

  // Two identical halves — when scroll hits halfway, jump back for a circular loop.
  const marqueeItems = [...services, ...services];

  const wrapScroll = () => {
    if (snappingRef.current) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const half = viewport.scrollWidth / 2;
    if (half <= 0) return;
    if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
    if (viewport.scrollLeft < 0) viewport.scrollLeft += half;
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onScroll = () => wrapScroll();
    viewport.addEventListener("scroll", onScroll, { passive: true });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => viewport.removeEventListener("scroll", onScroll);
    }

    // ~25px/s — slower than the previous 22s CSS loop.
    const id = window.setInterval(() => {
      if (pausedRef.current || snappingRef.current) return;
      viewport.scrollLeft += 1;
      wrapScroll();
    }, 40);

    return () => {
      window.clearInterval(id);
      viewport.removeEventListener("scroll", onScroll);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // ScrollLeft needed to align a chip's left edge with the viewport's left edge.
  const scrollLeftForChip = (chip) => {
    const viewport = viewportRef.current;
    return (
      chip.getBoundingClientRect().left -
      viewport.getBoundingClientRect().left +
      viewport.scrollLeft
    );
  };

  // One click snaps exactly one chip left/right into view.
  const scrollByDir = (dir) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const chips = Array.from(
      viewport.querySelectorAll(".service-marquee-track > a")
    );
    if (!chips.length) return;

    const half = viewport.scrollWidth / 2;
    const current = viewport.scrollLeft;
    const epsilon = 4;

    // Pause auto-scroll while the user is nudging chips.
    pausedRef.current = true;
    snappingRef.current = true;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);

    // Near loop edges, jump by one half so the next/prev chip still exists ahead.
    if (dir < 0 && current < 8 && half > 0) {
      viewport.scrollLeft = current + half;
    } else if (dir > 0 && half > 0 && current > half - 8) {
      viewport.scrollLeft = current - half;
    }

    const liveCurrent = viewport.scrollLeft;
    let targetChip = null;

    if (dir > 0) {
      targetChip = chips.find(
        (chip) => scrollLeftForChip(chip) > liveCurrent + epsilon
      );
    } else {
      for (let i = chips.length - 1; i >= 0; i -= 1) {
        if (scrollLeftForChip(chips[i]) < liveCurrent - epsilon) {
          targetChip = chips[i];
          break;
        }
      }
    }

    if (!targetChip) {
      snappingRef.current = false;
      resumeTimerRef.current = window.setTimeout(() => {
        pausedRef.current = false;
      }, 400);
      return;
    }

    viewport.scrollTo({
      left: scrollLeftForChip(targetChip),
      behavior: "smooth",
    });

    // Re-enable wrap + auto-scroll after the smooth snap finishes.
    resumeTimerRef.current = window.setTimeout(() => {
      snappingRef.current = false;
      wrapScroll();
      // Keep paused if pointer is still over the viewport.
      const hovered = viewport.matches(":hover") || viewport.contains(document.activeElement);
      if (!hovered) pausedRef.current = false;
    }, 450);
  };

  return (
    <div className="relative flex items-center gap-2 md:gap-3">
      <button
        type="button"
        aria-label="Scroll services left"
        onClick={() => scrollByDir(-1)}
        className="shrink-0 z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#7A3EF2]/30 bg-white text-[#7A3EF2] shadow-sm transition-colors hover:bg-[#7A3EF2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>

      <div
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label="Our more services carousel"
        className="service-marquee-viewport relative min-w-0 flex-1 overflow-x-auto overscroll-x-contain scroll-smooth"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!snappingRef.current) pausedRef.current = false;
        }}
        onFocus={() => {
          pausedRef.current = true;
        }}
        onBlur={() => {
          if (!snappingRef.current) pausedRef.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollByDir(-1);
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollByDir(1);
          }
        }}
      >
        <div className="service-marquee-track flex w-max items-center gap-3 md:gap-4 py-1">
          {marqueeItems.map((service, index) => (
            <Link
              key={`${service.slug}-${index}`}
              href={service.href}
              className="shrink-0 rounded-full border border-[#7A3EF2]/30 bg-white px-4 py-2 text-sm font-medium text-[#7A3EF2] shadow-sm transition-colors hover:border-[#7A3EF2] hover:bg-[#7A3EF2] hover:text-white"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll services right"
        onClick={() => scrollByDir(1)}
        className="shrink-0 z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#7A3EF2]/30 bg-white text-[#7A3EF2] shadow-sm transition-colors hover:bg-[#7A3EF2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
