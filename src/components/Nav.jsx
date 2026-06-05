'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/service' },
  { label: 'Marrakech', href: '/marrakech' },
  { label: 'Tourism',    href: '/tourism' },
  { label: 'Contact',   href: '/contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

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
      <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 bg-navy md:bg-navy py-5 px-6 sm:px-12 ${
        scrolled ? 'md:bg-navy-deep md:backdrop-blur-md md:py-3.5' : 'md:bg-navy'
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/new-logo.png"
            alt="Vialane Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="font-display text-xl font-bold tracking-wider text-white">
            VIALANE<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Links , desktop only */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(l => {
            const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
            return (
              <li key={l.href} className="group">
                <Link
                  href={l.href}
                  className={`font-body text-xs font-medium tracking-wider uppercase no-underline relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                  <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA , desktop only */}
        <a
          href="https://wa.me/212647574605?text=Hi%2C%20I%27m%20interested%20in%20investing%20in%20Marrakech%20property"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block font-body text-xs font-semibold tracking-wider uppercase bg-gold text-navy px-6 py-2.5 no-underline transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
        >
          Start Investing
        </a>

        {/* Burger , mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col justify-center items-center gap-1 cursor-pointer p-3 bg-navy rounded-none border-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[997] bg-navy-deep flex flex-col justify-center px-6 py-12 transition-transform duration-300 ease-out ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="list-none m-0 p-0 flex flex-col gap-2 mb-12">
          {links.map(l => {
            const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-3xl sm:text-4xl font-normal no-underline block py-2.5 border-b border-white/10 transition-all duration-200 ${
                    isActive ? 'text-gold' : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="https://wa.me/212647574605?text=Hi%2C%20I%27m%20interested%20in%20investing%20in%20Marrakech%20property"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy font-body text-sm font-semibold tracking-widest uppercase px-8 py-4 no-underline text-center block rounded-none transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
        >
          Start Investing →
        </a>
      </div>
    </>
  );
}
