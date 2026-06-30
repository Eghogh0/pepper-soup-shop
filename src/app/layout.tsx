import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'The Pepper Soup Shop | Authentic Nigerian Pepper Soup',
  description: 'Freshly prepared Nigerian pepper soup with traditional spices and rich flavors. Order now!',
  icons: {
    icon: '/logo/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <SmoothScrollProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}