"use client"

import { useCart } from "@/lib/context/CartContext";
import { products } from "@/lib/data/test/data";
import ShippingForm from "@/lib/components/ShippingForm";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ShippingRate } from "@/lib/types/shippingRate";

export default function Checkout() {
  const { cart } = useCart();

  // Map cart items to full product info + quantity
  const cartItems = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product || !product.priceId) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter((item): item is typeof products[number] & { quantity: number } => item !== null);

  // Prepare minimal info for checkout API
  const checkoutItems = cartItems.map(({ priceId, quantity }) => ({
    priceId: priceId as string,
    quantity,
  }));

  const [selectedRate, setSelectedRate] = useState<ShippingRate | null>(null);

  return (
    <main className="mx-auto max-w-4xl p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4 border-b pb-4">
              <div className="w-40 h-40 relative flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="flex-1">
                <Link
                  href={`/routes/catalog/${item.id}`}
                  className="font-semibold hover:underline"
                >
                  {item.name}
                </Link>
                <div className="text-xs text-gray-500">{item.author}</div>
                <div className="text-sm mt-1">Quantity: {item.quantity}</div>
                <div className="font-bold mt-1">
                  ${(item.price / 100).toFixed(2)} x {item.quantity} = $
                  {((item.price * item.quantity) / 100).toFixed(2)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <ShippingForm cartItems={checkoutItems} onSelectRate={setSelectedRate} />

      {/* {selectedRate && (
        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          onClick={async () => {
            const res = await fetch("/api/create-checkout-session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                items: checkoutItems,
                shipping: {
                  amount: Math.round(parseFloat(selectedRate.amount) * 100),
                  name: `${selectedRate.provider} - ${selectedRate.servicelevel.name}`,
                },
              }),
            });

            const data = await res.json();
            if (!data.id) {
              alert("Checkout failed: " + (data.error || "Unknown error"));
              return;
            }

            const stripe = await (await import("@stripe/stripe-js")).loadStripe(
              process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
            );
            stripe?.redirectToCheckout({ sessionId: data.id });
          }}
        >
          Proceed to Payment
        </button>
      )} */}
    </main>
  );
}
