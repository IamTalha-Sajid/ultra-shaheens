'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FundraisingData {
  match: string;
  raisedAmount: number;
  goalAmount?: number;
  contributors: Array<{ name: string; amount: number }>;
}

const currentFundraising: FundraisingData = {
  match: 'Pakistan vs Myanmar',
  raisedAmount: 20193,
  goalAmount: undefined, // No goal set
  contributors: [
    { name: 'Ahmed Basat', amount: 10002 },
    { name: 'Shumail Sajid', amount: 10000 },
    { name: 'From previous campaign', amount: 191 },
  ],
};

const previousFundraising: FundraisingData = {
  match: 'Pakistan vs Syria',
  raisedAmount: 29641,
  goalAmount: 15000,
  contributors: [
    { name: 'Teymoor Sohail', amount: 6100 },
    { name: 'Adeel Rizki', amount: 5616 },
    { name: 'Haseebullah Qureshi', amount: 3000 },
  ],
};

const accountFields = [
  { key: 'holder', label: 'Account holder', value: 'Usama Mushtaq Bhutta' },
  { key: 'number', label: 'Account number', value: '03359169165' },
  { key: 'iban', label: 'IBAN', value: 'PK16NAYA1234503359169165' },
];

const rankColors = ['text-canary', 'text-paper', 'text-paper/60'];
const fmt = (n: number) => n.toLocaleString('en-US');
const rank = (i: number) => String(i + 1).padStart(2, '0');

