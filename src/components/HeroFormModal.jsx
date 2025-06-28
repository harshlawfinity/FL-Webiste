"use client";

import React, { useEffect, useState, useRef } from "react";
import HeroForm from "./ContactForm";

const HeroFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeTimestampRef = useRef(null);

  // Show modal every 10 seconds unless it was closed recently
  useEffect(() => {
    const interval = setInterval(() => {
      const lastClosed = closeTimestampRef.current;
      const now = Date.now();

      // Reopen only if it was closed more than 60s ago
      if (!lastClosed || now - lastClosed > 60000) {
        setShowModal(true);
      }
    }, 20000); // check every 10s

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    closeTimestampRef.current = Date.now();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-xl">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <HeroForm />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroFormModal;
