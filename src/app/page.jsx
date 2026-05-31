'use client';

import { useEffect, useState } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  return width;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');

    // Make all elements visible immediately as fallback
    els.forEach(el => {
      el.style.transition = `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${el.dataset.delay || 0}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${el.dataset.delay || 0}s`;
    });

    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function RV({ children, delay = 0, className = '', style = {}, ...props }) {
  return (
    <div
      className={`rv ${className}`}
      data-delay={delay}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity .85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform .85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
function Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-8 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-xs font-semibold tracking-widest uppercase text-gold">
        {children}
      </span>
    </div>
  );
}

function BtnGold({ href, children, target, rel, variant = 'solid' }) {
  const [hov, setHov] = useState(false);

  if (variant === 'outline') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-body text-xs font-bold tracking-widest uppercase no-underline transition-all duration-300 border ${
          hov
            ? 'bg-white/10 border-gold text-white'
            : 'border-white/30 text-white bg-transparent'
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-body text-xs font-bold tracking-widest uppercase no-underline transition-all duration-300 ${
        hov ? 'bg-gold-light text-navy translate-y-[-2px]' : 'bg-gold text-navy translate-y-0'
      }`}
    >
      {children}
    </a>
  );
}

function TextLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase no-underline transition-all duration-200 pb-0.5 border-b ${
        hov ? 'text-gold border-gold' : 'text-navy border-navy'
      }`}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8h10m0 0L9 4m4 4l-4 4" />
      </svg>
    </a>
  );
}

