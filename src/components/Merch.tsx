'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Merch: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const calculateMerchTransform = () => {
    if (!mounted || !isHovering || !sectionRef.current) {
      return 'perspective(1500px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Dynamic parallax floating effect for the merch visualizer
    const rotateX = ((mousePos.y - centerY) / centerY) * -10;
    const rotateY = ((mousePos.x - centerX) / centerX) * 10;

    return `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  };

  return (
    <section
      id="merch"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full bg-transparent py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-canary/10 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dark-fern/20 rounded-full blur-[150px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      {/* Synchronized Hover Flashlight Tracker */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), transparent 40%)` : 'transparent'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side Component - Wrapped in Premium Glassmorphic Card */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 relative z-10 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 md:p-14 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform transition-all duration-500 hover:border-canary/30 hover:bg-white/10 group overflow-hidden relative">

              {/* Internal Spotlight effect on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wide drop-shadow-md leading-[0.95]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  GET YOUR HANDS ON <br className="hidden lg:block" /> OUR <span className="text-canary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">OFFICIAL MERCH</span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-10">
                  <span className="text-canary font-bold tracking-wide">LEVEL UP YOUR GAME</span> with our sick Ultra Shaheens collection. From premium polos to epic shirts—rep the green and white like a true <strong className="text-white">ULTRA</strong>.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="/merchandise"
                    className="w-full sm:w-auto bg-canary hover:bg-canary/90 text-black text-lg md:text-xl font-bold py-4 px-10 rounded-xl transition-all duration-300 uppercase tracking-widest hover:scale-105 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,0,0.5)] inline-block text-center"
                    style={{ fontFamily: '"din-condensed", sans-serif' }}
                  >
                    GRAB YOURS NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Shirt Visualizer with 3D Parallax */}
          <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full perspective-[2000px] mt-8 lg:mt-0">
            <div
              className="relative w-80 sm:w-96 md:w-[450px] lg:w-[500px] h-80 sm:h-96 md:h-[450px] lg:h-[500px] will-change-transform z-20 group"
              style={{
                transform: calculateMerchTransform(),
                transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {/* Dynamic Neon Aura behind the shirt */}
              <div className="absolute inset-0 bg-gradient-to-tr from-canary/20 via-transparent to-dark-fern/40 rounded-full blur-[80px] scale-110 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>

              {/* Flip Card Container */}
              <div className="relative z-10 w-full h-full">
                <div
                  className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 ${isFlipped ? 'rotate-y-180' : ''} md:hover:rotate-y-180 cursor-grab active:cursor-grabbing hover:scale-105`}
                  onClick={() => {
                    // Mobile and tablet touch flip
                    if (window.innerWidth < 1024) {
                      setIsFlipped(!isFlipped);
                    }
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(1px)' }}
                  >
                    <Image
                      src="/Merch-01.png"
                      alt="Ultra Shaheens Polo Shirt - Front"
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                      priority
                    />
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)' }}
                  >
                    <Image
                      src="/Merch-02.png"
                      alt="Ultra Shaheens Polo Shirt - Back"
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Interaction Hint */}
              <div className="lg:hidden flex justify-center absolute -bottom-10 left-0 right-0">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {isFlipped ? 'SHOW FRONT' : 'SHOW BACK'}
                </button>
              </div>

              {/* Desktop Hover Hint Removed per user request */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Merch;
