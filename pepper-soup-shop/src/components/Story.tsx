'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bowlRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        bowlRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: bowlRef.current,
            start: 'top 85%',
            end: 'top 45%',
            scrub: false,
          },
        }
      );

      const ingredients = ingredientsRef.current?.children;
      if (ingredients) {
        gsap.fromTo(
          ingredients,
          {
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -100 : 100),
            y: (i) => (i % 2 === 0 ? -50 : 80),
            rotation: (i) => (i % 2 === 0 ? -45 : 45),
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: ingredientsRef.current,
              start: 'top 85%',
              end: 'top 40%',
              scrub: false,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="bg-transparent py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div ref={textRef} className="text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
            OUR <span className="text-pepper-orange">STORY</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-lg">
            The Peppersoupshop was born from a simple dream: to create a home where everyone could experience the richness of Kalabari cuisine.
          </p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-lg">
            What started as a passion for sharing authentic flavors has grown into a destination for lovers of great food, culture, and hospitality. Today, we proudly serve guests across our Ikoyi and Lekki locations, bringing the taste of the river to every table.
          </p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-lg">
            Whether you’re stopping by for a comforting bowl of Peppersoup, gathering with friends in our lounge, hosting a corporate event, or celebrating a special occasion, we are committed to delivering memorable dining experiences.
          </p>
          <div className="mt-8">
            <a
              href="#menu"
              className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-pepper-orange/30"
            >
              See Our Menu
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div ref={bowlRef} className="relative z-10">
            <img
              src="/images/hero/hero-bg.jpg"
              alt="Pepper soup bowl"
              className="w-72 md:w-96 h-auto drop-shadow-2xl rounded-full border-4 border-pepper-orange/40"
            />
          </div>

          <div ref={ingredientsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src="/images/ingredients/pepper.png" alt="Pepper" className="absolute w-16 h-16 top-0 left-0" />
            <img src="/images/ingredients/goat-meat.png" alt="Goat meat" className="absolute w-20 h-20 top-10 right-0" />
            <img src="/images/ingredients/fish.png" alt="Fish" className="absolute w-14 h-14 bottom-0 left-10" />
            <img src="/images/ingredients/turkey.png" alt="Turkey" className="absolute w-12 h-12 bottom-10 right-10" />
            <img src="/images/ingredients/chicken.png" alt="Chicken" className="absolute w-10 h-10 top-1/3 right-20" />
          </div>
        </div>
      </div>
    </section>
  );
}