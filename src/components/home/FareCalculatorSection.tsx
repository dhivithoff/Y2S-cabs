"use client";

import { useState } from "react";
import { MapPin, Navigation, Car, MessageCircle, ArrowRight, ArrowDownUp, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FareCalculatorSection() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("sedan");
  const [distance, setDistance] = useState<string>("15");

  const rates = { sedan: 15, suv: 20 };
  const baseFare = { sedan: 300, suv: 500 };

  const calculateFare = () => {
    const rate = rates[vehicle as keyof typeof rates];
    const base = baseFare[vehicle as keyof typeof baseFare];
    const numDistance = parseFloat(distance) || 0;
    return base + (numDistance * rate);
  };

  const estimatedFare = calculateFare();

  const handleSwap = () => {
    setPickup(dropoff);
    setDropoff(pickup);
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
                <option value="sedan" className="bg-[#1a1a1a] text-white">Luxury Sedan (4 Seats)</option>
                <option value="suv" className="bg-[#1a1a1a] text-white">Premium SUV (6-7 Seats)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculated Value (Results Card) */}
        <div className="w-full bg-[#111111] rounded-[24px] border border-[rgba(255,255,255,0.05)] p-[36px] flex flex-col items-center justify-center text-center">
          <span className="font-sans font-medium text-[18px] tracking-[2px] uppercase text-[#C5A15D] mb-[8px]">ESTIMATED FARE</span>
          <span className="font-serif font-bold text-[82px] leading-[84px] text-[#C5A15D]">₹{estimatedFare.toLocaleString('en-IN')}</span>
        </div>

      </div>
    </section>
  );
}
