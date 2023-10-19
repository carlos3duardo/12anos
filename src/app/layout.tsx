import type { Metadata } from 'next';
import { Delius_Swash_Caps as DeliusSwashCaps } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const font = DeliusSwashCaps({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'eu + vc',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
