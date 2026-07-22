"use client";

import { useState } from "react";
import { Calculator, MapPin, Navigation, Car, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FareCalculator() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState("10");
  const [vehicle, setVehicle] = useState("sedan");

  const rates = {
    sedan: 15,
    suv: 20,
  };

  const baseFare = {
    sedan: 300,
    suv: 500,
  };

  const calculateFare = () => {
    const dist = parseFloat(distance) || 0;
    const rate = rates[vehicle as keyof typeof rates];
    const base = baseFare[vehicle as keyof typeof baseFare];
    return base + (dist * rate);
  };

  const estimatedFare = calculateFare();

  const handleWhatsApp = () => {
    const text = `Hi, I would like to get a cab.\n\nPickup: ${pickup}\nDropoff: ${dropoff}\nVehicle: ${vehicle === 'sedan' ? 'Luxury Sedan' : 'Premium SUV'}\nEstimated Distance: ${distance} km\nEstimated Fare: ₹${estimatedFare}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/12345678900?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="bg-secondary py-16 text-center border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Fare Calculator</h1>
          <p className="text-secondary-foreground max-w-2xl mx-auto text-lg">
            Get an instant estimate for your ride. Transparent pricing with no hidden charges.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Input Form */}
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input 
                      type="text" 
                      placeholder="Enter pickup address" 
                      className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">Dropoff Location</label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input 
                      type="text" 
                      placeholder="Enter dropoff address" 
                      className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">Estimated Distance (km)</label>
                  <div className="relative">
                    <Calculator className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <input 
                      type="number" 
                      placeholder="e.g. 15" 
                      min="1"
                      className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">Vehicle Type</label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    <select 
                      className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                    >
                      <option value="sedan">Luxury Sedan (4 Seats)</option>
                      <option value="suv">Premium SUV (6-7 Seats)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-background rounded-2xl p-8 border border-border flex flex-col justify-center items-center text-center">
                <h3 className="text-lg font-medium text-secondary-foreground mb-2">Estimated Fare</h3>
                <div className="text-5xl font-bold font-serif text-primary mb-4">
                  ₹{estimatedFare}
                </div>
                <p className="text-sm text-secondary-foreground mb-8">
                  *This is an estimate. Final fare may vary based on exact route, tolls, and wait times.
                </p>

                <button 
                  onClick={handleWhatsApp}
                  disabled={!pickup || !dropoff}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#20b858] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Request on WhatsApp
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
