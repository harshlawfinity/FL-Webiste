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
import ContactFormModal from "@/components/ContactFormModal";
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
        <title>Pollution NOC in Uttar Pradesh | Hazardous, Scrap & Biomedical Waste Authorization Consultant</title>
        <meta
          name="description"
          content="Get Pollution NOC in Uttar Pradesh with expert consultants for hazardous waste authorization, scrap import license, biomedical waste authorization & waste management approvals."
        />
        <meta
          name="keywords"
          content="pollution noc in uttar pardesh
noc pollution control board in uttar pardesh
pollution noc certificate in uttar pardesh
noc from pollution control board in uttar pardesh
cto pollution control board in uttar pardesh
documents required for pollution noc
pollution noc for factory in uttar pardesh
aluminium scrap management uttar pradesh
aluminum scrape management
brass scrap management uttar pradesh
copper scrap management uttar pradesh
iron and steel scrap management uttar pradesh
metal scrap import license uttar pradesh
paper waste management in uttar pradesh
plastic waste management in uttar pradesh
scrap import consultant uttar pradesh
scrap import waste management in uttar pradesh
scrap recycling & waste management uttar pradesh
waste management scrap import uttar pradesh
hazardous waste authorization uttar pradesh
hazardous waste consultant uttar pradesh
hazardous waste disposal authorization uttar pradesh
hazardous waste handling permission uttar pradesh
hazardous waste license uttar pradesh
hazardous waste management authorisation uttar pradesh
hazardous waste management authorization in uttar pradesh
waste management authorization uttar pradesh
bio medical waste authorization in uttar pradesh
bio medical waste consultant in uttar pradesh
bio medical waste license uttar pradesh
biomedical waste authorization consultant uttar pradesh
biomedical waste consultant uttar pradesh
biomedical waste management authorization uttar pradesh
biomedical waste permission uttar pradesh
bmw authorization uttar pradesh
clinic biomedical waste license uttar pradesh
medical waste disposal authorization uttar pradesh
medical waste recycling authorization uttar pradesh"
        />
        <meta
          property="og:title"
          content="Pollution NOC in Uttar Pradesh – Apply Online & Certificate"
        />
        <meta
          property="og:description"
          content="Get pollution noc in uttar pardesh with noc from pollution control board in uttar pardesh, CTO, certificate, documents required & factory waste authorisation."
        />
        <meta
          property="og:url"
          content="https://factorylicence.in/pollution-noc-in-uttar-pradesh"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link
          rel="canonical"
          href="https://factorylicence.in/pollution-noc-in-uttar-pradesh"
        />
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
                  { label: "Pollution NOC Registration in uttar pradesh" },
                ]
                  .filter(Boolean)
                  .map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      {idx > 0 && <span className="px-2 text-gray-400">›</span>}
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-white hover:underline"
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
              Pollution NOC & Waste Management Authorization Consultant in Uttar Pradesh
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
                prerequisite for securing other licenses such as <a href="https://factorylicence.in/" className="text-blue-600 underline">Factory License</a>, Fire NOC and Building Plan Approval.
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
                    <li>Plastic moulding
                    </li>
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
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">KYC documents of the applicant (Pan, Aadhaar, Voter ID, Passport, etc.)</li>
              <li className="text-justify">Email ID and mobile number of the applicant</li>
              <li className="text-justify">Ownership proof or rent agreement of the premises</li>
              <li className="text-justify">Site layout and plant design</li>
              <li className="text-justify">Project Report and process flow chart (Showing capital investment in Land & Plant Machinery)</li>
              <li className="text-justify">Details of raw materials and final products</li>
              <li className="text-justify">Water and energy consumption details</li>
              <li className="text-justify">Waste generation and disposal plan</li>
              <li className="text-justify">Effluent treatment mechanism (if applicable)</li>
              <li className="text-justify">Copy of previous CTO (in case of renewal)</li>
              <li className="text-justify">Authorisation for hazardous waste (if applicable)</li>
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
              Consent to Establish (CTE) is an obligatory environmental approval issued by the State
              Pollution Control Board (SPCB) that permits an industry or project to establish a new facility
              or extend an existing one. This consent is necessary before any construction activity,
              installation of machinery, or operation that may cause pollution.
            </p>
            <p className="text-justify mb-6">
              The Government of India has made it compulsory to obtain CTE to ensure that a project
              takes sufficient measures to control pollution right from the planning stage itself. By obtaining
              CTE, it becomes possible to avoid damaging the environment, achieve sustainable
              development, and comply with the relevant environmental laws.
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
              <li className="text-justify">Air pollution control measures plan.</li>
              <li className="text-justify">Material Safety Data Sheets (MSDS) / risk assessment & emergency plan.</li>
              <li className="text-justify">Environmental Clearance (if applicable)</li>
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
              Consent to Operate (CTO) is an approval from the State Pollution Control Board (SPCB) that
              allows an industry or establishment to start or continue its operations after fulfilling the
              environmental compliance requirements. CTO is issued only after checking that the unit is
              installed and functioning with the required pollution control measures.
            </p>
            <p className="text-justify mb-6">
              The purpose of the CTO is to ensure that the monitoring of emissions, effluents, and waste
              management practices is done continuously during the operational phase. The Government
              of India makes it mandatory to have a CTO to safeguard the health of the public and the
              environment by ensuring that industries operate in accordance with approved standards and
              conditions. Failure to have a CTO is considered a violation of the law for running a business
              that causes pollution.
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
              Bio-medical waste can be defined as any waste generated during the diagnosis, treatment, or immunisation of human or animal beings or during related research activities. Bio-medical waste may contain infectious agents and can be hazardous to health and the environment if not disposed of properly, especially in populated areas such as Uttar Pradesh.

            </p>
            <p className="text-justify mb-6">
              To counter this problem, the Government of India has come up with the Bio-Medical Waste Management Rules, 2016, which state that all Healthcare Facilities and waste handlers must obtain the necessary authorisation. Healthcare facilities must obtain bio medical waste authorization in Uttar Pradesh and biomedical waste management authorization Uttar Pradesh to be fully compliant with the rules. Healthcare facilities must also obtain BMW authorization Uttar Pradesh, along with bio medical waste license Uttar Pradesh or clinic biomedical waste license Uttar Pradesh, depending on the type of facility.

            </p>
            <p className="text-justify mb-6">
              Hospitals, clinics, labs, and research institutions must also obtain biomedical waste permission Uttar Pradesh, along with medical waste disposal authorization Uttar Pradesh and medical waste recycling authorization Uttar Pradesh.

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
                Hazardous Waste Management Authorization (HWM)
              </>
            }
          >
            <p className="text-justify mb-4">
              Hazardous waste can be described as waste that is toxic, corrosive, flammable, reactive, or any other form of waste that is harmful to human health and the environment. Hazardous waste is usually generated by industries during the manufacturing, processing, treatment, or disposal of waste.

            </p>
            <p className="text-justify mb-6">
              The Government of India has established the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, which require industries and waste handlers to obtain the necessary approval before dealing with hazardous waste. Industries operating in the capital city are required to obtain hazardous waste management authorization Uttar Pradesh to ensure that they comply with environmental laws and standards. The hazardous waste management authorization Uttar Pradesh ensures that hazardous waste is identified, collected, stored, transported, treated, and disposed of in an environmentally sound manner.

            </p>
            <p className="text-justify mb-6">
              Industries are also required to obtain hazardous waste authorization Uttar Pradesh and, if necessary, hazardous waste disposal authorization Uttar Pradesh to dispose of waste in a safe manner using approved facilities. Additionally, industries are required to obtain hazardous waste handling permission Uttar Pradesh and a hazardous waste license Uttar Pradesh before commencing operations that involve hazardous waste.


            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Documents Required For Hazardous Waste Management Authorization</h3>
            <p className="text-gray-800 mb-2">(For industries generating chemical waste, oil waste, sludge, paint waste, ETP sludge, etc.)</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-6">
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
            id="scrap-import"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Scrap Import Waste Management
              </>
            }
          >
            <p className="text-justify mb-4">
              Scrap import refers to the import of recyclable materials such as metal, paper, plastic, or
              electronic scrap for reuse, recycling, or recovery purposes. If not regulated properly, scrap
              imports may contain hazardous substances or non-compliant materials that can pose
              serious environmental and health risks.
            </p>
            <p className="text-justify mb-6">
              To regulate this, the Government of India, under the Hazardous and Other Wastes
              (Management and Transboundary Movement) Rules, 2016, requires importers to obtain a
              Scrap Import Authorisation from the concerned authority. This authorisation ensures that
              only permitted and safe scrap materials are imported, handled, stored, and processed in
              compliance with environmental norms, thereby preventing illegal dumping and promoting
              safe and sustainable recycling practices.
            </p>
            <p className="text-justify mb-6">
              The government has made authorities for the Aluminum scrap management Uttar Pradesh, brass scrap management Uttar Pradesh, copper scrap management Uttar Pradesh, iron and steel scrap management Uttar Pradesh. You need to get permission from the Scrap import waste management in Uttar Pradesh to perform any commercial activity with these scraps.

            </p>
            <p className="text-justify mb-6">
              Contact us if you want a Scrap import consultant Uttar Pradesh.

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
                Steps To Apply For Pollution NOC In Uttar Pradesh
              </>
            }
          >
            <p className="text-justify mb-6">
              You have to visit the Nivesh Mitra Portal and apply through it to get the NOC from Pollution
              Control Board in Uttar Pradesh. To make the application process easy for you, we have
              listed all the steps; you just have to follow them.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-800">
              <li className="text-justify">
                <strong>Registration:</strong> Go to the Nivesh Mitra portal, register with your details, and get login credentials.
              </li>
              <li className="text-justify">
                <strong>Login & Unit Creation:</strong> Log in, fill the Common Application Form (CAF) with project details (address, production, etc.), and create your unit.
              </li>
              <li className="text-justify">
                <strong>Apply for CTE/CTO:</strong> Select "UP Pollution Control Board," then choose "Consent to Establish (CTE)" and/or "Consent to Operate (CTO)" under the Air/Water Acts, and proceed to fill in details.
              </li>
              <li className="text-justify">
                <strong>Fee Payment:</strong> Pay the consolidated application fee online.
              </li>
              <li className="text-justify">
                <strong>Document Submission:</strong> Upload necessary documents like site plans, process flow, pollution control equipment details, ETP/APCS completion certificates, and environmental impact reports.
              </li>
              <li className="text-justify">
                <strong>Verification & Inspection:</strong> UPPPCB processes the application, conducts an inspection, and may raise queries on the portal for you to reply to.
              </li>
              <li className="text-justify">
                <strong>Approval:</strong> Upon satisfaction, the NOC (CTE/CTO) is issued.
              </li>
            </ol>
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
              <li>Scrap Import  Management entities</li>
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
              Factorylicence.in accelerates this timeline by handling all documentation, portal management with UPPCB authorities.
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
                    label: "Eligibility Criteria",
                    id: "eligibility",
                    icon: <FaUserCheck className="inline mr-2" />,
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
                    label: "Consent to Establish (CTE)",
                    id: "cte-before-starting",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Consent to Operate (CTO)",
                    id: "cto-after-establishing",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Bio-Medical Waste Authorization (BMW)",
                    id: "bmw-authorization",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Hazardous Waste Management Authorization (HWM)",
                    id: "hwm-authorization",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Scrap Import Waste Management",
                    id: "scrap-import",
                    icon: <FaFileAlt className="inline mr-2" />,
                  },
                  {
                    label: "Fees",
                    id: "fees",
                    icon: <FaCalculator className="inline mr-2" />,
                  },
                  {
                    label: "Steps",
                    id: "steps",
                    icon: <FaListOl className="inline mr-2" />,
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
      </section >

      {/* FAQs */}
      < FaqSectionPollutionUP />

      {/* Contact Form Popup */}
      < ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)
      } />
    </div >
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
