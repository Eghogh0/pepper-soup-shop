'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/slideshow/food1.jpeg',
  '/images/slideshow/food2.jpeg',
  '/images/slideshow/food3.jpeg',
  '/images/slideshow/food4.jpeg',
  '/images/slideshow/food5.jpeg',
  '/images/slideshow/food6.jpeg',
  '/images/slideshow/food7.jpeg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDir(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={images[current]}
            alt={`Delicious Peppersoup dish ${current + 1}`}
            className="w-full h-full object-cover" // use cover to avoid black bars; if you want full image without crop, use object-contain
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDir(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
              idx === current ? 'bg-pepper-orange scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}