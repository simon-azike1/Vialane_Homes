'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
          setScroll(progress);
          ticking.current = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gold"
        style={{ width: `${scroll}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  );
}
