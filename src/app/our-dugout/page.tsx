"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    id: 1,
    name: "Usama Bhutta",
    email: "usama.bhutta@ultrashaheens.com",
    role: "CEO - Chief Executive Officer",
    image: "/images/Team/usama.jpeg",
    socials: {
      facebook: "https://www.facebook.com/bhuttausama",
      instagram: "https://www.instagram.com/usamabhutta9",
    },
  },
  {
    id: 2,
    name: "Talha Sajid",
    email: "talha.sajid@ultrashaheens.com",
    role: "CTO - Chief Technology Officer",
    image: "/images/Team/talha.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/iamtalhasajid",
      github: "https://github.com/iamtalha-sajid",
      instagram: "https://www.instagram.com/iamtalha.sajid",
    },
  },
  {
    id: 3,
    name: "Muhammad Shoaib",
    email: "muhammad.shoaib@ultrashaheens.com",
    role: "COO - Chief Operating Officer",
    image: "/images/Team/shoaib.jpeg",
    socials: {
      instagram: "https://www.instagram.com/mohammadshoaib__",
    },
  },
  {
    id: 4,
    name: "Haseeb Zaigham",
    email: "haseeb.zaigham@ultrashaheens.com",
    role: "CAO - Chief Apparel Officer",
    image: "/images/Team/haseeb.jpeg",
  },
  {
    id: 5,
    name: "Arham Rayyan Khan",
    email: "arham.rayyan@ultrashaheens.com",
    role: "CMO - Chief Marketing Officer",
    image: "/images/Team/arham.jpeg",
  },
];

