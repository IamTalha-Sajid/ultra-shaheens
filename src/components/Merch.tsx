"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Merch: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="w-full bg-dark-fern py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-canary mb-4 sm:mb-6 drop-shadow-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Get your hands on our official merch
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
              <span className="text-canary font-bold">Level up your game</span> with our sick Ultra Shaheens collection! 
              From <span className="text-white font-semibold">premium polos</span> to <span className="text-white font-semibold">epic shirts</span> - 
              rep the green and white like a true <span className="text-canary font-bold">ULTRA</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-canary text-dark-fern hover:bg-yellow-400 hover:scale-110 hover:shadow-2xl hover:shadow-canary/50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg transform drop-shadow-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                GRAB YOURS NOW
              </button>
              <button className="bg-transparent text-white border-2 border-canary hover:bg-canary hover:text-dark-fern hover:scale-110 hover:shadow-2xl hover:shadow-canary/30 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg transform" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                CHECK IT OUT
              </button>
            </div>
          </div>

          {/* Right Side - Shirt Flip Card */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[500px]">
              {/* Cool shadow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-canary/20 to-transparent rounded-full blur-3xl scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-2xl scale-105"></div>
              
              {/* Flip Card Container */}
              <div className="relative z-10 w-full h-full perspective-1000">
                <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''} md:hover:rotate-y-180`}>
                  {/* Front Side - Merch-01.png */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <Image
                      src="/Merch-01.png"
                      alt="Ultra Shaheens Polo Shirt - Front"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Back Side - Merch-02.png */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <Image
                      src="/Merch-02.png"
                      alt="Ultra Shaheens Polo Shirt - Back"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Mobile Flip Button */}
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="md:hidden absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 hover:bg-black/90 text-white text-xs px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {isFlipped ? 'Show Front' : 'Show Back'}
              </button>
              
              {/* Desktop Hint Text */}
              <div className="hidden md:block absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                Hover to see back
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
