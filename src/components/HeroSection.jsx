"use client";

import { useState } from "react";
import ContactFormModal from "./ContactFormModal";
import ContactForm from "./ContactForm";
import HeroClientActions from "./HeroClientActions";
import HeroRotatingBackground from "./HeroRotatingBackground";
import { SEO_ASSETS } from "@/lib/heroBackgrounds";

export default function HeroSection() {
  const heroBackgroundAlts = [
    "Factory License Renewal",
    "Factory License Registration",
    "Factory Registration Certificate",
  ];

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[600px] mt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* LCP image in server HTML — paints before client JS hydrates */}
        <img
          src={SEO_ASSETS.factoryLicenseRegistration}
          alt={heroBackgroundAlts[0]}
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <HeroRotatingBackground alts={heroBackgroundAlts} lcpOptimized />
      </div>

      <main className="relative z-20 w-full min-h-full flex items-center justify-center px-4 sm:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <article className="text-white w-full order-1">
            <h1 className="md:text-5xl text-4xl capitalize font-semibold md:mb-6 mb-2">
              Factory Licence Registration & Renewal Online in India – Apply Now
            </h1>
            <p className="text-sm mb-6 sm:mb-8">
              Establishing a new manufacturing operation or upgrading from an already existing
              operation, we ensure that your operations are 100% compliant with the
              government&apos;s set of regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <HeroClientActions />
            </div>
          </article>

          <div className="w-full order-2">
            <ContactForm />
          </div>
        </div>
      </main>
    </section>
  );
}
