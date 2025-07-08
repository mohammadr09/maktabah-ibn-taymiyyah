"use client";

import { useCart } from "@/lib/context/CartContext";
import { products } from "@/lib/data/test/data";
import Link from "next/link";

import { loadStripe } from "@stripe/stripe-js";

import Image from "next/image";

export default function Cart() {
  const { cart } = useCart();

  const cartItems = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter((item): item is typeof products[number] & { quantity: number } => item !== null);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
  );

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems.map((item) => ({
          priceId: item.priceId,
          quantity: item.quantity,
        })),
      }),
    });

    const data = await res.json();
    if (!data.id) {
      alert("Checkout failed: " + (data.error || "Unknown error"));
      return;
    }
    const stripe = await stripePromise;
    stripe?.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="mr-36 ml-36 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4 border-b pb-4">
              <div className="w-60 h-60 relative flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
                sizes="240px"
                priority
              />
              </div>
              <div className="flex-1">
              <Link href={`/routes/catalog/${item.id}`} className="font-semibold hover:underline">{item.name}</Link>
              <div className="text-xs text-gray-500">{item.author}</div>
              <div className="text-sm">Quantity: {item.quantity}</div>
              </div>
              <div className="font-bold">${(item.price / 100).toFixed(2)} x {item.quantity}</div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="flex flex-col items-end mt-6">
          <div className="font-bold text-lg mb-2">
            Subtotal: ${(total / 100).toFixed(2)}
          </div>
          <button className="cursor-pointer mt-2 bg-color-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            onClick={handleCheckout}>
            Continue to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
