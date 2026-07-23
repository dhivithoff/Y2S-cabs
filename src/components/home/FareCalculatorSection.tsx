"use client";

import { useState } from "react";
import { MapPin, Navigation, Car, ArrowDownUp, Clock, Info, MessageCircle } from "lucide-react";
import Image from "next/image";

export interface TariffDetail {
  id: string;
  name: string;
  seats: string;
  baseKm: number;
  baseFare: number;
  perKmRate: number;
}

export const TARIFFS: Record<string, TariffDetail> = {
  sedan: {
    id: "sedan",
    name: "Sedan",
    seats: "4 Seats",
    baseKm: 20,
    baseFare: 500,
    perKmRate: 14,
  },
  mini: {
    id: "mini",
    name: "Mini",
    seats: "4 Seats",
    baseKm: 20,
    baseFare: 400,
    perKmRate: 13,
  },
  suv: {
    id: "suv",
    name: "SUV",
    seats: "6-7 Seats",
    baseKm: 20,
    baseFare: 900,
    perKmRate: 18,
  },
  innova: {
    id: "innova",
    name: "Innova",
    seats: "7 Seats",
    baseKm: 20,
    baseFare: 1000,
    perKmRate: 20,
  },
  tempo: {
    id: "tempo",
    name: "Tempo Traveller",
    seats: "12-14 Seats",
    baseKm: 20,
    baseFare: 1500,
    perKmRate: 26,
  },
};

