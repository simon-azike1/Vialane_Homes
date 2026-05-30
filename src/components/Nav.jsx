'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/service' },
  { label: 'Marrakech', href: '/marrakech' },
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
      <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(8,15,30,0.93)] backdrop-blur-[20px] py-[14px] px-12'
          : 'bg-transparent py-[22px] px-12'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/new-logo.png"
            alt="Vialane Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="font-display text-xl font-bold tracking-[0.12em] text-white">
            VIALANE<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Links — desktop only */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-body text-xs font-medium tracking-[0.16em] uppercase text-white/70 no-underline transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — desktop only */}
        <a
          href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block font-body text-xs font-semibold tracking-[0.14em] uppercase bg-gold text-navy px-6 py-2.5 no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
        >
          Plan My Trip
        </a>

        {/* Burger — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.25 cursor-pointer p-1.5 bg-none border-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-5.5 h-0.375 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.125' : ''}`} />
          <span className={`block w-5.5 h-0.375 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5.5 h-0.375 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.125' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[997] bg-navy-deep flex flex-col justify-center px-8 py-12 transition-transform duration-[450ms] cubic-bezier(0.16,1,0.3,1) ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="list-none m-0 p-0 flex flex-col gap-1 mb-10">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-normal text-white/65 no-underline block py-2.5 border-b border-white/6 transition-colors duration-200 hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/212647574605?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20Marrakech%20trip"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy font-body text-sm font-semibold tracking-[0.14em] uppercase px-8 py-4.5 no-underline text-center block rounded transition-all duration-200 hover:bg-gold-light"
        >
          Plan My Trip &rarr;
        </a>
      </div>
    </>
  );
}