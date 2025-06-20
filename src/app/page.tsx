"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("default");

  const themeSelection = ["default", "theme-ottoman", "theme-andalusian", "theme-desert"]

  return (
    <div className={theme}>
      <nav className="w-full flex justify-center">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="arabic-text font-bold text-center text-[32px]">مكتبة ابن تيمية</h1>

          <div className="flex gap-6 font-english-serif">
            <Link href="/pages/catalog" className="btn">
              Catalog
            </Link>
            <Link href="/pages/account" className="btn">
              Account
            </Link>
            <Link href="/pages/cart" className="btn">
              Cart
            </Link>
          </div>
        </div>
      </nav>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{ marginTop: '20px' }}
      >
        {themeSelection.map((th) => (
          <option key={th} value={th}>
            {th}
          </option>
        ))}
      </select>
    </div>
  );
}
