import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somethingg.co"),
  title: "Somethingg | IT Consultancy & Digital Services",
  description:
    "Somethingg provides modern IT consulting, digital solutions, product development, and business support services through a human, practical, and results-focused approach.",
  keywords: [
    "IT consultancy",
    "digital services",
    "web development",
    "business solutions",
    "technology consulting",
    "Somethingg Technology",
  ],
  openGraph: {
    title: "Somethingg | IT Consultancy & Digital Services",
    description:
      "Somethingg provides modern IT consulting, digital solutions, product development, and business support services through a human, practical, and results-focused approach.",
    url: "https://somethingg.co",
    siteName: "Somethingg",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0F0F14] text-white antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
