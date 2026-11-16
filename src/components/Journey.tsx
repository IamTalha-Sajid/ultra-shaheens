'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

type StoryEvent = {
  date: string;
  title: string;
  caption: string;
  image: string;
  description: string;
  no: string;
  pageL: number;
  pageR: number;
  tilt: string;
};

const rawEvents = [
  { date: '21 Nov 2023', title: 'Beginnings of Ultra Shaheens', caption: 'Founding day', image: '/images/journey/2023-11-founding.jpg', description: "Pakistan's most passionate football fanbase was officially born. Founded with a vision to unite football lovers across the nation, we set out to create an unforgettable matchday experience from day one." },
  { date: '21 Mar 2024', title: 'Pakistan vs Jordan', caption: 'Second outing', image: '/images/journey/2024-03-pakistan-jordan.jpg', description: 'Over 50 dedicated fans gathered to cheer for Pakistan during our second official outing. The stadium energy was electric, and the growing community made it a night to remember.' },
  { date: '6 Jun 2024', title: 'Pakistan vs Saudi Arabia', caption: 'Third match', image: '/images/journey/2024-06-pakistan-saudi-arabia.jpg', description: 'Our third match saw hundreds of supporters join the cause. The community grew rapidly, forging lasting memories and deep football friendships in the stands.' },
  { date: '25 Mar 2025', title: 'Pakistan vs Syria', caption: 'Islamabad screening', image: '/images/journey/2025-03-islamabad-screening.png', description: 'Ultra Shaheens met in Islamabad for an away-match screening of Pakistan vs Jordan. Under the lights with our banner and our colours, we brought stadium energy to the capital: chants, pride, and one more unforgettable night together.' },
  { date: '21 Aug 2025', title: 'Pakistan Football Federation Dinner', caption: 'PFF dinner', image: '/images/journey/2025-08-pff-dinner.jpeg', description: "Our executive committee represented the fanbase at the Pakistan Football Federation's official dinner, earning recognition from PFF leadership and presenting our jersey to the national head coach." },
  { date: '9 Oct 2025', title: 'Pakistan vs Afghanistan', caption: 'Home fixture', image: '/images/journey/2025-10-pakistan-afghanistan.jpg', description: "Ali Tareen joined the Ultra Shaheens stands as we witnessed Pakistan's most dominant performance yet. The crowd's energy fuelled a display that showed the true potential of Pakistani football." },
  { date: '18 Nov 2025', title: 'Pakistan vs Syria', caption: 'Drums debut', image: '/images/journey/2025-11-pakistan-syria.jpg', description: 'Despite a tough result on the pitch, our fans held their heads high. With drums beating for the very first time, the green stands roared with national pride.' },
  { date: '31 Mar 2026', title: 'Pakistan vs Myanmar', caption: 'Community screening', image: '/images/journey/2026-03-pakistan-myanmar-screening.jpg', description: 'The match was played behind closed doors, so we gathered for a community screening of Pakistan vs Myanmar in the AFC Asian Cup 2027 Qualifiers, sharing the same nerves, chants and pride as we closed out the campaign together.' },
];

const events: StoryEvent[] = rawEvents.map((e, j) => ({
  ...e,
  no: String(j + 1).padStart(2, '0'),
  pageL: 2 * j + 1,
  pageR: 2 * j + 2,
  tilt: j % 2 ? '1deg' : '-1.2deg',
}));

const N = events.length;
const FLIP_MS = 1000;
const pageFooter =
  'absolute flex justify-between font-display text-[13px] tracking-[0.14em] uppercase text-muted-light';
const shadeAnimation = `usShade ${FLIP_MS}ms ease-in-out`;

