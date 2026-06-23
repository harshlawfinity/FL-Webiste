"use client";
import { lazy, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users } from "lucide-react";
import { TbLicense } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState({ clicks: 0, visitors: 0, pageviews: 0 });

  const targetValues = { clicks: 250, visitors: 1000, pageviews: 10 };

  useEffect(() => {
    if (inView) {
      const duration = 10000;
      const steps = 60;
      const interval = duration / steps;
      let current = { clicks: 0, visitors: 0, pageviews: 0 };
      let count = 0;

      const increment = () => {
        count++;
        const progress = count / steps;

        setCounts({
          clicks: Math.floor(progress * targetValues.clicks),
          visitors: Math.floor(progress * targetValues.visitors),
          pageviews: Math.floor(progress * targetValues.pageviews),
        });

        if (count < steps) {
          requestAnimationFrame(increment);
        } else {
          setCounts(targetValues); // ensure exact final numbers
        }
      };

      requestAnimationFrame(increment);
    }
  }, [inView]);

  return (
    <div className="bg-gradient-to-b from-white to-violet-50 py-14 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto border border-violet-300 rounded-3xl p-10 shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl text-center font-semibold capitalize text-[#000000] mb-6">
          Numbers don’t lie – we’re growing fast!
        </h2>
        <p className="text-center text-gray-600 text-sm max-w-4xl mx-auto mb-10 text-justify">
          Our clients fully rely on our help in all aspects of their compliance needs, including their fire safety renewal online. We have a team of legal experts who answer your queries to questions such as how to get pollution certificate for factory, pollution certificate for business so that you can set up your manufacturing unit with full knowledge regarding the things that you must know as a business person.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-medium">
          <StatCard label="Factories Registered" value={counts.clicks} icon={<TbLicense size={28} />} />
          <StatCard label="Consultations Provided" value={counts.visitors} icon={<Users size={28} />} />
          <StatCard label="Years of   Industry Experience" value={counts.pageviews} icon={<GrUserExpert size={28} />} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-[#7A3EF2] hover:scale-105 transition-transform duration-300 rounded-2xl p-6 shadow-md text-center text-white">
      <div className="flex justify-center mb-3 text-violet-100">{icon}</div>
      <div className="text-3xl font-bold tracking-wide">{value.toLocaleString()}+</div>
      <div className="text-sm mt-1 opacity-85">{label}</div>
    </div>
  );
}
