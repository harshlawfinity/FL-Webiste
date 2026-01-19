"use client";

import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function CallToActionSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-b border-2 py-24 text-center text-[#8753F4]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Talk</h2>
        <button
          onClick={() => setShowPopup(true)}
          className="border-2 bg-gradient-to-b from-[#8753F4] to-[#8753F4] border-white px-6 py-2 rounded-full text-white font-semibold hover:bg-white hover:text-[#8753F4] transition"
        >
          Contact Us
        </button>
      </div>
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
