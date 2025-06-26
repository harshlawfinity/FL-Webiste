"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is Pollution NOC required for small-scale units in Delhi?",
    answer:
      "Yes, if the unit emits any kind of pollution (air, water, hazardous waste), it must obtain the NOC.",
  },
  {
    question: "What is the difference between CTE and CTO?",
    answer:
      "CTE is required before setting up the unit, while CTO is required before actual operations begin.",
  },
  {
    question: "Who issues the Pollution NOC in Delhi?",
    answer: "It is issued by the Delhi Pollution Control Committee (DPCC).",
  },
  {
    question: "How long is the CTO valid?",
    answer:
      "The validity of CTO ranges from 1 to 5 years, depending on the industry type and DPCC’s discretion.",
  },
  {
    question: "Can I apply for both CTE and CTO together?",
    answer:
      "No, you must first obtain CTE, complete setup and then apply for CTO.",
  },
  {
    question: "What happens if I operate without Pollution NOC?",
    answer:
      "It is considered a serious offense and may lead to penalties, closure or legal action.",
  },
  {
    question: "Is renewal necessary?",
    answer:
      "Yes, failing to renew CTO before expiry can halt operations and attract fines.",
  },
  {
    question: "Can the NOC be cancelled?",
    answer:
      "Yes, if conditions are violated or if false information is provided.",
  },
  {
    question: "Does Lawfinity handle site inspection coordination?",
    answer:
      "Yes, Lawfinity coordinates with authorities and helps in preparation for site inspections.",
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
    <section className="bg-gradient-to-b from-[#f9f9ff] to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
          Frequently Asked Questions
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
                      className={`overflow-hidden px-6 transition-all duration-300 text-gray-600 text-base ${
                        openIndex === actualIndex
                          ? "max-h-96 pb-2"
                          : "max-h-0"
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
