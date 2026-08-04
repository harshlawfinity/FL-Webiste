"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";
import { getLeadFormCopy } from "@/lib/leadFormCopy";
import { hasSubmittedLead, markLeadSubmitted } from "@/lib/lead-dedupe";
import StateSelect from "@/components/StateSelect";
import DuplicateLeadThankYouModal from "@/components/DuplicateLeadThankYouModal";

const HeroForm = ({ title, description, serviceName }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    description: "",
    pageSource: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDuplicateThankYou, setShowDuplicateThankYou] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const formCopy = getLeadFormCopy(pathname);
  const heading = title || formCopy.title;
  const subheading = description || formCopy.description;
  // CMS service pages pass pageTitle so CRM stores the correct service (not default Factory License).
  const resolvedServiceName = String(serviceName || "").trim();

  const phoneRegex = /^\d{10}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value && !phoneRegex.test(value)) {
      e.target.setCustomValidity("Phone number must be 10 digits.");
    } else {
      e.target.setCustomValidity("");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pageSourceValue = typeof window !== "undefined" ? window.location.href : formData.pageSource;

    // Duplicacy check (organic leads only): same phone + same pageUrl + same date
    // already submitted → thank-you popup, do not create another lead.
    if (hasSubmittedLead(formData.phone, pageSourceValue)) {
      setShowDuplicateThankYou(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istTime = new Date(now.getTime() + istOffset);
      const timestamp = istTime.toISOString().replace("T", " ").split(".")[0];

      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("phone", formData.phone);
      formBody.append("email", formData.email);
      formBody.append("state", formData.state);
      formBody.append("description", formData.description);
      formBody.append("pageSource", pageSourceValue);
      formBody.append("timestamp", timestamp);
      formBody.append("source", "organic");
      if (resolvedServiceName) {
        formBody.append("serviceName", resolvedServiceName);
        formBody.append("service", resolvedServiceName);
      }

      const response = await fetch("/api/submit-contact", {
        method: "POST",
        body: formBody,
      });

      if (response.ok) {
        markLeadSubmitted(formData.phone, pageSourceValue);
        router.push("/thankyou");
      } else {
        const err = await response.json();
        console.error("Server error:", err);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Client error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      pageSource: typeof window !== "undefined" ? window.location.href : pathname,
    }));
  }, [pathname]);

  return (
    <div
      className="w-full max-w-lg mx-auto bg-white md:p-8 p-5 rounded-2xl shadow-xl"
      data-cms-skip-heading-icon="true"
    >
      <DuplicateLeadThankYouModal
        isOpen={showDuplicateThankYou}
        onClose={() => setShowDuplicateThankYou(false)}
      />
      <div className="text-left mb-5">
        <h2 className="md:text-xl text-lg font-semibold text-[#7A3EF2]">
          {heading}
        </h2>
        <p className="text-gray-600 mt-1.5 text-sm leading-relaxed">
          {subheading}
        </p>
      </div>

      <form className="space-y-2.5" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition">
          <FiUser className="text-gray-400 text-lg shrink-0" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name*"
            className="w-full min-w-0 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition">
          <FiPhone className="text-gray-400 text-lg shrink-0" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="10-digit mobile number*"
            className="w-full min-w-0 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
            pattern="^\d{10}$"
            title="Phone number must be exactly 10 digits"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition">
          <FiMail className="text-gray-400 text-lg shrink-0" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address*"
            className="w-full min-w-0 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400"
            required
          />
        </div>

        <StateSelect
          value={formData.state}
          onChange={(state) => setFormData((prev) => ({ ...prev, state }))}
        />

        {/* Message */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="What do you need help with?"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 bg-gray-50/50 outline-none resize-y min-h-[88px] max-h-32 focus:border-[#7A3EF2] focus:ring-1 focus:ring-[#7A3EF2]/25 transition"
          rows={3}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-1 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#7A3EF2] hover:bg-[#612ce0]"
          } text-white font-semibold py-3 rounded-lg transition duration-300 text-sm`}
        >
          {isSubmitting ? "Submitting..." : "Let's Talk"}
        </button>
      </form>
    </div>
  );
};

export default HeroForm;