'use client';

import Link from 'next/link';

const explore = [
  { label: 'About Us',  href: '/about#' },
  { label: 'Services',  href: '/service#' },
  { label: 'Marrakech', href: '/marrakech#' },
  { label: 'Invest',    href: '/invest#' },
  { label: 'Events',    href: '/events#' },
];

// const services = [
//   { label: 'Airport Transfers', href: '/service#airport' },
//   { label: 'Accommodation',     href: '/service#accommodation' },
//   { label: 'Car Hire',          href: '/service#car-hire' },
//   { label: 'Experiences',       href: '/service#experiences' },
//   { label: '24/7 Concierge',    href: '/service#concierge' },
// ];

export default function Footer() {
  const linkClasses = "font-body font-light text-sm text-white/40 no-underline block transition-colors duration-200 hover:text-white";
  const colTitleClasses = "font-body text-xs font-semibold tracking-widest uppercase text-white/25 mb-5 block";

  return (
    <footer className="bg-navy-deep border-t border-white/5 py-16 md:py-[72px]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">

          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-xl md:text-2xl tracking-widest text-white no-underline inline-block mb-4">
              VIALANE<span className="text-gold">.</span>
            </Link>
            <p className="font-body font-light text-sm text-white/35 leading-relaxed max-w-sm mb-6">
              Your Marrakech, done right. Hospitality &amp; real estate for the international traveller and global investor.
            </p>
            <div className="flex gap-2">
              {[
                { label: 'IG', href: 'https://www.instagram.com/vialanehomes.ma/' },
                // { label: 'TK', href: 'https://tiktok.com/@vialanehomes' },
                { label: 'LI', href: 'https://www.linkedin.com/in/sadiqwaru/' },
                { label: 'WA', href: 'https://wa.me/212647574605' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 font-body text-xs font-medium no-underline transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className={colTitleClasses}>Explore</span>
            <div className="flex flex-col gap-2">
              {explore.map(l => (
                <Link key={l.href} href={l.href} className={linkClasses}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            {/* <span className={colTitleClasses}>Services</span> */}
            {/* <div className="flex flex-col gap-2">
              {services.map(l => (
                <Link key={l.href} href={l.href} className={linkClasses}>
                  {l.label}
                </Link>
              ))}
            </div> */}
          </div>

          <div>
            <span className={colTitleClasses}>Contact</span>
            <div className="flex flex-col gap-2">
               {[
                   { label: 'invest@vialanehomes.com', href: 'mailto:invest@vialanehomes.com' },
                   { label: 'WhatsApp Us',            href: 'https://wa.me/212647574605' },
                   { label: 'Send an Enquiry',        href: '/contact' },
                   { label: 'Marrakech, Morocco',     href: null },
                 ].map(l => l.href ? (
                   <a
                     key={l.label}
                     href={l.href}
                     className={linkClasses}
                   >
                     {l.label}
                   </a>
                 ) : (
                   <span
                     key={l.label}
                     className="font-body font-light text-sm text-white/20 no-underline block cursor-default"
                   >
                     {l.label}
                   </span>
                 ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-wrap">
          <p className="font-body font-light text-xs text-white/20">
            &copy; 2025 Vialane Homes. All rights reserved. Built by SimzikTech.
          </p>
          {/* <a
            href="mailto:invest@vialanehomes.com"
            className="font-body font-light text-sm text-gold no-underline border-b border-gold/30 pb-0.5 transition-all duration-200 hover:border-gold"
          >
            invest@vialanehomes.com
          </a> */}
        </div>

      </div>
    </footer>
  );
}
