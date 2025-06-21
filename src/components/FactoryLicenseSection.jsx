"use client"
import { useState  } from "react";
import { FiCheckCircle } from "react-icons/fi";
import f4 from "../assets/f4.webp";
import haryanaste from "../assets/haryanaste.webp";
import stepd from "../assets/stepd.webp";
import upsteps from "../assets/upsteps.webp";
 
import ContactForm from "./ContactForm";  
import Image from "next/image";
const steps = {
  Delhi: {
    items: [
      "Document Preparation: Gather all the required documents.",
      "Online Application: Visit MCD Portal → Trade & Factory Licences.",
      "Form Submission: Fill and upload required docs.",
      "Fee Payment: Pay the licence fee online.",
      "Inspection: Department schedules inspection.",
      "Licence Issuance: Upon successful verification.",
    ],
    image: stepd,
  },
  Haryana: {
    items: [
      "Online Registration: Register on Haryana Labour Portal.",
      "Application Form: Fill with factory details.",
      "Document Upload: Upload all required docs.",
      "Fee Payment: Pay fee online.",
      "Inspection: Premises will be inspected.",
      "Licence Approval: If compliant, licence is issued.",
    ],
    image: haryanaste,
  },
  "Uttar Pradesh": {
    items: [
      "Portal Access: Register on Nivesh Mitra Portal.",
      "Application Submission: Fill form with factory details.",
      "Fee Payment: Pay fee online.",
      "Inspection: Department inspects premises.",
      "Licence Issuance: If verified, licence is issued.",
    ],
    image: upsteps,
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
             <Image
              src={f4}
              alt="Compliance Visual"
              className="rounded-2xl w-full h-auto max-h-[480px] object-cover shadow-xl"
              loading="lazy"
              decoding="async"
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
             <Image
              src={steps[activeState].image}
              alt={`${activeState} factory licence steps`}
              className="w-full max-h-[240px] object-contain"
              loading="lazy"
              decoding="async"
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
