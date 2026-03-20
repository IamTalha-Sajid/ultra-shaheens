'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="cta"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full bg-transparent py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-canary/20 rounded-full blur-[120px] transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-dark-fern/30 rounded-full blur-[120px] transform -translate-y-1/2 translate-x-1/4"></div>
      </div>

      {/* Global Interactive Tracking Flashlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 40%)` : 'transparent'
        }}
      ></div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-[1200ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>

        {/* Massive Glassmorphism Banner Wrapper */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 sm:p-12 lg:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group">

          {/* Inner banner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          {/* Faint Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <Image
              src="/ultra-shaheens-logo.png"
              alt="Ultra Shaheens Logo Background"
              width={600}
              height={600}
              className="w-auto h-[120%] object-contain"
            />
          </div>

          <div className="text-center relative z-10">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95] drop-shadow-md" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              READY TO JOIN THE
              <br className="hidden sm:block" />
              {' '}<span className="text-canary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">ULTRA REVOLUTION?</span>
            </h2>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Become part of Pakistan&apos;s most passionate football community.
              <strong className="text-white"> Experience the energy</strong>,
              <strong className="text-white"> create memories</strong>, and
              <strong className="text-white"> support our team</strong> like never before.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
              <a
                href="https://forms.gle/xek7ovwUwodKYrkA7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-canary text-black hover:bg-canary/90 hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,0,0.6)] font-bold py-4 px-10 rounded-xl transition-all duration-300 uppercase tracking-widest text-lg"
                style={{ fontFamily: '"din-condensed", sans-serif' }}
              >
                JOIN THE STANDS
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-black/40 backdrop-blur-md text-white border border-white/20 hover:border-canary/50 hover:bg-white/10 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,0,0.2)] font-bold py-4 px-10 rounded-xl transition-all duration-300 uppercase tracking-widest text-lg"
                style={{ fontFamily: '"din-condensed", sans-serif' }}
              >
                FOLLOW US
              </button>
            </div>

            {/* Stats Header */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8"></div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 max-w-4xl mx-auto">
              <div className="text-center transform transition-transform duration-500 hover:-translate-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-canary mb-2 drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  350+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                  Official Members
                </div>
              </div>
              <div className="text-center transform transition-transform duration-500 hover:-translate-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-canary mb-2 drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  10+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                  Match Events
                </div>
              </div>
              <div className="text-center transform transition-transform duration-500 hover:-translate-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-canary mb-2 drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  100%
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                  Passion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Glass Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[#050e08] border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] max-w-lg w-full mx-4 transform transition-all duration-300 scale-100 overflow-hidden relative">

            {/* Modal Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-canary/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Modal Header */}
            <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest drop-shadow-md" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  FOLLOW THE <span className="text-canary">ULTRA</span> HUB
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-canary hover:bg-white/5 transition-all duration-200 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 relative z-10">
              <p className="text-gray-300 text-center mb-8 text-sm font-medium tracking-wide">
                Stay continuously connected with Ultra Shaheens updates across all deep platforms
              </p>

              {/* Social Media Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* X (Twitter) */}
                <a
                  href="https://x.com/ultrashaheens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white/5 border border-white/10 hover:border-canary/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,0,0.15)] rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-8 h-8 mb-3 text-gray-300 group-hover:text-canary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-canary" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Twitter / X
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ultrashaheens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white/5 border border-white/10 hover:border-canary/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,0,0.15)] rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-8 h-8 mb-3 text-gray-300 group-hover:text-canary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-canary" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Facebook
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ultra_shaheens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white/5 border border-white/10 hover:border-canary/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,0,0.15)] rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-8 h-8 mb-3 text-gray-300 group-hover:text-canary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-canary" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Instagram
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/ultra-shaheens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white/5 border border-white/10 hover:border-canary/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,0,0.15)] rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <svg className="w-8 h-8 mb-3 text-gray-300 group-hover:text-canary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-canary" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    LinkedIn
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
