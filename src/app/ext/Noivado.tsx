'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chapter, Icon, Text, Year } from '../components';

export function Noivado() {
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
    <section className="scroll-section-outer overflow-hidden bg-noivado">
      <div ref={triggerRef} className="scroll-trigger">
        <div
          ref={containerRef}
          className="scroll-section-inner h-screen w-[200vw] flex flex-row relative"
        >
          <Chapter>
            <Icon src="/images/icone-coracao-nos-olhos.png" />
            <Text>
              O tempo foi passando e quanto mais tempo ficávamos juntos, mais eu
              tinha certeza que era ela a mulher que queria passar o resto da
              vida. Dormir juntos, acordar juntos, compartilhar café, almoço,
              jantar.
            </Text>
          </Chapter>
          <Chapter color="white">
            <Icon src="/images/icone-alianca.png" color="white" />
            <Text>
              Então, arrumei coragem e perguntei se ela gostaria de ser a mulher
              que eu poderia compartilhar os momentos do resto da minha vida. Na
              alegria e na tristeza, na saúde e na doença, aquela coisa toda.
            </Text>
            <Text>
              Inacreditavelmente e inexplicavelmente, ela aceitou. Fiquei muito
              feliz. Naquele momento, minha vida seria guiada em fazer aquela
              pessoa feliz. Que não haveria motivo para duvidar de sua escolha.
            </Text>
          </Chapter>
        </div>
        <Year year={2007} />
      </div>
    </section>
  );
}
