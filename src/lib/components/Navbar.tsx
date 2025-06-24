"use client";

import Link from "next/link";
import ProductSearch from "./Search";

export default function Navbar() {
    return (
        <div className="w-full flex flex-col px-4 sm:px-[55px] mt-10 gap-4">
            {/* === Top Navigation Bar === */}
            <nav className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                    <h1 className="arabic-text font-bold text-[1.5rem] sm:text-[2rem] text-center sm:text-right whitespace-nowrap">
                        مكتبة ابن تيمية
                    </h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full max-w-xl">
                        <ProductSearch />
                    </div>
                </div>

                <div className="flex justify-center sm:justify-start w-full sm:w-auto gap-4 sm:gap-10 font-english-serif text-[1rem] sm:text-[1.45rem]">
                    <Link href="/" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                        <span className="mt-1">Home</span>
                    </Link>

                    <Link href="/routes/catalog" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
                            <path d="M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z" />
                        </svg>
                        <span className="mt-1">Catalog</span>
                    </Link>

                    <Link href="/routes/account" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                        <span className="mt-1">Account</span>
                    </Link>

                    <Link href="/routes/cart" className="btn flex flex-col items-center text-xs sm:text-sm color-primary icon-accent-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current ">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                        </svg>
                        <span className="mt-1">Cart</span>
                    </Link>
                </div>
            </nav>

            {/* === Category Buttons: Directly Below Search Bar === */}
            <div className="flex flex-wrap justify-center gap-3 pt-1 pb-4 sm:pb-6">
                <Link href="/routes/catalog/sciences/aqeedah" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Aqeedah</Link>
                <Link href="/routes/catalog/sciences/fiqh" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Fiqh</Link>
                <Link href="/routes/catalog/sciences/tafsir" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Tafisr</Link>
                <Link href="/routes/catalog/sciences/hadith" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Hadith</Link>
                <Link href="/routes/catalog/sciences/seerah" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Seerah</Link>
                <Link href="/routes/catalog/sciences/arabic-lang" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Arabic</Link>
                <Link href="/routes/catalog/sciences/adab" className="btn px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition font-english-serif">Islamic Etiquette</Link>
            </div>
        </div>
    );
}