'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SEEN_KEY = 'us-loader-seen';
const HOLD_MS = 2400;
const EXIT_MS = 850;

type Phase = 'show' | 'exit' | 'gone';

/**
 * Full-screen intro shown once per browser session. It leaves after HOLD_MS or once the
 * window has loaded, whichever is later. A script in layout.tsx hides it before hydration
 * for repeat visits and for visitors who prefer reduced motion.
 */
const SiteLoader: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('show');

  useEffect(() => {
    let skip = false;
    try {
      skip =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        sessionStorage.getItem(SEEN_KEY) !== null;
    } catch {
      // storage unavailable: treat as a first visit
    }
    if (skip) {
      setPhase('gone');
      return;
    }

    document.body.style.overflow = 'hidden';
    let holdDone = false;
    let loadDone = document.readyState === 'complete';
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const tryExit = () => {
      if (!holdDone || !loadDone) return;
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        // storage unavailable: the loader will simply show again next visit
      }
      setPhase('exit');
      exitTimer = setTimeout(() => setPhase('gone'), EXIT_MS);
    };
    const onLoad = () => {
      loadDone = true;
      tryExit();
    };
    const holdTimer = setTimeout(() => {
      holdDone = true;
      tryExit();
    }, HOLD_MS);

    if (!loadDone) window.addEventListener('load', onLoad);

    return () => {
      clearTimeout(holdTimer);
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener('load', onLoad);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (phase === 'gone') document.body.style.overflow = '';
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      id="site-loader"
      role="status"
      aria-label="Loading Ultra Shaheens"
      className={`fixed inset-0 z-[9999] bg-ink-dark border-b-4 border-canary flex flex-col items-center justify-center gap-7 transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'exit' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative w-32 h-32 overflow-hidden animate-[usRise_0.8s_cubic-bezier(0.2,0.8,0.2,1)_both]">
        <Image
          src="/images/brand/ultra-shaheens-logo.png"
          alt=""
          width={176}
          height={176}
          priority
          className="absolute max-w-none w-[176px] h-[176px] -left-6 -top-6 animate-[usBreath_2.2s_0.8s_ease-in-out_infinite]"
        />
      </div>
      <div className="font-display font-extrabold text-[30px] tracking-[0.16em] uppercase text-paper animate-[usFade_0.6s_0.35s_both]">
        Ultra Shaheens
      </div>
      <div className="flex flex-col items-center gap-3.5 animate-[usFade_0.6s_0.6s_both]">
        <div className="flex items-end gap-1.5 h-7" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-1.5 h-full bg-canary origin-bottom"
              style={{ animation: `usBar 0.5s ${i * 0.09}s cubic-bezier(0.3,0.6,0.4,1) infinite alternate` }}
            />
          ))}
        </div>
        <div className="font-display font-semibold text-[13px] tracking-[0.28em] uppercase text-paper/55">
          Getting the stands ready
        </div>
      </div>
    </div>
  );
};

export default SiteLoader;
