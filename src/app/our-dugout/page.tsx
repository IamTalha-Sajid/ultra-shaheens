import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const execs = [
  {
    name: 'Talha Sajid',
    role: 'CTO',
    title: 'Chief Technology Officer',
    image: '/images/team/talha-sajid.jpg',
    mail: 'mailto:talha.sajid@ultrashaheens.com',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iamtalhasajid' },
      { label: 'GitHub', href: 'https://github.com/iamtalha-sajid' },
      { label: 'Instagram', href: 'https://www.instagram.com/iamtalha.sajid' },
    ],
  },
  {
    name: 'Haseeb Zaigham',
    role: 'CAO',
    title: 'Chief Apparel Officer',
    image: '/images/team/haseeb-zaigham.jpeg',
    mail: 'mailto:haseeb.zaigham@ultrashaheens.com',
    socials: [{ label: 'Instagram', href: 'https://www.instagram.com/rhaseebz' }],
  },
  {
    name: 'Aabyan Munawar',
    role: 'CMO',
    title: 'Chief Marketing Officer',
    image: '/images/team/aabyan-munawar.jpg',
    mail: 'mailto:aabyan.munawar@ultrashaheens.com',
    socials: [] as { label: string; href: string }[],
  },
];

const detailLabel =
  'font-display font-semibold text-[13px] tracking-[0.16em] uppercase text-paper/55';

const OurDugoutPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen bg-ink-dark text-paper">
      <Header />

      {/* Hero */}
      <section className="px-[clamp(20px,4vw,48px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,6vw,72px)]">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-x-16 gap-y-7 items-end">
          <div className="flex flex-col gap-5">
            <div className="eyebrow text-canary">The people behind the movement</div>
            <h1 className="m-0 font-display font-extrabold uppercase text-[clamp(64px,10vw,148px)] leading-[0.84]">
              Our
              <br />
              Dugout
            </h1>
          </div>
          <p className="m-0 text-[19px] leading-[1.55] text-paper/80 max-w-[480px]">
            Meet the core team behind Ultra Shaheens. This dugout drives the vision, energy and
            matchday movement for Pakistan football fans.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="px-[clamp(20px,4vw,48px)] pb-[clamp(64px,8vw,104px)]">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] bg-paper text-ink">
          <div className="relative min-h-[520px] bg-[#d9d4c6]">
            <Image
              src="/images/team/usama-bhutta.jpeg"
              alt="Usama Bhutta"
              fill
              sizes="(min-width: 1024px) 592px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-[clamp(28px,5vw,64px)] flex flex-col gap-6 justify-center">
            <div className="font-display font-bold text-sm tracking-[0.2em] uppercase text-green-accent">
              Founder&apos;s message
            </div>
            <blockquote className="m-0 font-book text-[clamp(22px,2.2vw,28px)] leading-[1.4] text-ink text-pretty">
              “Ultra Shaheens came into being at the end of 2023, for the fans who never stopped
              believing: the ones who showed up, sang louder and stood behind the Pakistan football
              team no matter the result. Today we are a community of hundreds of fans with whom we
              don&apos;t just watch the game, we live it.”
            </blockquote>
            <div className="flex flex-col gap-1 pt-5 border-t-[1.5px] border-ink">
              <span className="font-display font-extrabold text-[32px] uppercase leading-none">Usama Bhutta</span>
              <span className="font-display font-semibold text-[15px] tracking-[0.14em] uppercase text-muted-light">
                Founder
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-[15px]">
              <a
                href="mailto:usama.bhutta@ultrashaheens.com"
                className="text-ink border-b border-ink hover:text-green-accent hover:border-green-accent"
              >
                usama.bhutta@ultrashaheens.com
              </a>
              <a
                href="https://www.instagram.com/usamabhutt.a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-green-accent"
              >
                Instagram ↗
              </a>
              <a
                href="https://www.facebook.com/bhuttausama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-green-accent"
              >
                Facebook ↗
              </a>
            </div>
            <p className="m-0 text-sm text-muted-light">Want to collaborate? Reach out by email.</p>
          </div>
        </div>
      </section>

      {/* President */}
      <section className="px-[clamp(20px,4vw,48px)] pb-[clamp(64px,8vw,104px)]">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-16 gap-y-8 items-center">
          <div className="relative aspect-[4/5] bg-panel-dark overflow-hidden">
            <Image
              src="/images/team/aalayan-raza.jpeg"
              alt="Aalayan Raza"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="self-start bg-canary text-ink-dark px-3 py-1.5 font-display font-bold text-sm tracking-[0.14em] uppercase">
              President
            </span>
            <h2 className="m-0 font-display font-extrabold uppercase text-[clamp(48px,6vw,84px)] leading-[0.88]">
              Aalayan
              <br />
              Raza
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 py-5 border-y border-paper/20">
              <div className="flex flex-col gap-1">
                <span className={detailLabel}>Office</span>
                <span className="text-[17px]">1st Official President</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className={detailLabel}>Tenure</span>
                <span className="text-[17px]">Oct 2026 – Oct 2027</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-[15px]">
              <a
                href="mailto:aalayan.raza@ultrashaheens.com"
                className="text-paper border-b border-paper/50 hover:text-canary hover:border-canary"
              >
                aalayan.raza@ultrashaheens.com
              </a>
              <a
                href="https://x.com/aalayanraza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-canary"
              >
                X ↗
              </a>
              <a
                href="https://www.instagram.com/lil._alu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-canary"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive committee */}
      <section className="px-[clamp(20px,4vw,48px)] pb-[clamp(72px,9vw,128px)]">
        <div className="wrap flex flex-col gap-8">
          <div className="flex flex-wrap justify-between items-baseline gap-4 pt-7 border-t border-paper/20">
            <h2 className="m-0 font-display font-extrabold uppercase text-[clamp(36px,4.4vw,56px)] leading-[0.9]">
              Executive committee
            </h2>
            <span className="font-display font-semibold text-[15px] tracking-[0.18em] uppercase text-paper/55">
              {String(execs.length).padStart(2, '0')} members
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8">
            {execs.map((m) => (
              <div key={m.name} className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] overflow-hidden bg-panel-dark group">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover object-top transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-display font-semibold text-sm tracking-[0.14em] uppercase text-canary">
                    {m.role}
                  </span>
                  <span className="font-display font-extrabold text-[30px] uppercase leading-none">{m.name}</span>
                  <span className="text-sm text-paper/60 mt-0.5">{m.title}</span>
                </div>
                <div className="flex flex-wrap gap-x-[18px] gap-y-2 text-sm pt-3 border-t border-paper/[0.14]">
                  <a href={m.mail} className="text-paper hover:text-canary">
                    Email
                  </a>
                  {m.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper hover:text-canary"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurDugoutPage;
