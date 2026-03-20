'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MerchandisePage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleWhatsAppClick = () => {
    // WhatsApp link format: https://wa.me/[country code][phone number]
    // For Pakistan: 92 (without the + sign in URL)
    const phoneNumber = '923359169165';
    const message = encodeURIComponent('Hello, I am interested in Ultra Shaheens merchandise.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#05110a] via-[#0b1f13] to-[#040806] flex flex-col relative text-white">
      <Header />

      {/* Main Content */}
      <main
        className="flex-grow flex items-center justify-center relative overflow-hidden pt-24 pb-12"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Abstract Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-dark-fern/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-canary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2"></div>

        {/* Interactive Global Flashlight / Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
          style={{
            opacity: isHovering && mounted ? 1 : 0,
            background: mounted ? `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), transparent 50%)` : 'transparent'
          }}
        ></div>

        {/* Background Logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
          <Image
            src="/ultra-shaheens-logo.png"
            alt="Ultra Shaheens Logo Background"
            width={800}
            height={800}
            className="w-[80vw] max-w-4xl h-auto object-contain"
          />
        </div>

        {/* Merchandise Glass Card */}
        <div className="relative z-10 mt-28 md:mt-36 text-center bg-white/5 backdrop-blur-xl border border-white/10 p-10 sm:p-14 md:p-20 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-3xl w-full mx-4 group overflow-hidden">
          {/* Inner banner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-wide drop-shadow-md uppercase break-words" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            MERCH
          </h1>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-canary to-transparent mx-auto mb-8"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-12 leading-relaxed">
            Represent the Ultra Shaheens with passion. <br className="hidden sm:block" /> Please contact our admin <span className="text-white font-bold">Usama Bhutta</span> for all exclusive merchandise inquiries.
          </p>

          <div className="flex justify-center flex-col sm:flex-row gap-6 relative z-10">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)] font-bold py-4 px-10 rounded-xl transition-all duration-300 uppercase tracking-widest text-lg flex items-center justify-center gap-3 w-full sm:w-auto border border-green-400/50"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message on WhatsApp
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default MerchandisePage;
