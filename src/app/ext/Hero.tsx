'use client';
import Image from 'next/image';

import spEduardo from '@/assets/images/sp-eduardo-tesouro.png';
import spErinalva from '@/assets/images/sp-erinalva.png';

export function Hero() {
  return (
    <header className="h-screen w-full py-12 flex flex-col items-center justify-center bg-hero">
      <div className="flex gap-4 w-full justify-center">
        <div className="w-[42%]">
          <figure className="w-full relative">
            <Image
              src={spEduardo}
              alt="Caricatura de Eduardo, estilo South Park"
              className="mx-auto"
            />
          </figure>
        </div>
        <div className="w-[42%]">
          <figure className="w-full relative">
            <Image
              src={spErinalva}
              alt="Caricatura de Erinalva, estilo South Park"
              className="mx-auto"
            />
          </figure>
        </div>
      </div>
    </header>
  );
}
