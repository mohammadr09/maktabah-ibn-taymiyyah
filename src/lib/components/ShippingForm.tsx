"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { ShippingRate } from "../types/shippingRate";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);


type Address = {
  name: string;
  street1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

type Parcel = {
  length: string;
  width: string;
  height: string;
  distanceUnit: string;
  weight: string;
  massUnit: string;
};

// type ShippingRate = {
//   object_id: string;
//   amount: string;
//   provider: string;
//   servicelevel: { name: string };
// };

export default function ShippingForm({
  cartItems,
  onSelectRate,
}: {
  cartItems: { priceId: string; quantity: number }[];
  onSelectRate: React.Dispatch<React.SetStateAction<ShippingRate | null>>;
}) {
  const [address, setAddress] = useState<Address>({
    name: "",
    street1: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  });

  const [parcel] = useState<Parcel>({
    length: "10",
    width: "8",
    height: "6",
    distanceUnit: "in",
    weight: "7",
    massUnit: "lb",
  });

  const [rates, setRates] = useState<ShippingRate[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/getShippingRates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addressTo: address,
          addressFrom: {
            name: "Mohammad Rahman",
            street1: "2514 Tratman Ave",
            city: "Bronx",
            state: "NY",
            zip: "10461",
            country: "US",
            phone: "3474198920",
            email: "support@maktabahibntaymiyyah.com",
          },
          parcel,
        }),
      });

      if (!res.ok) throw new Error("Failed to fetch shipping rates");

      const data = await res.json();
      setRates(data);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    }
  }

  return (
    <div
      className="max-w-md sm:max-w-lg mx-auto p-8 rounded-lg shadow-md space-y-6"
      style={{
        fontFamily: "var(--font-english-sans)",
        color: "var(--color-text)",
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <h2
          className="font-semibold mb-2"
          style={{ fontFamily: "var(--font-english-serif)", color: "var(--color-primary)" }}
        >
          Shipping Address
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={address.name}
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Street Address"
          required
          className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={address.street1}
          onChange={(e) => setAddress({ ...address, street1: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          required
          className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="State/Province"
          required
          className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        />
        <input
          type="text"
          placeholder="Zip / Postal Code"
          required
          className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={address.zip}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
        />

        <select
          required
          className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={address.country}
          onChange={(e) => setAddress({ ...address, country: e.target.value })}
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--color-primary)] text-[var(--color-secondary)] py-2 rounded hover:bg-[var(--color-accent)] disabled:opacity-60 transition"
          style={{ fontFamily: "var(--font-english-serif)" }}
        >
          {loading ? "Getting Rates..." : "Get Shipping Rates"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-red-600 text-xs font-semibold">{error}</p>
      )}

      {rates.length > 0 && (
        <div className="mt-4">
          <h3
            className="font-semibold mb-2"
            style={{
              fontFamily: "var(--font-english-serif)",
              color: "var(--color-primary)",
              fontSize: "0.9rem",
            }}
          >
            Select a Shipping Rate
          </h3>
          <ul className="space-y-2 text-xs">
            {rates.map((rate, index) => (
              <li key={`${rate.provider}-${index}`}>
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectRate(rates[index]);
                  }}
                  className={`w-full text-left p-3 rounded-lg border transition duration-200 ${selectedIndex === index
                    ? "bg-[var(--color-primary)] text-[var(--color-secondary)] border-[var(--color-primary)] shadow-inner font-semibold"
                    : "bg-white text-black border-gray-300 hover:bg-[var(--color-secondary)]"
                    }`}
                >
                  <span className="font-medium">{rate.provider}</span> — {rate.servicelevel.name} — $
                  {parseFloat(rate.amount).toFixed(2)}
                  {selectedIndex === index && (
                    <span className="ml-2 text-sm text-[var(--color-secondary)]">✔</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {selectedIndex !== null && (
            <button
              className="mt-4 w-full bg-[var(--color-primary)] text-[var(--color-secondary)] py-2 rounded hover:bg-[var(--color-accent)] transition"
              style={{ fontFamily: "var(--font-english-serif)" }}
              onClick={async () => {
                const stripe = await stripePromise;
                const res = await fetch("/api/create-checkout-session", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    items: cartItems.map((item) => ({
                      priceId: item.priceId,
                      quantity: item.quantity,
                    })),
                    shipping: {
                      amount: parseInt(rates[selectedIndex].amount), // e.g. "650" -> 650
                      name: `${rates[selectedIndex].provider} - ${rates[selectedIndex].servicelevel.name}`,
                    },
                  }),
                });

                const data = await res.json();
                if (!data.id) {
                  alert("Checkout failed: " + (data.error || "Unknown error"));
                  return;
                }

                stripe?.redirectToCheckout({ sessionId: data.id });
              }}

            >
              Continue to Payment
            </button>
          )}
        </div>
      )}
    </div>
  );
}
