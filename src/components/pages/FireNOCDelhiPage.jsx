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
} from "react-icons/fa";
import Image from "next/image";
import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import img from '@/assets/fire/delhi.jpeg'
import ContactForm from "@/components/ContactForm";
import FaqSectionFireDelhi from "@/components/FaqSectionFireDelhi";

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
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-20 px-4 mt-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`bg-${index}`}
              width={1920}
              height={1080}
              className={`absolute top-0 left-0 w-full h-full object-cover ${
                currentBg === index ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 ease-in-out`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A3EF2]/80 to-[#a674f7]/80 z-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
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
                Introduction and Its Compliance
              </>
            }
          >
            <p className="text-justify">
              A Fire NOC (No Objection Certificate) is one of the most important
              documents issued under Delhi Fire Service Act, by the Delhi Fire
              Service (DFS) for the prevention and protection of loss of life
              and property from fire in Delhi to any establishments,
              institutions or any entity. By this certificate, a building is
              deemed to have sufficient fire prevention and safety facilities.
              Lawfinity helps businesses, institutions, residential developers
              throughout the Delhi in obtaining the Fire NOC through a smooth
              end to end process whereby the complete compliance, accurate
              documentation and lawful development along with coordination with
              DFS authorities is taken care of.
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
              Fire NOC is essential not only to comply with legal safety
              requirements but also to ensure the physical safety of people and
              assets. It is a mandatory clearance for obtaining licenses like
              Trade License, Building Completion Certificate or Occupancy
              Certificate. Lawfinity ensures businesses in Delhi to meet all the
              requirements of fire safety standards, helping reduce risk,
              liability and operational delays by DFS.
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
                Legal Compliance: Securing a Fire NOC keeps your business
                compliant with state and national fire safety regulations,
                avoiding potential shutdowns or penalties.{" "}
              </li>
              <li>
                Safety Assurance: Ensures the building is equipped with
                necessary equipment like fire alarms, extinguishers, hydrants
                and emergency exits, thereby protecting life and property.{" "}
              </li>
              <li>
                Mandatory for Licensing: It is required for obtaining various
                other approvals such as Occupancy Certificates, Trade Licenses
                and Municipal Permissions.{" "}
              </li>
              <li>
                Boosts Public Confidence: Fire safety clearance enhances
                credibility and reassures employees, customers and visitors
                about safety standards.{" "}
              </li>
              <li>
                Insurance Support: Many insurance companies mandate a valid Fire
                NOC to approve fire insurance claims.{" "}
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
            <p>
              In Delhi, Fire NOC is mandatory for buildings and establishments
              that fall under specific criteria as per the National Building
              Code. These include:
            </p>
            <ul className="list-disc pl-6">
              <li>
                {" "}
                Commercial or residential buildings exceeding 15 meters in
                height{" "}
              </li>
              <li> Hotels and guest house over 12 meters </li>
              <li> Educational buildings and institutions over 9 meters </li>
              <li> Factories, warehouses and office complexes </li>
              <li> Public buildings with high footfall </li>
              <li> All hazardous buildings over 100 square meters </li>
            </ul>

            <br />

            <p>
              Lawfinity evaluates each property and guides clients regarding
              whether their establishment requires a Fire NOC under Delhi Fire
              Service regulations.
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
              The documents required to apply for a Fire NOC in Delhi include:
            </p>
            <ul className="list-disc pl-6">
              <li>
                KYC documents of the applicant (Pan, Aadhaar, Voter id, Passport
                etc.){" "}
              </li>
              <li>Email id and mobile number of the applicant </li>
              <li>
                2 copies of building plan approved by the local authority
                (DDA/MCD/NDMC){" "}
              </li>
              <li>Completion certificate from architect </li>
              <li>Building stability certificate </li>
              <li>Details of fire-fighting equipment installed </li>
              <li>Ownership proof (rent agreement/lease agreement) </li>
              <li>Photographs of premises </li>
              <li>Declaration/affidavit from the building owner </li>
            </ul>
            <br />
            <p>
              Lawfinity helps compile and review all documents to avoid any
              delays or objections during the application process.
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
                        <Image src={img} alt="image description"/>

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
              Typically, the process of obtaining a Fire NOC in Delhi takes
              about 20 to 30 working days, depending on the complexity of the
              building and readiness of the fire safety infrastructure. We
              expedite this timeline through thorough documentation,
              coordination with DFS officials and prompt handling of inspection
              requirements.
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
              Failure to obtain a Fire NOC or non-compliance with fire safety
              standards may lead to monetary fines, closure notices or
              disconnection of electricity/water supply by the civic authority.
              In case of fire incidents, lack of a Fire NOC may attract criminal
              liabilities for negligence.
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

      {/* FAQs */}
      <FaqSectionFireDelhi />

      {/* Popup Contact Form */}
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
