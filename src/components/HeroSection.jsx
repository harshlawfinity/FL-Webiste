"use client";

import { useState } from "react";
import ContactFormModal from "./ContactFormModal";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[600px] mt-20 overflow-hidden bg-[#7c4bdf]">
      <main className="w-full min-h-full flex items-center justify-center px-4 sm:px-6 py-8 md:py-12">
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
