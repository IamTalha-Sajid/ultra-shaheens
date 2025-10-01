import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-racing-green text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <Image 
                src="/ultra-shaheens-logo.png" 
                alt="Ultra Shaheens Logo" 
                width={200}
                height={120}
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Pakistan&apos;s most passionate football community. We unite fans, create unforgettable experiences, 
              and support our national team with unwavering dedication and pride.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-xs sm:text-sm text-gray-400 font-semibold uppercase tracking-wide" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                Follow us
              </span>
              <div className="flex space-x-2 sm:space-x-3">
                {/* X (Twitter) */}
                <a 
                  href="https://x.com/ultrashaheens" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-canary transition-all duration-300 hover:scale-110 p-1 sm:p-2"
                  aria-label="Follow us on X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/ultrashaheens/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-canary transition-all duration-300 hover:scale-110 p-1 sm:p-2"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/ultra_shaheens/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-canary transition-all duration-300 hover:scale-110 p-1 sm:p-2"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/ultra-shaheens/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-canary transition-all duration-300 hover:scale-110 p-1 sm:p-2"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="https://forms.gle/xek7ovwUwodKYrkA7" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Become a Member
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Match Tickets
                </a>
              </li>
              <li>
                <a href="#merch" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#journey" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Our Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 uppercase tracking-wide" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-canary transition-colors duration-200 text-sm sm:text-base">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2025 Ultra Shaheens. All rights reserved. Made with passion for Pakistan Football.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span className="hidden sm:inline">Powered by</span>
              <span className="text-canary font-semibold" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                ULTRA PASSION
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
