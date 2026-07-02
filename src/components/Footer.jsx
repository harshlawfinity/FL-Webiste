"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  PhoneCall,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import FL from "./FL2.jsx";

export default function Footer() {
  const services = [
    { href: "/factory-licence-in-delhi", label: "Factory Licence in Delhi" },
    { href: "/factory-licence-in-haryana", label: "Factory Licence in Haryana" },
    { href: "/factory-licence-in-uttar-pradesh", label: "Factory Licence in Uttar Pradesh" },
    { href: "/fire-noc-in-delhi", label: "Fire NOC in Delhi" },
    { href: "/fire-noc-in-haryana", label: "Fire NOC in Haryana" },
    { href: "/fire-noc-in-uttar-pradesh", label: "Fire NOC in Uttar Pradesh" },
    { href: "/pollution-noc-in-delhi", label: "Pollution NOC in Delhi" },
    { href: "/pollution-noc-in-haryana", label: "Pollution NOC in Haryana" },
    { href: "/pollution-noc-in-uttar-pradesh", label: "Pollution NOC in Uttar Pradesh" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Latest Blog" },
    { href: "/contact", label: "Contact Us" },
    { href: "/payments", label: "Payment" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-cancellation", label: "Refund Cancellation" },
    { href: "/terms-conditions", label: "Terms Conditions" },
  ];

  return (
    <footer className="bg-[#8653F4] text-gray-200 px-6 py-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Column 1 */}
        <div className="w-full flex items-center justify-center flex-col">
          <FL />
          <h4 className="text-2xl mt-10 italic font-semibold mb-6 tracking-wide text-purple-100">
            Factory Licencing Made Simple With factorylicence.in
          </h4>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 tracking-wide text-purple-100">
            Contacts
          </h4>
          <address className="not-italic text-gray-100 leading-relaxed">
            T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12,
            Dwarka, New Delhi - 110078
          </address>

          <p className="text-gray-100 mt-6 leading-relaxed">
            <span className="font-semibold">Mon – Sat:</span> 10am – 7pm
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-3">
              <PhoneCall size={20} />
              <a
                href="tel:+919910774687"
                className="hover:text-purple-100 transition-colors font-medium"
              >
                +91 99107 74687
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} />
              <a
                href="mailto:info@factorylicence.in"
                className="hover:text-purple-100 transition-colors font-medium"
              >
                info@factorylicence.in
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-8">
            <a
              href="https://www.facebook.com/factorylicence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-purple-800 transition-colors"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/factorylicence.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-purple-800 transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/factorylicence/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-800 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.youtube.com/@FactoryLicence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-purple-800 transition-colors"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 tracking-wide text-purple-100">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-purple-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-6 tracking-wide text-purple-100">
            Quick Links
          </h4>
          <ul className="space-y-2 ">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-purple-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          {/* <div>
            <h4 className="text-2xl font-semibold mb-6 tracking-wide text-purple-100">
              Our Support
            </h4>
            <p className="text-purple-100 font-semibold text-2xl mb-3 flex gap-2 items-center">
              <PhoneCall size={24} />
              +91 99107 74687
            </p>
          </div> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-100 border-t border-gray-200 pt-4 pb-20 md:pb-0">
        <p>
          All Rights Reserved 2025.{" "}
          <Link
            href="/"
            className="text-purple-100 hover:text-purple-800 transition-colors font-semibold"
          >
            factorylicence.in 
          </Link>{" "}
          | <span className="italic">Powered by <Link className="text-white hover:text-blue-600" href="https://www.lawfinity.in/" target="_blank">Lawfinity India PVT LTD</Link></span>
        </p>
      </div>
    </footer>
  );
}
