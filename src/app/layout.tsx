import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://y2scabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "24/7 Cab Service in Tiruppur | Airport Taxi, Local & Outstation Cabs",
  description: "Book reliable cab services in Tiruppur for airport transfers, local travel, one-way trips, outstation journeys, and corporate travel. 24/7 service, professional drivers, clean vehicles, and transparent pricing. Call now for instant booking.",
  keywords: [
    "cab service tiruppur",
    "taxi service tiruppur",
    "cab booking tiruppur",
    "taxi near me tiruppur",
    "airport taxi tiruppur",
    "coimbatore airport taxi",
    "airport pickup tiruppur",
    "airport drop tiruppur",
    "local taxi tiruppur",
    "outstation cab tiruppur",
    "one way cab tiruppur",
    "round trip cab tiruppur",
    "corporate cab tiruppur",
    "24 hour cab tiruppur",
    "car rental tiruppur",
    "tempo traveller tiruppur",
    "innova cab tiruppur",
    "sedan taxi tiruppur",
    "tiruppur taxi booking",
    "cab booking near me"
  ],
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "24/7 Cab Service in Tiruppur | Airport, Local & Outstation Taxi",
    description: "Reliable cab services in Tiruppur with airport transfers, local taxis, outstation travel, and corporate transportation. Call now for instant booking.",
    siteName: "Y2S Cabs & Travels",
    url: baseUrl,
    images: [
      {
        url: "/metalogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Y2S Cabs & Travels Tiruppur Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Cab Service in Tiruppur | Airport, Local & Outstation Taxi",
    description: "Reliable cab services in Tiruppur with airport transfers, local taxis, outstation travel, and corporate transportation.",
    images: ["/metalogo.jpeg"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Y2S Cabs & Travels",
  "image": `${baseUrl}/metalogo.jpeg`,
  "@id": `${baseUrl}/#taxiservice`,
  "url": baseUrl,
  "telephone": "+919790279217",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1/110-61A, SENTHIL NAGAR, SEERANAMPALAYAM, IDUVAI",
    "addressLocality": "Tiruppur",
    "addressRegion": "TN",
    "postalCode": "641606",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.1085,
    "longitude": 77.3411
  },
  "areaServed": [
    "Tiruppur",
    "Coimbatore",
    "Erode",
    "Salem",
    "Tamil Nadu"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "description": "We provide professional cab services in Tiruppur for individuals, families, and businesses. Our services include airport pickup and drop, local taxi rides, outstation travel, one-way cabs, round-trip bookings, and corporate transportation.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cab Booking Services in Tiruppur",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Taxi Tiruppur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Taxi Booking Tiruppur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outstation Cab from Tiruppur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One Way Taxi Tiruppur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tempo Traveller & SUV Rental Tiruppur"
        }
      }
    ]
  }
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
      <GoogleTagManager gtmId="GTM-TXKTMNBC" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <Script
          id="gtag-call-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                var target = e.target.closest('a[href^="tel:"], a[href*="wa.me"]');
                if (target) {
                  var isTel = target.href.indexOf('tel:') === 0;
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    'event': isTel ? 'phone_call_click' : 'whatsapp_click',
                    'event_category': 'Google Call Ads Lead',
                    'event_label': target.href
                  });
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', isTel ? 'phone_call_click' : 'whatsapp_click', {
                      'event_category': 'Google Call Ads Lead',
                      'event_label': target.href
                    });
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden pb-[88px] md:pb-0">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <MobileBottomNav />
      </body>
    </html>
  );
}
