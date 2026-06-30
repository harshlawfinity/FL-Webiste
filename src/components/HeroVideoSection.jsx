"use client";

import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { SEO_ASSETS } from "@/lib/heroBackgrounds";
import HeroVideoPlayer from "./HeroVideoPlayer";

export default function HeroVideoSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <figure className="w-full max-w-4xl mx-auto">
          <HeroVideoPlayer
            preview={
              <img
                src={SEO_ASSETS.factoryLicenceVideoPreview}
                alt="Factory Licence Video Preview"
                className="absolute inset-0 w-full h-full object-cover"
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
              />
            }
          />
        </figure>
      </div>
    </section>
  );
}
