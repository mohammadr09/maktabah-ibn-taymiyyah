import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center mt-[47px]">
            <div className="w-full flex flex-col items-center">
                <h1 className="arabic-text font-bold text-center text-[2rem]">مكتبة ابن تيمية</h1>
                <div className="flex flex-row gap-6 sm:gap-12 font-english-serif items-center text-[1.45rem]">
                    <Link href="/" className="btn">Home</Link>
                    <Link href="/pages/catalog" className="btn">Catalog</Link>
                    <Link href="/pages/account" className="btn">Account</Link>
                    <Link href="/pages/cart" className="btn">Cart</Link>
                </div>
            </div>
        </nav>
    );
}