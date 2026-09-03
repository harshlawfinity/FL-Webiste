"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Can a business operate without a CTO?",
    answer: "No. Operating without a valid CTO is illegal and can lead to immediate shutdown and penalties.",
  },
  {
    question: "How long is the Pollution NOC valid?",
    answer: "CTO is typically valid for 1 to 5 years, depending on the industry category.",
  },
  {
    question: "What are the consequences of a delay in renewal?",
    answer: "Delay can result in a penalty, cancellation of the existing license and legal proceedings.",
  },
  {
    question: "Does an IT company need a Pollution NOC?",
    answer: "Usually, IT companies fall under the white category, which may not require a NOC, but this depends on activities and location.",
  },
  {
    question: "What if my unit is already in operation without an NOC?",
    answer: "You must apply immediately. Lawfinity can assist with legal rectification and compliance regularisation.",
  },
  {
    question: "What is HSPCB?",
    answer: "The Haryana State Pollution Control Board (HSPCB) is a statutory body of the Government of Haryana in India, established to protect the environment and to control pollution in the state. It is responsible for the implementation of various environmental laws and regulations in the state. The board is headed by a Chairman, who is appointed by the Government of Haryana. The board is also responsible for issuing environmental clearances for various projects in the state.",
  },
  {
    question: "What are the Benefits of HSPCB?",
    answer: "The Haryana State Pollution Control Board (HSPCB) provides a number of benefits to the citizens of Haryana. These include protecting the environment, controlling pollution, and ensuring sustainable development through the implementation of environmental laws.",
  },
  {
    question: "What is the H-category (HSPCB Categories)?",
    answer: "H-category is a classification system used by the Haryana State Pollution Control Board (HSPCB) to categorise industries based on their pollution potential. Industries are classified into four categories: H1, H2, H3 and H4. H1 industries are those that have the highest potential to cause pollution, while H4 industries are those that have the least potential to cause pollution.",
  },
  {
    question: "How has the HSPCB classified its Industrial activities?",
    answer: "The Haryana State Pollution Control Board (HSPCB) has classified its industrial activities into four categories: H1, H2, H3 and H4. H1 industries are those that have the highest potential to cause pollution, while H4 industries are those that have the least potential to cause pollution. The classification is based on the type of activity, the amount of pollution generated, and the potential for environmental damage.",
  },
  {
    question: "Does HSPCB grant consent to the industrial units located in a non-conforming area?",
    answer: "No, the Haryana State Pollution Control Board (HSPCB) does not grant consent to the industrial units located in non-conforming areas. Non-conforming areas are those areas which are not suitable for industrial activities due to their proximity to residential areas, water bodies, or other sensitive areas.",
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
    <section id="faqs" className="bg-gradient-to-b from-[#f9f9ff] to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Pollution NOC Haryana FAQ heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
          Frequently Asked Questions For Pollution NOC in Haryana
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
