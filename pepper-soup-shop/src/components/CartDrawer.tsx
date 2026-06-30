'use client';

import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice, cartCount, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gray-900/95 backdrop-blur-md z-50 shadow-2xl border-l border-gray-800 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiShoppingCart aria-hidden="true" /> Cart ({cartCount})
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close cart"
              >
                <FiX size={24} aria-hidden="true" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="bg-gray-800/50 rounded-xl p-3 flex gap-3">
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      {item.options && (
                        <p className="text-gray-400 text-xs">{item.options}</p>
                      )}
                      <p className="text-pepper-orange font-bold text-sm mt-1">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus size={14} aria-hidden="true" />
                      </button>
                      <span className="text-white font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <FiPlus size={14} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 ml-1"
                        aria-label="Remove item"
                      >
                        <FiX size={18} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-800 p-4 space-y-3">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-pepper-orange">₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded-full transition-colors"
                  >
                    Clear Cart
                  </button>
                  <Link
                    href="#checkout"
                    onClick={onClose}
                    className="flex-1 bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2 rounded-full transition-colors text-center"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}