"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import img from '@/assets/pollution/up.png'

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
              Pollution NOC Registration in Uttar Pradesh
            </h1>
            <p className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure safety compliance and secure Pollution Department clearance
              for your building or business in Uttar Pradesh with expert
              Pollution NOC assistance.
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
              Pollution NOC in Uttar Pradesh is an essential environmental
              clearance provided by the UPPCB. It consists of two stages:
              Consent to Establish (CTE) and Consent to Operate (CTO) under the
              Water (Prevention and Control of Pollution) Act, 1974 and the Air
              (Prevention and Control of Pollution) Act, 1981. Any business or
              commercial establishment which would be producing waste,
              discharging effluent or discharging any contaminant should obtain
              this NOC before they even commence with operations. At Lawfinity,
              we provide complete assistance for securing a Pollution NOC in
              Uttar Pradesh, facilitating hassle free compliance and
              documentation for your new and existing enterprise.
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
              Pollution NOC is very vital to have to make sure that your
              business is environmentally friendly and does not cause any damage
              to the surroundings as per the laws of Uttar Pradesh. The fact
              sheet shows the commitment of the units to responsible,
              sustainable operations and can help prevent legal or reputation
              issues, or the need to shut down operation. By handling this
              difficult approval process, Lawfinity helps your project stay
              within the confines of the law.
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
                Legal Compliance: Obtaining the Pollution NOC ensures full
                compliance with environmental laws, safeguarding your business
                from penalties and forced closures.
              </li>
              <li>
                Operational Clarity: It permits lawful establishment and
                functioning of business units without fear of legal
                interruptions or public complaints.
              </li>
              <li>
                Access to Further Approvals: A Pollution NOC is often a
                prerequisite for securing other licenses such as Factory
                License, Fire NOC and Building Plan Approval.
              </li>
              <li>
                Sustainability Goals: Encourages adoption of environmentally
                friendly processes, resulting in efficient waste management and
                pollution control.
              </li>
              <li>
                Better Reputation: Enhances brand value and public trust by
                demonstrating eco-consciousness and regulatory responsibility.
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
              In Uttar Pradesh, all manufacturing units, processing industries,
              hospitals, hotels and businesses involved in any process that may
              affect the environment must obtain Pollution NOC. Units are
              classified into red orange, green and white categories based on
              pollution load. Even small-scale units falling under orange and
              green categories require formal consent. Lawfinity evaluates your
              category and eligibility before initiating the application
              process.
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
              <li>Ownership proof or rent agreement of the premises</li>
              <li>Site layout and plant design</li>
              <li>
                Project Report and process flow chart (Showing capital
                investment in Land & Plant Machinery)
              </li>
              <li>Details of raw materials and final products</li>
              <li>Water and energy consumption details</li>
              <li>Waste generation and disposal plan</li>
              <li>Effluent treatment mechanism (if applicable)</li>
              <li>Copy of previous CTO (in case of renewal)</li>
              <li>Authorization for hazardous waste (if applicable)</li>
            </ul>
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
            <li className="text-justify">
              CTE (Consent to Establish): 20 to 30 working days, depending on
              project size and category <br />
             
             </li>

                        <li className="text-justify">CTO (Consent to Operate): 45 to 60 working days, post successful
              inspection and documentation.
                                      </li>



            <br />

            <p>
              Lawfinity accelerates this timeline by handling all documentation,
              portal management and liaison with UPPCB authorities.
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
              Operating without Pollution NOC in Uttar Pradesh is a punishable
              offense. Businesses may face fines, notices, sealing of premises,
              disconnection of utilities and prosecution. Non-compliance may
              also lead to revocation of other permits. Lawfinity ensures timely
              registration and renewal to keep your business safe from such
              consequences.
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
