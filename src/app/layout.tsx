import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "Somethingg | IT Consultancy & Digital Services",
    template: "%s | Somethingg",
  },
  description:
    "Somethingg provides modern IT consulting, digital solutions, product development, and business support services through a human, practical, and results-focused approach.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "IT consultancy",
    "digital services",
    "web development",
    "business solutions",
    "technology consulting",
    "Somethingg Technology",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Somethingg | IT Consultancy & Digital Services",
    description:
      "Somethingg provides modern IT consulting, digital solutions, product development, and business support services.",
  },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Somethingg",
    url: "https://somethingg.co",
    email: "hello@somethingg.co",
    areaServed: "Worldwide",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Somethingg",
    url: "https://somethingg.co",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Somethingg",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0F0F14] text-white antialiased font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HGCS38PMJV"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HGCS38PMJV');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
