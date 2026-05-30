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
       className="inline-flex items-center gap-2 bg-[#25D366] text-white font-body text-xs font-semibold tracking-widest uppercase no-underline rounded-md transition-all duration-200"
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

  const experiences = [
    { title: 'Jemaa el-Fna', sub: "The World&apos;s Greatest Square. Fire dancers, storytellers, 200 food stalls.", icon: '🔥', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop' },
    { title: 'The Souks', sub: 'A thousand stalls. Leather, spice, rugs. Put your phone down and wander.', icon: '🛍️', img: 'https://images.unsplash.com/photo-1590412678613-b6e77059a364?q=80&w=1000&auto=format&fit=crop' },
    { title: 'The Hammam', sub: 'Steam room. Black soap scrub. Argan oil massage. Ancient ritual.', icon: '💆', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Agafay Desert', sub: 'Semi-desert plateau just outside the city. Camel ride at golden hour.', icon: '🐫', img: 'https://images.unsplash.com/photo-1532296076757-0a252d6995f8?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Atlas Mountains', sub: 'Snow-capped peaks. Berber villages. Hiking trails in Imlil.', icon: '⛰️', img: 'https://images.unsplash.com/photo-1532296076757-0a252d6995f8?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Jardin Majorelle', sub: "Yves Saint Laurent&apos;s Icon. Cobalt blue garden. Botanical beauty.", icon: '🌿', img: 'https://images.unsplash.com/photo-1590412678613-b6e77059a364?q=80&w=1000&auto=format&fit=crop' },
    { title: 'The Food', sub: "Tagine for $5. Fresh orange juice for 40 cents. Best meal of your life.", icon: '🍲', img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Rooftop Marrakech', sub: 'Rooftop bars in Gueliz. Clubs in Hivernage. The Red City after dark.', icon: '🌙', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <div className="font-body text-ink-mid bg-cream-off overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[85vh] flex items-center justify-center text-center bg-navy-deep">
        <img
          src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop"
          alt="Jemaa el-Fnaa at night"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/4 to-navy-deep/9" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <RV delay={0.1}>
            <h1 className="font-display font-bold leading-tight text-white mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Marrakech.<br />
              <em className="text-gold italic">The City That Gets Under Your Skin.</em>
            </h1>
          </RV>

          <RV delay={0.2}>
            <p className="text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl mx-auto font-light">
              Africa&apos;s most visited destination. A thousand years of living history.<br />
              The food, the colour, the noise, the silence of a riad at midnight.<br />
              Once you&apos;ve been, everywhere else feels like it&apos;s missing something.
            </p>
          </RV>
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
              <p>Morocco just overtook Egypt to become Africa&apos;s most visited country. 19.8 million tourists arrived in 2025 — a new record.</p>
              <p>Marrakech alone accounts for 40% of all overnight stays in Morocco. The country hosted AFCON 2025 across six world-class cities. The world watched.</p>
              <p>In 2030, Morocco co-hosts the FIFA World Cup with Spain and Portugal. $9.6 billion in high-speed rail. A new airport expanding from 9 million to 14.2 million passengers.</p>
              <p className="font-semibold text-navy">The city is being built for the world. This is the moment to be here. Not after the world has fully arrived. Now.</p>
            </div>
          </RV>

          <RV delay={0.15}>
            <div className="grid grid-cols-2 gap-4 h-[clamp(300px,50vw,500px)]">
              <div className="bg-navy rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590412678613-b6e77059a364?q=80&w=800&auto=format&fit=crop" alt="Morocco Architecture" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-gold rounded-xl flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-3xl md:text-5xl font-bold text-navy">19.8M</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy mt-2">Tourists in 2025</div>
                  </div>
                </div>
                <div className="bg-navy-deep rounded-xl flex-1 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532296076757-0a252d6995f8?q=80&w=800&auto=format&fit=crop" alt="Desert" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </div>
          </RV>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <RV className="text-center mb-16">
            <Label>The Experience</Label>
            <h2 className="font-display font-bold text-2xl md:text-5xl text-navy" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>What You Will Do.</h2>
          </RV>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {experiences.map((e, i) => (
              <RV key={i} delay={i * 0.08}>
                <div className="bg-navy rounded-xl min-h-72 relative overflow-hidden flex flex-col justify-end">
                  <img src={e.img} alt={e.title} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

                  <div className="relative z-10 p-6 md:p-8">
                    <div className="text-2xl mb-3">{e.icon}</div>
                    <h3 className="font-display font-bold text-base md:text-lg text-white mb-2" style={{ lineHeight: 1.2 }}>{e.title}</h3>
                    <p className="text-xs md:text-sm text-white/70" style={{ lineHeight: 1.6 }}>{e.sub}</p>
                  </div>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Info Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <RV className="text-center mb-12">
            <Label>Travel Info</Label>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-navy" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Can I Visit Morocco?</h2>
          </RV>

          <RV delay={0.1} className="bg-white p-10 md:p-14 rounded-xl border border-navy/6 shadow-xl">

            <div className="mb-10">
              <h3 className="font-body font-bold text-base md:text-lg text-navy mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" />
                For Nigerian Passport Holders
              </h3>
              <p className="text-base text-ink-mid leading-relaxed mb-4">You need a visa to visit Morocco. Two options:</p>
              <ul className="list-none space-y-3 text-base text-ink-mid leading-relaxed">
                <li><strong className="text-navy">Option 1 &mdash; Standard Tourist Visa:</strong><br />
                  Apply at the Moroccan embassy in Lagos or Abuja. Allows up to 90 days. Processing: approx 10 business days. Documents: valid passport, photos, bank statement, return flight, accommodation proof.</li>
                <li><strong className="text-navy">Option 2 &mdash; eVisa:</strong><br />
                  If you hold a valid UK, US, Schengen, Canadian, or Australian residency permit or multi-entry visa, you can apply entirely online. No embassy visit required. Approval by email.</li>
              </ul>
              <p className="text-sm text-ink-muted mt-4 italic">We help our clients prepare their booking confirmation letter as part of our service &mdash; just ask.</p>
            </div>

            <div className="h-px bg-navy/8 my-8" />

            <div>
              <h3 className="font-body font-bold text-base md:text-lg text-navy mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" />
                For UK, European, American &amp; Gulf Visitors
              </h3>
              <p className="text-base text-ink-mid leading-relaxed mb-6">Most nationalities enter Morocco visa-free for up to 90 days. Your passport must be valid for at least 6 months from entry date.</p>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20check%20visa%20requirements%20for%20my%20passport">
                WhatsApp Us for Visa Help
              </WaBtn>
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
              Your Marrakech is<br />
              <em className="text-gold">One Message Away.</em>
            </h2>
            <p className="text-base md:text-lg text-white/40 font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Tell us your dates and what you need.<br />We will handle the rest.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
                WhatsApp Us Now
              </WaBtn>
              <a href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white font-body text-xs font-normal tracking-widest uppercase py-3.5 px-7 rounded-md no-underline transition-colors hover:border-gold">
                Send an Enquiry &rarr;
              </a>
            </div>
          </RV>
        </div>
      </section>
    </div>
  );
}