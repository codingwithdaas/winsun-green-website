import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// NOTE: This project uses next/font/google for Manrope + Inter by default.
// Build/dev in this environment has no network access to fonts.googleapis.com,
// so we fall back to a system font stack here. On your machine or in CI with
// normal internet access, swap this back to:
//
//   import { Manrope, Inter } from "next/font/google";
//   const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500","700","800"] });
//   const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600"] });
//   ...and apply `${manrope.variable} ${inter.variable}` on <html> below.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winsun.co.in"),
  title: {
    default: "WinSun Green Pvt. Ltd. — Wind, Solar, SEM & Transformer EPC and O&M",
    template: "%s | WinSun Green",
  },
  description:
    "WinSun Green is a best-in-class renewable energy EPC and O&M provider — wind, solar, special energy meter and transformer solutions across 9 Indian states.",
  keywords: [
    "wind energy EPC India",
    "solar O&M India",
    "renewable energy O&M",
    "special energy meter SEM",
    "transformer manufacturer India",
    "wind turbine generator O&M",
  ],
  openGraph: {
    title: "WinSun Green Pvt. Ltd.",
    description:
      "Transforming the greener future with wind & solar energy. EPC, O&M, SEM and transformer solutions across India.",
    url: "https://www.winsun.co.in",
    siteName: "WinSun Green",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
