"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MerchandisePage: React.FC = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link format: https://wa.me/[country code][phone number]
    // For Pakistan: 92 (without the + sign in URL)
    const phoneNumber = '923359169165';
    const message = encodeURIComponent('Hello, I am interested in Ultra Shaheens merchandise.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      
      {/* Merchandise Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] relative py-8 sm:py-12 md:py-16">
        {/* Background Logo with 60% opacity */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <Image 
            src="/ultra-shaheens-logo.png" 
            alt="Ultra Shaheens Logo Background" 
            width={600}
            height={350}
            className="h-64 sm:h-96 md:h-[500px] lg:h-[600px] w-auto object-contain"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-racing-green mb-4 sm:mb-6 leading-tight" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            MERCHANDISE
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2 font-bold drop-shadow-lg">
            Please contact our admin Usama Bhutta for merchandise inquiries.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm sm:text-base md:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px] flex items-center justify-center w-full sm:w-auto"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MerchandisePage;
