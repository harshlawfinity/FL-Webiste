"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the role of UPPCB in Pollution NOC?",
    answer:
      "The Uttar Pradesh Pollution Control Board regulates pollution norms and grants the necessary CTE and CTO for businesses.",
  },
  {
    question: "Is Pollution NOC needed for small businesses?",
    answer:
      "Yes, if the business generates any form of pollution or waste, even small units under Orange or Green categories need NOC.",
  },
  {
    question: "What is the validity of CTO?",
    answer:
      "CTO is valid for 1 to 5 years based on the category of industry and UPPCB norms.",
  },
  {
    question: "Can Lawfinity help with renewal?",
    answer:
      "Absolutely. Lawfinity provides assistance with new applications, modifications and timely renewals.",
  },
  {
    question: "Is Pollution NOC different for each state?",
    answer:
      "Yes, procedures and documents vary slightly. UPPCB has its own guidelines distinct from Delhi or Haryana.",
  },
  {
    question: "What happens if I delay my application?",
    answer:
      "Delays can lead to late fees, legal notices or denial of other licenses. Timely filing is critical.",
  },
  {
    question: "What is the difference between red orange, green categories?",
    answer:
      "They represent the pollution level of your industry—Red being high, Orange medium, Green low and White negligible.",
  },
  {
    question: "Can Pollution NOC be applied online in UP?",
    answer:
      "Yes, the entire application and tracking process is conducted online via the UPPCB portal.",
  },
  {
    question: "Is inspection always mandatory?",
    answer:
      "Usually, yes. UPPCB often conducts site inspections before granting CTO, especially for red and orange category units.",
  },
];

export default function FaqSectionPollutionUp() {
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
