'use client';

import React, { useEffect, useRef, useState } from 'react';

const Video: React.FC = () => {
  const videoId = 'uixqmF_8z9s';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0`;

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

  const calculateVideoTransform = () => {
    if (!mounted || !isHovering || !sectionRef.current) {
      return 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((mousePos.y - centerY) / centerY) * -4;
    const rotateY = ((mousePos.x - centerX) / centerX) * 4;
    return `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  return (
    <section
      id="video"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full bg-transparent py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-canary/10 rounded-full blur-[150px] pointer-events-none transform -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-dark-fern/20 rounded-full blur-[150px] pointer-events-none transform -translate-y-1/2 translate-x-1/2"></div>

      {/* Global Interactive Tracking Flashlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 40%)` : 'transparent'
        }}
      ></div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-[1200ms] cubic-bezier(0.25, 0.46, 0.45, 0.94) ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>

        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-widest drop-shadow-md" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            WATCH OUR <span className="text-canary drop-shadow-[0_0_15px_rgba(255,255,0,0.3)]">STORY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-canary to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Video Container with Glass frame and 3D Parallax */}
        <div className="max-w-5xl mx-auto relative group">

          {/* Neon Ring Aura Behind Video */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-canary/20 via-transparent to-dark-fern/40 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-2 sm:p-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-canary/30 transition-colors duration-500 will-change-transform"
            style={{
              transform: calculateVideoTransform(),
              transition: isHovering ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            <div className="relative w-full rounded-xl overflow-hidden shadow-inner" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title="Ultra Shaheens Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Video;
