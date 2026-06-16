"use client";

import { lazy, Suspense, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { FaCalculator } from "react-icons/fa";

import { RiTimeLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import TH from "@/components/TH";
import FactoryLicenseCalculatorHaryana from '@/components/FactoryLicenseCalculatorHaryana'

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

import HeroRotatingBackground from "@/components/HeroRotatingBackground";
import { PAGE_IMAGES } from "@/lib/heroBackgrounds";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";
import ContactFormBlogs from "@/components/ContactFormBlogs";
import HeroVideoSection from "@/components/HeroVideoSection";
import FaqSection from "@/components/FaqSectionHaryana";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import StateFaqCTA from "@/components/StateFaqCTA";
import Head from "next/head";
import Link from "next/link";

export default function FactoryLicenceDelhiPage() {
  const [showPopup, setShowPopup] = useState(false);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Factory Licence Registration & Renewal Services in Haryana" },
  ];
  const heroBackgroundAlts = [
    "Factory Act in Haryana",
    "Haryana Factory Licence Verification",
    "Haryana Factory License",
  ];

  return (
    <div>
      <Head>
        <title>Factory License in Haryana – Online Apply, Fees & Registration</title>
        <meta
          name="description"
          content="Get factory license Haryana with online registration support. Apply factory license in Haryana, check factory licence fees in Haryana & expert factory licence Haryana help.."
        />
        <meta
          name="keywords"
          content="factory license haryana, factory license in haryana, factory license in haryana, factory licence fees in haryana, factory licence haryana"
        />
        <meta
          property="og:title"
          content="Factory License in Haryana – Online Apply, Fees & Registration"
        />
        <meta
          property="og:description"
          content="Get factory license Haryana with online registration support. Apply factory license in Haryana, check factory licence fees in Haryana & expert factory licence Haryana help.."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/factory-licence-in-haryana"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/assets/factory-license-haryana-og.jpg"
        />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link
          rel="canonical"
          href="https://factorylicence.in/factory-licence-in-haryana"
        />
      </Head>
      {/* Hero Section */}

      <section className="relative text-white md:py-0 py-20 md:px-0 px-4 mt-20 overflow-hidden">
        <HeroRotatingBackground
          alts={heroBackgroundAlts}
          images={PAGE_IMAGES.factoryLicenceHaryana.hero}
        />

        {/* Hero Content */}
        <div className=" max-w-7xl   mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0  md:py-12 relative z-20">
          {/* Left Content */}
          <div className="md:w-1/2">

            <BreadcrumbNav items={breadcrumbItems} placement="hero" />
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Factory License in Haryana – Apply Online & Check Fees
            </h1>
            <p className="text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure compliance and legal security for your manufacturing unit
              in Haryana with our expert licensing assistance.
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </div>

          {/* Right: Contact form */}
          <div className="md:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </section>
      <HeroVideoSection />
      {/* Main Content */}
      <section className="max-w-7xl  mx-auto md:py-4 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        {/* Left Side Content */}
        <div className="md:col-span-3 space-y-14">

          <Section>
            <FactoryLicenseCalculatorHaryana />
          </Section>
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Factory Licence In Haryana: How to Apply, Documents, And Fee Structure

              </>
            }
          >
            <p className="text-justify">
              Do you intend to build a new factory in Haryana? However, are you aware of the regulatory requirements you must meet to register your factory license in Haryana? If not, don't worry, we can assist you with the entire factory registration procedure. All of the details regarding the registration process of the factory licence in Haryana, renewal, and factory licence fees in Haryana will be provided to you here.

            </p>
            <br />

            <p className="text-justify">
              Factorylicence.in is one of the best legal service providers in Haryana. Our expert assistance can help you obtain all the <a href="https://factorylicence.in/" className="text-blue-600 underline">factory licences</a> you need to set up and operate a factory in Haryana.

            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Factory Licence In Haryana Important?
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className=" text-justify">
                According to the Factories Act, 1948, without having a factory licence in Haryana, your factory will be considered illegal and will be liable for legal actions. If a factory is found operating without a factory licence in Haryana, then it will face penalties, heavy fines, and even imprisonment. A factory licence in Haryana is necessary if you want to avoid all these problems.

              </li>
              <li className=" text-justify">
                A Factory license Haryana not only helps in protecting from legal actions, but it also increases the credibility of your business. Having a Factory License Haryana gives an assurance that the factory facility follows all the safety standards, governed by the government, to safeguard the health of the workers. This makes the process of getting approvals for other licences and participation in government tenders easy.

              </li>
              <li className=" text-justify">
                Factory license Haryana keeps your business legal in the eyes of the law and builds trust among the stakeholders, benefiting you in every aspect. So don't lose this benefit, apply for a factory licence in Haryana now with Factorylicence.in !

              </li>
            </ul>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For The Factory Licence In Haryana
              </>
            }
          >
            <p className="text-justify mb-4">
              The eligibility criteria for the registration of the <span className="n-300 px-1">Factory licence in Haryana</span> are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-4">
              <li className="text-justify">
                Factories employing 10 or more workers with power.
              </li>
              <li className="text-justify">
                Factories employing 20 or more workers without power.
              </li>
            </ul>
            <p className="text-justify mb-4">
              According to the Factories Act, 1948, and the Haryana Factories Rules, 1950, if your unit falls under any of these categories, it is mandatory to register it through the Labour Department, Government of Haryana.
            </p>
            <p className="text-justify">
              Hire factorylicence.in to help you with all the legal formalities to apply Factory license Haryana.
            </p>
          </Section>





          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Applying Factory Licence In Haryana
              </>
            }
          >
            <p className="text-justify mb-4">
              The documentation process is a crucial step in the <span className="n-300 px-1">Factory licence Haryana</span> registration process. Double-check all the required documents before final submission. This is the list of required documents:
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
                Sale Deed/ Rent Agreement of premises.
              </li>
              <li className="text-justify ">
                Sanctioned load from HVPNL / Latest Electricity Bill
              </li>
              <li className="text-justify ">
                Pollution NOC
              </li>
              <li className="text-justify ">
                Fire NOC
              </li>
            </ul>
          </Section>

          {/* <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits of Obtaining a Factory Licence
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className=" text-justify">
                Legal Recognition: It provides a legal status to the
                manufacturing unit, ensuring smooth business operations.{" "}
              </li>
              <li className=" text-justify">
                Enhanced Credibility: It builds trust among clients, suppliers
                and stakeholders by demonstrating timely compliance with
                statutory requirements.
              </li>
              <li className="text-justify ">
                Access to Government Schemes: It provides the eligibility for
                various government incentives and schemes aimed at promoting
                industrial growth.
              </li>
              <li className="text-justify ">
                Employee Welfare: It ensures that implementation of health,
                safety and welfare measures for the employees, ultimately
                leading to increased efficiency and productivity.
              </li>
              <li className="text-justify ">
                Avoidance of Penalties: It safeguards from falling into any kind
                of legal actions, fines and potential shutdowns due to
                non-compliance.
              </li>
            </ul>
          </Section> */}



          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                How To Register For Factory Licence In Haryana?
              </>
            }
          >
            <p className="text-justify mb-4">
              You can apply for the licence by visiting the Haryana state's single Window clearance system or the Labour Department's portal. Just follow these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-800">
              <li className="text-justify ">
                <strong>Online Registration</strong>: Visit the Haryana Labour Department Portal
                and create an account.
              </li>
              <li className="text-justify ">
                <strong>Application Form</strong>: Fill out the form with accurate factory
                details.
              </li>
              <li className="text-justify ">
                <strong>Document Upload</strong>: Upload all required documents in the specified
                format.
              </li>
              <li className="text-justify ">
                {" "}
                <strong>Fee Payment</strong>: Pay the application fee through the online portal.
              </li>
              <li className="text-justify ">
                <strong>Inspection</strong>: The department will inspect the premises.
              </li>
              <li className="text-justify ">
                <strong>Licence Approval</strong>: Post-inspection, the licence will be granted
                if all criteria are met.
              </li>
            </ol>
          </Section>

          <img
            src={PAGE_IMAGES.factoryLicenceHaryana.process}
            alt="Factory Licence in Haryana"
            loading="lazy"
            className="w-full h-auto"
            width={1200}
            height={800}
          />




          <section className="p max-w-7xl mx-auto overflow-hidden" id="fee">
            <h2 className="text-3xl font-semibold flex items-center gap-2 mb-4 text-[#7c4bdf]">
              <HiOfficeBuilding className="text-[#7c4bdf]" />
              Factory licence fees in Haryana
            </h2>
            <div className="md:w-full w-[90vw]">
              <TH />
            </div>

            {/* Renewal & Amendment Section */}
            <div className="mt-10" id="renewal">
              <h2 className="text-3xl font-semibold text-[#7c4bdf] mb-4 flex items-center gap-2">
                <RiTimeLine className="text-[#7c4bdf]" />
                Renewal & Amendment For the Factory Licence in Haryana
              </h2>
              <p className="text-justify mb-4">
                A <span className="n-300 px-1 font-medium text-black">Factory License in Haryana</span> is generally issued for a duration of 1 to 5 years. The validity of the license can be chosen while applying for a factory licence Haryana. Renewal applications are due before expiration to avoid penalties.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Renewal Fee</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
                <li className="text-justify">
                  Haryana follows an HP and manpower based renewal fee structure. The exact amount may differ depending on the type and size of the factory.
                </li>
                <li className="text-justify">
                  <strong>Renewal includes:</strong>
                  <ul className="list-disc pl-8 mt-2 space-y-1">
                    <li>Applicable license fees based on HP and manpower.</li>
                    <li>Processing charges and government treasury fees.</li>
                    <li>Note: Exact renewal charges are disclosed during the application process on the Haryana Labour Department's official portal.</li>
                  </ul>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Amendment Fee</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-8">
                <li className="text-justify">
                  ₹100 per change (e.g., change in name, occupier, address).
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-2">Penalties & Timelines</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
                <li className="text-justify">
                  Non-compliance with the Factories Act, 1948, may result in fines up to ₹1,00,000 or imprisonment up to 2 years.
                </li>
                <li className="text-justify">
                  A late <Link href="/" className="text-blue-600 underline">factory licence renewal</Link> fee of 25% is payable, which is charged after the renewal application is submitted. The date of submission of the application will be noted to calculate the late fee.
                </li>
              </ul>

              <p className="text-justify mt-8">
                <strong>Timeline</strong> - The timeline for obtaining a factory licence in the state of Haryana generally takes 15 to 18 working days, subject to document availability and government approvals.
              </p>
            </div>
          </section>

          <Section
            id="why-choose"
            title="Why choose us?"
          >
            <p className="text-justify mb-4">
              The registration process of a factory license in Haryana may seem easy, but a single mistake can cause a delay in the process. To save time and any possible rejection, you will need a professional factory license consultant who will guide you throughout the process. We have a team of expert legal advisors who will provide you with comprehensive support to ensure your error-free applications.
            </p>
            <p className="text-justify">
              So don't waste more time, call Factorylicence.in now and get your factory registered as soon as possible!
            </p>
          </Section>
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
                  {
                    label: "Why choose us?",
                    id: "why-choose",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "FAQS",
                    id: "faqs",
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
      <FaqSection />
    </div>
  );
}
function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h2 className="md:text-3xl text-2xl  font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
