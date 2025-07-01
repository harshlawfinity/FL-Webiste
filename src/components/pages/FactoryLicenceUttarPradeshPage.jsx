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

import uuu from "../../assets/uuu.webp";

import ContactForm from "@/components/ContactForm";

 import bg1 from "../../assets/f1.webp";
import bg2 from "../../assets/f2.webp";
import bg3 from "../../assets/f3.webp";
import FaqSection from "@/components/FaqSectionUP";

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
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentBg === index ? "opacity-100" : "opacity-0"
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
     <section className="max-w-7xl mx-auto py-16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        {/* Left Side Content */}
        <div className="md:col-span-3 space-y-14">
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                What is a Factory Licence?
              </>
            }
          >
            <p className="text-justify">
              A Factory Licence is a mandatory legal obligation under the
              Factories Act, 1948, required for those premises which carry out
              manufacturing processes employing 10 or more workers with the aid
              of power or employing 20 or more workers without power. This
              licence ensures that the factory has complied with the required
              safety, health and welfare standards for the workers.{" "}
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why is it needed?
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">
                As operating a factory without one is a punishable offense under
                the Factories Act, 1948, therefore, obtaining a Factory Licence
                is essential for fulfilling legal compliance. Those factories
                which are found running without a valid licence can face
                considerable penalties, imposing heavy fines and in some cases
                even imprisonment. This makes the licence a crucial requirement
                for anyone planning to set up or operate a manufacturing plant
                in India.
              </li>
              <li className="text-justify ">
                Beyond the legal requirements, a factory licence also ensures
                that the facility meets appropriate safety standards, which are
                very crucial for safeguarding the health and well-being of
                employees. It also validates the operational authenticity of the
                business, making easy to secure other necessary approvals,
                licences and participate in government tenders. To put it
                simply, the factory licence not only keeps the business on the
                right side of the law but also builds legitimacy and ensure the
                trust with stakeholders.
              </li>
            </ul>
          </Section>

          <Section
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
            <p className="text-justify">
              In Uttar Pradesh, any manufacturing unit with 10 or more workers
              using power or 20 or more without power, must register under the
              Factories Act, 1948, via the Labour Department, Government of
              Uttar Pradesh. The application process is facilitated through the
              Nivesh Mitra portal.
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required in Uttar Pradesh
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify ">Building Plan Approval</li>
              <li className="text-justify ">
                Layout Plan as per Factories Act
              </li>
              <li className="text-justify ">
                KYC Documents of Owners/Directors
              </li>
              <li className="text-justify ">
                Business Registration documents of firm/company
              </li>
              <li className="text-justify ">
                Structural Stability certificate from approved architect.
              </li>
              <li className="text-justify ">
                Sale Deed/ Rent Agreement of premises.
              </li>
              <li className="text-justify ">
                Manufacturing process flow chart
              </li>
              <li className="text-justify ">
                CA certificate showing Capital investment.
              </li>
            </ul>
          </Section>

          <section className="p max-w-7xl mx-auto">
  <h2 className="text-3xl font-semibold flex mb-4 text-[#7c4bdf]"             id="fee"
>
    <HiOfficeBuilding className="text-[#7c4bdf]" />
    Fee Structure  
  </h2>

<div className="md:w-full w-[90vw]">
                          <TUP />
                        </div>
            

  {/* Renewal Fee Section */}
  <div className="mt-10">
    <h3 className="text-xl font-semibold text-[#7c4bdf] mb-2 flex items-center gap-2">
      <RiTimeLine className="text-[#7c4bdf]" />
      Renewal Fee
    </h3>
    <div className="text-gray-700 text-sm space-y-2">
      <p>
        The license renewal process in Uttar Pradesh is now digital. It is in
        automatic mode. The fee is calculated based on:
      </p>
      <ul className="list-disc list-inside pl-4">
        <li>Installed HP and the number of workers.</li>
        <li>Whether the renewal is within the stipulated time or delayed.</li>
        <li>
          System-generated charges and applicable penalties, if any.
        </li>
      </ul>
      <p className="italic">
        Note: The state may auto-calculate the renewal fee based on the entered
        details. Exact amounts are viewable during the online application.
      </p>
    </div>
  </div>

  {/* Amendment Fee Section */}
  <div className="mt-8">
    <h3 className="text-xl font-semibold text-[#7c4bdf] mb-2 flex items-center gap-2">
      <AiOutlineEdit className="text-[#7c4bdf]" />
      Amendment Fee
    </h3>
    <div className="text-gray-700 text-sm space-y-2">
      <p>
        The procedure for amendment in Uttar Pradesh has been digitalized and it can be handled through labour department’s web portal.
      </p>
      <p className="italic">
        Note: No fixed fee breakdown is publicly available. The renewal and amendment follow online portal processes, sometimes implementing auto charge based on HP/worker thresholds, with late fee mechanisms.
      </p>
    </div>
  </div>
</section>


          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                Steps to Get a Factory Licence
              </>
            }
          >
            <ol className="list-decimal pl-6 space-y-3 text-gray-800">
              <li className="text-justify ">
                Portal Access: Register on the Nivesh Mitra Portal
                (niveshmitra.up.nic.in).
              </li>
              <li className="text-justify ">
                Application Submission: Fill in the application form with
                factory details and upload necessary documents.
              </li>
              <li className="text-justify ">
                Form Submission: Fill out the application form and upload
                necessary documents.
              </li>
              <li className="text-justify ">
                Fee Payment: Pay the requisite fee online.
              </li>
              <li className="text-justify ">
                Inspection: The Labour Department will schedule an inspection of
                the factory premises.
              </li>
              <li className="text-justify ">
                Licence Issuance: After successful verification, the factory
                licence will be issued.
              </li>
            </ol>
          </Section>
          <Image loading="lazy" src={uuu} alt="" />

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
              The registration of a Factory Licence in the state of Uttar
              Pradesh typically takes 15 to 18 working days, depending on
              document verification and government approvals.{" "}
            </p>
          </Section>

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
                Running a factory without registration is a punishable offense
                and can lead to penalties up to ₹1,00,000 or imprisonment up to
                2 years or both. <br />
              </li>
              <li className="text-justify ">
                A penalty for delayed renewal of a factory licence is a late fee
                of 25% of the renewal fee for the calendar year. This penalty
                applies when the renewal application is submitted after the
                deadline, which is 30 days before the licence expiry date. The
                system automatically calculates the total fee, including the
                late fee, which needs to be paid online.
              </li>
            </ul>
          </Section>

          {/* <div className="pt-8">
            <img
              loading="lazy"

              src={fl1}
              alt="Factory Registration Process"
              className="rounded-lg shadow-md w-full"
            />
          </div> */}
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

      <FaqSection />
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
