'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-dark-fern text-white py-3 px-4 top-bar">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - Brand text */}
          <div className="text-sm sm:text-base font-bold" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            We are Ultra Shaheens
          </div>
          
          {/* Right side - Social media icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-xs sm:text-sm font-medium hidden sm:block" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Follow us
            </span>
            {/* X (Twitter) Icon */}
            <a 
              href="https://x.com/ultrashaheens" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-canary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg p-1"
              aria-label="Follow us on X"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Facebook Icon */}
            <a 
              href="https://www.facebook.com/ultrashaheens/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-canary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg p-1"
              aria-label="Follow us on Facebook"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram Icon */}
            <a 
              href="https://www.instagram.com/ultra_shaheens/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-canary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg p-1"
              aria-label="Follow us on Instagram"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/company/ultra-shaheens/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-canary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg p-1"
              aria-label="Follow us on LinkedIn"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className="w-32 sm:w-40 md:w-48 h-12 sm:h-16 md:h-18 flex items-center justify-center">
                  <Image 
                    src="/ultra-shaheens-logo.png" 
                    alt="Ultra Shaheens Logo" 
                    width={192}
                    height={112}
                    className="h-16 sm:h-20 md:h-28 w-auto object-contain hover:opacity-80 transition-opacity duration-200"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-6">
              {/* Membership Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('membership')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-black hover:text-dell font-semibold transition-colors duration-200 flex items-center space-x-1 uppercase tracking-wide leading-none text-base"
                  style={{ fontFamily: '"din-condensed", sans-serif' }}
                >
                  <span className="underline-animated">Membership</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                 {activeDropdown === 'membership' && (
                   <div 
                     className="absolute top-full left-0 mt-2 w-48 bg-dark-fern rounded-md shadow-lg z-50"
                   >
                     <div className="py-4">
                      <a href="https://forms.gle/xek7ovwUwodKYrkA7" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-white hover:text-canary transition-colors duration-200 font-semibold uppercase tracking-wide leading-none dropdown-option">
                        <span className="underline-animated" style={{ fontFamily: '"din-condensed", sans-serif' }}>Become a member</span>
                      </a>
                      <span className="block px-4 py-3 text-sm text-gray-300 font-semibold uppercase tracking-wide leading-none dropdown-option-disabled" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                        Members rewards <span className="text-xs text-gray-400">(Coming soon)</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Blogs */}
              <div className="relative">
                <a
                  href="/blogs"
                  className="text-black hover:text-dell font-semibold transition-colors duration-200 uppercase tracking-wide leading-none text-base flex items-center"
                  style={{ fontFamily: '"din-condensed", sans-serif' }}
                >
                  <span className="underline-animated">Blogs</span>
                </a>
              </div>

              {/* Merchandise Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('merchandise')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-black hover:text-dell font-semibold transition-colors duration-200 flex items-center space-x-1 uppercase tracking-wide leading-none text-base"
                  style={{ fontFamily: '"din-condensed", sans-serif' }}
                >
                  <span className="underline-animated">Merchandise</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                 {activeDropdown === 'merchandise' && (
                   <div 
                     className="absolute top-full left-0 mt-2 w-48 bg-dark-fern rounded-md shadow-lg z-50"
                     style={{ display: 'block' }}
                   >
                     <div className="py-4">
                      <a href="https://www.theiwear.com/" className="block px-4 py-3 text-sm text-white hover:text-canary transition-colors duration-200 font-semibold uppercase tracking-wide leading-none dropdown-option">
                        <span className="underline-animated" style={{ fontFamily: '"din-condensed", sans-serif' }}>iWEAR</span>
                      </a>
                      <a href="https://www.theiwear.com/collections/ultra-shaheens" className="block px-4 py-3 text-sm text-white hover:text-canary transition-colors duration-200 font-semibold uppercase tracking-wide leading-none dropdown-option">
                        <span className="underline-animated" style={{ fontFamily: '"din-condensed", sans-serif' }}>View Collection</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="text-black hover:text-dell font-semibold transition-colors duration-200 flex items-center space-x-1 uppercase tracking-wide leading-none text-base"
                  style={{ fontFamily: '"din-condensed", sans-serif' }}
                >
                  <span className="underline-animated">About Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                 {activeDropdown === 'about' && (
                   <div 
                     className="absolute top-full left-0 mt-2 w-48 bg-dark-fern rounded-md shadow-lg z-50"
                   >
                     <div className="py-4">
                      <a href="/about-us" className="block px-4 py-3 text-sm text-white hover:text-canary transition-colors duration-200 font-semibold uppercase tracking-wide leading-none dropdown-option">
                        <span className="underline-animated" style={{ fontFamily: '"din-condensed", sans-serif' }}>Who are we?</span>
                      </a>
                      <a href="/code-of-conduct" className="block px-4 py-3 text-sm text-white hover:text-canary transition-colors duration-200 font-semibold uppercase tracking-wide leading-none dropdown-option">
                        <span className="underline-animated" style={{ fontFamily: '"din-condensed", sans-serif' }}>Code of Conduct</span>
                      </a>
                      <a href="/faq" className="block px-4 py-3 text-sm text-white hover:text-canary transition-colors duration-200 font-semibold uppercase leading-none dropdown-option">
                        <span className="underline-animated" style={{ fontFamily: '"din-condensed", sans-serif' }}>FAQs</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-700 hover:text-dell transition-colors duration-200 p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => {
                  if (mobileMenuOpen) {
                    handleCloseMobileMenu();
                  } else {
                    setMobileMenuOpen(true);
                    setMobileDropdown(null);
                  }
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

      {/* Mobile Navigation Menu - Slide in from right */}
      {mobileMenuOpen && (
        <div className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-dell shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white border-opacity-20">
                <h2 className="text-lg sm:text-xl font-semibold text-white">Menu</h2>
                <button 
                  onClick={handleCloseMobileMenu}
                  className="text-white hover:text-canary transition-colors duration-200 p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Menu content */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6">
                {/* Membership */}
                <div>
                  <button
                    className="w-full text-left text-white hover:text-canary font-semibold transition-colors duration-200 uppercase tracking-wide leading-none text-base sm:text-lg flex items-center justify-between py-3 px-2 -mx-2 min-h-[48px]"
                    style={{ fontFamily: '"din-condensed", sans-serif' }}
                    onClick={() => setMobileDropdown(mobileDropdown === 'membership' ? null : 'membership')}
                  >
                    <span>Membership</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdown === 'membership' && (
                    <div className="mt-3 pl-4 space-y-3">
                      <a href="https://forms.gle/xek7ovwUwodKYrkA7" target="_blank" rel="noopener noreferrer" className="block text-sm sm:text-base text-gray-200 hover:text-canary transition-colors duration-200 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                        Become a member
                      </a>
                      <span className="block text-sm sm:text-base text-gray-400 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                        Members rewards (Coming soon)
                      </span>
                    </div>
                  )}
                </div>

                {/* Blogs */}
                <div>
                  <a
                    href="/blogs"
                    className="block text-white hover:text-canary font-semibold transition-colors duration-200 uppercase tracking-wide leading-none text-base sm:text-lg py-3 px-2 -mx-2 min-h-[48px] flex items-center"
                    style={{ fontFamily: '"din-condensed", sans-serif' }}
                  >
                    Blogs
                  </a>
                </div>

                {/* Merchandise */}
                <div>
                  <button
                    className="w-full text-left text-white hover:text-canary font-semibold transition-colors duration-200 uppercase tracking-wide leading-none text-base sm:text-lg flex items-center justify-between py-3 px-2 -mx-2 min-h-[48px]"
                    style={{ fontFamily: '"din-condensed", sans-serif' }}
                    onClick={() => setMobileDropdown(mobileDropdown === 'merchandise' ? null : 'merchandise')}
                  >
                    <span>Merchandise</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdown === 'merchandise' && (
                    <div className="mt-3 pl-4 space-y-3">
                      <a href="https://www.theiwear.com/" className="block text-sm sm:text-base text-gray-200 hover:text-canary transition-colors duration-200 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                        iWEAR
                      </a>
                      <a href="https://www.theiwear.com/collections/ultra-shaheens" className="block text-sm sm:text-base text-gray-200 hover:text-canary transition-colors duration-200 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                        View Collection
                      </a>
                    </div>
                  )}
                </div>

                {/* About Us */}
                <div>
                  <button
                    className="w-full text-left text-white hover:text-canary font-semibold transition-colors duration-200 uppercase tracking-wide leading-none text-base sm:text-lg flex items-center justify-between py-3 px-2 -mx-2 min-h-[48px]"
                    style={{ fontFamily: '"din-condensed", sans-serif' }}
                    onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')}
                  >
                    <span>About Us</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdown === 'about' && (
                    <div className="mt-3 pl-4 space-y-3">
                             <a href="/about-us" className="block text-sm sm:text-base text-gray-200 hover:text-canary transition-colors duration-200 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                               Who are we?
                             </a>
                             <a href="/code-of-conduct" className="block text-sm sm:text-base text-gray-200 hover:text-canary transition-colors duration-200 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                               Code of Conduct
                             </a>
                             <a href="/faq" className="block text-sm sm:text-base text-gray-200 hover:text-canary transition-colors duration-200 py-2 px-2 -mx-2 min-h-[44px] flex items-center">
                               FAQs
                             </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
      )}
    </header>
  );
};

export default Header;
