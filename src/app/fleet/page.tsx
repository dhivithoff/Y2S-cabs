import FleetSection from "@/components/home/FleetSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Our Fleet | Y2S Cabs & Travels",
  description: "Browse our premium fleet of luxury sedans, family MPVs, and outstation cabs. Book your perfect ride today.",
};

export default function FleetPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[88px]">
      <FleetSection />
      <Footer />
    </div>
  );
}
