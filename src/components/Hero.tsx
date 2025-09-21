import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[432px] flex items-start -mt-0">
      {/* Single Image */}
      <div className="w-full relative">
        <Image
          src="/Pakistan-Football-2.jpg"
          alt="Pakistan Football Players in Prayer"
          width={1920}
          height={432}
          className="w-full h-full object-contain"
          priority
        />
        {/* Left half overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-dark-fern opacity-70"></div>
        
        {/* Text on top of overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              PAKISTAN FOOTBALL'S
              <br />
              <span className="text-canary">ULTRA FANBASE</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Join the most passionate community of Pakistan football supporters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
