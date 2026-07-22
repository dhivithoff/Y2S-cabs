import FareCalculatorSection from "@/components/home/FareCalculatorSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Fare Calculator | Y2S Cabs & Travels",
  description: "Get an instant fare estimate for your luxury taxi ride with Y2S Cabs.",
};

export default function FareCalculatorPage() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] pt-[88px] flex flex-col">
      <FareCalculatorSection />
      <Footer />
    </main>
  );
}
