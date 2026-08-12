import type { ReactNode } from 'react';
import { PHONE_NUMBER, ZALO_LINK } from '../src/app/data/site';

interface ContactButtonProps {
  className?: string;
  children: ReactNode;
}

export function ZaloButton({ className, children }: ContactButtonProps) {
  return (
    <a href={ZALO_LINK} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function PhoneButton({ className, children }: ContactButtonProps) {
  return (
    <a href={`tel:${PHONE_NUMBER}`} className={className}>
      {children}
    </a>
  );
}
