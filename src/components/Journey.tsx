'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const MilestoneRow = ({ milestone, index, total }: { milestone: any, index: number, total: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Card & Image Animation Class: Slides in gracefully
  const slideClass = isVisible
    ? 'opacity-100 translate-x-0 translate-y-0'
    : `opacity-0 translate-y-16 lg:translate-y-0 ${milestone.isLeft ? 'lg:-translate-x-20' : 'lg:translate-x-20'}`;

  // SVG Zig-Zag Map Line: Stays perfectly stationary, fades in with a heavy delay AFTER cards slide
  const lineClass = isVisible
    ? 'opacity-60 transition-opacity duration-1000 delay-[800ms]'
    : 'opacity-0 transition-opacity duration-300';

  // Connecting Dots: Fade in slightly faster
  const dotClass = isVisible
    ? 'opacity-100 transition-opacity duration-[1200ms] delay-300'
    : 'opacity-0 transition-opacity duration-300';

  return (
    <div ref={ref} className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${milestone.isLeft ? 'lg:flex-row-reverse' : ''} pl-16 lg:pl-0`}>

      {/* Dashed Map Connecting Line for Mobile */}
      {index < total - 1 && (
        <div className={`absolute top-1/2 left-6 h-[calc(100%+4rem)] sm:h-[calc(100%+6rem)] w-[2px] border-l-[3px] border-dashed border-canary/30 -z-10 lg:hidden transform -translate-x-1/2 ${lineClass}`}></div>
      )}

      {/* Curved Zig-Zag Map Line for Desktop */}
      {index < total - 1 && (
        <div className={`hidden lg:block absolute top-[50%] h-[calc(100%+8rem)] w-[40%] -z-10 ${milestone.isLeft ? 'left-1/2' : 'right-1/2'} ${lineClass}`}>
          <svg className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path
              d={milestone.isLeft ? "M0,0 C100,0 100,100 0,100" : "M100,0 C0,0 0,100 100,100"}
              fill="none"
              stroke="#FFCC00"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Mobile / Absolute Timeline Dot - Stationary Fade */}
      <div className={`absolute left-6 top-1/2 lg:static lg:top-auto flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 z-50 flex-shrink-0 ${dotClass}`}>
        <div className="relative flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12">
          <div className="absolute inset-0 bg-canary rounded-full animate-ping opacity-30 blur-sm"></div>
          <div className="w-4 h-4 lg:w-6 lg:h-6 bg-canary rounded-full shadow-[0_0_20px_rgba(255,255,0,0.9)] z-10"></div>
          <div className="absolute inset-0 border-[3px] border-white/30 rounded-full lg:scale-[1.2]"></div>
        </div>
      </div>

      {/* Text Content - Glass Card (Slides in) */}
      <div className={`flex-1 w-full transition-all duration-[1200ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) ${slideClass} bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-canary/30 group relative overflow-hidden ${milestone.isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
        {/* Internal Glow Effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-start lg:items-[unset]">
          {/* Date Tag */}
          <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-canary font-bold tracking-widest text-xs sm:text-sm lg:text-base mb-5 uppercase shadow-inner ${milestone.isLeft ? 'lg:self-end' : 'lg:self-start'}`} style={{ fontFamily: '"din-condensed", sans-serif' }}>
            {milestone.date}
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight uppercase drop-shadow w-full" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            {milestone.title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg drop-shadow-sm w-full">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Heroic Image Section (Slides in) */}
      <div className={`flex-1 w-full transition-all duration-[1200ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) ${slideClass} relative z-20 group perspective-[1000px]`}>
        <div className="relative w-full h-56 sm:h-72 lg:h-[400px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 group-hover:border-canary/30 transition-all duration-700 transform group-hover:-translate-y-2">
          <Image
            src={milestone.image}
            alt={milestone.title}
            fill
            className="object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = '/ultra-shaheens-logo.png';
              e.currentTarget.className = "object-contain object-center scale-50 opacity-20";
            }}
          />
          {/* Gradient Depth Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Faint Image Chapter Number */}
          <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 text-white/30 font-bold text-6xl sm:text-7xl lg:text-8xl select-none transition-all duration-500 group-hover:text-canary/80 group-hover:scale-110 drop-shadow-2xl" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

    </div>
  );
};

const Journey: React.FC = () => {
  const milestones = [
    {
      id: 1,
      date: "November 21st, 2023",
      title: "Beginnings of Ultra Shaheens",
      description: "Pakistan's most passionate football fanbase was officially born. Founded with a powerful vision to unite football lovers across the nation, we created an unforgettable matchday experience from day one.",
      image: "/created-ultra-shaheens.jpg",
      isLeft: true
    },
    {
      id: 2,
      date: "March 21st, 2024",
      title: "Pakistan vs Jordan",
      description: "Over 50 dedicated fans gathered to cheer for Pakistan during our second official outing. The stadium energy was absolutely electric, making the growing community atmosphere completely unforgettable for everyone.",
      image: "/journey-first-match.jpg",
      isLeft: false
    },
    {
      id: 3,
      date: "June 6th, 2024",
      title: "Pakistan vs Saudi Arabia",
      description: "We built massive momentum! Our critical third match saw hundreds of roaring supporters join the cause. The community grew rapidly, forging lasting memories and deep football friendships within the stands.",
      image: "/journey-second-match.jpg",
      isLeft: true
    },
    {
      id: 4,
      date: "March 25th, 2025",
      title: "Pakistan vs Syria",
      description:
        "Ultra Shaheens met in Islamabad for an away-match screening of Pakistan vs Jordan. Under the lights with our banner and our colours, we brought stadium energy to the capital — chants, pride, and one more unforgettable night together.",
      image: "/images/journey-pakistan-vs-jordan-screening.png",
      isLeft: false
    },
    {
      id: 5,
      date: "August 21st, 2025",
      title: "Pakistan Football Federation Dinner",
      description: "Our executive committee proudly represented the fanbase at the Pakistan Football Federation's official dinner. We earned true recognition from PFF leadership and presented our jersey to the national head coach.",
      image: "/Journey-ID-4.jpeg",
      isLeft: true
    },
    {
      id: 6,
      date: "October 9th, 2025",
      title: "Pakistan vs Afghanistan",
      description: "Ali Tareen joined the Ultra Shaheens stands as we witnessed Pakistan's most dominating performance yet. The immense crowd energy fueled an outstanding display that showcased true Pakistani football potential.",
      image: "/pakistan-vs-afghanistan.jpg",
      isLeft: false
    },
    {
      id: 7,
      date: "November 18th, 2025",
      title: "Pakistan vs Syria",
      description: "Despite a tough result on the pitch, our fans held their heads incredibly high. With drums beating for the very first time, the green stands roared with unyielding national pride.",
      image: "/pakistan-syria-home-match.jpg",
      isLeft: true
    },
    {
      id: 8,
      date: "March 31st, 2026",
      title: "Pakistan vs Myanmar",
      description:
        "The match was behind closed doors, so we could not be in the stands for this home fixture. Ultra Shaheens gathered for a community screening of Pakistan vs Myanmar in the AFC Asian Cup 2027 Qualifiers, sharing the same nerves, chants, and pride as we closed out the campaign together.",
      image: "/images/journey-pakistan-myanmar-screening-2026.jpg",
      isLeft: false
    }
  ];

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

  return (
    <section
      id="journey"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full bg-transparent py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-dark-fern/20 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2"></div>
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-canary/10 rounded-full blur-[150px] pointer-events-none transform -translate-y-1/2"></div>

      {/* Global Interactive Tracking Flashlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 40%)` : 'transparent'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-widest drop-shadow-md" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            OUR <span className="text-canary drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]">STORY</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming Pakistan&apos;s most passionate football community.
            Every milestone tells a story of <strong className="text-white">dedication</strong>, <strong className="text-white">unity</strong>, and unwavering support.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items List */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32 relative z-20">
            {milestones.map((milestone, index) => (
              <MilestoneRow key={milestone.id} milestone={milestone} index={index} total={milestones.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
