'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPepperHot } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function FeelTheHeat() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pepperRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Same animation on all devices
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: true,
          pin: true,
        },
      });

      tl.to(pepperRef.current, {
        scale: 3,
        rotation: 360,
        duration: 1,
        ease: 'power1.inOut',
      })
        .to(backgroundRef.current, {
          background: 'radial-gradient(circle at center, #E94B12 0%, #050505 80%)',
          duration: 1,
        }, 0)
        .fromTo('.warning-text', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-transparent">
      <div ref={backgroundRef} className="absolute inset-0 bg-transparent transition-colors duration-1000" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <div ref={pepperRef} className="mb-6 sm:mb-8">
          <FaPepperHot
            size={80}
            className="text-pepper-orange drop-shadow-[0_0_30px_rgba(255,90,31,0.8)] sm:w-[120px] sm:h-[120px]"
          />
        </div>

        <h2 className="warning-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight">
          WARNING.
          <br />
          THIS IS NOT FOR
          <br />
          THE WEAK.
        </h2>
      </div>
    </section>
  );
}