import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-racing-green via-dark-fern to-dell flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-canary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-celery rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-asparagus rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            WE ARE
            <br />
            <span className="text-canary">ULTRA SHAHEENS</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate community of passionate fans, where dedication meets excellence and every moment counts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="bg-canary text-racing-green font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide hover:bg-celery transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Become a Member
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide hover:bg-white hover:text-racing-green transition-all duration-300 hover:scale-105" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-canary mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                1000+
              </div>
              <div className="text-white text-sm uppercase tracking-wide">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-canary mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                50+
              </div>
              <div className="text-white text-sm uppercase tracking-wide">
                Events Hosted
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-canary mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                24/7
              </div>
              <div className="text-white text-sm uppercase tracking-wide">
                Community Support
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
