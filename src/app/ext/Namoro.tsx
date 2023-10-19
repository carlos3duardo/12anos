'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chapter, Icon, Text, Year } from '../components';

export function Namoro() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.info(containerRef);

    const pin = gsap.fromTo(
      containerRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-100vw`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '1000 top',
          scrub: true,
          pin: true,
        },
      },
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden bg-namoro">
      <div ref={triggerRef} className="scroll-trigger">
        <div
          ref={containerRef}
          className="scroll-section-inner h-screen w-[200vw] flex flex-row relative"
        >
          <Chapter>
            <Icon src="/images/icone-coracao-flechado.png" />
            <Text>
              Tudo começou no ano 2006, quando essa linda garotinha loira, de
              lábios rosados, começamos a sair juntos. Há algum tempo já
              trocáva-mos olhares, sorrisos. Ah, e que sorriso ela tem.
            </Text>
            <Text>
              Demorou um pouco, mas por fim tomei coragem de beijá-la. E que
              beijo ela tem. Macio, quente, molhado, doce. E sua pele macia,
              cheirosa, gostosa. Olhos sedutores, sorriso malicioso. Foi
              incrível.
            </Text>
          </Chapter>
          <Chapter>
            <Icon src="/images/icone-casal.png" />
            <Text>
              Passamos tempos maravilhosos juntos. Quando estávamos longe,
              ficávamos ao telefone até a orelha esquentar. Íamos ao cinema,
              passeávamos, namorávamos com roupa e sem roupa. Dormíamos
              abraçados, sentindo a pele e o perfume do outro.
            </Text>
            <Text>
              Parecia que eu tinha 15 anos. Foi uma paixão forte. De adolecente.
              Estava completamente apaixonado por aquele sorriso, aqueles olhos,
              por aqueles lábios rosados, sua pele, seu perfume...
            </Text>
          </Chapter>
        </div>
        <Year year={2006} />
      </div>
    </section>
  );
}
