'use client';

const explore = [
  { label: 'About Us',  href: '/about' },
  { label: 'Services',  href: '/service' },
  { label: 'Marrakech', href: '/marrakech' },
  { label: 'Invest',    href: '/invest' },
  { label: 'Events',    href: '/events' },
];

const services = [
  { label: 'Airport Transfers', href: '/services#airport' },
  { label: 'Accommodation',     href: '/services#accommodation' },
  { label: 'Car Hire',          href: '/services#car-hire' },
  { label: 'Experiences',       href: '/services#experiences' },
  { label: '24/7 Concierge',    href: '/services#concierge' },
];

const NAVY   = '#0F1E3C';
const NAVYD  = '#080F1E';
const GOLD   = '#C9973B';

export default function Footer() {
  const linkStyle = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontWeight: 300,
    fontSize: '.9rem',
    color: 'rgba(255,255,255,.4)',
    textDecoration: 'none',
    display: 'block',
    transition: 'color .2s',
  };

  const colTitle = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: '.68rem',
    fontWeight: 600,
    letterSpacing: '.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.25)',
    marginBottom: 20,
    display: 'block',
  };

  return (
    <footer style={{ background: NAVYD, borderTop: '1px solid rgba(255,255,255,.05)', padding: '72px 0 36px' }}>
      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '0 48px' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 64, marginBottom: 60 }}>

          {/* Brand */}
          <div>
            <a href="/" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.8rem', letterSpacing: '.12em', color: 'white', textDecoration: 'none', display: 'inline-block', marginBottom: 16 }}>
              VIALANE<span style={{ color: GOLD }}>.</span>
            </a>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 300, fontSize: '.9rem', color: 'rgba(255,255,255,.35)', lineHeight: 1.75, maxWidth: 260, marginBottom: 24 }}>
              Your Marrakech, done right. Hospitality &amp; real estate for the international traveller and global investor.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { label: 'IG', href: 'https://instagram.com/vialanehomes' },
                { label: 'TK', href: 'https://tiktok.com/@vialanehomes' },
                { label: 'LI', href: 'https://linkedin.com/company/vialanehomes' },
                { label: 'WA', href: 'https://wa.me/212600000000' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.label}
                   style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.4)', fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '.7rem', fontWeight: 500, textDecoration: 'none', transition: 'border-color .2s, color .2s' }}
                   onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                   onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = 'rgba(255,255,255,.4)'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <span style={colTitle}>Explore</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {explore.map(l => (
                <a key={l.href} href={l.href} style={linkStyle}
                   onMouseEnter={e => e.currentTarget.style.color = 'white'}
                   onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <span style={colTitle}>Services</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {services.map(l => (
                <a key={l.href} href={l.href} style={linkStyle}
                   onMouseEnter={e => e.currentTarget.style.color = 'white'}
                   onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span style={colTitle}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
               {[
                 { label: 'hello@vialanehomes.com', href: 'mailto:hello@vialanehomes.com' },
                 { label: 'WhatsApp Us',            href: 'https://wa.me/212647574605' },
                 { label: 'Send an Enquiry',        href: '/contact' },
                 { label: 'Marrakech, Morocco',     href: null },
               ].map(l => l.href ? (
                <a key={l.label} href={l.href} style={linkStyle}
                   onMouseEnter={e => e.currentTarget.style.color = 'white'}
                   onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}
                >
                  {l.label}
                </a>
              ) : (
                <span key={l.label} style={{ ...linkStyle, color: 'rgba(255,255,255,.2)', cursor: 'default' }}>
                  {l.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 300, fontSize: '.78rem', color: 'rgba(255,255,255,.2)' }}>
            © 2025 Vialane Homes. All rights reserved. Built by SimzikTech.
          </p>
          <a href="mailto:hello@vialanehomes.com"
             style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 300, fontSize: '.85rem', color: GOLD, textDecoration: 'none', borderBottom: '1px solid rgba(201,151,59,.3)', paddingBottom: 2 }}
             onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
             onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,151,59,.3)'}
          >
            hello@vialanehomes.com
          </a>
        </div>

      </div>
    </footer>
  );
}