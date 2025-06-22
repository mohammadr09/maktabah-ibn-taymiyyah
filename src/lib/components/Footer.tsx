import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t pt-10 pb-6 px-4 sm:px-12 text-center bg-[color:var(--color-background)] text-[color:var(--color-text)] font-english-sans">
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Logo */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-english-serif font-semibold tracking-wide">
                        مكتبة ابن تيمية
                    </h2>
                    <p className="text-sm sm:text-base mt-2 text-gray-600">
                        Curating timeless works from the Salaf and contemporary scholars.
                    </p>
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center">
                    {/* Quick Links */}
                    <div className="space-y-3">
                        <h3 className="font-semibold font-english-serif text-lg">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li><Link href="/" className="hover:text-[color:var(--color-accent)] transition">Home</Link></li>
                            <li><Link href="/pages/catalog" className="hover:text-[color:var(--color-accent)] transition">Catalog</Link></li>
                            <li><Link href="/pages/account" className="hover:text-[color:var(--color-accent)] transition">Account</Link></li>
                            <li><Link href="/pages/cart" className="hover:text-[color:var(--color-accent)] transition">Cart</Link></li>
                            <li><Link href="/pages/about" className="hover:text-[color:var(--color-accent)] transition">About</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h3 className="font-semibold font-english-serif text-lg">Contact</h3>
                        <p className="text-sm text-gray-600">Email: <a href="mailto:support@maktabahibntaymiyyah.com" className="hover:underline">support@maktabahibntaymiyyah.com</a></p>
                        <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
                        <p className="text-sm text-gray-600">Location: New York, USA</p>
                    </div>

                    {/* Newsletter or Info */}
                    <div className="space-y-3">
                        <h3 className="font-semibold font-english-serif text-lg">Stay Connected</h3>
                        <p className="text-sm text-gray-600">
                            Subscribe to receive updates on new arrivals and curated collections.
                        </p>
                        <form className="flex flex-col sm:flex-row items-center gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[color:var(--color-primary)] text-sm"
                            />
                            <button type="submit" className="px-4 py-2 bg-[color:var(--color-primary)] text-white rounded-md hover:bg-[color:var(--color-accent)] transition text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 pt-6 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Maktabah Ibn Taymiyyah. All rights reserved.</p>
                    <p className="mt-1">Built with sincerity by students of knowledge.</p>
                </div>
            </div>
        </footer>

    );
}