"use client";

import { lazy, Suspense, useState } from "react";
const FaIndustry = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaIndustry }))
);
import { FaCalculator } from "react-icons/fa";

import { RiTimeLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import TH from "@/components/TH";
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
import BreadcrumbNav from "@/components/BreadcrumbNav";
import StateFaqCTA from "@/components/StateFaqCTA";
import HeroRotatingBackground from "@/components/HeroRotatingBackground";
import { PAGE_IMAGES } from "@/lib/heroBackgrounds";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";
import ContactFormBlogs from "@/components/ContactFormBlogs";
import HeroVideoSection from "@/components/HeroVideoSection";
import PollutionFeeCalculatorDelhi from "@/components/PollutionFeeCalculatorDelhi";
import Link from "next/link";
import { CMS_RICH_TEXT_CLASS } from "@/components/cms/FactoryCmsDomSync";
import { normalizeCmsBodyHtml, getCmsBreadcrumbs } from "@/lib/cms";

export default function PollutionNocLicenceDelhiPage({ page }) {
  const [showPopup, setShowPopup] = useState(false);
  // CMS breadcrumbs take priority — same source FactoryCmsDomSync uses client-side,
  // rendered here up front so it doesn't flash from the hardcoded trail on load.
  const cmsBreadcrumbs = getCmsBreadcrumbs(page);
  const breadcrumbItems = cmsBreadcrumbs.length
    ? cmsBreadcrumbs
    : [
        { label: "Home", href: "/" },
        { label: "Pollution NOC Registration in Delhi" },
      ];
  const heroBackgroundAlts = [
    "Pollution Noc For Factory in Delhi",
    "Factory Pollution Certificate Apply Online in Delhi",
    "Pollution Certificate For Factory in Delhi",
  ];

  // CMS-driven hero + body — same fields FactoryCmsDomSync applies client-side.
  // Rendering them server-side here means the initial HTML already matches what
  // used to only appear after the client DOM sync ran (no more flash/mismatch).
  const content = page?.content || {};
  const hero = content.hero || {};
  const heroTitle =
    hero.headline || hero.heading || page?.mainHeading || page?.title ||
    "Pollution NOC & Waste Management Authorization Consultant in Delhi";
  const heroSubtitle =
    hero.subtext || page?.seo?.description ||
    "Ensure safety compliance and secure Pollution Department clearance for your building or business in Delhi with expert Pollution NOC assistance.";
  const cmsBodyHtml = content.contentBody ? normalizeCmsBodyHtml(content.contentBody) : "";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white md:py-0 py-20 md:px-0 px-4 mt-20 overflow-hidden">
        <HeroRotatingBackground
          alts={heroBackgroundAlts}
          images={PAGE_IMAGES.pollutionNocDelhi.hero}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0 md:py-12 relative z-20">
          <div className="md:w-1/2">
            <BreadcrumbNav items={breadcrumbItems} placement="hero" />
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              {heroTitle}
            </h1>
            <p
              className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50"
              dangerouslySetInnerHTML={{ __html: heroSubtitle }}
            />
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
      <section className="max-w-7xl mx-auto py-16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        <div className="md:col-span-3 space-y-4">
          <Section id="calculator" className="mb-10">
            <PollutionFeeCalculatorDelhi />
          </Section>
          {cmsBodyHtml ? (
            <div
              id="cms-unified-body"
              className={CMS_RICH_TEXT_CLASS}
              dangerouslySetInnerHTML={{ __html: cmsBodyHtml }}
            />
          ) : (
          <>
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
                <strong>Credibility and Approvals</strong>: Required for applying for other licenses like <Link href="/factory-licence-in-delhi" className="text-blue-600 underline font-">factory license</Link>, fire NOC, building plan approvals, and more.
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
            id="cte-before-starting"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Consent to Establish (CTE) – Before Starting Operations
              </>
            }
          >
            <p className="text-justify mb-4">
              Consent to Establish (CTE) is an obligatory environmental approval issued by the State Pollution Control Board (SPCB) that permits an industry or project to establish a new facility or extend an existing one. This consent is necessary before any construction activity, installation of machinery, or operation that may cause pollution.
            </p>
            <p className="text-justify mb-6">
              The Government of India has made it compulsory to obtain CTE to ensure that a project takes sufficient measures to control pollution right from the planning stage itself. By obtaining CTE, it becomes possible to avoid damaging the environment, achieve sustainable development, and comply with the relevant environmental laws.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Document list for the CTE:</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li className="text-justify">Covering letter clearly describing the business/industry & activities.</li>
              <li className="text-justify">PAN card of the owner/authorised person.</li>
              <li className="text-justify">Aadhar card of the owner/authorised person.</li>
              <li className="text-justify">GST Certificate (if applicable).</li>
              <li className="text-justify">Copy of the sale deed/rent agreement/lease deed (land proof).</li>
              <li className="text-justify">MOA/AOA or partnership deed (if company/partnership).</li>
              <li className="text-justify">Layout plan of the unit showing processing, utilities, and control devices.</li>
              <li className="text-justify">Schematic diagram or process diagram.</li>
              <li className="text-justify">Detailed manufacturing process description.</li>
              <li className="text-justify">Details of water & wastewater balance.</li>
              <li className="text-justify">Details of material balance.</li>
              <li className="text-justify">Land-use classification certificate.</li>
              <li className="text-justify">Auditor's certificate (CA certificate).</li>
              <li className="text-justify">Groundwater clearance certificate.</li>
              <li className="text-justify">Sewage Treatment Plant (STP) proposal (if applicable).</li>
              <li className="text-justify">Effluent Treatment Plant (ETP) proposal (if applicable).</li>
              <li className="text-justify">Air pollution control measures plan.
              </li>
              <li className="text-justify">Material Safety Data Sheets (MSDS) / risk assessment & emergency plan.

              </li>
              <li className="text-justify">Environmental Clearance (if applicable)


              </li>
            </ol>
          </Section>

          <Section
            id="cto-after-establishing"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Consent to Operate (CTO) – After Establishing Unit
              </>
            }
          >
            <p className="text-justify mb-4">
              Consent to Operate (CTO) is an approval from the State Pollution Control Board (SPCB) that allows an industry or establishment to start or continue its operations after fulfilling the environmental compliance requirements. CTO is issued only after checking that the unit is installed and functioning with the required pollution control measures.
            </p>
            <p className="text-justify mb-6">
              The purpose of the CTO is to ensure that the monitoring of emissions, effluents, and waste management practices is done continuously during the operational phase. The Government of India makes it mandatory to have a CTO to safeguard the health of the public and the environment by ensuring that industries operate in accordance with approved standards and conditions. Failure to have a CTO is considered a violation of the law for running a business that causes pollution.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Document list for the CTO:</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li className="text-justify">Copy of the issued CTE.</li>
              <li className="text-justify">Details of actual products manufactured.</li>
              <li className="text-justify">Audited balance sheet.</li>
              <li className="text-justify">Effluent/wastewater analysis report.</li>
              <li className="text-justify">Pollution control equipment performance data.</li>
              <li className="text-justify">Site compliance certificate & declaration.</li>
            </ol>
          </Section>

          <Section
            id="bmw-authorization"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Bio-Medical Waste Authorization (BMW)
              </>
            }
          >
            <p className="text-justify mb-4">
Bio-medical waste can be defined as any waste generated during the diagnosis, treatment, or immunisation of human or animal beings or during related research activities. Bio-medical waste may contain infectious agents and can be hazardous to health and the environment if not disposed of properly, especially in populated areas such as Delhi.
            </p>
            <p className="text-justify mb-6">
To counter this problem, the Government of India has come up with the Bio-Medical Waste Management Rules, 2016, which state that all Healthcare Facilities and waste handlers must obtain the necessary authorisation. Healthcare facilities must obtain bio medical waste authorization in Delhi and biomedical waste management authorization delhi to be fully compliant with the rules. Healthcare facilities must also obtain BMW authorization delhi, along with bio medical waste license Delhi or clinic biomedical waste license Delhi, depending on the type of facility.
            </p>
            <p className="text-justify mb-6">
Hospitals, clinics, labs, and research institutions must also obtain biomedical waste permission Delhi, along with medical waste disposal authorization delhi and medical waste recycling authorization delhi.
            </p>


            <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required For Bio-Medical Waste Authorization</h3>
            <p className="text-gray-800 mb-2">(For Hospitals, Nursing Homes, Labs, Clinics, Blood Banks, Veterinary, Pathology, etc.)</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li className="text-justify">Aadhaar & PAN of Owner</li>
              <li className="text-justify">GST Certificate</li>
              <li className="text-justify">Rent Agreement / Ownership proof</li>
              <li className="text-justify">BMW Agreement.</li>
            </ol>
          </Section>

          <Section
            id="hwm-authorization"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Hazardous Waste Management Authorisation (HWM)
              </>
            }
          >
            <p className="text-justify mb-4">
