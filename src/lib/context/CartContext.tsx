"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CartItem = {
    priceId: string;
    id: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (id: string, priceId: string) => void;
    removeFromCart: (id: string) => void;
    getCartCount: () => number;
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    updateCartQuantity: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (id: string, priceId: string) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === id);
            if (existing) {
                return prev.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { id, priceId, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === id);
            if (existing) {
                if (existing.quantity > 1) {
                    return prev.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                    );
                }
                return prev.filter((item) => item.id !== id);
            }
            return prev;
        });
    };

    const getCartCount = () =>
        cart.reduce((total, item) => total + item.quantity, 0);

    const updateCartQuantity = (id: string, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
            )
        );
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount, setCart, updateCartQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}
