'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % length);
  const prev = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-transparent py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            WHAT OUR <span className="text-pepper-orange">CUSTOMERS SAY</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 md:p-14 shadow-2xl text-center"
            >
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < testimonials[current].rating ? '#FF5A1F' : '#333'}
                    size={22}
                  />
                ))}
              </div>
              <p className="text-gray-200 text-lg sm:text-xl italic leading-relaxed max-w-2xl mx-auto">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>
              <p className="mt-6 text-white font-bold text-xl sm:text-2xl">
                – {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute top-1/2 -left-3 sm:-left-5 transform -translate-y-1/2 bg-gray-800/90 hover:bg-pepper-orange text-white p-2 sm:p-3 rounded-full transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-3 sm:-right-5 transform -translate-y-1/2 bg-gray-800/90 hover:bg-pepper-orange text-white p-2 sm:p-3 rounded-full transition-colors z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                i === current ? 'bg-pepper-orange scale-125' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}