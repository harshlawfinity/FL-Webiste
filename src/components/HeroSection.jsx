"use client";
import { useState, useEffect, lazy } from "react";

import ContactForm from "./ContactForm";
const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [userClicked, setUserClicked] = useState(false);

  // Auto-load iframe 6s after load, only if not already clicked
  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        if (!userClicked) setShowVideo(true);
      }, 500);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, [userClicked]);

  const handlePlayClick = () => {
    setUserClicked(true);
    setShowVideo(true);
  };

  return (
    <section className="relative w-full h-[100vh] md:h-[600px] mt-20 overflow-hidden bg-[#7c4bdf]">
      <main className="w-full h-full flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Text Section */}
          <article className="text-white w-full lg:w-1/2">
            <p className="md:text-5xl text-4xl capitalize font-semibold md:mb-6 mb-2">
              From Paperwork To Permit
               factory licence done right
            </p>

            <p className="text-sm   mb-6 sm:mb-8">
              Whether you're setting up a new manufacturing unit or updating an
              existing one, we ensure your operations are fully compliant with
              government regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Get Started
              </button>
            </div>

            <h1 className="hidden">Get Your Factory Licence – Fast, Simple & Compliant</h1>
          </article>

          {/* Video/Image Section */}
          <figure className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[16/9] min-h-[200px] bg-black rounded-lg overflow-hidden flex items-center justify-center">
              {!showVideo ? (
                <>
                  <img
                    src="/static/factory-cover.webp"
                    alt="Factory Licence Video Preview"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="eager"
                    width="1280"
                    height="720"
                  />
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black/50 z-10 rounded"
                    aria-label="Play video"
                  >
                    ▶ Play Video
                  </button>
                </>
              ) : (
                 <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/BxMLFYIWyxE?autoplay=1&rel=0"
                  title="Factory Licence Walkthrough"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  frameBorder="0"
                />
              )}
            </div>
          </figure>
        </div>
      </main>

      {/* Contact Form Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-gray-50 p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 text-4xl"
              aria-label="Close contact form"
            >
              ×
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
