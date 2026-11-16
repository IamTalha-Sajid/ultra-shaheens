import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[min(100vh,920px)] flex flex-col justify-end overflow-hidden">
      <Header overlay />

      <Image
        src="/images/hero/hero.jpg"
        alt="Ultra Shaheens supporters in the stands"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-ink-dark/[0.38]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,22,17,0.5)_0%,rgba(13,22,17,0.2)_28%,rgba(13,22,17,0.82)_62%,#0d1611_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,22,17,0.7)_0%,rgba(13,22,17,0)_65%)]" />

      <div className="relative max-w-[1280px] w-full mx-auto flex flex-col gap-7 px-[clamp(20px,4vw,48px)] pt-40 pb-[clamp(40px,6vw,72px)]">
        <div className="eyebrow text-canary">Est. 2023 · Pakistan national team supporters</div>
        <h1 className="m-0 font-display font-extrabold uppercase text-[clamp(56px,10.5vw,156px)] leading-[0.86] tracking-[-0.005em]">
          Pakistan Football&apos;s
          <br />
          <span className="text-canary">Ultra Fanbase</span>
        </h1>
        <div className="flex flex-wrap items-end justify-between gap-7">
          <p className="m-0 max-w-[460px] text-[clamp(17px,1.5vw,20px)] leading-[1.5] text-paper/[0.86]">
            Join the most passionate community of Pakistan football supporters.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://forms.gle/xek7ovwUwodKYrkA7" className="btn btn-primary">
              Join the stands
            </a>
            <a href="#screenings" className="btn btn-secondary">
              Find a screening
            </a>
          </div>
        </div>
      </div>

      <a
        href="#screenings"
        className="relative block bg-canary text-ink-dark hover:bg-canary-hover"
      >
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center gap-x-7 gap-y-2.5 px-[clamp(20px,4vw,48px)] py-4 font-display font-bold uppercase tracking-[0.08em] text-[17px]">
          <span className="bg-ink-dark text-canary px-2.5 py-1 text-[13px] tracking-[0.16em]">
            Next up
          </span>
          <span>SAFF Championship Final</span>
          <span className="font-extrabold">Pakistan vs India</span>
          <span>Tue 17 Nov · 7:00 PM PKT</span>
          <span className="ml-auto">4 free screenings →</span>
        </div>
      </a>
    </section>
  );
};

export default Hero;
