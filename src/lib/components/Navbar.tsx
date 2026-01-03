"use client";

import Link from "next/link";
import ProductSearch from "./Search";
import { useCart } from "../context/CartContext";

import { Home, AccountCircle, ShoppingCart } from "@mui/icons-material";

export default function Navbar() {
    const { getCartCount } = useCart();
    return (
        <div className="">
            <nav className="w-full flex items-center justify-between px-10 py-5">
                {/* Title Section */}
                <div className="flex-shrink-0">
                    <h1 className="arabic-text font-bold text-3xl">مكتبة ابن تيمية</h1>
                </div>

                {/* Search Bar Section */}
                <div className="flex-grow mx-4">
                    <div className="max-w-2xl mx-auto">
                        <ProductSearch />
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex items-center space-x-6">
                    <Link href="/" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover" aria-label="home">
                        <Home />
                        {/* <span className="mt-1">Home</span> */}
                    </Link>

                    <Link href="/routes/account" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover" aria-label="account">
                        <AccountCircle />
                        {/* <span className="mt-1">Account</span> */}
                    </Link>

                    <Link href="/routes/cart" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover relative" aria-label="cart">
                        <ShoppingCart />
                        {/* <span className="mt-1">Cart</span> */}
                        {getCartCount() > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 z-10">
                                {getCartCount()}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>

            <div className="flex flex-wrap justify-center gap-3 pb-4 sm:pb-6">
                <Link href="/routes/catalog/sciences/aqeedah" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Aqeedah</Link>
                <Link href="/routes/catalog/sciences/fiqh" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Fiqh</Link>
                <Link href="/routes/catalog/sciences/tafsir" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Tafisr</Link>
                <Link href="/routes/catalog/sciences/hadith" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Hadith</Link>
                <Link href="/routes/catalog/sciences/seerah" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Seerah</Link>
                <Link href="/routes/catalog/sciences/arabic-lang" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Arabic</Link>
                <Link href="/routes/catalog/sciences/adab" className="btn px-4 py-2 rounded-[100px] border border-gray-300 hover:bg-gray-100 transition font-english-serif">Islamic Etiquette</Link>
            </div>
        </div>
    );
}