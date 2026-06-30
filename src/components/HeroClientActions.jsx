"use client";

import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

/** Client-only hero CTA — keeps HeroSection as a server component for faster LCP. */
export default function HeroClientActions() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowPopup(true)}
        className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Get Started
      </button>
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
