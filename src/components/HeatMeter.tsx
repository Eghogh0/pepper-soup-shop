'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPepperHot } from 'react-icons/fa';

const levels = [
  { label: '🌴 River Breeze', value: 1 },
  { label: '🚣 Gentle Tide', value: 2 },
  { label: '🐟 Fisherman’s Choice', value: 3 },
  { label: '🌊 Creek Heat', value: 4 },
  { label: '🔥 Kalabari Classic', value: 5 },
  { label: '⚡ Delta Strong', value: 6 },
  { label: '🚌 Danfo Approved', value: 7 },
  { label: '🌉 Third Mainland Fire', value: 8 },
  { label: '☀️ Lagos Heatwave', value: 9 },
  { label: '👑 Peppersoup Queen Challenge', value: 10 },
];

export default function HeatMeter() {
  const [level, setLevel] = useState(4);
  const current = levels[level];

  return (
    <section className="relative py-20 sm:py-24 bg-transparent overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: `radial-gradient(circle at center, ${getColor(level)} 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 sm:mb-8">
          HOW SPICY DO YOU WANT <span className="text-pepper-orange">YOUR PEPPERSOUP?</span>
        </h2>

        <div className="flex justify-center space-x-1 sm:space-x-3 mb-6 sm:mb-8 overflow-x-auto">
          {levels.map((lvl, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === level ? 1.3 : 0.8,
                rotate: i === level ? [0, -10, 10, -10, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
              onClick={() => setLevel(i)}
              className="cursor-pointer flex-shrink-0"
            >
              <FaPepperHot
                size={20}
                color={i === level ? getColor(i) : '#555'}
                className="drop-shadow-lg sm:w-[24px] sm:h-[24px]"
              />
            </motion.div>
          ))}
        </div>

        <div className="relative w-full max-w-md mx-auto mb-4 sm:mb-6">
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={current.value}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              const idx = levels.findIndex((l) => l.value === val);
              setLevel(idx);
            }}
            className="heat-slider w-full"
            aria-label="Choose your spice level"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Mild</span>
            <span>Extra Hot</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ color: getColor(level) }}
          >
            {current.label}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function getColor(index: number): string {
  const colors = [
    '#5DBB63', '#7DBB63', '#FFA500', '#FF8C00',
    '#FF5A1F', '#E94B12', '#D30000', '#C70000',
    '#B10000', '#8B0000',
  ];
  return colors[index] || '#FF5A1F';
}