Hazardous waste can be described as waste that is toxic, corrosive, flammable, reactive, or any other form of waste that is harmful to human health and the environment. Hazardous waste is usually generated by industries during the manufacturing, processing, treatment, or disposal of waste.
            </p>
            <p className="text-justify mb-6">
The Government of India has established the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, which require industries and waste handlers to obtain the necessary approval before dealing with hazardous waste. Industries operating in the capital city are required to obtain hazardous waste management authorization delhi to ensure that they comply with environmental laws and standards. The hazardous waste management authorization delhi ensures that hazardous waste is identified, collected, stored, transported, treated, and disposed of in an environmentally sound manner.
            </p>
            <p className="text-justify mb-6">
Industries are also required to obtain hazardous waste authorization delhi and, if necessary, hazardous waste disposal authorization delhi to dispose of waste in a safe manner using approved facilities. Additionally, industries are required to obtain hazardous waste handling permission Delhi and a hazardous waste license Delhi before commencing operations that involve hazardous waste.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required For Hazardous Waste Management Authorisation</h3>
            <p className="text-gray-800 mb-2">(For industries generating chemical waste, oil waste, sludge, paint waste, ETP sludge, etc.)</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li className="text-justify">UPPCB Application Form</li>
              <li className="text-justify">Consent to Operate (CTO)</li>
              <li className="text-justify">PAN, Aadhaar of Occupier</li>
              <li className="text-justify">GST Certificate</li>
              <li className="text-justify">Factory / Unit Registration</li>
              <li className="text-justify">Manufacturing process flow chart</li>
              <li className="text-justify">Hazardous waste category & quantity</li>
              <li className="text-justify">Waste storage area layout</li>
              <li className="text-justify">MSDS of chemicals</li>
              <li className="text-justify">Authorization letter</li>
              <li className="text-justify">Agreement with authorised waste recycler/disposer</li>
              <li className="text-justify">Annual return (Form-4)</li>
              <li className="text-justify">Site photographs</li>
              <li className="text-justify">CA certificate</li>
            </ol>
          </Section>

          <Section
            id="scrap-import-waste"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Scrap Import Waste Management
              </>
            }
          >
            <p className="text-justify mb-4">
              Scrap import refers to the import of recyclable materials such as metal, paper, plastic, or electronic scrap for reuse, recycling, or recovery purposes. If not regulated properly, scrap imports may contain hazardous substances or non-compliant materials that can pose serious environmental and health risks.
            </p>
            <p className="text-justify mb-6">
              To regulate this, the Government of India, under the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, requires importers to obtain a Scrap Import Authorisation from the concerned authority. This authorisation ensures that only permitted and safe scrap materials are imported, handled, stored, and processed in compliance with environmental norms, thereby preventing illegal dumping and promoting safe and sustainable recycling practices.
            </p>
            <p className="text-justify mb-6">
