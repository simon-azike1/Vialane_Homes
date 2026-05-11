'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Nav';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';

// ── BRAND COLORS ──
const NAVY   = '#0F1E3C';
const NAVYD  = '#080F1E';
const GOLD   = '#C9973B';
const GOLDL  = '#DDB96A';
const CREAM  = '#F6F1E9';
const CREAMOF= '#FDFAF5';
const INK    = '#18110A';
const INKM   = '#3E3328';
const INKMU  = '#7A6E61';
const WHITE  = '#FFFFFF';
const WA     = '#25D366';

// ── SCROLL REVEAL HOOK ──
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function RV({ children, delay = 0, style = {}, tag = 'div', ...props }) {
  const Tag = tag;
  return (
    <Tag className="rv" style={{
      opacity: 0, transform: 'translateY(24px)',
      transition: `opacity .9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform .9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
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

export default function EventsPage() {
  useReveal();

  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: INKM, background: WHITE, overflowX: 'hidden' }}>
      
      {/* ════════════════════════════════════════
          HERO — Cinematic & Bold
          ════════════════════════════════════════ */}
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        minHeight: '500px', 
        background: NAVYD, 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        {/* Background Image Placeholder - Crowd/Festival/Event */}
        <img 
          src="/site%20images/hero_section.jpg" 
          alt="Festival crowd in Marrakech"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            opacity: 0.6 
          }}
        />
        
        {/* Dark gradient overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(8,15,30,0.4), rgba(8,15,30,0.9))' 
        }} />
        
        {/* Hero Content */}
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: 900, 
          margin: '0 auto', 
          padding: '0 48px',
          width: '100%',
        }}>
          <RV delay={0.1}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, 
              lineHeight: 1.05,
              color: WHITE,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              marginBottom: 24,
            }}>
              Morocco Is Always Happening.<br />
              <em style={{ color: GOLD, fontStyle: 'italic' }}>Are You Going to Be There?</em>
            </h1>
          </RV>
          
          <RV delay={0.2}>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 650,
              margin: '0 auto',
              fontWeight: 300,
            }}>
              From a thousand-year-old cultural festival to the 2030 FIFA World Cup,<br />
              Morocco puts on events that draw the world.
            </p>
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PAST LANDMARK EVENTS
          ════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: CREAM }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <RV style={{ marginBottom: 64 }}>
            <Label>Past Landmarks</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
              color: NAVY 
            }}>What Has Happened.</h2>
          </RV>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 32 }}>
             {[
               {
                 title: 'AFCON 2025 — Africa Cup of Nations',
                 date: 'December 2025 – January 2026',
                 desc: 'Morocco hosted the most commercially successful Africa Cup of Nations in the tournament\'s history. Six world-class cities. Millions of fans. Marrakech\'s stadium filled to capacity. International stars called it the best-organised tournament on the continent.',
                 img: '/site%20images/service.jpg'
               },
               {
                 title: 'Marrakech International Film Festival',
                 date: 'Annual — December',
                 desc: 'One of the most prestigious film festivals on the continent. International stars. Free open-air screenings in Jemaa el-Fna. Glamour and cinema in one of the world\'s most cinematic cities.',
                 img: '/site%20images/featured-property-image-morocco-3.jpg'
               },
               {
                 title: 'Gnaoua World Music Festival',
                 date: 'Annual — June',
                 desc: 'UNESCO-recognised. Gnaoua music meets jazz, blues, and world fusion. The entire city of Essaouira becomes a stage. Book accommodation months in advance. Pairs perfectly with a Marrakech trip.',
                 img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg'
               }
             ].map((ev, i) => (
              <RV key={i} delay={i * 0.1} style={{ 
                background: WHITE, 
                borderRadius: 2, 
                overflow: 'hidden', 
                border: '1px solid rgba(15,30,60,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
              }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img src={ev.img} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 16, left: 16, background: INKMU, color: WHITE, fontSize: '9px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Happened
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.4rem', color: NAVY, marginBottom: '8px', lineHeight: 1.2 }}>{ev.title}</h3>
                  <p style={{ fontSize: '11px', color: GOLD, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>{ev.date}</p>
                  <p style={{ fontSize: '0.95rem', color: INKM, lineHeight: 1.7 }}>{ev.desc}</p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          UPCOMING EVENTS
          ════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: CREAMOF }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <RV style={{ marginBottom: 64 }}>
            <Label>What's Coming</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
              color: NAVY 
            }}>Upcoming Events</h2>
          </RV>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
             {[
               {
                 title: 'FIFA World Cup 2030',
                 date: '2030',
                 loc: 'Marrakech + 5 cities',
                 desc: 'The biggest sporting event on earth is coming to Morocco. Over 1.2M fans expected. New high-speed rail. Expanded airports. Africa\'s largest stadium.',
                 img: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg'
               },
               {
                 title: 'Caftan Week',
                 date: 'May 7–10, 2026',
                 loc: 'Marrakech',
                 desc: 'Traditional Moroccan kaftans meet contemporary fashion design. Spectacular visual event.',
                 img: '/site%20images/Real-Dream-House-Agence-immobiliere-marrakech.webp'
               },
               {
                 title: 'Festival National des Arts Populaires',
                 date: 'July annually',
                 loc: 'El Badi Palace',
                 desc: 'Fire-eaters, acrobats, folk musicians. Inside a 16th-century palace. Free to attend.',
                 img: '/site%20images/featured-property-image-morocco-3.jpg'
               },
               {
                 title: 'Marrakech Coffee & Tea Festival',
                 date: 'Nov 14–16, 2026',
                 loc: 'Mossalla Sidi Amara',
                 desc: '30,000+ industry professionals. International pavilions. Set against the Atlas Mountains.',
                 img: '/site%20images/Couloir-Riad-Diamond-Marrakech.webp'
               },
               {
                 title: 'Hassan II Tennis Grand Prix',
                 date: '2026',
                 loc: 'Marrakech',
                 desc: 'ATP international tournament. Sport, culture, and the Marrakech backdrop make it uniquely compelling.',
                 img: '/site%20images/moroccan_interior_design_style_xj5pc-1024x572.jpg'
               },
               {
                 title: 'Imilchil Marriage Festival',
                 date: 'September annually',
                 loc: 'Atlas Mountains',
                 desc: 'Amazigh gathering. Ancient tradition, camel races, music. Little-touristy. Combine with an Atlas stay.',
                 img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg'
               },
               {
                 title: 'Rose Festival',
                 date: 'May annually',
                 loc: 'Kelaa M\'Gouna',
                 desc: 'Rose harvest parade through Morocco\'s most beautiful mountain valley. Traditional music and crafts.',
                 img: '/site%20images/service.jpg'
               }
             ].map((ev, i) => (
              <RV key={i} delay={i * 0.08} style={{ 
                background: NAVY, 
                borderRadius: 2, 
                minHeight: '320px', 
                position: 'relative', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                {/* Image Background */}
                <img 
                  src={ev.img} 
                  alt={ev.title} 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: 0.5,
                    transition: 'opacity .3s',
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(8,15,30,1) 0%, rgba(8,15,30,0.4) 60%, transparent 100%)' 
                }} />
                
                {/* Badge */}
                <div style={{ position: 'absolute', top: 16, right: 16 }}>
                   <span style={{ display: 'block', width: '8px', height: '8px', background: GOLD, borderRadius: '50%', marginBottom: '4px' }} />
                   <span style={{ fontSize: '9px', color: GOLD, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'right', display: 'block' }}>Upcoming</span>
                </div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2, padding: '32px' }}>
                  <h3 style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontWeight: 700, 
                    fontSize: '1.4rem', 
                    color: WHITE, 
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}>{ev.title}</h3>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginBottom: '12px', fontWeight: 500 }}>{ev.date} · {ev.loc}</p>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{ev.desc}</p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EVENTS CTA
          ════════════════════════════════════════ */}
      <section style={{ background: NAVYD, padding: '100px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `url("image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
          <RV>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.2rem,4vw,3.5rem)', color: WHITE, lineHeight: 1.1, marginBottom: 16 }}>
              Planning Your Trip Around an Event?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.5)', fontWeight: 300, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 40px' }}>
              Let us handle everything.<br />
              Accommodation, transfers, and itinerary — built around your event dates.
            </p>
            <WaBtn href="https://wa.me/212600000000?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip%20around%20an%20event%20in%20Morocco">
              Plan My Trip
            </WaBtn>
          </RV>
        </div>
      </section>

      {/* Styles for responsive and animations */}
      <style>{`
        .container { width: 100%; box-sizing: border-box; }
        .rv { opacity: 0; transform: translateY(24px); }
        .rv.revealed { opacity: 1; transform: translateY(0); }
        
        @media (max-width: 900px) {
          .container { padding: 0 24px !important; }
          section { padding-left: 0 !important; padding-right: 0 !important; }
          [style*="grid-template-columns: repeat(auto-fill"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .container { padding: 0 20px !important; }
          [style*="padding: '32px"] { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}
