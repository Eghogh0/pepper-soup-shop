'use client';

import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <section className="relative bg-black py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Optional top gradient to blend with the slideshow */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6}}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight tracking-tight text-white"
        >
          When life shows you
          <br />
          <span className="text-pepper-orange">Pepper</span>, you make
          <br />
          Peppersoup
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#menu"
            className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-pepper-orange/40"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-white/40 hover:border-pepper-orange text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Visit Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}