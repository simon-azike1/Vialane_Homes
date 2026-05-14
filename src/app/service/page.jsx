'use client';
import { useEffect, useState } from 'react';

const NAVY   = '#0F1E3C';
const NAVYD  = '#080F1E';
const GOLD   = '#C9973B';
const GOLDL  = '#DDB96A';
const GOLDP  = '#F2E4C4';
const CREAM  = '#F6F1E9';
const CREAMOF= '#FDFAF5';
const INK    = '#18110A';
const INKM   = '#3E3328';
const INKMU  = '#7A6E61';
const WHITE  = '#FFFFFF';
const WA     = '#25D366';

// ── Scroll reveal ──
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9;
      if (inView) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9;
      if (!inView) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function RV({ children, delay = 0, style = {}, tag = 'div', ...props }) {
  const Tag = tag;
  return (
    <Tag className="rv" style={{
      opacity: 1,
      transform: 'translateY(0)',
      transition: `opacity .85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform .85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }} {...props}>
      {children}
    </Tag>
  );
}

function Label({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <span style={{ display: 'block', width: 30, height: 1, background: GOLD, flexShrink: 0 }} />
      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>
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
       style={{
         display: 'inline-flex', alignItems: 'center', gap: 8,
         background: hov ? '#1fb956' : WA, color: WHITE,
         fontFamily: "'Bricolage Grotesque', sans-serif",
         fontSize: '.75rem', fontWeight: 600,
         letterSpacing: '.14em', textTransform: 'uppercase',
         padding: '13px 28px', borderRadius: 2, textDecoration: 'none',
         transition: 'background .2s, transform .2s',
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

function GoldBtn({ href, children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       style={{
         display: 'inline-flex', alignItems: 'center', gap: 8,
         background: hov ? GOLDL : GOLD, color: NAVY,
         fontFamily: "'Bricolage Grotesque', sans-serif",
         fontSize: '.75rem', fontWeight: 600,
         letterSpacing: '.14em', textTransform: 'uppercase',
         padding: '13px 28px', borderRadius: 2, textDecoration: 'none',
         transition: 'background .2s, transform .2s',
         transform: hov ? 'translateY(-2px)' : 'translateY(0)',
         ...style,
       }}>
      {children}
    </a>
  );
}

// ── Individual service data ──
const services = [
  {
    num: '01',
    img: '/site%20images/airport.jpg',
    title: 'Airport Transfers',
    gradient: 'linear-gradient(135deg, #0b1829 0%, #1a2f58 100%)',
    tagline: 'Smooth arrivals, seamless departures.',
    body: `Your driver meets you at arrivals with a name sign, cold water waiting. Flat rates, no negotiation needed.`,
    includes: [
      'Private vehicle (sedan or SUV)',
      'Meet and greet service',
      'Flight tracking for delays',
      'Direct transfer to your accommodation',
    ],
    price: 'Marrakech: $25 • Casablanca: $100',
    cta: { label: 'Book Transfer', type: 'wa', msg: "Hi%2C%20I%27d%20like%20to%20book%20an%20airport%20transfer" },
  },
  {
    num: '02',
    img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg',
    title: 'Accommodation',
    gradient: 'linear-gradient(135deg, #1c0e06 0%, #5c2510 100%)',
    tagline: 'Handpicked places we have actually visited.',
    body: `No outdated photos. Every apartment and riad has been personally inspected for comfort, location, and wifi that works.`,
    includes: [
      'Apartments in Gueliz and Medina',
      'Traditional riads with authentic charm',
      'Villas with private pools for groups',
      'Flexible stays from 1 night to 3 months',
    ],
    price: 'From $60/night',
    cta: { label: 'See Options', type: 'wa', msg: "Hi%2C%20I%27d%20like%20to%20see%20accommodation%20options" },
  },
  {
    num: '03',
    img: '/site%20images/mode-transport-CAN-2025-MAROC-1024x538.jpeg.webp',
    title: 'Transport & Tours',
    gradient: 'linear-gradient(135deg, #1a2f58 0%, #0f1e3c 60%, #2d1a0e 100%)',
    tagline: 'With driver or self-drive, your call.',
    body: `Explore Marrakech and beyond with reliable vehicles and knowledgeable guides who know the hidden gems.`,
    includes: [
      'Vehicle hire with or without driver',
      'Desert trips to Agafay and Atlas',
      'Coastal drive to Essaouira',
      'Mountain adventures in Imlil',
    ],
    price: 'Self-drive from $50/day • With driver from $80/day',
    cta: { label: 'Book Transport', type: 'wa', msg: "Hi%2C%20I%27d%20like%20to%20book%20transport" },
  },
  {
    num: '04',
    img: '/site%20images/experience.jpg',
    title: 'Experiences',
    gradient: 'linear-gradient(135deg, #3d1a00 0%, #8b4513 50%, #c4572a 100%)',
    tagline: 'Beyond the tourist trail.',
    body: `Secret spots the guidebooks miss: local hammams, hidden restaurants, and sunset camel rides under infinite stars.`,
    includes: [
      'Agafay Desert sunset experience',
      'Atlas Mountains Berber village tour',
      'Authentic souk walking tour',
      'Traditional hammam with argan oil massage',
    ],
    price: 'From $20 per person',
    cta: { label: 'Plan Experience', type: 'wa', msg: "Hi%2C%20I%27d%20like%20to%20plan%20an%20experience" },
  },
];

// ── Package data ──
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
    summary: '4 nights riad + both-way airport transfers + souk walking tour + Agafay Desert dinner + traditional hammam + 1 full day with driver',
    desc: 'The complete Marrakech experience — everything that matters, perfectly arranged.',
    duration: '4 nights',
    price: 'From $750 per person',
    featured: true,
  },
  {
    name: 'The Family Stay',
    tag: null,
    summary: 'Private villa with pool + airport transfers + dedicated driver + daily activity planning + grocery setup on arrival',
    desc: 'Everything a family needs to arrive, relax, and explore without a single stress.',
    duration: '5–7 nights',
    price: 'From $2,000',
    featured: false,
  },
  {
    name: 'The Group Getaway',
    tag: null,
    summary: 'Large riad or villa for 6–20 guests + group airport coordination + curated group itinerary + group WhatsApp management',
    desc: 'Built for groups who want the same experience without the coordination headache.',
    duration: '3–5 nights',
    price: 'Custom quote',
    featured: false,
  },
  {
    name: 'The Luxe Edition',
    tag: null,
    summary: 'Premium private villa + private chef dinner + 5-star spa day + private car for the full stay + personal concierge assigned 24/7',
    desc: 'For those who want Marrakech at its absolute finest.',
    duration: 'Any duration',
    price: 'Custom quote',
    featured: false,
  },
];

export default function ServicesPage() {
  useReveal();

  return (
    <div className="services-page-wrapper" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", overflowX: 'hidden', width: '100%', boxSizing: 'border-box' }}>
        {/* ══ HERO ══ */}
        <section className="hero-section" style={{
          position: 'relative',
          background: 'url("/site%20images/image-home.jpg") center/cover no-repeat',
          padding: '160px 0 100px',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
          {/* Content container */}
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 760 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, animation: 'rise .6s ease .2s both' }}>
              <a href="/" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.72rem', color: 'rgba(255,255,255,.35)', textDecoration: 'none', letterSpacing: '.1em' }}>Home</a>
              <span style={{ color: 'rgba(255,255,255,.2)', fontSize: '.72rem' }}>›</span>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.72rem', color: GOLD, letterSpacing: '.1em' }}>Services</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, animation: 'rise .7s ease .3s both' }}>
              <span style={{ width: 32, height: 1, background: GOLD, display: 'block' }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>What We Do</span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, lineHeight: 1.0,
              color: WHITE, marginBottom: 20,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              animation: 'rise .9s ease .4s both',
            }}>
              Everything You Need<br />
              in Marrakech.<br />
              <em style={{ color: GOLD }}>Handled.</em>
            </h1>

            <p style={{
              fontSize: '1.1rem', lineHeight: 1.8,
              color: 'rgba(255,255,255,.5)', fontWeight: 300,
              maxWidth: 560, marginBottom: 40,
              animation: 'rise .8s ease .6s both',
            }}>
              From the moment your plane lands to the moment it takes off.<br />
              One company. One contact. No stress.
            </p>

             <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'rise .8s ease .75s both' }}>
               <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
                 Plan My Trip →
               </WaBtn>
              <a href="#packages" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,.22)', color: WHITE,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.75rem', fontWeight: 400,
                letterSpacing: '.14em', textTransform: 'uppercase',
                padding: '13px 28px', borderRadius: 2, textDecoration: 'none',
              }}>
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="how-section" style={{ background: CREAM, padding: '100px 0' }}>
        <div className="section-container">
          <RV style={{ textAlign: 'center', marginBottom: 64 }}>
            <Label>Process</Label>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2rem,3.5vw,3rem)', color: NAVY, lineHeight: 1.1 }}>
              How It Works
            </h2>
          </RV>

          <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              {
                step: '01',
                title: 'Tell Us What You Need',
                body: 'Send us your travel dates, group size, and what you are looking for. WhatsApp or the enquiry form — both work.',
              },
              {
                step: '02',
                title: 'We Send You a Plan',
                body: 'Within 24 hours, you receive a personalised Marrakech plan. Accommodation options, transfers, activities — all clearly priced.',
              },
              {
                step: '03',
                title: 'You Show Up and Enjoy',
                body: 'You confirm. We arrange everything. Your only job is to arrive and experience the city.',
              },
            ].map((s, i) => (
              <RV key={s.step} delay={i * 0.12} style={{
                background: i === 1 ? NAVY : CREAMOF,
                padding: '56px 48px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Big background number */}
                <div style={{
                  position: 'absolute', top: -16, right: 16,
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900, fontSize: '8rem', lineHeight: 1,
                  color: i === 1 ? 'rgba(255,255,255,.04)' : 'rgba(15,30,60,.04)',
                  userSelect: 'none', pointerEvents: 'none',
                }}>{s.step}</div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Gold circle number */}
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: GOLD, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: 24,
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700, fontSize: '1rem', color: NAVY,
                  }}>{s.step}</div>

                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700, fontSize: '1.5rem',
                    color: i === 1 ? WHITE : NAVY,
                    marginBottom: 14, lineHeight: 1.2,
                  }}>{s.title}</h3>

                  <p style={{
                    fontSize: '1rem', lineHeight: 1.75,
                    color: i === 1 ? 'rgba(255,255,255,.55)' : INKM,
                    fontWeight: 300,
                  }}>{s.body}</p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

{/* ══ INDIVIDUAL SERVICES ══ */}
      <section className="services-list-section" style={{ background: CREAMOF, padding: '100px 0' }} id="services-list">
        <div className="section-container">
          <RV style={{ marginBottom: 72 }}>
            <Label>Our Services</Label>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2rem,3.5vw,3rem)', color: NAVY, lineHeight: 1.1 }}>
              Everything, <em style={{ color: GOLD }}>Individually.</em>
            </h2>
          </RV>

          {services.map((svc, i) => {
            const isEven = i % 2 === 0;
            return (
              <RV key={svc.num} delay={0} className="service-row" style={{
                display: 'grid',
                gridTemplateColumns: '420px 1fr',
                minHeight: 440,
                overflow: 'hidden',
                borderRadius: '2px',
                marginBottom: '12px',
              }}>
                {isEven ? (
                   <>
                     <div style={{ background: svc.gradient, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 40 }}>
                       <div style={{ position: 'absolute', top: 24, left: 24 }}>
                         <div style={{
                           fontFamily: "'Playfair Display', serif",
                           fontWeight: 900, fontSize: '4rem',
                           color: 'rgba(255,255,255,.08)', lineHeight: 1,
                         }}>{svc.num}</div>
                       </div>
                       <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: 16 }} />
                       <h3 style={{
                         fontFamily: "'Playfair Display', serif",
                         fontWeight: 700, fontSize: '1.9rem',
                         color: WHITE, lineHeight: 1.15, marginBottom: 8,
                       }}>{svc.title}</h3>
                       <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', fontWeight: 300, letterSpacing: '.04em' }}>{svc.price}</p>
                     </div>
                    <div style={{ background: NAVY, padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic', fontWeight: 400,
                        fontSize: '1.25rem', color: GOLD,
                        lineHeight: 1.5, marginBottom: 16,
                      }}>{svc.tagline}</p>
                      <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,.55)', fontWeight: 300, marginBottom: 28 }}>
                        {svc.body}
                      </p>
                      <div style={{ marginBottom: 32 }}>
                        <p style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 14 }}>
                          What is included
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {svc.includes.map((item, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                              <span style={{ width: 6, height: 6, background: GOLD, transform: 'rotate(45deg)', flexShrink: 0, marginTop: 7 }} />
                              <span style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.5)', fontWeight: 300, lineHeight: 1.6 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <WaBtn href={`https://wa.me/212647574605?text=${svc.cta.msg}`}>
                        {svc.cta.label}
                      </WaBtn>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ background: NAVY, padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic', fontWeight: 400,
                        fontSize: '1.25rem', color: GOLD,
                        lineHeight: 1.5, marginBottom: 16,
                      }}>{svc.tagline}</p>
                      <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,.55)', fontWeight: 300, marginBottom: 28 }}>
                        {svc.body}
                      </p>
                      <div style={{ marginBottom: 32 }}>
                        <p style={{ fontSize: '.68rem', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 14 }}>
                          What is included
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {svc.includes.map((item, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                              <span style={{ width: 6, height: 6, background: GOLD, transform: 'rotate(45deg)', flexShrink: 0, marginTop: 7 }} />
                              <span style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.5)', fontWeight: 300, lineHeight: 1.6 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <WaBtn href={`https://wa.me/212647574605?text=${svc.cta.msg}`}>
                        {svc.cta.label}
                      </WaBtn>
                     </div>
                     <div style={{ background: svc.gradient, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 40 }}>
                       <div style={{ position: 'absolute', top: 24, right: 24 }}>
                         <div style={{
                           fontFamily: "'Playfair Display', serif",
                           fontWeight: 900, fontSize: '4rem',
                           color: 'rgba(255,255,255,.08)', lineHeight: 1,
                         }}>{svc.num}</div>
                       </div>
                       <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: 16 }} />
                       <h3 style={{
                         fontFamily: "'Playfair Display', serif",
                         fontWeight: 700, fontSize: '1.9rem',
                         color: WHITE, lineHeight: 1.15, marginBottom: 8,
                       }}>{svc.title}</h3>
                       <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.5)', fontWeight: 300, letterSpacing: '.04em' }}>{svc.price}</p>
                     </div>
                   </>
)}
              </RV>
            );
          })}
        </div>
      </section>

      {/* ══ PACKAGES ══ */}
      <section className="packages-section" style={{ background: CREAM, padding: '100px 0' }} id="packages">
        <div className="section-container">
          <RV style={{ marginBottom: 16 }}>
            <Label>Packages</Label>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2rem,3.5vw,3rem)', color: NAVY, lineHeight: 1.1, marginBottom: 10 }}>
              Our Packages
            </h2>
            <p style={{ fontSize: '1rem', color: INKM, fontWeight: 300, lineHeight: 1.7 }}>
              Not sure what you need? Start here.
            </p>
          </RV>

          <div className="pkg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 56 }}>
            {packages.map((pkg, i) => (
              <RV key={pkg.name} delay={i * 0.09} style={{
                background: pkg.featured ? NAVY : CREAMOF,
                border: pkg.featured ? `2px solid ${GOLD}` : '1px solid rgba(15,30,60,.1)',
                borderRadius: 3, padding: '44px 40px',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
                gridColumn: i === 3 || i === 4 ? 'span 1' : undefined,
              }}>
                {/* Most popular badge */}
                {pkg.tag && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: GOLD, color: NAVY,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '.62rem', fontWeight: 700,
                    letterSpacing: '.14em', textTransform: 'uppercase',
                    padding: '5px 16px', borderRadius: 20,
                    whiteSpace: 'nowrap',
                  }}>
                    ★ {pkg.tag}
                  </div>
                )}

                {/* Package name */}
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, fontSize: '1.5rem',
                  color: pkg.featured ? WHITE : NAVY,
                  marginBottom: 16, lineHeight: 1.2,
                }}>{pkg.name}</h3>

                {/* Summary */}
                <p style={{
                  fontSize: '.9rem', lineHeight: 1.75,
                  color: pkg.featured ? 'rgba(255,255,255,.6)' : INKM,
                  fontWeight: 300, marginBottom: 16, flex: 1,
                }}>{pkg.summary}</p>

                {/* Description */}
                <p style={{
                  fontSize: '.88rem', lineHeight: 1.65, fontStyle: 'italic',
                  color: pkg.featured ? 'rgba(255,255,255,.4)' : INKMU,
                  fontWeight: 300, marginBottom: 28,
                }}>{pkg.desc}</p>

                {/* Divider */}
                <div style={{ height: 1, background: pkg.featured ? 'rgba(255,255,255,.08)' : 'rgba(15,30,60,.08)', marginBottom: 20 }} />

                {/* Duration + Price */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                  <span style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '.72rem', fontWeight: 500,
                    letterSpacing: '.12em', textTransform: 'uppercase',
                    color: pkg.featured ? 'rgba(255,255,255,.4)' : INKMU,
                  }}>{pkg.duration}</span>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700, fontSize: '1.4rem',
                    color: GOLD,
                  }}>{pkg.price}</span>
                </div>

                 <WaBtn
                   href={`https://wa.me/212647574605?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package`}
                   style={{ justifyContent: 'center' }}
                 >
                   Book This Package
                 </WaBtn>
              </RV>
            ))}
          </div>

          {/* Package footer CTA */}
          <RV style={{ marginTop: 56, textAlign: 'center', padding: '48px 40px', background: NAVY, borderRadius: 3 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.8rem', color: WHITE, marginBottom: 12 }}>
              Not sure which package fits?
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.5)', fontWeight: 300, marginBottom: 28, lineHeight: 1.7 }}>
              Send us a WhatsApp with your dates and group size. We will build a plan for you within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <WaBtn href="https://wa.me/212600000000?text=Hi%2C%20I%27d%20like%20help%20building%20my%20Marrakech%20package">
                Build My Package
              </WaBtn>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,.2)', color: WHITE,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.75rem', fontWeight: 400,
                letterSpacing: '.14em', textTransform: 'uppercase',
                padding: '13px 28px', borderRadius: 2, textDecoration: 'none',
              }}>
                Talk to Us First
              </a>
            </div>
          </RV>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="final-cta-section" style={{ background: NAVYD, padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div className="section-container">
          <RV>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>Ready?</span>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.2rem,4vw,4rem)', color: WHITE, lineHeight: 1.1, marginBottom: 16 }}>
              Your Marrakech is<br />
              <em style={{ color: GOLD }}>One Message Away.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.4)', fontWeight: 300, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 40px' }}>
              Tell us your dates and what you need.<br />We will handle the rest.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
                WhatsApp Us Now
              </WaBtn>
              <GoldBtn href="/contact">
                Send an Enquiry →
              </GoldBtn>
            </div>
          </RV>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .services-page-wrapper {
          width: 100%;
          min-height: 100vh;
        }
        
        .section-container {
          max-width: 1260px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
          width: 100%;
          box-sizing: border-box;
        }
        
        @keyframes rise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
.how-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          
        .pkg-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          
        .service-row {
            display: grid;
            grid-template-columns: 420px 1fr;
            min-height: 440px;
            overflow: hidden;
            border-radius: 2px;
          }
          
          @media (max-width: 1100px) {
            .service-row {
              grid-template-columns: 340px 1fr;
            }
          }
          
          @media (max-width: 900px) {
            .section-container {
              padding: 0 32px;
            }
            
            .service-row {
              grid-template-columns: 1fr;
            }
            
            .service-row > div:first-child {
              min-height: 280px;
            }
            
            .how-grid {
              grid-template-columns: 1fr !important;
            }
            
            .pkg-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          
        @media (max-width: 600px) {
           .section-container {
             padding: 0 20px;
           }
           
           .hero-section {
             padding: 120px 0 80px !important;
           }
           
           .how-section,
           .services-list-section,
           .packages-section {
             padding: 70px 0 !important;
           }
           
           .final-cta-section {
             padding: 80px 0 !important;
           }
           
           .pkg-grid {
             grid-template-columns: 1fr !important;
           }
           
.service-row {
              min-height: 400px !important;
            }
          }
       `}</style>
    </div>
  );
}
