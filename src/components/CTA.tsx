"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="cta" className="w-full bg-gradient-to-br from-dark-fern via-dell to-la-palma py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-canary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-asparagus rounded-full blur-2xl"></div>
      </div>
      
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-8 pointer-events-none">
        <Image 
          src="/ultra-shaheens-logo.png" 
          alt="Ultra Shaheens Logo Background" 
          width={400}
          height={200}
          className="h-96 sm:h-[500px] lg:h-[600px] w-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            READY TO JOIN THE
            <br />
            <span className="text-canary drop-shadow-lg">ULTRA REVOLUTION?</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Become part of Pakistan&apos;s most passionate football community. 
            <span className="text-canary font-semibold"> Experience the energy</span>, 
            <span className="text-white font-semibold"> create memories</span>, and 
            <span className="text-canary font-semibold"> support our team</span> like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4">
            <a 
              href="https://forms.gle/xek7ovwUwodKYrkA7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-canary text-dark-fern hover:bg-yellow-400 hover:scale-105 hover:shadow-2xl hover:shadow-canary/50 font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg lg:text-xl transform drop-shadow-lg text-center" 
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              JOIN NOW
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-transparent text-white border-2 border-canary hover:bg-canary hover:text-dark-fern hover:scale-105 hover:shadow-2xl hover:shadow-canary/30 font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg lg:text-xl transform" 
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              FOLLOW US
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-canary mb-1 sm:mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                350+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-wide font-semibold">
                Official Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-canary mb-1 sm:mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                09+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-wide font-semibold">
                Match Events
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-canary mb-1 sm:mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                100%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 uppercase tracking-wide font-semibold">
                Passion
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 transform transition-all duration-300 scale-100 border-2 border-gray-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-racing-green via-dark-fern to-dell px-6 py-5 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  Follow Us
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-dell hover:text-white transition-colors duration-200 p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-dell"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-gray-50 rounded-b-3xl">
              <p className="text-racing-green text-center mb-8 text-sm sm:text-base font-medium">
                Stay connected with Ultra Shaheens across all platforms
              </p>
              
              {/* Social Media Icons */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* X (Twitter) */}
                <a 
                  href="https://x.com/ultrashaheens" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 sm:p-6 bg-white border-2 border-gray-200 hover:border-canary hover:bg-canary hover:text-dark-fern rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-600 group-hover:text-dark-fern" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-700 group-hover:text-dark-fern" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    X (Twitter)
                  </span>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/ultrashaheens/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 sm:p-6 bg-white border-2 border-gray-200 hover:border-canary hover:bg-canary hover:text-dark-fern rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-600 group-hover:text-dark-fern" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-700 group-hover:text-dark-fern" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Facebook
                  </span>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/ultra_shaheens/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 sm:p-6 bg-white border-2 border-gray-200 hover:border-canary hover:bg-canary hover:text-dark-fern rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-600 group-hover:text-dark-fern" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-700 group-hover:text-dark-fern" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Instagram
                  </span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/ultra-shaheens/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 sm:p-6 bg-white border-2 border-gray-200 hover:border-canary hover:bg-canary hover:text-dark-fern rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-600 group-hover:text-dark-fern" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-gray-700 group-hover:text-dark-fern" style={{ fontFamily: '"din-condensed", sans-serif' }}>
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
