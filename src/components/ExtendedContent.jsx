"use client";
import React, { useState } from 'react';
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
    ChevronUp,
    HelpCircle
} from 'lucide-react';

const ExtendedContent = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "How to pay factory license fee online",
            a: "You can pay the factory license fee online through the respective State Labour Department or Factory Inspectorate official portal. After logging in, select the factory license service, enter the required details, and proceed to the online payment option using net banking, debit card, or other available payment methods. Once the payment is successful, you can download the payment receipt for future reference."
        },
        {
            q: "How to renew factory license online",
            a: "To renew a factory license online, visit the official factory licensing portal of your state and log in using your registered credentials. Fill in the renewal application form, upload the required documents, and pay the applicable renewal fee online. After submission, the application will be processed by the concerned authority, and the renewed license can be downloaded once approved."
        },
        {
            q: "How to renew factory license online Delhi",
            a: "For Delhi, you can renew the factory license online through the Delhi Labour Department’s official website. Log in to the portal, choose the factory license renewal option, update factory details, upload mandatory documents, and pay the renewal fee online. After verification by the department, the renewed factory license will be issued digitally."
        },
        {
            q: "How to apply for factory licence",
            a: "To apply for a factory licence, you need to register on the State Labour Department or Factory Inspectorate portal. Fill out the application form, provide factory details, upload necessary documents such as layout plans and identity proofs, and pay the prescribed government fee. After inspection and approval by the authorities, the factory licence is granted."
        },
        {
            q: "How to apply for factory license in Delhi",
            a: "To apply for a factory license in Delhi, you must submit an online application through the Delhi Labour Department portal. The process includes registering on the portal, completing the application form, uploading required documents, and paying the government fee. Once the application is reviewed and the factory inspection is completed, the factory license is issued by the concerned department."
        },
        {
            q: "Is a factory licence required for small-scale manufacturing units?",
            a: "Yes, if the unit employs 10 or more workers with power or 20 or more without power."
        },
        {
            q: "What is the validity of a factory licence?",
            a: "Typically valid for 1 year; some states offer up to 5 years with renewal options."
        },
        {
            q: "Can Factory Licence.in help with inspections and renewals?",
            a: "Yes, we offer end-to-end support, including pre-inspection readiness and timely renewal services."
        },
        {
            q: "Are fire and pollution NOCs mandatory?",
            a: "Yes, especially for medium to large factories or those involved in chemical or hazardous production."
        },
        {
            q: "Who issues the Factory Licence in Delhi?",
            a: "The Labour Department, Government of NCT of Delhi."
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
                        <span className="text-[#7c4bdf]">Factory License Registration</span> in India
                    </h2>
                    <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed">
                        Planning to establish a new factory in India? However, are you aware of the legal formalities you must fulfil for your factory licence registration? If not, then don’t worry, we are here to help you with the complete factory registration process. You will get all the information about the Factory licence registration, Factory licence renewal, Factory licence fees, and Factory licence renewal fees.
                        <br />
                        If you have any queries about the Factory licence registration process, feel free to call us. We are always ready to help.
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
                                <h3 className="text-xl font-semibold text-gray-800">What is Factory License Registration?</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                To operate a manufacturing facility legally, you need to have a factory licence. It is a necessary legal document issued by the government. Holding a Factory licence means that the particular facility complies with all the labour laws, safety regulations, statutory requirements, and other environmental standards.
                                <br />
                                <br />
                                Under the Factory Act licence, 1948, it is mentioned that the premises that carry out manufacturing processes employing 10 or more workers with the aid of power, or employing 20 or more workers without power, will need to register their factory and have to obtain a factory licence. Manufacturing facilities that are operating without this licence can face serious legal actions and penalties.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Why Factory Licence Needed?</h3>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm">
                                    As mentioned in the Factories Act, 1948, anyone operating a manufacturing facility will face legal action. This simply makes the Factory licence registration a compulsory document to have. Factories running without registration can face legal issues like imposing heavy fines, penalties, and even lead to imprisonment.
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    The government is pressuring Factories to obtain a legal licence because having a factory licence registration ensures that the factory is running with all the appropriate safety standards. So that the employees' health and well-being will not be compromised. Not only this, but the licence also validates the operational authenticity of the business, which makes other approvals, participation in government tenders, and licences easy to secure.
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    All these things make a MCD Factory licence registration a crucial aspect for the factory owners to set up or operate a manufacturing plant in India.
                                </li>
                            </ul>
                            <p className="mt-4 text-xs text-gray-500 italic font-sans italic">
                                Connect with us now to get an MCD licence for factory!
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
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Legal Recognition & Protection",
                                    desc: "A legal licence for a factory is the symbol that your factory has been recognised by the law, and this symbol will give your factory protection from legal complications and shutdowns due to non-compliance.",
                                    icon: Landmark
                                },
                                {
                                    title: "Ensure Safety & Welfare at Workplace",
                                    desc: "The licence minimises accidents by mandating to follow-up of all the safety standards and employee welfare regulations, which improves the satisfaction of employees.",
                                    icon: HardHat
                                },
                                {
                                    title: "Helps in Expansion & Investment",
                                    desc: "The investors prefer factories with a legal validation, thus a license will help factories in raising funds, expand their operational hassle-free free or enter into contracts.",
                                    icon: TrendingUp
                                },
                                {
                                    title: "Access to Government Schemes",
                                    desc: "Government schemes, subsidies, and certification will only be used by the factories that are recognised by the government authorities.",
                                    icon: CheckCircle2
                                },
                                {
                                    title: "Improves Reputation & Builds Trust",
                                    desc: "Your factory's credibility gets enhanced among the stakeholders and investors, such as customers, vendors, government bodies, and suppliers.",
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
                            We can help you get the factory license certificate for all states, like <a className='400 text-blue-600 underline px-' href="https://factorylicence.in/factory-licence-in-delhi">Factory license in Delhi</a>, <a className='400 text-blue-600 underline px-' href="https://factorylicence.in/factory-licence-in-haryana">Factory license Haryana</a>, <a className='400 text-blue-600 underline px-' href="https://factorylicence.in/factory-licence-in-uttar-pradesh">Factory licence in Uttar Pradesh</a>. Call us, we would like to help you.
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
                    <p className="text-sm text-gray-600 mb-8 font-medium italic">If a factory meets these points, then it is eligible for the factory licence registration:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {[
                            "Factories with 10 or more workers, with the aid of power.",
                            "Manufacturing unit with 20 or more workers operating without using power.",
                            "Factories engaged in hazardous processes or dangerous operations as defined under the law.",
                            "Startups and MSMEs involved in the production, processing, or assembling of goods.",
                            "Importers are establishing a local manufacturing facility in India.",
                            "Premises using machinery or power-driven tools for producing or modifying goods.",
                            "Public or private sector enterprises that fall under the definition of a \"factory\" in the Factories Act, 1948.",
                            "Industrial warehouses use machinery for processing, altering, repackaging, or handling goods.",
                            "Export-Oriented Units (EOUs) are involved in any manufacturing activity.",
                            "Entities that require pollution control or fire safety clearance due to operational risks are also subject to stricter regulatory oversight."
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
                            We can assist you with online factory registration in India. And also provide help in getting <a className='text-blue-500 underline' href="https://factorylicence.in/pollution-noc-in-delhi">Pollution NOC in Delhi</a> , <a className='text-blue-500 underline' href="https://factorylicence.in/pollution-noc-in-haryana">Pollution NOC in Haryana</a>, and <a className='text-blue-500 underline' href="https://factorylicence.in/pollution-noc-in-uttar-pradesh">Pollution NOC in Uttar Pradesh</a>.
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
                            Documentation is the most crucial part of the Factory registration process. If you miss or submit any wrong documents, then your factory license application process will take more than usual because of the delay due to the wrong or missing documents.
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

                    <div className="mt-12 p-8 bg-gray-900 rounded-2xl text-white text-center">
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
                            How to Apply for Factory Licence Registration?
                            <span className="text-xs font-normal text-purple-100 italic">Follow these steps carefully to apply factory license online:</span>
                        </h3>

                        <div className="space-y-8 mt-8">
                            {[
                                {
                                    step: "Step 1",
                                    title: "Obtain Factory Plan Approval",
                                    desc: "First, you have to submit the building plan of your factory with the architectural drawings to the state labour department for approval to ensure the structure meets all the safety and health standards."
                                },
                                {
                                    step: "Step 2",
                                    title: "Submit Notice of occupation (Form 1)",
                                    desc: "At least 15 days before occupying the premises, you must submit a formal Notice of Occupation (typically Form 1) to the Chief Inspector of Factories. This informs them about your intention to commence factory operations."
                                },
                                {
                                    step: "Step 3",
                                    title: "Online Application for License (Form 2)",
                                    desc: "Visit the official online portal of your state's Labour Department or Directorate of Factories and Boilers (e.g., MCD, SDMC, EDMC portal). Register, log in, and fill out the factory licence registration application form (Form 2) with accurate factory and worker details."
                                },
                                {
                                    step: "Step 4",
                                    title: "Upload Documents",
                                    desc: "Attach all the required documents as per the checklist, ensuring they are in the prescribed format and size."
                                },
                                {
                                    step: "Step 5",
                                    title: "Pay Factory License Fees",
                                    desc: "Pay the applicable factory license fees online through the portal's payment gateway. The fee structure depends on factors like the number of workers and the total horsepower of installed machinery."
                                },
                                {
                                    step: "Step 6",
                                    title: "Scrutiny and Inspection",
                                    desc: "The submitted application and documents undergo scrutiny by the authorities. An Inspector of Factories may conduct a physical inspection of your factory premises to verify compliance."
                                },
                                {
                                    step: "Step 7",
                                    title: "Grant of Factory License Certificate",
                                    desc: "If your application, documents, and inspection results are satisfactory, the Chief Inspector of Factories will approve your application and issue the factory licence certificate."
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
                                Are you also looking for the <a className='text--500 underline' href="https://factorylicence.in/fire-noc-in-delhi">Fire NOC Delhi</a>, <a className='text--500 underline' href="https://factorylicence.in/fire-noc-in-haryana">Fire NOC in Haryana</a>, <a className='text--500 underline' href="https://factorylicence.in/fire-noc-in-uttar-pradesh">Fire NOC Uttar Pradesh</a>? If yes, then register your query now!
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
                                    { cat: "Application Fee (New License)", det: "Payable at the time of filing the initial factory license application.", amt: "Rs. 300 to Rs. 10,000 (varies by state and workforce size)" },
                                    { cat: "License Renewal Fee", det: "Paid annually or as per state norms for renewal of factory license.", amt: "Rs. 1,000 to Rs. 15,000" },
                                    { cat: "Amendment Fee", det: "When changes are made to the license, such as a change in the number of workers, machinery, etc.", amt: "Rs. 100 to Rs. 1,000" },
                                    { cat: "Late Fee for Renewal", det: "If a renewal application is filed after the due date but before expiry.", amt: "25%-50% of the renewal fee is extra" },
                                    { cat: "Penalty for Operating Without a License", det: "Penalty for running a factory without a valid license under Section 85 of the Factories Act.", amt: "Up to Rs. 1,00,000 or imprisonment up to 2 years" },
                                    { cat: "Penalty for Breach of Safety Rules", det: "Failure to comply with safety standards and protocols.", amt: "Rs. 1,00,000 or imprisonment or both" },
                                    { cat: "Penalty for Non-Maintenance of Records", det: "For not maintaining health, safety, and employment records as per the law.", amt: "Rs. 10,000 to Rs. 50,000" },
                                    { cat: "Inspection Non-Compliance Fine", det: "Penalty for obstructing or failing to cooperate during factory inspections.", amt: "Rs. 25,000 to Rs. 75,000" },
                                    { cat: "Environmental Clearance Violation", det: "In case of a lack of proper consent/NOC from the Pollution Control Board.", amt: "Rs. 50,000 to Rs. 2,00,000 or closure" },
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
                                    "Operating a factory without a valid licence can lead to fines up to ₹1,00,000 or imprisonment up to 2 years.",
                                    "Non-compliance with safety norms can result in penalties, suspension or cancellation of the licence.",
                                    "Delay in renewal may incur late fees and legal consequences."
                                ].map((p, i) => (
                                    <li key={i} className="flex gap-3 items-start text-red-900 group">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="font-sans italic leading-relaxed">{p}</span>
                                    </li>
                                ))}
                            </ul>
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
                    <p className="text-gray-600 mb-8 leading-relaxed font-sans italic">
                        A factory licence registration is not a one-time process; you have to renew it after every specific duration to work freely without any legal objection.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Renewal Fee Sub-section */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">Renewal fee</h4>
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
                                    <p className="text-sm text-gray-600 font-sans italic">• Same as above plus: Late fee = ₹150 (for first 3 months) + 5% of license fee per additional month</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
                                    <p className="font-semibold text-gray-800 mb-2">Beyond one year:</p>
                                    <p className="text-sm text-gray-600 font-sans italic">• Above charges + Arrear = ₹2,000 flat</p>
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
                                    <span className="text-gray-700 font-sans italic font-medium group">Amendment fee proper: <span className="text-gray-600 font-normal">Assessed by MCD officials at approval</span></span>
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
                                    { aspect: "Renewal Window", detail: "Usually begins 30 to 90 days before the license expiry date." },
                                    { aspect: "Late Renewal", detail: "May attract penalties or require additional approvals." },
                                    { aspect: "Renewal Process", detail: "Submit renewal application online/offline with updated documents and fees." },
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
                        Factory licence renewal fees and documents will be the same as mentioned in the above sections. Go through the fee structure and confirm all the details.
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
                            The Factory License Certificate is an official document issued under the Factories Act, 1948, authorising an industrial unit to begin manufacturing operations. It confirms that your factory complies with labour, safety, and health regulations set by the state’s Chief Inspector of Factories.
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
                            It is a legal prerequisite before any production can commence.
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
                            The factory licence registration process may seem easy, but <span className="text-white font-semibold">a single mistake can cause a delay in the process</span>, which will be a waste of time. To save any possible rejection, you will need a professional factory license consultant who will guide you throughout the process.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We have a team of expert legal advisors who will provide you with comprehensive support to ensure your error-free applications.
                        </p>
                    </div>

                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-[#7c4bdf] bg-clip-text text-transparent mb-4">
                            So don't waste more time, call us now and get your factory registered as soon as possible!
                        </p>
                    </div>
                </div>

                {/* Section 9: FAQs */}
                <div className="mt-12 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-purple-100 rounded-lg text-[#7c4bdf]">
                            <HelpCircle size={28} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 uppercase tracking-tight">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 last:border-0">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex justify-between items-center py-6 text-left group hover:text-[#7c4bdf] transition-colors"
                                >
                                    <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-[#7c4bdf]">
                                        {idx + 1}. {faq.q}
                                    </span>
                                    <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                                        <ChevronDown size={24} className={openFaq === idx ? 'text-[#7c4bdf]' : 'text-gray-400'} />
                                    </div>
                                </button>
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openFaq === idx ? 'max-h-[500px] pb-6' : 'max-h-0'
                                    }`}
                                >
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <p className="text-gray-600 leading-relaxed font-sans italic text-sm md:text-base">
                                            <span className="font-semibold text-[#7c4bdf] not-italic mr-2">Ans.</span> 
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ExtendedContent;