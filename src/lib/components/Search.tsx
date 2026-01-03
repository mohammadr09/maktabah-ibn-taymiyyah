import { useState } from "react";
import { products } from "../data/test/data";
import Link from "next/link";
import Image from "next/image";

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    // .slice(0, 5); // Limit to 5 suggestions

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search by Author, Title, or Keyword"
        className="w-full border border-amber-600 rounded-[100px] px-4 py-2 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 font-light"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 100)} // Delay to allow click
      />
      {focused && searchQuery && filteredProducts.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link
                href={`/routes/catalog/${product.id}`}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={72}
                  height={96}
                  className="rounded shadow-sm object-cover flex-shrink-0"
                  unoptimized={product.image.startsWith("http")}
                />
                <div>
                  <span className="font-semibold">{product.name}</span>
                  <div className="text-xs text-gray-500">{product.author}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {focused && searchQuery && filteredProducts.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 px-4 py-2 text-gray-500">
          No results found.
        </div>
      )}
    </div>
  );
}
