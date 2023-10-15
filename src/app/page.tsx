'use client';

import { Hero } from './ext/Hero.jsx';
import { ScrollSection } from './ext/ScrollSection.jsx';
import { Footer } from './ext/Footer.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <ScrollSection />
      <Footer />
    </main>
  );
}
