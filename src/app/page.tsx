import HeroSection from "@/components/home/HeroSection";

export const metadata = {
  title: "Y2S Cabs & Travels | Premium Luxury Taxi Booking",
  description: "Book premium luxury taxis for airport transfers, outstation, and local rides. 24x7 service.",
};

export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-[#111111]">
      <HeroSection />
    </main>
  );
}
