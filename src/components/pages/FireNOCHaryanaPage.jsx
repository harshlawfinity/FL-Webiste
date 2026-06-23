"use client";

import { lazy, Suspense, useState } from "react";
import {
  FaIndustry,
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
import HeroRotatingBackground from "@/components/HeroRotatingBackground";
import { PAGE_IMAGES } from "@/lib/heroBackgrounds";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";
import ContactFormBlogs from "@/components/ContactFormBlogs";
import HeroVideoSection from "@/components/HeroVideoSection";
import FaqSectionHaryanaFireNoc from "@/components/FaqSectionHaryanaFireNoc";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import StateFaqCTA from "@/components/StateFaqCTA";
import Link from "next/link";

export default function FireNocLicenceHaryanaPage() {
  const [showPopup, setShowPopup] = useState(false);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Fire NOC Registration in Haryana" },
  ];
  const heroBackgroundAlts = [
    "Fire Noc Renewal Haryana",
    "Fire Noc Online Haryana",
    "Fire Noc in Haryana",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-40 md:py-20 mt- px-4 mt-0 overflow-hidden">
        <HeroRotatingBackground
          alts={heroBackgroundAlts}
          images={PAGE_IMAGES.fireNocHaryana.hero}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:px-0 md:py-12 relative z-20">
          <div className="md:w-1/2">
            <BreadcrumbNav items={breadcrumbItems} placement="hero" />
            <h1 className="text-4xl md:text-5xl font-semibold md:mb-6 mb-2">
              Fire NOC Registration in Haryana
            </h1>
            <p className="md:text-lg md:mb-6 mb-4 text-justify text-gray-50">
              Ensure fire safety compliance and secure Fire Department clearance
              for your building or business in Haryana with expert support from
              Factorylicence.in.
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
      <section className="max-w-7xl mx-auto py-16 md:px-0 px-4 grid md:grid-cols-4 gap-10 text-gray-800 relative">
        <div className="md:col-span-3 space-y-14">
          <Section
            id="what-is"
            title={
              <>
                <FaIndustry className="inline mr-2" />
                Apply Online <span className="400 px-1">Fire NOC In Haryana</span>
              </>
            }
          >
            <p className="text-justify mb-4">
              Issued by the Haryana Fire Services, a fire NOC in Haryana is a compulsory legal requirement. Under the provisions of the Haryana Fire Service Act, 2009, and the National Building Code (NBC) of India, Registration or <span className="400 px-1">renewal fire NOC Haryana</span> has become necessary for high-rise commercial structures where large numbers of people gather frequently, like schools, halls, hospitals, etc. Fire NOC in Haryana ensures the safety standards of the Building for the welfare of people in case of any fire emergency.
            </p>
            <p className="text-justify">
              Factorylicence.in has helped many clients in the fire NOC apply Haryana, ensuring that all the legal and safety standards are duly complied without any delays or penalties.
            </p>
          </Section>

          <Section
            id="why-required"
            title={
              <>
                <FaQuestionCircle className="inline mr-2" />
                Why Fire NOC In Haryana Important?
              </>
            }
          >
            <p className="text-justify mb-4">
              The premises that have the Fire NOC in Haryana will be considered fully equipped with all the fire safety infrastructure and prevention systems, and all of these are verified by law. Operating in a building without a certification from Haryana Fire Services is like playing with the lives of all the people gathered in the building. If a building is found to commence without the Fire NOC in Haryana, then the building and the owner will face Legal challenges like penalties, court cases, and, in some cases, even a shutdown of the premises can be possible.
            </p>
            <p className="text-justify">
              Call us if you are facing a problem with the <span className="400 px-1">Fire NOC apply online Haryana.</span>
            </p>
          </Section>

          <Section
            id="benefits"
            title={
              <>
                <FaCheckCircle className="inline mr-2" />
                Benefits Of Fire NOC In Haryana
              </>
            }
          >
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li className="text-justify">
                <strong>Legal Compliance</strong>: A valid Fire NOC confirms adherence to Haryana fire safety laws and helps avoid legal complications and license rejections.
              </li>
              <li className="text-justify">
                <strong>Occupant Safety</strong>: Ensures the safety of employees, visitors, and residents by verifying that proper fire exits, alarms, and suppression systems are in place.
              </li>
              <li className="text-justify">
                <strong>Mandatory Requirement</strong>: A prerequisite for other major licenses, including completion certificates, trade licenses, and project approvals.
              </li>
              <li className="text-justify">
                <strong>Better Credibility</strong>: Demonstrates that your premises are safe and reliable, building trust among stakeholders, customers, and authorities.
              </li>
              <li className="text-justify">
                <strong>Insurance Facilitation</strong>: Helps in securing or settling insurance claims related to fire damage by proving compliance with fire norms.
              </li>
            </ul>
            <p className="text-justify">
              Factorylicence.in provides expert assistance in <span className="400 px-1">fire NOC renewal Haryana online.</span> Call now and get your renewal done.
            </p>
          </Section>

          <Section
            id="eligibility"
            title={
              <>
                <FaUserCheck className="inline mr-2" />
                Eligibility Criteria For Fire NOC In Haryana
              </>
            }
          >
            <p className="mb-4 text-justify">As per Haryana fire service rules, a fire NOC is mandatory for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Residential apartments/buildings exceeding 15 meters in height</li>
              <li className="text-justify">Commercial complexes, malls, schools, and hospitals with over 500 sq m. of built-up area</li>
              <li className="text-justify">Factories and industrial units dealing with flammable materials</li>
              <li className="text-justify">Hotels, banquet halls, and public assembly buildings</li>
              <li className="text-justify">Any premises storing hazardous or combustible items</li>
            </ul>
            <p className="text-justify">
              Factorylicence.in will guide you from the application process to the <span className="400 px-1">download fire NOC certificate Haryana.</span> Register your query related to any <span className="400 px-1">factory license,</span> and our consultants will connect with you.
            </p>
          </Section>

          <Section
            id="documents"
            title={
              <>
                <FaFileAlt className="inline mr-2" />
                Documents Required For Fire NOC In Haryana
              </>
            }
          >
            <p className="mb-4">
              For obtaining a Fire NOC in Haryana, the following documents are generally required:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li className="text-justify">KYC documents of the applicant (Pan, Aadhaar, Voter ID, Passport, etc.)</li>
              <li className="text-justify">Email ID and mobile number of the applicant</li>
              <li className="text-justify">Building layout approved by DTCP/Municipality</li>
              <li className="text-justify">Permission Letter/BR-III</li>
              <li className="text-justify">Architect's certificate confirming compliance with fire norms</li>
              <li className="text-justify">Applied a number of towers, and the total number of approved towers</li>
              <li className="text-justify">Fire safety equipment layout</li>
              <li className="text-justify">Completion certificate or building stability certificate</li>
              <li className="text-justify">Ownership proof (sale deed/lease agreement)</li>
              <li className="text-justify">Authority letter regarding the signatory of the document</li>
              <li className="text-justify">Photographs of fire safety systems</li>
              <li className="text-justify">Affidavit from owner/promoter</li>
            </ul>
          </Section>

          <Section
            id="steps"
            title={
              <>
                <FaListOl className="inline mr-2" />
                Steps to Apply <span className="400 px-1">Online Fire NOC In Haryana</span>
              </>
            }
          >
            <p className="mb-4 text-justify">
              In the state of Haryana, candidates can apply online for a fire licence by completing the steps listed below:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-6 text-gray-800">
              <li className="text-justify">
                <strong>Go to the Official Website</strong>: Start by going to the Directorate of Urban Local Bodies (Haryana) Department's official website. Locate and select the "Apply for Fire NOC" option under online services on the home page.
              </li>
              <li className="text-justify">
                <strong>Go to the Online Application</strong>: After being taken to a different page, you can choose to "click here to apply" for the online application. The No Objection Certificate application form will appear on your computer when you click.
              </li>
              <li className="text-justify">
                <strong>Fill out the application</strong>: The candidate must complete an online form with all necessary information. The application type, the specifics of the firefighting plan's approval, and comprehensive building information should all be included in the form. Additionally, it requires applicant information, basement information, and tower/block specifications.
              </li>
              <li className="text-justify">
                <strong>Upload and Submit Documents</strong>: The applicant must attach all essential papers to the application form after completing all mandatory fields. Once all required documents are attached, click the "Save" button to submit.
              </li>
            </ol>
            <img
              src={PAGE_IMAGES.fireNocHaryana.process}
              alt="Fire Noc Process in Haryana"
              className="w-full h-auto rounded-lg"
              loading="lazy"
              width={1200}
              height={800}
            />
          </Section>

          <Section
            id="fees"
            title={
              <>
                <FaMoneyBillWave className="inline mr-2" />
                Government Fee Structure For Fire NOC Haryana
              </>
            }
          >
            <p className="mb-4 text-justify">
              The Fire NOC Haryana government fee depends on multiple factors such as building type, area (square meters), occupancy category, and fire risk classification.
            </p>
            <p className="font-semibold mb-2">Indicative Fire NOC Fee Structure</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Small commercial buildings: Rs 2,000 – Rs 5,000</li>
              <li className="text-justify">Medium industrial units/factories: Rs . 5,000 – Rs 15,000</li>
              <li className="text-justify">Large factories, warehouses, malls, hospitals: Rs.15,000 – Rs.50,000+</li>
            </ul>
            <p className="text-justify mb-4">
              Apart from government fees, professional charges may apply if you engage experts for drawings, inspections, and compliance management. Businesses holding a <Link href="/factory-licence-in-haryana" className="text-blue-600 underline">Factory License</Link> often benefit from streamlined coordination between departments, reducing delays in Fire NOC Haryana approval.
            </p>
            <p className="text-justify italic text-gray-600">
              The Fire NOC Haryana cost may also increase if re-inspection is required due to non-compliance.
            </p>
          </Section>

          <Section
            id="validity"
            title={
              <>
                <FaCalendarAlt className="inline mr-2" />
                Validity Period of Fire NOC Haryana
              </>
            }
          >
            <p className="mb-4 text-justify">
              The Fire NOC Haryana validity is not lifetime and must be renewed periodically to remain legally compliant.
            </p>
            <p className="font-semibold mb-2">Standard Validity</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li className="text-justify">Commercial & industrial buildings: 1 year</li>
              <li className="text-justify">Residential group housing/high-rise buildings: 1–3 years (case-specific)</li>
            </ul>
            <p className="text-justify">
              Failure to track the Fire NOC Haryana's validity can lead to cancellation of operational permissions. Businesses operating under a Factory License are required to maintain a valid Fire NOC Haryana at all times.
            </p>
          </Section>

          <Section
            id="renewal"
            title={
              <>
                <FaSync className="inline mr-2" />
                Fire NOC Haryana Renewal Process
              </>
            }
          >
            <p className="mb-4 text-justify">
              Renewal of Fire NOC Haryana must be initiated before expiry to avoid penalties.
            </p>
            <p className="font-semibold mb-2">Step-by-Step Renewal Process</p>
            <ol className="list-decimal pl-6 space-y-3 mb-6 text-gray-800">
              <li className="text-justify">Online application on the Haryana Fire Service portal</li>
              <li className="text-justify">Upload the previous Fire NOC Haryana certificate</li>
              <li className="text-justify">Submit updated fire safety compliance report</li>
              <li className="text-justify">Fire department inspection</li>
              <li className="text-justify">Rectification (if required)</li>
              <li className="text-justify">Issuance of renewed Fire NOC Haryana</li>
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
                Renewal Charges For Fire NOC In Haryana
              </>
            }
          >
            <p className="text-justify">
              Renewal fees for Fire NOC in Haryana vary significantly by building type, ranging from a few thousand rupees for small commercial spaces (₹2,000-₹5,000) to potentially exceeding ₹50,000 for large malls or hospitals, with additional professional charges for documentation.
            </p>
          </Section>

          <Section
            id="who-needs"
            title={
              <>
                <FaBuilding className="inline mr-2" />
                Who Needs To Obtain a Fire NOC In Haryana?
              </>
            }
          >
            <p className="mb-4">Given below are the categories of buildings that require Fire NOC:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Education Buildings", desc: "Schools, colleges, and educational institutions" },
                    { cat: "Residential Apartment Buildings", desc: "Apartment complexes and multi-family homes" },
                    { cat: "Hotels", desc: "Lodging facilities for guests" },
                    { cat: "Hospitals and Sanatoria", desc: "Medical facilities for treatment" },
                    { cat: "Custodial Institutions", desc: "Prisons and detention centers" },
                    { cat: "Telephone Exchange", desc: "Prisons and detention centers" },
                    { cat: "Assembly Buildings", desc: "Places for gatherings, like auditoriums" },
                    { cat: "Multiplex Buildings", desc: "Movie theaters with multiple screens" },
                    { cat: "Business Buildings", desc: "Offices and commercial spaces" },
                    { cat: "Mercantile Buildings", desc: "Retail shops and stores" },
                    { cat: "Industrial Buildings (Low Hazard)", desc: "Factories with low fire risk" },
                    { cat: "Industrial Buildings (Moderate Hazard)", desc: "Factories with low fire risk" },
                    { cat: "Industrial Buildings (High Hazard)", desc: "Factories with high fire risk" },
                    { cat: "Storage Buildings (High Hazard)", desc: "Warehouses storing flammable materials" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 px-4 py-2">{row.cat}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              The typical time required to obtain a Fire NOC in Haryana is 15 to 25 working days, depending on the type and complexity of the project. This may vary in cases where re-inspection or additional documents are required.
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
              Failure to obtain a Fire NOC in Haryana or non-compliance with the Fire Safety Act may attract serious consequences such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-justify">Fines ranging from ₹25,000 to ₹50,000 or more, depending on the violation</li>
              <li className="text-justify">Sealing of premises or disconnection of essential services</li>
              <li className="text-justify">Criminal liabilities under the Fire Services Act for negligence in case of a mishap</li>
            </ul>
          </Section>

          <Section
            id="why-choose"
            title={
              <>
                <FaCheckDouble className="inline mr-2" />
                Why Choose us?
              </>
            }
          >
            <p className="text-justify mb-4">
              We have helped many businesses to get their Factor license, Pollution NOC, and Fire NOC with very reasonable service charges. Our team of professionals guides you through every step of the application process and will help you through the process from applying to getting a licence in your hand.
            </p>
            <p className="text-justify font-semibold">
              Choose us for tension-free legal licence registration. Give a call now!
            </p>
          </Section>


        </div>

        {/* Sidebar Quick Links */}
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

      <BreadcrumbNav items={breadcrumbItems} placement="mobile" />
      <StateFaqCTA onClick={() => setShowPopup(true)} />
      <FaqSectionHaryanaFireNoc />

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
