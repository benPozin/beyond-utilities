'use client';
import { useEffect } from 'react';

export default function MemberstackLoader() {
  useEffect(() => {
    // Already present?
    if (typeof window !== 'undefined' && (window as any).$memberstackDom) return;

    // If a tag was inserted by Next <Script>, don't duplicate it
    if (document.querySelector('script[data-memberstack-id="app_cmeoo2t0w006i0xwo8ttr7xy9"]')) return;

    const s = document.createElement('script');
    s.id = 'memberstack-autoload';
    s.src = 'https://api.memberstack.io/static/memberstack.js?';
    s.async = true;
    s.setAttribute('data-memberstack-id', 'app_cmeoo2t0w006i0xwo8ttr7xy9');
    document.head.appendChild(s);
  }, []);

  return null;
}