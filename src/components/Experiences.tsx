'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

type Screening = {
  city: string;
  venue: string;
  note: string;
  mapLink: string;
  ticketLink?: string;
};

type Experience = {
  id: number;
  title: string;
  subtitle: string;
  event: string;
  date: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
  isHome: boolean;
  status: 'upcoming' | 'live';
  screenings?: Screening[];
};

const Experiences: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Pakistan vs Thailand",
      subtitle: "Match Screening",
      event: "Lahore · Islamabad",
      date: "26 Sep 2026 · 2:00 PM PKT",
      description: "Watch the Shaheens take on Thailand with the loudest supporters in the country. Join us at our screenings in Lahore and Islamabad and bring the stadium atmosphere with you.",
      buttonText: "CHOOSE YOUR SCREENING",
      link: "",
      image: "/Pakistan-Football-1.jpg",
      isHome: false,
      status: "live",
      screenings: [
        {
          city: "Lahore",
          venue: "Kudos Cafe",
          note: "Free entry. Just show up and bring your voice.",
          mapLink: "https://maps.app.goo.gl/fC551WyASWtwcJwH6?g_st=aw",
        },
        {
          city: "Islamabad",
          venue: "Ticketed Screening",
          note: "Limited seats. Book your ticket in advance.",
          mapLink: "https://maps.app.goo.gl/ajsd6VrwR2qvXCWR8",
          ticketLink: "https://ticketwala.pk/event/pakistan-vs-thailand-football-match-screening-7482",
        },
      ],
    }
  ];

  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);

  useEffect(() => {
    if (!activeExperience) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveExperience(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeExperience]);

  const handleExperienceClick = (experience: Experience) => {
    if (experience.screenings?.length) {
      setActiveExperience(experience);
    } else if (experience.link) {
      window.open(experience.link, '_blank', 'noopener,noreferrer');
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    // Basic Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const calculateGridTransform = () => {
    if (!mounted || !isHovering || !sectionRef.current) {
      return 'perspective(1500px) rotateX(0deg) rotateY(0deg)';
    }
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Very subtle 3D parallax for the entire grid container based on mouse
    const rotateX = ((mousePos.y - centerY) / centerY) * -2;
    const rotateY = ((mousePos.x - centerX) / centerX) * 2;

    return `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <section
      id="experiences"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-transparent"
    >
      {/* Dynamic Background Glows for Glassmorphism continuity */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-dark-fern/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-canary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2"></div>

      {/* Interactive Global Flashlight Spotlight Effect matching Hero */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), transparent 50%)` : 'transparent'
        }}
      ></div>

      {/* Faint Logo watermark instead of plain white background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <Image
          src="/ultra-shaheens-logo.png"
          alt="Ultra Shaheens Logo Background"
          width={800}
          height={800}
          className="w-[80vw] max-w-4xl h-auto object-contain"
        />
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

        {/* Section Title */}
        <div className="text-center md:text-left mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide uppercase drop-shadow-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            CHOOSE YOUR NEXT <span className="text-canary">EXPERIENCE</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-medium max-w-2xl mx-auto md:mx-0">
            Join the most passionate supporters in the country. Secure your spot or prepare for what&apos;s coming next.
          </p>
        </div>

        {/* Experiences Grid with 3D Mouse Parallax */}
        <div
          className={`grid grid-cols-1 gap-8 lg:gap-12 mx-auto will-change-transform ${experiences.length === 1 ? 'md:max-w-2xl' : 'md:grid-cols-2 max-w-5xl'}`}
          style={{
            transform: calculateGridTransform(),
            transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        >
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/30 hover:bg-white/10 transition-all duration-500 group relative flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform hover:-translate-y-2"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Internal Card Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Image Section */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover object-top transition-transform duration-[1500ms] group-hover:scale-[1.05]"
                  priority={experience.id === 1}
                />

                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/40 to-transparent"></div>

                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className={`text-sm font-bold tracking-widest mb-2 uppercase drop-shadow-md ${experience.status === 'upcoming' ? 'text-gray-300' : 'text-canary'}`}>
                    {experience.date}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg leading-none uppercase" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    {experience.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10 border-t border-white/5">

                {/* Tags Info */}
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border ${experience.status === 'upcoming'
                    ? 'bg-black/50 text-gray-400 border-white/10'
                    : experience.isHome
                      ? 'bg-white/10 text-white border-white/20 backdrop-blur-md'
                      : 'bg-canary/10 text-canary border-canary/30 backdrop-blur-md'
                    }`}>
                    {experience.status === 'upcoming' ? '⏳ COMING SOON' : (experience.isHome ? '🏠 HOME MATCH' : '📺 AWAY SCREENING')}
                  </span>

                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-black/40 text-gray-300 border border-white/5 truncate max-w-[200px] sm:max-w-none">
                    {experience.event}
                  </span>
                </div>

                {/* Description Text */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 flex-grow">
                  {experience.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => handleExperienceClick(experience)}
                  className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase transition-all duration-300 text-lg ${experience.status === 'upcoming'
                    ? 'bg-white/5 text-gray-500 border border-white/10 cursor-not-allowed'
                    : 'bg-canary hover:bg-canary/90 text-black hover:shadow-[0_0_20px_rgba(255,255,0,0.4)] hover:scale-[1.02]'
                    }`}
                  style={{ fontFamily: '"din-condensed", sans-serif' }}
                  disabled={experience.status === 'upcoming'}
                >
                  {experience.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screening Location Modal (portaled so the grid's 3D transform doesn't trap it) */}
      {mounted && activeExperience && createPortal(
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setActiveExperience(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="screening-modal-title"
            className="bg-[#050e08] border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-canary/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Modal Header */}
            <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5 relative z-10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-canary mb-1">
                    {activeExperience.date}
                  </p>
                  <h3 id="screening-modal-title" className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-widest drop-shadow-md" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    CHOOSE YOUR <span className="text-canary">SCREENING</span>
                  </h3>
                </div>
                <button
                  onClick={() => setActiveExperience(null)}
                  className="text-gray-400 hover:text-canary hover:bg-white/5 transition-all duration-200 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full shrink-0"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 relative z-10">
              <p className="text-gray-300 text-center mb-8 text-sm font-medium tracking-wide">
                {activeExperience.title}. Pick the city closest to you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeExperience.screenings?.map((screening) => (
                  <div
                    key={screening.city}
                    className="flex flex-col p-6 bg-white/5 border border-white/10 hover:border-canary/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,0,0.15)] rounded-2xl transition-all duration-300"
                  >
                    <span className={`self-start inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border mb-4 ${screening.ticketLink
                      ? 'bg-canary/10 text-canary border-canary/30'
                      : 'bg-white/10 text-white border-white/20'
                      }`}>
                      {screening.ticketLink ? '🎟️ TICKETED' : '✅ FREE ENTRY'}
                    </span>
                    <h4 className="text-3xl font-bold text-white uppercase leading-none mb-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                      {screening.city}
                    </h4>
                    <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">
                      {screening.venue}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
                      {screening.note}
                    </p>

                    <div className="flex flex-col gap-3">
                      {screening.ticketLink && (
                        <a
                          href={screening.ticketLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded-xl font-bold tracking-widest uppercase text-center transition-all duration-300 bg-canary hover:bg-canary/90 text-black hover:shadow-[0_0_20px_rgba(255,255,0,0.4)] hover:scale-[1.02]"
                          style={{ fontFamily: '"din-condensed", sans-serif' }}
                        >
                          BOOK TICKET
                        </a>
                      )}
                      <a
                        href={screening.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl font-bold tracking-widest uppercase text-center transition-all duration-300 bg-white/5 text-white border border-white/20 hover:border-canary/40 hover:text-canary hover:bg-white/10 inline-flex items-center justify-center gap-2"
                        style={{ fontFamily: '"din-condensed", sans-serif' }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        VIEW ON MAP
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Experiences;
