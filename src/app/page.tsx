import { Hero } from './ext/Hero';
import { Namoro } from './ext/Namoro';
import { Noivado } from './ext/Noivado';
import { Casamento } from './ext/Casamento';
import { Gravidez } from './ext/Gravidez';
import { Vida } from './ext/Vida';
import { Footer } from './ext/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-200">
        <Hero />
        <Namoro />
        <Noivado />
        <Casamento />
        <Gravidez />
        <Vida />
        <Footer />
      </main>
    </>
  );
}
