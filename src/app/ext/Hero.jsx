'use client';
import Image from 'next/image';

import spEduardo from '@/assets/images/sp-eduardo.png';
import spErinalva from '@/assets/images/sp-erinalva.png';
// import coracao from '@/assets/images/heart-plus.png';

export function Hero() {
  return (
    <header className="h-screen w-full flex flex-col items-center justify-center bg-header">
      {/* <h1 className="flex items-center justify-center gap-4 text-[6rem] font-semibold leading-none">
        <span>eu</span>
        <figure>
          <Image src={coracao} width={120} height={120} alt="Coração" />
        </figure>
        <span>vc</span>
      </h1> */}
      <div className="flex pb-4">
        <Image
          src={spEduardo}
          width={314}
          height={400}
          alt="Eduardo versão South Park"
        />
        <Image
          src={spErinalva}
          width={314}
          height={400}
          alt="Erinalva versão South Park"
        />
      </div>
    </header>
  );
}
