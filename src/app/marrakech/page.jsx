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

export default function MarrakechPage() {
  useReveal();

  const experiences = [
    { title: 'Jemaa el-Fna', sub: "The World's Greatest Square. Fire dancers, storytellers, 200 food stalls.", img: '/site%20images/moroccan_interior_design_style_xj5pc-1024x572.jpg' },
    { title: 'The Souks', sub: 'A thousand stalls. Leather, spice, rugs. Put your phone down and wander.', img: '/site%20images/service.jpg' },
    { title: 'The Hammam', sub: 'Steam room. Black soap scrub. Argan oil massage. Ancient ritual.', img: '/site%20images/featured-property-image-morocco-3.jpg' },
    { title: 'Agafay Desert', sub: 'Semi-desert plateau just outside the city. Camel ride at golden hour.', img: '/site%20images/Couloir-Riad-Diamond-Marrakech.webp' },
    { title: 'Atlas Mountains', sub: 'Snow-capped peaks. Berber villages. Hiking trails in Imlil.', img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg' },
    { title: 'Jardin Majorelle', sub: "Yves Saint Laurent's Icon. Cobalt blue garden. Botanical beauty.", img: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg' },
    { title: 'The Food', sub: "Tagine for $5. Fresh orange juice for 40 cents. Best meal of your life.", img: '/site%20images/Real-Dream-House-Agence-immobiliere-marrakech.webp' },
    { title: 'Rooftop Marrakech', sub: 'Rooftop bars in Gueliz. Clubs in Hivernage. The Red City after dark.', img: '/site%20images/image-home.jpg' },
  ];

  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: INKM, background: WHITE, overflowX: 'hidden' }}>
      
      {/* ════════════════════════════════════════
          HERO — Cinematic & Urgent
          ════════════════════════════════════════ */}
      <section style={{ 
        position: 'relative', 
        height: 'clamp(500px, 90vh, 100vh)', 
        minHeight: '500px', 
        background: NAVYD, 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        {/* Background Image Placeholder - Jemaa el-Fna or Riad */}
        <img 
          src="/site%20images/hero_section.jpg" 
          alt="Jemaa el-Fnaa at night"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            opacity: 0.7 
          }}
        />
        
        {/* Dark gradient overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(8,15,30,0.3), rgba(8,15,30,0.85))' 
        }} />
        
        {/* Hero Content */}
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: 900, 
          margin: '0 auto', 
          padding: '0 clamp(16px, 3vw, 48px)',
          width: '100%',
        }}>
          <RV delay={0.1}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, 
              lineHeight: 1.05,
              color: WHITE,
              fontSize: 'clamp(2rem, 7vw, 6rem)',
              marginBottom: 24,
            }}>
              Marrakech.<br />
              <em style={{ color: GOLD, fontStyle: 'italic' }}>The City That Gets Under Your Skin.</em>
            </h1>
          </RV>
          
          <RV delay={0.2}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 650,
              margin: '0 auto',
              fontWeight: 300,
            }}>
              Africa's most visited destination. A thousand years of living history.<br />
              The food, the colour, the noise, the silence of a riad at midnight.<br />
              Once you've been, everywhere else feels like it's missing something.
            </p>
          </RV>
        </div>
      </section>

      {/* ═════════════════════════════════════════
          WHY NOW — Stats & Context
          ═════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px, 12vw, 100px) 0', background: CREAMOF }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          
          {/* Left: Copy */}
          <RV>
            <Label>Why Marrakech</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              color: NAVY, 
              lineHeight: 1.15, 
              marginBottom: 32 
            }}>
              Why Marrakech.<br />
              <em style={{ color: GOLD }}>Why Right Now.</em>
            </h2>
            
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.05rem)', color: INKM, lineHeight: 1.9, marginBottom: 24 }}>
              <p style={{ marginBottom: 20 }}>
                Morocco just overtook Egypt to become Africa's most visited country. 19.8 million tourists arrived in 2025 — a new record.
              </p>
              <p style={{ marginBottom: 20 }}>
                Marrakech alone accounts for 40% of all overnight stays in Morocco. The country hosted AFCON 2025 across six world-class cities. The world watched.
              </p>
              <p style={{ marginBottom: 20 }}>
                In 2030, Morocco co-hosts the FIFA World Cup with Spain and Portugal. $9.6 billion in high-speed rail. A new airport expanding from 9 million to 14.2 million passengers.
              </p>
              <p style={{ fontWeight: 600, color: NAVY }}>
                The city is being built for the world. This is the moment to be here. Not after the world has fully arrived. Now.
              </p>
            </div>
          </RV>

          {/* Right: Image Grid / Visuals */}
          <RV delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: 'clamp(300px, 50vw, 500px)' }}>
              <div style={{ background: NAVY, borderRadius: 2, overflow: 'hidden' }}>
                <img src="/site%20images/moroccan_interior_design_style_xj5pc-1024x572.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Morocco Architecture" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: GOLD, borderRadius: 2, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: NAVY }}>19.8M</div>
                    <div style={{ fontSize: '.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: NAVY }}>Tourists in 2025</div>
                  </div>
                </div>
                <div style={{ background: NAVYD, borderRadius: 2, flex: 1, overflow: 'hidden' }}>
                  <img src="/site%20images/Couloir-Riad-Diamond-Marrakech.webp" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="Desert" />
                </div>
              </div>
            </div>
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          EXPERIENCES — Visual Grid
          ════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px, 12vw, 100px) 0', background: WHITE }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <RV style={{ textAlign: 'center', marginBottom: 64 }}>
            <Label>The Experience</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
              color: NAVY 
            }}>What You Will Do.</h2>
          </RV>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 24 }}>
            {experiences.map((e, i) => (
              <RV key={i} delay={i * 0.08} style={{ 
                background: NAVY, 
                borderRadius: 2, 
                minHeight: 'clamp(280px, 50vw, 320px)', 
                position: 'relative', 
                overflow: 'hidden',
              }}>
                {/* Image Background */}
                <img 
                  src={e.img} 
                  alt={e.title} 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: 0.6,
                    transition: 'opacity .3s',
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(8,15,30,0.95) 0%, rgba(8,15,30,0.4) 50%, transparent 100%)' 
                }} />
                
                {/* Content */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  padding: 'clamp(20px, 4vw, 32px)', 
                  zIndex: 2 
                }}>
                  <h3 style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontWeight: 700, 
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
                    color: WHITE, 
                    marginBottom: 8,
                    lineHeight: 1.2,
                  }}>{e.title}</h3>
                  <p style={{ 
                    fontSize: 'clamp(0.85rem, 1.5vw, 0.9rem)', 
                    color: 'rgba(255,255,255,0.7)', 
                    lineHeight: 1.6 
                  }}>{e.sub}</p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VISA INFO — Practical & Clear
          ════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px, 12vw, 100px) 0', background: CREAM }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <RV style={{ textAlign: 'center', marginBottom: 48 }}>
            <Label>Travel Info</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              color: NAVY 
            }}>Can I Visit Morocco?</h2>
          </RV>
          
          <RV delay={0.1} style={{ background: WHITE, padding: 'clamp(32px, 5vw, 48px)', borderRadius: 2, border: '1px solid rgba(15,30,60,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            
            {/* Tab 1: Nigeria */}
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ 
                fontFamily: "'Bricolage Grotesque', sans-serif", 
                fontWeight: 700, 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                color: NAVY, 
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <span style={{ width: 8, height: 8, background: GOLD, borderRadius: '50%' }} />
                For Nigerian Passport Holders
              </h3>
              <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1rem)', color: INKM, lineHeight: 1.8, marginBottom: 16 }}>
                You need a visa to visit Morocco. Two options:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 'clamp(0.95rem, 1.5vw, 1rem)', color: INKM, lineHeight: 1.8 }}>
                <li style={{ marginBottom: 12 }}>
                  <strong style={{ color: NAVY }}>Option 1 — Standard Tourist Visa:</strong><br />
                  Apply at the Moroccan embassy in Lagos or Abuja. Allows up to 90 days. Processing: approx 10 business days. Documents: valid passport, photos, bank statement, return flight, accommodation proof.
                </li>
                <li>
                  <strong style={{ color: NAVY }}>Option 2 — eVisa:</strong><br />
                  If you hold a valid UK, US, Schengen, Canadian, or Australian residency permit or multi-entry visa, you can apply entirely online. No embassy visit required. Approval by email.
                </li>
              </ul>
              <p style={{ fontSize: '.9rem', color: INKMU, marginTop: 16, fontStyle: 'italic' }}>
                We help our clients prepare their booking confirmation letter as part of our service — just ask.
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(15,30,60,0.08)', margin: '32px 0' }} />

            {/* Tab 2: International */}
            <div>
              <h3 style={{ 
                fontFamily: "'Bricolage Grotesque', sans-serif", 
                fontWeight: 700, 
                fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                color: NAVY, 
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <span style={{ width: 8, height: 8, background: GOLD, borderRadius: '50%' }} />
                For UK, European, American & Gulf Visitors
              </h3>
              <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1rem)', color: INKM, lineHeight: 1.8, marginBottom: 24 }}>
                Most nationalities enter Morocco visa-free for up to 90 days. Your passport must be valid for at least 6 months from entry date.
              </p>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20check%20visa%20requirements%20for%20my%20passport">
                WhatsApp Us for Visa Help
              </WaBtn>
            </div>

          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
          ════════════════════════════════════════ */}
      <section style={{ background: NAVYD, padding: 'clamp(60px, 12vw, 100px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `url("image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)', position: 'relative', zIndex: 1 }}>
          <RV>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>Ready?</span>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 4rem)', color: WHITE, lineHeight: 1.1, marginBottom: 16 }}>
              Your Marrakech is<br />
              <em style={{ color: GOLD }}>One Message Away.</em>
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1rem)', color: 'rgba(255,255,255,.4)', fontWeight: 300, lineHeight: 1.75, maxWidth: 440, margin: '0 auto 40px' }}>
              Tell us your dates and what you need.<br />We will handle the rest.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <WaBtn href="https://wa.me/212600000000?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
                WhatsApp Us Now
              </WaBtn>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,.2)', color: WHITE,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.75rem', fontWeight: 400,
                letterSpacing: '.14em', textTransform: 'uppercase',
                padding: '13px 28px', borderRadius: 2, textDecoration: 'none',
              }}>
                Send an Enquiry →
              </a>
            </div>
          </RV>
        </div>
      </section>

      {/* Styles for responsive and animations */}
      <style>{`
        .container { width: 100%; box-sizing: border-box; }
        .rv { opacity: 0; transform: translateY(24px); }
        .rv.revealed { opacity: 1; transform: translateY(0); }
        
        @media (max-width: 900px) {
          .container { padding: 0 clamp(16px, 3vw, 24px) !important; }
          section { padding-left: 0 !important; padding-right: 0 !important; }
          [style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          /* WHY NOW section - stack columns vertically on tablets */
          div[style*="display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'"] { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 600px) {
          .container { padding: 0 clamp(12px, 2vw, 20px) !important; }
          [style*="padding: '48px"] { padding: 32px 24px !important; }
          h1 { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
          h2 { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
          p { font-size: clamp(0.9rem, 2vw, 1rem) !important; }
        }
      `}</style>
    </div>
  );
}