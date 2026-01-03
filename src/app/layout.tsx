import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Lato,
  Inter,
  Amiri,
  Cairo,
  Harmattan,
  Tajawal,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import ThemeToggle from "@/lib/components/ThemeToggle";
import { CartProvider } from "@/lib/context/CartContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-english-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-english-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-english-sans-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const amiri = Amiri({
  variable: "--font-arabic-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const cairo = Cairo({
  variable: "--font-arabic-cairo",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const harmattan = Harmattan({
  variable: "--font-arabic-harmattan",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-arabic-tajawal",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-arabic-noto",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Maktabah Ibn Taymiyyah",
  description: "A Salafi Islamic Bookstore specializing in literature from the Salaf and contemporary scholars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        geistSans.variable,
        geistMono.variable,
        playfair.variable,
        lato.variable,
        inter.variable,
        amiri.variable,
        cairo.variable,
        harmattan.variable,
        tajawal.variable,
        notoNaskh.variable,
      ].join(" ")}
    >
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Toaster
            toastOptions={{
              style: {
                fontFamily: "var(--font-english-sans)",
                background: "var(--color-background)",
                color: "var(--color-text)",
                border: "1px solid var(--color-primary)",
              },
            }}
          />
          {/* <Footer /> */}
        </CartProvider>
        {/* Theme toggle button */}
        <div className="fixed bottom-4 left-4 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
