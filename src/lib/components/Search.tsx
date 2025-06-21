import { useState } from "react";
import { products } from "../data/test/data";

import Image from "next/image";

export default function ProductSearch() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const maxSuggestions = 5;
    const suggestions = filteredProducts.slice(0, maxSuggestions);

    return (
        <div className="flex flex-col items-center mt-10 w-full px-4">
            <input
                type="text"
                placeholder="Search for a book..."
                className="border border-gray-300 rounded-2xl px-4 py-2 w-full text-black input-primary-focus"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <ul className="mt-6 w-full max-w-md space-y-4">
                <li className="">Some suggested titles:</li>
                {suggestions.map((product) => (
                    <li
                        key={product.id}
                        className="flex border p-4 rounded-2xl shadow-sm bg-white overflow-hidden"
                        style={{ height: 120 }}
                    >
                        <div className="relative w-20 h-full flex-shrink-0 rounded overflow-hidden">
                            <Image
                                src={product.image}
                                alt={`${product.name} cover`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </div>

                        <div className="ml-4 flex flex-col justify-center">
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.author}</p>
                            <p className="text-sm text-gray-900">{product.description}</p>
                        </div>
                    </li>
                ))}
                {suggestions.length === 0 && (
                    <li className="text-gray-500 text-center mt-4">No results found.</li>
                )}
            </ul>
        </div>
    );
}