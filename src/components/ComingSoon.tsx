import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ComingSoon: React.FC<{ title: string; line: string }> = ({ title, line }) => {
  return (
    <div className="font-sans min-h-screen bg-ink-dark text-paper flex flex-col">
      <Header />

      <section className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
        <div className="flex flex-col justify-center gap-7 max-w-[640px] ml-auto w-full box-border px-[clamp(20px,4vw,48px)] py-[clamp(56px,8vw,112px)]">
          <span className="self-start bg-canary text-ink-dark px-3 py-1.5 font-display font-bold text-sm tracking-[0.16em] uppercase">
            Coming soon
          </span>
          <h1 className="m-0 font-display font-extrabold uppercase text-[clamp(64px,10vw,148px)] leading-[0.84]">
            {title}
          </h1>
          <p className="m-0 text-[19px] leading-[1.55] text-paper/80 max-w-[440px]">{line}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary !px-6 !py-4 !text-[17px]">
              Back to home
            </Link>
            <a
              href="https://www.instagram.com/ultra_shaheens/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary !px-6 !py-[15px] !text-[17px]"
            >
              Follow for updates
            </a>
          </div>
        </div>
        <div className="relative min-h-[360px] bg-panel-dark">
          <Image
            src="/images/journey/2025-11-pakistan-syria.jpg"
            alt="Ultra Shaheens in the stands"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d1611_0%,rgba(13,22,17,0)_40%)]" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;
