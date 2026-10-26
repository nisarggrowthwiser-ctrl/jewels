import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import InquiryPopup from "@/components/InquiryPopup";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vernaurajewels.com"),
  title: "Vernaura Jewels | Timeless Elegance. Crafted Without Compromise.",
  description: "Premium fine jewellery house specializing in natural and lab-grown diamonds, gold, polki, kundan, bridal, and custom designs.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Vernaura Jewels | Timeless Elegance. Crafted Without Compromise.",
    description: "Premium fine jewellery house specializing in natural and lab-grown diamonds, gold, polki, kundan, bridal, and custom designs.",
    url: "https://vernaurajewels.com",
    siteName: "Vernaura Jewels",
    images: [
      {
        url: "/images/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Vernaura Jewels — Timeless Elegance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vernaura Jewels | Timeless Elegance. Crafted Without Compromise.",
    description: "Premium fine jewellery house specializing in natural and lab-grown diamonds, gold, polki, kundan, bridal, and custom designs.",
    images: ["/images/home-hero.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071711",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        {children}
        <InquiryPopup />
      </body>
    </html>
  );
}
