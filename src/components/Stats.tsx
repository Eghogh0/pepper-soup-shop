'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaBowlFood, FaUsers, FaHeart } from 'react-icons/fa6';

const stats = [
  { icon: FaBowlFood, value: 10000, suffix: '+', label: 'Bowls Served' },
  { icon: FaUsers, value: 5000, suffix: '+', label: 'Happy Customers' },
  { icon: FaHeart, value: 95, suffix: '%', label: 'Return Rate' },
];

function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-transparent py-24">
      <div ref={ref} className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center"
          >
            <stat.icon className="text-pepper-orange text-5xl mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-heading font-extrabold text-white">
              {isInView ? <AnimatedCounter value={stat.value} /> : '0'}
              {stat.suffix}
            </div>
            <p className="mt-2 text-gray-400 text-lg uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}