const PhotoPage: React.FC<{ event: StoryEvent; page: number; tilt?: string; onClick: () => void }> = ({
  event,
  page,
  tilt,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="absolute inset-0 bg-[#f3efe4] rounded-l-[3px] overflow-hidden cursor-w-resize"
  >
    <div className="absolute inset-[7%_9%_14%_9%] flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element -- natural aspect ratio, sized to fit the page */}
      <img
        src={event.image}
        alt={event.title}
        className="block max-w-full max-h-full w-auto h-auto bg-white p-2.5 shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
        style={{ transform: `rotate(${tilt ?? event.tilt})` }}
      />
    </div>
    <div className={`${pageFooter} left-[9%] right-[9%] bottom-[5%]`}>
      <span>{event.caption}</span>
      <span>{page}</span>
    </div>
    <div className="absolute top-0 right-0 bottom-0 w-[12%] bg-[linear-gradient(to_left,rgba(0,0,0,0.16),rgba(0,0,0,0))]" />
  </div>
);

const StoryPage: React.FC<{ event: StoryEvent; onClick?: () => void }> = ({ event, onClick }) => (
  <div
    onClick={onClick}
    className={`absolute inset-0 bg-[#f3efe4] rounded-r-[3px] overflow-hidden ${onClick ? 'cursor-e-resize' : ''}`}
  >
    <div className="absolute inset-[9%_11%_12%_11%] flex flex-col gap-[18px]">
      <div className="flex items-baseline gap-3 font-display uppercase tracking-[0.14em] text-sm font-semibold text-[#3c6b2a]">
        <span>No. {event.no}</span>
        <span className="text-[#8a887c]">{event.date}</span>
      </div>
      <h3 className="m-0 font-display font-bold uppercase text-[clamp(28px,3.4vw,46px)] leading-[0.95] text-ink text-balance">
        {event.title}
      </h3>
      <div className="w-10 h-0.5 bg-ink" />
      <p className="m-0 font-book text-[clamp(16px,1.45vw,19px)] leading-[1.55] text-[#2c3530] text-pretty">
        {event.description}
      </p>
    </div>
    <div className={`${pageFooter} left-[11%] right-[11%] bottom-[5%]`}>
      <span>Our Story</span>
      <span>{event.pageR}</span>
    </div>
    <div className="absolute top-0 left-0 bottom-0 w-[10%] bg-[linear-gradient(to_right,rgba(0,0,0,0.14),rgba(0,0,0,0))]" />
  </div>
);

const Shade: React.FC<{ active: boolean; dir: 'left' | 'right' }> = ({ active, dir }) => (
  <div
    className={`absolute inset-0 opacity-0 pointer-events-none ${
      dir === 'left'
        ? 'bg-[linear-gradient(to_left,rgba(0,0,0,0.35),rgba(0,0,0,0)_70%)]'
        : 'bg-[linear-gradient(to_right,rgba(0,0,0,0.35),rgba(0,0,0,0)_70%)]'
    }`}
    style={{ animation: active ? shadeAnimation : 'none' }}
  />
);

const Journey: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);
  const [index, setIndex] = useState(0);
  const [animatingLeaf, setAnimatingLeaf] = useState(-1);
  const [width, setWidth] = useState(1100);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animatingLeaf !== -1) return;
      const nextIndex = Math.max(0, Math.min(N - 1, index + dir));
      if (nextIndex === index) return;
      setIndex(nextIndex);
      setAnimatingLeaf(dir > 0 ? index : index - 1);
      timerRef.current = setTimeout(() => setAnimatingLeaf(-1), FLIP_MS);
    },
    [animatingLeaf, index],
  );

  const stop = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };
  const next = () => go(1);
  const prev = () => go(-1);

  const spread = width >= 720;
  const bookW = Math.min(width, 1120);
  const bookH = Math.round((bookW / 2) * 1.22);
  const singleH = Math.round(width * 1.75);
  const current = events[index];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const iconButton =
    'w-12 h-12 flex-none rounded-full border border-paper/[0.28] bg-transparent text-paper text-xl cursor-pointer';

  return (
    <section id="journey" className="section-pad">
      <div className="wrap flex flex-col gap-[clamp(40px,5vw,64px)]">
        <div className="split gap-x-16 gap-y-6 items-end">
          <div className="flex flex-col gap-[18px]">
            <div className="eyebrow text-canary">2023 – 2026</div>
            <h2 className="h2-display">
              Our story,
              <br />
              page by page.
            </h2>
          </div>
          <p className="m-0 text-lg leading-[1.6] text-paper/[0.78] max-w-[520px]">
            From humble beginnings to Pakistan&apos;s most passionate football community. Every
            milestone tells a story of dedication, unity and unwavering support. Click or swipe to
            turn the page.
          </p>
        </div>

        <div
          ref={rootRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="w-full flex flex-col items-center gap-7 outline-none"
        >
          {spread ? (
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative rounded-[3px] select-none [perspective:2600px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45),-4px_0_0_#e4dfd1,-7px_0_0_#d6d0c0,4px_0_0_#e4dfd1,7px_0_0_#d6d0c0]"
              style={{ width: bookW, height: bookH }}
            >
              {/* base left: first photo */}
              <div className="absolute left-0 top-0 w-1/2 h-full">
                <PhotoPage event={events[0]} page={1} tilt="-1.2deg" onClick={prev} />
              </div>
              {/* base right: last story */}
              <div className="absolute left-1/2 top-0 w-1/2 h-full">
                <StoryPage event={events[N - 1]} />
              </div>
              {/* leaves */}
              {events.slice(0, N - 1).map((_, j) => {
                const flipped = j < index;
                const animating = animatingLeaf === j;
                return (
                  <div
                    key={j}
                    className="absolute left-1/2 top-0 w-1/2 h-full origin-left [transform-style:preserve-3d] transition-transform duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)]"
                    style={{
                      transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                      zIndex: animating ? 200 : flipped ? j + 1 : N - j,
                    }}
                  >
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <StoryPage event={events[j]} onClick={next} />
                      <Shade active={animating} dir="left" />
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <PhotoPage event={events[j + 1]} page={events[j + 1].pageL} onClick={prev} />
                      <Shade active={animating} dir="right" />
                    </div>
                  </div>
                );
              })}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -ml-px bg-black/[0.18] z-[300] pointer-events-none" />
            </div>
          ) : (
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative w-full overflow-hidden select-none [perspective:1800px]"
              style={{ height: singleH }}
            >
              {events.map((event, j) => {
                const animating = animatingLeaf === j;
                return (
                  <div
                    key={j}
                    onClick={next}
                    className="absolute left-0 top-0 w-full h-full origin-left [transform-style:preserve-3d] transition-transform duration-[900ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
                    style={{
                      transform: j < index ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                      zIndex: animating ? 200 : N - j,
                    }}
                  >
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#f3efe4] rounded-[3px] overflow-hidden flex flex-col px-5 pt-5 pb-[18px] gap-4 shadow-[inset_10px_0_18px_-10px_rgba(0,0,0,0.25)]">
                      <div className="flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element -- natural aspect ratio, sized to fit the page */}
                        <img
                          src={event.image}
                          alt={event.title}
                          className="block max-w-full max-h-[300px] w-auto h-auto bg-white p-2 shadow-[0_5px_12px_rgba(0,0,0,0.16)]"
                          style={{ transform: `rotate(${event.tilt})` }}
                        />
                      </div>
                      <div className="flex items-baseline gap-2.5 font-display uppercase tracking-[0.14em] text-[13px] font-semibold text-[#3c6b2a]">
                        <span>No. {event.no}</span>
                        <span className="text-[#8a887c]">{event.date}</span>
                      </div>
                      <h3 className="m-0 font-display font-bold uppercase text-[30px] leading-[0.95] text-ink">
                        {event.title}
                      </h3>
                      <p className="m-0 font-book text-base leading-[1.5] text-[#2c3530]">
                        {event.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#e9e4d6] rounded-[3px]" />
                    <div
                      className="absolute inset-0 opacity-0 pointer-events-none bg-[linear-gradient(to_left,rgba(0,0,0,0.4),rgba(0,0,0,0)_70%)]"
                      style={{ animation: animating ? shadeAnimation : 'none' }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className="w-full flex items-center gap-5" style={{ maxWidth: spread ? bookW : undefined }}>
            <button
              type="button"
              aria-label="Previous page"
              onClick={stop(prev)}
              disabled={index === 0}
              className={`${iconButton} disabled:opacity-35`}
            >
              ←
            </button>
            <div className="flex-1 min-w-0 flex flex-col gap-2.5">
              <div className="flex justify-between gap-3 font-display uppercase tracking-[0.14em] text-sm font-semibold text-paper">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {current.date} · {current.title}
                </span>
                <span className="flex-none">
                  {String(index + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                </span>
              </div>
              <div className="relative h-0.5 bg-paper/[0.28]">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-canary transition-[width] duration-[600ms] ease-in-out"
                  style={{ width: `${((index + 1) / N) * 100}%` }}
                />
              </div>
            </div>
            <button
              type="button"
              aria-label="Next page"
              onClick={stop(next)}
              disabled={index === N - 1}
              className={`${iconButton} disabled:opacity-35`}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
