"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { FaCalculator } from "react-icons/fa";

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
import FaqSectionPollutionDelhi from "@/components/FaqSectionPollutionDelhi";
import img from "@/assets/pollution/delhi.png";

import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import ContactFormModal from "@/components/ContactFormModal";
import PollutionFeeCalculatorDelhi from "@/components/PollutionFeeCalculatorDelhi";
import Head from "next/head";
import Link from "next/link";

export default function PollutionNocLicenceDelhiPage() {
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
      <Head>
        <title>Pollution NOC in Delhi, Apply & Renew Pollution NOC Online in Delhi - Factorylicence</title>
        <meta
          name="description"
          content="Pollution NOC in Delhi - Apply for Pollution NOC in Delhi with online licence application, renewal, certificate assistance, fees guidance and documentation support for industries and businesses."
        />
        <meta name="keywords" content="pollution noc in delhi" />
        <meta
          property="og:title"
          content="Pollution NOC in Delhi, Apply & Renew Pollution NOC Online in Delhi - Factorylicence"
        />
        <meta
          property="og:description"
          content="Pollution NOC in Delhi - Apply for Pollution NOC in Delhi with online licence application, renewal, certificate assistance, fees guidance and documentation support for industries and businesses."
        />
        <meta property="og:type" content="website" />
      </Head>
      {/* Hero Section */}
      <section className="relative text-white md:py-0 py-20 md:px-0 px-4 mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Pollution Noc In Delhi`}
              width="1920"
              height="1080"
              className={`absolute top-0 left-0 w-full h-full object-cover ${currentBg === index ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000 ease-in-out`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0 md:py-12 relative z-20">
          <div className="md:w-1/2">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto md:px-0 px- 4 mt-6">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap mb-4 items-center gap-2 text-sm"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Pollution NOC Registration in Delhi" },
                ]
                  .filter(Boolean)
                  .map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      {idx > 0 && <span className="px-2 text-gray-400">›</span>}
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text- blue-600 hover:underline"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text -gray-600">
                          {item.label}
                        </span>
                      )}
                    </div>
                  ))}
              </nav>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Pollution NOC Registration in Delhi
            </h1>
            <p className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure safety compliance and secure Pollution Department clearance
              for your building or business in Delhi with expert Pollution NOC
              assistance.
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
        <div className="md:col-span-3 space-y-4">
          <Section id="calculator" className="mb-10">
            <PollutionFeeCalculatorDelhi />
          </Section>
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                <span className="bg- px-1">Pollution NOC In Delhi</span> Registration
              </>
            }
          >
            <p className="text-justify mb-4">
              Setting up and operating a factory will not be possible without a pollution NOC in Delhi. This license is issued by the Delhi Pollution Control Committee (DPCC) to ensure that the industry will not cause harm to the environment. There are two NOCs, viz., Consent to Establish (CTE) and Consent to Operate (CTO), under the Water (Prevention & Control of Pollution) Act, 1974, and the Air (Prevention & Control of Pollution) Act, 1981.
            </p>
            <p className="text-justify">
              With Factorylicence.in you will get all-round assistance in getting a Pollution NOC for your business. Connect with our Consultant now!
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Pollution NOC In Delhi Important?
              </>
            }
          >
            <p className="text-justify">
              The government will not allow you to run a factory if it is causing harm to the environment. To ensure that your business is not causing any kind of damage to the environment by polluting it in any way, you need to get a Pollution NOC. IF the business is found running without this pollution NOC, then it will face legal actions like fines, being court prosecuted, and even in some cases being shut down.
            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits Of Pollution NOC In Delhi
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">
                <strong>Legal Compliance</strong>: Ensures that your business adheres to pollution control norms as prescribed by environmental authorities, avoiding legal penalties.
              </li>
              <li className="text-justify">
                <strong>Environmental Responsibility</strong>: Demonstrates your organisation's commitment to environmental protection and sustainable practices.
              </li>
              <li className="text-justify">
                <strong>Smooth Operations</strong>: Helps in the uninterrupted operation of your unit without fear of closure or enforcement action.
              </li>
              <li className="text-justify">
                <strong>Credibility and Approvals</strong>: Required for applying for other licenses like <a href="https://factorylicence.in/" className="text-blue-600 underline font-">factory license</a>, fire NOC, building plan approvals, and more.
              </li>
              <li className="text-justify">
                <strong>Eligibility for Tenders</strong>: Mandatory for participating in many government or private tenders.
              </li>
            </ul>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria for Pollution NOC In Delhi
              </>
            }
          >
            <p className="text-justify mb-4">
              Any industrial, commercial, healthcare, or construction unit intending to establish or operate within Delhi must obtain the Pollution NOC, especially if the activity falls under the red, orange, or green category as classified by DPCC. Even small businesses generating effluents, emissions, or hazardous waste need this certificate.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">DPCC Classification:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">Orange Category- 73 Industries</li>
              <li className="text-justify">Red Category- 253 Industries</li>
              <li className="text-justify">Green Category- 120 Industries</li>
              <li className="text-justify">White Category- 203 Industries</li>
            </ul>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Pollution NOC In Delhi
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">KYC documents of the applicant</li>
              <li className="text-justify">Email ID and mobile number of the applicant</li>
              <li className="text-justify">Electricity bill or water bill for the premises</li>
              <li className="text-justify">Site plan/layout</li>
              <li className="text-justify">Manufacturing process details</li>
              <li className="text-justify">List of raw materials and products</li>
              <li className="text-justify">Consent application form</li>
              <li className="text-justify">Authorisation for hazardous waste (if applicable)</li>
              <li className="text-justify">Proof of land ownership or rent agreement</li>
              <li className="text-justify">Undertaking or affidavit as prescribed by DPCC</li>
            </ul>
          </Section>

          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                Steps To Apply For DPCC Pollution NOC
              </>
            }
          >
            <p className="text-justify mb-4">
              You have to go to the DPCC website to register for the Pollution NOC in Delhi and fill out the online form according to the classification of DPCC. Applying for the Pollution NOC can be frustrating, so to help you, we have given the steps below. Just follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-800 mb-6">
              <li className="text-justify">
                <strong>Identify Applicability & Category</strong>: Understand if your industry needs a consent to establish (CTE) or consent to operate (CTO) from the Delhi Pollution Control Committee (DPCC). Industries are categorised (Red, orange, green) based on pollution.
              </li>
              <li className="text-justify">
                <strong>Documentation</strong>: Collect all the required documents and double-check to not miss any.
              </li>
              <li className="text-justify">
                <strong>Apply on the DPCC Portal</strong>:
                <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                  <li>Visit the official DPCC website and create an account.</li>
                  <li>Fill out the online application form for CTE or CTO.</li>
                </ul>
              </li>
              <li className="text-justify">
                <strong>Upload Documents & Pay Fees</strong>: Upload scanned documents and pay the prescribed government fee online (fees vary by industry category and investment).
              </li>
              <li className="text-justify">
                <strong>Verification & Inspection</strong>: The DPCC scrutinises the application; officials may conduct a site visit to verify details and compliance.
              </li>
              <li className="text-justify">
                <strong>Receive NOC</strong>: Upon successful verification, the electronic NOC (CTE/CTO certificate) is issued, allowing legal operation.
              </li>
            </ol>
            <Image src={img} alt="image description" />
          </Section>

          <Section
            id="fees"
            title={
              <>
                <FaCalculator className="inline mr-2" />
                Fees For Pollution NOC In Delhi
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-4 text-gray-800">
              <li className="text-justify">
                <strong>White Category (Nil/Low Pollution)</strong>: Often Nil or Self-Declaration.
              </li>
              <li className="text-justify">
                <strong>Green Category (Low Pollution)</strong>: Fees range from ₹100 (for &lt;₹5 lakh investment) up to ₹10,000 for CTE, and ₹200-₹20,000 for CTO, depending on capital.
              </li>
              <li className="text-justify">
                <strong>Orange Category (Medium Pollution)</strong>: Fees increase with investment, e.g., ₹500 for CTE (&lt;₹5 lakh investment) up to ₹1,00,000 for CTE, and ₹1,000-₹2,00,000 for CTO.
              </li>
              <li className="text-justify">
                <strong>Red Category (High Pollution)</strong>: Higher fees, starting from ₹25,000 for CTE up to ₹1,00,000, and ₹50,000 to ₹20,00,000 for CTO, based on investment.
              </li>
            </ul>
          </Section>

          <Section
            id="who-needs"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Who Needs To Obtain The Pollution NOC In Delhi?
              </>
            }
          >
            <p className="mb-4">Businesses involved in these activities need to obtain the Pollution NOC:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
              <li>The manufacturing units</li>
              <li>Health care establishments</li>
              <li>Traders</li>
              <li>E-waste management entities</li>
              <li>Solid waste management entities</li>
              <li>Hazardous waste management entities</li>
              <li>Battery waste management entities</li>
              <li>Plastic waste management entities</li>
              <li>Bio-medical waste management entities</li>
            </ul>
            <p className="text-justify">
              Factorylicence.in also assists in getting a Factory license in Delhi, Uttar Pradesh and Haryana. Contact us if you want to apply for any of these places.
            </p>
          </Section>

          <Section
            id="renewal"
            title={
              <>
                <RiTimeLine className="inline mr-2" />
                Renewal Process Of Pollution NOC In Delhi
              </>
            }
          >
            <p className="text-justify mb-6">
              The Pollution NOC is issued for a limited period. You have to renew it before the expiry date to continue your operations legally. Failure in renewing the NOC on time will cause you penalties or suspension of operations.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">When Should Pollution NOC Renewal Be Applied?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-8">
              <li className="text-justify">
                The renewal application should be filed at least 60 to 90 days before the expiry of the existing CTO.
              </li>
              <li className="text-justify">
                Operating with an expired NOC is treated as non-compliance, even if a renewal application is pending.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">How To Apply For Pollution NOC Renewal In Delhi</h3>
            <p className="text-justify mb-4">
              The renewal process of the Pollution NOC in Delhi is very similar to the process of registration for the Pollution NOC:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">You have to log in to the DPCC portal with the existing credentials you created when applying for the pollution noc first time.</li>
              <li className="text-justify">Then select the already registered industrial unit</li>
              <li className="text-justify">And navigate to the CTO renewal service,</li>
              <li className="text-justify">Click on it and fill in the details they will ask.</li>
              <li className="text-justify">Upload required documents (the documents would be the same as the required when registering for the first time.</li>
              <li className="text-justify">Just one copy of the existing CTO certificate will be required; otherwise, all the documents will be the same, like before.</li>
              <li className="text-justify">At last, pay the renewal fees.</li>
            </ul>
          </Section>

          <Section
            id="renewal-cost"
            title={
              <>
                <FaCalculator className="inline mr-2" />
                How much does it cost for Pollution NOC Renewal in Delhi?
              </>
            }
          >
            <p className="text-justify mb-4">
              The cost of Pollution NOC renewal is equal to or a percentage of the original CTO fee, based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Industry category (Red/Orange/Green)</li>
              <li>Capital investment</li>
              <li>Duration of renewal</li>
            </ul>
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
              Operating without a Pollution NOC may result in heavy penalties, disconnection of utilities, legal prosecution, and closure of the unit. The fine amount depends on the category of the industry and the nature of the violation. Repeat violations can also lead to the cancellation of the license and blacklisting.
            </p>
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
            <ul className="list-disc pl-6 space-y-4 text-gray-800">
              <li className="text-justify">
                <strong>CTE (Consent to Establish)</strong>: 20 to 30 working days, depending on project size and category.
              </li>
              <li className="text-justify">
                <strong>CTO (Consent to Operate)</strong>: 45 to 60 working days, post successful inspection and documentation.
              </li>
              <li className="text-justify">
                <strong>Renewal</strong>: 30 to 60 working days, post successful inspection and documentation.
              </li>
            </ul>
          </Section>

          <Section
            id="how-help"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                How can we help you?
              </>
            }
          >
            <p className="text-justify mb-4">
              We have been in this business of helping people get a legal license for their business for a long time. We provide help in obtaining different legal licences required for different types of businesses.
            </p>
            <p className="text-justify">
              In this case of getting pollution NOC in Delhi, our professional consultant team will guide you in drafting the application for NOC, arranging and providing the required documents. Applying for a Pollution NOC will become easy with our end-to-end assistance.
            </p>
          </Section>
        </div>

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
                    id: "calculator",
                    icon: <FaCalculator className="inline mr-2" />,
                  },
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
                    label: "Fees",
                    id: "fees",
                    icon: <FaCalculator className="inline mr-2" />,
                  },
                  {
                    label: "Who Needs NOC?",
                    id: "who-needs",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Process",
                    id: "renewal",
                    icon: <RiTimeLine className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Fees",
                    id: "renewal-cost",
                    icon: <FaCalculator className="inline mr-2" />,
                  },
                  {
                    label: "Penalties",
                    id: "penalties",
                    icon: (
                      <FaExclamationTriangle className="inline mr-2 text-red-500" />
                    ),
                  },
                  {
                    label: "Timelines",
                    id: "timelines",
                    icon: <FaClock className="inline mr-2" />,
                  },
                  {
                    label: "How We Help",
                    id: "how-help",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "FAQS",
                    id: "faqs",
                    icon: <FaQuestionCircle className="inline mr-2" />,
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

      <div id="faqs">
        <FaqSectionPollutionDelhi />
      </div>
      {/* Contact Form Popup */}
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h2 className="md:text-2xl text-xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
