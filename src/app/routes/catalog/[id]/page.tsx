// src/app/routes/catalog/[id]/page.tsx

"use client";

import { products } from "@/lib/data/test/data";
import { notFound } from "next/navigation";

import { useCart } from "@/lib/context/CartContext";

import Image from "next/image";
import React from "react";

export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);

  const { addToCart } = useCart();
  const book = products.find((p) => p.id === id);

  if (!book) return notFound();

  // Always treat images as an array for consistency
  const images = book.image ? [book.image] : [];

  return (
    <div className="px-0 sm:px-0 py-10">
      <div className="w-full bg-white rounded shadow p-6 flex flex-col md:flex-row gap-2">
        {/* Left: Images */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-xl aspect-[3/4] rounded overflow-hidden">
            <Image
              src={images[0]}
              alt={book.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {/* No thumbnails for now, since only one image */}
          </div>
        </div>
        {/* Right: Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold">{book.name}</h1>
          <p className="text-gray-700 mt-2">by {book.author}</p>
          <p className="text-lg text-gray-800 mt-4">${(book.price / 100).toFixed(2)}</p>
          <p className="mt-4 text-sm text-gray-600">{book.description}</p>

          <div className="mt-6">
            <button className="btn bg-color-primary text-white hover:bg-blue-700 px-4 py-2 rounded"
              onClick={() => addToCart(book.id, book.priceId)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="font-english-serif bg-white">
        <div className="pt-20 pl-20 pb-20">
          <h2 className="text-2xl font-bold">Book Information</h2>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Title: </span>
            {book.name}
          </p>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Author: </span>
            {book.author}
          </p>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Publishing House: </span>
            {book.publishingHouse}
          </p>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Volumes: </span>
            {book.volumes}
          </p>
          <br />
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Harakat: </span>
            {book.harakat}
          </p>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Tahqiq: </span>
            {book.tahqeeq || "Not specified"}
          </p>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Print Quality: </span>
            {book.printQuality}
          </p>
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Cover Style: </span>
            {book.cover}
          </p>
          <br />
          {
            book.referenceCode !== null && book.referenceCode != "" ?
          <p className="text-gray-700 mt-2 text">
            <span className="font-bold font-english-serif">Reference Code: </span>
            {book.referenceCode}
          </p>
            : null
          }
        </div>
      </div>
    </div>
  );
}