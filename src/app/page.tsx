import HeroSection from "@/components/home/HeroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ServicesSection from "@/components/home/ServicesSection";
import FleetSection from "@/components/home/FleetSection";
import FareCalculatorSection from "@/components/home/FareCalculatorSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CustomerReviewsSection from "@/components/home/CustomerReviewsSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
  description: "Book premium luxury taxis for airport transfers, outstation, and local rides. 24x7 service.",
};

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <FleetSection />
      <FareCalculatorSection />
      <HowItWorksSection />
      <CustomerReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
