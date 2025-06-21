import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { useState } from "react";
export default function FinalCTA() {
  const [showPopup, setShowPopup] = useState(false);

  return (
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
    </section>
  );
}
