"use client";

import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactFormModal({ isOpen, onClose, title, description, serviceName }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-500 text-3xl hover:text-gray-700 transition"
                    aria-label="Close contact form"
                >
                    ×
                </button>
                <Suspense
                    fallback={
                        <div className="py-10 text-center">Loading form...</div>
                    }
                >
                    <ContactForm title={title} description={description} serviceName={serviceName} />
                </Suspense>
            </div>
        </div>
    );
}
