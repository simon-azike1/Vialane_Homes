'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-[999] w-12 h-12 bg-navy text-white flex items-center justify-center no-underline border-none cursor-pointer transition-all duration-200 hover:bg-gold hover:-translate-y-0.5"
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  );
}
