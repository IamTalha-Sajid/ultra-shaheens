import React from 'react';
import Image from 'next/image';

const CTA: React.FC = () => {
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
            Become part of Pakistan's most passionate football community. 
            <span className="text-canary font-semibold"> Experience the energy</span>, 
            <span className="text-white font-semibold"> create memories</span>, and 
            <span className="text-canary font-semibold"> support our team</span> like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4">
            <button className="w-full sm:w-auto bg-canary text-dark-fern hover:bg-yellow-400 hover:scale-105 hover:shadow-2xl hover:shadow-canary/50 font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg lg:text-xl transform drop-shadow-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              JOIN NOW
            </button>
            <button className="w-full sm:w-auto bg-transparent text-white border-2 border-canary hover:bg-canary hover:text-dark-fern hover:scale-105 hover:shadow-2xl hover:shadow-canary/30 font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg lg:text-xl transform" style={{ fontFamily: '"din-condensed", sans-serif' }}>
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
    </section>
  );
};

export default CTA;
