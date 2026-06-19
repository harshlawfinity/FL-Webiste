import { lazy, useState } from 'react';
const ChevronDown = lazy(() =>
  import('lucide-react').then((mod) => ({ default: mod.ChevronDown }))
);

const ChevronUp = lazy(() =>
  import('lucide-react').then((mod) => ({ default: mod.ChevronUp }))
);
const faqs = [
  {
    question: "Is a factory licence required for small-scale manufacturing units?",
    answer: "Yes, if the unit employs 10 or more workers with power or 20 or more without power.",
  },
  {
    question: "Can I operate my factory while the application is pending?",
    answer: "No, you must receive the licence before commencing manufacturing operations.",
  },
  {
    question: "Is a factory license mandatory?",
    answer: "Yes, a factory license is mandatory for any manufacturing establishment in India that meets the criteria specified under the Factories Act, 1948 (i.e., 10+ workers with power, or 20+ workers without power). Operating without it is illegal and can lead to severe penalties.",
  },
  {
    question: "What are the documents required for a factory license?",
    answer: "Key documents required for a factory license include your approved factory plan, proof of premises ownership/occupancy, NOCs from the Fire and Pollution Control Boards, details of machinery and workers, business registration documents, and identity/address proofs of the occupier/manager.",
  },
  {
    question: "Who issues a factory license in India?",
    answer: "The Chief Inspector of Factories under the respective State Labour Department or Directorate of Factories and Boilers is the authority that issues the factory license in India.",
  },
  {
    question: "What is the validity of the factory license?",
    answer: "The factory license validity typically ranges from one to five years, depending on the specific state's factory rules. It's crucial to check your state's regulations and apply for factory license renewal before its expiry.",
  },
  {
    question: "Are fire and pollution NOCs mandatory?",
    answer: "Yes, especially for medium to large factories or those involved in chemical or hazardous production.",
  },
  {
    question: "Can Factorylicence.in help with inspections and renewals?",
    answer: "Yes, we offer end-to-end support, including pre-inspection readiness and timely renewal services.",
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
    <section id="faqs" className="bg-gradient-to-b from-[#f9f9ff] to-white py-16 px-6">
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
