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
import { FaCalculator } from "react-icons/fa";

import {
  FaQuestionCircle,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaListOl,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import FaqSectionPollutionHaryana from "@/components/FaqSectionPollutionHaryana"; // You can rename this if needed
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import ContactFormModal from "@/components/ContactFormModal";
import img from "@/assets/pollution/haryana.png";
import PollutionFeeCalculatorHaryana from "@/components/PollutionFeeCalculatorHaryana";
import Head from "next/head";
import Link from "next/link";

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
      <Head>
        <title>Pollution NOC in Haryana, Apply & Renew Pollution NOC Online in Haryana - Factorylicence</title>
        <meta
          name="description"
          content="Pollution NOC in Haryana - Apply online for pollution NOC in Haryana. Get NOC from Pollution Control Board in Haryana, CTO certificate, and pollution NOC for factory with expert support."
        />
        <meta
          name="keywords"
          content="pollution noc in haryana, noc pollution control board in haryana, pollution noc certificate in haryana, noc from pollution control board in haryana, cto pollution control board in haryana, pollution noc for factory in haryana, pollution noc Apply online in haryana"
        />
        <meta
          property="og:title"
          content="Pollution NOC in Haryana, Apply & Renew Pollution NOC Online in Haryana - Factorylicence"
        />
        <meta
          property="og:description"
          content="Pollution NOC in Haryana - Apply online for pollution NOC in Haryana. Get NOC from Pollution Control Board in Haryana, CTO certificate, and pollution NOC for factory with expert support."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/pollution-noc-in-haryana"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FactoryLicence.in" />
      </Head>
      {/* Hero Section */}
      <section className="relative text-white md:py-0 py-20 md:px-0 px-4 mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Pollution Noc In Haryana`}
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
            <div className="max-w-7xl mx-auto md:px-0 px -4 mt-6">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap mb-4 items-center gap-2 text-sm"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Pollution NOC Registration in Haryana" },
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
              Pollution NOC Registration in Haryana
            </h1>
            <p className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure safety compliance and secure Pollution Department clearance
              for your building or business in Haryana with expert Pollution NOC
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

      <section className="max-w-7xl mx-auto md:py-10 py-4 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        <div className="md:col-span-3 space-y-14">
          <Section id="calc">
            <PollutionFeeCalculatorHaryana />
          </Section>

          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Pollution NOC In Haryana Registration
              </>
            }
          >
            <p className="text-justify mb-4">
              Without a <span className="-400 px-1">pollution NOC in Haryana</span>, a factory cannot be established or run. The <span className="-400 px-1">NOC pollution control board in Haryana</span>, or Haryana State Pollution Control Board (HSPCB), granted this licence in order to guarantee that the industry will not negatively impact the environment. Under the Water (Prevention & Control of Pollution) Act of 1974 and the Air (Prevention & Control of Pollution) Act of 1981, there are two NOCs: Consent to Establish (CTE) and Consent to Operate (CTO) that you need to obtain before establishing and operating a business.
            </p>
            <p className="text-justify">
              Hire Factorylicence.in and ensure your Pollution NOC in Haryana with our comprehensive support. We also help the <span className="-400 px-1">CTO pollution control board in Haryana</span>. Get in touch with our consultant right now!
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Pollution NOC In Haryana Important?
              </>
            }
          >
            <p className="text-justify mb-4">
              Pollution NOC for factory in Haryana is important because it is the licence that ensures that your business activity will not cause any harm to the surrounding environment by polluting it in any way. IF your factory is found running without a pollution NOC certificate in Haryana, then it will face legal charges, penalties, being court prosecuted, and even in some cases being shut down.
            </p>
            <p className="text-justify">
              Through the expert assistance of Factorylicence.in getting the <span className="-400 px-1">NOC from Pollution Control Board in Haryana</span> will become easy. Register your query now!
            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits Of Pollution NOC In Haryana
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="text-justify">
                <strong>Legal Safeguard</strong>: Pollution NOC protects your business from
                regulatory penalties and legal actions, ensuring operations
                remain uninterrupted.
              </li>
              <li className="text-justify">
                <strong>Credibility and Compliance</strong>: Holding a valid NOC enhances
                business reputation, proving your commitment to sustainability
                and legal adherence.
              </li>
              <li className="text-justify">
                <strong>Access to Other Approvals</strong>: It is a prerequisite for obtaining
                <span className="-400 px-1">factory licenses</span>, building plan approvals and financial grants.
              </li>
              <li className="text-justify">
                <strong>Sustainability Goals</strong>: Helps implement eco-friendly practices,
                waste management systems and pollution control measures.
              </li>
              <li className="text-justify">
                <strong>Tender Eligibility</strong>: Required for participation in major
                government or institutional tenders, giving your business a
                competitive edge.
              </li>
            </ul>
            <p className="text-justify">
              Factorylicence.in is one of the best legal service providers in Haryana. Our expert assistance
              can help you obtain all the <a href="https://factorylicence.in/" className="text-blue-600 underline">Factory license</a> you need to set up and operate a factory in
              Haryana.
            </p>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For Pollution NOC In Haryana
              </>
            }
          >
            <p className="text-justify mb-4">
              Any unit in Haryana that discharges effluents, emits air
              pollutants or handles hazardous substances must obtain a Pollution
              NOC. This includes industries under red, orange and green
              categories as classified by HSPCB, construction projects over a certain size, healthcare
              units and even some hospitality establishments.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">HSPCB Classification:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li>The white category industries have a pollution index of up to 20.</li>
              <li>For green, it is 21-40</li>
              <li>For orange, it is 41-59</li>
              <li>For red, it is 60 or above</li>
            </ul>
            <p className="text-justify mb-4">
              Industries under the green, orange, and red categories are needed to apply for Consent to Establish and Consent to Operate under the Air and Water Act, while the industries falling under the white category just need to notify with an Understanding within 30 days from the Establishment of business to NOC pollution control board in Haryana.
            </p>
            <p className="font-semibold text-[#7A3EF2] mt-4">
              Call us to get a Pollution NOC certificate in Haryana!
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Pollution NOC In Haryana
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">
                KYC documents of the applicant (Pan, Aadhaar, Voter ID, Passport, etc.)
              </li>
              <li className="text-justify">Email ID and mobile number of the applicant</li>
              <li className="text-justify">
                Address proof of unit (electricity bill/property documents)
              </li>
              <li className="text-justify">
                Project Report including process flow (Showing capital investment in Land & Plant Machinery)
              </li>
              <li className="text-justify">Site layout plan and land ownership documents</li>
              <li className="text-justify">List of raw materials and finished goods</li>
              <li className="text-justify">Details of water consumption and waste generation</li>
              <li className="text-justify">Authorisation for hazardous waste (if applicable)</li>
              <li className="text-justify">Consent application form (as per HSPCB format)</li>
              <li className="text-justify">Affidavits/Undertakings as prescribed</li>
            </ul>
          </Section>

          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                Step-by-Step Process For Pollution NOC Apply Online In Haryana
              </>
            }
          >
            <p className="text-justify mb-4">
              You have to go to the HSPCB website to register for the Pollution NOC in Haryana and fill out the online form according to the classification of HSPCB. Applying for the Pollution NOC in Haryana can be frustrating, so to help you, we have given the steps below. Just follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-800 mb-6">
              <li className="text-justify">
                <strong>Registration & Application</strong>: Register as a new user on the HSPCB's OCMMS portal and submit your application for CTE or CTO.
              </li>
              <li className="text-justify">
                <strong>Document Submission</strong>: Attach required documents, including:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>CA Certificate.</li>
                  <li>Site plan & Schematic diagram.</li>
                  <li>Details of raw materials, production process, water usage, and waste generation.</li>
                  <li>Proof of fee payment.</li>
                  <li>Registration documents (MoA/Partnership Deed).</li>
                </ul>
              </li>
              <li className="text-justify">
                <strong>Fee Payment</strong>: Pay the processing fee online, which varies by industry type and scale.
              </li>
              <li className="text-justify">
                <strong>Scrutiny & Inspection</strong>: HSPCB scrutinises the application; an inspection of your site follows.
              </li>
              <li className="text-justify">
                <strong>Approval/Rejection</strong>: If compliant, consent is granted; if incomplete, a show-cause notice is issued.
              </li>
              <li className="text-justify">
                <strong>Follow-up</strong>: Respond to notices and follow up with authorities to ensure a smooth process.
              </li>
            </ol>
            <Image src={img} alt="Pollution Noc In Haryana" className="w-full h-auto rounded-l g s hadow-md" />
          </Section>

          <Section
            id="fees"
            title={
              <>
                <FaCalculator className="inline mr-2" />
                Fees For Pollution NOC In Haryana?
              </>
            }
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Typical HSPCB Fee Range:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
              <li>White Category: No fee</li>
              <li>Green Category: ₹5,000 – ₹15,000</li>
              <li>Orange Category: ₹10,000 – ₹50,000</li>
              <li>Red Category: ₹50,000 – ₹2,00,000</li>
            </ul>
            <p className="font-semibold text-gray-700">Note: Government fees are separate from consultancy charges.</p>
          </Section>

          <Section
            id="who-needs"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Who Needs To Obtain The Pollution NOC In Haryana?
              </>
            }
          >
            <p className="text-justify mb-4">
              Every Industrial and commercial unit that generates emissions, effluents, or waste requires <span className="-400 px-1">NOC from pollution</span> control board in Haryana. This includes:
            </p>
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
          </Section>

          <Section
            id="renewal"
            title={
              <>
                <RiTimeLine className="inline mr-2" />
                Renewal Process of Pollution NOC in Haryana
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

            <h3 className="text-xl font-bold text-gray-800 mb-4">How To Apply For Pollution NOC Renewal In Haryana?</h3>
            <p className="text-justify mb-4">
              The renewal process of the Pollution NOC in Haryana is very similar to the process of registration for the Pollution NOC:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">You have to log in to the HSPCB's OCMMS portal with the existing credentials you created when applying for the pollution NOC first time.</li>
              <li className="text-justify">Then select the already registered industrial unit</li>
              <li className="text-justify">And navigate to the CTO renewal service,</li>
              <li className="text-justify">Click on it and fill in the details they will ask.</li>
              <li className="text-justify">Upload required documents ( the documents would be the same as the required when registering for the first time.</li>
              <li className="text-justify">Just one copy of the existing CTO certificate will be required; otherwise, all the documents will be the same, like before.</li>
              <li className="text-justify">At last, pay the renewal fees.</li>
            </ul>
          </Section>

          <Section
            id="renewal-cost"
            title={
              <>
                <FaCalculator className="inline mr-2" />
                How much does It cost For Pollution NOC Renewal In Haryana?
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
              Failure to obtain or renew a Pollution NOC can lead to heavy fines, closure of operations, disconnection of utilities, and even prosecution under environmental laws. In Haryana, HSPCB is vigilant and often initiates action against defaulting units.
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
                <strong>CTE (Consent to Establish)</strong>: 20 to 30 working days, depending on category and application completeness.
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
            id="choose-us"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Choose us?
              </>
            }
          >
            <p className="text-justify">
              Factorylicence.in provides various services like guidance in obtaining a factory license, fire NOC, and pollution NOC. With our professional assistance, Document preparation, fees, and security processing and renewal process become easy. Contact us and get the benefits of our expert consultation during HSPCB inspections for smooth verification.
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
                    label: "Calculator",
                    id: "calc",
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
                    label: "Why Choose Us",
                    id: "choose-us",
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

      {/* FAQs */}
      <div id="faqs">
        <FaqSectionPollutionHaryana />
      </div>

      {/* Contact Form Popup */}
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
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
