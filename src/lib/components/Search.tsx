import { useState } from "react";
// import { products } from "../data/test/data";

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const maxSuggestions = 5;
  // const suggestions = filteredProducts.slice(0, maxSuggestions);

  return (
    <div className="w-full max-w-xl px-4 sm:px-0">
      <input
        type="text"
        placeholder="Search by Author, Title, Keyword"
        className="w-full border border-gray-300 rounded-2xl px-4 py-2 text-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
