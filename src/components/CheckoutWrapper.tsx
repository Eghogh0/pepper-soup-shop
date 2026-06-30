'use client';

import { Suspense, lazy } from 'react';

// Lazy load the checkout component – only on the client
const Checkout = lazy(() => import('@/components/Checkout'));

export default function CheckoutWrapper() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading checkout...</div>}>
      <Checkout />
    </Suspense>
  );
}