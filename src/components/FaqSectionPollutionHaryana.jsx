"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between CTE and CTO in Haryana?",
    answer: "CTE is required before setting up your project; CTO is needed before starting operations.",
  },
  {
    question: "Who issues Pollution NOC in Haryana?",
    answer: "The Haryana State Pollution Control Board (HSPCB) is the authority for granting Pollution NOCs.",
  },
  {
    question: "Is Pollution NOC required for all industries?",
    answer: "Yes, especially those falling under red orange or green categories as defined by HSPCB.",
  },
  {
    question: "Can a business operate without CTO?",
    answer: "No. Operating without a valid CTO is illegal and can lead to immediate shutdown and penalties.",
  },
  {
    question: "How long is the Pollution NOC valid?",
    answer: "CTO is typically valid for 1 to 5 years, depending on the industry category.",
  },
  {
    question: "Can Lawfinity help with NOC renewal?",
    answer: "Yes, Lawfinity assists with new applications, renewals, modifications and compliance documentation.",
  },
  {
    question: "What are the consequences of delay in renewal?",
    answer: "Delay can result in penalty, cancellation of existing license and legal proceedings.",
  },
  {
    question: "Does an IT company need Pollution NOC?",
    answer: "Usually, IT companies fall under the white category, which may not require a NOC, but this depends on activities and location.",
  },
  {
    question: "What if my unit is already in operation without a NOC?",
    answer: "You must apply immediately. Lawfinity can assist with legal rectification and compliance regularization.",
  },
];

export default function FaqSectionPollutionHaryana() {
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
                        openIndex === actualIndex ? "max-h-96 pb-2" : "max-h-0"
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
