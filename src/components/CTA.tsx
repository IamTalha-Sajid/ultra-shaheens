import React from 'react';

const stats = [
  { n: '400+', l: 'Official members' },
  { n: '12+', l: 'Match events' },
  { n: '2023', l: 'Founded' },
];

const CTA: React.FC = () => {
  return (
    <section className="bg-canary text-ink-dark px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,128px)]">
      <div className="wrap flex flex-col gap-14">
        <div className="split gap-x-16 gap-y-8 items-end">
          <h2 className="m-0 font-display font-extrabold uppercase text-[clamp(48px,7vw,104px)] leading-[0.88]">
            Ready to join the Ultra revolution?
          </h2>
          <div className="flex flex-col gap-7">
            <p className="m-0 text-[19px] leading-[1.55] max-w-[480px]">
              Become part of Pakistan&apos;s most passionate football community. Experience the
              energy, create memories, and support our team like never before.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://forms.gle/xek7ovwUwodKYrkA7" className="btn btn-on-canary">
                Join the stands
              </a>
              <a
                href="https://www.instagram.com/ultra_shaheens/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-on-canary"
              >
                Follow us
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] border-t-[1.5px] border-ink-dark">
          {stats.map((s) => (
            <div key={s.l} className="pt-6 flex flex-col gap-1.5">
              <span className="font-display font-extrabold text-[clamp(56px,6vw,80px)] leading-[0.9]">
                {s.n}
              </span>
              <span className="font-display font-semibold text-[15px] tracking-[0.16em] uppercase">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
