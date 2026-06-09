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

// ── Input field ──────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div>
      <label className="block font-body text-xs font-medium tracking-[.16em] uppercase text-ink-muted mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full py-3.5 px-4 border border-navy/12 bg-cream-off font-body text-sm text-ink rounded-none outline-none transition-colors duration-200 focus:border-gold placeholder:text-ink-muted/50";

// ── Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  useReveal();
  const [status, setStatus]   = useState('idle'); // idle | submitting | success | error
  const [form, setForm]       = useState({ name: '', country: '', email: '', phone: '', type: 'prospective_investor', message: '' });

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="font-body overflow-x-hidden bg-cream-off text-ink">

      {/* ══ HERO ══ */}
      <section className="relative bg-navy-deep pt-44 pb-24 overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-[url('/site%20images/hero_section.jpg')] bg-center bg-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute inset-0 opacity-[.05]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke='%23C9973B' stroke-width='0.5'%3E%3Cpath d='M50 0L100 25L100 75L50 100L0 75L0 25Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10" style={{ animation: 'rise .6s ease .2s both' }}>
            <a href="/" className="font-body text-xs text-white/30 no-underline tracking-wider hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20 text-xs">›</span>
            <span className="font-body text-xs text-gold tracking-wider">Contact</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

            {/* Left , copy */}
            <div>
              <div className="flex items-center gap-3 mb-6" style={{ animation: 'rise .7s ease .3s both' }}>
                <span className="block w-8 h-px bg-gold" />
                <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">Contact Us</span>
              </div>

              <h1 className="font-display font-bold text-white leading-[.95] mb-6"
                  style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', animation: 'rise .9s ease .4s both' }}>
                Talk to Us.<br />
                <em className="text-gold">We Actually Reply.</em>
              </h1>

              <p className="font-body font-light text-white/55 leading-relaxed mb-10 max-w-md"
                 style={{ fontSize: '1.05rem', animation: 'rise .8s ease .6s both' }}>
                Whether you're ready to invest or just asking your first question , we're here.
                Consultations available remotely via video call.
              </p>

              {/* Contact cards */}
              <div className="flex flex-col gap-3" style={{ animation: 'rise .8s ease .75s both' }}>
                {/* WhatsApp */}
                <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20invest%20in%20Marrakech%20property"
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 bg-white/05 hover:bg-white/08 border border-white/08 hover:border-gold/40 rounded-none p-5 no-underline transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-white text-sm mb-0.5">WhatsApp</p>
                    <p className="font-body font-light text-white/45 text-xs">+212 647 574 605 · Response within 2 hours</p>
                  </div>
                  <span className="text-gold/0 group-hover:text-gold transition-colors duration-200 text-lg flex-shrink-0">→</span>
                </a>

                {/* Email */}
                <a href="mailto:hello@vialanehomes.com"
                   className="flex items-center gap-4 bg-white/05 hover:bg-white/08 border border-white/08 hover:border-gold/40 rounded-none p-5 no-underline transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F1E3C" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-white text-sm mb-0.5">Email</p>
                    <p className="font-body font-light text-white/45 text-xs">invest@vialanehomes.com · Reply within 24 hours</p>
                  </div>
                  <span className="text-gold/0 group-hover:text-gold transition-colors duration-200 text-lg flex-shrink-0">→</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 border border-white/08 rounded-none p-5">
                  <div className="w-11 h-11 rounded-full bg-white/08 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9973B" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-medium text-white text-sm mb-0.5">Based in</p>
                    <p className="font-body font-light text-white/45 text-xs">Marrakech, Morocco · On the ground 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right , founder trust block */}
            <RV delay={0.2} className="hidden md:block">
              <div className="relative">
                {/* Founder image */}
                <div className="aspect-[4/5] rounded-none overflow-hidden bg-gradient-to-br from-navy via-navy-deep to-[#1c0e06] relative">
                  <img src="/founder_Vialane.jpg"
                       alt="Vialane Homes Founder"
                       className="absolute inset-0 w-full h-full object-cover object-top"
                       onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="font-display italic text-white/85 leading-snug mb-3"
                       style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)' }}>
                      "I read every enquiry personally. Message me , I will reply."
                    </p>
                    <p className="font-body text-xs text-white/40 tracking-wider">
                      Founder · Vialane Homes · Marrakech
                    </p>
                  </div>
                </div>
                {/* Gold offset */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-pale rounded-none -z-10" />
              </div>
            </RV>
          </div>
        </div>
      </section>

      {/* ══ ENQUIRY FORM ══ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[860px] mx-auto px-6 md:px-12">
          <RV className="mb-12">
            <Label>Enquiry Form</Label>
            <h2 className="font-display font-bold text-navy mb-4"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.15 }}>
              Send Us an Enquiry
            </h2>
            <p className="font-body font-light text-ink-mid leading-relaxed"
               style={{ fontSize: '1rem' }}>
              Tell us what you are planning and when. We will come back to you with
              a personalised plan within 24 hours.
            </p>
          </RV>

          <RV delay={0.1}>
            {status === 'success' ? (
              /* Success state */
              <div className="bg-cream-off border border-navy/08 rounded-none p-14 text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F1E3C" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-navy mb-3"
                    style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
                  Enquiry Received.
                </h3>
                <p className="font-body font-light text-ink-mid leading-relaxed max-w-md mx-auto mb-8"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Thank you for reaching out. We have received your enquiry and will reply
                  via WhatsApp or email within 24 hours.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27ve%20just%20sent%20an%20enquiry">
                    Also Message Us on WhatsApp
                  </WaBtn>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', type: 'tourism', message: '' }); }}
                    className="inline-flex items-center gap-2 border border-navy/20 hover:border-gold text-navy hover:text-gold font-body text-xs font-normal tracking-[.14em] uppercase px-7 py-4 rounded-none cursor-pointer bg-transparent transition-all duration-200">
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit}
                    className="bg-cream-off border border-navy/08 rounded-none p-8 md:p-12 flex flex-col gap-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Full Name">
                    <input type="text" required placeholder="Your name"
                           value={form.name} onChange={set('name')}
                           className={inputCls} />
                  </Field>
                  <Field label="Country">
                    <select value={form.country} onChange={set('country')}
                            className={`${inputCls} appearance-none cursor-pointer`}>
                      <option value="">Select your country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Morocco">Morocco</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                      <option value="Portugal">Portugal</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Oman">Oman</option>
                      <option value="Turkey">Turkey</option>
                      <option value="China">China</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Email Address">
                    <input type="email" required placeholder="hello@email.com"
                           value={form.email} onChange={set('email')}
                           className={inputCls} />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input type="tel" placeholder="+234..."
                           value={form.phone} onChange={set('phone')}
                           className={inputCls} />
                  </Field>
                </div>

                <Field label="I am a">
                  <select value={form.type} onChange={set('type')}
                          className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="prospective_investor">Prospective investor</option>
                    <option value="existing_owner">Existing property owner</option>
                    <option value="other">Other</option>
                  </select>
                </Field>

                <Field label="Message">
                  <textarea rows={5} required
                            placeholder="Tell us your dates, group size, and what you need."
                            value={form.message} onChange={set('message')}
                            className={`${inputCls} resize-y`} />
                </Field>

                {status === 'error' && (
                  <p className="font-body text-sm text-red-500 bg-red-50 border border-red-200 rounded-none px-4 py-3">
                    Something went wrong. Please try again or WhatsApp us directly.
                  </p>
                )}

                <button type="submit" disabled={status === 'submitting'}
                        className="bg-gold hover:bg-gold-light text-navy font-body text-xs font-semibold tracking-[.14em] uppercase py-4 rounded-none border-none cursor-pointer transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'submitting' ? 'Sending...' : 'Send Enquiry →'}
                </button>

                <p className="font-body text-xs text-ink-muted text-center">
                  Prefer WhatsApp?{' '}
                  <a href="https://wa.me/212647574605" target="_blank" rel="noopener noreferrer"
                     className="text-gold no-underline border-b border-gold/30 hover:border-gold transition-colors duration-200">
                    Message us directly →
                  </a>
                </p>
              </form>
            )}
          </RV>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-24 md:py-32 bg-cream-off">
        <div className="max-w-[860px] mx-auto px-6 md:px-12">
          <RV className="mb-16">
            <Label>FAQ</Label>
            <h2 className="font-display font-bold text-navy mb-4"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.15 }}>
              Investor Questions
            </h2>
            <p className="font-body font-light text-ink-mid leading-relaxed"
               style={{ fontSize: '1rem' }}>
              Every question we get asked before someone buys , answered plainly.
            </p>
          </RV>

          <RV delay={0.1} className="flex flex-col">
            {[
              {
                q: 'Can foreigners legally own property in Morocco?',
                a: 'Yes. Morocco allows full foreign ownership of real estate, including freehold title. The process is straightforward: sign the compromis de vente, deposit a 5-10% deposit, and the notary registers the title. No Moroccan partner is required. We guide you through every step.'
              },
              {
                q: 'What taxes do you actually pay , at purchase, on rental income, and when you sell?',
                a: 'At purchase: 3% registration tax + roughly 1% notary fees. Rental income is taxed at progressive rates starting near 10%. On sale: if you hold more than 10 years you pay virtually nothing capital-gains-wise. Under 10 years the rate steps down each year , we model this for you.'
              },
              {
                q: 'Can you get your money back out of the country?',
                a: 'Yes. Morocco has no capital controls. Repatriation of principal, rental income, and sale proceeds is fully liberalised. We use an international bank network so money moves freely in and out of the country.'
              },
              {
                q: 'What is the Marrakech market doing right now and why is supply short?',
                a: 'Strong sustained demand, limited new construction, and a regulatory slowdown on out-of-city permits have tightened supply. Yields that were already 6-8% are under pressure , but quality entry-level product in the medina and Palmeraie is still scarce.'
              },
              {
                q: 'Who is buying and what returns are they getting?',
                a: 'Buyers are UK and EU families (tourism yield), Middle East investors (long-term value), and first-time north-Africa investors (currency hedge). Gross yields on our projects run 6.5-8.5%. Net after management fees: 5.5-7%.'
              },
              {
                q: 'What do real Airbnb occupancy rates and yields look like?',
                a: 'Our managed riads and apartments average 68-78% occupancy. Peak season (Oct–Apr) hits 88-95%. On a 500k MAD property that is a practical yield of 6.5-8% gross because we handle pricing, cleaning, and guest comms.'
              },
              {
                q: 'What projects are we selling and at what prices?',
                a: 'We currently have a boutique riad in the medina (2.1M MAD renovated), a modern apartment in the Palmeraie (1.4M MAD), and a fractional ownership co-investment in a completed hotel residence (800k MAD per 1/4 share). Prices are in MAD and fixed by contract.'
              },
              {
                q: 'How does the 50/50 interest-free payment plan work?',
                a: 'You pay 50% to lock the unit. The remaining 50% is split over 12, 18, or 24 months with 0% interest. The title is registered in your name at purchase , you own day one. Typical minimum deposit is 400k MAD.'
              },
              {
                q: 'Why does the 2030 FIFA World Cup make 2026 the entry window?',
                a: 'Infrastructure spend is already flowing into Marrakech for 2030 hospitality capacity. Hotel rooms and short-let supply will not scale in time. Buying now locks pre-cup prices and lets you ride the 2028-2030 supply crunch when demand peaks. History shows the last 3-4 years before a major tournament are the best entry points.'
              },
            ].map((item, i) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={i} className="border-b border-navy/08 last:border-b-0">
                  <button
                    onClick={() => setOpen(o => !o)}
                    className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left cursor-pointer bg-transparent border-none group"
                  >
                    <span className="font-body font-medium text-navy text-sm md:text-base leading-snug group-hover:text-gold transition-colors duration-200">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-navy/12 flex items-center justify-center transition-all duration-200 group-hover:border-gold group-hover:bg-gold/10"
                          style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="overflow-hidden transition-all duration-300 ease-out"
                       style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}>
                    <p className="font-body font-light text-ink-mid text-sm leading-relaxed pb-5 md:pb-6 max-w-[720px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </RV>
        </div>
      </section>

      {/* ══ SOCIAL / FOLLOW ══ */}
      <section className="bg-navy py-20 md:py-24">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            <RV>
              <Label>Follow the Journey</Label>
              <h2 className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>
                Watch Vialane Homes<br />
                <em className="text-gold">Being Built.</em>
              </h2>
              <p className="font-body font-light text-white/50 leading-relaxed"
                 style={{ fontSize: '1rem', lineHeight: 1.85 }}>
                We post real Marrakech content, properties, experiences, market updates,
                and the honest story of building this company from the ground up.
                Follow if you want to watch it unfold.
              </p>
            </RV>

            <RV delay={0.15}>
              <div className="flex flex-col gap-3">
                {[
                  { platform: 'Instagram', handle: '@vialanehomes', href: 'https://instagram.com/vialanehomes', desc: 'Properties, experiences, real Marrakech content' },
                  { platform: 'TikTok',    handle: '@vialanehomes', href: 'https://tiktok.com/@vialanehomes',   desc: 'Behind the scenes and city guides' },
                  { platform: 'LinkedIn',  handle: 'Vialane Homes', href: 'https://linkedin.com/company/vialanehomes', desc: 'Market updates and investment insights' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-5 bg-white/04 hover:bg-white/07 border border-white/07 hover:border-gold/30 rounded-none p-5 no-underline transition-all duration-200 group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-body font-medium text-white text-sm">{s.platform}</span>
                        <span className="font-body text-xs text-gold">{s.handle}</span>
                      </div>
                      <p className="font-body font-light text-white/40 text-xs">{s.desc}</p>
                    </div>
                    <span className="text-gold/0 group-hover:text-gold transition-colors duration-200 text-lg flex-shrink-0">→</span>
                  </a>
                ))}
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
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">Don't Wait</span>
              <span className="block w-7 h-px bg-gold" />
            </div>
          </RV>
          <RV delay={0.1}>
            <h2 className="font-display font-bold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem,5vw,4.5rem)' }}>
              The Fastest Way to<br />
              <em className="text-gold">Get Started is WhatsApp.</em>
            </h2>
          </RV>
          <RV delay={0.2}>
            <p className="font-body font-light text-white/40 leading-relaxed max-w-sm mx-auto mb-10"
               style={{ fontSize: '1rem' }}>
              Tell us your investment goals. We will come back with a clear plan within 24 hours.
            </p>
          </RV>
          <RV delay={0.3} className="flex justify-center gap-3 flex-wrap">
            <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20invest%20in%20Marrakech%20property">
              WhatsApp Us Now
            </WaBtn>
            <a href="mailto:hello@vialanehomes.com"
               className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-body text-xs font-semibold tracking-[.14em] uppercase px-8 py-4 rounded-none no-underline transition-all duration-200">
              Email Us →
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