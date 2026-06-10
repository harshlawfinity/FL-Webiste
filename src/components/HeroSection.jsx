"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactFormModal from "./ContactFormModal";
import ContactForm from "./ContactForm";
import bg1 from "../assets/f1.webp";
import bg2 from "../assets/f2.webp";
import bg3 from "../assets/f3.webp";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const heroBackgrounds = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[600px] mt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((img, index) => (
          <Image
            priority={index === 0}
            key={index}
            src={img}
            alt={`bg-${index}`}
            width={1920}
            height={1080}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentBg === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
      </div>

      <main className="relative z-20 w-full min-h-full flex items-center justify-center px-4 sm:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <article className="text-white w-full order-1">
            <h1 className="md:text-5xl text-4xl capitalize font-semibold md:mb-6 mb-2">
              Factory Licence Registration & Renewal Online in India – Apply Now
            </h1>
            <p className="text-sm   mb-6 sm:mb-8">
              Whether you're setting up a new manufacturing unit or updating an
              existing one, we ensure your operations are fully compliant with
              government regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Get Started
              </button>
            </div>
          </article>

          {/* Right: Contact form */}
          <div className="w-full order-2">
            <ContactForm />
          </div>
        </div>
      </main>

      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
}
