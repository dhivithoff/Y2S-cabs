import Image from "next/image";
import { Users, Briefcase, Snowflake, MessageCircle, PhoneCall } from "lucide-react";

export default function FleetSection() {
  const fleet = [
    {
      name: "Luxury Sedan (Jaguar)",
      image: "/jaguar.png",
      seats: "4 Seats",
      luggage: "2 Large Bags",
      ac: "Yes",
      price: "₹3000 / Day",
      type: "Premium Luxury"
    },
    {
      name: "Premium MPV (Innova Crysta)",
      image: "/innova.png",
      seats: "6-7 Seats",
      luggage: "4 Bags",
      ac: "Yes",
      price: "₹2500 / Day",
      type: "Family & Outstation"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Fleet</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold">Premium Vehicles <br /> For Your Comfort</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {fleet.map((car, index) => (
            <div key={index} className="bg-card rounded-3xl overflow-hidden border border-border group hover:border-primary/50 transition-all duration-300">
              <div className="relative h-64 md:h-80 w-full bg-background flex items-center justify-center p-8 group-hover:bg-[#1a1a1a] transition-colors">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain p-4 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {car.type}
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-6 font-serif">{car.name}</h4>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center justify-center p-3 bg-secondary rounded-xl text-center">
                    <Users className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs font-medium text-secondary-foreground">{car.seats}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-secondary rounded-xl text-center">
                    <Briefcase className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs font-medium text-secondary-foreground">{car.luggage}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 bg-secondary rounded-xl text-center">
                    <Snowflake className="w-5 h-5 text-primary mb-2" />
                    <span className="text-xs font-medium text-secondary-foreground">A/C: {car.ac}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="text-sm text-secondary-foreground block mb-1">Starts From</span>
                    <span className="text-xl font-bold text-primary">{car.price}</span>
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    <a 
                      href="tel:+12345678900"
                      className="flex-1 sm:flex-none flex items-center justify-center p-3 bg-secondary rounded-lg text-foreground hover:text-primary transition-colors border border-border hover:border-primary"
                      aria-label="Call to Book"
                    >
                      <PhoneCall className="w-5 h-5" />
                    </a>
                    <a 
                      href={`https://wa.me/12345678900?text=Hi%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(car.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20b858] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
