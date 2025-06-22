// catalog/page.tsx

import { products } from "@/lib/data/test/data";
import { Product } from "@/lib/types/product";

import Link from "next/link";
import Image from "next/image";

const groupBooksByScience = (books: typeof products) => {
    const groups: { [science: string]: typeof products } = {};
    for (const book of books) {
        if (!groups[book.science]) {
            groups[book.science] = [];
        }
        groups[book.science].push(book);
    }
    return groups;
};

export default function Catalog() {
    const booksByScience = groupBooksByScience(products);

    const sciencePathMap: Record<Product["science"], string> = {
        "Tafsir": "/catalog/sciences/tafsir",
        "Hadith": "/catalog/sciences/hadith",
        "Adab": "/catalog/sciences/adab",
        "Arabic Language": "/catalog/sciences/arabic-lang",
        "Seerah": "/catalog/sciences/seerah",
        "Aqeedah": "/catalog/sciences/aqeedah",
        "Fiqh - General": "/catalog/sciences/fiqh/general-fiqh",
        "Hanafi Fiqh": "/catalog/sciences/fiqh/hanafi",
        "Shafi'i Fiqh": "/catalog/sciences/fiqh/shafi",
        "Maliki Fiqh": "/catalog/sciences/fiqh/maliki",
        "Hanbali Fiqh": "/catalog/sciences/fiqh/hanbali",
    };

    return (
        <div className="px-4 sm:px-12">
            {/* Header */}
            <div className="text-center mt-8 mb-12">
                <h1 className="text-xl sm:text-3xl font-bold font-english-serif">Maktabah Ibn Taymiyyah | Catalog</h1>
                <p className="text-base sm:text-lg font-english-serif mt-2">
                    Explore books from various Islamic Sciences from the Salaf and titles from our contemporary scholars.
                </p>
            </div>

            {/* Books grouped by science */}
            <div className="space-y-10">
                {Object.entries(booksByScience).map(([science, books]) => {
                    const typedScience = science as Product["science"];
                    return (
                        <div key={science} className="bg-white rounded shadow-sm p-4">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{science}</h2>

                            <div className="overflow-x-auto">
                                <div className="flex gap-4">
                                    {books.map((book) => (
                                        <Link key={book.id} href={`/pages/catalog/${book.id}`}>
                                            <div className="group w-[160px] flex-shrink-0 border rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-200 cursor-pointer">
                                                <Image
                                                    src={book.image}
                                                    alt={book.name}
                                                    width={160}
                                                    height={192} // h-48 = 12rem = 192px
                                                    className="object-cover"
                                                    unoptimized={book.image.startsWith("http")} 
                                                />
                                                <div className="p-3 text-center text-sm">
                                                    <h3 className="font-medium">{book.name}</h3>
                                                    <p className="text-gray-600 text-xs mt-1">{book.author}</p>
                                                    <div className="mt-2 relative text-sm font-medium text-gray-700">
                                                        <span className="group-hover:opacity-0 transition duration-200">${(book.price / 100).toFixed(2)}</span>
                                                        <button className="absolute inset-0 opacity-0 group-hover:opacity-100 text-blue-600 hover:underline transition duration-200 cursor-pointer">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-3">
                                <Link href={sciencePathMap[typedScience]}>
                                    <button className="text-blue-600 hover:underline text-sm cursor-pointer">See more →</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
