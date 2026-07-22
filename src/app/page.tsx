import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FleetSection from "@/components/home/FleetSection";
import TrustSection from "@/components/home/TrustSection";

export const metadata = {
  title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
  description: "Book premium luxury taxis for airport transfers, outstation, and local rides. 24x7 service.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <FleetSection />
    </div>
  );
}