The government has made authorities for the Aluminum scrap management Delhi, brass scrap management Delhi, copper scrap management Delhi, iron and steel scrap management Delhi. You need to get permission from the Scrap import waste management in Delhi to perform any commercial activity with these scraps. 
            </p>
            <p className="text-justify mb-6">
Contact us if you want a Scrap import consultant Delhi.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required for Scrap Import Authorisation</h3>
            <p className="text-gray-800 mb-2">(For import of metal scrap, plastic scrap, paper scrap, e-waste scrap, etc.)</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">Application Form (SPCB / Online Portal)</li>
              <li className="text-justify">Import Export Code (IEC)</li>
              <li className="text-justify">Consent to Operate (CTO) from the State Pollution Control Board</li>
              <li className="text-justify">PAN Card of Importer / Company</li>
              <li className="text-justify">GST Registration Certificate</li>
              <li className="text-justify">Aadhaar & PAN of Proprietor / Directors / Partners</li>
              <li className="text-justify">Factory / Unit Registration Certificate</li>
              <li className="text-justify">Process flow chart for scrap utilisation</li>
              <li className="text-justify">Details of scrap type, category, and quantity to be imported</li>
              <li className="text-justify">Valid Chartered Engineer Certificate (from exporting country)</li>
              <li className="text-justify">Pre-shipment Inspection Certificate (PSIC), if applicable</li>
              <li className="text-justify">Layout plan of scrap storage and processing area</li>
              <li className="text-justify">Authorisation letter (if application filed through a consultant)</li>
              <li className="text-justify">Agreement with authorised recycler/processor (if applicable)</li>
              <li className="text-justify">Previous import details (if any)</li>
              <li className="text-justify">Site photographs of the factory and storage area</li>
              <li className="text-justify">CA Certificate for financial details</li>
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
            <img
              src={PAGE_IMAGES.pollutionNocDelhi.process}
              alt="Pollution Noc Process in Delhi"
              className="w-full h-auto"
              loading="lazy"
              width={1200}
              height={800}
            />
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
                <strong>Orange Category (Medium Pollution)</strong>: Fees increase with investment, 
e.g., ₹500 for CTE ( &lt;₹5 lakh investment) up to ₹1,00,000 for CTE, and ₹1,000-₹2,00,000 for CTO.

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
          </>
          )}
        </div>

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

      <BreadcrumbNav items={breadcrumbItems} placement="mobile" />
      <StateFaqCTA onClick={() => setShowPopup(true)} />
      <div>
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
