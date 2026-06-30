'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { motion } from 'framer-motion';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;

  if (!publicKey) {
    return (
      <section id="checkout" className="py-20 text-center">
        <p className="text-red-500">Paystack public key is missing. Please set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY in your environment.</p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section id="checkout" className="py-20 text-center">
        <h2 className="text-3xl font-bold text-white">Your cart is empty</h2>
        <a href="#menu" className="text-pepper-orange mt-4 inline-block hover:underline">
          Browse Menu
        </a>
      </section>
    );
  }

  const handleSuccess = (response: any) => {
    alert(`Payment successful! Reference: ${response.reference}`);
    clearCart();
    // Optional: redirect to a thank-you page
    // window.location.href = '/thank-you';
  };

  const handleClose = () => {
    alert('Payment was cancelled or closed.');
  };

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: totalPrice * 100,
    publicKey,
    currency: 'NGN',
  };

  return (
    <section id="checkout" className="py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Checkout</h2>

          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Order Summary</h3>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-gray-700 py-2">
                <span className="text-white">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-pepper-orange">₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}

            <div className="flex justify-between text-xl font-bold pt-4">
              <span className="text-white">Total</span>
              <span className="text-pepper-orange">₦{totalPrice.toLocaleString()}</span>
            </div>

            <div className="mt-6">
              <label className="block text-gray-300 text-sm mb-2">Email Address (for receipt)</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pepper-orange"
                required
              />
            </div>

            <PaystackButton
              {...config}
              onSuccess={handleSuccess}
              onClose={handleClose}
              className="w-full bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-3 rounded-full transition-all transform hover:scale-105 mt-4"
            >
              Pay ₦{totalPrice.toLocaleString()}
            </PaystackButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}