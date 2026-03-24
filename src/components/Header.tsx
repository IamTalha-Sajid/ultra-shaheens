'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleCloseMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
      setMobileDropdown(null);
    }, 300);
  };

  return (
    <header className="fixed w-full top-0 z-[100] transition-all duration-500 ease-in-out">
      {/* Top Bar - Fades out on scroll for a cooler effect */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100 bg-black/40 backdrop-blur-md border-b border-white/10'}`}>
        <div className="py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
            {/* Left side - Brand text */}
            <div className="text-sm sm:text-base font-bold tracking-widest text-white/80" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              WE ARE ULTRA SHAHEENS
            </div>

            {/* Right side - Social media icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-xs sm:text-sm font-medium hidden sm:block text-canary" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                FOLLOW US
              </span>
              {/* X (Twitter) Icon */}
              <a
                href="https://x.com/ultrashaheens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-canary transition-all duration-300 hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Follow us on X"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/ultrashaheens/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-canary transition-all duration-300 hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/ultra_shaheens/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-canary transition-all duration-300 hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/ultra-shaheens/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-canary transition-all duration-300 hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <div className={`transition-all duration-500 ease-in-out px-4 ${scrolled ? 'pt-2' : 'pt-4'}`}>
        <div className="max-w-7xl mx-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50 pointer-events-none rounded-3xl overflow-hidden"></div>

          <div className="px-6 py-3 md:py-4 flex justify-between items-center relative z-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className="w-32 sm:w-40 md:w-48 h-10 sm:h-12 flex items-center justify-center">
                  <Image
                    src="/ultra-shaheens-logo.png"
                    alt="Ultra Shaheens Logo"
                    width={192}
                    height={112}
                    className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              {/* Membership Dropdown */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('membership')} onMouseLeave={handleMouseLeave}>
                <button className="text-white hover:text-canary hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] font-semibold transition-all duration-300 flex items-center space-x-1 uppercase tracking-wider text-sm lg:text-base border-b-2 border-transparent hover:border-canary py-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  <span>Membership</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'membership' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Glass Dropdown */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56 z-50 transition-all duration-300 origin-top ${activeDropdown === 'membership' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="rounded-3xl bg-[rgba(8,33,24,0.9)] backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30 pointer-events-none rounded-3xl"></div>
                    <div className="flex flex-col relative z-10">
                      <a href="https://forms.gle/xek7ovwUwodKYrkA7" target="_blank" rel="noopener noreferrer" className="px-5 py-4 text-sm text-white bg-white/10 hover:text-canary hover:bg-white/20 transition-all duration-200 font-semibold uppercase tracking-wide">
                        <span style={{ fontFamily: '"din-condensed", sans-serif' }}>Become a member</span>
                      </a>
                      <div className="px-5 py-4 text-sm text-gray-200 font-semibold uppercase tracking-wide border-t border-white/20 bg-white/10">
                        <span style={{ fontFamily: '"din-condensed", sans-serif' }}>Members rewards</span>
                        <span className="block text-xs mt-1 text-gray-300/90 capitalize tracking-normal italic font-sans">(Coming soon)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blogs */}
              <Link href="/blogs" className="text-white hover:text-canary hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] font-semibold transition-all duration-300 flex items-center space-x-1 uppercase tracking-wider text-sm lg:text-base border-b-2 border-transparent hover:border-canary py-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                <div className="flex flex-col items-center">
                  <span>Blogs</span>
                  <span className="text-[10px] text-gray-400 capitalize inline-block -mt-1 font-sans italic">(Coming soon)</span>
                </div>
              </Link>

              {/* Fundraising */}
              <Link href="/fundraising" className="text-white hover:text-canary hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] font-semibold transition-all duration-300 flex items-center space-x-1 uppercase tracking-wider text-sm lg:text-base border-b-2 border-transparent hover:border-canary py-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                Fundraising
              </Link>

              {/* Merchandise */}
              <Link href="/merchandise" className="text-white hover:text-canary hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] font-semibold transition-all duration-300 flex items-center space-x-1 uppercase tracking-wider text-sm lg:text-base border-b-2 border-transparent hover:border-canary py-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                Merchandise
              </Link>

              {/* Our Dugout */}
              <Link href="/our-dugout" className="text-white hover:text-canary hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] font-semibold transition-all duration-300 flex items-center space-x-1 uppercase tracking-wider text-sm lg:text-base border-b-2 border-transparent hover:border-canary py-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                Our Dugout
              </Link>

              {/* About Us Dropdown */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
                <button className="text-white hover:text-canary hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] font-semibold transition-all duration-300 flex items-center space-x-1 uppercase tracking-wider text-sm lg:text-base border-b-2 border-transparent hover:border-canary py-1" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  <span>About Us</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`absolute top-full right-0 pt-3 w-48 z-50 transition-all duration-300 origin-top ${activeDropdown === 'about' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                  <div className="rounded-3xl bg-[rgba(8,33,24,0.9)] backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30 pointer-events-none rounded-3xl"></div>
                    <div className="flex flex-col relative z-10">
                      <Link href="/about-us" className="px-5 py-3 text-sm text-white bg-white/10 hover:text-canary hover:bg-white/20 transition-all duration-200 font-semibold uppercase tracking-wide">
                        <span style={{ fontFamily: '"din-condensed", sans-serif' }}>Who are we?</span>
                        <span className="block text-xs mt-0.5 text-gray-300/90 capitalize tracking-normal italic font-sans">(Coming soon)</span>
                      </Link>
                      <Link href="/code-of-conduct" className="px-5 py-3 text-sm text-white bg-white/10 hover:text-canary hover:bg-white/20 transition-all duration-200 font-semibold uppercase tracking-wide border-t border-white/20">
                        <span style={{ fontFamily: '"din-condensed", sans-serif' }}>Code of Conduct</span>
                        <span className="block text-xs mt-0.5 text-gray-300/90 capitalize tracking-normal italic font-sans">(Coming soon)</span>
                      </Link>
                      <Link href="/faq" className="px-5 py-3 text-sm text-white bg-white/10 hover:text-canary hover:bg-white/20 transition-all duration-200 font-semibold uppercase tracking-wide border-t border-white/20">
                        <span style={{ fontFamily: '"din-condensed", sans-serif' }}>FAQs</span>
                        <span className="block text-xs mt-0.5 text-gray-300/90 capitalize tracking-normal italic font-sans">(Coming soon)</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button - Glassy Button */}
            <div className="md:hidden">
              <button
                className="text-white hover:text-canary transition-colors duration-200 p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => {
                  if (mobileMenuOpen) handleCloseMobileMenu();
                  else { setMobileMenuOpen(true); setMobileDropdown(null); }
                }}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Glass Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleCloseMobileMenu}>
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-black/70 backdrop-blur-xl border-l border-white/20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transform transition-transform duration-300 ease-in-out ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>

              <div className="flex items-center justify-between p-6 border-b border-white/20 relative z-10">
                <h2 className="text-xl font-bold text-white tracking-widest" style={{ fontFamily: '"din-condensed", sans-serif' }}>MENU</h2>
                <button onClick={handleCloseMobileMenu} className="text-white hover:text-canary transition-colors bg-white/10 p-2 rounded-lg border border-white/20 hover:bg-white/20" aria-label="Close menu">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 relative z-10 custom-scrollbar">
                {/* Mobile Dropdowns and links upgraded with Glass styling */}
                <div className="rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl overflow-hidden">
                  <button className="w-full text-left text-white hover:text-canary font-semibold uppercase tracking-widest text-lg flex items-center justify-between p-4" style={{ fontFamily: '"din-condensed", sans-serif' }} onClick={() => setMobileDropdown(mobileDropdown === 'membership' ? null : 'membership')}>
                    <span>Membership</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === 'membership' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {mobileDropdown === 'membership' && (
                    <div className="px-4 pb-4 bg-black/35 space-y-2">
                      <a href="https://forms.gle/xek7ovwUwodKYrkA7" target="_blank" rel="noopener noreferrer" className="block text-white/80 hover:text-canary py-2 transition-colors">Become a member</a>
                      <span className="block text-white/40 py-2 italic">Members rewards (Coming soon)</span>
                    </div>
                  )}
                </div>

                <Link href="/blogs" className="block w-full p-4 rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl text-white hover:text-canary font-semibold uppercase tracking-widest text-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  Blogs
                  <span className="block text-xs mt-1 text-gray-400/80 capitalize tracking-normal italic font-sans">(Coming soon)</span>
                </Link>
                <Link href="/fundraising" className="block w-full p-4 rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl text-white hover:text-canary font-semibold uppercase tracking-widest text-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>Fundraising</Link>
                <Link href="/merchandise" className="block w-full p-4 rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl text-white hover:text-canary font-semibold uppercase tracking-widest text-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>Merchandise</Link>
                <Link href="/our-dugout" className="block w-full text-left p-4 rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl text-white hover:text-canary font-semibold uppercase tracking-widest text-lg" style={{ fontFamily: '"din-condensed", sans-serif' }}>Our Dugout</Link>

                <div className="rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl overflow-hidden">
                  <button className="w-full text-left text-white hover:text-canary font-semibold uppercase tracking-widest text-lg flex items-center justify-between p-4" style={{ fontFamily: '"din-condensed", sans-serif' }} onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')}>
                    <span>About Us</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {mobileDropdown === 'about' && (
                    <div className="px-4 pb-4 bg-black/35 space-y-2">
                      <Link href="/about-us" className="block py-2 transition-colors">
                        <span className="text-white/80 hover:text-canary">Who are we?</span>
                        <span className="block text-xs text-white/40 italic font-sans capitalize"> (Coming soon)</span>
                      </Link>
                      <Link href="/code-of-conduct" className="block py-2 transition-colors">
                        <span className="text-white/80 hover:text-canary">Code of Conduct</span>
                        <span className="block text-xs text-white/40 italic font-sans capitalize"> (Coming soon)</span>
                      </Link>
                      <Link href="/faq" className="block py-2 transition-colors">
                        <span className="text-white/80 hover:text-canary">FAQs</span>
                        <span className="block text-xs text-white/40 italic font-sans capitalize"> (Coming soon)</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
