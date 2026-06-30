'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

const proteins = [
  { name: 'Assorted Peppersoup', basePrice: 28500 },
  { name: 'Cowleg Peppersoup', basePrice: 10350 },
  { name: 'Chicken Peppersoup', basePrice: 28575 },
  { name: 'Goatmeat Peppersoup', basePrice: 21200 },
  { name: 'Turkey Peppersoup', basePrice: 29200 },
  { name: 'Fresh Catfish Peppersoup', basePrice: 28100 },
  { name: 'Croaker Fish Peppersoup', basePrice: 25500 },
  { name: 'Owerre Fish Peppersoup', basePrice: 28100 },
  { name: 'Snail Peppersoup', basePrice: 31700 },
  { name: 'Dried Catfish Peppersoup', basePrice: 28200 },
  { name: 'Cowtail Peppersoup', basePrice: 32500 },
  { name: 'Tilapia Peppersoup', basePrice: 21050 },
  { name: 'Barracuda Fish Peppersoup', basePrice: 28100 },
  { name: 'Seafood Peppersoup', basePrice: 59800 },
  { name: 'Live Chicken Peppersoup', basePrice: 18500 },
  { name: 'Wellness Bowl', basePrice: 59800 },
  { name: 'Ajumbese (Nursing Mothers)', basePrice: 31700 },
];

const spiceLevels = [
  '🌴 River Breeze',
  '🚣 Gentle Tide',
  '🐟 Fisherman’s Choice',
  '🌊 Creek Heat',
  '🔥 Kalabari Classic',
  '⚡ Delta Strong',
  '🚌 Danfo Approved',
  '🌉 Third Mainland Fire',
  '☀️ Lagos Heatwave',
  '👑 Peppersoup Queen Challenge',
];

const extras = [
  { name: 'Plantain', price: 2625 },
  { name: 'Yam', price: 2100 },
  { name: 'Agidi (Eko)', price: 840 },
  { name: 'Scent Leaf', price: 200 },
  { name: 'Sweet Corn', price: 2100 },
  { name: 'Moi Moi', price: 1000 },
  { name: 'Coleslaw', price: 1500 },
  { name: 'Fried Yam', price: 2100 },
  { name: 'Fried Plantain', price: 2625 },
];

export default function BuildYourBowl() {
  const [step, setStep] = useState(1);
  const [selectedProtein, setSelectedProtein] = useState(proteins[0]);
  const [selectedSpice, setSelectedSpice] = useState(spiceLevels[4]);
  const [selectedExtras, setSelectedExtras] = useState<typeof extras>([]);
  const { addItem } = useCart();

  const totalPrice = selectedProtein.basePrice + selectedExtras.reduce((sum, ex) => sum + ex.price, 0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleExtra = (extra: (typeof extras)[0]) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleAddToCart = () => {
    const description = `${selectedProtein.name} (${selectedSpice})${selectedExtras.length > 0 ? ` + ${selectedExtras.map(e => e.name).join(', ')}` : ''}`;
    addItem({
      id: `bowl-${Date.now()}`,
      name: `Custom Bowl: ${description}`,
      price: totalPrice,
      quantity: 1,
    });
    alert('Added to cart!');
  };

  return (
    <section id="build-bowl" className="bg-transparent py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            BUILD YOUR <span className="text-pepper-orange">BOWL</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg">
            Customize your perfect pepper soup experience.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex justify-center mb-8 sm:mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                  s <= step ? 'bg-pepper-orange text-white' : 'bg-gray-800 text-gray-500'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-8 sm:w-12 h-1 mx-1 sm:mx-2 ${
                    s < step ? 'bg-pepper-orange' : 'bg-gray-800'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-2xl"
          >
            {step === 1 && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Choose Your Protein</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-h-60 sm:max-h-96 overflow-y-auto">
                  {proteins.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => setSelectedProtein(p)}
                      className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left ${
                        selectedProtein.name === p.name
                          ? 'border-pepper-orange bg-pepper-orange/10'
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <p className="text-white font-bold text-xs sm:text-sm">{p.name}</p>
                      <p className="text-pepper-orange font-semibold mt-1 text-xs sm:text-sm">
                        From ₦{p.basePrice.toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Choose Spice Level</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {spiceLevels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedSpice(lvl)}
                      className={`px-3 sm:px-4 py-2 rounded-full font-bold border-2 transition-all text-xs sm:text-sm ${
                        selectedSpice === lvl
                          ? 'border-pepper-orange bg-pepper-orange text-white'
                          : 'border-gray-700 text-gray-300 hover:border-pepper-orange'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Choose Extras (Sides)</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {extras.map((ex) => {
                    const selected = selectedExtras.includes(ex);
                    return (
                      <button
                        key={ex.name}
                        onClick={() => toggleExtra(ex)}
                        className={`px-3 sm:px-4 py-2 rounded-full font-bold border-2 transition-all text-xs sm:text-sm ${
                          selected
                            ? 'border-leaf-green bg-leaf-green/20 text-leaf-green'
                            : 'border-gray-700 text-gray-300 hover:border-leaf-green'
                        }`}
                      >
                        {ex.name} (₦{ex.price.toLocaleString()})
                      </button>
                    );
                  })}
                </div>

                {/* Summary */}
                <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Protein:</strong> {selectedProtein.name}
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">Spice:</strong> {selectedSpice}
                  </p>
                  {selectedExtras.length > 0 && (
                    <p className="text-gray-300 text-sm">
                      <strong className="text-white">Extras:</strong> {selectedExtras.map(e => e.name).join(', ')}
                    </p>
                  )}
                  <p className="text-pepper-orange font-bold text-lg mt-2">
                    Total: ₦{totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-6 sm:mt-8 flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-white disabled:opacity-30 transition-colors text-sm sm:text-base"
          >
            <FiChevronLeft size={18} /> <span>Back</span>
          </button>

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="flex items-center space-x-1 sm:space-x-2 text-pepper-orange hover:text-white font-bold text-sm sm:text-base"
            >
              <span>Next</span> <FiChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg shadow-pepper-orange/30 transition-all text-sm sm:text-base"
            >
              Add to Cart 🛒
            </button>
          )}
        </div>
      </div>
    </section>
  );
}