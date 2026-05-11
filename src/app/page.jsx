"use client"
import { useEffect } from 'react';

const NAVY    = '#0F1E3C';
const NAVYD   = '#080F1E';
const GOLD    = '#C9973B';
const GOLDL   = '#DDB96A';
const GOLDP   = '#F2E4C4';
const CREAM   = '#F6F1E9';
const CREAMOF = '#FDFAF5';
const INK     = '#18110A';
const INKM    = '#3E3328';
const INKMU   = '#7A6E61';
const WHITE   = '#FFFFFF';
const WA      = '#25D366';

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function RV({ children, delay = 0, style = {}, ...props }) {
  return (
    <div
      className="rv"
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity .85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform .85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function Label({ children, light = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <span style={{ display: 'block', width: 32, height: 1, background: GOLD, flexShrink: 0 }} />
      <span style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: '.68rem', fontWeight: 500,
        letterSpacing: '.22em', textTransform: 'uppercase',
        color: GOLD,
      }}>{children}</span>
    </div>
  );
}

function BtnGold({ href, children, target, rel }) {
  return (
    <a href={href} target={target} rel={rel} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: GOLD, color: NAVY,
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontSize: '.75rem', fontWeight: 600,
      letterSpacing: '.14em', textTransform: 'uppercase',
      padding: '14px 32px', borderRadius: 2, textDecoration: 'none',
      transition: 'background .25s, transform .25s',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = GOLDL; e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {children}
    </a>
  );
}

function TextLink({ href, children }) {
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontSize: '.75rem', fontWeight: 600,
      letterSpacing: '.14em', textTransform: 'uppercase',
      color: NAVY, textDecoration: 'none',
      borderBottom: `1px solid ${NAVY}`, paddingBottom: 2,
      transition: 'color .2s, border-color .2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD; }}
    onMouseLeave={e => { e.currentTarget.style.color = NAVY; e.currentTarget.style.borderColor = NAVY; }}
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8h10m0 0L9 4m4 4l-4 4"/>
      </svg>
    </a>
  );
}

