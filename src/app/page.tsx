// app/page.tsx

"use client";

import Link from "next/link";

// import Link from "next/link";
// import { useState } from "react";

export default function Home() {
  // const [theme, setTheme] = useState("default");

  // const themeSelection = ["default", "theme-ottoman", "theme-andalusian", "theme-desert"];

  return (
    <div className="default">
      <main className="text-center pt-28 px-4 max-w-xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl arabic-text">بسم الله الرحمن الرحيم</h2>
          <h1 className="text-2xl sm:text-4xl font-bold font-english-serif text-black">
            Welcome to Maktabah Ibn Taymiyyah
          </h1>
          <p className="text-xl font-english-serif mt-6">View our
            <span>
              <Link href="/routes/catalog" className="text-color-primary hover:underline pl-1 pr-1">
                Catalog
              </Link>
            </span>
            to get started</p>
            <p className="pt-10">NOTE: We are temporarily using book images from SifatuSafwa.com. All image and description credits goes to them. May Allah reward them.</p>
        </div>
      </main>

    </div>
  );
}
