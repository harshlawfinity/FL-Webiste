"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import img from '@/assets/pollution/up.png'
import PollutionFeeCalculatorUttarPradesh from "@/components/PollutionFeeCalculatorUttarPradesh";
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
import FaqSectionPollutionUP from "@/components/FaqSectionPollutionUP"; // You can rename this if needed
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import ContactForm from "@/components/ContactForm";
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
        <title>Pollution NOC in Uttar Pardesh, Apply & Renew Pollution NOC Online in Uttar Pardesh - Factorylicence</title>
        <meta
          name="description"
          content="Pollution NOC in Uttar Pardesh - Get pollution NOC in Uttar Pradesh from the Pollution Control Board. Apply for pollution NOC certificate, CTO approval, and factory pollution NOC with complete document support."
        />
        <meta
          name="keywords"
          content="pollution noc in uttar pardesh, noc pollution control board in uttar pardesh, pollution noc certificate in uttar pardesh, noc from pollution control board in uttar pardesh, cto pollution control board in uttar pardesh, documents required for pollution noc, pollution noc for factory in uttar pardesh"
        />
        <meta
          property="og:title"
          content="Pollution NOC in Uttar Pardesh, Apply & Renew Pollution NOC Online in Uttar Pardesh - Factorylicence"
        />
        <meta
          property="og:description"
          content="Pollution NOC in Uttar Pardesh - Get pollution NOC in Uttar Pradesh from the Pollution Control Board. Apply for pollution NOC certificate, CTO approval, and factory pollution NOC with complete document support."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/pollution-noc-in-uttar-pradesh"
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
              alt={`Pollution Noc In Uttar Pradesh`}
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
                      { label: "Pollution NOC Registration in Uttar Pradesh" },
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
      <section className="max-w-7xl mx-auto md:py-10 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        <div className="md:col-span-3 space-y-14">
          <Section id="calc">

            <PollutionFeeCalculatorUttarPradesh />

          </Section>
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
        Without a pollution NOC in Uttar Pradesh, a factory cannot be established or run. The NOC pollution control board in Uttar Pradesh (or UPPCB) granted this licence in order to guarantee that the industry will not negatively impact the environment. Under the Water (Prevention & Control of Pollution) Act of 1974 and the Air (Prevention & Control of Pollution) Act of 1981, there are two NOCs: Consent to Establish (CTE) and Consent to Operate (CTO) that you need to obtain before establishing and operating a business.

            </p>
            <br />
            <p className="text-justify">
Hire Factorylicence.in and ensure your Pollution NOC in Uttar Pradesh with our comprehensive support. We also help the CTO pollution control board in Uttar Pradesh. Get in touch with our consultant right now!

            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
Why Pollution NOC In Uttar Pradesh Important?
              </>
            }
          >
            <p className="text-justify">
          Having a Pollution NOC in Uttar Pradesh is an assurance that you provide to the government of Uttar Pradesh that your factory or business doesn’t cause any kind of harm to the government by polluting it in any way. Factories found running without a pollution NOC certificate in Uttar Pradesh can face many legal problems, like penalties, being prosecuted in court, and even being shut down of the business in some cases.

            </p>
            <br />
            <p className="text-justify">
            With Factorylicence.in you will get all-round assistance in getting a Pollution NOC for factory in Uttar Pradesh. Connect with our Consultant now!

            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
