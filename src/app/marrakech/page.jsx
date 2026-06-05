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

function Label({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
      <span className="block w-7 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">{children}</span>
      {center && <span className="block w-7 h-px bg-gold flex-shrink-0" />}
    </div>
  );
}

function WaBtn({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       className="inline-flex items-center gap-2 text-white font-body text-xs font-semibold tracking-[.14em] uppercase px-7 py-4 rounded-none no-underline transition-all duration-200"
       style={{ background: hov ? '#1fb956' : '#25D366', transform: hov ? 'translateY(-2px)' : 'none' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {children}
    </a>
  );
}

const experiences = [
  { title: 'Jemaa el-Fna', sub: "The world's greatest square. Fire dancers, storytellers, 200 food stalls.", img: '/site%20images/moroccan_interior_design_style_xj5pc-1024x572.jpg' },
  { title: 'The Souks', sub: 'A thousand stalls. Leather, spice, rugs. Put your phone down and wander.', img: '/site%20images/service.jpg' },
  { title: 'The Hammam', sub: 'Steam room. Black soap scrub. Argan oil massage. Ancient ritual.', img: '/site%20images/featured-property-image-morocco-3.jpg' },
  { title: 'Agafay Desert', sub: 'Semi-desert plateau just outside the city. Camel ride at golden hour.', img: '/site%20images/Couloir-Riad-Diamond-Marrakech.webp' },
  { title: 'Atlas Mountains', sub: 'Snow-capped peaks. Berber villages. Hiking trails in Imlil.', img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg' },
  { title: 'Jardin Majorelle', sub: "Yves Saint Laurent's icon. Cobalt blue garden. Botanical beauty.", img: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg' },
  { title: 'The Food', sub: 'Tagine for $5. Fresh orange juice for 40 cents. Best meal of your life.', img: '/site%20images/Real-Dream-House-Agence-immobiliere-marrakech.webp' },
  { title: 'The Nightlife', sub: 'Rooftop bars in Gueliz. Clubs in Hivernage. The Red City after dark.', img: '/site%20images/image-home.jpg' },
];

export default function MarrakechPage() {
  useReveal();

  return (
    <div className="font-body overflow-x-hidden bg-cream-off text-ink">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden pb-20 pt-44 bg-navy-deep">
        <div className="absolute inset-0 bg-[url('/site%20images/hero_section.jpg')] bg-center bg-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />
        <div className="absolute inset-0 opacity-[.05]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke='%23C9973B' stroke-width='0.5'%3E%3Cpath d='M50 0L100 25L100 75L50 100L0 75L0 25Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10" style={{ animation: 'rise .6s ease .2s both' }}>
            <a href="/" className="font-body text-xs text-white/30 no-underline tracking-wider hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20 text-xs">›</span>
            <span className="font-body text-xs text-gold tracking-wider">Marrakech</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: 'rise .7s ease .3s both' }}>
              <span className="block w-8 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">The Red City</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[.95] mb-6"
                style={{ fontSize: 'clamp(2.8rem,7vw,6.5rem)', animation: 'rise .9s ease .4s both' }}>
              Marrakech.<br />
              <em className="text-gold">The City That Gets<br />Under Your Skin.</em>
            </h1>

            <p className="font-body font-light text-white/55 leading-relaxed mb-10 max-w-xl"
               style={{ fontSize: '1.05rem', animation: 'rise .8s ease .6s both' }}>
              Africa's most visited destination. A thousand years of living history.
              The food, the colour, the noise, the silence of a riad at midnight.
              Once you've been, everywhere else feels like it's missing something.
            </p>

            <div className="flex gap-3 flex-wrap" style={{ animation: 'rise .8s ease .75s both' }}>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27m%20interested%20in%20Marrakech%20property">
                Plan My Trip →
              </WaBtn>
              <a href="#visa"
                 className="inline-flex items-center gap-2 border border-white/22 hover:border-gold text-white hover:text-gold font-body text-xs font-normal tracking-[.14em] uppercase px-7 py-4 rounded-none no-underline transition-all duration-200">
                Visa Info ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY NOW ══ */}
      <section className="py-24 md:py-32 bg-cream-off">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Copy */}
            <RV>
              <Label>Why Marrakech</Label>
              <h2 className="font-display font-bold text-navy leading-tight mb-8"
                  style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}>
                Why Marrakech.<br />
                <em className="text-gold">Why Right Now.</em>
              </h2>
              <div className="font-body font-light text-ink-mid leading-relaxed space-y-5 mb-8"
                   style={{ fontSize: '1.02rem', lineHeight: 1.85 }}>
                <p>Morocco just overtook Egypt to become Africa's most visited country. 19.8 million tourists arrived in 2025, a new national record.</p>
                <p>Marrakech alone accounts for 40% of all overnight stays in Morocco. The country hosted AFCON 2025 across six world-class cities. The world watched.</p>
                <p>In 2030, Morocco co-hosts the FIFA World Cup with Spain and Portugal. $9.6 billion in high-speed rail. A new airport expanding from 9 million to 14.2 million passengers.</p>
                <p className="font-medium text-navy">The city is being built for the world. This is the moment to be here, not after the world has fully arrived. Now.</p>
              </div>
            </RV>

            {/* Visual mosaic */}
            <RV delay={0.15}>
              <div className="grid grid-cols-2 gap-3" style={{ height: 'clamp(320px,50vw,520px)' }}>
                {/* Tall left image */}
                <div className="rounded-none overflow-hidden">
                  <img src="/site%20images/moroccan_interior_design_style_xj5pc-1024x572.jpg"
                       alt="Moroccan architecture"
                       className="w-full h-full object-cover" />
                </div>
                {/* Right column — stat card + image */}
                <div className="flex flex-col gap-3">
                  <div className="bg-gold rounded-none flex-1 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="font-display font-bold text-navy" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1 }}>
                        19.8M
                      </div>
                      <div className="font-body text-xs font-semibold tracking-[.14em] uppercase text-navy/70 mt-2">
                        Tourists · 2025
                      </div>
                    </div>
                  </div>
                  <div className="rounded-none overflow-hidden flex-1">
                    <img src="/site%20images/Couloir-Riad-Diamond-Marrakech.webp"
                         alt="Marrakech riad"
                         className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </RV>
          </div>
        </div>
      </section>

      {/* ══ STATS ROW ══ */}
      <section className="bg-navy py-16">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/08">
            {[
              { num: '#1', label: 'Most Visited in Africa' },
              { num: '6th', label: 'Best in World · Le Routard' },
              { num: '1,000', label: 'Years of History' },
              { num: '2030', label: 'FIFA World Cup Host' },
            ].map((s, i) => (
              <div key={i} className="text-center px-6 py-4">
                <div className="font-display font-bold text-gold mb-2"
                     style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div className="font-body text-xs font-medium tracking-[.12em] uppercase text-white/35">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCES ══ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="text-center mb-16">
            <Label center>The Experience</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1 }}>
              What You Will Do.
            </h2>
          </RV>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {experiences.map((e, i) => (
              <RV key={i} delay={i * 0.06}>
                <div className="relative rounded-none overflow-hidden group"
                     style={{ minHeight: 280 }}>
                  <img src={e.img} alt={e.title}
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-transparent" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <h3 className="font-display font-bold text-white mb-1.5 leading-tight"
                        style={{ fontSize: 'clamp(1rem,2vw,1.3rem)' }}>
                      {e.title}
                    </h3>
                    <p className="font-body font-light text-white/65 leading-relaxed"
                       style={{ fontSize: '.82rem', lineHeight: 1.6 }}>
                      {e.sub}
                    </p>
                  </div>
                </div>
              </RV>
            ))}
          </div>

          <RV className="mt-12 text-center">
            <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20Marrakech">
              Plan My Experiences →
            </WaBtn>
          </RV>
        </div>
      </section>

      {/* ══ VISA INFO ══ */}
      <section className="py-24 md:py-32 bg-cream-off" id="visa">
        <div className="max-w-[860px] mx-auto px-6 md:px-12">
          <RV className="text-center mb-14">
            <Label center>Travel Info</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.15 }}>
              Can I Visit Morocco?
            </h2>
          </RV>

          <div className="flex flex-col gap-3">
            {/* Nigerian passport */}
            <RV>
              <div className="bg-cream border border-navy/08 rounded-none p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-gold flex-shrink-0" style={{ transform: 'rotate(45deg)' }} />
                  <h3 className="font-display font-bold text-navy"
                      style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)' }}>
                    For Nigerian Passport Holders
                  </h3>
                </div>
                <p className="font-body font-light text-ink-mid leading-relaxed mb-5"
                   style={{ fontSize: '.98rem', lineHeight: 1.8 }}>
                  You need a visa to visit Morocco. Two options:
                </p>
                <div className="flex flex-col gap-5">
                  <div className="border-l-2 border-gold pl-5">
                    <p className="font-body font-medium text-navy mb-1">Option 1: Standard Tourist Visa</p>
                    <p className="font-body font-light text-ink-mid leading-relaxed"
                       style={{ fontSize: '.92rem', lineHeight: 1.75 }}>
                      Apply at the Moroccan embassy in Lagos or Abuja. Up to 90 days. Processing approx 10 business days.
                      Documents: valid passport, photos, bank statement, return flight, accommodation proof.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold pl-5">
                    <p className="font-body font-medium text-navy mb-1">Option 2: eVisa</p>
                    <p className="font-body font-light text-ink-mid leading-relaxed"
                       style={{ fontSize: '.92rem', lineHeight: 1.75 }}>
                      If you hold a valid UK, US, Schengen, Canadian, or Australian residency permit or multi-entry visa,
                      you can apply entirely online. No embassy visit required. Approval by email.
                    </p>
                  </div>
                </div>
                <p className="font-body font-light italic text-ink-muted mt-6"
                   style={{ fontSize: '.88rem' }}>
                  We help our clients prepare their booking confirmation letter as part of our service — just ask.
                </p>
              </div>
            </RV>

            {/* UK / EU / US */}
            <RV delay={0.1}>
              <div className="bg-navy rounded-none p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-gold flex-shrink-0" style={{ transform: 'rotate(45deg)' }} />
                  <h3 className="font-display font-bold text-white"
                      style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)' }}>
                    For UK, European, American &amp; Gulf Visitors
                  </h3>
                </div>
                <p className="font-body font-light text-white/55 leading-relaxed mb-8"
                   style={{ fontSize: '.98rem', lineHeight: 1.8 }}>
                  Most nationalities enter Morocco visa-free for up to 90 days.
                  Your passport must be valid for at least 6 months from your entry date.
                </p>
                <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20check%20visa%20requirements%20for%20my%20passport">
                  WhatsApp Us for Visa Help
                </WaBtn>
              </div>
            </RV>
          </div>
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
            <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27m%20interested%20in%20Marrakech%20property">
              WhatsApp Us Now
            </WaBtn>
            <a href="/contact"
               className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-body text-xs font-semibold tracking-[.14em] uppercase px-8 py-4 rounded-none no-underline transition-all duration-200">
              Send an Enquiry →
            </a>
          </RV>
        </div>
      </section>


    </div>
  );
}