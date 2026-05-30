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

function Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-7 h-px bg-gold flex-shrink-0" />
      <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">{children}</span>
    </div>
  );
}

function WaBtn({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       className="inline-flex items-center gap-2 text-white font-body text-xs font-semibold tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200"
       style={{ background: hov ? '#1fb956' : '#25D366', transform: hov ? 'translateY(-2px)' : 'none' }}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {children}
    </a>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────
const pastEvents = [
  {
    title: 'AFCON 2025 — Africa Cup of Nations',
    date: 'December 2025 – January 2026',
    img: '/site%20images/service.jpg',
    desc: "Morocco hosted the most commercially successful Africa Cup of Nations in the tournament's history. Six world-class cities. Millions of fans. Marrakech's stadium filled to capacity. International stars called it the best-organised tournament on the continent.",
  },
  {
    title: 'Marrakech International Film Festival',
    date: 'Annual — December',
    img: '/site%20images/featured-property-image-morocco-3.jpg',
    desc: "One of the most prestigious film festivals on the continent. International stars. Free open-air screenings in Jemaa el-Fna. Glamour and cinema in one of the world's most cinematic cities.",
  },
  {
    title: 'Gnaoua World Music Festival',
    date: 'Annual — June',
    img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg',
    desc: "UNESCO-recognised. Gnaoua music meets jazz, blues, and world fusion. The entire city of Essaouira becomes a stage. Book accommodation months in advance. Pairs perfectly with a Marrakech trip.",
  },
];

const upcomingEvents = [
  {
    title: 'FIFA World Cup 2030',
    date: '2030',
    loc: 'Marrakech + 5 cities',
    img: '/site%20images/Villa-Hotia_Marrakech_1_KPPM04016.jpg',
    desc: "The biggest sporting event on earth is coming to Morocco. Over 1.2M fans expected. New high-speed rail. Expanded airports. Africa's largest stadium.",
    featured: true,
  },
  {
    title: 'Caftan Week',
    date: 'May 7–10, 2026',
    loc: 'Marrakech',
    img: '/site%20images/Real-Dream-House-Agence-immobiliere-marrakech.webp',
    desc: 'Traditional Moroccan kaftans meet contemporary fashion design. One of the most visually spectacular events in the country.',
    featured: false,
  },
  {
    title: 'Festival National des Arts Populaires',
    date: 'July — annually',
    loc: 'El Badi Palace',
    img: '/site%20images/featured-property-image-morocco-3.jpg',
    desc: 'Fire-eaters, acrobats, folk musicians inside the walls of a 16th-century palace. Free to attend. Unmissable.',
    featured: false,
  },
  {
    title: 'Marrakech Coffee & Tea Festival',
    date: 'Nov 14–16, 2026',
    loc: 'Mossalla Sidi Amara',
    img: '/site%20images/Couloir-Riad-Diamond-Marrakech.webp',
    desc: '30,000+ industry professionals. International pavilions. Set against the Atlas Mountains.',
    featured: false,
  },
  {
    title: 'Hassan II Tennis Grand Prix',
    date: '2026',
    loc: 'Marrakech',
    img: '/site%20images/moroccan_interior_design_style_xj5pc-1024x572.jpg',
    desc: 'ATP international tournament. Sport, culture, and the Marrakech backdrop make it uniquely compelling.',
    featured: false,
  },
  {
    title: 'Imilchil Marriage Festival',
    date: 'September — annually',
    loc: 'Atlas Mountains',
    img: '/site%20images/luxury_villa_for_sale_in_marrakech16.jpg',
    desc: "Amazigh gathering. Ancient tradition, camel races, music. Little-touristy. Combine with an Atlas mountain stay.",
    featured: false,
  },
  {
    title: 'Rose Festival',
    date: 'May — annually',
    loc: "Kelaa M'Gouna",
    img: '/site%20images/service.jpg',
    desc: "Rose harvest parade through Morocco's most beautiful mountain valley. Traditional music and crafts.",
    featured: false,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
export default function EventsPage() {
  useReveal();

  return (
    <div className="font-body overflow-x-hidden bg-cream-off text-ink">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden pb-20 pt-44 bg-navy-deep">
        <div className="absolute inset-0 bg-[url('/site%20images/hero_section.jpg')] bg-center bg-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/65 to-navy-deep/15" />
        <div className="absolute inset-0 opacity-[.05]"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke='%23C9973B' stroke-width='0.5'%3E%3Cpath d='M50 0L100 25L100 75L50 100L0 75L0 25Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="max-w-[1260px] mx-auto px-6 md:px-12 w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10" style={{ animation: 'rise .6s ease .2s both' }}>
            <a href="/" className="font-body text-xs text-white/30 no-underline tracking-wider hover:text-white/60 transition-colors">Home</a>
            <span className="text-white/20 text-xs">›</span>
            <span className="font-body text-xs text-gold tracking-wider">Events</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: 'rise .7s ease .3s both' }}>
              <span className="block w-8 h-px bg-gold" />
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">Morocco Never Stops</span>
            </div>

            <h1 className="font-display font-bold text-white leading-[.95] mb-6"
                style={{ fontSize: 'clamp(2.8rem,7vw,6rem)', animation: 'rise .9s ease .4s both' }}>
              Morocco Is Always<br />Happening.<br />
              <em className="text-gold">Are You Going to<br />Be There?</em>
            </h1>

            <p className="font-body font-light text-white/55 leading-relaxed mb-10 max-w-xl"
               style={{ fontSize: '1.05rem', animation: 'rise .8s ease .6s both' }}>
              From a thousand-year-old cultural festival to the 2030 FIFA World Cup,
              Morocco puts on events that draw the world. We make sure you are there for it.
            </p>

            <div className="flex gap-3 flex-wrap" style={{ animation: 'rise .8s ease .75s both' }}>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip%20around%20an%20event">
                Plan My Trip →
              </WaBtn>
              <a href="#upcoming"
                 className="inline-flex items-center gap-2 border border-white/22 hover:border-gold text-white hover:text-gold font-body text-xs font-normal tracking-[.14em] uppercase px-7 py-4 rounded-sm no-underline transition-all duration-200">
                See Upcoming Events ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PAST LANDMARK EVENTS ══ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="mb-16">
            <Label>Past Landmarks</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1 }}>
              What Has Happened.
            </h2>
          </RV>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {pastEvents.map((ev, i) => (
              <RV key={i} delay={i * 0.1}>
                <div className="bg-cream-off rounded-sm overflow-hidden border border-navy/07 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <img src={ev.img} alt={ev.title}
                         className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-ink-muted/80 text-white font-body text-xs font-semibold tracking-[.1em] uppercase px-3 py-1 rounded-sm">
                      Past Event
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-7 flex flex-col flex-1">
                    <p className="font-body text-xs font-medium tracking-[.12em] uppercase text-gold mb-3">
                      {ev.date}
                    </p>
                    <h3 className="font-display font-bold text-navy mb-4 leading-tight"
                        style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)' }}>
                      {ev.title}
                    </h3>
                    <p className="font-body font-light text-ink-mid leading-relaxed flex-1"
                       style={{ fontSize: '.92rem', lineHeight: 1.75 }}>
                      {ev.desc}
                    </p>
                  </div>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ══ UPCOMING EVENTS ══ */}
      <section className="py-24 md:py-32 bg-cream-off" id="upcoming">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <RV className="mb-16">
            <Label>What&apos;s Coming</Label>
            <h2 className="font-display font-bold text-navy"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1 }}>
              Upcoming Events
            </h2>
          </RV>

          {/* Featured — FIFA World Cup full-width */}
          <RV className="mb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm min-h-[420px]">
              {/* Image */}
              <div className="relative min-h-[280px] md:min-h-0">
                <img src={upcomingEvents[0].img} alt={upcomingEvents[0].title}
                     className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/60 to-transparent" />
                {/* Badge */}
                <div className="absolute top-5 left-5 bg-gold text-navy font-body text-xs font-bold tracking-[.12em] uppercase px-4 py-1.5 rounded-sm">
                  Featured · 2030
                </div>
              </div>
              {/* Copy */}
              <div className="bg-navy p-10 md:p-14 flex flex-col justify-center">
                <p className="font-body text-xs font-medium tracking-[.18em] uppercase text-gold mb-4">
                  {upcomingEvents[0].date} · {upcomingEvents[0].loc}
                </p>
                <h3 className="font-display font-bold text-white leading-tight mb-5"
                    style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
                  {upcomingEvents[0].title}
                </h3>
                <p className="font-body font-light text-white/55 leading-relaxed mb-8"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  {upcomingEvents[0].desc}
                </p>
                <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20World%20Cup%202030%20trip">
                  Plan My World Cup Trip
                </WaBtn>
              </div>
            </div>
          </RV>

          {/* Remaining events grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {upcomingEvents.slice(1).map((ev, i) => (
              <RV key={i} delay={i * 0.08}>
                <div className="relative rounded-sm overflow-hidden min-h-[340px] flex flex-col justify-end group">
                  {/* BG image */}
                  <img src={ev.img} alt={ev.title}
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
                  {/* Upcoming dot */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                    <span className="w-2 h-2 bg-gold rounded-full block" />
                    <span className="font-body text-xs font-bold tracking-[.1em] uppercase text-gold">
                      Upcoming
                    </span>
                  </div>
                  {/* Content */}
                  <div className="relative z-10 p-7">
                    <p className="font-body text-xs font-medium tracking-[.12em] uppercase text-white/50 mb-2">
                      {ev.date} · {ev.loc}
                    </p>
                    <h3 className="font-display font-bold text-white leading-tight mb-3"
                        style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)' }}>
                      {ev.title}
                    </h3>
                    <p className="font-body font-light text-white/65 leading-relaxed"
                       style={{ fontSize: '.88rem', lineHeight: 1.7 }}>
                      {ev.desc}
                    </p>
                  </div>
                </div>
              </RV>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PLAN AROUND AN EVENT ══ */}
      <section className="bg-navy py-20 md:py-24">
        <div className="max-w-[1260px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <RV>
              <Label>Plan With Us</Label>
              <h2 className="font-display font-bold text-white leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
                Planning Your Trip<br />Around an Event?
              </h2>
              <p className="font-body font-light text-white/55 leading-relaxed mb-8"
                 style={{ fontSize: '1rem', lineHeight: 1.85 }}>
                Events in Morocco sell out fast, accommodation goes first.
                Tell us your event dates and group size. We will secure your accommodation,
                sort your transfers, and build an itinerary around the event so you see
                the best of Marrakech before and after.
              </p>
              <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20trip%20around%20an%20event%20in%20Morocco">
                Plan My Event Trip
              </WaBtn>
            </RV>

            {/* Quick checklist */}
            <RV delay={0.15}>
              <div className="bg-navy-mid rounded-sm p-8 md:p-10 border border-white/06">
                <p className="font-body text-xs font-medium tracking-[.18em] uppercase text-gold mb-6">
                  What we handle
                </p>
                <div className="flex flex-col divide-y divide-white/06">
                  {[
                    'Accommodation booked before it sells out',
                    'Airport transfers timed around match/event schedules',
                    'Day-by-day itinerary built around your event',
                    'Restaurant and experience bookings in advance',
                    '24/7 WhatsApp support for the full duration',
                    'Group coordination for large parties',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-4">
                      <span className="w-1.5 h-1.5 bg-gold flex-shrink-0"
                            style={{ transform: 'rotate(45deg)' }} />
                      <span className="font-body font-light text-white/65 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
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
              <span className="font-body text-xs font-medium tracking-[.2em] uppercase text-gold">Don&apos;t Miss Out</span>
              <span className="block w-7 h-px bg-gold" />
            </div>
          </RV>
          <RV delay={0.1}>
            <h2 className="font-display font-bold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem,5vw,4.5rem)' }}>
              There Is Always a Reason<br />
              <em className="text-gold">to Be in Marrakech.</em>
            </h2>
          </RV>
          <RV delay={0.2}>
            <p className="font-body font-light text-white/40 leading-relaxed max-w-sm mx-auto mb-10"
               style={{ fontSize: '1rem' }}>
              Tell us your dates. We will handle everything else.
            </p>
          </RV>
          <RV delay={0.3} className="flex justify-center gap-3 flex-wrap">
            <WaBtn href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip">
              WhatsApp Us Now
            </WaBtn>
            <a href="/contact"
               className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-body text-xs font-semibold tracking-[.14em] uppercase px-8 py-4 rounded-sm no-underline transition-all duration-200">
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