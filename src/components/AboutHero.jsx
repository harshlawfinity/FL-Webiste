"use client"

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactFormModal from "@/components/ContactFormModal";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center  md:pt-60 pt-40 pb-20 bg-gradient-to-b from-white via-[#642bd542] to-white text-center px-4">
        <nav className="mb-4 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#642bd5] cursor-pointer">
            Home
          </Link>
          {" >> "}
          <span className="text-gray-900">About US</span>
        </nav>
        <h1 className="text-4xl max-w-4xl md:text-5xl font-semibold text-gray-900 capitalize">
          About US
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Factorylicence.in is your most trusted partner for all the services spanning from factory setup to factory management.
        </p>
        <button onClick={() => setShowPopup(true)}
          className="mt-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#642bd5] to-purple-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transition">
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>
      <ContactFormModal isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
