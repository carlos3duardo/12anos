'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chapter, Icon, Text, Year } from '../components';

export function Gravidez() {
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
        translateX: `-200vw`,
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
    <section className="scroll-section-outer overflow-hidden bg-gravidez">
      <div ref={triggerRef} className="scroll-trigger">
        <div
          ref={containerRef}
          className="scroll-section-inner h-screen w-[300vw] flex flex-row relative"
        >
          <Chapter color="white">
            <Icon src="/images/icone-gravidez.png" color="white" />
            <Text>
              E recebemos a notícia que um pacotinho estava a caminho. E
              cuidamos da saúde da mamãe para que recebêssemos o bebê da melhor
              forma possível.
            </Text>
            <Text>
              Muitas visitas ao consutório para tratar da melhor forma aquele
              tesouro que estava a caminho.
            </Text>
          </Chapter>
          <Chapter color="white">
            <Icon src="/images/icone-crianca.png" color="white" />
            <Text>
              Então o pequenos príncipe chegou. Você me deu o maior presente que
              já recebi na vida. Tão lindo e frágil, tão exigente de cuidado,
              mas que não medimos esforços para dar conta.
            </Text>
            <Text>
              A gente acha que o coração não cabe mais amor, mas cabe. Minha
              vida agora é de vocês dois. É muito bom ver vocês dois juntos,
              sorrindo.
            </Text>
          </Chapter>
          <Chapter color="white">
            <Icon src="/images/icone-mamadeira.png" color="white" />
            <Text>
              Muitas noites em claro. Brinquedos pelo chão. Mas não ligamos para
              isso quando vemos o sorriso do nosso bebê. Faz todas aquelas
              olheiras valerem à pena.
            </Text>
            <Text>Amo demais vocês dois.</Text>
          </Chapter>
        </div>
        <Year year={2013} color="white" />
      </div>
    </section>
  );
}
