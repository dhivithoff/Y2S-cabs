import ServicesSection from "@/components/home/ServicesSection";
import TrustSection from "@/components/home/TrustSection";

export const metadata = {
  title: "Our Services | Y2S Cabs & Travels",
  description: "Explore our premium taxi services including airport transfers, outstation cabs, local city rides, and corporate travel.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="bg-secondary py-16 text-center border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Premium Services</h1>
          <p className="text-secondary-foreground max-w-2xl mx-auto text-lg">
            Experience unparalleled comfort and reliability with our comprehensive range of transportation services tailored to your needs.
          </p>
        </div>
      </div>
      
      <ServicesSection />
      <TrustSection />
    </div>
  );
}
