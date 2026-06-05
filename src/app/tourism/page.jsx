'use client';
import { useEffect, useState } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');

    els.forEach(el => {
      el.style.transition = `opacity .85s cubic-bezier(0.16,1,0.3,1) ${el.dataset.delay || 0}s, transform .85s cubic-bezier(0.16,1,0.3,1) ${el.dataset.delay || 0}s`;
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
      {...props}>
      {children}
    </div>

  );
}

function Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-7 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-2xs font-medium tracking-widest uppercase text-gold">
        {children}
      </span>
    </div>
  );
}

function WaBtn({ href, children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold tracking-widest uppercase no-underline rounded-none transition-all duration-200"
       style={{
         transform: hov ? 'translateY(-2px)' : 'translateY(0)',
         ...style,
       }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {children}
    </a>
  );
}

export default function TourismPage() {
  useReveal();

  const services = [
    {
      num: '01',
      title: 'Villa & Apartment Rentals',
      sub: 'Short-term stays in Vialane-managed properties across Marrakech. Fully furnished, professionally maintained, available for nightly or weekly booking. Medina riads, modern Gueliz apartments, Palmeraie villas.',
      img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg',
    },
    {
      num: '02',
      title: 'Car Rental',
      sub: 'Curated vehicle hire for guests and visitors. Clean fleet, flexible pickup, available for airport transfers or full-trip use. Self-drive or with driver.',
      img: '/site%20images/mode-transport-CAN-2025-MAROC-1024x538.jpeg.webp',
    },
    {
      num: '03',
      title: 'Airport Transfers',
      sub: 'Private car. Named driver. Flat rate. Cold water in the car. Flight tracking for delays. WhatsApp contact for live updates.',
      img: '/site%20images/airport.jpg',
    },
    {
      num: '04',
      title: 'Guided Experiences',
      sub: 'Agafay Desert sunset. Atlas Mountains day trip. Authentic souk walking tour. Traditional hammam with argan oil massage. All arranged by us.',
      img: '/site%20images/experience.jpg',
    },
    {
      num: '05',
      title: '24/7 Concierge',
      sub: 'One WhatsApp number. Any hour. Any question. Always answered. Restaurant reservations, last-minute bookings, emergency assistance.',
      img: '/site%20images/featured-property-image-morocco-3.jpg',
    },
    {
      num: '06',
      title: 'Event Planning',
      sub: 'Private dinners in riads. Group celebrations. Corporate retreats. We handle location, catering, and coordination from start to finish.',
      img: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg',
    },
  ];

  return (
    <div className="font-body text-ink-mid bg-cream-off overflow-x-hidden">

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
                <span className="text-xs font-medium tracking-widest uppercase text-gold">Tourism · Marrakech</span>
              </div>

              <div className="animate-rise" style={{ animation: 'rise 1s ease .5s both' }}>
                <h1 className="font-display font-black leading-none tracking-tight text-white mb-2 md:mb-4" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)' }}>
                  Experience<br />Marrakech.
                </h1>
                <p className="font-display font-normal italic text-gold leading-none" style={{ fontSize: 'clamp(1.4rem,2.5vw,2.2rem)' }}>
                  Your Stay, Handled.
                </p>
              </div>

              <p className="text-white/65 text-sm md:text-base leading-relaxed font-normal max-w-xl my-6 md:my-8 animate-rise" style={{ animation: 'rise .8s ease .7s both' }}>
                Marrakech is one of the world&apos;s great travel destinations. Whether you&apos;re visiting for the first time or returning for more, Vialane Homes gives you access to the best the city has to offer , from handpicked villas and apartments to seamless transport and curated experiences.
              </p>

              <div className="flex gap-3 flex-wrap animate-rise" style={{ animation: 'rise .8s ease .9s both' }}>
                <a href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-body text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-none no-underline transition-all duration-200 hover:-translate-y-0.5">
                  Book Your Stay →
                </a>
                <a href="#our-services" className="inline-flex items-center gap-2 border border-white/22 hover:border-gold text-white hover:text-gold font-body text-xs font-normal tracking-widest uppercase px-7 py-4 rounded-none no-underline transition-all duration-200">
                  Our Services
                </a>
              </div>
            </div>

            {/* Right stats panel , desktop only */}
            <div className="hidden md:flex flex-col gap-8 pl-12 border-l border-white/10 animate-rise" style={{ animation: 'rise .8s ease .65s both' }}>
              <div>
                <div className="font-display font-bold text-4xl text-gold leading-none mb-1.5">19.8M</div>
                <div className="text-xs font-normal tracking-[.12em] text-white/35 leading-relaxed">Tourists visited Morocco in 2025</div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-gold leading-none mb-1.5">40%</div>
                <div className="text-xs font-normal tracking-[.12em] text-white/35 leading-relaxed">Of Morocco&apos;s overnight stays are in Marrakech</div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-gold leading-none mb-1.5">2030</div>
                <div className="text-xs font-normal tracking-[.12em] text-white/35 leading-relaxed">FIFA World Cup , Morocco is host</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 animate-bob" style={{ animation: 'bob 2.2s ease-in-out infinite' }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
          </svg>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 md:py-24 bg-cream-off">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          <RV>
            <Label>Why Marrakech</Label>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-navy mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}>
              Why Marrakech.<br />
              <em className="text-gold">Why Right Now.</em>
            </h2>

            <div className="text-base md:text-lg text-ink-mid leading-relaxed mb-6 space-y-5">
              <p>Morocco just overtook Egypt to become Africa&apos;s most visited country. 19.8 million tourists arrived in 2025 , a new record.</p>
              <p>Marrakech alone accounts for 40% of all overnight stays in Morocco. The country hosted AFCON 2025 across six world-class cities. The world watched.</p>
              <p>In 2030, Morocco co-hosts the FIFA World Cup with Spain and Portugal. $9.6 billion in high-speed rail. A new airport expanding from 9 million to 14.2 million passengers.</p>
              <p className="font-semibold text-navy">The city is being built for the world. This is the moment to be here. Not after the world has fully arrived. Now.</p>
            </div>
          </RV>

          <RV delay={0.15}>
            <div className="grid grid-cols-2 gap-4 h-[clamp(300px,50vw,500px)]">
              <div className="bg-navy rounded-none overflow-hidden">
                <img src="/morocco_architecture.jpg" alt="Morocco Architecture" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-gold rounded-none flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-3xl md:text-5xl font-bold text-navy">19.8M</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy mt-2">Tourists in 2025</div>
                  </div>
                </div>
                <div className="bg-navy-deep rounded-none flex-1 overflow-hidden">
                  <img src="/morocco_desert.jpg" alt="Desert" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </div>
          </RV>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RV className="text-center mb-16">
            <Label>Our Services</Label>
            <h2 className="font-display font-bold text-2xl md:text-5xl text-navy" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>Everything You Need.<br /><em className="text-gold">Handled.</em></h2>
            <p className="text-base text-ink-mid font-light mt-4 max-w-xl mx-auto">From airport pickup to villa stays, car hire to curated experiences , one company, one contact, no stress.</p>
          </RV>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <RV key={s.num} delay={i * 0.08} className="bg-white border border-navy/08 p-8 md:p-10 flex flex-col">
                <div className="aspect-video bg-navy overflow-hidden mb-6">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-60" />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">Service {s.num}</span>
                <h3 className="font-display font-bold text-xl text-navy mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-mid font-light flex-1">{s.sub}</p>
                <div className="mt-6">
                  <a href="/contact" className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-gold no-underline border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-200">
                    Enquire →
                  </a>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Info Section */}
      <section id="visa-info" className="py-20 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <RV className="text-center mb-12">
            <Label>Travel Info</Label>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-navy" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Can I Visit Morocco?</h2>
          </RV>

          <RV delay={0.1} className="bg-white p-10 md:p-14 rounded-none border border-navy/6 shadow-xl">

            <div className="mb-10">
              <h3 className="font-body font-bold text-base md:text-lg text-navy mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" />
                For Nigerian Passport Holders
              </h3>
              <p className="text-base text-ink-mid leading-relaxed mb-4">You need a visa to visit Morocco. Two options:</p>
              <ul className="list-none space-y-3 text-base text-ink-mid leading-relaxed">
                <li><strong className="text-navy">First option : Standard Tourist Visa:</strong><br />
                  Apply at the Moroccan embassy in Lagos or Abuja. Allows up to 90 days. Processing: approx 10 business days. Documents: valid passport, photos, bank statement, return flight, accommodation proof.</li>
                <li><strong className="text-navy">Second option : eVisa:</strong><br />
                  If you hold a valid UK, US, Schengen, Canadian, or Australian residency permit or multi-entry visa, you can apply entirely online. No embassy visit required. Approval by email.</li>
              </ul>
              <p className="text-sm text-ink-muted mt-4 italic">We help our clients prepare their booking confirmation letter as part of our service just ask.</p>
            </div>

            <div className="h-px bg-navy/8 my-8" />

            <div>
              <h3 className="font-body font-bold text-base md:text-lg text-navy mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" />
                For UK, European, American &amp; Gulf Visitors
              </h3>
              <p className="text-base text-ink-mid leading-relaxed mb-6">Most nationalities enter Morocco visa-free for up to 90 days. Your passport must be valid for at least 6 months from entry date.</p>
              <a className="group inline-flex items-center gap-3 px-8 py-4  bg-green-500 text-white font-semibold text-lg shadow-lg hover:bg-green-600 transition-all duration-300 pl-5"
                      href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20check%20visa%20requirements%20for%20my%20passport">
                      <i className="fab fa-whatsapp text-2xl"></i>
                      <span>Chat with a Visa Expert</span>
                      <span className="transform group-hover:translate-x-1 transition-transform "> → </span>
              </a>
            </div>
          </RV>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-deep py-20 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-4" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <RV>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-7 h-px bg-gold block" />
              <span className="font-body text-2xs font-medium tracking-widest uppercase text-gold">Ready?</span>
              <span className="w-7 h-px bg-gold block" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4" style={{ lineHeight: 1.1 }}>
              Ready to Experience<br />Marrakech <em className="text-gold">the Right Way?</em>
            </h2>
            <p className="text-base md:text-lg text-white/40 font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you are visiting for the first time or returning for more.<br />We handle everything from arrival to departure.
            </p>
            <div className="flex gap-4 justify-center flex-wrap p-5">
              <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20book%20a%20stay%20in%20Marrakecht" className="inline-flex items-center gap-2 border border-white/20 text-white font-body text-xs font-normal tracking-widest uppercase py-3.5 px-7 rounded-none no-underline transition-colors hover:border-gold">
                 Book Your Stay →
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white font-body text-xs font-normal tracking-widest uppercase py-3.5 px-7 rounded-none no-underline transition-colors hover:border-gold">
                Get in Touch →
              </a>
            </div>
          </RV>
        </div>
      </section>
    </div>
  );
}