Advantages Of NOC In Uttar Pradesh Important?
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
                prerequisite for securing other licenses such as <a href="https://factorylicence.in/"  className="text-blue-600 underline">Factory License</a>, Fire NOC and Building Plan Approval.
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
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
Eligibility Criteria for Pollution NOC In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-6">
              In Uttar Pradesh, all manufacturing units, processing industries, hospitals, hotels, and businesses involved in any process that may affect the environment must obtain a Pollution NOC. Units are classified into red, orange, green, and white categories based on pollution load. Even small-scale units falling under the orange and green categories require formal consent.
            </p>

         
          </Section>

         

          <Section id="classification" title={
            <>
              <FaFileAlt className="inline mr-2" />
              Classification Of Pollution NOC categories In Uttar Pradesh

            </>
          }>

               <div className="space-y-6">
              {/* White Category */}
              <div className="bg-white border-l-4 border-gray-400 p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. White Category</h3>
                <p className="text-gray-700 mb-3">No NOC required, but intimation must be given.</p>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Organic manure</li>
                    <li>Assembling units with no effluent</li>
                    <li>Chalk making</li>
                  </ul>
                </div>
              </div>

              {/* Green Category */}
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-800 mb-2">2. Green Category</h3>
                <p className="text-green-700 mb-3">Low-risk activities.</p>
                <div>
                  <p className="font-semibold text-green-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 text-green-600 space-y-1">
                    <li>Notebook making</li>
                    <li>Packaging units</li>
                    <li>Printing units</li>
                    <li>Small-scale assembly</li>
                  </ul>
                </div>
              </div>

              {/* Orange Category */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-orange-800 mb-2">3. Orange Category</h3>
                <p className="text-orange-700 mb-3">Moderate pollution potential.</p>
                <div>
                  <p className="font-semibold text-orange-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 text-orange-600 space-y-1">
                    <li>Food processing</li>
                    <li>Mechanical workshops</li>
                    <li>Pharma distribution/storage</li>
                    <li>Warehouses handling chemicals</li>
                  </ul>
                </div>
              </div>

              {/* Red Category */}
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-red-800 mb-2">4. Red Category</h3>
                <p className="text-red-700 mb-3">High pollution risk industries.</p>
                <div>
                  <p className="font-semibold text-red-700 mb-2">Examples:</p>
                  <ul className="list-disc pl-6 text-red-600 space-y-1">
                    <li>Steel</li>
                    <li>Chemical manufacturing</li>
                    <li>Large-scale engineering units</li>
                    <li>Plastic moulding</li>
                  </ul>
                </div>
              </div>
            </div>



          </Section>


           <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
Documents Required For Pollution NOC In Uttar Pradesh
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
            id="fees"
            title={
              <>
                <FaCalculator className="inline mr-2" />
                Fees for Pollution NOC in UP
              </>
            }
          >
            <p className="text-justify mb-4">
              Fees depend on the category, size of the business, and pollution potential.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-4">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Typical UPPCB Fee Range</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>White Category:</strong> No fee</li>
                <li><strong>Green Category:</strong> ₹5,000 – ₹15,000</li>
                <li><strong>Orange Category:</strong> ₹10,000 – ₹50,000</li>
                <li><strong>Red Category:</strong> ₹50,000 – ₹2,00,000</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 italic">
              <strong>Note:</strong> Government fees are separate from consultancy charges.
            </p>
          </Section>

          <Section
            id="who-needs"
            title={
              <>
                <HiOfficeBuilding className="inline mr-2" />
                Who Needs To Obtain The Pollution NOC In Uttar Pradesh?
              </>
            }
          >
            <p className="text-justify mb-4">
              Businesses involved in these activities need to obtain the Pollution NOC:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Manufacturing Entities</li>
              <li>Health Care Establishments</li>
              <li>Traders</li>
              <li>E-waste Management entities.</li>
              <li>Solid Waste Management entities</li>
              <li>Hazardous Waste Management entities</li>
              <li>Battery Waste Management entities</li>
              <li>Plastic Waste Management entities</li>
              <li>Bio-Medical Waste Management entities</li>
            </ul>
          </Section>

          <Section
            id="renewal-process"
            title={
              <>
                <AiOutlineEdit className="inline mr-2" />
                Renewal Process of Pollution NOC in Uttar Pradesh
              </>
            }
          >
            <p className="text-justify">
              The Pollution NOC is issued for a limited period. You have to renew it before the expiry date to continue your operations legally. Failure in renewing the NOC on time will cause you penalties or suspension of operations.
            </p>
          </Section>

          <Section
            id="renewal-timing"
            title={
              <>
                <RiTimeLine className="inline mr-2" />
                When Should Pollution NOC Renewal Be Applied?
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2">
              <li>The renewal application should be filed at least 60 to 90 days before the expiry of the existing CTO.</li>
              <li>Operating with an expired NOC is treated as non-compliance, even if a renewal application is pending.</li>
            </ul>
          </Section>

          <Section
            id="renewal-steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                How To Apply For Pollution NOC Renewal In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-4">
              The renewal process of the Pollution NOC in Uttar Pradesh is very similar to the process of registration for the Pollution NOC:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>You have to log in to the Nivesh Mitra portal with the existing credentials you created when applying for the pollution NOC for first time.</li>
              <li>Then select the already registered industrial unit</li>
              <li>And navigate to the CTO renewal service.</li>
              <li>Click on it and fill in the details they will ask.</li>
              <li>Upload required documents. Most documents would be the same as the required when registering for the first time.</li>
              <li>Just one copy of the existing CTO certificate will be required; otherwise, all the documents will be the same, as before.</li>
              <li>At last, pay the renewal fees.</li>
            </ul>
          </Section>

          <Section
            id="renewal-cost"
            title={
              <>
                <FaCalculator className="inline mr-2" />
                How much does it cost For Pollution NOC Renewal In Uttar Pradesh?
              </>
            }
          >
            <p className="text-justify mb-4">
              The cost of Pollution NOC renewal is equal to or a percentage of the original CTO fee, based on:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Industry category (Red/Orange/Green)</strong></li>
              <li><strong>Capital investment</strong></li>
              <li><strong>Duration of renewal</strong></li>
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
              Operating without a Pollution NOC in Uttar Pradesh is a punishable offence. Businesses may face fines, notices, sealing of premises, disconnection of utilities, and prosecution. Non-compliance may also lead to the revocation of other permits. Factorylicence.in ensures timely registration and renewal to keep your business safe from such consequences.
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
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>CTE (Consent to Establish):</strong> 20 to 30 working days, depending on project size and category
              </li>
              <li>
                <strong>CTO (Consent to Operate):</strong> 45 to 60 working days, post successful inspection and documentation.
              </li>
              <li>
                <strong>Renewal:</strong> 30 to 60 working days, post successful inspection and documentation.
              </li>
            </ul>
            
            <p className="mt-4 text-justify">
              <a href="https://factorylicence.in/" className="text-blue-600 underline font-semibold">Factorylicenc.in</a> accelerates this timeline by handling all documentation, portal management with UPPCB authorities.
            </p>
          </Section>

          <Section
            id="why-choose-us"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Why Choose us?
              </>
            }
          >
            <p className="text-justify">
              Factorylicence.in is a trusted law consulting firm that helps businesses and industries obtain the Pollution Noc certificate in Uttar Pradesh, Delhi and Haryana. With expert guidance and end-to-end application support, our team ensures the process is smooth, compliant, and hassle-free so your operations can run without interruptions.
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
                    label: "Classification",
                    id: "classification",
                    icon: <FaUserCheck className="inline mr-2" />,
                  },
                  {
                    label: "Documents Required",
                    id: "documents",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Fees",
                    id: "fees",
                    icon: <FaCalculator className="inline mr-2" />,
                  },
                  {
                    label: "Who Needs",
                    id: "who-needs",
                    icon: <HiOfficeBuilding className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Process",
                    id: "renewal-process",
                    icon: <AiOutlineEdit className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Timing",
                    id: "renewal-timing",
                    icon: <RiTimeLine className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Steps",
                    id: "renewal-steps",
                    icon: <FaListOl className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Cost",
                    id: "renewal-cost",
                    icon: <FaCalculator className="inline mr-2" />,
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
                    label: "Why Choose us?",
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
      <h2 className="md:text-3xl text-2xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      {children}
    </div>
  );
}
