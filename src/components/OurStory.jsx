"use client"

 import { ThumbsUp, ShieldCheck, Users, Briefcase } from "lucide-react";
import { SEO_ASSETS } from "@/lib/heroBackgrounds";
 
export default function OurStory() {
  return (
    <section className="bg-white py-16 md:px-0 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
          Our Journey
        </span>
        <h2 className="text-3xl md:text-4xl max-w-5xl  mx-auto font-semibold text-gray-900 mt-4">
          We do more than Just Licencing <br />We Support Entrepreneurs Who are into Manufacturing
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          With the help of our effortlessly flawless digital process and personalized client support, we extend our help to get your factory licences in a brief, while you remain stress-free, and get complete clarity regarding any kind of factory license registration.
        </p>
      </div>
<div className="grid md:grid-cols-2 gap-6 items-stretch max-w-7xl mx-auto">
  {/* Left Side – Image & Tags */}
  <div className="relative h-[360px]">
    <img
      src={SEO_ASSETS.factoriesImage}
      loading="lazy"
      alt="Factories Image"
      className="rounded-2xl w-full h-full object-cover shadow-md"
      width={800}
      height={360}
    />
  </div>

  {/* Right Side – Stacked USP Cards */}
  <div className="flex flex-col justify-between space-y-3 h-full">
    {[
      { icon: <ThumbsUp size={22} />, stat: '1,000+', label: 'Overall Consultations Provided' },
      { icon: <ShieldCheck size={22} />, stat: '100%', label: 'Govt Compliance Guarantee' },
      { icon: <Users size={22} />, stat: '250+', label: 'Licences Processed' },
      { icon: <Briefcase size={22} />, stat: '10+', label: 'Years of Business in the industry' },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-purple-100"
      >
        <div>
          <div className="text-lg font-semibold text-gray-800">{item.stat}</div>
          <div className="text-sm text-gray-600">{item.label}</div>
        </div>
        <div className="text-purple-600">{item.icon}</div>
      </div>
    ))}
  </div>
</div>



    </section>
  );
}
