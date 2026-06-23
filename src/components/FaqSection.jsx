"use client"
import { useState } from 'react';

import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How to pay factory license fee online?",
    answer:
      "Factory licence fee can normally be remunerated at the relative State Labour Department or Factories and Boilers Department portal. On submitting the application, the applicants may opt for online payment mode, which will be possible through net banking, UPI, debit card, and credit card.",
  },
  {
    question: "How to renew fire license online?",
    answer:
      "For fire license renewal online, you need to go to the concerned states authority portal, log in to the portal and upload updated documents, then pay the renewals fee and submit the renewals application ahead of the expiry date of the licence.",
  },
  {
    question: "How can I apply for a factory licence?",
    answer:
      "In case you want to know, how to obtain factory license, applicants need to get building plan clearance, fill out paperwork, upload documents, pay the fee, and undergo the inspections carried out by the Competent Authority.",
  },
  {
    question: "What is factory license in india?",
    answer:
      "Factory license is a licence granted in the name of a factory unit, say pollution board certificate for clinic, which has been granted under the Factories Act based on the statutory requirement with the condition that a factory unit should run and operate its operations under the condition as laid out in the Factories Act as labour welfare, health, safety, and environmental regulations.",
  },
  {
    question: "How to register factory license?",
    answer:
      "The process of obtaining a factory licence involves making an application to the appropriate Labour Department, giving factory information, getting approval, conducting inspections and obtaining a factory licence following an inspection.",
  },
  {
    question: "How to get factory license?",
    answer:
      "To get a factory licence, all legal factory license requirements must be met, the required documentation is prepared and necessary NOCs obtained, payment of the government fees, and a successful inspection will follow.",
  },
  {
    question: "What is the validity of a factory licence?",
    answer:
      "The validity of a factory licence is dependent upon State legislation. Most States offer one-year, periodic licences with some States offering multi-year licences.",
  },
  {
    question: "Is a factory licence required for small-scale manufacturing units?",
    answer:
      "Yes, it would be mandatory to get factory licence for all businesses even if the manufacturing unit has fewer number of employees and does not have adequate operational requirements as per the Factories Act, 1948.",
  },
  {
    question: "Can I operate my factory while the application is pending?",
    answer:
      "In general, only manufacturing is to be started once all necessary permissions have been issued by the competent body. Acting without authorization could result in fines and legal action.",
  },
  {
    question: "Are fire and pollution NOCs mandatory?",
    answer:
      "Yes, if this is the case based on the size, scope, and location of the factory. Getting and maintaining factory licence compliance is often dependent on the approvals of Fire NOC and Pollution Control Board.",
  },
  {
    question: "What are the documents required for fire safety certificate?",
    answer:
      "In order to get Fire Safety Certificate (or Fire NOC), one requires building layout plans, proof of property ownership, building stability certificate, and evidence of installation of fire safety equipment. The requirements may differ according to local municipalities and building type.",
  },
  {
    question: "How to get NOC from pollution control board?",
    answer:
      "To obtain a No Objection Certificate (NOC) and to fill the online application for pollution control board, you need to go for pollution noc apply from your State Pollution Control Board (SPCB) or Pollution Control Committee (e.g., DPCC in Delhi). You must apply for two mandatory consents online: Consent to Establish (CTE) before setting up your unit, and Consent to Operate (CTO) before starting production. The next step is to fill the form, upload the required documents, and pay the pollution noc fees that is asked in the registration portal.",
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
        {/* Homepage FAQ heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
          Frequently Asked Questions For Factory Licence
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
