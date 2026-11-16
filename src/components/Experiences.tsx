import React from 'react';
import Image from 'next/image';

const screenings = [
  {
    city: 'Lahore',
    time: '7:00 PM',
    venue: 'Kudos Cafe',
    address: 'Block Q, Phase 2, Johar Town',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Kudos+Cafe+Block+Q+Phase+2+Johar+Town+Lahore',
  },
  {
    city: 'Islamabad',
    time: '7:00 PM',
    venue: 'Crema Lounge',
    address: 'Lower Ground, Foliage Mall, Bhittai Rd, F-7',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Crema+Lounge+Foliage+Mall+Bhittai+Rd+F-7+Islamabad',
  },
  {
    city: 'Peshawar',
    time: '7:30 PM',
    venue: 'The Nook Café',
    address: 'Lower Ground, Uhad Tower, Jamrud Road, Shaheen Town',
    mapLink: 'https://www.google.com/maps?ftid=0x38d9110041179ef3:0x688d09e03565e070',
  },
  {
    city: 'Attock',
    time: '7:30 PM',
    venue: 'Musafir Cafe',
    address: 'Kamra Road, opposite Tahir Byco Pump',
    mapLink: 'https://www.google.com/maps?ftid=0x38df19001c9a29d1:0x8ec0639c1da96160',
  },
];

const Experiences: React.FC = () => {
  return (
    <section id="screenings" className="section-pad">
      <div className="wrap flex flex-col gap-[clamp(40px,5vw,64px)]">
        <div className="split gap-x-16 gap-y-8 items-end">
          <div className="flex flex-col gap-[18px]">
            <div className="eyebrow text-canary">Your next experience · Match screening</div>
            <h2 className="h2-display">
              Pakistan vs India.
              <br />
              The Big Final.
            </h2>
          </div>
          <p className="m-0 text-lg leading-[1.6] text-paper/[0.78] max-w-[520px] text-pretty">
            The biggest rivalry in South Asian football meets in the SAFF Championship final at the
            National Stadium, Dhaka. Watch it live with fellow supporters at one of our four free
            screenings across Pakistan.
          </p>
        </div>

        <div className="split gap-x-16 gap-y-10">
          <div className="group relative overflow-hidden min-h-[360px] bg-panel-dark">
            <Image
              src="/images/screenings/pakvsind.jpg"
              alt="Pakistan national team"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-[1600ms] ease-in-out group-hover:scale-[1.03]"
            />
            <div className="absolute left-5 bottom-5 flex flex-wrap gap-2">
              <span className="bg-ink-dark text-paper px-3 py-[7px] font-display font-semibold text-[13px] tracking-[0.14em] uppercase">
                Away screening
              </span>
              <span className="bg-canary text-ink-dark px-3 py-[7px] font-display font-bold text-[13px] tracking-[0.14em] uppercase">
                Free entry
              </span>
            </div>
          </div>

          <div className="flex flex-col border-t border-paper/20">
            {screenings.map((s) => (
              <div
                key={s.city}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-5 gap-y-1.5 py-6 border-b border-paper/20 items-center"
              >
                <div className="flex flex-wrap items-baseline gap-3.5">
                  <span className="font-display font-extrabold uppercase text-4xl leading-none">
                    {s.city}
                  </span>
                  <span className="font-display font-semibold uppercase tracking-[0.12em] text-[15px] text-canary">
                    {s.time}
                  </span>
                </div>
                <a
                  href={s.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="row-span-2 border border-paper/35 text-paper px-4 py-3 font-display font-semibold text-sm tracking-[0.12em] uppercase whitespace-nowrap hover:bg-paper hover:text-ink-dark"
                >
                  Map ↗
                </a>
                <div className="text-[15px] leading-[1.5] text-paper/70">
                  <strong className="text-paper font-semibold">{s.venue}</strong> · {s.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
