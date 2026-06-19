"use client"
import { useState } from 'react';

import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How to pay factory license fee online",
    answer:
      "You can pay the factory license fee online through the respective State Labour Department or Factory Inspectorate official portal. After logging in, select the factory license service, enter the required details, and proceed to the online payment option using net banking, debit card, or other available payment methods. Once the payment is successful, you can download the payment receipt for future reference.",
  },
  {
    question: "How to renew factory license online",
    answer:
      "To renew a factory license online, visit the official factory licensing portal of your state and log in using your registered credentials. Fill in the renewal application form, upload the required documents, and pay the applicable renewal fee online. After submission, the application will be processed by the concerned authority, and the renewed license can be downloaded once approved.",
  },
  {
    question: "How to renew factory license online Delhi",
    answer:
      "For Delhi, you can renew the factory license online through the Delhi Labour Department's official website. Log in to the portal, choose the factory license renewal option, update factory details, upload mandatory documents, and pay the renewal fee online. After verification by the department, the renewed factory license will be issued digitally.",
  },
  {
    question: "How to apply for factory licence",
    answer:
      "To apply for a factory licence, you need to register on the State Labour Department or Factory Inspectorate portal. Fill out the application form, provide factory details, upload necessary documents such as layout plans and identity proofs, and pay the prescribed government fee. After inspection and approval by the authorities, the factory licence is granted.",
  },
  {
    question: "How to apply for factory license in Delhi",
    answer:
      "To apply for a factory license in Delhi, you must submit an online application through the Delhi Labour Department portal. The process includes registering on the portal, completing the application form, uploading required documents, and paying the government fee. Once the application is reviewed and the factory inspection is completed, the factory license is issued by the concerned department.",
  },
  {
    question: "Is a factory licence required for small-scale manufacturing units?",
    answer:
      "Yes, if the unit employs 10 or more workers with power or 20 or more without power.",
  },
  {
    question: "What is the validity of a factory licence?",
    answer:
      "Typically valid for 1 year; some states offer up to 5 years with renewal options.",
  },
  {
    question: "Can Factory Licence.in help with inspections and renewals?",
    answer:
      "Yes, we offer end-to-end support, including pre-inspection readiness and timely renewal services.",
  },
  {
    question: "Are fire and pollution NOCs mandatory?",
    answer:
      "Yes, especially for medium to large factories or those involved in chemical or hazardous production.",
  },
  {
    question: "Who issues the Factory Licence in Delhi?",
    answer: "The Labour Department, Government of NCT of Delhi.",
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
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
          FAQs
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
                        openIndex === actualIndex ? 'max-h-96 pb-4' : 'max-h-0'
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
