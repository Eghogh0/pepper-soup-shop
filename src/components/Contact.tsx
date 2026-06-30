'use client';

import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-transparent py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            GET IN <span className="text-pepper-orange">TOUCH</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-400 text-base sm:text-lg">
            We’re ready to take your order or answer any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden h-64 sm:h-80 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.005553150232!2d3.379205774992424!3d6.524334993417442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50cbe6ab5f9%3A0x7b96f3de6fd7ca27!2s4b%20Adekunle%20Lawal%2C%20Ikoyi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ikoyi Location"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Location blocks */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-pepper-orange text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Ikoyi</p>
                <p className="text-gray-300 text-sm sm:text-base">4b Adekunle Lawal Road, Ikoyi, Lagos</p>
                <a href="tel:+2349058441145" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm">09058441145</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-leaf-green text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Lekki 1</p>
                <p className="text-gray-300 text-sm sm:text-base">5 Chris Madueke Drive, Lekki Phase 1, Lagos</p>
                <a href="tel:+2349063211390" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm">09063211390</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-leaf-green text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Lekki 2</p>
                <p className="text-gray-300 text-sm sm:text-base">(Contact for address)</p>
                <a href="tel:+2348084462219" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm">08084462219</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-pepper-orange text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Call Us</p>
                <a href="tel:+2349058441145" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm sm:text-base">09058441145 (Ikoyi)</a><br />
                <a href="tel:+2349063211390" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm sm:text-base">09063211390 (Lekki 1)</a><br />
                <a href="tel:+2348084462219" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm sm:text-base">08084462219 (Lekki 2)</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaWhatsapp className="text-leaf-green text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">WhatsApp</p>
                <a href="https://wa.me/2349058441145" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-leaf-green transition-colors text-sm sm:text-base">Chat with us (Ikoyi)</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-pepper-orange text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Email</p>
                <a href="mailto:hello@thepeppersoupfest.com" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm sm:text-base">
                  hello@thepeppersoupfest.com
                </a>
                <br />
                <a href="mailto:sales@thepeppersoupshop.com" className="text-gray-300 hover:text-pepper-orange transition-colors text-sm sm:text-base">
                  sales@thepeppersoupshop.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaClock className="text-pepper-orange text-xl sm:text-2xl mt-1" />
              <div>
                <p className="text-white font-bold text-base sm:text-lg">Hours</p>
                <p className="text-gray-300 text-sm sm:text-base">Mon – Sat: 10:00 AM – 10:00 PM<br />Sun: 12:00 PM – 8:00 PM</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="tel:+2349058441145" className="bg-pepper-orange hover:bg-pepper-orange-dark text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base transition-all">Call Now</a>
              <a href="https://wa.me/2349058441145" className="bg-leaf-green hover:bg-leaf-green-dark text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base transition-all">WhatsApp Order</a>
              <a href="https://maps.google.com/?q=4b+Adekunle+Lawal+Ikoyi+Lagos" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 hover:border-pepper-orange text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base transition-all">Get Directions</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}