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

export default function AboutPage() {
  useReveal();

  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: INKM, background: WHITE, overflowX: 'hidden' }}>
      
      {/* ════════════════════════════════════════
          HERO — Cinematic & Editorial
          ════════════════════════════════════════ */}
      <section style={{ 
        position: 'relative', 
        background: 'url("https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat', 
        padding: 'clamp(120px, 20vw, 200px) 0 clamp(60px, 10vw, 100px)',
        overflow: 'hidden',
        minHeight: '60vh',
      }}>
        {/* Dark overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
        
        {/* Hero Content */}
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: 1260, 
          margin: '0 auto', 
          padding: '0 clamp(16px, 3vw, 48px)',
          width: '100%',
        }}>
          <RV delay={0.1}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <span style={{ width: 40, height: 1, background: GOLD, display: 'block' }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.7rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>About Vialane Homes</span>
            </div>
          </RV>
          
          <RV delay={0.2}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, 
              lineHeight: 1.05,
              color: WHITE,
              fontSize: 'clamp(2rem, 6vw, 5.5rem)',
              maxWidth: 800,
              marginBottom: 24,
              marginTop: 30
            }}>
              We did not wait for<br />
              someone to build this.<br />
              <em style={{ color: GOLD, fontStyle: 'italic' }}>We built it ourselves.</em>
            </h2>
          </RV>
          
          <RV delay={0.3}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 560,
              fontWeight: 300,
              marginBottom: 40,
            }}>
              Founded in Marrakech by a Nigerian entrepreneur who knows<br />
              what it means to navigate this city as an outsider — and how<br />
              to make sure you never feel like one.
            </p>
          </RV>
          
          <RV delay={0.4}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <WaBtn 
                href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Vialane%20Homes">
                Chat With Us
              </WaBtn>
              <a href="#story" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,0.2)', color: WHITE,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.75rem', fontWeight: 400,
                letterSpacing: '.14em', textTransform: 'uppercase',
                padding: '13px 28px', borderRadius: 2, textDecoration: 'none',
              }}>
                Our Story ↓
              </a>
            </div>
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TRUST BAR — Stats
          ════════════════════════════════════════ */}
      <section style={{ background: WHITE, padding: '48px 0', borderBottom: '1px solid rgba(15,30,60,0.06)' }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <RV>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
              {[
                { num: '24/7', label: 'Availability' },
                { num: '<2hr', label: 'Response Time' },
                { num: '100%', label: 'Foreign Ownership' },
                { num: '21%', label: 'Net Annual ROI' },
              ].map((s, i) => (
                <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(15,30,60,0.08)' : 'none' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: NAVY, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: '.75rem', color: INKMU, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOUNDER STORY — Asymmetric Editorial
          ════════════════════════════════════════ */}
      <section id="story" style={{ padding: 'clamp(60px, 12vw, 120px) 0', background: CREAMOF }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'start' }}>
            
            {/* Left Column — Image with accent */}
            <RV>
              <div style={{ position: 'relative' }}>
                {/* Accent border */}
                <div style={{ 
                  position: 'absolute', 
                  top: 24, 
                  left: 24, 
                  right: -24, 
                  bottom: -24, 
                  border: `1px solid ${GOLD}`, 
                  borderRadius: 2,
                  zIndex: 0,
                }} />
                {/* Image placeholder */}
                <div style={{ 
                  position: 'relative', 
                  zIndex: 1, 
                  height: 'clamp(300px, 50vw, 520px)', 
                  background: NAVY, 
                  borderRadius: 2, 
                  overflow: 'hidden' 
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to bottom, rgba(15,30,60,0.3), rgba(15,30,60,0.7))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 32,
                  }}>
                    <div style={{ 
                      width: 64, 
                      height: 64, 
                      borderRadius: '50%', 
                      background: GOLD, 
                      marginBottom: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}>
                      
                    </div>
                    <p style={{ color: WHITE, fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: 1.4, marginBottom: 8 }}>
                      On the ground in Marrakech,<br />every single day.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.85rem' }}>
                      Founder walking through the souks, 2025
                    </p>
                  </div>
                </div>
              </div>
            </RV>

            {/* Right Column — Story Copy */}
            <RV delay={0.15}>
              <Label>Our Story</Label>
              <h2 style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 700, 
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
                color: NAVY, 
                lineHeight: 1.15, 
                marginBottom: 32 
              }}>
                The Story Behind<br />
                <em style={{ color: GOLD }}>Vialane Homes</em>
              </h2>
              
              <div style={{ fontSize: 'clamp(1rem, 2vw, 1.05rem)', color: INKM, lineHeight: 1.9, marginBottom: 24 }}>
                <p style={{ marginBottom: 20 }}>
                  Marrakech is one of the most extraordinary cities on earth. It has been drawing travellers for a thousand years. And yet — if you arrive here without a trusted contact, without someone who knows the city and understands what you actually need — you can miss the whole thing.
                </p>
                <p style={{ marginBottom: 20 }}>
                  We started Vialane Homes to be that contact. For tourists who want to experience the real Marrakech. For investors who see what this city is becoming. For anyone who deserves to be here and deserves to do it right.
                </p>
                <p style={{ marginBottom: 32 }}>
                  We are young, we are ambitious, and we are on the ground. That is not a weakness — it is the whole point.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 700, color: NAVY, marginBottom: 4 }}>✈</div>
                  <p style={{ fontSize: '.8rem', color: INKMU, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 500 }}>Tourism</p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 700, color: NAVY, marginBottom: 4 }}>◉</div>
                  <p style={{ fontSize: '.8rem', color: INKMU, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 500 }}>Investment</p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 700, color: NAVY, marginBottom: 4 }}>♦</div>
                  <p style={{ fontSize: '.8rem', color: INKMU, textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 500 }}>Concierge</p>
                </div>
              </div>

              <a href="#mission" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: GOLD, textDecoration: 'none',
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.75rem', fontWeight: 600,
                letterSpacing: '.14em', textTransform: 'uppercase',
              }}>
                Read Our Mission <span style={{ fontSize: '1.2rem' }}>↓</span>
              </a>
            </RV>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MISSION — Bold Typography Section
          ════════════════════════════════════════ */}
      <section id="mission" style={{ 
        background: NAVY, 
        padding: 'clamp(60px, 12vw, 120px) 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 'clamp(300px, 80vw, 600px)', 
          height: 'clamp(300px, 80vw, 600px)', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(201,151,59,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)', position: 'relative', zIndex: 1 }}>
          <RV>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{ width: 40, height: 1, background: GOLD }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.7rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>Our Mission</span>
              <span style={{ width: 40, height: 1, background: GOLD }} />
            </div>
          </RV>
          
          <RV delay={0.1}>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', 
              color: WHITE, 
              lineHeight: 1.4,
              marginBottom: 40,
            }}>
              To make Marrakech accessible, safe, and extraordinary<br />
              for every visitor and every investor who chooses to be here.
            </h2>
          </RV>
          
          <RV delay={0.2}>
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: 16 }}>
                Not just for tourists with European passports.<br />
                Not just for buyers with the biggest budgets.
              </p>
              <p style={{ fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>
                For everyone who is ready to experience what this city truly has to offer.
              </p>
            </div>
          </RV>
          
          <RV delay={0.3} style={{ marginTop: 48 }}>
            <div style={{ width: 1, height: 60, background: GOLD, margin: '0 auto' }} />
          </RV>
        </div>
      </section>

      {/* ════════════════════════════════════════
          VALUES — Premium Cards
          ════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px, 12vw, 120px) 0', background: WHITE }}>
        <div className="container" style={{ maxWidth: 1260, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)' }}>
          <RV style={{ textAlign: 'center', marginBottom: 72 }}>
            <Label>What We Stand For</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
              color: NAVY 
            }}>Our Values</h2>
          </RV>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                num: '01',
                icon: '✦',
                title: 'Transparency',
                desc: 'We quote before we charge. We explain before we book. You will never see a surprise on your invoice.',
                accent: 'right',
              },
              {
                num: '02',
                icon: '◉',
                title: 'On the Ground',
                desc: 'We are not a remote agency working from a spreadsheet. We are in Marrakech. We know every street, every driver, every property — personally.',
                accent: 'center',
              },
              {
                num: '03',
                icon: '♥',
                title: 'Actually There For You',
                desc: 'Our WhatsApp is not a chatbot. It is a person. We respond within 2 hours. Every time.',
                accent: 'left',
              }
            ].map((val, i) => (
              <RV key={i} delay={i * 0.15}>
                <div style={{ 
                  background: i === 1 ? NAVY : CREAMOF, 
                  padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 40px)', 
                  borderRadius: 2, 
                  position: 'relative', 
                  overflow: 'hidden',
                  minHeight: 360,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  {/* Background number */}
                  <div style={{
                    position: 'absolute', 
                    top: -16, 
                    right: 20, 
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900, 
                    fontSize: '7rem', 
                    lineHeight: 1,
                    color: i === 1 ? 'rgba(255,255,255,0.04)' : 'rgba(15,30,60,0.04)',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>{val.num}</div>
                  
                  {/* Icon */}
                  <div style={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: 8, 
                    background: i === 1 ? GOLD : NAVY, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: i === 1 ? NAVY : GOLD, 
                    fontSize: '1.2rem', 
                    marginBottom: 32,
                  }}>
                    {val.icon}
                  </div>
                  
                  <h3 style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontWeight: 700, 
                    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', 
                    color: i === 1 ? WHITE : NAVY, 
                    marginBottom: 20,
                    lineHeight: 1.2,
                  }}>
                    {val.title}
                  </h3>
                  
                  <p style={{ 
                    fontSize: 'clamp(0.95rem, 1.5vw, 1rem)', 
                    color: i === 1 ? 'rgba(255,255,255,0.55)' : INKM, 
                    lineHeight: 1.7,
                    flex: 1,
                  }}>
                    {val.desc}
                  </p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY TRUST US — Editorial Block
          ════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px, 12vw, 120px) 0', background: CREAM }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(16px, 3vw, 48px)', textAlign: 'center' }}>
          <RV>
            <Label>Trust</Label>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
              color: NAVY, 
              lineHeight: 1.2, 
              marginBottom: 48 
            }}>
              Why Trust Us<br />When We Are New?
            </h2>
          </RV>
          
          <RV delay={0.1} style={{ 
            background: WHITE, 
            padding: 'clamp(32px, 5vw, 64px) clamp(24px, 4vw, 56px)', 
            borderRadius: 2, 
            border: '1px solid rgba(15,30,60,0.06)',
            position: 'relative',
          }}>
            {/* Decorative quote mark */}
            <div style={{ 
              position: 'absolute', 
              top: 32, 
              left: 40, 
              fontFamily: "'Playfair Display', serif",
              fontSize: '6rem', 
              lineHeight: 1,
              color: GOLD, 
              opacity: 0.2,
            }}>"</div>
            
            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: INKM, lineHeight: 1.9, position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: 20, fontWeight: 500, color: NAVY }}>
                Fair question. Here is the honest answer.
              </p>
              <p style={{ marginBottom: 20 }}>
                We do not have ten years of reviews. We have something harder to manufacture: we are physically here, we care deeply about getting this right, and we will work harder for you than any established agency would — because your experience is our reputation.
              </p>
              <p style={{ marginBottom: 20 }}>
                Every driver we recommend has been screened personally. Every property has been visited in person before we list it. Every service we offer is one we would be comfortable recommending to our own family.
              </p>
              <p style={{ marginBottom: 32, fontStyle: 'italic', color: INKMU }}>
                We are building Vialane Homes on trust. The best way to earn yours is to do excellent work.
              </p>
              <p style={{ fontWeight: 600, color: NAVY, marginBottom: 0 }}>
                And that starts with your trip.
              </p>
            </div>
          </RV>
          
          <RV delay={0.2} style={{ marginTop: 48 }}>
            <WaBtn 
              href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20start%20planning%20my%20Marrakech%20experience">
              Start Your Journey →
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
          .container { padding: 0 clamp(16px, 3vw, 24px) !important; }
          section { padding-left: 0 !important; padding-right: 0 !important; }
          [style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
          [style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          /* VALUES section - stack cards vertically on tablets */
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .container { padding: 0 clamp(12px, 2vw, 20px) !important; }
          [style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
          [style*="padding: '64px 56px"] { padding: 40px 28px !important; }
          [style*="padding: '56px 40px"] { padding: 40px 28px !important; }
          .two-col { gap: 24px !important; }
          h2 { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
          p { font-size: clamp(0.9rem, 2vw, 1rem) !important; }
        }
      `}</style>
    </div>
  );
}