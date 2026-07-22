import ServicesSection from "@/components/home/ServicesSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Our Services | Y2S Cabs & Travels",
  description: "Explore our premium taxi services including airport transfers, outstation cabs, local city rides, and corporate travel.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[88px]">
      <ServicesSection />
      <Footer />
    </div>
  );
}
