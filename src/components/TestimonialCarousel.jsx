'use client'
import {   useEffect, useRef, useState } from 'react';
import { Star } from "lucide-react";

import innobev from '../assets/logo/innobev.webp';
import lathar from '../assets/logo/lathar.webp';
import servotec from '../assets/logo/servotec.webp';
import sleepy from '../assets/logo/sleepy.webp';
import smc from '../assets/logo/smc.webp';
import sugar from '../assets/logo/sugar.webp';
import syfo from '../assets/logo/syfo.webp';
import jaypee from '../assets/logo/jaypee.png';
import Image from 'next/image';
// 
const testimonials = [
  {
    name: 'Sarika Bhatia',
    role: 'Director, Servotech Power System Ltd.',
    avatar: servotec,
    quote:
      'FactoryLicence.in made the entire process of getting our factory licence smooth and stress-free. Their team was responsive, well-informed, and extremely professional.',
    others: ['/avatar2.png', '/avatar3.png'],
  },
  {
    name: 'Amit',
    role: 'Purchase Manager, Jaypee Infratech Limited',
    avatar: jaypee,
    quote:
      'Pollution NOC ka process initially bahut confusing tha, lekin Lawfinity India ne pura kaam handle kiya—from documentation to approvals. Bohot hi efficient aur trustworthy service.',
    others: ['/avatar3.png', '/avatar4.png'],
  },
  {
    name: 'Tanul Rustagi',
    role: 'Director, Innobev Solution Private Limited',
    avatar: innobev,
    quote:
      'With FactoryLicence.in, we secured our factory licence without a hitch. Their end-to-end support helped us launch production on time with complete legal compliance.',
    others: ['/avatar4.png', '/avatar5.png'],
  },
  {
    name: 'Anil Kakkar',
    role: 'Director, SPRU Products Pvt Ltd',
    avatar: syfo,
    quote:
      'We highly recommend FactoryLicence.in for factory setup compliance. Their detailed knowledge and proactive approach helped us avoid delays and penalties.',
    others: ['/avatar5.png', '/avatar6.png'],
  },
  {
    name: 'Jhanvi Mishra',
    role: 'Product Manager, Sugar Cosmetics',
    avatar: sugar,
    quote:
      'FactoryLicence.in ensured that every form and requirement for our factory licence was handled efficiently. The service was prompt and saved us countless hours.',
    others: ['/avatar6.png', '/avatar7.png'],
  },
  {
    name: 'Mithilesh Gautam',
    role: 'Product Manager, Lather Green Energy Pvt Ltd',
    avatar: lathar,
    quote:
      'Lawfinity India ke through Pollution NOC lena kaafi asaan ho gaya. Har step par proper guidance mila. Compliance ke bina kaam start karna risk hota hai – unhone woh risk hata diya.',
    others: ['/avatar7.png', '/avatar8.png'],
  },
  {
    name: 'Prakash Raj',
    role: 'Sleepy Owl Private Coffee Pvt Ltd',
    avatar: sleepy,
    quote:
      'Hamari factory ke liye sabhi licences jaise Factory Licence, Pollution NOC, Labour aur Fire Safety approvals ek hi jagah – Lawfinity India – se mile. Ek hi trusted source se saara compliance complete karna bahut hi suvidha janak aur safe tha.',
    others: ['/avatar8.png', '/avatar1.png'],
  },
  {
    name: 'Nawam Gupta',
    role: 'SMC Enterprises',
    avatar: smc,
    quote:
      'We obtained all our factory-related licences—such as the Factory Licence, Pollution NOC, Labour Compliance, and Fire Safety Approvals—from a single source: Lawfinity India. Completing all compliances through one trusted partner was extremely convenient and ensured full legal safety.',
    others: ['/avatar1.png', '/avatar2.png'],
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
const intervalRef = useRef(null); // ✅ JavaScript-compatible

  // Start auto-play
  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  // Stop auto-play
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Effect for auto-play
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const { name, role, avatar, quote } = testimonials[index];

  return (
    <div
      className="py-16 px-4 text-center bg-white"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 bg-white">Over 1000+ People Trusted Us</h2>

     <div className='mt-5'>
       <div className="flex justify-center items-center space-x-6 mb-6 mt-5">
        <Image
          src={avatar}
          alt={name}
            loading="lazy"

          className="w-40 border-4 border-white   scale-110"
        />
      </div>

      <h3 className="font-semibold text-gray-900 text-lg">
        {name}<br />
        <span className="text-gray-400 text-sm font-medium">{role}</span>
      </h3>
      <p className="mt-4 text-xl font-semibold text-gray-700 max-w-2xl italic mx-auto">
        "{quote}"
      </p>

      <div className="flex justify-center mt-6 space-x-1 text-purple-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>
     </div>
    </div>
  );
}