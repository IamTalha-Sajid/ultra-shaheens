import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto md:h-[432px] flex flex-col md:flex-row items-start -mt-0">
      {/* Mobile: Text Section First */}
      <div className="w-full md:hidden h-auto bg-dark-fern flex items-center justify-center py-8 px-6 relative">
        {/* Logo with 30% opacity */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src="/ultra-shaheens-logo.png" 
            alt="Ultra Shaheens Logo" 
            width={192}
            height={112}
            className="w-full h-full object-contain opacity-20"
            priority
          />
        </div>
        
        {/* Text content */}
        <div className="text-center text-white max-w-full px-2 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            PAKISTAN FOOTBALL&apos;S
            <br />
            <span className="text-canary">ULTRA FANBASE</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-md mx-auto">
            Join the most passionate community of Pakistan football supporters
          </p>
        </div>
      </div>
      
      {/* Mobile: Image Section Second */}
      <div className="w-full md:hidden h-72 sm:h-80 md:h-96 relative overflow-hidden">
        <Image
          src="/Pakistan-Football-1.jpg"
          alt="Pakistan Football Players Celebrating"
          width={1920}
          height={432}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      {/* Desktop: Original Layout - Full Image with Text Overlay */}
      <div className="hidden md:block w-full h-[432px] relative overflow-hidden">
        <Image
          src="/Pakistan-Football-2.jpg"
          alt="Pakistan Football Players in Prayer"
          width={1920}
          height={432}
          className="w-full h-full object-cover"
          priority
        />
        {/* Left half overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-dark-fern opacity-70"></div>
        
        {/* Text on top of overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              PAKISTAN FOOTBALL&apos;S
              <br />
              <span className="text-canary">ULTRA FANBASE</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200">
              Join the most passionate community of Pakistan football supporters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
