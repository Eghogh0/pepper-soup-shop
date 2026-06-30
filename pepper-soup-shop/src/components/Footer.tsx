'use client';

import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
      } else {
        alert(data.error || 'Subscription failed');
      }
    } catch {
      alert('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter section above the grid */}
        <div className="mb-12 max-w-md mx-auto text-center">
          <h3 className="text-white font-bold text-lg mb-2">Spice Up Your Inbox</h3>
          <p className="text-gray-400 text-sm mb-4">Get exclusive deals and new menu alerts.</p>
          {subscribed ? (
            <p className="text-leaf-green font-semibold">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white rounded-l-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-pepper-orange"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2 px-4 rounded-r-full transition-colors disabled:opacity-50"
              >
                {loading ? '...' : 'Join'}
              </button>
            </form>
          )}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & about */}
          <div className="space-y-4">
            <img
              src="/logo/logo-horizontal.png"
              alt="The Pepper Soup Shop"
              className="h-16 md:h-20 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing the authentic taste of the Kalabari rivers to your doorstep. Hot, fresh, unforgettable.
            </p>
            {/* Social Icons – only Instagram, TikTok, WhatsApp */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the_peppersoupshop/"  // Replace with actual URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pepper-orange transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@the_peppersoupshop"   // Replace with actual URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pepper-orange transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://wa.me/2349058441145"                  // Ikoyi WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-leaf-green transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-pepper-orange transition-colors">Home</Link></li>
              <li><Link href="#menu" className="text-gray-400 hover:text-pepper-orange transition-colors">Menu</Link></li>
              <li><Link href="#story" className="text-gray-400 hover:text-pepper-orange transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-pepper-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info – updated emails */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Ikoyi: 4b Adekunle Lawal Road, Ikoyi, Lagos</li>
              <li>Lekki 1: 5 Chris Madueke Drive, Lekki Phase 1, Lagos</li>
              <li>
                <a href="tel:+2349058441145" className="hover:text-pepper-orange">09058441145</a> (Ikoyi)
              </li>
              <li>
                <a href="tel:+2349063211390" className="hover:text-pepper-orange">09063211390</a> (Lekki 1)
              </li>
              <li>
                <a href="tel:+2348084462219" className="hover:text-pepper-orange">08084462219</a> (Lekki 2)
              </li>
              <li>
                <a href="mailto:hello@thepeppersoupfest.com" className="hover:text-pepper-orange">
                  hello@thepeppersoupfest.com
                </a>
              </li>
              <li>
                <a href="mailto:sales@thepeppersoupshop.com" className="hover:text-pepper-orange">
                  sales@thepeppersoupshop.com
                </a>
              </li>
            </ul>
          </div>

          {/* Empty placeholder to keep 4 columns */}
          <div />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Pepper Soup Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}