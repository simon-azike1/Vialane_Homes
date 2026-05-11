'use client';
import { useState, useEffect } from 'react';

const NAVY  = '#0F1E3C';
const NAVYD = '#080F1E';
const GOLD  = '#C9973B';
const GOLDL = '#DDB96A';
const WHITE = '#FFFFFF';

const links = [
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/service' },
  { label: 'Marrakech', href: '/marrakech' },
  // { label: 'Tourism',    href: '/tourism' },
  // { label: 'Invest',    href: '/invest' },
  { label: 'Events',    href: '/events' },
  { label: 'Contact',   href: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* Desktop Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '14px 48px' : '22px 48px',
        background: scrolled ? 'rgba(8,15,30,.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'padding .4s, background .4s',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/new-logo.png" alt="Vialane Logo" style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '1.55rem', letterSpacing: '.12em', color: '#FFFFFF', textDecoration: 'none' }}>
            VIALANE<span style={{ color: '#C9973B' }}>.</span>
          </span>
        </a>

        {/* Links — desktop only */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
            className="nav-desktop-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: '.72rem', fontWeight: 500,
                letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,.7)', textDecoration: 'none',
                transition: 'color .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = WHITE}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.7)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip"
            target="_blank" rel="noopener noreferrer"
            className="nav-cta-btn"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '.72rem', fontWeight: 600,
              letterSpacing: '.14em', textTransform: 'uppercase',
              background: GOLD, color: NAVY,
              padding: '11px 24px', borderRadius: 2,
              textDecoration: 'none',
              transition: 'background .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = GOLDL}
            onMouseLeave={e => e.currentTarget.style.background = GOLD}
        >
          Plan My Trip
        </a>

        {/* Burger — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="nav-burger"
          style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 6, background: 'none', border: 'none' }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: WHITE, transition: '.3s', transform: open ? 'rotate(45deg) translate(0, 4.5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: WHITE, transition: '.3s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: WHITE, transition: '.3s', transform: open ? 'rotate(-45deg) translate(0, -4.5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 997,
        background: NAVYD,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '48px 32px',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform .45s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 40 }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.8rem', fontWeight: 400,
                color: 'rgba(255,255,255,.65)', textDecoration: 'none',
                display: 'block', padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,.06)',
                transition: 'color .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.65)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip"
            target="_blank" rel="noopener noreferrer"
            style={{
              background: GOLD, color: NAVY,
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '.85rem', fontWeight: 600,
              letterSpacing: '.14em', textTransform: 'uppercase',
              padding: '18px 32px', borderRadius: 2,
              textDecoration: 'none', textAlign: 'center', display: 'block',
            }}>
          Plan My Trip →
        </a>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 980px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}