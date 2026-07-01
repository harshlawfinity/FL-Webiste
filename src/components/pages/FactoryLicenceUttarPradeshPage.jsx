"use client";

import { lazy, Suspense, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { RiTimeLine } from "react-icons/ri";
import TUP from "@/components/TUP";

import { HiOfficeBuilding } from "react-icons/hi";
import {
  FaQuestionCircle,
  FaCheckCircle,
  FaUserCheck,
  FaFileAlt,
  FaListOl,
} from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";


import HeroRotatingBackground from "@/components/HeroRotatingBackground";
import { PAGE_IMAGES } from "@/lib/heroBackgrounds";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";
import ContactFormBlogs from "@/components/ContactFormBlogs";
import HeroVideoSection from "@/components/HeroVideoSection";
import FaqSection from "@/components/FaqSectionUP";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import StateFaqCTA from "@/components/StateFaqCTA";
import Link from "next/link";
import FactoryLicenseCalculatorUP from "../FactoryLicenseCalculatorUP.jsx";

export default function FactoryLicenceUttarPradeshPage() {
  const [showPopup, setShowPopup] = useState(false);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Factory Licence Registration & Renewal Services in Uttar Pradesh" },
  ];
  const heroBackgroundAlts = [
    "Factories Act License in Up",
    "Factory License Renewal Uttar Pradesh",
    "Factory Licence in Up",
  ];

  return (
    <div>
      {/* Hero Section */}

      <section className="relative text-white md:py-0 py-20 md:px-0 px-4 mt-20 overflow-hidden">
        <HeroRotatingBackground
          alts={heroBackgroundAlts}
          images={PAGE_IMAGES.factoryLicenceUttarPradesh.hero}
        />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0  md:py-12 relative z-20">
          {/* Left Content */}
          <div className="md:w-1/2">


            <BreadcrumbNav items={breadcrumbItems} placement="hero" />
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Factory Licence in Uttar Pradesh – Apply & Renewal Online Support
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

          <div className="md:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </section>
      <HeroVideoSection />
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
              The Factories Act of 1948 makes it illegal to operate a factory without a <Link href="/factory-licence-in-uttar-pradesh" className="n-300 underline text-blue-500 px-1">Factory license </Link> ; therefore, getting a factory licence in Uttar Pradesh is necessary to comply with the law. If a factory is discovered operating without a proper Factory licence, it will face severe fines and, in certain situations, even jail. For anyone wishing to establish or run a manufacturing facility in Uttar Pradesh, this makes the licence compulsory to have.
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
          <img
            loading="lazy"
            src={PAGE_IMAGES.factoryLicenceUttarPradesh.process}
            alt="Factory Licence Process in Uttar Pradesh"
            className="w-full h-auto"
            width={1200}
            height={800}
          />

          <section id="fee" className="space-y-4">
            <h2 className="text-3xl font-semibold flex mb-4 text-[#7c4bdf]">
              <HiOfficeBuilding className="text-[#7c4bdf]" />
              Factory licence fees in Uttar Pradesh
            </h2>

            <div data-cms-preserve="true" className="md:w-full w-[90vw]">
              <TUP />
            </div>
          </section>

          <Section
            id="renewal"
            title={
              <>
                <RiTimeLine className="inline mr-2" />
                Renewal & Amendment For the Factory Licence in Uttar Pradesh
              </>
            }
          />

          <Section
            id="why-choose"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Why choose us?
              </>
            }
          />
        </div>

        {/* Right Side Navigation */}
        <aside className="hidden md:block">
          <div className="sticky top-24 space-y-4">
            <ContactFormBlogs />
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
                    label: "Renewal & Amendment",
                    id: "renewal",
                    icon: <RiTimeLine className="inline mr-2" />,
                  },
                  {
                    label: "Why choose us?",
                    id: "why-choose",
                    icon: <FaCheckCircle className="inline mr-2" />,
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
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <BreadcrumbNav items={breadcrumbItems} placement="mobile" />
      <StateFaqCTA onClick={() => setShowPopup(true)} />
      <div id="faq-section">
        <FaqSection />
      </div>
    </div>
  );
}
function Section({ id, title, children }) {
  return (
    <div id={id} className="space-y-4">
      {title ? (
        <h2 className="md:text-3xl text-2xl font-semibold text-[#7A3EF2] flex items-center gap-2">
          {title}
        </h2>
      ) : null}
      {children}
    </div>
  );
}
