'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chapter, Icon, Text } from '../components';

export function Vida() {
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
    <section className="scroll-section-outer overflow-hidden bg-vida">
      <div ref={triggerRef} className="scroll-trigger">
        <div
          ref={containerRef}
          className="scroll-section-inner h-screen w-[200vw] flex flex-row relative"
        >
          <Chapter color="white">
            <Icon src="/images/icone-rosas.png" color="white" />
            <Text>
              Já havíamos passado por muita coisa antes daquele 20 de outubro de
              2011. Mas superamos. E nesses últimos 12 anos passamos por outras
              tantas.
            </Text>
            <Text>
              Ainda há muito para conquistar. Mas não quero desistir. Ainda há o
              que lutar, e mesmo em dias ruins, me conforta saber que no final
              estarei em casa com você e com Rafael.
            </Text>
          </Chapter>
          <Chapter color="white">
            <Icon src="/images/icone-bolo.png" color="white" />
            <Text>
              Que nossas bodas de seda seja uma das primeiras. O futuro ainda
              nos reserva muitas outras.
            </Text>
            <Text>Amo você.</Text>
          </Chapter>
        </div>
      </div>
    </section>
  );
}
