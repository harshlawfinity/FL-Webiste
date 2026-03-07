

"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { RiTimeLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import TD from "@/components/TD";
import FactoryLicenseCalculatorDelhi from '@/components/FactoryLicenseCalculatorDelhi'
import { FaCalculator } from "react-icons/fa";

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

import ddddd from "../../assets/ddddd.webp";

import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";
import HeroVideoSection from "@/components/HeroVideoSection";

import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import FaqSectionDelhi from "@/components/FaqSectionDelhi";
import Image from "next/image";
import Head from "next/head";
import PollutionFeeCalculatorDelhi from "@/components/PollutionFeeCalculatorDelhi";
import Link from "next/link";

export default function FactoryLicenceDelhiPage() {
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
        <title>Factory Licence in Delhi – Online Application, Fees & Renewal</title>
        <meta
          name="description"
          content="Get factory licence in Delhi with online application support. Check factory licence fees in Delhi, Delhi factory license renewal online & NDMC renewal process help."
        />
        <meta
          name="keywords"
          content="factory licence in delhi, factory license in delhi, delhi factory license, factory licence fees in delhi, north delhi municipal corporation factory licence renewal online, Factory Licence Renewal in Delhi, factory licence online application in delhi"
        />
        <meta
          property="og:title"
          content="Factory Licence in Delhi – Online Application, Fees & Renewal"
        />
        <meta
          property="og:description"
          content="Get factory licence in Delhi with online application support. Check factory licence fees in Delhi, Delhi factory license renewal online & NDMC renewal process help."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/factory-licence-in-delhi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://factorylicence.in/assets/factory-license-delhi-og.jpg"
        />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link
          rel="canonical"
          href="https://factorylicence.in/factory-licence-in-delhi"
        />
      </Head>

      <section className="relative text-white py-20 md:px-0 px-4 mt-20 overflow-hidden">
        {/* Rotating background images */}
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              priority={index === 0}
              key={index}
              src={img}
              alt={`bg-${index}`}
              width={1920}
              height={1080}
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


            <div className="max-w-7xl mx-auto md:px-0 px-4 mt-6">
              <nav
                aria-label="Breadcrumb"
                className="flex text-white flex-wrap mb-4 items-center gap-2 text-sm"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Factory License Registration & Renewal Services in Delhi" },
                ]
                  .filter(Boolean)
                  .map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      {idx > 0 && <span className="px-2 text-gray-400">›</span>}
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-gray-50 hover:underline"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-gray-50">
                          {item.label}
                        </span>
                      )}
                    </div>
                  ))}
              </nav>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Factory Licence in Delhi – Apply Online, Fees & Renewal Support
            </h1>
            <p className="text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure compliance and legal security for your manufacturing unit
              in Delhi with our expert licensing assistance.
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
      <section className="max-w-7xl mx-auto md:py-16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        {/* Left Side Content */}

        <div className="md:col-span-3 space-y-6">
          <Section id="calc">
            <FactoryLicenseCalculatorDelhi />

          </Section>
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Factory Licence In Delhi: How to Apply, Documents, And Fee Structure

              </>
            }
          >
            <p className="text-justify">
              Planning to set up a manufacturing unit in the capital? Then, obtaining a factory licence in Delhi will be the first thing on your priority list. This licence is issued under the Factories Act, 1948 & Delhi Factories Rules, 1950. This licence is important to operate a Factory unit in Delhi. A Delhi factory license is a legal document that serves as a guarantee that your factory complies with all the essential requirements concerning health and safety, as well as the welfare facilities for working employees.

            </p>
            <br />
            <p className="text-justify">
              If a factory is found operating without a Factory licence in Delhi, then it will be eligible for legal actions and penalties by the government authorities. So make sure you get your Factory license before operating.

            </p>
            <br />
            <p className="text-justify">
              Factorylicence.in can help you here. We are one of the trustworthy legal services providers. We can help you get various licences like factory licence in Delhi, MCD factory licence renewal South Delhi, North Delhi Municipal Corporation factory licence renewal online, Factory Licence Renewal in Delhi, and factory licence online application in Delhi.

            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                What Is The Need For A Factory Licence In Delhi?

              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">
                You will face legal actions against yourself and your factory if you try to run a manufacturing unit with the Factory licence in Delhi. The Factories Act 1948 made the Delhi factory license compulsory to have for setup and operate a manufacturing unit within the capital boundaries.

              </li>
              <br />
              <li className="text-justify ">
                A factory license also helps the unit by generating trust inside the hearts of suppliers, customers, and government agents. A manufacturing unit with a factory licence is eligible for the government scheme and benefits like industrial incentives, which non-licensed factories won’t get. Registered factories also get a much validation in the eyes of insurance companies as compared to non-licensed ones. A factory license is considered an important document for both the financial protection and longevity of a business.

              </li>
            </ul>

            <br />
            <p>
              Contact us to help you with the registration process of the MCD factory licence renewal South Delhi.

            </p>
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
              <li className="text-justify ">
                Legal Recognition: It provides a legal status to the
                manufacturing unit, ensuring smooth business operations.{" "}
              </li>
              <li className="text-justify ">
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
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For A Factory Licence In Delhi Online

              </>
            }
          >
            <p className="mb-4">If a factory meets these points, then it is eligible for the factory licence registration:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">Factories with 10 or more workers, with the aid of power.</li>
              <li className="text-justify ">Manufacturing unit with 20 or more workers operating without using power.</li>
              <li className="text-justify ">Factories engaged in hazardous processes or dangerous operations as defined under the law.</li>
              <li className="text-justify ">Startups and MSMEs involved in the production, processing, or assembling of goods.</li>
              <li className="text-justify ">Importers are establishing a local manufacturing facility in India.</li>
              <li className="text-justify ">Premises using machinery or power-driven tools for producing or modifying goods.</li>
              <li className="text-justify ">Public or private sector enterprises that fall under the definition of a "factory" in the Factories Act, 1948.</li>
              <li className="text-justify ">Industrial warehouses use machinery for processing, altering, repackaging, or handling goods.</li>
              <li className="text-justify ">Export-Oriented Units (EOUs) are involved in any manufacturing activity.</li>
              <li className="text-justify ">Entities that require pollution control or fire safety clearance due to operational risks are also subject to stricter regulatory oversight.</li>
            </ul>
            <br />
            <p>
              <Link className="text-[#7c4bdf] font-semibold hover:underline" href="https://factorylicence.in" target="_blank">Factorylicence.in</Link> can give you assistance for the factory licence online application in Delhi.
              <br />
              Call us now!
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Online Registration Of Factory Licence
              </>
            }
          >
            <p className="mb-4 text-justify">
              Documentation is the most crucial part of the Factory registration process. If you miss or submit any wrong documents, then your factory license application process will take more than usual because of the delay due to the wrong or missing documents.
            </p>
            <p className="mb-4 font-medium">
              So it is good to double-check all the documents before submitting. We have mentioned the list required for the factory registration process. Documents required are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">Building Plan Approval</li>
              <li className="text-justify ">Layout Plan as per the Factories Act</li>
              <li className="text-justify ">KYC Documents of Owners/Directors (Email id, Mobile No., PAN, Aadhaar, Voter id, Bank Statement, etc.)</li>
              <li className="text-justify ">Incorporation documents (COI, Partnership Deed, LLP Agreement, etc.)</li>
              <li className="text-justify ">Sale Deed/ Rent Agreement of premises.</li>
              <li className="text-justify ">Sanctioned load from the authority / Latest Electricity Bill</li>
              <li className="text-justify ">DPCC NOC</li>
              <li className="text-justify ">Structural Stability certificate from an approved architect</li>
              <li className="text-justify ">Fire NOC (for premises above 250 sq metres)</li>
              <li className="text-justify ">Property Tax Receipt</li>
              <li className="text-justify ">Manufacturing process flow chart</li>
            </ul>
            <br />
            <p className="font-medium">
              We have a team of professional Factory license consultants who can help you with the process of Factory Licence Renewal in Delhi. Go ahead and make a call now!
            </p>
          </Section>




          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                How To Apply Factory Licence Online Application In Delhi
              </>
            }
          >
            <p className="mb-4">Follow this simple process to apply for factory licence in Delhi:</p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-800">
              <li className="text-justify ">
                <strong>Document Preparation:</strong> Gather all the required documents as per the checklist.
              </li>
              <li className="text-justify ">
                <strong>Online Application:</strong> Visit the MCD Portal and navigate to the Trade & Factory Licences section.
              </li>
              <li className="text-justify ">
                <strong>Form Submission:</strong> Fill out the application form and upload necessary documents.
              </li>
              <li className="text-justify ">
                <strong>Fee Payment:</strong> Pay the prescribed licence fee online.
              </li>
              <li className="text-justify ">
                <strong>Inspection:</strong> Await inspection by the concerned authorities.
              </li>
              <li className="text-justify ">
                <strong>Licence Issuance:</strong> Upon successful verification, the <a href="https://factorylicence.in/" className="text-blue-500 underline">factory licence</a> will be issued.
              </li>
            </ol>
          </Section>



          <Image
            loading="lazy"
            src={ddddd}
            alt="Factoy Licence In Delhi"
          />



          <section className="p max-w-7xl mx-auto" id="fee">
            <h2 className="text-3xl font-semibold flex mb-4 text-[#7c4bdf]">
              <HiOfficeBuilding className="text-[#7c4bdf]" />
              Factory Licence Fees In Delhi
            </h2>

            <div className="md:w-full w-[90vw]">
              <TD />
            </div>

            {/* Renewal Fee Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#7c4bdf] mb-2 flex items-center gap-2">
                <RiTimeLine className="text-[#7c4bdf]" />
                Renewal Fee
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  <strong>Within April (grace period):</strong>
                </li>
                <ul className="list-disc list-inside pl-4">
                  <li>License Fee = HP-rate × Total HP</li>
                  <li>Permission Fee = Unit Charge (₹1000) + License Fee</li>
                  <li>Processing Fee = 50% of License Fee</li>
                  <li>Transaction Fee = ₹10</li>
                  <li>Convenience Fee = 2.5937% of Total Amount</li>
                </ul>

                <li>
                  <strong>After April (up to year end):</strong>
                </li>
                <ul className="list-disc list-inside pl-4">
                  <li>
                    <>Same as above plus:</> Late fee = ₹150 (for first 3
                    months) + 5% of license fee per additional month
                  </li>
                </ul>

                <li>
                  <strong>Beyond one year:</strong>
                </li>
                <ul className="list-disc list-inside pl-4">
                  <li>Above charges + Arrear = ₹2,000 flat</li>
                </ul>
              </ul>
            </div>

            {/* Amendment Fee Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#7c4bdf] mb-2 flex items-center gap-2">
                <AiOutlineEdit className="text-[#7c4bdf]" />
                Amendment Fee
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Processing Fee = ₹550 + 2.5937% Convenience Fee</li>
                <li>Registration Charges = Nil</li>
                <li>
                  Amendment fee proper: Assessed by MCD officials at approval
                </li>
              </ul>
            </div>
          </section>
          <Section
            id="penalties"
            title={
              <>
                <FaExclamationTriangle className="inline mr-2 text-red-500" />
                Penalties in Case of Non-Compliance
              </>
            }
          >
            <ul className="text-justify list-disc pl-6 space-y-2 text-gray-800 ">
              <li className="text-justify ">
                Operating a factory without a valid licence can lead to
                penalties up to ₹1,00,000 or imprisonment up to 2 years or both.{" "}
                <br />
              </li>
              <li className="text-justify ">
                Delayed renewal attracts a late fee of 25% of the fee payable
                for a calendar year which is charged wherein the application for
                renewal has been submitted in office after expiry of the time
                limit; i.e., after 30 days before the due date of expiry of
                Licence. System will auto-calculate total fee including late fee
                which has to be deposited online.
              </li>
            </ul>
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
              Standard Processing Time - The factory licence registration takes around 25 to 30 working days, depending on document readiness and government processing time.
            </p>
          </Section>

          <Section
            id="renewal-delhi"
            title={
              <>
                <RiTimeLine className="inline mr-2" />
                Factory Licence Renewal in Delhi
              </>
            }
          >
            <p className="text-justify mb-4">
              A Factory License in Delhi is usually valid for 1 to 5 years. Owners must apply for renewal before expiry to avoid penalties.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 mb-6">
              <li><strong>Grace Period:</strong> April is often considered the renewal grace period.</li>
              <li><strong>Late Fee:</strong> Delay attracts a late fee of 25% of the license fee and further penalties.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#7A3EF2] mb-4">Renewal Fee</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-800 mb-6">
              <li>
                <strong>Within April (grace period):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>License Fee = HP-rate × Total HP</li>
                  <li>Permission Fee = Unit Charge (₹1000) + License Fee</li>
                  <li>Processing Fee = 50% of License Fee</li>
                  <li>Transaction Fee = ₹10</li>
                  <li>Convenience Fee = 2.5937% of Total Amount</li>
                </ul>
              </li>
              <li>
                <strong>After April (up to year-end):</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Same as above plus: Late fee = ₹150 (for first 3 months) + 5% of license fee per additional month</li>
                </ul>
              </li>
              <li>
                <strong>Beyond one year:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Above charges + Arrear = ₹2,000 flat</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#7A3EF2] mb-4">Amendment Fee</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Processing Fee = ₹550 + 2.5937% Convenience Fee</li>
              <li>Registration Charges = Nil</li>
              <li>Amendment fee proper: Assessed by MCD officials at approval</li>
            </ul>
          </Section>

          <Section
            id="why-choose-us"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Why choose us?
              </>
            }
          >
            <p className="text-justify mb-4">
              The registration process of factory licence in delhi may seem easy, but a single mistake can cause a delay in the process. which will be a waste of time to save any possible rejection, you will need a professional factory license consultant who will guide you throughout the process. We have a team of expert legal advisors who will provide you with comprehensive support to ensure your error-free applications.
            </p>
            <p className="font-semibold text-[#7A3EF2]">
              So don't waste more time, call Factorylicence.in now and get your factory registered as soon as possible!
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
                    id: "penalties",
                    icon: (
                      <FaExclamationTriangle className="inline mr-2 text-red-500" />
                    ),
                  },
                  {
                    label: "Renewal",
                    id: "renewal-delhi",
                    icon: <RiTimeLine className="inline mr-2" />,
                  },
                  {
                    label: "Why Choose Us",
                    id: "why-choose-us",
                    icon: <FaCheckCircle className="inline mr-2" />,
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

      <FaqSectionDelhi />
    </div>
  );
}
function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h2 className="md:text-3xl text-xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
