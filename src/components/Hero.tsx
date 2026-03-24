'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Quick hydration fix for Next.js - ensure we only render interactive styles on client
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const heroRect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - heroRect.left,
      y: e.clientY - heroRect.top,
    });
  };

  const calculateCardTransform = () => {
    if (!mounted || !isHovering || !heroRef.current) {
      return 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate a graceful 3D tilt
    const rotateX = ((mousePos.y - centerY) / centerY) * -6; // Invert to follow intuitively
    const rotateY = ((mousePos.x - centerX) / centerX) * 6;

    return `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
  };

  const getCardInnerGlow = () => {
    if (!mounted || !isHovering || !cardRef.current || !heroRef.current) return 'transparent';
    const cardRect = cardRef.current.getBoundingClientRect();
    const heroRect = heroRef.current.getBoundingClientRect();

    // Correctly calculate mouse coordinates relative to the card itself
    const localX = mousePos.x - (cardRect.left - heroRect.left);
    const localY = mousePos.y - (cardRect.top - heroRect.top);

    return `radial-gradient(800px circle at ${localX}px ${localY}px, rgba(255, 204, 0, 0.1), transparent 40%)`;
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full min-h-[80vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_0625.jpg"
          alt="Ultra Shaheens Fanbase"
          fill
          className={`object-cover object-center transition-transform duration-[2000ms] ease-out ${isHovering ? 'scale-[1.02]' : 'scale-100'}`}
          priority
        />
      </div>

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-0"></div>
      <div className="absolute inset-0 bg-dark-fern/20 z-0 mix-blend-multiply"></div>

      {/* Interactive Global Flashlight / Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 50%)` : 'transparent'
        }}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center perspective-[1200px]">

        {/* Glassmorphic Card (Centered & Interactive) */}
        <div
          ref={cardRef}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 md:p-14 rounded-[2rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-full md:w-4/5 lg:w-3/4 max-w-4xl relative overflow-hidden flex flex-col items-center will-change-transform"
          style={{
            transform: calculateCardTransform(),
            transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50 pointer-events-none"></div>

          {/* Reactive Inner Canary Glow specific to the card */}
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 mix-blend-screen overflow-hidden"
            style={{
              opacity: isHovering && mounted ? 1 : 0,
              background: getCardInnerGlow()
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center w-full pointer-events-none">
            {/* Logo embedded in card on mobile only for flair */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 opacity-30 md:opacity-50 mix-blend-screen inline-block md:hidden">
              <Image
                src="/ultra-shaheens-logo.png"
                alt="Ultra Shaheens Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-4 tracking-wide text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] text-center" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              PAKISTAN FOOTBALL&apos;S
              <br />
              <span className="text-canary drop-shadow-[0_0_20px_rgba(255,255,0,0.3)] relative inline-block mt-3">
                ULTRA FANBASE
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-canary/50 blur-sm rounded-full"></div>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-canary to-transparent rounded-full"></div>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-6 md:mt-8 max-w-xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:border-l-2 md:border-r-2 md:border-canary px-6 text-center">
              Join the most passionate community of Pakistan football supporters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
