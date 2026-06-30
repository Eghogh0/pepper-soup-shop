'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const menuCategories = [
  { name: 'Peppersoup Bowls', href: '#menu' },
  { name: 'Kalabari Culture', href: '#menu' },
  { name: 'Fast Food', href: '#menu' },
  { name: 'Drinks', href: '#menu' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo/logo.png"
                alt="The Pepper Soup Shop"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-pepper-orange transition-colors font-medium text-sm uppercase tracking-wide">
                Home
              </Link>
              <a href="#story" className="text-white hover:text-pepper-orange transition-colors font-medium text-sm uppercase tracking-wide">
                About Us
              </a>

              {/* Order dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMenuDropdown(true)}
                onMouseLeave={() => setMenuDropdown(false)}
              >
                <button
                  onClick={() => setMenuDropdown(!menuDropdown)}
                  className="flex items-center space-x-1 text-white hover:text-pepper-orange transition-colors font-medium text-sm uppercase tracking-wide focus:outline-none"
                >
                  <span>Order</span>
                  <HiChevronDown
                    size={16}
                    className={`transition-transform ${menuDropdown ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {menuDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-800 p-4"
                    >
                      {menuCategories.map((cat) => (
                        <a
                          key={cat.name}
                          href={cat.href}
                          onClick={() => setMenuDropdown(false)}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {cat.name}
                        </a>
                      ))}
                      <hr className="border-gray-700 my-2" />
                      <a
                        href="#menu"
                        onClick={() => setMenuDropdown(false)}
                        className="block px-4 py-2 text-pepper-orange font-bold hover:bg-white/5 rounded-lg transition-colors"
                      >
                        View Full Menu →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#contact" className="text-white hover:text-pepper-orange transition-colors font-medium text-sm uppercase tracking-wide">
                Contact Us
              </a>
              <a
                href="#menu"
                className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-pepper-orange/30"
              >
                Order Now
              </a>

              {/* Cart Icon */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-white hover:text-pepper-orange transition-colors"
              >
                <FiShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pepper-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu + cart */}
            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-white"
              >
                <FiShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pepper-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white focus:outline-none">
                {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white hover:text-pepper-orange text-lg font-medium">
                  Home
                </Link>
                <a href="#story" onClick={() => setMobileOpen(false)} className="block text-white hover:text-pepper-orange text-lg font-medium">
                  About Us
                </a>
                <div className="space-y-2">
                  <span className="block text-white font-semibold text-lg">Order</span>
                  <div className="pl-4 space-y-2">
                    {menuCategories.map((cat) => (
                      <a key={cat.name} href={cat.href} onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-pepper-orange text-sm">
                        {cat.name}
                      </a>
                    ))}
                    <a href="#menu" onClick={() => setMobileOpen(false)} className="block text-pepper-orange font-bold text-sm">
                      View Full Menu
                    </a>
                  </div>
                </div>
                <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-white hover:text-pepper-orange text-lg font-medium">
                  Contact Us
                </a>
                <a href="#menu" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-3 rounded-full mt-4">
                  Order Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}