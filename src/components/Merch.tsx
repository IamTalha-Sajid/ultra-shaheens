'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Merch: React.FC = () => {
  const [side, setSide] = useState<'front' | 'back'>('front');

  return (
    <section id="merch" className="section-pad bg-paper text-ink">
      <div className="wrap split gap-x-[72px] gap-y-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="eyebrow text-green-accent">Official merchandise</div>
          <h2 className="h2-display">
            Rep the green
            <br />
            and white.
          </h2>
          <p className="m-0 text-lg leading-[1.6] text-body-light max-w-[460px]">
            The Ultra Shaheens collection, from premium polos to match shirts. Wear it to the
            stands, the screening, or anywhere you take your football.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://shop.ultrashaheens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Shop the collection
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="relative w-full aspect-square bg-paper-2">
            <Image
              src={side === 'front' ? '/images/merch/polo-front.png' : '/images/merch/polo-back.png'}
              alt="Ultra Shaheens polo"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-contain p-[8%]"
            />
            <div className="absolute top-5 left-5 font-display font-semibold text-[13px] tracking-[0.16em] uppercase text-[#5b625d]">
              Home polo · 2026
            </div>
          </div>
          <div className="flex border border-ink">
            {(['front', 'back'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSide(key)}
                aria-pressed={side === key}
                className={`px-[22px] py-3 font-display font-semibold text-sm tracking-[0.14em] uppercase cursor-pointer ${
                  side === key ? 'bg-ink text-paper' : 'bg-transparent text-ink'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
