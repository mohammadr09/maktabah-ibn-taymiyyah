import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-06-30.basil" });

type StripeItem = {
  priceId: string;
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();
    console.log("Stripe items:", items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: (items as StripeItem[]).map((item) => ({
        price: item.priceId,
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    // Use unknown and check for error shape
    const error = err as { message?: string };
    console.error("Stripe error:", error.message, err);
    return NextResponse.json({ error: error.message || "Stripe session creation failed" }, { status: 500 });
  }
}