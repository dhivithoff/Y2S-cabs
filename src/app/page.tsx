import HeroSection from "@/components/home/HeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ServicesSection from "@/components/home/ServicesSection";
import FleetSection from "@/components/home/FleetSection";
import FareCalculatorSection from "@/components/home/FareCalculatorSection";
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Best Taxi Service in Tiruppur | Y2S Cabs & Travels",
  description:
    "Book affordable taxi services in Tiruppur. Local taxi, airport transfers, one-way, outstation and 24/7 cab service with professional drivers. Call now.",
};

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <FleetSection />
      <FareCalculatorSection />
      <CustomerReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
