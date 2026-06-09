"use client";

import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";
import { PhoneCall } from "lucide-react";

const PHONE_NUMBER = "+919999704687";
const PHONE_DISPLAY = "+91 99997 04687";

export default function FloatingGetStartedButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile: fixed bottom bar with Get Started + call */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-[#7A3EF2] text-white font-semibold py-3.5 rounded-full shadow-lg hover:bg-[#6b2ee8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2"
            aria-label="Get Started - Open contact form"
          >
            Get Started
          </button>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex-shrink-0 w-12 h-12 bg-[#7A3EF2] text-white rounded-full shadow-lg hover:bg-[#6b2ee8] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <PhoneCall size={22} />
          </a>
        </div>
      </div>

      {/* Desktop: floating phone button on the right */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="hidden md:flex fixed bottom-6 right-0 z-40 bg-[#7A3EF2] text-white rounded-l-full shadow-lg hover:bg-[#6b2ee8] transition-colors items-center justify-center w-14 h-14 focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2"
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        <PhoneCall size={24} />
      </a>

      <ContactFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
