'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pepper-orange/10 transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover steam effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pointer-events-none">
          <div className="flex space-x-2 mb-4">
            <div className="steam-particle animate-steam-1"></div>
            <div className="steam-particle animate-steam-2"></div>
            <div className="steam-particle animate-steam-3"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white group-hover:text-pepper-orange transition-colors">
          {item.name}
        </h3>
        <p className="mt-2 text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-pepper-orange font-bold text-xl">{item.price}</span>
          <button className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
            Add to Order
          </button>
        </div>
      </div>
    </motion.div>
  );
}