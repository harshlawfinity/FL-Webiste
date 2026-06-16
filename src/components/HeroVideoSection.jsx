"use client";

import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { SEO_ASSETS } from "@/lib/heroBackgrounds";

const VIDEO_ID = "BxMLFYIWyxE";
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

export default function HeroVideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <figure className="w-full max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/9] bg-black rounded-xl overflow-hidden flex items-center justify-center shadow-xl">
            {!showVideo ? (
              <>
                {/* Only thumbnail loads; video does not play until user clicks */}
                <img
                  src={SEO_ASSETS.factoryLicenceVideoPreview}
                  alt="Factory Licence Video Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                  width={1280}
                  height={720}
                  loading="eager"
                  fetchPriority="high"
                />
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black/50 z-10 rounded-xl hover:bg-black/40 transition"
                  aria-label="Play video"
                >
                  <FaYoutube size={80} color="red" />
                </button>
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={VIDEO_EMBED_URL}
                title="Factory Licence Walkthrough"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            )}
          </div>
        </figure>
      </div>
    </section>
  );
}
