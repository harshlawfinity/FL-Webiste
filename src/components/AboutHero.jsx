"use client"

import { useState, lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";
 
// Lazy load ContactForm
import ContactForm from "@/components/ContactForm";
export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  md:pt-60 pt-40 pb-20 bg-gradient-to-b from-white via-[#642bd542] to-white text-center px-4">
      <h1 className="text-4xl max-w-4xl md:text-5xl font-semibold text-gray-900 capitalize">
         Your most trusted partner for all the services  setup to business management
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
       We provide a comprehensive and tailored support to make sure that your business journey remains smooth and shiny. </p>
      <button                 onClick={() => setShowPopup(true)}
 className="mt-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#642bd5] to-purple-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transition">
        Get Started
        <ArrowRight size={20} />
      </button>

      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-gray-50 p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-4xl"
              aria-label="Close contact form"
            >
              ×
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
