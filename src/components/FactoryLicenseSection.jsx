"use client"
import { useState  } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { SEO_ASSETS } from "@/lib/heroBackgrounds";

import ContactForm from "./ContactForm";

const sharedSteps = [
  "Prepare documents: Collect all the necessary documents.",
  "Online Application: Click on the state's labor department portal → Trade & Factory Licences.",
  "Fill and upload the required docs.",
  "Payment of the licence fee: make it online.",
  "Inspection: Department schedules an inspection.",
  "Licence Issuance: When successful verification.",
];

const steps = {
  Delhi: {
    items: sharedSteps,
    image: SEO_ASSETS.factoryLicenseRenewal,
  },
  Haryana: {
    items: sharedSteps,
    image: SEO_ASSETS.factoryLicenceStepsHaryana,
  },
  "Uttar Pradesh": {
    items: sharedSteps,
    image: SEO_ASSETS.factoryLicenceStepsUttarPradesh,
  },
};

const FactoryLicenseSection = () => {
  const [activeState, setActiveState] = useState("Delhi");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="bg-zinc-100 py-10 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold text-gray-900 leading-tight mb-10">
        Expert Help for <br />
        <span className="text-purple-600">Your Factory Licence Setup</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
             <img
              src={SEO_ASSETS.factoryLicenceExpertHelp}
              alt="Factory Licence Expert Help"
              className="rounded-2xl w-full h-auto max-h-[480px] object-cover shadow-xl"
              loading="lazy"
              decoding="async"
              width={800}
              height={480}
            />
         </div>

        {/* Right: Steps and Controls */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-3 mb-6 flex-wrap">
            {Object.keys(steps).map((city) => (
              <button
                key={city}
                onClick={() => setActiveState(city)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                  activeState === city
                    ? "bg-purple-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <ul className="space-y-4 mt-4 mb-6">
            {steps[activeState].items.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm text-justify">{step}</p>
              </li>
            ))}
          </ul>

          {/* Steps Image */}
             <img
              src={steps[activeState].image}
              alt="Factory License Renewal"
              className="w-full max-h-[240px] object-contain"
              loading="lazy"
              decoding="async"
              width={640}
              height={240}
            />
         </div>
      </div>

      {/* Contact Form Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-gray-50 p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-4xl"
              aria-label="Close contact form"
            >
              ×
            </button>
               <ContactForm />
           </div>
        </div>
      )}
    </section>
  );
};

export default FactoryLicenseSection;
