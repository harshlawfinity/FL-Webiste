"use client";

import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";
import { FaArrowRight } from "react-icons/fa";

export default function FloatingGetStartedButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#7A3EF2] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-[#6b2ee8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2 animate-bounce-gentle flex items-center gap-2"
        aria-label="Get Started - Open contact form"
      >
        Get Started <FaArrowRight size={15} />
      </button>
      <ContactFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
