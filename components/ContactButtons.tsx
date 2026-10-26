'use client';

import type { ReactNode } from 'react';
import { PHONE_NUMBER, ZALO_LINK } from '../src/app/data/site';

interface ContactButtonProps {
  className?: string;
  children: ReactNode;
}

type Gtag = (command: 'event', name: string, params?: Record<string, string>) => void;

// Reports a click to Google when the tag has loaded; does nothing otherwise.
function track(name: string) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === 'function') gtag('event', name, { page_path: window.location.pathname });
}

export function ZaloButton({ className, children }: ContactButtonProps) {
  return (
    <a
      href={ZALO_LINK}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => track('click_zalo')}
    >
      {children}
    </a>
  );
}

export function PhoneButton({ className, children }: ContactButtonProps) {
  return (
    <a href={`tel:${PHONE_NUMBER}`} className={className} onClick={() => track('click_phone')}>
      {children}
    </a>
  );
}
