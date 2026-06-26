"use client"
import { ArrowRight } from 'lucide-react';
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";

export default function HowItWorks() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div>
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
              How we Work
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
              How Our Licensing Services Work
            </h2>
            <p className="mt-4 text-gray-600">
              We help you simplify your licensing expedition in alignment with your manufacturing unit with a simple, guided, and efficient process. However, before proceeding, you just need to follow these simple steps:
            </p>
            <button onClick={() => setShowPopup(true)}
              className="mt-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#642bd5d5] to-[#642bd5] text-white font-medium rounded-full shadow-lg hover:scale-105 transition">
              Let&apos;s get started
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Section – Timeline */}
          <div className="space-y-10 relative">
            {[
              {
                title: 'Identify Your Licence Type',
                desc: 'You need to choose the right licence type based on your industry and manufacturing needs.',
              },
              {
                title: 'Schedule a Consultation',
                desc: 'Book a call with our legal expert to fully understand the process and requirements.',
              },
              {
                title: 'Submit Documentation',
                desc: 'You will need to provide all the necessary documents to our team for further processing of your manufacturing license.',
              },
              {
                title: 'Receive Your Factory Licence',
                desc: 'Get your licence delivered digitally once approved by the authorities.',
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-4 h-4 mt-1 bg-gradient-to-br from-[#642bd5] to-purple-600 rounded-md"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 mt-1 text-justify">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
