'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';

const pdfMenus = [
  { name: 'Kalabari Culture Menu (Drinks)', file: '/menus/kalabari-culture-drinks.pdf' },
  { name: 'Fast Food Menu', file: '/menus/fast-food.pdf' },
  { name: 'Kalabari Culture Menu', file: '/menus/kalabari-culture.pdf' },
  { name: 'Peppersoup Shop Menu (Ikoyi)', file: '/menus/peppersoup-ikoyi.pdf' },
];

export default function MenuPDFs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-transparent py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white">
            OUR <span className="text-pepper-orange">MENUS</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Download our full menus for a complete taste of what we offer.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pdfMenus.map((menu, index) => (
            <a
              key={index}
              href={menu.file}
              download
              className="group flex flex-col items-center p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl hover:bg-gray-800 transition-colors border border-gray-800 hover:border-pepper-orange"
            >
              <FiDownload className="text-pepper-orange text-3xl mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold text-center text-sm">
                {menu.name}
              </span>
            </a>
          ))}
        </motion.div>

        <p className="text-gray-600 text-xs text-center mt-6">
          Click any card to download the PDF.
        </p>
      </div>
    </section>
  );
}