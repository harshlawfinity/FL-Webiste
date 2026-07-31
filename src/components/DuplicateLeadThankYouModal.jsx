"use client";

import { FiCheckCircle } from "react-icons/fi";

/**
 * Shown when the same phone resubmits the contact form for the same page on the same
 * day — no new lead is created for this repeat submission.
 */
export default function DuplicateLeadThankYouModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="duplicate-lead-title"
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <FiCheckCircle className="text-[#7A3EF2] text-6xl mx-auto mb-4" />
        <h2 id="duplicate-lead-title" className="text-2xl font-bold text-gray-800 mb-3">
          Thank You!
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Our sales team already got your query. Shortly they will connect with you.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-block bg-[#7A3EF2] hover:bg-[#612ce0] text-white px-6 py-2.5 rounded-full font-semibold transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}