const OurDugoutPage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [ceo, ...restTeam] = teamMembers;

  const renderMemberCard = (member: (typeof teamMembers)[number]) => {
    return (
      <div className="group bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl overflow-hidden text-left shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:border-canary/60 hover:-translate-y-1.5 transition-all duration-300">
        <div className="relative w-full aspect-[3/4]">
          <Image
            src={member.image}
            alt={`${member.name} profile`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {member.socials && (
            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
              {member.socials.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Facebook`}
                  className="w-11 h-11 rounded-full border border-white/35 bg-white/15 backdrop-blur-xl text-[#90b8ff] flex items-center justify-center hover:scale-110 hover:bg-white/25 hover:border-canary/70 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.236 2.686.236v2.953h-1.514c-1.491 0-1.956.927-1.956 1.875v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
                  </svg>
                </a>
              )}

              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                  className="w-11 h-11 rounded-full border border-white/35 bg-white/15 backdrop-blur-xl text-[#78b7ff] flex items-center justify-center hover:scale-110 hover:bg-white/25 hover:border-canary/70 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}

              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                  className="w-11 h-11 rounded-full border border-white/35 bg-white/15 backdrop-blur-xl text-white flex items-center justify-center hover:scale-110 hover:bg-white/25 hover:border-canary/70 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.85 10.9.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.19.7-3.86-1.35-3.86-1.35-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.42-2.68 5.4-5.24 5.69.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.66.79.55a11.52 11.52 0 0 0 7.84-10.9C23.5 5.66 18.35.5 12 .5Z" />
                  </svg>
                </a>
              )}

              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Instagram`}
                  className="w-11 h-11 rounded-full border border-white/35 bg-white/15 backdrop-blur-xl text-[#ff78b0] flex items-center justify-center hover:scale-110 hover:bg-white/25 hover:border-canary/70 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm8.37 1.73h-8.24a4.15 4.15 0 0 0-4.15 4.15v8.24a4.15 4.15 0 0 0 4.15 4.15h8.24a4.15 4.15 0 0 0 4.15-4.15V7.88a4.15 4.15 0 0 0-4.15-4.15Zm-4.12 2.64A5.63 5.63 0 1 1 6.37 12 5.64 5.64 0 0 1 12 6.37Zm0 1.72A3.91 3.91 0 1 0 15.91 12 3.92 3.92 0 0 0 12 8.09Zm5.74-2.01a1.34 1.34 0 1 1-1.34 1.34 1.34 1.34 0 0 1 1.34-1.34Z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 bg-gradient-to-b from-racing-green/65 to-racing-green/45 border-t border-white/15">
          <h3
            className="text-xl sm:text-2xl font-bold text-white leading-tight"
            style={{ fontFamily: '"din-condensed", sans-serif' }}
          >
            {member.name.toUpperCase()}
          </h3>
          <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-gray-300 break-words">
            {member.email}
          </p>
          <p
            className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-canary font-bold"
            style={{ fontFamily: '"din-condensed", sans-serif' }}
          >
            {member.role}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#05110a] via-[#0b1f13] to-[#040806] flex flex-col relative">
      <Header />

      <main
        className="flex-grow relative overflow-hidden pt-36 md:pt-40 pb-16"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-dark-fern/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-canary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2"></div>

        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
          style={{
            opacity: isHovering && mounted ? 1 : 0,
            background: mounted
              ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), transparent 50%)`
              : "transparent",
          }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0 text-white">
          <Image
            src="/ultra-shaheens-logo.png"
            alt="Ultra Shaheens Logo Background"
            width={800}
            height={800}
            className="w-[80vw] max-w-4xl h-auto object-contain"
          />
        </div>

        <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 md:mt-6">
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 md:p-16 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-wide uppercase"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              OUR DUGOUT
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Meet the core team behind Ultra Shaheens. This dugout drives the
              vision, energy, and matchday movement for Pakistan football fans.
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative w-full aspect-[3/4] md:aspect-auto md:min-h-[420px]">
                    <Image
                      src={ceo.image}
                      alt={`${ceo.name} profile`}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                    {ceo.socials && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        {ceo.socials.facebook && (
                          <a
                            href={ceo.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${ceo.name} Facebook`}
                            className="w-11 h-11 rounded-full border border-white/35 bg-white/15 backdrop-blur-xl text-[#90b8ff] flex items-center justify-center hover:scale-110 hover:bg-white/25 hover:border-canary/70 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.236 2.686.236v2.953h-1.514c-1.491 0-1.956.927-1.956 1.875v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
                            </svg>
                          </a>
                        )}
                        {ceo.socials.instagram && (
                          <a
                            href={ceo.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${ceo.name} Instagram`}
                            className="w-11 h-11 rounded-full border border-white/35 bg-white/15 backdrop-blur-xl text-[#ff78b0] flex items-center justify-center hover:scale-110 hover:bg-white/25 hover:border-canary/70 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm8.37 1.73h-8.24a4.15 4.15 0 0 0-4.15 4.15v8.24a4.15 4.15 0 0 0 4.15 4.15h8.24a4.15 4.15 0 0 0 4.15-4.15V7.88a4.15 4.15 0 0 0-4.15-4.15Zm-4.12 2.64A5.63 5.63 0 1 1 6.37 12 5.64 5.64 0 0 1 12 6.37Zm0 1.72A3.91 3.91 0 1 0 15.91 12 3.92 3.92 0 0 0 12 8.09Zm5.74-2.01a1.34 1.34 0 1 1-1.34 1.34 1.34 1.34 0 0 1 1.34-1.34Z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-b from-racing-green/65 to-racing-green/45 border-t md:border-t-0 md:border-l border-white/15 text-left">
                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full bg-canary/20 text-canary border border-canary/40 text-xs sm:text-sm uppercase tracking-wider font-bold"
                      style={{ fontFamily: '"din-condensed", sans-serif' }}
                    >
                      CEO MESSAGE
                    </div>

                    <h2
                      className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                      style={{ fontFamily: '"din-condensed", sans-serif' }}
                    >
                      {ceo.name.toUpperCase()}
                    </h2>
                    <div
                      className="mt-2 text-sm sm:text-base text-canary font-bold uppercase tracking-wider"
                      style={{ fontFamily: '"din-condensed", sans-serif' }}
                    >
                      {ceo.role}
                    </div>
                    <div className="mt-2 text-sm sm:text-base text-gray-200">
                      {ceo.email}
                    </div>

                    <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-100/90 leading-relaxed">
                      Ultra Shaheens exists to unite Pakistan football supporters and bring real matchday energy — in the stands and beyond.
                      We build together: chants, community, experiences, and support for the national team with pride.
                    </p>

                    <div className="mt-6 text-xs sm:text-sm text-gray-200/80">
                      Want to collaborate? Reach out at <span className="text-white font-semibold">{ceo.email}</span>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 max-w-5xl mx-auto">
              {restTeam.map((member) => (
                <div key={member.id}>{renderMemberCard(member)}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurDugoutPage;
