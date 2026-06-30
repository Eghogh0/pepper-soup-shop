// Reusable GSAP animation presets
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

export const staggerText = (container: Element) => {
  const children = container.querySelectorAll('.stagger-child');
  gsap.fromTo(
    children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};