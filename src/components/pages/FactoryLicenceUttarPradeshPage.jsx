"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { RiTimeLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import TUP from "@/components/TUP";
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
import { FaCalculator } from "react-icons/fa";


import uuu from "../../assets/uuu.webp";

import ContactForm from "@/components/ContactForm";

import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import FaqSection from "@/components/FaqSectionUP";
import FactoryLicenseCalculatorUP from "../FactoryLicenseCalculatorUP.jsx";
import Head from "next/head";
import Link from "next/link";

export default function FactoryLicenceUttarPradeshPage() {
  const [showPopup, setShowPopup] = useState(false);
  const heroBackgrounds = [bg1, bg2, bg3];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Factory License in Uttar Pradesh, Apply & Renew Factory Licence Online in Uttar Pradesh - Factorylicence</title>
        <meta
          name="description"
          content="Factory License in Uttar Pradesh - Renew your factory licence online in Uttar Pradesh with ease. Learn about the process, requirements, and how to complete your factory licence renewal in Uttar Pradesh quickly and efficiently."
        />
        <meta
          name="keywords"
          content="factory licence renewal online uttar pradesh, factory licence in uttar pradesh"
        />
        <meta
          property="og:title"
          content="Factory License in Uttar Pradesh, Apply & Renew Factory Licence Online in Uttar Pradesh - Factorylicence"
        />
        <meta
          property="og:description"
          content="Factory License in Uttar Pradesh - Renew your factory licence online in Uttar Pradesh with ease. Learn about the process, requirements, and how to complete your factory licence renewal in Uttar Pradesh quickly and efficiently."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/factory-licence-in-uttar-pradesh"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/assets/factory-license-up-og.jpg"
        />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link
          rel="canonical"
          href="https://factorylicence.in/factory-licence-in-uttar-pradesh"
        />
      </Head>
      {/* Hero Section */}

      <section className="relative text-white py-20 md:px-0 px-4 mt-20 overflow-hidden">
        {/* Rotating background images */}
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              loading="lazy"
              key={index}
              src={img}
              alt={`bg-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentBg === index ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0  md:py-12 relative z-20">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Factory Licence Registration in Uttar Pradesh
            </h1>
            <p className="text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure compliance and legal security for your manufacturing unit
              in Uttar Pradesh with our expert licensing assistance.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </div>

          {/* Right Video Section */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full md:h-[350px] overflow-hidden rounded-lg bg-black flex flex-col items-center justify-end bg-[#7A3EF2]  w-full  ">
              <iframe
                className="  w-full md:h-[350px] h-[200px]"
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
      <section className="max-w-7xl mx-auto py -16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        {/* Left Side Content */}
        <div className="md:col-span-3 space-y-14">
          <Section id="calc">
            <FactoryLicenseCalculatorUP />
          </Section>
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Factory Licence In Uttar Pradesh: How To Apply, Documents, And Fee Structure
              </>
            }
          >
            <p className="text-justify">
              Do you intend to establish a manufacturing facility in Uttar Pradesh? The first item on your list of priorities would then be getting a <span className="n-300 px-1">factory licence in Uttar Pradesh</span>. This permit is granted in accordance with the Factories Act of 1948. A factory licence in Uttar Pradesh is essential in order to run a factory unit. A factory licence is a legal document that ensures your firm's compliance with the necessary health and safety regulations for the well-being of employees.
            </p>
            <br />
            <p className="text-justify">
              If a factory is discovered to be operating without a factory licence in Uttar Pradesh, the government authorities may take legal action against it and impose fines. Therefore, before operating, make sure you obtain your factory licence.
            </p>
            <br />
            <p className="text-justify">
              Whether you want to get a brand new Factory licence in Uttar Pradesh, or want to know about the <span className="n-300 px-1">Factory licence renewal online Uttar Pradesh</span>, we have the solution for your every query. Connect with our consultant fast and let us help you.
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why The Factory Licence In Uttar Pradesh Important?
              </>
            }
          >
            <p className="text-justify mb-4">
              The Factories Act of 1948 makes it illegal to operate a factory without a <span className="n-300 px-1">Factory license</span>; therefore, getting a factory licence in Uttar Pradesh is necessary to comply with the law. If a factory is discovered operating without a proper Factory licence, it will face severe fines and, in certain situations, even jail. For anyone wishing to establish or run a manufacturing facility in Uttar Pradesh, this makes the licence compulsory to have.
            </p>
            <p className="text-justify mb-4">
              A factory licence guarantees that the establishment satisfies the necessary safety standards, which are essential for protecting the health and welfare of workers. In addition to the legal requirements, it confirms the business's operational legitimacy, making it easy to obtain additional licenses and permissions and take part in government Schemes and tenders.
            </p>
            <p className="text-justify">
              Factorylicence.in can assist you in a struggling process like Factory Licence renewal online Uttar Pradesh. Hire us quickly so that we can help you with our assistance!
            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits Of Factory Licence In Uttar Pradesh
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-4 text-gray-800">
              <li className="text-justify">
                <strong>Legal Recognition</strong>: Your Factory gets a legal status, which helps in smooth business operations.
              </li>
              <li className="text-justify">
                <strong>Enhanced Credibility</strong>: It increases your business's credibility by building trust among clients, suppliers, and stakeholders by demonstrating timely compliance with statutory requirements.
              </li>
              <li className="text-justify">
                <strong>Access to Government Schemes</strong>: It provides the eligibility for various government incentives and schemes aimed at promoting industrial growth.
              </li>
              <li className="text-justify">
                <strong>Employee Welfare</strong>: It ensures the implementation of health, safety, and welfare measures for the employees, ultimately leading to increased efficiency and productivity.
              </li>
              <li className="text-justify">
                <strong>Avoidance of Penalties</strong>: It safeguards from falling into any kind of legal actions, fines, and potential shutdowns due to non-compliance.
              </li>
            </ul>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For The Factory Licence In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-4">
              The eligibility criteria for the registration of the Factory licence in Uttar Pradesh are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4">
              <li className="text-justify">
                Factories employing 10 or more workers with power.
              </li>
              <li className="text-justify">
                Factories employing 20 or more workers without power.
              </li>
            </ul>
            <p className="text-justify">
              According to the Factories Act, 1948, if your unit falls under any of these categories, registration through the Labour Department, Government of Uttar Pradesh, becomes mandatory for you.
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Applying Factory Licence In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-4">
              The most crucial step in the Factory licence registration is the Documentation process. You have to be sure that each document is right and that you are not missing any required documents for submission. This is the list of required documents:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">Building Plan Approval</li>
              <li className="text-justify ">
                Layout Plan as per the Factories Act
              </li>
              <li className="text-justify ">
                KYC Documents of Owners/Directors
              </li>
              <li className="text-justify ">
                Business Registration documents of the firm/company
              </li>
              <li className="text-justify ">
                Structural Stability certificate from an approved architect.
              </li>
              <li className="text-justify ">
                Sale Deed/ Rent Agreement of premises.
              </li>
              <li className="text-justify ">
                Manufacturing process flow chart
              </li>
              <li className="text-justify ">
                CA certificate showing Capital investment.
              </li>
            </ul>
          </Section>
          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                How To Register For Factory Licence In Uttar Pradesh?
              </>
            }
          >
            <p className="text-justify mb-4">
              You can apply for the licence by visiting the Nivesh Mitra Portal Window clearance system or the Labour Department's portal. Just follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-800">
              <li className="text-justify">
                <strong>Portal Access</strong>: Register on the Nivesh Mitra Portal (niveshmitra.up.nic.in).
              </li>
              <li className="text-justify">
                <strong>Application Submission</strong>: Fill in the application form with factory details and upload the necessary documents.
              </li>
              <li className="text-justify">
                <strong>Form Submission</strong>: Fill out the application form and upload the necessary documents.
              </li>
              <li className="text-justify">
                <strong>Fee Payment</strong>: Pay the requisite fee online.
              </li>
              <li className="text-justify">
                <strong>Inspection</strong>: The Labour Department will schedule an inspection of the factory premises.
              </li>
              <li className="text-justify">
                <strong>Licence Issuance</strong>: After successful verification, the factory licence will be issued.
              </li>
            </ol>
          </Section>
          <Image loading="lazy" src={uuu} alt="Factory Licence In Uttar Pradesh" />

          <section className="p max-w-7xl mx-auto">
            <h2
              className="text-3xl font-semibold flex mb-4 text-[#7c4bdf]"
              id="fee"
            >
              <HiOfficeBuilding className="text-[#7c4bdf]" />
              Factory licence fees in Uttar Pradesh
            </h2>

            <div className="md:w-full w-[90vw]">
              <TUP />
            </div>

            {/* Consolidated Renewal, Amendment, Penalties & Timeline Section */}
            <div className="mt-12" id="renewal">
              <h2 className="text-3xl font-semibold text-[#7c4bdf] mb-4 flex items-center gap-2">
                <RiTimeLine className="text-[#7c4bdf]" />
                Renewal & Amendment For the Factory Licence in Uttar Pradesh
              </h2>
              <p className="text-justify mb-4">
                A factory licence must be renewed before it expires. If it is not renewed on time, the license may become invalid, and penalties can apply. <span className="n-300 px-1">Factory licence renewal online Uttar Pradesh</span> is an easy process if you follow these steps:
              </p>

              <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-6">
                <li className="text-justify">Log in to the <Link href="https://niveshmitra.up.nic.in" target="_blank" className="text-blue-600 underline">Nivesh Mitra portal</Link></li>
                <li className="text-justify">Go to the license renewal section</li>
                <li className="text-justify">Check the pre-filled details</li>
                <li className="text-justify">Upload any fresh documents if needed</li>
                <li className="text-justify">Pay the renewal fee</li>
                <li className="text-justify">Submit and track the status</li>
              </ol>

              <p className="text-justify mb-4">The Renewal fees for the factory licence in Uttar Pradesh are calculated based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
                <li className="text-justify">Installed HP and the number of workers.</li>
                <li className="text-justify">Whether the renewal is within the stipulated time or delayed.</li>
                <li className="text-justify">System-generated charges and applicable penalties, if any.</li>
              </ul>

              <p className="text-justify mb-8">
                <strong>Note</strong>: The state may auto-calculate the renewal fee based on the entered details. Exact amounts are viewable during the online application.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">Amendment Fee</h3>
              <p className="text-justify mb-4">
                The procedure for amendment in Uttar Pradesh has been digitalised, and it can be handled through the labour department’s web portal.
              </p>
              <p className="text-justify mb-8 italic">
                <strong>Note</strong>: No fixed fee breakdown is publicly available. The renewal and amendment follow online portal processes, sometimes implementing auto charge based on HP/worker thresholds, with late fee mechanisms.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Penalties & Timeline</h3>
              <ul className="list-disc pl-6 space-y-4 text-gray-800 mb-8">
                <li className="text-justify">
                  Running a factory without registration is a punishable offence and can lead to penalties up to ₹1,00,000 or imprisonment up to 2 years or both.
                </li>
                <li className="text-justify">
                  A penalty for delayed renewal of a factory licence is a late fee of 25% of the renewal fee for the calendar year. This penalty applies when the renewal application is submitted after the deadline, which is 30 days before the licence expiry date. The system automatically calculates the total fee, including the late fee, which needs to be paid online.
                </li>
              </ul>

              <p className="text-justify mt-8">
                <strong>Timeline</strong> - The registration of a Factory Licence in the state of Uttar Pradesh typically takes 15 to 18 working days, depending on document verification and government approvals.
              </p>
            </div>
          </section>
          <Section id="why-choose" title="Why Choose us?">
            <p className="text-justify mb-4">
              Even though registering a factory licence in Uttar Pradesh might appear simple, one error could cause the procedure to take longer than expected. You will require a qualified factory licence consultant who will walk you through the process to save time and avoid any potential rejection.
            </p>
            <p className="text-justify mb-4">
              Our staff of knowledgeable legal counsel will offer you all-encompassing assistance to guarantee your applications are devoid of errors.
            </p>
            <p className="text-justify">
              Therefore, don't waste any more time and register your factory right now by giving <Link href="/" className="text-blue-600 underline">Factorylicence.in</Link> a call!
            </p>
          </Section>
        </div>

        {/* Right Side Navigation */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-violet-100">
              <h3 className="text-lg font-semibold text-[#7A3EF2] mb-2">
                Quick Links
              </h3>
              <nav className="space-y-3 text-sm text-gray-700">
                {[
                  {
                    label: "Calculator",
                    id: "calc",
                    icon: <FaCalculator className="inline mr-2" />,
                  },
                  {
                    label: "What is a Factory Licence?",
                    id: "what-is",
                    icon: <FaIndustry className="inline mr-2" />,
                  },
                  {
                    label: "Why is it needed?",
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
                    label: "Fee Structure  ",
                    id: "fee",
                    icon: <HiOfficeBuilding className="inline mr-2" />,
                  },
                  {
                    label: "Steps to Get Licence",
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
                    id: "renewal",
                    icon: (
                      <FaExclamationTriangle className="inline mr-2 text-red-500" />
                    ),
                  },
                  {
                    label: "Why choose us?",
                    id: "why-choose",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "FAQS",
                    id: "faq-section",
                    icon: <FaListOl className="inline mr-2" />,
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        const yOffset = -100;
                        const y =
                          el.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
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
              semi
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

      <div id="faq-section">
        <FaqSection />
      </div>
    </div>
  );
}
function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h2 className="md:text-3xl text-2xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