export default function Home() {
  useReveal();
  const w = useWindowWidth();
  const mob = w < 768;
  const tab = w >= 768 && w < 1024;

  return (
    <div className="font-body overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-navy-deep py-20 sm:py-28 pb-16 md:pb-28">
        <div className="absolute inset-0 bg-[url('/site%20images/hero_section.jpg')] bg-center bg-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-radial from-red-900/18 via-transparent to-transparent" style={{ backgroundPosition: '70% 40%', backgroundSize: '160% 120%' }} />
        <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent" style={{ backgroundPosition: '5% 80%', backgroundSize: '100% 160%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/20" />

        <div className="relative z-10 max-w-[1260px] mx-auto w-full px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10 md:gap-20 items-end">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-7 animate-rise" style={{ animation: 'rise .8s ease .3s both' }}>
                <span className="w-9 h-px bg-gold block" />
                <span className="text-xs font-medium tracking-widest uppercase text-gold">Marrakech · Morocco</span>
              </div>

              <div className="animate-rise" style={{ animation: 'rise 1s ease .5s both' }}>
                <h1 className="font-display font-black leading-none tracking-tight text-white text-5xl sm:text-6xl md:text-8xl">
                  MARRA
                </h1>
                <h1 className="font-display font-black leading-none tracking-tight text-transparent ml-4 md:ml-20 mt-[-0.05em]" style={{ WebkitTextStroke: '2px #C9973B', fontSize: mob ? 'clamp(3.2rem,14vw,5rem)' : 'clamp(4rem,9vw,8.5rem)' }}>
                  KECH.
                </h1>
                <p className="font-display font-normal italic text-white/45 text-xl md:text-4xl mt-3" style={{ fontSize: mob ? '1.4rem' : 'clamp(1.6rem,3vw,2.8rem)' }}>
                  Done Right.
                </p>
              </div>

              <p className="text-white/55 text-sm md:text-base leading-relaxed font-light max-w-xl my-6 md:my-8 animate-rise" style={{ animation: 'rise .8s ease .7s both' }}>
                From the moment you land to the moment you leave. Accommodation, airport transfers, car hire, curated experiences, and expert real estate investment guidance.{' '}
                <span className="text-white/80 font-normal">One company. One number. No stress.</span>
              </p>

              <div className="flex gap-3 flex-wrap animate-rise" style={{ animation: 'rise .8s ease .9s both' }}>
                <BtnGold href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip" target="_blank" rel="noopener noreferrer">
                  Plan My Trip →
                </BtnGold>
                <BtnGold href="/contact" variant="outline">
                  Invest in Morocco
                </BtnGold>
              </div>
            </div>

            {/* Right stat panel — desktop only */}
            {!mob && (
              <div className="hidden md:flex flex-col gap-8 pl-12 border-l border-white/10 animate-rise" style={{ animation: 'rise .8s ease .65s both' }}>
                {[
                  { num: '19.8M', label: 'Tourists in Morocco 2025' },
                  { num: '21%', label: 'Net annual rental yield' },
                  { num: '2030', label: 'FIFA World Cup host city' },
                ].map(s => (
                  <div key={s.num}>
                    <div className="font-display font-bold text-4xl text-gold leading-none mb-1.5">{s.num}</div>
                    <div className="text-xs font-medium tracking-widest uppercase text-white/35">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 animate-bob" style={{ animation: 'bob 2.2s ease-in-out infinite' }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
          </svg>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="flex items-center gap-4 mb-10">
            <span className="w-7 h-px bg-gold/40 block" />
            <span className="text-xs font-medium tracking-widest uppercase text-white/30">Morocco by the numbers</span>
          </RV>
          <div className="flex flex-col">
            {[
              { num: '19.8M', title: 'Tourists', sub: 'Morocco 2025 · Most visited in Africa' },
              { num: '#1', title: 'In Africa', sub: 'Overtook Egypt · Record year' },
              { num: '1,000', title: 'Years Old', sub: 'Marrakech · Founded 1062 AD' },
              { num: '2030', title: 'World Cup', sub: 'FIFA · Marrakech is a host city' },
            ].map((s, i) => (
              <RV
                key={s.num}
                delay={i * 0.08}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-8 py-5 sm:py-7 border-white/6 ${i === 0 ? 'border-t' : ''} border-b`}
              >
                <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white/10 leading-none flex-shrink-0 sm:w-36 md:w-44 sm:text-right" style={{ fontSize: mob ? '2.5rem' : 'clamp(3rem,6vw,5.5rem)' }}>
                  {s.num}
                </span>
                <span className="font-display font-bold text-lg md:text-3xl text-white flex-1" style={{ fontSize: mob ? '1.4rem' : 'clamp(1.6rem,2.8vw,2.6rem)' }}>
                  {s.title}
                </span>
                <span className="text-sm text-white/35 font-light max-w-xs">
                  {s.sub}
                </span>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE ══ */}
      <section className="bg-cream-off py-16 sm:py-20 md:py-28" id="about">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            {/* Image */}
            <RV>
              <div className="relative w-full md:w-auto">
                <div className="aspect-[3/4] bg-[url('/founder_Vialane.jpg')] bg-center bg-cover rounded-lg overflow-hidden relative">
                  <div className="absolute top-5 right-5 w-16 h-16 border border-gold/30 rounded" />
                </div>
                {!mob && <div className="absolute bottom-0 right-0 -bottom-5 -right-5 w-25 h-25 bg-gold-pale rounded-lg -z-10" />}
                <div className="absolute bottom-7 sm:left-3 md:-left-6 bg-navy text-white p-5 max-w-40 shadow-2xl">
                  <strong className="font-display font-normal text-2xl text-gold block mb-1">24/7</strong>
                  <span className="text-xs text-white/50 leading-relaxed">On the ground in Marrakech</span>
                </div>
              </div>
            </RV>

            {/* Copy */}
            <RV delay={mob ? 0 : 0.2}>
              <Label>Who We Are</Label>
              <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight text-navy mb-5" style={{ fontSize: mob ? '2rem' : 'clamp(2.2rem,3.5vw,3.5rem)' }}>
                We Are <em className="text-gold italic">Vialane Homes.</em>
              </h2>
              <div className="text-base md:text-lg leading-relaxed text-ink-mid font-light">
                <p className="mb-3.5">We are a Marrakech-based hospitality and real estate company built for the international traveller and the global investor.</p>
                <p className="mb-3.5">Founded by a Nigerian entrepreneur who lives in Marrakech, we understand what it means to navigate this city as an outsider, and how to make sure you never feel like one.</p>
                <p className="mb-7">Whether you are visiting for four days or buying your first investment property, we are on the ground, we know every corner of this city, and we are available 24/7.</p>
              </div>
              <TextLink href="/about">Our Story</TextLink>
            </RV>
          </div>
        </div>
      </section>

      {/* ══ DUAL OFFER ══ */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Tourism */}
        <RV className="bg-navy p-7 sm:p-14 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0L60 15L60 45L30 60L0 45L0 15Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-lg mb-7 text-white">✦</div>
            <h3 className="font-display font-bold text-white leading-tight mb-3.5" style={{ fontSize: mob ? '2rem' : 'clamp(2rem,3vw,2.8rem)' }}>
              Experience<br />Marrakech
            </h3>
            <p className="text-base leading-relaxed text-white/55 font-light mb-8">
              Airport pickup. Apartments, riads &amp; villas. Car hire. Curated experiences. 24/7 concierge.<br /><br />
              Everything handled from arrival to departure.
            </p>
            <BtnGold href="/services">Explore Our Services →</BtnGold>
          </div>
        </RV>

        {/* Investment */}
        <RV delay={mob ? 0 : 0.15} className="bg-gold p-7 sm:p-14 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0L60 15L60 45L30 60L0 45L0 15Z' fill='none' stroke='%230F1E3C' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full border border-navy/15 flex items-center justify-center text-lg mb-7 text-navy">◈</div>
            <h3 className="font-display font-bold text-navy leading-tight mb-3.5" style={{ fontSize: mob ? '2rem' : 'clamp(2rem,3vw,2.8rem)' }}>
              Invest in<br />Marrakech
            </h3>
            <p className="text-base leading-relaxed text-navy/65 font-light mb-8">
              Source. Purchase. Furnish. Manage.<br />
              21% net annual returns. Full foreign ownership.<br /><br />
              We run the property. You collect the income.
            </p>
            {/* <a
              href="/invest"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm text-white font-body text-xs font-semibold tracking-widest uppercase no-underline bg-navy hover:bg-navy-deep transition-all duration-300"
            >
              Explore Investment →
            </a> */}
          </div>
        </RV>
      </section>

      {/* ══ WHY MARRAKECH ══ */}
      <section className="bg-cream-off py-16 sm:py-20 md:py-28" id="marrakech">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-center">

            {/* Copy */}
            <RV>
              <Label>Why Marrakech</Label>
              <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight text-navy mb-6" style={{ fontSize: mob ? '2rem' : 'clamp(2.2rem,3.5vw,3.5rem)' }}>
                The City Everyone<br />Is <em className="text-gold">Talking About.</em>
              </h2>
              <div className="border-t border-navy/10">
                {[
                  { strong: "Africa's most visited country", rest: " — 19.8 million tourists in 2025" },
                  { strong: "Ranked 6th best destination", rest: " in the world by Le Routard" },
                  { strong: "Host city for 2030 FIFA World Cup", rest: " — property prices rising now" },
                  { strong: "1,000 years of living history,", rest: " food, and culture — this is not a trend" },
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-3.5 py-4 border-b border-navy/10">
                    <span className="w-1.75 h-1.75 bg-gold flex-shrink-0 mt-1.75" style={{ transform: 'rotate(45deg)' }} />
                    <p className="text-base leading-relaxed text-ink-mid font-light">
                      <strong className="text-navy font-medium">{pt.strong}</strong>{pt.rest}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-display italic font-normal text-xl text-ink-muted leading-relaxed my-6 md:my-7">
                Marrakech is not a trend. It has been extraordinary for ten centuries.
              </p>
              <TextLink href="/marrakech">Discover Marrakech</TextLink>
            </RV>

            {/* Image */}
            <RV delay={mob ? 0 : 0.15}>
              <div className="relative">
                <div className="aspect-video md:aspect-[4/5] bg-[url('/site%20images/Couloir-Riad-Diamond-Marrakech.webp')] bg-center bg-cover rounded-lg overflow-hidden" />
                {!mob && <div className="absolute -bottom-5 -left-5 w-[90px] h-[90px] bg-gold-pale rounded-lg -z-10" />}
              </div>
            </RV>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="bg-navy py-16 sm:py-20 md:py-28" id="services">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-end mb-14">
            <RV>
              <Label>What We Do</Label>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight" style={{ fontSize: mob ? '2rem' : 'clamp(2.2rem,3.5vw,3.5rem)' }}>
                Everything You Need.<br /><em className="text-gold">Handled.</em>
              </h2>
            </RV>
            <RV delay={mob ? 0 : 0.15}>
              <p className="text-base leading-relaxed text-white/40 font-light">
                From the moment your plane lands to the moment it takes off. One company. One contact. No stress.
              </p>
            </RV>
          </div>

          <div className="border-t border-white/10">
            {[
              { n: '01', title: 'Airport Pickup & Drop-off', desc: 'Private car. Named driver. Flat rate. Cold water in the car.' },
              { n: '02', title: 'Apartments & Riads', desc: 'Personally vetted stays. From budget to boutique. All visited in person.' },
              { n: '03', title: 'Villas & Private Residences', desc: 'Exclusive villas with pools for families and groups.' },
              { n: '04', title: 'Car Hire', desc: 'Self-drive or with a driver. Clean vehicles. No hidden fees.' },
              { n: '05', title: 'Experiences & Day Trips', desc: 'Agafay Desert. Atlas Mountains. Hammam. Souk tours. All arranged.' },
              { n: '06', title: '24/7 Concierge', desc: 'One WhatsApp number. Any hour. Any question. Always answered.' },
            ].map((s, i) => (
              <RV key={s.n} delay={i * 0.05} className="flex items-center gap-4 md:gap-8 py-4 md:py-6 border-b border-white/10">
                <span className="font-display font-black text-2xl md:text-5xl text-white/10 leading-none flex-shrink-0 sm:w-14 md:w-28 text-right" style={{ fontSize: mob ? '2rem' : 'clamp(2.5rem,5vw,4.5rem)' }}>
                  {s.n}
                </span>
                <span className="font-body font-medium text-base md:text-xl text-white flex-1" style={{ fontSize: mob ? '1rem' : 'clamp(.95rem,1.6vw,1.2rem)' }}>
                  {s.title}
                </span>
                {!mob && (
                  <span className="text-sm text-white/35 font-light max-w-60">
                    {s.desc}
                  </span>
                )}
                <span className="text-gold text-xl flex-shrink-0">→</span>
              </RV>
            ))}
          </div>

          <RV className="text-center mt-12">
            <BtnGold href="/services">See All Services →</BtnGold>
          </RV>
        </div>
      </section>

      {/* ══ EVENTS ══ */}
      <section className="bg-cream py-16 sm:py-20 md:py-28" id="events">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 md:gap-0 mb-12">
            <RV>
              <Label>Events</Label>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-navy leading-tight" style={{ fontSize: mob ? '2rem' : 'clamp(2.2rem,3.5vw,3.5rem)' }}>
                Morocco<br />Never <em className="text-gold">Stops.</em>
              </h2>
            </RV>
            <RV delay={mob ? 0 : 0.15} className="w-full md:w-auto md:max-w-sm">
              <p className="text-base leading-relaxed text-ink-mid font-light mb-3.5">
                From world-class film festivals to the 2030 FIFA World Cup, there is always a reason to be in Marrakech.
              </p>
              <TextLink href="/events">See Upcoming Events</TextLink>
            </RV>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { image: '/site%20images/Sleep_GettyImages-1440978662_HR.avif', badge: 'Upcoming', date: 'Morocco + Spain + Portugal · 2030', title: 'FIFA World Cup 2030', desc: 'The biggest sporting event on earth is coming to Morocco. Marrakech is a host city. Over 1.2 million fans expected.' },
              { image: '/site%20images/featured-property-image-morocco-3.jpg', badge: 'Upcoming', date: 'May 7–10, 2026 · Marrakech', title: 'Caftan Week', desc: 'Traditional Moroccan kaftans meet contemporary fashion. One of the most visually spectacular events in the country.' },
              { image: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg', badge: 'Annual · July', date: 'Annual — July · El Badi Palace', title: 'Festival National des Arts Populaires', desc: 'Fire-eaters, acrobats, folk musicians inside the walls of a 16th-century palace. Free to attend.' },
            ].map((ev, i) => (
              <RV key={i} delay={i * 0.1} className="bg-cream-off rounded-lg overflow-hidden border border-navy/10 cursor-pointer group">
                <div className="aspect-video bg-center bg-cover relative overflow-hidden" style={{ backgroundImage: `url(${ev.image})` }}>
                  <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded">{ev.badge}</span>
                  <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium tracking-widest uppercase text-gold mb-2">{ev.date}</p>
                  <h4 className="font-display font-bold text-xl text-navy mb-2 leading-tight">{ev.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-mid font-light">{ev.desc}</p>
                </div>
              </RV>
            ))}
          </div>

          <RV className="text-center mt-12">
            <BtnGold href="/events">See All Events →</BtnGold>
          </RV>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-navy-deep py-20 sm:py-28 md:py-36 text-center relative overflow-hidden" id="contact">
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial-gradient pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(201,151,59,.07) 0%, transparent 68%)' }} />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 relative z-10">
          <RV>
            <div className="inline-flex items-center gap-3.5 mb-6">
              <span className="w-6 h-px bg-gold block" />
              <span className="text-xs font-medium tracking-widest uppercase text-gold">Get In Touch</span>
              <span className="w-6 h-px bg-gold block" />
            </div>
          </RV>
          <RV delay={0.1}>
            <h2 className="font-display font-bold text-2xl md:text-5xl text-white leading-tight mb-4" style={{ fontSize: mob ? '2.2rem' : 'clamp(2.4rem,5vw,5rem)' }}>
              Ready to Experience<br />Marrakech <em className="text-gold">the Right Way?</em>
            </h2>
          </RV>
          <RV delay={0.2}>
            <p className="text-base leading-relaxed text-white/40 max-w-xs mx-auto mb-10 font-light">
              Tell us your dates and what you need. We will handle the rest.
            </p>
          </RV>
          <RV delay={0.3} className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://wa.me/212647574605?text=Hi%2C%20I%27m%20ready%20to%20experience%20Marrakech%20the%20right%20way"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-[#25D366] text-white font-body text-xs font-semibold tracking-widest uppercase no-underline hover:bg-[#20BA5A] transition-all duration-300 hover:translate-y-[-2px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </a>
            <BtnGold href="/contact" variant="outline">
              Send an Enquiry →
            </BtnGold>
          </RV>
        </div>
      </section>

      <style>{`
        @keyframes rise { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bob  { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(8px); } }
        .bg-gradient-radial { background-image: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </div>
  );
}
