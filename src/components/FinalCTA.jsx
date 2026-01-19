"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function FinalCTA() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="rounded-[2rem] mx-4 md:mx-20 my-12 bg-gradient-to-r from-purple-500 to-[#642bd5] text-white text-center py-20 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Launch Your Licenced Factory?
          </h2>
          <button
            onClick={() => setShowPopup(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-medium rounded-full shadow-md hover:scale-105 transition"
          >
            Get Started Now
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
