"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
      successUrl="https://your-success-url.com"  // Placeholder success URL
      cancelUrl="https://your-cancel-url.com"    // Placeholder cancel URL
      stripe="" // If you aren't using Stripe, you can leave this empty, or use an empty string
    >
      {children}
    </USCProvider>
  );
}
