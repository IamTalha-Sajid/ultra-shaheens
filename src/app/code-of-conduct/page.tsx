'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CodeOfConductPage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#05110a] via-[#0b1f13] to-[#040806] flex flex-col relative">
      <Header />

      {/* Main Content */}
      <main
        className="flex-grow flex items-center justify-center relative overflow-hidden pt-24 pb-12"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Abstract Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-dark-fern/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-canary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2"></div>

        {/* Interactive Global Flashlight / Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
          style={{
            opacity: isHovering && mounted ? 1 : 0,
            background: mounted ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), transparent 50%)` : 'transparent'
          }}
        ></div>

        {/* Background Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 text-white">
          <Image
            src="/ultra-shaheens-logo.png"
            alt="Ultra Shaheens Logo Background"
            width={800}
            height={800}
            className="w-[80vw] max-w-4xl h-auto object-contain"
          />
        </div>

        {/* Coming Soon Glass Card */}
        <div className="relative z-10 mt-28 md:mt-36 text-center bg-white/5 backdrop-blur-xl border border-white/10 p-10 sm:p-16 md:p-24 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-4xl w-full mx-4 group overflow-hidden">
          {/* Inner banner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wide drop-shadow-md uppercase" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            CODE OF CONDUCT
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-canary tracking-wide drop-shadow-[0_0_15px_rgba(255,255,0,0.4)] mb-8" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            COMING SOON
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Stay tuned for our community guidelines. We are working hard to bring you something special!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CodeOfConductPage;
