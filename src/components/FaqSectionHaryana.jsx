import { lazy, useState } from 'react';
const ChevronDown = lazy(() =>
  import('lucide-react').then((mod) => ({ default: mod.ChevronDown }))
);

const ChevronUp = lazy(() =>
  import('lucide-react').then((mod) => ({ default: mod.ChevronUp }))
);
const faqs = [
  {
    question: "Who issues the Factory License in Haryana?",
    answer: "It is issued by the Department of Labour, Government of Haryana.",
  },
  {
    question: "Who must apply for a Factory License?",
    answer: "Any unit with 10+ workers (with power) or 20+ workers (without power) typically needs to register and obtain a Factory License in Haryana",
  },
  {
    question: "How long does it take to get a Factory License in Haryana?",
    answer: "Generally, 15–30 working days, depending on document readiness and inspections.",
  },
  {
    question: "What documents do I need for a Factory License in Haryana?",
    answer: "Key documents include approved plans, ownership/lease proof, electricity/load proof, pollution consent (if applicable), occupier nomination, and safety policy for hazardous processes.",
  },
  {
    question: "How long is a Factory License valid, and how is renewal handled?",
    answer: "Usually 1–5 years; it must be renewed before expiry. You have to pay license fees for a selected number of years at the time of applying for a factory license.",
  },
  {
    question: "What happens if I operate without a Factory License?",
    answer: "Operating without a valid factory license can lead to fines, legal action, and potential closure until compliance is met.",
  },
  {
    question: "Labour Department Haryana Registration Certificate download process.",
    answer: "The Labour Department Haryana Registration Certificate download involves logging into the official hrylabour.gov.in portal, finding your approved application (like for Contract Labour or Shop Act registration), and downloading the final certificate directly from the system after online submission, payment, and processing. Steps: 1. Visit Portal (hrylabour.gov.in) 2. Log In 3. Locate Your Application 4. Download.",
  },
  {
    question: "Is the process online or offline?",
    answer: "Most states, including Haryana, offer online applications and processing.",
  },
  {
    question: "Can factorylicence.in help with inspections and renewals?",
    answer: "Yes, we offer end-to-end support, including pre-inspection readiness and timely renewal services.",
  },
  {
    question: "Are fire and pollution NOCs mandatory?",
    answer: "Yes, especially for medium to large factories or those involved in chemical or hazardous production.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Split the FAQs into two halves
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
                      className={`overflow-hidden px-6 transition-all duration-300 text-gray-600 text-base ${openIndex === actualIndex ? 'max-h-96 pb-2' : 'max-h-0'
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
