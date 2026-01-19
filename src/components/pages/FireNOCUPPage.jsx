"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import Head from "next/head";
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
  FaMoneyBillWave,
  FaCalendarAlt,
  FaSync,
  FaBuilding,
  FaCheckDouble,
} from "react-icons/fa";
import FaqSectionPollutionUP from "@/components/FaqSectionPollutionUP"; // You can rename this if needed
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import ContactFormModal from "@/components/ContactFormModal";
import img from '@/assets/fire/up.png'
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
        <title>Fire NOC in Uttar Pradesh, Apply & Renew Fire NOC Online in Uttar Pradesh - Factorylicence</title>
        <meta
          name="description"
          content="Fire NOC in Uttar Pradesh - Apply for Fire NOC in Uttar Pradesh online through Uttar Pradesh Fire Service. Get new Fire NOC, download certificate, and complete Fire NOC renewal online easily."
        />
        <meta
          name="keywords"
          content="fire noc uttar pradesh, uttar pradesh fire service noc, fire noc apply online uttar pradesh, fire noc online uttar pradesh, fire noc renewal uttar pradesh, fire noc renewal online in uttar pradesh, online fire noc uttar pradesh, renewal fire noc uttar pradesh"
        />
        <meta
          property="og:title"
          content="Fire NOC in Uttar Pradesh, Apply & Renew Fire NOC Online in Uttar Pradesh - Factorylicence"
        />
        <meta
          property="og:description"
          content="Fire NOC in Uttar Pradesh - Apply for Fire NOC in Uttar Pradesh online through Uttar Pradesh Fire Service. Get new Fire NOC, download certificate, and complete Fire NOC renewal online easily."
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
              alt={`Fire Noc In Uttar Pradesh}`}
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
            <div className="max-w-7xl mx-auto md:px-0 px4 mt-6">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap mb-4 items-center gap-2 text-sm"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Fire NOC Registration in Uttar Pradesh" },
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
                Apply For Fire NOC In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-4">
              <span className="400 px-1">Fire NOC in Uttar Pradesh</span> is a required document by law issued by the Uttar Pradesh Fire Services Department (No Objection Certificate) to verify that commercial businesses and buildings have complied with the fire safety regulations. According to the Uttar Pradesh Fire Prevention and Fire Safety Act, 2005, certain types of buildings must get a Fire NOC before they may be occupied or used for any form of activity.
            </p>
            <p className="text-justify">
              Through its professionals, Factorylicence.in provides helpful advice and comprehensive assistance in obtaining <span className="400 px-1">Uttar Pradesh fire service noc</span> throughout the state, guaranteeing adherence to both state regulations and the National Building Code (NBC).
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Fire NOC In Uttar Pradesh Important?
              </>
            }
          >
            <p className="text-justify mb-4">
              Uttar Pradesh Fire Service NOC ensures that the particular building is verified by the UP fire department and complies with all the proper fire safety measures in good condition. If the Building is found to be commencing commercial activities without the Fire NOC, then it will be liable to legal actions against the property and the owner.
            </p>
            <p className="text-justify">
              Through the expert assistance of the factorylicence.in apply <span className="400 px-1">online fire NOC in Uttar Pradesh</span> now!
            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits Of Fire NOC In Uttar Pradesh
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li className="text-justify">
                <strong>Legal Assurance</strong>: A Fire NOC ensures your premises comply with fire safety regulations, helping avoid legal liabilities and closure notices.
              </li>
              <li className="text-justify">
                <strong>Safety for Occupants</strong>: It confirms the implementation of critical fire safety measures to protect employees, customers and assets.
              </li>
              <li className="text-justify">
                <strong>Mandatory for Other Licenses</strong>: Fire NOC is a prerequisite for obtaining trade licenses, occupancy/completion certificates and project approvals.
              </li>
              <li className="text-justify">
                <strong>Insurance Support</strong>: It strengthens your case during fire insurance claims by proving adherence to safety protocols.
              </li>
              <li className="text-justify">
                <strong>Insurance Support</strong>: Many insurance companies mandate a valid Fire NOC to approve fire insurance claims.
              </li>
              <li className="text-justify">
                <strong>Enhanced Public Trust</strong>: A certified building with fire safety clearance enhances brand trust and reputation.
              </li>
            </ul>
            <p className="text-justify">
              Avail the expert services of Factorylicence.in for <span className="400 px-1">fire noc renewal Uttar Pradesh.</span> Call us now!
            </p>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For Fire NOC In Uttar Pradesh
              </>
            }
          >
            <p className="mb-4 text-justify">In Uttar Pradesh, Fire NOC is mandatory for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Residential buildings above 15 meters in height</li>
              <li className="text-justify">Commercial establishments exceeding 500 square meters of built-up area</li>
              <li className="text-justify">Industrial premises, warehouses, and factories dealing with inflammable substances</li>
              <li className="text-justify">Educational institutions, hotels, hospitals, malls, banquet halls, and high-footfall areas</li>
              <li className="text-justify">Buildings requiring approval from local bodies like Noida Authority, GDA, LDA, etc.</li>
            </ul>
            <p className="text-justify">
              With Factorylicence.in <span className="400 px-1">fire NOC online Uttar Pradesh</span> apply becomes easy and hustle free. Register your query now!
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Fire NOC in Uttar Pradesh
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">KYC documents of the applicant (Pan, Aadhaar, Voter id, Passport etc.)</li>
              <li className="text-justify">Email id and mobile number of the applicant</li>
              <li className="text-justify">Building plan approved by development authority or municipality</li>
              <li className="text-justify">Fire safety equipment layout plan</li>
              <li className="text-justify">Building Completion Certificate or Structural Stability Certificate</li>
              <li className="text-justify">Architect's certification of fire safety compliance</li>
              <li className="text-justify">Ownership/lease documents</li>
              <li className="text-justify">Photographs of installed fire safety systems</li>
              <li className="text-justify">Affidavit from owner/occupier on fire safety installations</li>
            </ul>
          </Section>

          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                How To Apply For Fire NOC In Uttar Pradesh
              </>
            }
          >
            <p className="mb-4 text-justify">
              The Fire NOC Online Process has been updated and simplified by the Government on the Nivesh Mitra single window portal. Here are the simple steps for <span className="400 px-1">fire noc apply online Uttar Pradesh</span>:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-6 text-gray-800">
              <li className="text-justify">
                <strong>Portal Registration</strong>: Firstly, the applicant needs to access the official Nivesh Mitra website (http://niveshmitra.up.nic.in). You are required to register as a new user by providing some basic personal and contact information. A user ID and password will be generated and sent to your registered email after verification.
              </li>
              <li className="text-justify">
                <strong>Fill the Common Application Form (CAF)</strong>: After logging into the portal, you must complete the Common Application Form (CAF) in order to create a new "Unit" for your establishment. This is the foundational step in the Fire NOC Online Process.
              </li>
              <li className="text-justify">
                <strong>Select the Fire NOC Service</strong>: Once the Unit is created, you will need to click on "Apply for Permission". From the department list, select the Fire Department, and under its services, choose "Fire No Objection Certificate".
              </li>
              <li className="text-justify">
                <strong>Complete the Fire NOC Application Form</strong>: You will then be routed to the specific Fire NOC Application form. Here, you will need to provide information about the building, including the height, plot area, occupancy type and address details.
              </li>
              <li className="text-justify">
                <strong>Upload Documents</strong>: After you have completed the Fire NOC Application Form, you will need to upload digital copies of all required documents.
              </li>
              <li className="text-justify">
                <strong>Application Scrutiny and Query Resolution</strong>: Upon submission of your Fire NOC Application Form, the department will review the application. If there are any issues or missing documents the department will raise a query to the applicant requesting clarification to process with the application.
              </li>
              <li className="text-justify">
                <strong>Site Inspection</strong>: After the department has reviewed the application and determined that the application is in order, it will approve an inspection. The Chief Fire Officer or an officer designated will inspect the property to check if all proposed firefighting and safety measures devices are correctly installed according to the plans that were submitted with your Fire NOC Application Form.
              </li>
              <li className="text-justify">
                <strong>Receive Your NOC</strong>: The Department will approve and issue the digitally signed Fire NOC based on the satisfactory scrutiny and inspection reports. The Fire NOC for the applicant can be downloaded from their Nivesh Mitra dashboard. This completes the process to Apply for Fire NOC in Uttar Pradesh.
              </li>
            </ol>
            <p className="mb-6 text-justify">
              Factorylicence.in makes the procedure of <span className="400 px-1">renewal fire NOC Uttar Pradesh</span> simple. Get your Fire noc renewed with our help now!
            </p>
            <Image src={img} alt="Fire NOC Process" className="w-full h-auto rounded-lg shadow-md" />
          </Section>

          <Section
            id="fees"
            title={
              <>
                <FaMoneyBillWave className="inline mr-2" />
                Government Fee Structure For Fire NOC Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-4">
              The Fire NOC government fee depends on multiple factors such as building type, area (square meters), occupancy category, and fire risk classification.
            </p>
            <h4 className="font-semibold mb-2">Indicative Fire NOC Uttar Pradesh Fee Structure:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="text-justify">Small commercial buildings: ₹2,000 – ₹5,000</li>
              <li className="text-justify">Medium industrial units/factories: ₹5,000 – ₹15,000</li>
              <li className="text-justify">Large factories, warehouses, malls, hospitals: ₹15,000 – ₹50,000+</li>
            </ul>
            <p className="text-justify mb-4">
              Apart from government fees, professional charges may apply if you engage experts for drawings, inspections, and compliance management. Businesses holding a <a href="https://factorylicence.in/" className="400 text-blue-600  underline px-1">Factory License</a> often benefit from streamlined coordination between departments, reducing delays in Fire NOC Uttar Pradesh approval.
            </p>
            <p className="text-justify">
              The Fire NOC Uttar Pradesh cost may also increase if re-inspection is required due to non-compliance.
            </p>
          </Section>

          <Section
            id="validity"
            title={
              <>
                <FaCalendarAlt className="inline mr-2" />
                Validity Period of Fire NOC
              </>
            }
          >
            <p className="text-justify mb-4">
              The Fire NOC validity is not lifetime and must be renewed periodically to remain legally compliant.
            </p>
            <h4 className="font-semibold mb-2">Standard Validity:</h4>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="text-justify">Commercial & industrial buildings: 1 year</li>
              <li className="text-justify">Residential group housing/high-rise buildings: 1–3 years (case-specific)</li>
            </ul>
            <p className="text-justify">
              Failure to track the Fire NOC Uttar Pradesh validity can lead to cancellation of operational permissions. Businesses operating under a Factory License are required to maintain a valid Fire NOC in Uttar Pradesh at all times.
            </p>
          </Section>

          <Section
            id="renewal"
            title={
              <>
                <FaSync className="inline mr-2" />
                Fire NOC In Uttar Pradesh Renewal Process
              </>
            }
          >
            <p className="text-justify mb-4">
              Renewal of Fire NOC Uttar Pradesh must be initiated before expiry to avoid penalties.
            </p>
            <h4 className="font-semibold mb-2">Step-by-Step Renewal Process:</h4>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li className="text-justify">Online application on the Nivesh Mitra Service portal</li>
              <li className="text-justify">Upload the previous Fire NOC Uttar Pradesh certificate</li>
              <li className="text-justify">Submit updated fire safety compliance report</li>
              <li className="text-justify">Fire department inspection</li>
              <li className="text-justify">Rectification (if required)</li>
              <li className="text-justify">Issuance of renewed Fire NOC Uttar Pradesh</li>
            </ol>
            <p className="text-justify">
              If there are structural changes, machinery additions, or occupancy changes under your Factory License, the renewal may require a fresh review.
            </p>
          </Section>

          <Section
            id="renewal-charges"
            title={
              <>
                <FaMoneyBillWave className="inline mr-2" />
                Renewal Charges For Fire NOC In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-4">
              Renewal fees for Fire NOC in Uttar Pradesh vary significantly by building type, ranging from a few thousand rupees for small commercial spaces (₹2,000-₹5,000) to potentially exceeding ₹50,000 for large malls or hospitals, with additional professional charges for documentation.
            </p>
          </Section>

          <Section
            id="who-needs"
            title={
              <>
                <FaBuilding className="inline mr-2" />
                Who Needs To Obtain The Fire NOC In Uttar Pradesh?
              </>
            }
          >
            <p className="text-justify mb-4">
              Fire Safety NOC is mandatory for high-rise buildings with a height of more than 15 meters or multi-story buildings. Given below are the categories of buildings that require Fire Department NOC-
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-justify">Educational Buildings (Universities, Colleges, Schools, etc.)</li>
              <li className="text-justify">Business Buildings with Offices</li>
              <li className="text-justify">Residential Occupancy (Commercial Usage)</li>
              <li className="text-justify">Assembly Buildings (Ceremonial Houses, Cinema Halls, etc.)</li>
              <li className="text-justify">Mercantile Buildings (Warehouses, Shops, etc.)</li>
              <li className="text-justify">Hazardous Buildings</li>
              <li className="text-justify">Industrial Buildings</li>
              <li className="text-justify">Institutional Buildings (Nursing Home, Hospital, etc.)</li>
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
              The standard timeline to obtain a Fire NOC in Uttar Pradesh ranges between 20 to 30 working days, subject to complete documentation and successful inspection.
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
            <p className="text-justify mb-4">
              Failure to obtain or renew a Fire NOC in Uttar Pradesh may lead to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-justify">Penalties ranging from ₹25,000 to ₹50,000 or more</li>
              <li className="text-justify">Sealing of the premises or denial of occupancy</li>
              <li className="text-justify">Disconnection of water, electricity or trade licenses</li>
              <li className="text-justify">Criminal proceedings in case of fire-related incidents</li>
            </ul>
          </Section>

          <Section
            id="why-choose"
            title={
              <>
                <FaCheckDouble className="inline mr-2" />
                Why Choose Us?
              </>
            }
          >
            <p className="text-justify mb-4">
              With very affordable service fees, we have assisted numerous companies in obtaining their Factor license, Pollution NOC, Fire NOC and <span className="400 px-1">fire noc renewal online in uttar pradesh.</span> Our team of experts will assist you with every stage of the application process, from submitting an application to receiving a licence.
            </p>
            <p className="text-justify font-semibold">
              For stress-free legal licensing registration, pick us. Make a call right now!
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
                    label: "Fee Structure",
                    id: "fees",
                    icon: <FaMoneyBillWave className="inline mr-2" />,
                  },
                  {
                    label: "Validity Period",
                    id: "validity",
                    icon: <FaCalendarAlt className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Process",
                    id: "renewal",
                    icon: <FaSync className="inline mr-2" />,
                  },
                  {
                    label: "Renewal Charges",
                    id: "renewal-charges",
                    icon: <FaMoneyBillWave className="inline mr-2" />,
                  },
                  {
                    label: "Who Needs It",
                    id: "who-needs",
                    icon: <FaBuilding className="inline mr-2" />,
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
                    label: "Why Choose Us",
                    id: "why-choose",
                    icon: <FaCheckDouble className="inline mr-2" />,
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
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
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
