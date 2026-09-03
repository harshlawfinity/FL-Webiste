"use client";
import React, { useState } from 'react';
import Link from "next/link";
import {
    FileText,
    CheckCircle2,
    AlertCircle,
    ClipboardCheck,
    Building2,
    ShieldCheck,
    Clock,
    TrendingUp,
    Landmark,
    HardHat,
    ChevronDown,
} from 'lucide-react';

// Dofollow internal links: relative paths via Next.js Link (no rel="nofollow").
function InternalLink({ href, className, children }) {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

const ExtendedContent = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
                        <span className="text-[#7c4bdf]">Factory Licence Registration</span> In India
                    </h2>
                    <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed">
                        Planning to establish a new factory in India? However, are you aware of the legal formalities you must fulfil for your factory licence registration? If not, then don&apos;t worry, we are here to help you with the complete factory enrollment process. You will get all the information about the Factory licence registration, Factory licence fees, and Factory licence renewal fees.
                        <br /><br />
                        We guide all the businesses to get a factory registration license by handling the documentation, filing, inspecting the documents and coordinating with the different departments. When it&apos;s about registering a new manufacturing unit, our team also helps you with fire NOC online apply process, that makes sure that the documents which are provided are accurate,and are timely submitted. Please give us a call. If you have any queries about the Factory licence registration process, feel free to call us. We are always ready to help.
                    </p>
                </div>

                {!isExpanded && (
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
                        <div className="flex justify-center pb-4">
                            <button 
                                onClick={() => setIsExpanded(true)}
                                className="flex items-center gap-2 px-10 py-4 bg-[#7c4bdf] text-white rounded-full font-bold hover:bg-[#6a3fbd] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group z-10"
                            >
                                Read More
                                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}

                <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isExpanded ? 'opacity-100 max-h-[15000px]' : 'opacity-0 max-h-0'}`}>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Section 1: What and Who */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-100 rounded-lg text-[#7c4bdf]">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">What is Factory Licence Registration?</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                To operate a manufacturing facility legally, you need to have a factory licence. It is a necessary legal document issued by the government. Holding a Factory licence means that the particular facility complies with all the labour laws, safety regulations, statutory requirements, and other environmental standards.
                                <br /><br />
                                A factory registration certificate is necessary for various aspects of business expansion, business applications, authorisation by government and banks, and permissions for industry work. A factory certificate of registration is also documentary evidence that the manufacturing unit has been approved to run by the authorities, and in many instances this is required.
                                <br /><br />
                                Under the Factory Act license, 1948, it is mentioned that the premises that carry out manufacturing processes employing 10 or more workers with the aid of power, or employing 20 or more workers without power, will need to register their factory and have to obtain a factory licence. Manufacturing facilities that are operating without this licence can face serious legal actions and penalties.
                                <br /><br />
                                Today, most of this states also support factory license renewal online, that allows the factory owners in managing the compliances digitally, without repeated physical visites to the government offices.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Why is Factories License Needed?</h3>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm">
                                    As mentioned in the Factories Act, 1948, anyone operating a manufacturing facility will face legal action. This simply makes the Factory licence registration a compulsory document to have. Factories running without registration can face legal issues like imposing heavy fines, penalties, and even lead to imprisonment.
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    The government is pressuring Factories to obtain a legal licence because having a factory licence registration ensures that the factory is running with all the appropriate safety standards. Moreover, depending on the nature of the operations and occupancy that the premises take, your business might also need to obtain a fire licence certificate as a part of the overall regulatory compliance framework. So that the employees&apos; health and well-being will not be compromised. Not only this, but the licence also validates the operational authenticity of the business, which makes other approvals, participation in government tenders, and licences easy to secure.
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    All these things make your Factory licence registration a crucial aspect for the factory owners to set up or operate a manufacturing plant in India. An issuance of a manufacturer licence is not just a legal requirement, it also shows that the business works to recognised operational standards. Having a manufacturing license certificate boosts credibility towards investors, customers, suppliers and government bodies, and makes business more hassle-free.
                                </li>
                            </ul>
                            <p className="mt-4 text-xs text-gray-500 italic font-sans italic">
                                Connect with us now to get an factory licence today!
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Importance */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-green-100 rounded-lg text-green-600">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">Advantages Of A Factory Licence Registration</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Obtaining a factory license registration for services like fire clearance certificate online, and industry pollution certificate apply online can be beneficial for the following reasons:
                        </p>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Legal Recognition & Protection",
                                    desc: "A legal licence for a factory is the symbol that your factory has been recognised by the law, and this symbol will give your factory protection from legal complications and shutdowns due to non-compliance.Other approvals like a fire safety clearance certificate and factory pollution certificate apply online can improve the compliance record and operational integrity of the factory.",
                                    icon: Landmark
                                },
                                {
                                    title: "Ensure Safety & Welfare at Workplace",
                                    desc: "The licence minimises accidents by mandating to follow-up of all the safety standards and employee welfare regulations, which improves the satisfaction of employees. Moreover, regular compliance activities, that includes the renewal of fire safety certificate online, the government is pressuring Factories to obtain a legal licence because having a registration for your factory ensures that the factory is running smoothly, which can help your factories maintain safety standards and operational continuity. On the other hand, factories should also conduct routine fire safety checks and renew fire extinguisher equipment as per the prescribed maintenance schedule to ensure better safety.",
                                    icon: HardHat
                                },
                                {
                                    title: "Helps in Expansion & Investment",
                                    desc: "The investors prefer factories with a legal validation, thus a license will help factories in raising funds, expand their operational hassle-free, or enter into contracts.",
                                    icon: TrendingUp
                                },
                                {
                                    title: "Access to Government Schemes",
                                    desc: "Government schemes, subsidies, and certification will only be used by the factories that are recognised by the government authorities. However, many united from the numerous industries also need to have a fire safety license and other types of statutory approvals to meet the sector-specific compliance requirements.",
                                    icon: CheckCircle2
                                },
                                {
                                    title: "Improves Reputation & Builds Trust",
                                    desc: "Your factory's credibility gets enhanced among the stakeholders and investors, such as customers, vendors, government bodies, and suppliers when you have met all the compliance such as pollution certificate for factory done.",
                                    icon: ClipboardCheck
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-50 flex gap-4">
                                    <div className="mt-1 text-[#7c4bdf] shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-sm text-gray-500 font-medium italic border-t border-gray-100 pt-6">
                            We can help you get the factory license certificate for all states, like <InternalLink className="text-blue-600 underline" href="/factory-licence-in-delhi">Factory license in Delhi</InternalLink>, <InternalLink className="text-blue-600 underline" href="/factory-licence-in-haryana">Factory license Haryana</InternalLink>, <InternalLink className="text-blue-600 underline" href="/factory-licence-in-uttar-pradesh">Factory licence in Uttar Pradesh</InternalLink>. Call us, we would like to help you.
                        </p>
                    </div>
                </div>

                {/* Section: Eligibility Criteria */}
                <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-purple-100 rounded-lg text-[#7c4bdf]">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Eligibility Criteria For A Factory Licence Online</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-8 font-medium italic">If a factory meets these points, then it is eligible for the factory establishment license:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {[
                            "Factories with 10 or more workers, with the aid of power.",
                            "Manufacturing unit with 20 or more workers operating without using power.",
                            "Factories engaged in hazardous processes or dangerous operations as defined under the law.",
                            "Newly established startups and MSMEs which are basically into the production, processing, or arrangements of goods.",
                            "Importers are establishing a local manufacturing facility in India.",
                            "Premises using machinery or power-driven tools for producing or modifying goods.",
                            "Public or private sector enterprises that fall under the definition of a \"factory\" in the Factories Act, 1948.",
                            "Industrial warehouses use machinery for processing, altering, repackaging, or handling goods.",
                            "Export-Oriented Units (EOUs) are involved in any manufacturing activity.",
                            "Entities that require pollution control or fire safety certificate clearance due to operational risks are also subject to stricter regulatory oversight. Such establishments are often required to obtain a fire safety NOC before commencing operations or applying for certain regulatory approvals."
                        ].map((point, idx) => (
                            <div key={idx} className="flex gap-4 items-start py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors px-2 rounded-lg">
                                <div className="mt-1 bg-green-100 text-green-600 rounded-full p-0.5">
                                    <CheckCircle2 size={12} />
                                </div>
                                <span className="text-xs text-gray-600 leading-relaxed font-sans italic">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                        <p className="text-gray-700 font-medium">
                            We can assist you with online registration of your factory in India. And also provide help in getting <InternalLink className="text-blue-500 underline" href="/pollution-noc-in-delhi">pollution noc certificate in Delhi</InternalLink>, <InternalLink className="text-blue-500 underline" href="/pollution-noc-in-haryana">Pollution NOC in Haryana</InternalLink>, and <InternalLink className="text-blue-500 underline" href="/pollution-noc-in-uttar-pradesh">Pollution NOC in Uttar Pradesh</InternalLink>. We also assisst in hospital pollution certificate online for your medical establishment.
                        </p>
                    </div>
                </div>

                {/* Section 3: Documents Required (Full Width) */}
                <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 uppercase">Documents Required For Online Registration Of Factory Licence</h3>
                    </div>

                    <div className="max-w-4xl space-y-4 mb-12">
                        <p className="text-sm text-gray-600 leading-relaxed font-sans italic">
                            In case you have this question hovering over your mind, like &quot;what documents required for fire noc&quot;, or any other service that you want to avail for. At first, you need to know that, documentation is the most crucial part of the Factory registration process. If you miss or submit any wrong documents, then your factory license application process will take more than usual because of the delay due to the wrong or missing documents.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed font-sans italic">
                        Having prior knowledge of what are the documents required for factory  license can enhance approvals time. A common query of business owners is, what exactly documents are needed for a factory licence application? While the requirements may differ from state to state, these are some documents that are typically needed throughout India.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                            So it is good to double-check all the documents before submitting. We have mentioned the list required for factory registration process. Documents required are:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                        {[
                            "Building Plan Approval",
                            "Layout Plan as per the Factories Act",
                            "KYC Documents of Owners/Directors (Email id, Mobile No., PAN, Aadhaar, Voter id, Bank Statement, etc.)",
                            "Incorporation documents (COI, Partnership Deed, LLP Agreement, etc.)",
                            "Sale Deed/ Rent Agreement of premises.",
                            "Sanctioned load from authority / Latest Electricity Bill",
                            "DPCC NOC",
                            "Structural Stability certificate from an approved architect",
                            "Fire NOC (for premises above 250 sq metres)",
                            "Property Tax Receipt",
                            "Manufacturing process flow chart"
                        ].map((doc, idx) => (
                            <div key={idx} className="flex gap-3 items-center p-3 rounded-xl bg-gray-50/50 border border-transparent hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                                <div className="p-1 bg-white rounded-md shadow-sm border border-gray-100 group-hover:text-orange-600 transition-colors">
                                    <FileText size={16} />
                                </div>
                                <span className="text-gray-700 text-xs md:text-sm font-sans italic">{doc}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed font-medium mt-6 mb-6">
                        Note: Depending on the size and nature of operations, a fire NOC certificate may also be required before the application can be processed by the concerned authorities.
                    </p>

                    <div className="mt-6 p-8 bg-gray-900 rounded-2xl text-white text-center">
                        <p className="text-base md:text-lg font-medium mb-2">
                            We have a team of professional Factory license consultant who can help you with the factory licence apply online.
                        </p>
                        <p className="text-[#7c4bdf] font-semibold text-xl animate-pulse">
                            Go ahead and make a call now!
                        </p>
                    </div>
                </div>

                {/* Section 4: Process and Validity */}
                <div className="grid grid-cols-1  gap-8 mt-12">

                    <div className="lg:col-span-2 bg-[#7c4bdf] text-white p-8 md:p-10 rounded-3xl shadow-xl">
                        <h3 className="text-xl md:text-2xl font-semibold mb-6 flex flex-col gap-2">
                            How to Apply Factory Licence Online?
                        </h3>
                        <p className="text-sm text-purple-100 leading-relaxed mb-2">
                            The application for a factory licence, obtaining a factory licence and registration of a factory licence will generally involve the planning stage, submission of statutory forms, submission of supporting documents, fee payment and the departmental inspection phase prior to the issuance of the licence.
                        </p>
                        <p className="text-xs font-normal text-purple-100 italic mb-6">Carefully follow the instructions for factory license apply online:</p>

                        <div className="space-y-8 mt-8">
                            {[
                                {
                                    step: "Step 1",
                                    title: "Obtain Factory Plan Approval",
                                    desc: "To start with the factory licence process, you must provide architectural drawings of your factory and their building plan to the state labour department for approval so that it complies with all the safety and health regulations."
                                },
                                {
                                    step: "Step 2",
                                    title: "Submit Notice of occupation (Form 1)",
                                    desc: "A Notice of Occupation (usually Form 1) must be given formally to the Chief Inspector of Factories 15 days before occupation. This will alert them that you are to start manufacture."
                                },
                                {
                                    step: "Step 3",
                                    title: "Online Application for License (Form 2)",
                                    desc: "Go the official online page of your labour department or factories and boilers directorate of your state, such as the state's labour portal, SDMC portal, EDMC portal etc. Fill out a factory licence registration application form (Form 2) with correct information on the factory and its workers, register, and log in. The entire factory licence online application process is now streamlined with the help of state government portals, that allows applicants to submit their forms, upload the documents, and track everything online."
                                },
                                {
                                    step: "Step 4",
                                    title: "Upload Documents",
                                    desc: "Turn in and submit all the necessary documents according to checklist in proper format and size."
                                },
                                {
                                    step: "Step 5",
                                    title: "Pay Factory License Fees",
                                    desc: "Pay the appropriate factory license fee on-line via the portal payment system. Depending on the number of workers involved, and the combined horsepower of machinery installed, the fee may vary."
                                },
                                {
                                    step: "Step 6",
                                    title: "Scrutiny and Inspection",
                                    desc: "The submission of the application and documents is subject to a review by the authorities. It is possible for an Inspector of Factories to visit your factory premises and verify compliance."
                                },
                                {
                                    step: "Step 7",
                                    title: "Grant of Factory License Certificate",
                                    desc: "If your application, documents and the inspection results are satisfactory you may have your application approved and a certificate of factory licence issued by the Chief Inspector of Factories."
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group relative">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-white text-[#7c4bdf] flex items-center justify-center font-semibold shrink-0 z-10">
                                            {idx + 1}
                                        </div>
                                        {idx !== 6 && <div className="w-0.5 h-full bg-purple-400/30 absolute top-10" />}
                                    </div>
                                    <div className="pb-4">
                                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                        <p className="text-purple-50 text-xs md:text-sm leading-relaxed opacity-90 font-sans italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-purple-400/30">
                            <p className="text-center text-sm md:text-base font-medium">
                                Are you also looking for the fire noc license, such as <InternalLink className="text-blue-500 underline" href="/fire-noc-in-delhi">Fire NOC Delhi</InternalLink>, <InternalLink className="text-blue-500 underline" href="/fire-noc-in-haryana">Fire NOC in Haryana</InternalLink>, <InternalLink className="text-blue-500 underline" href="/fire-noc-in-uttar-pradesh">Fire NOC Uttar Pradesh</InternalLink>? If yes, then register your query now and make your fire noc online application process easy!
                            </p>
                        </div>
                    </div>


                </div>

                {/* Section 5: Fees, Penalties and Timeline */}
                <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-red-100 rounded-lg text-red-600">
                            <Landmark size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Factory Licence Fees, Penalties And Timeline</h3>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        The fee structure for the Factory licence registration varies depending on the state you are setting up your factory. Here is the average fee structure:
                    </p>

                    {/* Fees Table */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="p-4 font-semibold border-r border-gray-700 uppercase text-sm tracking-wider">Category</th>
                                    <th className="p-4 font-semibold border-r border-gray-700 uppercase text-sm tracking-wider">Details</th>
                                    <th className="p-4 font-semibold uppercase text-sm tracking-wider">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    { cat: "Application Fee (New License)", det: "Payable at the time of filing the initial application.for factory license", amt: "INR 300 to INR 10,000 (varies by state and workforce size)" },
                                    { cat: "DPCC Orange Category Fees", det: "Pollution control board fees for applicable industrial categories.", amt: "INR 1,000 to INR 1,00,000 (dpcc orange category fees)" },
                                    { cat: "License Renewal Fee", det: "Paid annually or as per state norms for renewal of factory license.", amt: "INR 1,000 to INR 15,000" },
                                    { cat: "Amendment Fee", det: "If there are changes to the license, for example in the number of workers, machines etc.", amt: "INR 100 to INR 1,000" },
                                    { cat: "Late Fee for Renewal", det: "When renewal application is made between due and expiration date.", amt: "25%-50% of the renewal fee is extra" },
                                    { cat: "Penalty for Operating Without a License", det: "Penalty for running a factory without a valid license under Section 85 of the Factories Act.", amt: "Up to INR 1,00,000 (varies) or imprisonment up to 2 years" },
                                    { cat: "Penalty for Breach of Safety Rules", det: "Failure to follow the safety policies and practices.", amt: "Approx. INR 1,00,000 or imprisonment or both" },
                                    { cat: "Penalty for Non-Maintenance of Records", det: "Failure to uphold health, safety and employment records in line with the law.", amt: "INR 10,000 to INR 50,000 (Approx)" },
                                    { cat: "Inspection Non-Compliance Fine", det: "Consequences for failure to permit inspection of the factory or to provide co-operation during inspection.", amt: "INR 25,000 to INR 75,000 (Might vary)" },
                                    { cat: "Environmental Clearance Violation", det: "In case of a lack of proper consent/NOC from the Pollution Control Board.", amt: "Varies" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                                        <td className="p-4 border-r border-gray-100 font-semibold text-gray-800 text-sm md:text-base">{row.cat}</td>
                                        <td className="p-4 border-r border-gray-100 text-gray-600 text-sm md:text-base font-sans italic">{row.det}</td>
                                        <td className="p-4 text-red-600 font-semibold text-sm md:text-base group-hover:scale-105 transition-transform origin-left">{row.amt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Penalties & Timeline Blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                            <h4 className="text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
                                <AlertCircle size={24} /> Penalties
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    "Failing to get a licence for running a factory can result in fines of up to INR 1,00,000 or up to 2 years imprisonment.",
                                    "Failure to meet the safety standards may lead to fines, loss of permit or revocation of the permit.",
                                    "Late renewal can result in penalties and possible lawsuits.",
                                ].map((p, i) => (
                                    <li key={i} className="flex gap-3 items-start text-red-900 group">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="font-sans italic leading-relaxed">{p}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-red-800 mt-4 font-sans italic leading-relaxed">
                                Note: You need to make sure that you need timely renewal of fire safety certificate online, when and wherever required. This would help you to meet with the compliance issues and delays that might come up related to regulatory approvals.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                                <Clock size={24} className="text-[#7c4bdf]" /> Timeline
                            </h4>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed font-sans italic">
                                    <span className="font-semibold text-gray-900 not-italic">Standard Processing Time</span> - The factory licence registration takes around 25 to 30 working days, depending on document readiness and government processing time.
                                </p>
                                <div className="mt-6 p-4 bg-white rounded-xl border border-dashed border-purple-300 text-[#7c4bdf] font-medium text-center">
                                    Fast-track processing available through our consultants.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6: Factory Licence Renewal Online */}
                <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-100 rounded-lg text-[#7c4bdf]">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 uppercase">Factory Licence Renewal Online</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed font-sans italic">
                        A factory licence registration is not a one-time process. These factories license renewal is required at regular intervals to ensure uninterrupted legal compliance and smooth operations.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed font-sans italic">
                        Timely completion of factories license renewal is a critical piece to complete for businesses to avoid penalties and operational disruptions. There are several state departments now providing owners with ways to renew online for the factories and boilers, streamlining the process and making it more convenient. Our staff handles the entire process of both new application and factories and boilers license renewal online applications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Renewal Fee Sub-section */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">Renewal fee</h4>
                            <p className="text-sm text-gray-600 font-sans italic">
                                The renewal fees for pollution certificate process and the related certification such as the fire certificate renewal fee is calculated as per the structure provided below:
                            </p>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                                    <p className="font-semibold text-gray-800 mb-2">Within April (grace period):</p>
                                    <ul className="text-sm text-gray-600 space-y-1 font-sans italic pl-2">
                                        <li>• License Fee = HP-rate × Total HP</li>
                                        <li>• Permission Fee = Unit Charge (₹1000) + License Fee</li>
                                        <li>• Processing Fee = 50% of License Fee</li>
                                        <li>• Transaction Fee = ₹10</li>
                                        <li>• Convenience Fee = 2.5937% of Total Amount</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                                    <p className="font-semibold text-gray-800 mb-2">After April (up to year-end):</p>
                                    <p className="text-sm text-gray-600 font-sans italic">• Same as above plus for fire licence renewal or any related registration: Late fee = INR 150 (for first 3 months) + 5% of license fee per additional month</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                                    <p className="font-semibold text-gray-800 mb-2">Beyond one year:</p>
                                    <p className="text-sm text-gray-600 font-sans italic">• Above charges + Arrear = INR 2,000 flat</p>
                                </div>
                            </div>
                        </div>

                        {/* Amendment Fee Sub-section */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">Amendment Fee</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:border-purple-200 transition-all">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700 font-sans italic font-medium">Processing Fee = ₹550 + 2.5937% Convenience Fee</span>
                                </li>
                                <li className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:border-purple-200 transition-all">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700 font-sans italic font-medium">Registration Charges = Nil</span>
                                </li>
                                <li className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:border-purple-200 transition-all">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700 font-sans italic font-medium group">Amendment fee proper: <span className="text-gray-600 font-normal">Assessed by government officials at approval</span></span>
                                </li>
                            </ul>
                            <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-xl">
                                <p className="text-sm font-medium text-orange-800">Note: Amendment fees apply when making changes to workers, machinery, or process details.</p>
                            </div>
                        </div>
                    </div>

                    {/* Renewal Aspects Table */}
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="p-4 font-semibold border-r border-gray-700 uppercase text-sm tracking-wider">Aspect</th>
                                    <th className="p-4 font-semibold uppercase text-sm tracking-wider">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    { aspect: "Initial Validity", detail: "Typically valid for 1 year; some states may allow licenses for up to 5 years." },
                                    { aspect: "Renewal Period", detail: "Must be renewed annually or before the expiry date, depending on state rules." },
                                    { aspect: "Renewal Window", detail: "The renewal window usually works prior to 30 to 90 days before the licence expires." },
                                    { aspect: "Late Renewal", detail: "In this aspect, you may be fined with penalties and may also be asked for additional approvals." },
                                    { aspect: "Renewal Process", detail: "Applications are to be submitted online or offline with the documents submitted duly allong with the required fees." },
                                ].map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 border-r border-gray-100 font-semibold text-gray-800 text-sm md:text-base">{item.aspect}</td>
                                        <td className="p-4 text-gray-600 text-sm md:text-base font-sans italic">{item.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="p-4 bg-[#7c4bdf]/10 text-[#7c4bdf] rounded-xl border border-[#7c4bdf]/20 text-sm md:text-base font-medium text-center">
                        Fees for renewal of Factory licence and documents will be the same as mentioned in the above sections. Go through the fee structure and confirm all the details. The complete factory licence renewal process includes document verification, fee payment, and approval from the concerned state authority before the renewed licence is issued. Moreover, you can also ask our factory licence consultants who have years of experience in their respective fields and can help you out in every possible way.
                    </p>
                </div>

                {/* Section 7: Factory Licence Certificate */}
                <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 uppercase">Factory Licence Certificate</h3>
                    </div>
                    <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed font-sans italic">
                            The Factory License Certificate is an official document issued under the Factories Act, 1948, authorising an industrial license to the industrial unit to begin manufacturing operations. It confirms that your factory complies with labour, safety, and health regulations set by the state&apos;s Chief Inspector of Factories.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-semibold text-gray-800 mb-4">The certificate typically includes:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Your factory name",
                                    "License number",
                                    "Location",
                                    "Number of workers allowed",
                                    "Type of manufacturing",
                                    "Validity period"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#7c4bdf]" />
                                        <span className="font-sans italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-700 font-medium border-l-4 border-[#7c4bdf] pl-4">
                            It is a legal prerequisite before any production can commence. In most of the cases, a fire NOC certificate is also a requirement for the approval process before the certificate for factory license is issued, which makes it up for a full compliance.
                        </p>
                    </div>
                </div>

                {/* Section 8: Why choose us? */}
                <div className="mt-12 bg-gray-900 p-8 md:p-12 rounded-3xl text-white">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight">Why choose us?</h3>
                    </div>

                    <div className="max-w-4xl space-y-6 mb-10">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            The factory licence registration process and the pollution apply online may seem easy, but a single mistake can cause a delay in the process, which will be a waste of time. To save any possible rejection, you will need a professional factory license consultant who will guide you throughout the process. If you are searching for factory licence consultants near me, our team provides complete end-to-end assistance for approvals, documentation, and compliance.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Other than the factory NOCs, we also render our services to businesses and other organizations in providing them with specific NOCs related to fire safety, which include fire noc for residential buildings, fire NOC for hospitals, fire noc for commercial buildings, and fire NOC for clinics.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We have a team of expert legal advisors who will provide you with comprehensive support for factory act licence renewal, ensuring your factory remains fully compliant with state regulations without interruptions.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We are a team of experienced factory act consultants and factory licence consultants, and we provide actual assistance for manufacturing units in various industries. From an industrial licence registration to factory compliance audits, to amendments and approvals of your factory license for construction site, our experts will support you throughout the entire lifecycle of the licence.
                        </p>
                    </div>

                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-[#7c4bdf] bg-clip-text text-transparent mb-4">
                            So don&apos;t waste any further time call us now and get your factory registered, instead of searching for another factory license consultants near you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ExtendedContent;