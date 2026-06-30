'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const offerings = [
  {
    title: 'Signature Kalabari Cuisine',
    icon: '🍲',
    description: 'Authentic Peppersoups, Fisherman Soup, Fresh Fish Stew, Onunu, and more.',
  },
  {
    title: 'Bowl Meals',
    icon: '🥣',
    description: 'Perfect for individual dining and quick comfort meals.',
  },
  {
    title: 'Tray Meals',
    icon: '🍱',
    description: 'Ideal for offices, meetings, family gatherings, and special occasions.',
  },
  {
    title: 'Party Coolers',
    icon: '🧊',
    description: 'Large-format catering for celebrations, events, and family functions.',
  },
  {
    title: 'Corporate Catering',
    icon: '🏢',
    description: 'Daily staff meals, executive lunches, conferences, and corporate events.',
  },
  {
    title: 'Event Catering',
    icon: '🎉',
    description: 'Weddings, birthdays, private parties, and social gatherings.',
  },
  {
    title: 'Restaurant & Lounge Experience',
    icon: '🍹',
    description: 'Great food, drinks, football, music, and community in a relaxed atmosphere.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatWeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
            WHAT WE <span className="text-pepper-orange">OFFER</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            More than just pepper soup – we bring the full taste of Kalabari culture to you.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offerings.map((offer, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl hover:shadow-pepper-orange/5 transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-gray-400">{offer.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}