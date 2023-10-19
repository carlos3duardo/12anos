'use client';
import Image from 'next/image';

import spEduardo from '@/assets/images/sp-eduardo-rodape.png';
import spRafael from '@/assets/images/sp-rafael.png';
import spErinalva from '@/assets/images/sp-erinalva-rodape.png';

export function Footer() {
  return (
    <header className="h-screen w-full py-12 flex flex-col items-center justify-center bg-footer">
      <div className="flex gap-4 w-full items-end justify-center">
        <div className="w-[32%]">
          <figure className="w-full relative">
            <Image
              src={spEduardo}
              alt="Caricatura de Eduardo, estilo South Park"
              className="mx-auto"
            />
          </figure>
        </div>
        <div className="w-[16%]">
          <figure className="w-full relative">
            <Image
              src={spRafael}
              alt="Caricatura de Rafael, estilo South Park"
              className="mx-auto"
            />
          </figure>
        </div>
        <div className="w-[32%]">
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
