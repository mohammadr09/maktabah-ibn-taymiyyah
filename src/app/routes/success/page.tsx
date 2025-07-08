"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/context/CartContext";

export default function SuccessPage() {
  const { setCart } = useCart(); 

  useEffect(() => {
    // Clear cart on success page load
    setCart([]);
    localStorage.removeItem("cart");
  }, [setCart]);

  return <h1>Thank you for your purchase!</h1>;
}
