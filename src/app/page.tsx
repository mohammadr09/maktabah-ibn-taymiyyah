"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("default");

  const themeSelection = ["default", "theme-ottoman", "theme-andalusian", "theme-desert"]

  return (
    <div className={theme}>
      <nav className="w-full flex justify-center mt-[47px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="arabic-text font-bold text-center text-[2rem]">مكتبة ابن تيمية</h1>
          <div className="flex flex-row gap-6 sm:gap-12 font-english-serif items-center text-[1.45rem]">
            <Link href="/" className="btn">Home</Link>
            <Link href="/pages/catalog" className="btn">Catalog</Link>
            <Link href="/pages/account" className="btn">Account</Link>
            <Link href="/pages/cart" className="btn">Cart</Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center text-center min-h-[calc(65vh-150px)]">
        <div>
          <h2 className="text-xl sm:text-2xl arabic-text">بسم الله الرحمن الرحيم</h2>
          <h1 className="text-2xl sm:text-4xl font-bold font-english-serif text-black">Welcome to Maktabah Ibn Taymiyyah</h1>
        </div>
      </main>
    </div>
  );
}
