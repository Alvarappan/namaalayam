import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Namaalayam — South Indian Temple Guide",
    template: "%s | Namaalayam",
  },
  description:
    "Your complete digital encyclopedia, travel guide & devotional platform for the sacred temples of South India — Tamil Nadu, Kerala, Karnataka, Andhra Pradesh & Telangana.",
  keywords: [
    "south india temples",
    "tamil temple",
    "kerala temples",
    "karnataka temples",
    "temple travel guide",
    "south indian pilgrimage",
    "hindu temples",
  ],
  metadataBase: new URL("https://www.namaalayam.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.namaalayam.com",
    siteName: "Namaalayam",
    title: "Namaalayam — South Indian Temple Guide",
    description:
      "Your complete digital encyclopedia, travel guide & devotional platform for 1000+ South Indian temples.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namaalayam — South Indian Temple Guide",
    description: "Discover 1000+ temples of South India — history, travel, poojas & festivals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-950 text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
