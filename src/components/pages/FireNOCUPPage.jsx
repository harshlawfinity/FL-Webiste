"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { RiTimeLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import TH from "@/components/TH";
import Image from "next/image";
import { HiOfficeBuilding } from "react-icons/hi";
import {
  FaQuestionCircle,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaListOl,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import FaqSectionPollutionUP from "@/components/FaqSectionPollutionUP"; // You can rename this if needed
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import ContactForm from "@/components/ContactForm";
import img from '@/assets/fire/up.png'

export default function PollutionNocLicenceHaryanaPage() {
  const [showPopup, setShowPopup] = useState(false);
  const heroBackgrounds = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white md:py-0 py-20 md:px-0 px-4 mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`bg-${index}`}
              width="1920"
              height="1080"
              className={`absolute top-0 left-0 w-full h-full object-cover ${
                currentBg === index ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 ease-in-out`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0 md:py-12 relative z-20">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Fire NOC Registration in Uttar Pradesh
            </h1>
            <p className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50">
             Ensure compliance and protect your building or business in Uttar Pradesh with expert Fire NOC assistance. We help simplify approvals, inspections, and documentation.


            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </div>

           <div className="md:w-1/2 w-full">
            <div className="relative w-full md:h-[350px] overflow-hidden rounded-lg bg-black flex flex-col items-center justify-end bg-[#7A3EF2]  w-full  ">
              <iframe
                className="w-full md:h-[350px] h-[200px]"
                  src="https://www.youtube.com/embed/BxMLFYIWyxE?autoplay=1&rel=0"
                title="Factory Licence Walkthrough"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>

        
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        <div className="md:col-span-3 space-y-14">
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Introduction and Its Compliance
              </>
            }
          >
            <p className="text-justify">
A Fire NOC (No Objection Certificate) is a statutory requirement which is issued by the Fire Services Department of Uttar Pradesh in order to ensure that buildings and commercial establishments have complied with the prescribed fire safety conditions. Under the Uttar Pradesh Fire Prevention and Fire Safety Act, 2005, obtaining a Fire NOC is mandatory for certain categories of buildings, before they can be occupied or engaged in any kind of operations. Lawfinity through its experts offers valuable guidance and complete support in obtaining Fire NOCs across the state, ensuring compliance with state rules and the National Building Code (NBC).

            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why It Is Needed
              </>
            }
          >
            <p className="text-justify">
A Fire NOC is crucial to verify that a building has proper fire safety measures in place, including alarms, sprinklers and emergency exits. Without this NOC, the property owners may be denied occupancy certificates and in certain cases face legal consequences. Lawfinity helps businesses to avoid such delays, fines and potential shutdowns by managing the entire Fire NOC process smoothly and compliantly.

            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits and Advantages
              </>
            }
          >
            <ul className="list-disc pl-6">
              <li>
Legal Assurance: A Fire NOC ensures your premises comply with fire safety regulations, helping avoid legal liabilities and closure notices.
              </li>
              <li>
Safety for Occupants: It confirms the implementation of critical fire safety measures to protect employees, customers and assets.

              </li>
              <li>
Mandatory for Other Licenses: Fire NOC is a prerequisite for obtaining trade licenses, occupancy/completion certificates and project approvals.
              </li>
              <li>
Insurance Support: It strengthens your case during fire insurance claims by proving adherence to safety protocols.

              </li>
              <li>
             Insurance Support: Many insurance companies mandate a valid Fire NOC to approve fire insurance claims.

              </li>

              <li>
                Enhanced Public Trust: A certified building with fire safety clearance enhances brand trust and reputation.

              </li>
            </ul>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria
              </>
            }
          >
            <p className="text-justify">
In Uttar Pradesh, Fire NOC is mandatory for:



            </p>


             <li>
Residential buildings above 15 meters in height
              </li>
              <li>
Commercial establishments exceeding 500 square meters of built-up area

              </li>
              <li>
Industrial premises, warehouses and factories dealing with inflammable substances

              </li>
              <li>
