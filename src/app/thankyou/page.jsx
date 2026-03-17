import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export const metadata = {
  title: "Thank You – Your Factory Licence Inquiry Has Been Submitted | FactoryLicence.in",
  description:
    "Thank you for contacting FactoryLicence.in. Our factory licence experts will review your request and contact you shortly to assist with factory licence registration, renewal, or compliance services.",
  keywords:
    "thank you page, factory licence, factory licence registration, factory licence renewal, factory compliance services",
  alternates: {
    canonical: "https://factorylicence.in/thankyou",
  },
};

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray- px-4">
      <div className="bg-white rounded-2xl  p-8 max-w-2xl w-full mx-auto text-center">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#7A3EF2]">
            Home
          </Link>
          {" > "}
          Thank You
        </nav>
        <FiCheckCircle className="text-[#7A3EF2] text-6xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Thank You! Our Factory Licence Expert Will Contact You Soon.
        </h1>
        <p className="text-gray-600 mb-6">
          We've received your details. Our team will connect with you shortly.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#7A3EF2] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#612ce0] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
