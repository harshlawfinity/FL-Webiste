"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaIndustry,
  FaQuestionCircle,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaListOl,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import ContactForm from "@/components/ContactForm";
import FaqSectionHaryanaFireNoc from "@/components/FaqSectionHaryanaFireNoc"; // Your FAQ component
import img from "@/assets/fire/haryana.jpeg";

export default function FireNocLicenceHaryanaPage() {
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
      <section className="relative text-white py-40 md:py-20 mt- px-4 mt-0 overflow-hidden">
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
              Fire NOC Registration in Haryana
            </h1>
            <p className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure fire safety compliance and secure Fire Department clearance
              for your building or business in Haryana with expert support from
              Lawfinity.
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
              A Fire NOC (No Objection Certificate) is law mandated safety
              clearance issued by the Haryana Fire Services to certify that a
              building or commercial establishment complies with all the
              prescribed fire safety guidelines. Under the provisions of the
              Haryana Fire Service Act, 2009 and the National Building Code
              (NBC) of India, it is mandatory for high-rise and structures to
              obtain a Fire NOC before occupying or commencing any operations.
              Lawfinity helps client across Haryana from Gurugram to Faridabad,
              Panipat to Karnal in obtaining the Fire NOC efficiently, ensuring
              that all the legal and safety standards are duly complied without
              any delays or penalties.
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
              The Fire NOC gives the authenticity that the premises are equipped
              with proper fire safety infrastructure and that all the fire
              prevention systems are functional and approved by law. It is
              crucial for obtaining Occupancy Certificates, Building Completion
              Certificates and licenses from local authorities like Municipal
              Corporations and DTCP. Lawfinity by your side, your establishment
              remains compliant with fire safety requirements, minimizing
              operational risks and supporting legal and insurance processes in
              the state of Haryana.
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
                Legal Compliance: A valid Fire NOC confirms adherence to Haryana
                fire safety laws and helps avoid legal complications and license
                rejections.
              </li>
              <li>
                Occupant Safety: Ensures the safety of employees, visitors and
                residents by verifying proper fire exits, alarms and suppression
                systems are in place.
              </li>
              <li>
                Mandatory Requirement: A prerequisite for other major licenses,
                including completion certificates, trade licenses and project
                approvals.
              </li>
              <li>
                Better Credibility: Demonstrates that your premises are safe and
                reliable, building trust among stakeholders, customers and
                authorities.
              </li>
              <li>
                Insurance Facilitation: Helps in securing or settling insurance
                claims related to fire damage by proving compliance with fire
                norms.
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
              As per Haryana Fire Service Rules, a Fire NOC is mandatory for:
              <ul className="list-disc pl-6">
                <li>
                  • Residential apartments/buildings exceeding 15 meters in
                  height
                </li>
                <li>
                  • Commercial complexes, malls, schools and hospitals over 500
                  sq.m. of built-up area
                </li>

                <li>
                  • Factories and industrial units dealing with flammable
                  materials
                </li>
                <li>• Hotels, banquet halls and public assembly buildings</li>
                <li>• Any premises storing hazardous or combustible items</li>
              </ul>{" "}
              <br />
              Lawfinity helps you in determining whether your building or
              project is eligible and supports complete application handling.
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
            <p>
              For obtaining a Fire NOC in Haryana, the following documents are
              generally required:
            </p>
            <ul className="list-disc pl-6">
              <li>
                • KYC documents of the applicant (Pan, Aadhaar, Voter id,
                Passport etc.)
              </li>
              <li>• Email id and mobile number of the applicant</li>
              <li> Building layout approved by DTCP/Municipality</li>
              <li> Permission Letter/BR-III</li>
              <li>
                {" "}
                Architect’s certificate confirming compliance with fire norms
              </li>
              <li> Applied number of towers and total tower approved</li>
              <li> Fire safety equipment layout</li>
              <li> Completion certificate or building stability certificate</li>
              <li> Ownership proof (sale deed/lease agreement)</li>
              <li> Authority letter regarding signatory of the document</li>
              <li> Photographs of fire safety systems</li>
              <li> Affidavit from owner/promoter</li>
            </ul>

            <br />
            <p>
              Lawfinity assists in collecting, reviewing and submitting all
              required documentation to avoid procedural rejections.
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
              The typical time required to obtain a Fire NOC in Haryana is 15 to
              25 working days, depending on the type and complexity of the
              project. This may vary in cases where re-inspection or additional
              documents are required.
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
              Failure to obtain a Fire NOC in Haryana or non-compliance with the
              Fire Safety Act may attract serious consequences such as:
              <ul className="list-disc pl-6">
                <li>
                  {" "}
                  Fines ranging from ₹25,000 to ₹50,000 or more depending on the
                  violation{" "}
                </li>
                <li>
                  {" "}
                  Sealing of premises or disconnection of essential services{" "}
                </li>
                <li>
                  {" "}
                  Criminal liabilities under the Fire Services Act for
                  negligence in case of mishap{" "}
                </li>
              </ul>{" "}
              <br />
              Lawfinity ensures your compliance is complete and up-to-date to
              avoid such legal and operational risks.
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
                    label: "Eligibility",
                    id: "eligibility",
                    icon: <FaUserCheck className="inline mr-2" />,
                  },
                  {
                    label: "Documents",
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

      <FaqSectionHaryanaFireNoc />

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
