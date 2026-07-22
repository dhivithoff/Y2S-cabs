import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import FloatingButtons from "@/components/ui-custom/FloatingButtons";
import BottomNav from "@/components/layout/BottomNav";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
  description: "Book premium luxury taxis for airport transfers, outstation, and local rides. Y2S Cabs & Travels offers 24x7 service, licensed drivers, and top-class comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden pb-[88px] md:pb-0">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <FloatingButtons />
        <BottomNav />
      </body>
    </html>
  );
}
