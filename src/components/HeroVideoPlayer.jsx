"use client";

import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const VIDEO_ID = "BxMLFYIWyxE";
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

/** Client-only play/iframe toggle — preview image stays server-rendered to avoid hydration mismatch. */
export default function HeroVideoPlayer({ preview }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] bg-black rounded-xl overflow-hidden flex items-center justify-center shadow-xl">
      {!showVideo ? (
        <>
          {preview}
          <button
            type="button"
            onClick={() => setShowVideo(true)}
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
  );
}
