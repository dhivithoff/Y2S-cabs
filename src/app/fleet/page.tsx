import FleetSection from "@/components/home/FleetSection";

export const metadata = {
  title: "Our Fleet | Y2S Cabs & Travels",
  description: "Browse our premium fleet of luxury sedans, family MPVs, and outstation cabs. Book your perfect ride today.",
};

export default function FleetPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="bg-secondary py-16 text-center border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Premium Fleet</h1>
          <p className="text-secondary-foreground max-w-2xl mx-auto text-lg">
            Travel in style with our meticulously maintained collection of top-tier vehicles designed for your ultimate comfort and safety.
          </p>
        </div>
      </div>
      
      <FleetSection />
    </div>
  );
}
