import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://y2scabs.com"),
  title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
  description: "Book premium luxury taxis for airport transfers, outstation, and local rides. Y2S Cabs & Travels offers 24x7 service, licensed drivers, and top-class comfort.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
    description: "Book premium luxury taxis for airport transfers, outstation, and local rides. Y2S Cabs & Travels offers 24x7 service, licensed drivers, and top-class comfort.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Y2S Cabs & Travels Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
    description: "Book premium luxury taxis for airport transfers, outstation, and local rides.",
    images: ["/logo.png"],
  },
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
        <MobileBottomNav />
      </body>
    </html>
  );
}
