"use client";

import { lazy, Suspense, useEffect, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
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
} from "react-icons/fa";
import Image from "next/image";
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import img from '@/assets/fire/delhi.jpeg'
import ContactFormModal from "@/components/ContactFormModal";
import FaqSectionFireDelhi from "@/components/FaqSectionFireDelhi";
import Head from "next/head";
import Link from "next/link";

export default function FireNocLicenceDelhiPage() {
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
        <title>Fire NOC in Delhi, Apply & Renew Fire NOC Online in Delhi - Factorylicence</title>
        <meta
          name="description"
          content="Fire NOC in Delhi - Apply for Fire NOC in Delhi online with Delhi Fire Service. Check fire NOC requirements, apply for new or renewal Fire NOC in Delhi through a simple online process."
        />
        <meta
          name="keywords"
          content="fire noc delhi, online application for fire noc delhi, fire noc delhi online, fire noc requirement in delhi, fire noc in delhi, apply for fire noc delhi, delhi fire noc renewal online apply, delhi fire service noc, fire noc apply online delhi"
        />
        <meta
          property="og:title"
          content="Fire NOC in Delhi, Apply & Renew Fire NOC Online in Delhi - Factorylicence"
        />
        <meta
          property="og:description"
          content="Fire NOC in Delhi - Apply for Fire NOC in Delhi online with Delhi Fire Service. Check fire NOC requirements, apply for new or renewal Fire NOC in Delhi through a simple online process."
        />
        <meta property="og:type" content="website" />
      </Head>
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-20 px-4 mt-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Fire Noc In Delhi`}
              width={1920}
              height={1080}
              className={`absolute top-0 left-0 w-full h-full object-cover ${currentBg === index ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000 ease-in-out`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto md:px-0 px- 4 mt-6">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap mb-4 items-center gap-2 text-sm"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Fire NOC Registration in Delhi" },
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
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Fire NOC Registration in Delhi
            </h1>
            <p className="text-lg mb-6 text-gray-50 text-justify">
              Ensure compliance and protect your building or business in Delhi
              with expert Fire NOC assistance. We help simplify approvals,
              inspections, and documentation.
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
      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-10 text-gray-800">
        <div className="md:col-span-3 space-y-14">
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Apply For <span className="bg-400 px-1">Fire NOC in Delhi Online</span>
              </>
            }
          >
            <p className="text-justify mb-4">
              One of the most crucial papers given by the Delhi Fire Service (DFS) under the Delhi Fire Service Act is a Fire NOC (No Objection Certificate), which protects all establishments, institutions, and entities in Delhi from fire-related deaths and property damage. A building is considered to have adequate fire safety and prevention facilities based on this certificate. Operating a commercial activity in a building without a Fire NOC in Delhi is considered an illegal activity.
            </p>
            <p className="text-justify">
              Through a seamless end-to-end procedure that ensures full compliance, precise documentation, lawful development, and collaboration with DFS authorities, Factorylicence.in assists enterprises, institutions, and residential developers throughout the process while apply for fire NOC in Delhi online.
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Fire NOC In Delhi Important?
              </>
            }
          >
            <p className="text-justify mb-4">
              In addition to adhering to legal safety regulations, a fire NOC is necessary to guarantee the physical protection of individuals and property. Obtaining licenses such as the Trade License, Building Completion Certificate, or Occupancy Certificate first requires having a fire NOC.
            </p>
            <p className="text-justify">
              Call us if you have a <span className="bg-400 px-1">fire NOC requirement in Delhi,</span> and enjoy a hassle-free application process with our guidance.
            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Advantages Of Fire NOC In Delhi
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-justify">
                <strong>Legal Compliance</strong>: Securing a Fire NOC keeps your business compliant with state and national fire safety regulations, avoiding potential shutdowns or penalties.
              </li>
              <li className="text-justify">
                <strong>Safety Assurance</strong>: Ensures the building is equipped with necessary equipment like fire alarms, extinguishers, hydrants, and emergency exits, thereby protecting life and property.
              </li>
              <li className="text-justify">
                <strong>Mandatory for Licensing</strong>: It is required for obtaining various other approvals, such as Occupancy Certificates, Trade Licenses, and Municipal Permissions.
              </li>
              <li className="text-justify">
                <strong>Boosts Public Confidence</strong>: Fire safety clearance enhances credibility and reassures employees, customers, and visitors about safety standards.
              </li>
              <li className="text-justify">
                <strong>Insurance Support</strong>: Many insurance companies mandate a valid Fire NOC to approve fire insurance claims.
              </li>
            </ul>
            <p className="text-justify">
              Factorylicence.in has helped a lot of people to get the <span className="bg-400 px-1">Delhi fire service NOC</span> for their businesses. You can also avail our services for <span className="bg-400 px-1">Fire noc apply online Delhi</span> by just registering a query with us.
            </p>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For Fire NOC In Delhi
              </>
            }
          >
            <p className="mb-4">
              In Delhi, Fire NOC is mandatory for buildings and establishments
              that fall under specific criteria as per the National Building
              Code. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Commercial or residential buildings exceeding 15 meters in height</li>
              <li className="text-justify">Hotels and guest houses over 12 meters</li>
              <li className="text-justify">Educational buildings and institutions over 9 meters</li>
              <li className="text-justify">Factories, warehouses and office complexes</li>
              <li className="text-justify">Public buildings with high footfall</li>
              <li className="text-justify">All hazardous buildings over 100 square meters</li>
            </ul>

            <p className="text-justify mb-2">
              <span className="-400 px-1">Delhi fire NOC renewal online apply</span> will become easy with our professional assistance.
            </p>
            <p className="text-justify">Connect with us now!</p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Fire NOC In Delhi
              </>
            }
          >
            <p className="mb-4">
              The documents required to apply for a Fire NOC in Delhi include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">
                KYC documents of the applicant (Pan, Aadhaar, Voter ID, Passport, etc.)
              </li>
              <li className="text-justify">Email ID and mobile number of the applicant</li>
              <li className="text-justify">
                2 copies of building plan approved by the local authority (DDA/MCD/NDMC)
              </li>
              <li className="text-justify">Completion certificate from the architect</li>
              <li className="text-justify">Building stability certificate</li>
              <li className="text-justify">Details of firefighting equipment installed</li>
              <li className="text-justify">Ownership proof (rent agreement/lease agreement)</li>
              <li className="text-justify">Photographs of premises</li>
              <li className="text-justify">Declaration/affidavit from the building owner</li>
            </ul>
          </Section>

          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                Steps For The <span className="-400 px-1">Online Application For Fire NOC In Delhi</span>
              </>
            }
          >
            <p className="mb-4">
              You can easily apply for a Fire NOC in Delhi by visiting the Delhi Fire Service website. These are the steps, just follow them to apply for Fire NOC:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-6 text-gray-800">
              <li className="text-justify">
                <strong>Assess Requirements</strong>: Ensure your building has fire extinguishers, alarms, proper exits, and water systems as per norms.
              </li>
              <li className="text-justify">
                <strong>Prepare Documents</strong>: Gather required documents like sanctioned plans, fire safety drawings, ownership proof, and identity proofs (Aadhaar, etc.).
              </li>
              <li className="text-justify">
                <strong>Online Application</strong>: Create an account on the Delhi Fire Service portal (or <a href="https://upyog.niua.in/homepage/fire-no-objection-certificate-issuance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NIUA-UPYOG</a>) and fill out the application form.
              </li>
              <li className="text-justify">
                <strong>Upload Documents</strong>: Submit digital copies of all supporting documents.
              </li>
              <li className="text-justify">
                <strong>Pay Fees</strong>: Pay the applicable government fees online.
              </li>
              <li className="text-justify">
                <strong>Site Inspection</strong>: Delhi Fire Service officials will schedule and conduct a physical inspection to check fire safety compliance.
              </li>
              <li className="text-justify">
                <strong>Rectify Issues (If Any)</strong>: Address any observations or objections raised during the inspection.
              </li>
              <li className="text-justify">
                <strong>Approval & Download</strong>: Receive SMS notifications; download your digital Fire NOC from the portal upon approval.
              </li>
            </ol>
            <Image src={img} alt="image description" className="w-full h-auto rounded-lg" />
          </Section>

          <Section
            id="fees"
            title={
              <>
                <FaMoneyBillWave className="inline mr-2" />
                Government Fee Structure For Fire NOC Delhi
              </>
            }
          >
            <p className="mb-4 text-justify">
              The Fire NOC Delhi government fee depends on multiple factors such as building type, area (square meters), occupancy category, and fire risk classification.
            </p>
            <p className="font-semibold mb-2">Indicative Fire NOC Delhi Fee Structure</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Small commercial buildings: Rs 2,000 – Rs 5,000</li>
              <li className="text-justify">Medium industrial units/factories: Rs. 5,000 – Rs 15,000</li>
              <li className="text-justify">Large factories, warehouses, malls, hospitals: Rs.15,000 – Rs.50,000+</li>
            </ul>
            <p className="text-justify mb-4">
              Apart from government fees, professional charges may apply if you engage experts for drawings, inspections, and compliance management. Businesses holding a <a href="https://factorylicence.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Factory License</a> often benefit from streamlined coordination between departments, reducing delays in Fire NOC Delhi approval.
            </p>
            <p className="text-justify italic text-gray-600">
              The Fire NOC Delhi cost may also increase if re-inspection is required due to non-compliance.
            </p>
          </Section>

          <Section
            id="validity"
            title={
              <>
                <FaCalendarAlt className="inline mr-2" />
                Validity Period of Fire NOC Delhi
              </>
            }
          >
            <p className="mb-4 text-justify">
              The Fire NOC Delhi validity is not lifetime and must be renewed periodically to remain legally compliant.
            </p>
            <p className="font-semibold mb-2">Standard Validity</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Commercial & industrial buildings: 1 year</li>
              <li className="text-justify">Residential group housing/high-rise buildings: 1–3 years (case-specific)</li>
            </ul>
            <p className="text-justify">
              Failure to track the Fire NOC Delhi's validity can lead to cancellation of operational permissions. Businesses operating under a Factory License are required to maintain a valid Fire NOC Delhi at all times.
            </p>
          </Section>

          <Section
            id="renewal"
            title={
              <>
                <FaSync className="inline mr-2" />
                Fire NOC Delhi Renewal Process
              </>
            }
          >
            <p className="mb-4 text-justify">
              Renewal of Fire NOC Delhi must be initiated before expiry to avoid penalties.
            </p>
            <p className="font-semibold mb-2">Step-by-Step Renewal Process</p>
            <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-800">
              <li className="text-justify">Online application on the Delhi Fire Service portal</li>
              <li className="text-justify">Upload the previous Fire NOC Delhi certificate</li>
              <li className="text-justify">Submit updated fire safety compliance report</li>
              <li className="text-justify">Fire department inspection</li>
              <li className="text-justify">Rectification (if required)</li>
              <li className="text-justify">Issuance of renewed Fire NOC Delhi</li>
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
                Renewal Charges For Fire NOC In Delhi
              </>
            }
          >
            <p className="text-justify">
              Renewal fees for Fire NOC in Delhi vary significantly by building type, ranging from a few thousand rupees for small commercial spaces (₹2,000-₹5,000) to potentially exceeding ₹50,000 for large malls or hospitals, with additional professional charges for documentation.
            </p>
          </Section>

          <Section
            id="who-needs"
            title={
              <>
                <FaBuilding className="inline mr-2" />
                Who Needs To Obtain The Fire NOC In Delhi?
              </>
            }
          >
            <p className="mb-4 text-justify">
              Fire Safety NOC is mandatory for high-rise buildings with a height of more than 15 meters or multi-story buildings. Given below are the categories of buildings that require Fire Department NOC-
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
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
              Typically, the process of obtaining a Fire NOC in Delhi takes about 20 to 30 working days, depending on the complexity of the building and the readiness of the fire safety infrastructure. We expedite this timeline through thorough documentation, coordination with DFS officials and prompt handling of inspection requirements.
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
              Failure to obtain a Fire NOC or non-compliance with fire safety standards may lead to monetary fines, closure notices or disconnection of electricity/water supply by the civic authority. In case of fire incidents, the lack of a Fire NOC may attract criminal liabilities for negligence.
            </p>
          </Section>

        </div>

        {/* Sidebar Quick Links */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-md p-6 border border-violet-100">
              <h3 className="text-lg font-semibold text-[#7A3EF2] mb-2">
                Quick Links
              </h3>
              <nav className="space-y-3 text-sm text-gray-700">
                {[
                  {
                    label: "Apply For Fire NOC",
                    id: "what-is",
                    icon: <FaIndustry className="inline mr-2" />,
                  },
                  {
                    label: "Why It Is Important",
                    id: "why-required",
                    icon: <FaQuestionCircle className="inline mr-2" />,
                  },
                  {
                    label: "Advantages",
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
      <FaqSectionFireDelhi />

      {/* Popup Contact Form */}
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
