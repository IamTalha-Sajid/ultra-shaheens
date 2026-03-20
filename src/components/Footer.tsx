import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/40 backdrop-blur-3xl border-t border-white/10 text-gray-300 relative overflow-hidden">

      {/* Absolute Ambient Base Glow */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[300px] bg-canary/5 rounded-t-[100%] blur-[100px] transform -translate-x-1/2 pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/ultra-shaheens-logo.png"
                alt="Ultra Shaheens Logo"
                width={200}
                height={120}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                priority
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 max-w-md">
              Pakistan&apos;s most passionate football community. We unite fans, create unforgettable experiences,
              and support our national team with unwavering dedication and <span className="text-white font-bold">absolute pride</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <span className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-widest" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                CONNECT WITH US
              </span>
              <div className="flex space-x-3">
                {/* Social Icons wrapped in soft glass circles */}
                {[
                  { name: "X", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />, url: "https://x.com/ultrashaheens" },
                  { name: "Facebook", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />, url: "https://www.facebook.com/ultrashaheens/" },
                  { name: "Instagram", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />, url: "https://www.instagram.com/ultra_shaheens/" },
                  { name: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, url: "https://www.linkedin.com/company/ultra-shaheens/" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-black hover:bg-canary hover:border-canary hover:shadow-[0_0_15px_rgba(255,255,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest drop-shadow" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Become a Member", url: "https://forms.gle/xek7ovwUwodKYrkA7" },
                { name: "Match Tickets", url: "#experiences" },
                { name: "Merchandise", url: "#merch" },
                { name: "Our Story", url: "#journey" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="text-gray-400 hover:text-canary hover:pl-2 transition-all duration-300 text-sm sm:text-base font-medium flex items-center group">
                    <span className="w-1 h-1 rounded-full bg-canary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:ml-auto">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest drop-shadow" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Support
            </h3>
            <ul className="space-y-4">
              {[
                "FAQs",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm sm:text-base font-medium flex items-center group">
                    <span className="w-1 h-1 rounded-full bg-white mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50 backdrop-blur-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                © 2026 Ultra Shaheens. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-xs sm:text-sm text-gray-500">
                <span className="hidden sm:inline tracking-wider">Powered by</span>
                <span className="text-canary font-bold tracking-widest text-lg drop-shadow-[0_0_10px_rgba(255,255,0,0.3)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  ULTRA PASSION
                </span>
              </div>
            </div>
            <div className="text-center sm:text-left mt-2 sm:mt-0">
              <p className="text-xs text-gray-600 font-medium tracking-wide">
                Engineered with Love for Pakistan Football by{' '}
                <a
                  href="https://www.talha.is-a.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 border-b border-white/20 pb-[1px]"
                >
                  Talha Sajid
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