const FundraisingPage: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopiedKey(key);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopiedKey(''), 1600);
  };

  const { goalAmount, raisedAmount } = currentFundraising;
  const currentPercent = goalAmount ? Math.min(Math.round((raisedAmount / goalAmount) * 100), 100) : 0;
  const previousPercent = Math.round(
    (previousFundraising.raisedAmount / (previousFundraising.goalAmount as number)) * 100,
  );
  const targetMarker = ((previousFundraising.goalAmount as number) / previousFundraising.raisedAmount) * 100;

  return (
    <div className="font-sans min-h-screen bg-ink-dark text-paper">
      <Header />

      {/* Hero */}
      <section className="px-[clamp(20px,4vw,48px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,6vw,80px)]">
        <div className="wrap flex flex-col gap-7">
          <div className="eyebrow flex items-center gap-3 text-canary">
            <span className="w-2 h-2 bg-canary" />
            Fundraising · Active campaign
          </div>
          <h1 className="m-0 font-display font-extrabold uppercase text-[clamp(56px,9vw,136px)] leading-[0.86]">
            Pakistan
            <br />
            vs Myanmar
          </h1>
          <p className="m-0 max-w-[620px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-paper/80 text-pretty">
            Help us bring the energy. We&apos;re raising funds for smoke bombs, placards and
            everything else it takes to create an electrifying atmosphere at Pakistan vs Myanmar.
          </p>
        </div>
      </section>

      {/* Totals + supporters */}
      <section className="px-[clamp(20px,4vw,48px)] pb-[clamp(72px,9vw,120px)]">
        <div className="wrap split gap-x-16 gap-y-12">
          <div className="bg-canary text-ink-dark p-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-10 min-h-[320px]">
            <div className="font-display font-bold text-[15px] tracking-[0.18em] uppercase">
              Total raised
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display font-bold text-[clamp(24px,2.4vw,32px)]">PKR</span>
                <span className="font-display font-extrabold text-[clamp(80px,10vw,144px)] leading-[0.85]">
                  {fmt(raisedAmount)}
                </span>
              </div>
              <div className="h-[1.5px] bg-ink-dark mt-3.5 mb-1" />
              {goalAmount ? (
                <div className="flex flex-col gap-3 text-base leading-[1.5]">
                  <div className="h-2.5 bg-ink-dark/15 relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-ink-dark" style={{ width: `${currentPercent}%` }} />
                  </div>
                  <span>
                    <strong>Target PKR {fmt(goalAmount)}</strong> · {currentPercent}% reached
                  </span>
                </div>
              ) : (
                <div className="text-base leading-[1.5]">
                  <strong>No target set.</strong> Contributions stay open to bring maximum passion
                  to the stands.
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="font-display font-bold text-[15px] tracking-[0.18em] uppercase text-paper/60">
              Top supporters
            </div>
            <div className="flex flex-col border-t border-paper/20">
              {currentFundraising.contributors.map((c, i) => (
                <div
                  key={c.name}
                  className="grid grid-cols-[56px_minmax(0,1fr)_auto] gap-4 items-baseline py-[22px] border-b border-paper/20"
                >
                  <span className={`font-display font-extrabold text-[28px] ${rankColors[i]}`}>{rank(i)}</span>
                  <span className="font-display font-bold text-[28px] uppercase leading-none">{c.name}</span>
                  <span className="font-display font-semibold text-xl tracking-[0.04em] whitespace-nowrap">
                    PKR {fmt(c.amount)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section id="contribute" className="bg-paper text-ink px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,120px)]">
        <div className="wrap split gap-x-[72px] gap-y-12">
          <div className="flex flex-col gap-[22px]">
            <div className="eyebrow text-green-accent">How to contribute</div>
            <h2 className="m-0 font-display font-extrabold uppercase text-[clamp(44px,6vw,80px)] leading-[0.9]">
              Send via
              <br />
              NayaPay.
            </h2>
            <ol className="mt-2 p-0 list-none flex flex-col gap-3.5 text-[17px] leading-[1.5] text-body-light">
              {[
                'Transfer any amount to the account on the right.',
                <>Write <strong className="text-ink">&quot;Fundraising&quot;</strong> in the transaction narrative.</>,
                'Send a screenshot of the transaction on WhatsApp to 03359169165.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="font-display font-extrabold text-ink min-w-[22px]">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col border-t-[1.5px] border-ink">
            {accountFields.map((f) => {
              const copied = copiedKey === f.key;
              return (
                <div key={f.key} className="flex items-center justify-between gap-4 py-[22px] border-b border-ink/20">
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span className="font-display font-semibold text-[13px] tracking-[0.16em] uppercase text-muted-light">
                      {f.label}
                    </span>
                    <span className="font-display font-bold text-[clamp(22px,2.4vw,30px)] tracking-[0.03em] break-all">
                      {f.value}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(f.key, f.value)}
                    className={`flex-none min-w-[88px] h-11 border-[1.5px] border-ink font-display font-bold text-sm tracking-[0.14em] uppercase cursor-pointer ${
                      copied ? 'bg-ink text-canary' : 'bg-transparent text-ink'
                    }`}
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Previous campaigns */}
      <section className="px-[clamp(20px,4vw,48px)] py-[clamp(72px,9vw,120px)]">
        <div className="wrap flex flex-col gap-9">
          <div className="eyebrow text-paper/60">Previous campaigns</div>
          <div className="border-t border-paper/20 pt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-x-16 gap-y-9">
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-paper text-ink-dark px-2.5 py-[5px] font-display font-bold text-[13px] tracking-[0.14em] uppercase">
                  Completed
                </span>
                <span className="font-display font-bold text-sm tracking-[0.14em] uppercase text-canary">
                  Goal exceeded · {previousPercent}%
                </span>
              </div>
              <h3 className="m-0 font-display font-extrabold uppercase text-[clamp(36px,4.4vw,56px)] leading-[0.92]">
                {previousFundraising.match}
                <br />
                <span className="text-paper/55">18 Nov 2025</span>
              </h3>
              <div className="flex flex-col gap-3">
                <div className="relative h-2.5 bg-paper/[0.12]">
                  <div className="absolute left-0 top-0 bottom-0 w-full bg-canary" />
                  <div
                    className="absolute -top-1.5 -bottom-1.5 w-0.5 bg-ink-dark"
                    style={{ left: `${targetMarker}%` }}
                  />
                </div>
                <div className="flex justify-between gap-4 font-display font-semibold text-base tracking-[0.06em] uppercase">
                  <span>
                    Raised <strong className="text-canary">PKR {fmt(previousFundraising.raisedAmount)}</strong>
                  </span>
                  <span className="text-paper/60">
                    Target PKR {fmt(previousFundraising.goalAmount as number)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="font-display font-bold text-sm tracking-[0.18em] uppercase text-paper/50">
                Top contributors
              </div>
              <div className="flex flex-col">
                {previousFundraising.contributors.map((c, i) => (
                  <div
                    key={c.name}
                    className="grid grid-cols-[44px_minmax(0,1fr)_auto] gap-3.5 items-baseline py-3.5 border-b border-paper/[0.14]"
                  >
                    <span className="font-display font-extrabold text-xl text-paper/50">{rank(i)}</span>
                    <span className="text-[17px] font-medium">{c.name}</span>
                    <span className="font-display font-semibold text-lg whitespace-nowrap">PKR {fmt(c.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member CTA */}
      <section className="bg-canary text-ink-dark px-[clamp(20px,4vw,48px)] py-[clamp(56px,7vw,96px)]">
        <div className="wrap flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <h2 className="m-0 font-display font-extrabold uppercase text-[clamp(48px,7vw,96px)] leading-[0.88]">
              Let&apos;s make some noise.
            </h2>
            <p className="m-0 text-lg leading-[1.55]">
              Join the official fan club, bring your passion to the stands, and chant with us until
              the final whistle.
            </p>
          </div>
          <a
            href="https://forms.gle/xek7ovwUwodKYrkA7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-canary !px-[30px] !py-[18px]"
          >
            Become a member
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FundraisingPage;
