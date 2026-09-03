"use client";

import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { SEO_ASSETS } from "@/lib/heroBackgrounds";
import HeroVideoPlayer from "./HeroVideoPlayer";

export default function HeroVideoSection() {
  return (
    <section className="w-full py-6 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <figure className="w-full max-w-4xl mx-auto">
          <HeroVideoPlayer
            preview={<Image
              src={SEO_ASSETS.factoryLicenceVideoPreview}
              alt="Factory Licence Video Preview"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />}
          />
        </figure>
      </div>
    </section>
  );
}
