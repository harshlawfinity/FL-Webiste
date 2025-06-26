


"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

 const faqs = [
    {
      question: "Is Fire NOC mandatory in Haryana for residential buildings?",
      answer: "Yes, it is mandatory for buildings over 15 meters in height or with more than 12 dwelling units.",
    },
    {
      question: "How long is a Fire NOC valid in Haryana?",
      answer: "Usually valid for 3 to 5 years, after which it must be renewed depending on the nature of the building.",
    },
    {
      question: "Can Lawfinity assist in Fire NOC renewals?",
      answer: "Yes, Lawfinity provides full support for new Fire NOC applications as well as renewal and modification requests.",
    },
    {
      question: "What happens if fire systems are found non-functional during inspection?",
      answer: "The application may be rejected and rectifications must be made. Lawfinity helps in upgrading and reinspection.",
    },
    {
      question: "Can I get Fire NOC before completion of construction?",
      answer: "A provisional NOC may be obtained in some cases. Lawfinity can advise and facilitate based on your project stage.",
    },
    {
      question: "Is it necessary to install specific equipment for getting Fire NOC?",
      answer: "Yes, mandatory equipment includes fire alarms, extinguishers, sprinkler systems, emergency exits, etc.",
    },
    {
      question: "What is the inspection process like?",
      answer: "An official from the Fire Department physically visits and checks all installed systems based on your submitted plans.",
    },
    {
      question: "Do I need architect involvement?",
      answer: "Yes, an architect’s certificate confirming compliance with fire safety norms is required.",
    },
    {
      question: "What if the building is already occupied without a Fire NOC?",
      answer: "This is a serious offense and may lead to penalties or sealing. Lawfinity can assist with post-occupancy compliance solutions.",
    },
  ];

export default function FaqSectionFireNoc() {
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
