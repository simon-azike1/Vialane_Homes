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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function RV({ children, delay = 0, className = '', style = {}, ...props }) {
  return (
    <div
      className={`rv ${className}`}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity .9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform .9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function Label({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
      <span className="block w-7 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">
        {children}
      </span>
      {center && <span className="block w-7 h-px bg-gold flex-shrink-0" />}
    </div>
  );
}

export default function AboutPage() {
  useReveal();
  const [hovWa, setHovWa] = useState(false);
  const [hovStory, setHovStory] = useState(false);

  return (
    <div className="font-body overflow-x-hidden bg-cream-off text-ink">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden bg-navy-deep pb-20 pt-40">
        {/* BG image */}
        <div className="absolute inset-0 bg-[url('/site%20images/hero_section.jpg')] bg-center bg-cover opacity-40" />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/20" />
        <div className="absolute inset-0 opacity-[.055]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke='%23C9973B' stroke-width='0.5'%3E%3Cpath d='M50 0L100 25L100 75L50 100L0 75L0 25Z'/%3E%3C/g%3E%3C/svg%3E")` }}
        />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10" style={{ animation: 'rise .6s ease .2s both' }}>
            <a href="/" className="font-body text-xs text-white/30 no-underline tracking-wider hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20 text-xs">›</span>
            <span className="font-body text-xs text-gold tracking-wider">About</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: 'rise .7s ease .3s both' }}>
              <span className="block w-8 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">About Vialane Homes</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[.95] mb-6"
                style={{ fontSize: 'clamp(2.8rem,7vw,6rem)', animation: 'rise .9s ease .4s both' }}>
              We did not wait<br />
              for someone to<br />
              build this.<br />
              <em className="text-gold">We built it ourselves.</em>
            </h1>

            <p className="font-body font-light text-white/55 leading-relaxed mb-10 max-w-xl"
               style={{ fontSize: '1.05rem', animation: 'rise .8s ease .6s both' }}>
              Founded in Marrakech by a Nigerian entrepreneur who knows what it means
              to navigate this city as an outsider, and how to make sure you never feel like one.
            </p>

            <div className="flex gap-3 flex-wrap" style={{ animation: 'rise .8s ease .75s both' }}>
              <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Vialane%20Homes"
                 target="_blank" rel="noopener noreferrer"
                 onMouseEnter={() => setHovWa(true)} onMouseLeave={() => setHovWa(false)}
                 className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200"
                 style={{ transform: hovWa ? 'translateY(-2px)' : 'translateY(0)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat With Us
              </a>
              <a href="#story"
                 onMouseEnter={() => setHovStory(true)} onMouseLeave={() => setHovStory(false)}
                 className="inline-flex items-center gap-2 font-body text-xs font-normal tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200"
                 style={{ border: `1px solid ${hovStory ? '#C9973B' : 'rgba(255,255,255,.2)'}`, color: hovStory ? '#C9973B' : 'white' }}>
                Our Story ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══ */}
      <section className="bg-navy border-b border-white/5 py-14">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/08">
              {[
                { num: '24/7',  label: 'Availability' },
                { num: '<2hr',  label: 'Response Time' },
                { num: '100%',  label: 'Foreign Ownership' },
                { num: '21%',   label: 'Net Annual ROI' },
              ].map((s, i) => (
                <div key={i} className="text-center px-8 py-2">
                  <div className="font-display font-bold text-gold mb-2"
                       style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div className="font-body text-xs font-medium tracking-[.15em] uppercase text-white/35">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </RV>
        </div>
      </section>

      {/* ══ FOUNDER STORY ══ */}
      <section id="story" className="py-24 md:py-36 bg-cream-off">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Image */}
            <RV>
              <div className="relative">
                {/* Outer gold border accent */}
                <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-gold/25 rounded-sm pointer-events-none z-0" />
                {/* Main image */}
                <div className="relative z-10 aspect-[3/4] bg-gradient-to-br from-navy via-navy-deep to-[#1c0e06] rounded-sm overflow-hidden flex flex-col justify-end p-8">
                  {/* Placeholder content */}
                  <div className="relative z-10 aspect-[3/4] rounded-sm overflow-hidden flex flex-col justify-end p-8">
  {/* Founder photo */}
  <img
    src="/founder_Vialane.jpg"
    alt="Vialane Homes Founder — Marrakech"
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
  {/* Dark overlay so caption is readable */}
  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
  {/* Caption */}
  <div className="relative z-10 border-t border-white/10 pt-6">
    <p className="font-display italic text-white/80 leading-snug mb-1"
       style={{ fontSize: 'clamp(1rem,2vw,1.2rem)' }}>
      On the ground in Marrakech,<br />every single day.
    </p>
    <p className="font-body text-xs text-white/35 tracking-wider">Founder · Marrakech, 2025</p>
  </div>
</div>  </div>
                {/* Gold offset block */}
                <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gold-pale rounded-sm -z-10" />
              </div>
            </RV>

            {/* Story copy */}
            <RV delay={0.15}>
              <Label>Our Story</Label>
              <h2 className="font-display font-bold text-navy leading-tight mb-8"
                  style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>
                The Story Behind<br />
                <em className="text-gold">Vialane Homes</em>
              </h2>

              <div className="font-body font-light text-ink-mid leading-relaxed space-y-5 mb-10"
                   style={{ fontSize: '1.02rem', lineHeight: 1.85 }}>
                <p>Marrakech is one of the most extraordinary cities on earth. It has been drawing travellers for a thousand years. And yet, if you arrive here without a trusted contact, without someone who knows the city and understands what you actually need, you can miss the whole thing.</p>
                <p>We started Vialane Homes to be that contact. For tourists who want to experience the real Marrakech. For investors who see what this city is becoming. For anyone who deserves to be here and deserves to do it right.</p>
                <p>We are young, we are ambitious, and we are on the ground. That is not a weakness, it is the whole point.</p>
              </div>

              {/* Quick tags */}
              <div className="flex gap-6 flex-wrap mb-10">
                {[
                  { icon: '✈', label: 'Tourism' },
                  { icon: '◉', label: 'Investment' },
                  { icon: '✦', label: 'Concierge' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-gold text-lg">{t.icon}</span>
                    <span className="font-body text-xs font-medium tracking-[.15em] uppercase text-ink-muted">{t.label}</span>
                  </div>
                ))}
              </div>

              <a href="#mission"
                 className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-[.14em] uppercase text-gold no-underline border-b border-gold/30 pb-0.5 hover:border-gold transition-colors duration-200">
                Read Our Mission
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6"/>
                </svg>
              </a>
            </RV>
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section id="mission" className="bg-navy py-24 md:py-36 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
             style={{ background: 'radial-gradient(ellipse, rgba(201,151,59,.08) 0%, transparent 70%)' }} />
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[.04]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 20L80 60L40 80L0 60L0 20Z' fill='none' stroke='%23C9973B' stroke-width='0.35'/%3E%3C/svg%3E")` }} />

        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center relative z-10">
          <RV>
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="block w-8 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">Our Mission</span>
              <span className="block w-8 h-px bg-gold" />
            </div>
          </RV>

          <RV delay={0.1}>
            <h2 className="font-display font-bold text-white leading-tight mb-10"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
              To make Marrakech accessible, safe, and extraordinary
              for every visitor and every investor who chooses to be here.
            </h2>
          </RV>

          <RV delay={0.2}>
            <div className="font-body font-light text-white/50 leading-relaxed space-y-4 max-w-xl mx-auto mb-12"
                 style={{ fontSize: '1.02rem' }}>
              <p>Not just for tourists with European passports.<br />Not just for buyers with the biggest budgets.</p>
              <p className="text-white/70 font-normal">For everyone who is ready to experience what this city truly has to offer.</p>
            </div>
          </RV>

          {/* Gold divider line */}
          <RV delay={0.3}>
            <div className="flex items-center justify-center gap-4">
              <span className="block w-16 h-px bg-gold/30" />
              <span className="text-gold text-xl">✦</span>
              <span className="block w-16 h-px bg-gold/30" />
            </div>
          </RV>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="py-24 md:py-36 bg-cream-off">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="text-center mb-16">
            <Label center>What We Stand For</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
              Our Values
            </h2>
          </RV>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                num: '01', icon: '✦',
                title: 'Transparency',
                desc: 'We quote before we charge. We explain before we book. You will never see a surprise on your invoice.',
                dark: false,
              },
              {
                num: '02', icon: '◉',
                title: 'On the Ground',
                desc: 'We are not a remote agency working from a spreadsheet. We are in Marrakech. We know every street, every driver, every property — personally.',
                dark: true,
              },
              {
                num: '03', icon: '♦',
                title: 'Actually There For You',
                desc: 'Our WhatsApp is not a chatbot. It is a person. We respond within 2 hours. Every time.',
                dark: false,
              },
            ].map((val, i) => (
              <RV key={i} delay={i * 0.12}>
                <div className="relative p-10 md:p-12 rounded-sm overflow-hidden min-h-[380px] flex flex-col"
                     style={{ background: val.dark ? '#0F1E3C' : '#FDFAF5', border: val.dark ? 'none' : '1px solid rgba(15,30,60,.08)' }}>
                  {/* Watermark number */}
                  <div className="absolute -top-2 right-4 font-display font-black leading-none select-none pointer-events-none"
                       style={{ fontSize: '9rem', color: val.dark ? 'rgba(255,255,255,.03)' : 'rgba(15,30,60,.04)' }}>
                    {val.num}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-sm mb-8 flex items-center justify-center text-lg flex-shrink-0"
                       style={{ background: val.dark ? '#C9973B' : '#0F1E3C', color: val.dark ? '#0F1E3C' : '#C9973B' }}>
                    {val.icon}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-display font-bold mb-4 leading-tight"
                      style={{ fontSize: 'clamp(1.3rem,2.5vw,1.7rem)', color: val.dark ? '#FFFFFF' : '#0F1E3C' }}>
                    {val.title}
                  </h3>

                  {/* Desc */}
                  <p className="relative z-10 font-body font-light leading-relaxed flex-1"
                     style={{ fontSize: '.98rem', lineHeight: 1.75, color: val.dark ? 'rgba(255,255,255,.5)' : '#3E3328' }}>
                    {val.desc}
                  </p>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY TRUST US ══ */}
      <section className="py-24 md:py-36 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
          <RV>
            <Label center>Transparency</Label>
            <h2 className="font-display font-bold text-navy mb-14"
                style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', lineHeight: 1.2 }}>
              Why Trust Us<br />When We Are New?
            </h2>
          </RV>

          <RV delay={0.1}>
            <div className="bg-cream-off border border-navy/08 rounded-sm p-10 md:p-16 relative text-left">
              {/* Opening quote */}
              <div className="absolute top-6 left-8 font-display text-7xl text-gold/20 leading-none select-none">&ldquo;</div>

              <div className="relative z-10 space-y-5 font-body font-light text-ink-mid leading-relaxed"
                   style={{ fontSize: '1.02rem', lineHeight: 1.85 }}>
                <p className="font-medium text-navy" style={{ fontWeight: 500 }}>Fair question. Here is the honest answer.</p>
                <p>We do not have ten years of reviews. We have something harder to manufacture: we are physically here, we care deeply about getting this right, and we will work harder for you than any established agency would, because your experience is our reputation.</p>
                <p>Every driver we recommend has been screened personally. Every property has been visited in person before we list it. Every service we offer is one we would be comfortable recommending to our own family.</p>
                <p className="font-display italic text-ink-muted" style={{ fontSize: '1.1rem' }}>We are building Vialane Homes on trust. The best way to earn yours is to do excellent work.</p>
                <p className="font-medium text-navy" style={{ fontWeight: 600 }}>And that starts with your trip.</p>
              </div>
            </div>
          </RV>

          <RV delay={0.2} className="mt-12 flex justify-center">
            <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20start%20planning%20my%20Marrakech%20experience"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1fb956] text-white font-body text-xs font-semibold tracking-[.14em] uppercase px-8 py-4 rounded-sm no-underline transition-all duration-200 hover:-translate-y-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Your Journey →
            </a>
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
              Your Marrakech Starts<br />
              <em className="text-gold">With a Single Message.</em>
            </h2>
          </RV>
          <RV delay={0.2}>
            <p className="font-body font-light text-white/40 leading-relaxed max-w-sm mx-auto mb-10"
               style={{ fontSize: '1rem' }}>
              Tell us your dates and what you need. We will handle everything else.
            </p>
          </RV>
          <RV delay={0.3} className="flex justify-center gap-3 flex-wrap">
            <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20experience"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-navy font-body text-xs font-semibold tracking-[.14em] uppercase px-8 py-4 rounded-sm no-underline transition-all duration-200 hover:-translate-y-0.5">
              Plan My Trip →
            </a>
            <a href="/contact"
               className="inline-flex items-center gap-2 border border-white/20 hover:border-gold text-white hover:text-gold font-body text-xs font-normal tracking-[.14em] uppercase px-8 py-4 rounded-sm no-underline transition-all duration-200">
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