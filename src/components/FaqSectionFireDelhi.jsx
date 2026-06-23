"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is Fire NOC mandatory for residential buildings in Delhi?",
    answer: "Yes, for residential buildings exceeding 18 meters in height, a Fire NOC is mandatory.",
  },
  {
    question: "How long is a Fire NOC valid?",
    answer: "Fire NOC is usually valid for 3 to 5 years, depending on the type of building. It must be renewed before expiration.",
  },
  {
    question: "Is the online application mandatory?",
    answer: "Yes, applications in Delhi must be filed online via the Delhi Fire Service portal.",
  },
  {
    question: "What kind of buildings need a Fire NOC?",
    answer: "High-rise buildings, commercial establishments, hospitals, hotels, malls, factories and auditoriums must obtain it.",
  },
  {
    question: "Can I operate my business without a Fire NOC?",
    answer: "No, operating without it is illegal and could result in fines or business closure.",
  },
  {
    question: "What if fire equipment is installed but not functional?",
    answer: "Non-functional equipment is treated as non-compliance. Factorylicence.in ensures testing and verification before DFS inspection.",
  },
  {
    question: "How do I apply for a Fire License in Delhi?",
    answer: "To apply for a Fire License in Delhi, download Form I from the official Delhi Fire Service portal, fill it out, and submit it with the required documents like the approved building plan, fire safety checklist, affidavit, structural stability certificate, and ownership proof in the prescribed format. After submitting and paying the fee (if required), your premises will be inspected, and if compliant, the Fire License will be issued.",
  },
  {
    question: "How much does it cost to get a Fire License in Delhi?",
    answer: "While the Delhi Fire Department does not charge any government fees for issuing a Fire License, you will need to pay a professional fee if you hire a consultant to handle the application. The cost depends on your building type and documentation requirements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section id="faqs" className="bg-gradient-to-b from-[#f9f9ff] to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Fire NOC Delhi FAQ heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
          Frequently Asked Questions For Fire NOC in Delhi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[firstHalf, secondHalf].map((half, colIdx) => (
            <div key={colIdx} className="space-y-5">
              {half.map((faq, index) => {
                const actualIndex = colIdx === 0 ? index : index + mid;
                return (
                  <div
                    key={actualIndex}
                    className="bg-white rounded-xl shadow transition-all duration-300 ease-in-out"
                  >
                    <button
                      onClick={() => toggle(actualIndex)}
                      className="w-full flex justify-between items-center text-left px-6 py-5 sm:py-3 font-medium text-gray-800 hover:text-[#7A3EF2] focus:outline-none"
                    >
                      <span className="text-base">{faq.question}</span>
                      {openIndex === actualIndex ? (
                        <ChevronUp className="text-[#7A3EF2]" />
                      ) : (
                        <ChevronDown className="text-gray-400" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden px-6 transition-all duration-300 text-gray-600 text-base ${openIndex === actualIndex ? "max-h-96 pb-2" : "max-h-0"
                        }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
