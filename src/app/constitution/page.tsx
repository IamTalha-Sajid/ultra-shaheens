'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PdfViewer from '@/components/PdfViewer';

const CONSTITUTION_PDF = '/constitution/Ultra_Shaheens_Constitution_v1.0.pdf';

const ConstitutionPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#05110a] via-[#0b1f13] to-[#040806] flex flex-col relative">
      <Header />

      <main className="flex-grow flex flex-col items-center relative overflow-hidden pt-40 sm:pt-48 pb-12 px-4">
        {/* Abstract Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-dark-fern/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-canary/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2"></div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="text-center mb-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-wide drop-shadow-md uppercase"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              Ultra Shaheens Constitution
            </h1>
            <a
              href={CONSTITUTION_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-canary hover:text-white text-sm font-semibold uppercase tracking-wide transition-colors"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              Open in new tab
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <PdfViewer fileUrl={CONSTITUTION_PDF} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConstitutionPage;