export default function Home() {
  useReveal();

  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", overflowX: 'hidden' }}>

      {/* ══ HERO ══ */}
      <section style={{
        position: 'relative', minHeight: '100svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        overflow: 'hidden', background: NAVYD,
        paddingBottom: 100, paddingTop: 140,
      }}>
        {/* BG layers */}
        <div style={{ position: 'absolute', inset: 0, background: 'url("/site%20images/hero_section.jpg") center/cover no-repeat', opacity: 0.8 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(184,79,42,.18) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 80% at 5% 80%, rgba(201,151,59,.10) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,15,30,.97) 0%, rgba(8,15,30,.45) 50%, rgba(8,15,30,.15) 100%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1260, margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'flex-end' }}>

            {/* Left */}
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, animation: 'rise .8s ease .3s both' }}>
                <span style={{ width: 40, height: 1, background: GOLD, display: 'block' }} />
                <span style={{ fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>
                  Marrakech · Morocco
                </span>
              </div>

              {/* Headline */}
              <div style={{ animation: 'rise 1s ease .5s both' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, lineHeight: .88, letterSpacing: '-.02em', color: WHITE, fontSize: 'clamp(4rem,9vw,8.5rem)' }}>
                  MARRA
                </div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, lineHeight: .88, letterSpacing: '-.02em', fontSize: 'clamp(4rem,9vw,8.5rem)', marginLeft: 'clamp(24px,3vw,64px)', WebkitTextStroke: '2px #C9973B', color: 'transparent' }}>
                  KECH.
                </div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,.45)', fontSize: 'clamp(1.6rem,3vw,2.8rem)', marginTop: 16 }}>
                  Done Right.
                </div>
              </div>

              {/* Body */}
              <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, maxWidth: 520, margin: '28px 0 36px', animation: 'rise .8s ease .7s both' }}>
                From the moment you land to the moment you leave. Accommodation, airport transfers, car hire, curated experiences, and expert real estate investment guidance.{' '}
                <span style={{ color: 'rgba(255,255,255,.8)', fontWeight: 400 }}>One company. One number. No stress.</span>
              </p>

               {/* Buttons */}
               <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'rise .8s ease .9s both' }}>
                 <BtnGold href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip" target="_blank" rel="noopener noreferrer">
                   Plan My Trip →
                 </BtnGold>
                <a href="/invest" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  border: '1px solid rgba(255,255,255,.25)', color: WHITE,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: '.75rem', fontWeight: 400,
                  letterSpacing: '.14em', textTransform: 'uppercase',
                  padding: '14px 32px', borderRadius: 2, textDecoration: 'none',
                  transition: 'border-color .25s, color .25s',
                }}>
                  Invest in Morocco
                </a>
              </div>
            </div>

            {/* Right stats panel */}
            <div style={{ borderLeft: '1px solid rgba(255,255,255,.08)', paddingLeft: 48, display: 'flex', flexDirection: 'column', gap: 32, animation: 'rise .8s ease .65s both' }}>
              {[
                { num: '19.8M', label: 'Tourists in Morocco 2025' },
                { num: '21%',   label: 'Net annual rental yield' },
                { num: '2030',  label: 'FIFA World Cup host city' },
              ].map(s => (
                <div key={s.num}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2.8rem', color: GOLD, lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                  <div style={{ fontSize: '.68rem', fontWeight: 500, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}>{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,.25)', animation: 'bob 2.2s ease-in-out infinite' }}>
          <span style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase' }}>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14m0 0l-6-6m6 6l6-6"/></svg>
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section style={{ background: NAVY, padding: '72px 0' }}>
        <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <RV style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
            <span style={{ width: 32, height: 1, background: 'rgba(201,151,59,.4)', display: 'block' }} />
            <span style={{ fontSize: '.68rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)' }}>Morocco by the numbers</span>
          </RV>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: '19.8M', title: 'Tourists',  sub: 'Morocco 2025 · Most visited in Africa' },
              { num: '#1',    title: 'In Africa',  sub: 'Overtook Egypt · Record year' },
              { num: '1,000', title: 'Years Old',  sub: 'Marrakech · Founded 1062 AD' },
              { num: '2030',  title: 'World Cup',  sub: 'FIFA · Marrakech is a host city' },
            ].map((s, i) => (
              <RV key={s.num} delay={i * 0.08} style={{
                display: 'flex', alignItems: 'center', gap: 32,
                padding: '28px 0',
                borderBottom: '1px solid rgba(255,255,255,.06)',
                borderTop: i === 0 ? '1px solid rgba(255,255,255,.06)' : 'none',
              }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(3rem,6vw,5.5rem)', color: 'rgba(255,255,255,.07)', lineHeight: 1, flexShrink: 0, width: 180, textAlign: 'right' }}>
                  {s.num}
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(1.6rem,2.8vw,2.6rem)', color: WHITE, flex: 1 }}>
                  {s.title}
                </span>
                <span style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.35)', fontWeight: 300, maxWidth: 280 }}>
                  {s.sub}
                </span>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE ══ */}
      <section style={{ background: CREAMOF, padding: '120px 0' }} id="about">
        <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>

             {/* Image */}
             <RV>
               <div style={{ position: 'relative' }}>
                 <div style={{ aspectRatio: '3/4', background: 'url("/site%20images/luxury_villa_for_sale_in_marrakech16.jpg") center/cover no-repeat', borderRadius: 3, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <span style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.15)' }}>Founder Photo</span>
                   {/* Gold frame */}
                   <div style={{ position: 'absolute', top: 20, right: 20, width: 80, height: 80, border: '1px solid rgba(201,151,59,.3)', borderRadius: 2 }} />
                 </div>
                 {/* Offset gold block */}
                 <div style={{ position: 'absolute', bottom: -20, right: -20, width: 120, height: 120, background: GOLDP, borderRadius: 2, zIndex: -1 }} />
                 {/* Badge */}
                 <div style={{ position: 'absolute', bottom: 32, left: -24, background: NAVY, color: WHITE, padding: '18px 22px', maxWidth: 170, boxShadow: '0 8px 40px rgba(0,0,0,.25)' }}>
                   <strong style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: '1.8rem', color: GOLD, display: 'block', marginBottom: 4 }}>24/7</strong>
                   <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>On the ground in Marrakech</span>
                 </div>
               </div>
             </RV>

            {/* Copy */}
            <RV delay={0.2}>
              <Label>Who We Are</Label>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.2rem,3.5vw,3.5rem)', lineHeight: 1.08, color: NAVY, marginBottom: 24 }}>
                We Are{' '}
                <em style={{ color: GOLD, fontStyle: 'italic' }}>Vialane Homes.</em>
              </h2>
              <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: INKM, fontWeight: 300 }}>
                <p style={{ marginBottom: 16 }}>We are a Marrakech-based hospitality and real estate company built for the international traveller and the global investor.</p>
                <p style={{ marginBottom: 16 }}>Founded by a Nigerian entrepreneur who lives in Marrakech, we understand what it means to navigate this city as an outsider — and how to make sure you never feel like one.</p>
                <p style={{ marginBottom: 32 }}>Whether you are visiting for four days or buying your first investment property, we are on the ground, we know every corner of this city, and we are available 24/7.</p>
              </div>
              <TextLink href="/about">Our Story</TextLink>
            </RV>

          </div>
        </div>
      </section>

      {/* ══ DUAL OFFER ══ */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Tourism */}
        <RV style={{ background: NAVY, padding: '80px 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0L60 15L60 45L30 60L0 45L0 15Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1px solid rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: 36, color: WHITE }}>✦</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2rem,3vw,2.8rem)', color: WHITE, lineHeight: 1.1, marginBottom: 16 }}>
              Experience<br />Marrakech
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,.55)', fontWeight: 300, marginBottom: 36, maxWidth: 380 }}>
              Airport pickup. Apartments, riads &amp; villas. Car hire. Curated experiences. 24/7 concierge.<br /><br />
              Everything handled from arrival to departure.
            </p>
            <BtnGold href="/services">Explore Our Services →</BtnGold>
          </div>
        </RV>

        {/* Investment */}
        <RV delay={0.15} style={{ background: GOLD, padding: '80px 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .05, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0L60 15L60 45L30 60L0 45L0 15Z' fill='none' stroke='%230F1E3C' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', border: '1px solid rgba(15,30,60,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', marginBottom: 36, color: NAVY }}>◈</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2rem,3vw,2.8rem)', color: NAVY, lineHeight: 1.1, marginBottom: 16 }}>
              Invest in<br />Marrakech
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(15,30,60,.65)', fontWeight: 300, marginBottom: 36, maxWidth: 380 }}>
              Source. Purchase. Furnish. Manage.<br />
              21% net annual returns. Full foreign ownership.<br /><br />
              We run the property. You collect the income.
            </p>
            <a href="/invest" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: NAVY, color: WHITE,
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '.75rem', fontWeight: 600,
              letterSpacing: '.14em', textTransform: 'uppercase',
              padding: '14px 32px', borderRadius: 2, textDecoration: 'none',
            }}>
              Explore Investment →
            </a>
          </div>
        </RV>
      </section>

      {/* ══ WHY MARRAKECH ══ */}
      <section style={{ background: CREAMOF, padding: '120px 0' }} id="marrakech">
        <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>

            {/* Copy left */}
            <RV>
              <Label>Why Marrakech</Label>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.2rem,3.5vw,3.5rem)', lineHeight: 1.08, color: NAVY, marginBottom: 28 }}>
                The City Everyone<br />
                Is <em style={{ color: GOLD }}>Talking About.</em>
              </h2>
              <div style={{ borderTop: '1px solid rgba(15,30,60,.08)' }}>
                {[
                  { strong: "Africa's most visited country", rest: " — 19.8 million tourists in 2025" },
                  { strong: "Ranked 6th best destination", rest: " in the world by Le Routard" },
                  { strong: "Host city for 2030 FIFA World Cup", rest: " — property prices rising now" },
                  { strong: "1,000 years of living history,", rest: " food, and culture — this is not a trend" },
                ].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(15,30,60,.08)' }}>
                    <span style={{ width: 7, height: 7, background: GOLD, transform: 'rotate(45deg)', flexShrink: 0, marginTop: 8 }} />
                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: INKM, fontWeight: 300 }}>
                      <strong style={{ color: NAVY, fontWeight: 500 }}>{pt.strong}</strong>{pt.rest}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400, fontSize: '1.35rem', color: INKMU, lineHeight: 1.55, margin: '28px 0 32px' }}>
                Marrakech is not a trend. It has been extraordinary for ten centuries.
              </p>
              <TextLink href="/marrakech">Discover Marrakech</TextLink>
            </RV>

             {/* Image right */}
             <RV delay={0.15}>
               <div style={{ position: 'relative' }}>
                 <div style={{ aspectRatio: '4/5', background: 'url("/site%20images/Couloir-Riad-Diamond-Marrakech.webp") center/cover no-repeat', borderRadius: 3, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <span style={{ fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,.15)' }}>Marrakech Photo</span>
                 </div>
                 <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, background: GOLDP, borderRadius: 2, zIndex: -1 }} />
               </div>
             </RV>

          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section style={{ background: NAVY, padding: '120px 0' }} id="services">
        <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'flex-end', marginBottom: 64 }}>
            <RV>
              <Label>What We Do</Label>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.2rem,3.5vw,3.5rem)', color: WHITE, lineHeight: 1.08 }}>
                Everything You Need.<br />
                <em style={{ color: GOLD }}>Handled.</em>
              </h2>
            </RV>
            <RV delay={0.15}>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,.4)', fontWeight: 300 }}>
                From the moment your plane lands to the moment it takes off. One company. One contact. No stress.
              </p>
            </RV>
          </div>

          {/* Lookbook rows */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
            {[
              { n: '01', title: 'Airport Pickup & Drop-off',    desc: 'Private car. Named driver. Flat rate. Cold water in the car.' },
              { n: '02', title: 'Apartments & Riads',           desc: 'Personally vetted stays. From budget to boutique. All visited in person.' },
              { n: '03', title: 'Villas & Private Residences',  desc: 'Exclusive villas with pools for families and groups.' },
              { n: '04', title: 'Car Hire',                     desc: 'Self-drive or with a driver. Clean vehicles. No hidden fees.' },
              { n: '05', title: 'Experiences & Day Trips',      desc: 'Agafay Desert. Atlas Mountains. Hammam. Souk tours. All arranged.' },
              { n: '06', title: '24/7 Concierge',               desc: 'One WhatsApp number. Any hour. Any question. Always answered.' },
            ].map((s, i) => (
              <RV key={s.n} delay={i * 0.06} style={{
                display: 'flex', alignItems: 'center', gap: 32,
                padding: '24px 0',
                borderBottom: '1px solid rgba(255,255,255,.06)',
              }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4.5rem)', color: 'rgba(255,255,255,.06)', lineHeight: 1, flexShrink: 0, width: 120, textAlign: 'right' }}>
                  {s.n}
                </span>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 500, fontSize: 'clamp(.95rem,1.6vw,1.2rem)', color: WHITE, flex: 1 }}>
                  {s.title}
                </span>
                <span style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.35)', fontWeight: 300, maxWidth: 260, display: 'block' }}>
                  {s.desc}
                </span>
                <span style={{ color: GOLD, fontSize: '1.2rem', flexShrink: 0 }}>→</span>
              </RV>
            ))}
          </div>

          <RV style={{ textAlign: 'center', marginTop: 56 }}>
            <BtnGold href="/services">See All Services →</BtnGold>
          </RV>
        </div>
      </section>

      {/* ══ EVENTS ══ */}
      <section style={{ background: CREAM, padding: '120px 0' }} id="events">
        <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 40, flexWrap: 'wrap' }}>
            <RV>
              <Label>Events</Label>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.2rem,3.5vw,3.5rem)', color: NAVY, lineHeight: 1.08 }}>
                Morocco<br />Never <em style={{ color: GOLD }}>Stops.</em>
              </h2>
            </RV>
            <RV delay={0.15} style={{ maxWidth: 360 }}>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: INKM, fontWeight: 300, marginBottom: 16 }}>
                From world-class film festivals to the 2030 FIFA World Cup, there is always a reason to be in Marrakech.
              </p>
              <TextLink href="/events">See Upcoming Events</TextLink>
            </RV>
          </div>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
             {[
               { image: '/site%20images/Sleep_GettyImages-1440978662_HR.avif', badge: 'Upcoming', date: 'Morocco + Spain + Portugal · 2030', title: 'FIFA World Cup 2030', desc: 'The biggest sporting event on earth is coming to Morocco. Marrakech is a host city. Over 1.2 million fans expected.' },
               { image: '/site%20images/featured-property-image-morocco-3.jpg', badge: 'Upcoming', date: 'May 7–10, 2026 · Marrakech', title: 'Caftan Week', desc: 'Traditional Moroccan kaftans meet contemporary fashion. One of the most visually spectacular events in the country.' },
               { image: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg', badge: 'Annual · July', date: 'Annual — July · El Badi Palace', title: 'Festival National des Arts Populaires', desc: 'Fire-eaters, acrobats, folk musicians inside the walls of a 16th-century palace. Free to attend.' },
             ].map((ev, i) => (
               <RV key={i} delay={i * 0.1} style={{ background: CREAMOF, borderRadius: 3, overflow: 'hidden', border: '1px solid rgba(15,30,60,.07)', cursor: 'pointer' }}>
                 <div style={{ aspectRatio: '16/10', background: `url(${ev.image}) center/cover no-repeat`, position: 'relative' }}>
                   <span style={{ position: 'absolute', top: 12, left: 12, background: GOLD, color: NAVY, fontSize: '.62rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 2 }}>{ev.badge}</span>
                 </div>
                 <div style={{ padding: '28px 28px 32px' }}>
                   <p style={{ fontSize: '.7rem', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>{ev.date}</p>
                   <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: NAVY, marginBottom: 10, lineHeight: 1.2 }}>{ev.title}</h4>
                   <p style={{ fontSize: '.9rem', lineHeight: 1.7, color: INKM, fontWeight: 300 }}>{ev.desc}</p>
                 </div>
               </RV>
             ))}
           </div>

          <RV style={{ textAlign: 'center', marginTop: 56 }}>
            <BtnGold href="/events">See All Events →</BtnGold>
          </RV>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section style={{ background: NAVYD, padding: '140px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }} id="contact">
        <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 500, background: 'radial-gradient(ellipse, rgba(201,151,59,.07) 0%, transparent 68%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
          <RV>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
              <span style={{ fontSize: '.68rem', fontWeight: 500, letterSpacing: '.22em', textTransform: 'uppercase', color: GOLD }}>Get In Touch</span>
              <span style={{ width: 28, height: 1, background: GOLD, display: 'block' }} />
            </div>
          </RV>
          <RV delay={0.1}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,5.2rem)', color: WHITE, lineHeight: 1.08, marginBottom: 20 }}>
              Ready to Experience<br />
              Marrakech <em style={{ color: GOLD }}>the Right Way?</em>
            </h2>
          </RV>
          <RV delay={0.2}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,.4)', maxWidth: 440, margin: '0 auto 48px', fontWeight: 300 }}>
              Tell us your dates and what you need. We will handle the rest.
            </p>
          </RV>
          <RV delay={0.3} style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://wa.me/212600000000?text=Hi%2C%20I%27m%20ready%20to%20experience%20Marrakech%20the%20right%20way"
               target="_blank" rel="noopener noreferrer"
               style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: WA, color: WHITE, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.75rem', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 2, textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us Now
            </a>
            <a href="/contact"
               style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,.22)', color: WHITE, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.75rem', fontWeight: 400, letterSpacing: '.14em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 2, textDecoration: 'none', background: 'transparent' }}>
              Send an Enquiry →
            </a>
          </RV>
        </div>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes rise { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bob  { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(8px); } }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .dual-grid { grid-template-columns: 1fr !important; }
          .ev-grid { grid-template-columns: 1fr 1fr !important; }
          .srv-desc-col { display: none !important; }
        }
        @media (max-width: 600px) {
          .ev-grid { grid-template-columns: 1fr !important; }
          .hero-panel { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}