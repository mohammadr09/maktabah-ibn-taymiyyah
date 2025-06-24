"use client";
import { useEffect, useState } from "react";

const themes = [
  { name: "Classic", value: "default", emoji: "🌿" },
  { name: "Ottoman", value: "theme-ottoman", emoji: "🕌" },
  { name: "Andalusian", value: "theme-andalusian", emoji: "🌴" },
  { name: "Desert", value: "theme-desert", emoji: "🏜️" },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.body.classList.remove(
      "default",
      "theme-ottoman",
      "theme-andalusian",
      "theme-desert"
    );
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2 bg-white/80 rounded-full px-3 py-1 shadow border border-gray-200">
      <span className="text-xs text-gray-500">Theme:</span>
      <div className="flex gap-1">
        {themes.map((t) => (
          <button
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`px-2 py-1 rounded-full text-lg transition 
              ${theme === t.value ? "bg-color-primary text-white shadow" : "hover:bg-gray-100"}`}
            aria-label={t.name}
            title={t.name}
          >
            {t.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}