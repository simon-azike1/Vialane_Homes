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

export default function ContactPage() {
  useReveal();
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: INKM, background: WHITE, overflowX: 'hidden' }}>
      
      {/* ════════════════════════════════════════
          HERO — Minimal & Direct
          ════════════════════════════════════════ */}
      <section style={{ 
        position: 'relative', 
        background: NAVYD, 
        padding: '180px 0 100px', 
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Subtle Pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `url("image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        
        <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
          <RV>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>Contact Us</span>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
            </div>
            
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, 
              lineHeight: 1.1,
              color: WHITE,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              marginBottom: 24,
            }}>
              Talk to Us.<br />
              <em style={{ color: GOLD }}>We Actually Reply.</em>
            </h1>
            
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 560,
              margin: '0 auto 40px',
              fontWeight: 300,
            }}>
              We respond to WhatsApp messages within 2 hours.<br />
              No bots. No call centres. A real person in Marrakech.
            </p>
          </RV>
          
            <RV delay={0.1}>
             <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip" style={{ fontSize: '1rem', padding: '16px 32px' }}>
               Chat With Us on WhatsApp ↗
             </WaBtn>
            <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.35)', fontSize: '.9rem' }}>
              Prefer email? hello@vialanehomes.com
            </p>
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ENQUIRY FORM
          ════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: CREAM }}>
        <div className="container" style={{ maxWidth: 700, margin: '0 auto', padding: '0 48px' }}>
          <RV>
            <div style={{ background: WHITE, padding: '56px 48px', borderRadius: 2, border: '1px solid rgba(15,30,60,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              
              <div style={{ marginBottom: 32 }}>
                <Label>Enquiry</Label>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2rem', color: NAVY, marginBottom: 12 }}>Send Us an Enquiry</h2>
                <p style={{ fontSize: '1rem', color: INKM, lineHeight: 1.7 }}>
                  Tell us what you are planning and when. We will come back to you with a personalised plan within 24 hours.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, background: GOLD, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: NAVY, fontSize: '2rem' }}>✓</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: NAVY, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: INKM, lineHeight: 1.7 }}>Thank you for reaching out. We have received your enquiry and will reply via WhatsApp or Email within 24 hours.</p>
                  <button onClick={() => setFormStatus('idle')} style={{ marginTop: 24, background: 'transparent', border: '1px solid NAVY', color: NAVY, padding: '10px 20px', cursor: 'pointer', fontFamily: 'inherit' }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                    <div>
                      <label style={{ fontSize: '.75rem', fontWeight: 600, color: INKM, marginBottom: 8, display: 'block', letterSpacing: '.05em', textTransform: 'uppercase' }}>Full Name</label>
                      <input type="text" placeholder="Your name" required style={{ width: '100%', padding: '14px', border: '1px solid rgba(15,30,60,0.15)', background: CREAMOF, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.95rem', borderRadius: 2, outline: 'none', transition: 'border-color .2s' }} onFocus={e => e.currentTarget.style.borderColor = GOLD} onBlur={e => e.currentTarget.style.borderColor = 'rgba(15,30,60,0.15)'} />
                    </div>
                    <div>
                      <label style={{ fontSize: '.75rem', fontWeight: 600, color: INKM, marginBottom: 8, display: 'block', letterSpacing: '.05em', textTransform: 'uppercase' }}>Email Address</label>
                      <input type="email" placeholder="hello@email.com" required style={{ width: '100%', padding: '14px', border: '1px solid rgba(15,30,60,0.15)', background: CREAMOF, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.95rem', borderRadius: 2, outline: 'none', transition: 'border-color .2s' }} onFocus={e => e.currentTarget.style.borderColor = GOLD} onBlur={e => e.currentTarget.style.borderColor = 'rgba(15,30,60,0.15)'} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: INKM, marginBottom: 8, display: 'block', letterSpacing: '.05em', textTransform: 'uppercase' }}>Phone / WhatsApp Number</label>
                    <input type="tel" placeholder="+234..." style={{ width: '100%', padding: '14px', border: '1px solid rgba(15,30,60,0.15)', background: CREAMOF, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.95rem', borderRadius: 2, outline: 'none', transition: 'border-color .2s' }} onFocus={e => e.currentTarget.style.borderColor = GOLD} onBlur={e => e.currentTarget.style.borderColor = 'rgba(15,30,60,0.15)'} />
                  </div>

                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: INKM, marginBottom: 8, display: 'block', letterSpacing: '.05em', textTransform: 'uppercase' }}>Enquiry Type</label>
                    <select style={{ width: '100%', padding: '14px', border: '1px solid rgba(15,30,60,0.15)', background: CREAMOF, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.95rem', borderRadius: 2, outline: 'none', appearance: 'none', backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230F1E3C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px' }}>
                      <option>Tourism Enquiry (Trip Planning)</option>
                      <option>Investment Enquiry (Property)</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '.75rem', fontWeight: 600, color: INKM, marginBottom: 8, display: 'block', letterSpacing: '.05em', textTransform: 'uppercase' }}>Message</label>
                    <textarea rows="4" placeholder="Tell us your dates, group size, and what you need." style={{ width: '100%', padding: '14px', border: '1px solid rgba(15,30,60,0.15)', background: CREAMOF, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.95rem', borderRadius: 2, outline: 'none', resize: 'vertical', transition: 'border-color .2s' }} onFocus={e => e.currentTarget.style.borderColor = GOLD} onBlur={e => e.currentTarget.style.borderColor = 'rgba(15,30,60,0.15)'}></textarea>
                  </div>

                  <button type="submit" disabled={formStatus === 'submitting'} style={{
                    background: GOLD, color: NAVY,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '.75rem', fontWeight: 600,
                    letterSpacing: '.14em', textTransform: 'uppercase',
                    padding: '16px', borderRadius: 2, border: 'none', cursor: 'pointer',
                    transition: 'background .2s',
                    opacity: formStatus === 'submitting' ? 0.7 : 1,
                  }} onMouseOver={e => e.currentTarget.style.background = GOLDL} onMouseOut={e => e.currentTarget.style.background = GOLD}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SOCIAL & FOOTER INFO
          ════════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: CREAMOF, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600, margin: '0 auto', padding: '0 48px' }}>
          <RV>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: NAVY, marginBottom: 24 }}>Follow the Journey</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
              <a href="#" style={{ fontSize: '.95rem', color: INKM, textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color .2s' }} onMouseOver={e => e.currentTarget.style.borderColor = GOLD} onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>Instagram: @vialanehomes</a>
              <a href="#" style={{ fontSize: '.95rem', color: INKM, textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color .2s' }} onMouseOver={e => e.currentTarget.style.borderColor = GOLD} onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>TikTok: @vialanehomes</a>
              <a href="#" style={{ fontSize: '.95rem', color: INKM, textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color .2s' }} onMouseOver={e => e.currentTarget.style.borderColor = GOLD} onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>LinkedIn: Vialane Homes</a>
            </div>
            <p style={{ fontSize: '.9rem', color: INKMU, lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
              We post real Marrakech content — properties, experiences, market updates, and the honest story of building this company. Follow if you want to watch it unfold.
            </p>
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
          [style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .container { padding: 0 20px !important; }
          [style*="padding: '56px 48px"] { padding: 32px 24px !important; }
        }
      `}</style>
    </div>
  );
}
