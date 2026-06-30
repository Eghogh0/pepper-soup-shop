'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { menuItems, menuCategories } from '@/data/menuData';
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { addItem } = useCart();

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section id="menu" className="bg-transparent py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            OUR <span className="text-pepper-orange">MENU</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            ...you crave it, we make it.
          </p>
        </div>

        {/* Category tabs */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-pepper-orange text-white shadow-lg shadow-pepper-orange/30'
                    : 'bg-gray-900/80 backdrop-blur-sm text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <motion.div
          ref={ref}
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} onAddToCart={addItem} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MenuItemCard({ item, onAddToCart }: { item: any; onAddToCart: any }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<{ size: string; price: string } | null>(null);
  const [quantity, setQuantity] = useState(1);

  const hasSizes = item.sizes && item.sizes.length > 0;

  let displayPrice = item.price;
  let cheapestSize = null;
  if (hasSizes) {
    cheapestSize = item.sizes.reduce((min: any, s: any) =>
      parseFloat(s.price.replace(/[₦,]/g, '')) < parseFloat(min.price.replace(/[₦,]/g, '')) ? s : min
    );
    displayPrice = `From ${cheapestSize.price}`;
  }

  const handleAdd = () => {
    let price = 0;
    let name = item.name;
    if (hasSizes) {
      if (!selectedSize) {
        alert('Please select a size');
        return;
      }
      price = parseFloat(selectedSize.price.replace(/[₦,]/g, ''));
      name += ` (${selectedSize.size})`;
    } else if (item.price) {
      price = parseFloat(item.price.replace(/[₦,]/g, ''));
    } else {
      return;
    }
    onAddToCart({
      id: item.id + (selectedSize ? `-${selectedSize.size}` : ''),
      name,
      price,
      quantity,
    });
    // Reset quantity to 1 after adding
    setQuantity(1);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      layout
      className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pepper-orange/10 transition-shadow duration-500 flex flex-col"
    >
      <div className="relative h-40 sm:h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-auto">
          {/* Price / Size selector */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-pepper-orange font-bold text-lg sm:text-xl">{displayPrice}</span>
            {hasSizes && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label={expanded ? 'Hide sizes' : 'Show sizes'}
              >
                {expanded ? <FiChevronUp size={18} aria-hidden="true" /> : <FiChevronDown size={18} aria-hidden="true" />}
              </button>
            )}
          </div>

          {/* Size options */}
          <AnimatePresence>
            {expanded && hasSizes && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-800 pt-2 space-y-1">
                  {item.sizes.map((size: any) => (
                    <label key={size.size} className="flex items-center justify-between text-xs sm:text-sm cursor-pointer hover:bg-white/5 p-1 rounded">
                      <span className="text-gray-300">{size.size}</span>
                      <span className="text-white font-medium">{size.price}</span>
                      <input
                        type="radio"
                        name={`size-${item.id}`}
                        value={size.size}
                        checked={selectedSize?.size === size.size}
                        onChange={() => setSelectedSize(size)}
                        className="accent-pepper-orange"
                        aria-label={`Select ${size.size} size for ${item.name}`}
                      />
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center bg-gray-800 rounded-full">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-700 rounded-l-full"
                aria-label="Decrease quantity"
              >
                <FiMinus size={14} aria-hidden="true" />
              </button>
              <span className="w-8 text-center text-white font-bold" aria-live="polite">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-700 rounded-r-full"
                aria-label="Increase quantity"
              >
                <FiPlus size={14} aria-hidden="true" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2 rounded-full text-sm transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}