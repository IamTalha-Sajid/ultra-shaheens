'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FundraisingData {
  match: string;
  raisedAmount: number;
  goalAmount?: number;
  isCompleted: boolean;
  contributors: Array<{
    name: string;
    amount: number;
    position: number;
  }>;
}

const FundraisingPage: React.FC = () => {
  // Current Fundraising: Pakistan vs Myanmar
  const currentFundraising: FundraisingData = {
    match: "Pakistan vs Myanmar",
    raisedAmount: 20193,
    goalAmount: undefined, // No goal set
    isCompleted: false,
    contributors: [
      { name: "Ahmed Basat", amount: 10002, position: 1 },
      { name: "Shumail Sajid", amount: 10000, position: 2 },
      { name: "From Previous Campaign", amount: 191, position: 3 }
    ]
  };

  // Previous Fundraising: Syria Game
  const previousFundraising: FundraisingData = {
    match: "Syria Game",
    raisedAmount: 29641,
    goalAmount: 15000,
    isCompleted: true,
    contributors: [
      { name: "Teymoor Sohail", amount: 6100, position: 1 },
      { name: "Addel Mirza", amount: 5616, position: 2 },
      { name: "Haseebullah Qureshi", amount: 3000, position: 3 }
    ]
  };

  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const percentage = currentFundraising.goalAmount
    ? Math.min(Math.round((currentFundraising.raisedAmount / currentFundraising.goalAmount) * 100), 100)
    : 100;

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setAnimatedProgress(Math.min(percentage, 100));
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#05110a] via-[#0b1f13] to-[#040806] text-white overflow-hidden relative">
      <Header />

      {/* Global Interactive Tracking Flashlight Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-in-out mix-blend-overlay"
        style={{
          opacity: isHovering && mounted ? 1 : 0,
          background: mounted ? `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 40%)` : 'transparent'
        }}
      ></div>

      {/* Content wrapper */}
      <main
        ref={mainRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-48 pb-16 min-h-[calc(100vh-200px)]"
      >
        {/* Background Faint Watermark Logo */}
        <div className="absolute inset-x-0 top-32 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Image
            src="/ultra-shaheens-logo.png"
            alt="Ultra Shaheens Logo Background"
            width={800}
            height={800}
            className="w-[80vw] max-w-4xl object-contain"
          />
        </div>

        {/* Page Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-md tracking-wide" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            FUNDRAISING
            <br />
            <span className="text-canary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">FOR UPCOMING MATCH</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Help us bring the energy! We&apos;re raising funds for smoke bombs, placards, and other stuff to create an electrifying atmosphere at the upcoming Pakistan vs Myanmar match.
          </p>
        </div>

        {/* MAIN CURRENT FUNDRAISING GLASS CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group mb-16">
          {/* Inner banner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-canary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="text-center mb-6">
            <span className="inline-block px-5 py-2 bg-canary text-black rounded-full text-base font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,0,0.3)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              CURRENT ACTIVE FUNDRAISING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-center tracking-wide drop-shadow-lg text-white" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            {currentFundraising.match.toUpperCase()}
          </h2>

          {/* Amount Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center bg-black/20 p-8 rounded-3xl border border-white/5 relative overflow-hidden group/stats hover:border-canary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-canary/5 opacity-0 group-hover/stats:opacity-100 transition-opacity"></div>
              <div className="text-4xl sm:text-5xl font-bold text-canary mb-2 drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                PKR {currentFundraising.raisedAmount.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base text-gray-400 font-bold tracking-widest uppercase">Total Raised</div>
            </div>

            <div className="text-center bg-black/20 p-8 rounded-3xl border border-white/5 relative overflow-hidden group/stats hover:border-canary/30 transition-all duration-300">
              <div className="absolute inset-0 bg-canary/5 opacity-0 group-hover/stats:opacity-100 transition-opacity"></div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-md" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                {currentFundraising.goalAmount ? `PKR ${currentFundraising.goalAmount.toLocaleString()}` : '—'}
              </div>
              <div className="text-sm sm:text-base text-gray-400 font-bold tracking-widest uppercase">Target Goal</div>
            </div>
          </div>

          {/* Status Note */}
          <div className="text-center mb-8">
            <p className="text-gray-300 font-medium">Currently, there is no hard cap set. Fundings are open to bring maximum passion to the stands.</p>
          </div>

          {/* Top Contributors for Current Campaign */}
          <div className="border-t border-white/10 pt-10 mt-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              TOP SUPPORTERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentFundraising.contributors.map((contributor) => (
                <div key={contributor.position} className="bg-white/5 border border-white/10 hover:border-canary/40 hover:bg-white/10 p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,0,0.15)] group/card">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl mb-4 ${contributor.position === 1 ? 'bg-canary text-black shadow-[0_0_15px_rgba(255,255,0,0.5)]' : contributor.position === 2 ? 'bg-gray-400 text-white' : 'bg-[#C5B358] text-white'}`} style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    #{contributor.position}
                  </div>
                  <div className="text-lg font-bold text-white text-center mb-1 group-hover/card:text-canary transition-colors" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    {contributor.name}
                  </div>
                  <div className="text-xl font-bold text-canary">PKR {contributor.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BANK DETAILS / HOW TO DONATE GLASS CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 relative z-10">
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 uppercase tracking-widest" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              Donate directly via <span className="text-canary">Sada Pay</span>
            </h3>

            <div className="space-y-4">
              <div className="bg-black/30 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between group">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-bold">Account Holder</div>
                  <div className="text-lg text-white font-medium">Usama Mushtaq Bhutta</div>
                </div>
                <button onClick={() => copyToClipboard('Usama Mushtaq Bhutta')} className="mt-3 sm:mt-0 p-2 bg-white/10 hover:bg-canary hover:text-black rounded-lg transition-colors duration-300" aria-label="Copy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between group">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-bold">Account Number</div>
                  <div className="text-lg text-white font-medium">03359169165</div>
                </div>
                <button onClick={() => copyToClipboard('03359169165')} className="mt-3 sm:mt-0 p-2 bg-white/10 hover:bg-canary hover:text-black rounded-lg transition-colors duration-300" aria-label="Copy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </button>
              </div>

              <div className="bg-black/30 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between group border border-transparent hover:border-canary/20 transition-all duration-300">
                <div className="overflow-hidden">
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-bold">IBAN (International / Interbank)</div>
                  <div className="text-sm sm:text-base md:text-lg text-canary font-medium break-all tracking-wider">PK77SADA0000003359169165</div>
                </div>
                <button onClick={() => copyToClipboard('PK77SADA0000003359169165')} className="mt-3 sm:mt-0 p-3 bg-canary text-black hover:bg-white rounded-lg transition-colors duration-300 flex-shrink-0 font-bold flex items-center gap-2 text-sm uppercase" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Copy IBAN
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4 italic">* Please mention "Fundraising" in your transaction narrative.</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-canary/10 to-transparent border border-canary/20 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase" style={{ fontFamily: '"din-condensed", sans-serif' }}>
              LET'S MAKE <br /><span className="text-canary drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]">SOME NOISE!</span>
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Join the official fan club, bring your passion to the stands, and let's chant together until the final whistle.
            </p>
            <a
              href="https://forms.gle/xek7ovwUwodKYrkA7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-canary text-black hover:bg-white hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,0,0.6)] font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-widest text-lg"
              style={{ fontFamily: '"din-condensed", sans-serif' }}
            >
              BECOME A MEMBER
            </a>
          </div>
        </div>

        {/* PREVIOUS FUNDRAISING COMPACT SECTION */}
        <div className="bg-black/40 border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-4" style={{ fontFamily: '"din-condensed", sans-serif' }}>
            Previous Campaigns
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                {previousFundraising.match.toUpperCase()}
              </h3>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider">Completed</span>
                <span className="text-canary font-bold">Goal Exceeded</span>
              </div>
            </div>

            <div className="flex gap-8 text-center md:text-right w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
              <div>
                <div className="text-lg text-gray-400 uppercase tracking-widest font-bold text-xs mb-1">Target</div>
                <div className="text-xl font-bold text-gray-300" style={{ fontFamily: '"din-condensed", sans-serif' }}>PKR {previousFundraising.goalAmount?.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-lg text-gray-400 uppercase tracking-widest font-bold text-xs mb-1">Raised</div>
                <div className="text-2xl font-bold text-canary drop-shadow-[0_0_8px_rgba(255,255,0,0.3)]" style={{ fontFamily: '"din-condensed", sans-serif' }}>PKR {previousFundraising.raisedAmount.toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Previous Campaign Contributors */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <h4 className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4 font-sans">Top Contributors</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {previousFundraising.contributors.map((contributor) => (
                <div key={contributor.position} className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl hover:border-canary/30 hover:bg-white/10 transition-colors duration-300">
                  {/* Position Badge */}
                  <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-sm ${contributor.position === 1 ? 'bg-canary text-black shadow-[0_0_10px_rgba(255,255,0,0.4)]' : contributor.position === 2 ? 'bg-gray-400 text-white' : 'bg-[#C5B358] text-white'}`} style={{ fontFamily: '"din-condensed", sans-serif' }}>
                    #{contributor.position}
                  </div>
                  {/* Info Wrapper */}
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-base tracking-wide font-bold truncate mb-0.5" style={{ fontFamily: '"din-condensed", sans-serif' }}>
                      {contributor.name}
                    </div>
                    <div className="text-canary text-xs font-bold">
                      PKR {contributor.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default FundraisingPage;
