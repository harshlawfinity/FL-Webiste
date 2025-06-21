"use client"

import { BadgeCheck, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <BadgeCheck size={32} />,
    title: 'Verified Compliance Experts',
    desc: 'Work with certified professionals who understand government licensing inside-out.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Secure & Hassle-Free Process',
    desc: 'Quick documentation with end-to-end confidentiality and regulatory assurance.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Support Around the Clock',
    desc: 'Dedicated team ready to assist you with queries or escalations 24/7.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <div className="max-w-7xl mx-auto mb-12">
        <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">Why Choose FactoryLicence.In?</h2>
        <p className="mt-4 text-gray-600">
          We streamline your journey to launch a compliant manufacturing unit with precision, speed, and trust.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="bg-purple-50 p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center">
            <div className="mb-4 text-purple-600">{f.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{f.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
