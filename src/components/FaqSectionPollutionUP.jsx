"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Q1. What is the cost of Uttar Pradesh Pollution Certificate?",
    answer: "The State Pollution Control Board charges a fee of Rs. 250 to Rs. 1 lac for the filing of the Consent to Establish, depending on the capital investment made by the Project Proponent. In addition, an annual renewal fee is charged, which is usually half the value of the initial application fee. The waste management authorisation is valid for 5 years.",
  },
  {
    question: "Q2. How Much time will it take to get an Uttar Pradesh Pollution Control Board NOC Certificate?",
    answer: "The time required to obtain a letter of consent or rejection is 120 days from the date of application.",
  },
  {
    question: "Q3. What is the UP Pollution Control Board?",
    answer: "The Uttar Pradesh Pollution Control Board (UPPCB) is a government agency responsible for controlling and monitoring pollution in the state of Uttar Pradesh, India. It was established in 1974 under the Water (Prevention and Control of Pollution) Act, 1974. The UPPCB is responsible for the implementation of various environmental laws and regulations, and for monitoring and controlling pollution in the state.",
  },
  {
    question: "Q4. What is H-category (UPPCB Categories)?",
    answer: "H-category is a classification of industries in Uttar Pradesh that are considered to be highly polluting. These industries are subject to more stringent regulations and monitoring by the UPPCB. Industries in this category include chemical, petrochemical, pharmaceutical, and fertiliser plants.",
  },
  {
    question: "Q5. Does UPPCB grant consent to the industrial units located in a non-conforming area?",
    answer: "No, the UPPCB does not grant consent to the industrial units located in non-conforming areas. Non-conforming areas are locations that are not suitable for industrial activities due to their proximity to residential areas, water bodies, or other sensitive areas.",
  },
  {
    question: "Q6. How much time does UPPCB take in deciding an application for consent to Establish/ Operate?",
    answer: "The UPPCB usually takes around 30 days to decide on an application for consent to Establish/ Operate. However, this may vary depending on the complexity of the application and the availability of resources.",
  },
  {
    question: "Q7. What is the validity of the UP Pollution Control Certificate or the UPPCB Certificate?",
    answer: "The UP Pollution Control Certificate or the UPPCB Certificate is valid for a period of five years from the date of issue.",
  },
  {
    question: "Q8. Who requires a UP Pollution Control Certificate?",
    answer: "Any industrial unit located in the state of Uttar Pradesh that is engaged in activities that may cause pollution is required to obtain a UP Pollution Control Certificate from the UPPCB.",
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
