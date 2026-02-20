"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FundraisingPage: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const totalAmount = 15000;
  const raisedAmount = 29641;
  const percentage = Math.min(Math.round((raisedAmount / totalAmount) * 100), 100);
  const remainingAmount = Math.max(totalAmount - raisedAmount, 0);
  const isCompleted = raisedAmount >= totalAmount;

  useEffect(() => {
    // Animate progress bar on page load with eager left-to-right motion
    const timer = setTimeout(() => {
      setAnimatedProgress(Math.min(percentage, 100));
    }, 300);

    return () => clearTimeout(timer);
  }, [percentage]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
    alert('Copied to clipboard!');
  };

  return (
    <div className="font-sans min-h-screen bg-dark-fern">
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            DRUM FUNDRAISING
            <br />
            <span className="text-canary">FOR UPCOMING MATCH</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Help us bring the energy! We&apos;re raising funds for a drum to create an electrifying atmosphere at the upcoming Pakistan vs Syria match.
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-gradient-to-br from-racing-green to-dark-fern rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 text-white">
          <div className="text-center mb-8">
            {isCompleted && (
              <div className="mb-6 p-4 sm:p-6 bg-canary/20 border-2 border-canary rounded-xl">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-canary mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  🎉 FUNDRAISING COMPLETED! 🎉
                </div>
                <p className="text-base sm:text-lg text-gray-100">
                  Thank you for your incredible support! Together we&apos;ve exceeded our goal!
                </p>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              FUNDRAISING PROGRESS
            </h2>

            {/* Amount Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-canary mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  PKR {raisedAmount.toLocaleString()}
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-semibold">Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  {percentage}%
                </div>
                <div className="text-sm sm:text-base text-gray-300">Complete</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-asparagus mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  {isCompleted ? 'PKR 0' : `PKR ${remainingAmount.toLocaleString()}`}
                </div>
                <div className="text-sm sm:text-base text-gray-300">
                  {isCompleted ? 'Completed!' : 'Remaining'}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-4 sm:h-6 mb-4 overflow-hidden relative">
              <div
                className={`h-full rounded-full relative overflow-hidden ${isCompleted ? 'bg-gradient-to-r from-canary via-yellow-400 to-canary' : 'bg-gradient-to-r from-canary to-yellow-400'}`}
                style={{
                  width: `${Math.min(animatedProgress, 100)}%`,
                  transition: 'width 2.5s cubic-bezier(0.4, 0, 0.2, 1)'
                } as React.CSSProperties}
              >
                {/* Animated shimmer effect for eager motion */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
                  style={{
                    animation: 'shimmer 2s ease-in-out infinite',
                    animationDelay: '0.5s'
                  }}
                ></div>
              </div>
            </div>

            <div className="text-sm text-gray-200 font-semibold">
              Goal: PKR {totalAmount.toLocaleString()} {isCompleted && `(Exceeded by PKR ${(raisedAmount - totalAmount).toLocaleString()}!)`}
            </div>
          </div>
        </div>

        {/* Top Contributors Section */}
        <div className="bg-gradient-to-br from-racing-green to-dark-fern rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            TOP CONTRIBUTORS
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            {/* 1st Place */}
            <div className="bg-gradient-to-r from-canary/20 to-canary/10 border-2 border-canary rounded-xl p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-canary rounded-full flex items-center justify-center text-racing-green font-bold text-base sm:text-lg md:text-xl" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  1
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base md:text-lg font-bold text-canary truncate sm:whitespace-normal" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Teymoor Sohail
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Top Contributor</div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-canary" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  PKR 6,100
                </div>
              </div>
            </div>

            {/* 2nd Place */}
            <div className="bg-gradient-to-r from-white/10 to-white/5 border-2 border-gray-400 rounded-xl p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  2
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base md:text-lg font-bold text-white truncate sm:whitespace-normal" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Addel Mirza
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Second Place</div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  PKR 5,616
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="bg-gradient-to-r from-asparagus/20 to-asparagus/10 border-2 border-asparagus rounded-xl p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-asparagus rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  3
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base md:text-lg font-bold text-asparagus truncate sm:whitespace-normal" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    Haseebullah Qureshi
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Third Place</div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-asparagus" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  PKR 3,000
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        {isCompleted && (
          <div className="bg-white border-2 border-canary rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🙏</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-racing-green mb-4 sm:mb-6" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                THANK YOU!
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-racing-green mb-4 sm:mb-6 leading-relaxed font-medium">
                We are overwhelmed with gratitude for your incredible generosity and support.
                Thanks to amazing contributors like you, we have successfully reached and exceeded
                our fundraising goal!
              </p>
              <p className="text-base sm:text-lg text-gray-700 font-semibold leading-relaxed">
                Your contributions will help us bring the energy and passion to the stadium,
                creating an unforgettable atmosphere for Pakistan football. Together, we are making
                history and supporting our team with unwavering dedication.
              </p>
              <div className="mt-6 sm:mt-8 text-3xl sm:text-4xl">
                🎉 🇵🇰 ⚽ 🎉
              </div>
            </div>
          </div>
        )}

        {/* Bank Details Section */}
        <div className="bg-white border-2 border-dell rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-racing-green mb-6 text-center" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            Sada Pay Account Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Holder */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Account Holder</div>
              <div className="text-lg font-semibold text-racing-green flex items-center justify-between">
                <span>Usama Mushtaq Bhutta</span>
                <button
                  onClick={() => copyToClipboard('Usama Mushtaq Bhutta')}
                  className="text-dell hover:text-la-palma transition-colors"
                >
                  📋
                </button>
              </div>
            </div>

            {/* Account Number */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Account Number</div>
              <div className="text-lg font-semibold text-racing-green flex items-center justify-between">
                <span>03359169165</span>
                <button
                  onClick={() => copyToClipboard('03359169165')}
                  className="text-dell hover:text-la-palma transition-colors"
                >
                  📋
                </button>
              </div>
            </div>

            {/* IBAN */}
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <div className="text-sm text-gray-600 mb-2">IBAN</div>
              <div className="text-lg font-semibold text-racing-green flex items-center justify-between">
                <span className="break-all">PK77SADA0000003359169165</span>
                <button
                  onClick={() => copyToClipboard('PK77SADA0000003359169165')}
                  className="text-dell hover:text-la-palma transition-colors ml-2 flex-shrink-0"
                >
                  📋
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-canary bg-opacity-20 rounded-lg">
            <p className="text-sm text-racing-green text-center">
              <strong>Note:</strong> Please mention &quot;Drum Fundraising&quot; in the transaction description when making your contribution.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-dell to-la-palma text-white p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              LET&apos;S MAKE SOME NOISE!
            </h3>
            <p className="text-sm sm:text-base mb-6">
              Every contribution brings us closer to creating an unforgettable atmosphere at the match.
              Help us reach our goal and support Pakistan football!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/xek7ovwUwodKYrkA7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-canary text-dark-fern hover:bg-yellow-400 hover:scale-105 font-bold py-3 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide"
                style={{ fontFamily: '"din-condensed", sans-serif' }}
              >
                JOIN ULTRA SHAHEENS
              </a>
              <button
                onClick={() => copyToClipboard('PK77SADA0000003359169165')}
                className="bg-transparent border-2 border-canary text-canary hover:bg-canary hover:text-dark-fern font-bold py-3 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide"
                style={{ fontFamily: '"din-condensed", sans-serif' }}
              >
                COPY IBAN
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FundraisingPage;
