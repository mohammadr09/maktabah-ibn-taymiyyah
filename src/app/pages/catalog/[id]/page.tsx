import { products } from "@/lib/data/test/data";
import { notFound } from "next/navigation";

import Image from "next/image";

type Params = {
    params: {
        id: string;
    };
};

export default function BookPage({ params }: Params) {
    const book = products.find(p => p.id === params.id);

    if (!book) return notFound();

    return (
        <div className="px-6 sm:px-12 py-10">
            <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
                <div className="relative w-full h-80 rounded overflow-hidden">
                    <Image
                        src={book.image}
                        alt={book.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-2xl font-bold mt-6">{book.name}</h1>
                <p className="text-gray-700 mt-2">by {book.author}</p>
                <p className="text-lg text-gray-800 mt-4">${(book.price / 100).toFixed(2)}</p>
                <p className="mt-4 text-sm text-gray-600">{book.description}</p>
            </div>
        </div>
    );
}
