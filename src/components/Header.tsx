'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MEMBER_FORM = 'https://forms.gle/xek7ovwUwodKYrkA7';

const navItems = [
  { label: 'Fundraising', href: '/fundraising' },
  { label: 'Our Dugout', href: '/our-dugout' },
  { label: 'Constitution', href: '/constitution' },
  { label: 'Merchandise', href: 'https://shop.ultrashaheens.com', external: true },
  { label: 'Blogs', href: '/blogs', soon: true },
  { label: 'About', href: '/about-us' },
];

const Header: React.FC<{ overlay?: boolean }> = ({ overlay = false }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkProps = (item: (typeof navItems)[number]) =>
    item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <header
      className={`w-full z-50 text-paper border-t-[3px] border-t-canary border-b border-b-paper/[0.18] shadow-[0_8px_24px_rgba(0,0,0,0.28)] backdrop-blur-[14px] ${
        overlay ? 'absolute top-0 left-0 right-0' : 'sticky top-0'
      } ${overlay && !menuOpen ? 'bg-ink-dark/[0.72]' : 'bg-ink-dark'}`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6 px-[clamp(20px,4vw,48px)] py-[14px]">
        <Link href="/" className="flex items-center gap-3 text-paper">
          <div className="relative w-12 h-12 overflow-hidden flex-none">
            <Image
              src="/images/brand/ultra-shaheens-logo.png"
              alt="Ultra Shaheens"
              width={66}
              height={66}
              className="absolute max-w-none w-[66px] h-[66px] -left-[9px] -top-[9px]"
            />
          </div>
          <span className="font-display font-bold text-[20px] tracking-[0.08em] uppercase leading-none">
            Ultra Shaheens
          </span>
        </Link>

        <nav className="hidden min-[1100px]:flex items-center gap-7 font-display font-semibold text-base tracking-[0.1em] uppercase">
          {navItems.map((item) => {
            const active = !item.external && pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                {...linkProps(item)}
                className={`flex items-baseline gap-1.5 py-1 border-b-2 hover:text-canary ${
                  active ? 'text-canary border-canary' : 'text-paper border-transparent'
                }`}
              >
                {item.label}
                {item.soon && (
                  <span className="text-[10px] tracking-[0.12em] text-paper/50">Soon</span>
                )}
              </Link>
            );
          })}
          <a
            href={MEMBER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-canary text-ink-dark hover:bg-white px-[18px] py-[11px] rounded-[2px]"
          >
            Become a member
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="min-[1100px]:hidden w-14 h-12 border border-paper/30 bg-ink-dark/50 text-paper font-display font-semibold tracking-[0.1em] text-[13px] uppercase cursor-pointer"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="min-[1100px]:hidden bg-ink-dark border-t border-paper/[0.14] px-5 pt-2 pb-6 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              {...linkProps(item)}
              onClick={() => setMenuOpen(false)}
              className={`flex justify-between py-4 border-b border-paper/10 font-display font-semibold text-[22px] tracking-[0.06em] uppercase ${
                !item.external && pathname === item.href ? 'text-canary' : 'text-paper'
              }`}
            >
              {item.label}
              {item.soon && (
                <span className="text-xs text-paper/50 self-center">Coming soon</span>
              )}
            </Link>
          ))}
          <a
            href={MEMBER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 bg-canary text-ink-dark p-4 text-center font-display font-bold text-lg tracking-[0.1em] uppercase"
          >
            Become a member
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
