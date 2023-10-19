'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chapter, Icon, Text, Year } from '../components';

export function Casamento() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.info({ casamento: containerRef });

    const pin = gsap.fromTo(
      containerRef.current as Element,
      {
        translateX: 0,
      },
      {
        translateX: `-200vw`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current as Element,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      },
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden bg-casamento">
      <div ref={triggerRef} className="scroll-trigger">
        <div
          ref={containerRef}
          className="scroll-section-inner h-screen w-[300vw] flex flex-row relative"
        >
          <Chapter color="white">
            <Icon src="/images/icone-aliancas.png" color="white" />
            <Text>
              Em 2011, nos casamos. Naquele dia, estava muito ansioso e
              empolgado, ao mesmo tempo havia aquele frio na barriga. Estaria
              começando uma nova vida. Mas era exatamento o que eu queria. Ela
              aceitou ser a <em>Sra. Paranoid Android</em>, como prometido. Eu
              não poderia estar mais satisfeito e feliz.
            </Text>
          </Chapter>
          <Chapter color="white">
            <Icon src="/images/icone-casinha.png" color="white" />
            <Text>
              Fomos para o nosso novo lar. Nosso cantinho da felicidade.
              Dormíamos, acordávamos, cochilávamos, comíamos, víamos séries e
              filmes, tudo isso juntos.
            </Text>
            <Text>
              E eu pude ver seu sorriso todos os dias, nesses lindos e
              maravilhosos lábios rosados, com olhar radiante que só vocẽ tem.
              Não poderia pedir mais nada.
            </Text>
          </Chapter>
          <Chapter color="white">
            <Icon src="/images/icone-coracao-safado.png" color="white" />
            <Text>
              E, claro, todos os dias poder beijar seus lábios. Cheirar o seu
              pescoço, seu cabelo. Despir seu corpo, acariciar sua pele macia.
              Sentir seu calor, beijar seus seios, sua barriga. Estar entre suas
              pernas enquanto ouço os seus gemidos de prazer.
            </Text>
          </Chapter>
        </div>
        <Year year={2011} color="white" />
      </div>
    </section>
  );
}