export default function FareCalculatorSection() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("sedan");
  const [distance, setDistance] = useState<string>("20");

  const selectedTariff = TARIFFS[vehicle as keyof typeof TARIFFS] || TARIFFS.sedan;
  const numDistance = Math.max(0, parseFloat(distance) || 0);

  const calculateFareDetails = () => {
    if (numDistance <= 0) {
      return {
        baseFare: 0,
        extraKm: 0,
        extraFare: 0,
        totalFare: 0,
      };
    }
    const baseFare = selectedTariff.baseFare;
    const extraKm = Math.max(0, numDistance - selectedTariff.baseKm);
    const extraFare = extraKm * selectedTariff.perKmRate;
    const totalFare = baseFare + extraFare;
    return {
      baseFare,
      extraKm,
      extraFare,
      totalFare,
    };
  };

  const fareDetails = calculateFareDetails();

  const handleSwap = () => {
    setPickup(dropoff);
    setDropoff(pickup);
  };

  const handleWhatsAppBooking = () => {
    const text = `*🚖 Fare Estimate & Booking Inquiry*\n\n*Pickup:* ${pickup || "Not specified"}\n*Dropoff:* ${dropoff || "Not specified"}\n*Vehicle:* ${selectedTariff.name} (${selectedTariff.seats})\n*Estimated Distance:* ${distance} KM\n*Estimated Fare:* ₹${fareDetails.totalFare.toLocaleString('en-IN')}\n\nNote: Toll, parking & permit charges are extra.\n\nPlease confirm availability and booking.`;
    window.open(`https://wa.me/919790279217?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="relative bg-[#0a0a0a] w-full py-[80px] px-[24px] md:px-[56px] flex flex-col items-center overflow-hidden">
      
      {/* Background Image at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[610px] h-[300px] z-0 pointer-events-none opacity-30">
        <Image 
          src="/hero-mobile-bg.png" 
          alt="Jaguar"
          fill
          sizes="610px"
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center max-w-[820px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[48px]">
          <span className="font-sans font-medium text-[14px] tracking-[4px] text-[#C5A15D] uppercase mb-[16px]">
            FARE CALCULATOR
          </span>
          <div className="w-[40px] h-[2px] bg-[#C5A15D]"></div>
        </div>

        {/* Form Card */}
        <div className="w-full bg-[#111111] rounded-[26px] border border-[rgba(255,255,255,0.05)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-[28px] flex flex-col gap-[18px] mb-[20px] relative">
          {/* Pickup Input */}
          <div className="w-full h-[88px] bg-[#1a1a1a] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <MapPin className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">PICKUP LOCATION</span>
              <input 
                suppressHydrationWarning
                type="text" 
                placeholder="Enter pickup address"
                className="w-full bg-transparent border-none outline-none font-sans font-normal text-[18px] text-white placeholder-[#BEBEB8]"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
          </div>

          {/* Swap Button (Absolute position over the gap) */}
          <button 
            suppressHydrationWarning
            onClick={handleSwap}
            className="absolute right-[48px] top-[99px] w-[52px] h-[52px] rounded-full bg-[#111111] border-2 border-[#C5A15D] flex items-center justify-center z-10 hover:bg-[#1a1a1a] transition-colors"
            aria-label="Swap locations"
          >
            <ArrowDownUp className="w-[24px] h-[24px] text-[#C5A15D]" />
          </button>

          {/* Dropoff Input */}
          <div className="w-full h-[88px] bg-[#1a1a1a] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <Navigation className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">DROPOFF LOCATION</span>
              <input 
                suppressHydrationWarning
                type="text" 
                placeholder="Enter destination"
                className="w-full bg-transparent border-none outline-none font-sans font-normal text-[18px] text-white placeholder-[#BEBEB8]"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </div>
          </div>

          {/* Estimated Distance (KM) Input */}
          <div className="w-full h-[88px] bg-[#1a1a1a] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <Clock className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">ESTIMATED KM</span>
              <input 
                suppressHydrationWarning
                type="number" 
                min="1"
                placeholder="Enter estimated distance in KM"
                className="w-full bg-transparent border-none outline-none font-sans font-normal text-[18px] text-white placeholder-[#BEBEB8]"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
          </div>

          {/* Vehicle Type Input */}
          <div className="w-full h-[88px] bg-[#1a1a1a] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <Car className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">VEHICLE TYPE</span>
              <select 
                suppressHydrationWarning
                className="w-full bg-transparent border-none outline-none font-sans font-normal text-[18px] text-white appearance-none cursor-pointer"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              >
                <option value="sedan" className="bg-[#1a1a1a] text-white">Sedan (1st 20km ₹500 + ₹14/km)</option>
                <option value="mini" className="bg-[#1a1a1a] text-white">Mini (1st 20km ₹400 + ₹13/km)</option>
                <option value="suv" className="bg-[#1a1a1a] text-white">SUV (1st 20km ₹900 + ₹18/km)</option>
                <option value="innova" className="bg-[#1a1a1a] text-white">Innova (1st 20km ₹1000 + ₹20/km)</option>
                <option value="tempo" className="bg-[#1a1a1a] text-white">Tempo Traveller (1st 20km ₹1500 + ₹26/km)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculated Value (Results Card) */}
        <div className="w-full bg-[#111111] rounded-[24px] border border-[rgba(255,255,255,0.05)] p-[28px] md:p-[36px] flex flex-col items-center justify-center text-center gap-[20px]">
          <div className="flex flex-col items-center">
            <span className="font-sans font-medium text-[14px] md:text-[16px] tracking-[2px] uppercase text-[#C5A15D] mb-[8px]">ESTIMATED FARE</span>
            <span className="font-serif font-bold text-[60px] md:text-[82px] leading-[64px] md:leading-[84px] text-[#C5A15D]">
              ₹{fareDetails.totalFare.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Fare Calculation Breakdown */}
          <div className="w-full max-w-[500px] bg-[#1a1a1a] rounded-[16px] border border-[rgba(255,255,255,0.04)] p-[16px] flex flex-col gap-[10px]">
            <div className="flex justify-between items-center text-[14px] font-sans">
              <span className="text-[#BEBEB8]">Base Fare (1st 20 km - {selectedTariff.name})</span>
              <span className="text-white font-medium">₹{fareDetails.baseFare.toLocaleString('en-IN')}</span>
            </div>
            
            <div className="flex justify-between items-center text-[14px] font-sans">
              <span className="text-[#BEBEB8]">
                Additional ({fareDetails.extraKm} km @ ₹{selectedTariff.perKmRate}/km)
              </span>
              <span className="text-white font-medium">₹{fareDetails.extraFare.toLocaleString('en-IN')}</span>
            </div>

            <div className="w-full h-[1px] bg-[rgba(255,255,255,0.08)] my-[2px]"></div>

            <div className="flex justify-between items-center text-[15px] font-sans font-semibold">
              <span className="text-[#C5A15D]">Estimated Total</span>
              <span className="text-[#C5A15D]">₹{fareDetails.totalFare.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Extra Charges Note */}
          <div className="w-full max-w-[500px] bg-[rgba(197,161,93,0.08)] border border-[rgba(197,161,93,0.2)] rounded-[14px] p-[14px] flex items-start gap-[12px] text-left">
            <Info className="w-[20px] h-[20px] text-[#C5A15D] flex-shrink-0 mt-[2px]" />
            <div className="flex flex-col">
              <span className="font-sans font-medium text-[13px] text-[#C5A15D] uppercase tracking-[1px] mb-[2px]">Extra Charges Notice</span>
              <span className="font-sans text-[13px] text-[#D2D2CF] leading-[18px]">
                Toll, parking, state permit, and driver charges are extra as applicable for your trip.
              </span>
            </div>
          </div>

          {/* WhatsApp Booking CTA */}
          <button
            suppressHydrationWarning
            onClick={handleWhatsAppBooking}
            className="w-full max-w-[500px] h-[52px] bg-[#C5A15D] hover:bg-[#b89555] rounded-[14px] flex items-center justify-center gap-[10px] transition-colors font-sans font-semibold text-[16px] text-[#111111]"
          >
            <MessageCircle className="w-[20px] h-[20px]" />
            Book This Ride on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}