Educational institutions, hotels, hospitals, malls, banquet halls and high footfall areas

              </li>
              <li>
Buildings requiring approval from local bodies like Noida Authority, GDA, LDA, etc.

              </li>

               

<br />

              <p>
Lawfinity assists in assessing your building’s eligibility and ensures readiness before applying.



              </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required
              </>
            }
          >
            <ul className="list-disc pl-6">
              <li>
                KYC documents of the applicant (Pan, Aadhaar, Voter id, Passport
                etc.)
              </li>
              <li>Email id and mobile number of the applicant</li>
              <li>Building plan approved by development authority or municipality
</li>
              <li>Fire safety equipment layout plan
</li>
              <li>
               Building Completion Certificate or Structural Stability Certificate

              </li>
              <li>Architect’s certification of fire safety compliance
</li>
              <li>Ownership/lease documents
</li>
              <li>Photographs of installed fire safety systems
</li>
              <li>Affidavit from owner/occupier on fire safety installations
</li>
              
            </ul>
<br />
            <p>
              Lawfinity reviews and compiles all documentation to minimize errors or rejections.


            </p>
          </Section>

         <Section
                     id="steps"
                     title={
                       <>
                         <FaListOl className="inline mr-2" />
                         Steps
                       </>
                     }
                   >
                     <Image src={img} alt="image description" />
                   </Section>

          <Section
            id="timelines"
            title={
              <>
                <FaClock className="inline mr-2" />
                Timelines
              </>
            }
          >
            <p className="text-justify">
             The standard timeline to obtain a Fire NOC in Uttar Pradesh ranges between 20 to 30 working days, subject to complete documentation and successful inspection. Lawfinity ensures the process is expedited through proper planning, real-time follow-ups and professional coordination with local authorities.


              <br />
            </p>

 
           
          </Section>

          <Section
            id="penalties"
            title={
              <>
                <FaExclamationTriangle className="inline mr-2 text-red-500" />
                Penalties
              </>
            }
          >
            <p className="text-justify">
             Failure to obtain or renew a Fire NOC in Uttar Pradesh may lead to:

<li>Penalties ranging from ₹25,000 to ₹50,000 or more </li>
<li>Sealing of the premises or denial of occupancy </li>
<li>Disconnection of water, electricity or trade licenses </li>
<li>Criminal proceedings in case of fire-related incidents </li>  <br />
Lawfinity helps you stay compliant and avoid such heavy penalties through timely consultation and action.
            </p>
          </Section>
        </div>

        {/* Sidebar Quick Links */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-violet-100">
              <h3 className="text-lg font-semibold text-[#7A3EF2] mb-2">
                Quick Links
              </h3>
              <nav className="space-y-3 text-sm text-gray-700">
                {[
                  {
                    label: "Introduction",
                    id: "what-is",
                    icon: <FaIndustry className="inline mr-2" />,
                  },
                  {
                    label: "Why It Is Needed",
                    id: "why-required",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "Benefits",
                    id: "benefits",
                    icon: <FaCheckCircle className="inline mr-2" />,
                  },
                  {
                    label: "Eligibility Criteria",
                    id: "eligibility",
                    icon: <FaUserCheck className="inline mr-2" />,
                  },
                  {
                    label: "Documents Required",
                    id: "documents",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Steps",
                    id: "steps",
                    icon: <FaListOl className="inline mr-2" />,
                  },
                  {
                    label: "Timelines",
                    id: "timelines",
                    icon: <FaClock className="inline mr-2" />,
                  },
                  {
                    label: "Penalties",
                    id: "penalties",
                    icon: (
                      <FaExclamationTriangle className="inline mr-2 text-red-500" />
                    ),
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="cursor-pointer hover:text-[#7A3EF2] block text-left w-full"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </section>

      {/* FAQs */}
      <FaqSectionPollutionUP />

      {/* Contact Form Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-3xl"
              aria-label="Close contact form"
            >
              ×
            </button>
            <Suspense
              fallback={
                <div className="py-10 text-center">Loading form...</div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h2 className="text-3xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
