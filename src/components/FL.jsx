"use client"

import { useEffect, useState } from 'react';
import lg2 from '../assets/lg2.gif';
import Image from 'next/image';

const FL = ({ mobile = false }) => {
  const [showImage, setShowImage] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      const interval = setInterval(() => {
        setShowImage(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [startAnimation]);

  if (mobile) {
    return (
      <div className="flex items-center h-[60px]">
        <Image src={lg2} alt="Factory Licence" className="w-24 h-auto" priority />
      </div>
    );
  }

  return (
    <div className="relative w-[220px] h-[60px] overflow-hidden flex items-center justify-start">
      {/* Sliding GIF (appears after 3s) */}
      {startAnimation && (
        <div
          className={`flex justify-start items-center absolute left-0 top-0 w-full h-full transition-all duration-1000 ease-in-out ${
            showImage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <Image src={lg2} alt="Factory License Logo Gif" className="w-32"   loading="lazy"
 />
        </div>
      )}

      {/* Sliding Factory Text (only when animation has started) */}
      {startAnimation && (
        <div
          className={`absolute left-0 top-0 h-full flex items-center text-2xl font-semibold text-[#7A3EF2] transition-all duration-100 ease-in-out ${
            showImage ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
          }`}
        >
          Factory
        </div>
      )}

      {/* Initial Static Text (before animation starts) */}
      {!startAnimation && (
        <div className="text-2xl font-semibold text-[#7A3EF2]">
          Factory
        </div>
      )}

      {/* Always-visible Licence.in */}
      <div className="ml-auto text-2xl font-semibold text-[#7A3EF2]">
        Licence.In
      </div>
    </div>
  );
};

export default FL;
