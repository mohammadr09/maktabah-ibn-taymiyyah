"use client";

import Link from "next/link";
import ProductSearch from "./Search";

export default function Navbar() {
    return (
        <nav className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mt-10 px-4 sm:px-[55px] gap-4 sm:gap-0">
            {/* Title: Top on mobile, Right on desktop */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                <h1 className="arabic-text font-bold text-[1.5rem] sm:text-[2rem] text-center sm:text-right whitespace-nowrap">
                    مكتبة ابن تيمية
                </h1>
            </div>

            {/* Search Bar: Middle */}
            <div className="w-full flex justify-center sm:flex-grow sm:justify-center">
                <ProductSearch />
            </div>
            {/* BOTTOM (mobile) or LEFT (desktop): Nav Icons */}
            <div className="flex justify-center sm:justify-start w-full sm:w-auto gap-4 sm:gap-10 font-english-serif text-[1rem] sm:text-[1.45rem]">
                <Link href="/" className="btn">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current color-primary"
                        >
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                    </span>
                </Link>
                <Link href="/pages/catalog" className="btn">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current color-primary"
                        >
                            <path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280v-160h160v-280H360Zm220 220Z" />
                        </svg>
                    </span>
                </Link>
                <Link href="/pages/account" className="btn">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current color-primary"
                        >
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                    </span>
                </Link>
                <Link href="/pages/cart" className="btn">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="w-6 h-6 sm:w-8 sm:h-8 fill-current color-primary"
                        >
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                        </svg>
                    </span>
                </Link>
            </div>
        </nav>
    );
}
