import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-06-30.basil" });

type StripeItem = {
  priceId: string;
  quantity: number;
  price: number;
};

async function getPriceAmount(priceId: string) {
  const price = await stripe.prices.retrieve(priceId);
  return price.unit_amount ?? 0;
}

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();
    console.log("Stripe items:", items);

    // Fetch actual price amounts from Stripe
    const itemsWithPrice = await Promise.all(
      (items as StripeItem[]).map(async (item) => ({
        ...item,
        price: await getPriceAmount(item.priceId),
      }))
    );

    // Calculate fee based on real prices
    const feeAmount = Math.round(
      35 + 0.05 * itemsWithPrice.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "cashapp"],
      line_items: [
        ...(items as StripeItem[]).map((item) => ({
          price: item.priceId,
          quantity: item.quantity,
        })),

        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Fee",
            },
            unit_amount: feeAmount,
          },
          quantity: 1,
        },
      ],

      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      }, shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 3500,
              currency: "usd",
            },
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 5 },
            },
          },
        },
      ],

      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/routes/success`, // need to create later
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/routes/cart`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    // Use unknown and check for error shape
    const error = err as { message?: string };
    console.error("Stripe error:", error.message, err);
    return NextResponse.json({ error: error.message || "Stripe session creation failed" }, { status: 500 });
  }
}