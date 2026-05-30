'use client';
import { useEffect, useState } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function RV({ children, delay = 0, className = '', style = {}, ...props }) {
  return (
    <div className={`rv ${className}`} style={{
      opacity: 0, transform: 'translateY(24px)',
      transition: `opacity .9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform .9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }} {...props}>
      {children}
    </div>
  );
}

function Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">{children}</span>
    </div>
  );
}

function WaBtn({ href, children, full = false }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       className={`inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200 ${full ? 'justify-center w-full' : ''}`}
       style={{ transform: hov ? 'translateY(-2px)' : 'none', background: hov ? '#1fb956' : '#25D366' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {children}
    </a>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────
const services = [
  {
    num: '01', icon: '✈',
    img: '/site%20images/airport.jpg',
    title: 'Airport Transfers',
    gradient: 'linear-gradient(145deg, #0b1829 0%, #1a2f58 100%)',
    tagline: 'You should not have to negotiate a taxi price after a long flight.',
    body: 'Your driver meets you at arrivals with a name sign. Cold water in the car. Flat rate. No surprises.',
    includes: ['Private vehicle, sedan or SUV', 'Meet and greet at arrivals hall', 'Flight tracking for delays', 'WhatsApp contact for live updates'],
    price: 'Marrakech from $25 · Casablanca from $100',
    cta: { label: 'Book Transfer', msg: "Hi%2C%20I%27d%20like%20to%20book%20an%20airport%20transfer" },
  },
  {
    num: '02', icon: '',
    img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg',
    title: 'Accommodation',
    gradient: 'linear-gradient(145deg, #1c0e06 0%, #5c2510 100%)',
    tagline: 'Every property we recommend has been visited in person.',
    body: 'No outdated photos. Every apartment and riad has been personally inspected for comfort, location, and wifi that actually works.',
    includes: ['Apartments in Gueliz and Medina', 'Traditional riads with authentic charm', 'Villas with private pools for groups', 'Flexible stays from 1 night to 3 months'],
    price: 'Starting from $60 per night',
    cta: { label: 'See Options', msg: "Hi%2C%20I%27d%20like%20to%20see%20accommodation%20options" },
  },
  {
    num: '03', icon: '',
    img: '/site%20images/mode-transport-CAN-2025-MAROC-1024x538.jpeg.webp',
    title: 'Transport & Tours',
    gradient: 'linear-gradient(145deg, #1a2f58 0%, #0f1e3c 60%, #2d1a0e 100%)',
    tagline: 'With a driver or without, your choice.',
    body: 'Explore Marrakech and beyond with reliable vehicles and guides who know where the real Marrakech is hiding.',
    includes: ['Self-drive or chauffeured hire', 'Agafay Desert and Atlas Mountains trips', 'Coastal drive to Essaouira', 'Mountain adventure to Imlil'],
    price: 'Self-drive from $50/day · With driver from $80/day',
    cta: { label: 'Book Transport', msg: "Hi%2C%20I%27d%20like%20to%20book%20transport" },
  },
  {
    num: '04', icon: '✦',
    img: '/site%20images/experience.jpg',
    title: 'Experiences',
    gradient: 'linear-gradient(145deg, #3d1a00 0%, #8b4513 50%, #c4572a 100%)',
    tagline: 'The real Marrakech is not on the tourist trail.',
    body: 'Local hammams, hidden restaurants, sunset camel rides, souk tours led by people who live here, not a script.',
    includes: ['Agafay Desert sunset + dinner under stars', 'Atlas Mountains Berber village tour', 'Authentic souk walking tour', 'Traditional hammam with argan oil massage'],
    price: 'From $20 per person',
    cta: { label: 'Plan Experience', msg: "Hi%2C%20I%27d%20like%20to%20plan%20an%20experience" },
  },
];

const packages = [
  {
    name: 'The Arrival',
    tag: null,
    summary: 'Airport pickup + 3 nights apartment + 24/7 concierge',
    desc: 'Perfect for first-timers who want a smooth, sorted start.',
    duration: '3 nights',
    price: 'From $350',
    featured: false,
  },
  {
    name: 'The Marrakech Experience',
    tag: 'Most Popular',
    summary: '4 nights riad + both-way transfers + souk tour + Agafay Desert dinner + hammam + 1 full day with driver',
    desc: 'The complete Marrakech experience, everything that matters, perfectly arranged.',
    duration: '4 nights',
    price: 'From $750 pp',
    featured: true,
  },
  {
    name: 'The Family Stay',
    tag: null,
    summary: 'Private villa with pool + airport transfers + dedicated driver + daily planning + grocery setup on arrival',
    desc: 'Everything a family needs to arrive, relax, and explore without a single stress.',
    duration: '5–7 nights',
    price: 'From $2,000',
    featured: false,
  },
  {
    name: 'The Group Getaway',
    tag: null,
    summary: 'Large riad or villa for 6–20 guests + group airport coordination + curated itinerary',
    desc: 'Built for groups who want the same great experience without the coordination headache.',
    duration: '3–5 nights',
    price: 'Custom quote',
    featured: false,
  },
  {
    name: 'The Luxe Edition',
    tag: null,
    summary: 'Premium villa + private chef dinner + 5-star spa + private car + personal concierge 24/7',
    desc: 'For those who want Marrakech at its absolute finest.',
    duration: 'Any duration',
    price: 'Custom quote',
    featured: false,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  useReveal();

  return (
    <div className="font-body overflow-x-hidden bg-cream-off text-ink">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden pb-20 pt-44 bg-navy-deep">
        {/* BG image */}
        <div className="absolute inset-0 bg-[url('/site%20images/image-home.jpg')] bg-center bg-cover opacity-35" />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/65 to-navy-deep/15" />
        <div className="absolute inset-0 opacity-[.05]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke='%23C9973B' stroke-width='0.5'%3E%3Cpath d='M50 0L100 25L100 75L50 100L0 75L0 25Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10" style={{ animation: 'rise .6s ease .2s both' }}>
            <a href="/" className="font-body text-xs text-white/30 no-underline tracking-wider hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20 text-xs">›</span>
            <span className="font-body text-xs text-gold tracking-wider">Services</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: 'rise .7s ease .3s both' }}>
              <span className="block w-8 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">What We Do</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[.95] mb-6"
                style={{ fontSize: 'clamp(2.8rem,7vw,6rem)', animation: 'rise .9s ease .4s both' }}>
              Everything You Need<br />in Marrakech.<br />
              <em className="text-gold">Handled.</em>
            </h1>

            <p className="font-body font-light text-white/55 leading-relaxed mb-10 max-w-xl"
               style={{ fontSize: '1.05rem', animation: 'rise .8s ease .6s both' }}>
              From the moment your plane lands to the moment it takes off.
              One company. One contact. No stress.
            </p>

            <div className="flex gap-3 flex-wrap" style={{ animation: 'rise .8s ease .75s both' }}>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
                Plan My Trip →
              </WaBtn>
              <a href="#packages"
                 className="inline-flex items-center gap-2 border border-white/22 hover:border-gold text-white hover:text-gold font-body text-xs font-normal tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="text-center mb-16">
            <Label>Process</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1 }}>
              How It Works
            </h2>
          </RV>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { step: '01', title: 'Tell Us What You Need', body: 'Send us your travel dates, group size, and what you are looking for. WhatsApp or the enquiry form, both work.' },
              { step: '02', title: 'We Send You a Plan', body: 'Within 24 hours you receive a personalised plan, accommodation options, transfers, activities, all clearly priced.' },
              { step: '03', title: 'You Show Up and Enjoy', body: 'You confirm. We arrange everything. Your only job is to arrive and experience the city.' },
            ].map((s, i) => (
              <RV key={s.step} delay={i * 0.12}
                  className="relative overflow-hidden rounded-sm p-10 md:p-12"
                  style={{ background: i === 1 ? '#0F1E3C' : '#FDFAF5', border: i !== 1 ? '1px solid rgba(15,30,60,.07)' : 'none' }}>
                {/* Watermark */}
                <div className="absolute -top-3 right-3 font-display font-black leading-none select-none pointer-events-none"
                     style={{ fontSize: '8rem', color: i === 1 ? 'rgba(255,255,255,.03)' : 'rgba(15,30,60,.04)' }}>
                  {s.step}
                </div>
                <div className="relative z-10">
                  {/* Step circle */}
                  <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center mb-7 font-display font-bold text-navy text-sm flex-shrink-0">
                    {s.step}
                  </div>
                  <h3 className="font-display font-bold mb-4 leading-tight"
                      style={{ fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: i === 1 ? '#FFFFFF' : '#0F1E3C' }}>
                    {s.title}
                  </h3>
                  <p className="font-body font-light leading-relaxed"
                     style={{ fontSize: '.98rem', lineHeight: 1.75, color: i === 1 ? 'rgba(255,255,255,.5)' : '#3E3328' }}>
                    {s.body}
                  </p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDIVIDUAL SERVICES ══ */}
      <section className="bg-cream-off py-24 md:py-32" id="services-list">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="mb-16">
            <Label>Our Services</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1 }}>
              Everything, <em className="text-gold">Individually.</em>
            </h2>
          </RV>

          <div className="flex flex-col gap-2">
            {services.map((svc, i) => {
              const even = i % 2 === 0;
              return (
                <RV key={svc.num} delay={0.05}>
                  {/* Mobile: stacked. Desktop: alternating side-by-side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm min-h-[480px]">

                    {/* Image panel */}
                    <div className={`relative flex flex-col justify-end p-8 md:p-10 min-h-[280px] md:min-h-0 ${!even ? 'md:order-2' : ''}`}
                         style={{ background: svc.gradient }}>
                      {/* Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <img src={svc.img} alt={svc.title}
                             className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0" style={{ background: svc.gradient, opacity: .75 }} />
                      </div>
                      {/* Number watermark */}
                      <div className="absolute top-5 left-5 font-display font-black text-white/06 leading-none select-none"
                           style={{ fontSize: '5rem' }}>{svc.num}</div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-2xl mb-3">{svc.icon}</div>
                        <h3 className="font-display font-bold text-white mb-2 leading-tight"
                            style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
                          {svc.title}
                        </h3>
                        <p className="font-body text-xs font-light text-white/45 tracking-wide">{svc.price}</p>
                      </div>
                    </div>

                    {/* Copy panel */}
                    <div className={`bg-navy flex flex-col justify-center p-8 md:p-12 ${!even ? 'md:order-1' : ''}`}>
                      <p className="font-display italic text-gold leading-snug mb-5"
                         style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
                        {svc.tagline}
                      </p>
                      <p className="font-body font-light text-white/55 leading-relaxed mb-7"
                         style={{ fontSize: '.98rem', lineHeight: 1.8 }}>
                        {svc.body}
                      </p>

                      {/* Includes */}
                      <div className="mb-8">
                        <p className="font-body text-xs font-medium tracking-[.18em] uppercase text-white/30 mb-4">
                          What is included
                        </p>
                        <div className="flex flex-col gap-3">
                          {svc.includes.map((item, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-gold flex-shrink-0 mt-2"
                                    style={{ transform: 'rotate(45deg)' }} />
                              <span className="font-body font-light text-white/50 text-sm leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <WaBtn href={`https://wa.me/212647574605?text=${svc.cta.msg}`}>
                        {svc.cta.label}
                      </WaBtn>
                    </div>
                  </div>
                </RV>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PACKAGES ══ */}
      <section className="bg-cream py-24 md:py-32" id="packages">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="mb-16">
            <Label>Packages</Label>
            <h2 className="font-display font-bold text-navy mb-3"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1 }}>
              Our Packages
            </h2>
            <p className="font-body font-light text-ink-mid" style={{ fontSize: '1rem' }}>
              Not sure what you need? Start here.
            </p>
          </RV>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg, i) => (
              <RV key={pkg.name} delay={i * 0.08}>
                <div className="flex flex-col rounded-sm p-10 md:p-11 relative h-full"
                     style={{
                       background: pkg.featured ? '#0F1E3C' : '#FDFAF5',
                       border: pkg.featured ? '2px solid #C9973B' : '1px solid rgba(15,30,60,.08)',
                     }}>
                  {/* Badge */}
                  {pkg.tag && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy font-body text-xs font-bold tracking-[.12em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                      ★ {pkg.tag}
                    </div>
                  )}

                  {/* Name */}
                  <h3 className="font-display font-bold mb-4 leading-tight"
                      style={{ fontSize: 'clamp(1.2rem,2vw,1.5rem)', color: pkg.featured ? '#FFFFFF' : '#0F1E3C' }}>
                    {pkg.name}
                  </h3>

                  {/* Summary */}
                  <p className="font-body font-light leading-relaxed mb-3 flex-1"
                     style={{ fontSize: '.92rem', lineHeight: 1.75, color: pkg.featured ? 'rgba(255,255,255,.55)' : '#3E3328' }}>
                    {pkg.summary}
                  </p>

                  {/* Desc italic */}
                  <p className="font-body font-light italic mb-7"
                     style={{ fontSize: '.88rem', color: pkg.featured ? 'rgba(255,255,255,.35)' : '#7A6E61' }}>
                    {pkg.desc}
                  </p>

                  {/* Divider */}
                  <div className="h-px mb-5"
                       style={{ background: pkg.featured ? 'rgba(255,255,255,.07)' : 'rgba(15,30,60,.07)' }} />

                  {/* Duration + Price */}
                  <div className="flex justify-between items-center mb-7">
                    <span className="font-body text-xs font-medium tracking-[.14em] uppercase"
                          style={{ color: pkg.featured ? 'rgba(255,255,255,.35)' : '#7A6E61' }}>
                      {pkg.duration}
                    </span>
                    <span className="font-display font-bold text-gold"
                          style={{ fontSize: 'clamp(1.2rem,2vw,1.5rem)' }}>
                      {pkg.price}
                    </span>
                  </div>

                  <WaBtn
                    href={`https://wa.me/212647574605?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package`}
                    full>
                    Book This Package
                  </WaBtn>
                </div>
              </RV>
            ))}
          </div>

          {/* Package footer */}
          <RV className="mt-10">
            <div className="bg-navy rounded-sm p-10 md:p-14 text-center">
              <h3 className="font-display font-bold text-white mb-4"
                  style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
                Not sure which package fits?
              </h3>
              <p className="font-body font-light text-white/50 leading-relaxed mb-8 max-w-lg mx-auto"
                 style={{ fontSize: '1rem' }}>
                Send us a WhatsApp with your dates and group size. We will build a plan for you within 24 hours.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20help%20building%20my%20Marrakech%20package">
                  Build My Package
                </WaBtn>
                <a href="/contact"
                   className="inline-flex items-center gap-2 border border-white/20 hover:border-gold text-white hover:text-gold font-body text-xs font-normal tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200">
                  Talk to Us First
                </a>
              </div>
            </div>
          </RV>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="bg-navy-deep py-28 md:py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[.04]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(201,151,59,.07) 0%, transparent 68%)' }} />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 relative z-10">
          <RV>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="block w-7 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">Ready?</span>
              <span className="block w-7 h-px bg-gold" />
            </div>
          </RV>
          <RV delay={0.1}>
            <h2 className="font-display font-bold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem,5vw,4.5rem)' }}>
              Your Marrakech is<br />
              <em className="text-gold">One Message Away.</em>
            </h2>
          </RV>
          <RV delay={0.2}>
            <p className="font-body font-light text-white/40 leading-relaxed max-w-sm mx-auto mb-10"
               style={{ fontSize: '1rem' }}>
              Tell us your dates and what you need. We will handle the rest.
            </p>
          </RV>
          <RV delay={0.3} className="flex justify-center gap-3 flex-wrap">
            <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
              WhatsApp Us Now
            </WaBtn>
            <a href="/contact"
               className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-body text-xs font-semibold tracking-[.14em] uppercase px-8 py-4 rounded-sm no-underline transition-all duration-200">
              Send an Enquiry →
            </a>
          </RV>
        </div>
      </section>

      <style>{`
        @keyframes rise { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}