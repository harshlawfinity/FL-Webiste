"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ContactForm from "./ContactFormBlogs.jsx";

export default function SidebarContactForm({ service }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    pageUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({ ...prev, pageUrl: window.location.href }));
    }
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Phone number must be exactly 10 digits.";
    } else if (formData.contact === "1234567890" || formData.contact === "0987654321") {
      newErrors.contact = "Sequential numbers like 1234567890 or 0987654321 are not allowed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const data = new URLSearchParams();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("contact", formData.contact);
    data.append("service", service || "");
    data.append("pageUrl", formData.pageUrl);

    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setFormData({ name: "", email: "", contact: "", pageUrl: formData.pageUrl });
        router.push("/thankyou");
      } else {
        alert("❌ Failed: " + (result.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <aside className="w-full   sticky top-32">
    <ContactForm />
    </aside>
  );
}
