"use client";

import React from 'react';
import Image from 'next/image';

const Journey: React.FC = () => {
  const milestones = [
    {
      id: 1,
      date: "November 21st, 2023",
      title: "Beginnings of Ultra Shaheens and First Match",
      description: "The birth of Pakistan's most passionate football fanbase. Founded with the vision to unite football lovers across the nation and create an unforgettable matchday experience.",
      image: "/created-ultra-shaheens.jpg",
      isLeft: true
    },
    {
      id: 2,
      date: "March 21st, 2024",
      title: "Second Official Match as Ultra Shaheens Community",
      description: "Our debut match support! Over 50 passionate fans gathered to cheer for Pakistan in our first official outing. The energy was electric and the atmosphere unforgettable.",
      image: "/journey-first-match.jpg",
      isLeft: false
    },
    {
      id: 3,
      date: "June 9th, 2024",
      title: "Pakistan vs Saudi Arabia Match",
      description: "Building momentum! Our third match saw even more supporters join the cause. The community was growing stronger with each game, creating lasting memories and friendships.",
      image: "/journey-second-match.jpg",
      isLeft: true
    },
    {
      id: 4,
      date: "August 21st, 2025",
      title: "Attended Official PFF Dinner",
      description: "A historic moment! Representing our community at the Pakistan Football Federation's official dinner. Gotten recognition from the PFF president, along with meeting the new head coach of Pakistan, Nolberto Solano. Had the honor of presenting the ultra shaheens jersey to the new coach.",
      image: "/journey-pff-dinner.jpg",
      isLeft: false
    },
    {
      id: 5,
      date: "October 9th, 2025",
      title: "Pakistan vs Afghanistan - AFC Asian Cup Qualifiers",
      description: "A historic match day! Ali Tareen joined the Ultra Shaheens community as we witnessed Pakistan's most dominating performance in AFC history. The energy was electric as our team delivered an outstanding display, showcasing the true potential of Pakistani football. This match will be remembered as a turning point in our football journey with new coach Nolberto Solano.",
      image: "/pakistan-vs-afghanistan.jpg",
      isLeft: true
    }
  ];

  return (
    <section id="journey" className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-racing-green mb-6" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                   Our Journey
                 </h2>
                 <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                   From humble beginnings to becoming Pakistan&apos;s most passionate football community.
            Every milestone tells a story of dedication, unity, and unwavering support.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line - Desktop Only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-2 bg-dell hidden lg:block z-0"></div>
          
          {/* Mobile Timeline Line - Hidden */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-2 bg-dell hidden z-0"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24 relative z-20">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${milestone.isLeft ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`flex-1 w-full relative z-20 bg-transparent ${milestone.isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                  {/* Background Logo for each text section */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
                    <Image 
                      src="/ultra-shaheens-logo.png" 
                      alt="Ultra Shaheens Logo Background" 
                      width={192}
                      height={112}
                      className="h-96 sm:h-[500px] lg:h-[600px] w-auto object-contain"
                    />
                  </div>
                  
                  <div className={`max-w-lg mx-auto lg:mx-0 relative z-10 ${milestone.isLeft ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    {/* Date */}
                    <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-canary text-racing-green font-bold text-xs sm:text-sm lg:text-base mb-3 sm:mb-4" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                      {milestone.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-racing-green mb-3 sm:mb-4 leading-tight" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                      {milestone.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Mobile */}
                <div className="relative z-50 flex-shrink-0 lg:hidden">
                  <div className="w-4 h-4 bg-dell rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-canary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Timeline Dot - Desktop */}
                <div className="relative z-50 flex-shrink-0 hidden lg:block">
                  <div className="w-6 h-6 bg-dell rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-canary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full relative z-20 bg-transparent">
                  <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.log('Image failed to load:', milestone.image);
                        e.currentTarget.src = '/ultra-shaheens-logo.png';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Green Hover Overlay */}
                    <div className="absolute inset-0 bg-dell opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Image Number */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-dell text-white font-bold text-sm sm:text-base lg:text-lg px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
