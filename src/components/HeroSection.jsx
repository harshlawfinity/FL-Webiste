"use client";

import ContactForm from "./ContactForm";
import HeroClientActions from "./HeroClientActions";
import HeroRotatingBackground from "./HeroRotatingBackground";
import { HERO_BACKGROUND_IMAGES } from "@/lib/heroBackgrounds";

export default function HeroSection() {
  // Same 3 hero slides + rotation pattern as state landing pages (direct /assets URLs).
  const heroBackgroundAlts = [
    "Factory License Registration",
    "Factory License Renewal",
    "Factory Registration Certificate",
  ];

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[600px] mt-20 overflow-hidden">
      <HeroRotatingBackground
        alts={heroBackgroundAlts}
        images={HERO_BACKGROUND_IMAGES}
      />

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
