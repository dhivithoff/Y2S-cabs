"use client";

import { useState } from "react";
import { MapPin, Navigation, Car, MessageCircle, ArrowRight, ArrowDownUp, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function FareCalculator() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState("sedan");

  const rates = { sedan: 15, suv: 20 };
  const baseFare = { sedan: 300, suv: 500 };
  
  // Fixed distance for UI demo since the new design features 3 inputs.
  const distance = 15; 
  const time = 45;

  const calculateFare = () => {
    const rate = rates[vehicle as keyof typeof rates];
    const base = baseFare[vehicle as keyof typeof baseFare];
    return base + (distance * rate);
  };

  const estimatedFare = calculateFare();

  const handleSwap = () => {
    setPickup(dropoff);
    setDropoff(pickup);
  };

  const handleWhatsApp = () => {
    const text = `Hi, I would like to get an estimate.\n\nPickup: ${pickup}\nDropoff: ${dropoff}\nVehicle: ${vehicle === 'sedan' ? 'Luxury Sedan' : 'Premium SUV'}\nEstimated Fare: ₹${estimatedFare}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/12345678900?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#151514] w-full overflow-x-hidden pt-[160px] pb-[48px] px-[24px] md:px-[56px] flex flex-col items-center">
      
      {/* Background Image at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[610px] h-[300px] z-0 pointer-events-none">
        <Image 
          src="/hero-mobile-bg.png" 
          alt="Jaguar"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start max-w-[820px]">
        
        {/* Section Header */}
        <div className="flex items-center gap-[20px] mb-[20px]">
          <span className="font-sans font-medium text-[18px] tracking-[7px] text-[#C5A15D] uppercase">FARE CALCULATOR</span>
          <div className="w-[54px] h-[2px] bg-[#C5A15D]"></div>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif font-bold text-[66px] leading-[68px] w-[620px] mb-[28px]">
          <span className="block text-[#F5F5F4]">Get an Estimate</span>
          <span className="block text-[#C5A15D]">Before You Ride</span>
        </h1>

        {/* Description */}
        <p className="font-sans font-normal text-[18px] leading-[34px] w-[560px] text-[#D2D2CF] mb-[48px]">
          Plan your journey with precision. Our transparent pricing ensures you know the exact cost before you step into our premium fleet.
        </p>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[820px] bg-[#1E1E1C] rounded-[26px] border border-[rgba(255,255,255,0.05)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-[28px] flex flex-col gap-[18px] mb-[20px] relative"
        >
          {/* Pickup Input */}
          <div className="w-full h-[88px] bg-[#252523] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <MapPin className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">PICKUP LOCATION</span>
              <input 
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
            onClick={handleSwap}
            className="absolute right-[48px] top-[99px] w-[52px] h-[52px] rounded-full bg-[#1E1E1C] border-2 border-[#C5A15D] flex items-center justify-center z-10 hover:bg-[#2a2a28] transition-colors"
            aria-label="Swap locations"
          >
            <ArrowDownUp className="w-[24px] h-[24px] text-[#C5A15D]" />
          </button>

          {/* Dropoff Input */}
          <div className="w-full h-[88px] bg-[#252523] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <Navigation className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">DROPOFF LOCATION</span>
              <input 
                type="text" 
                placeholder="Enter destination"
                className="w-full bg-transparent border-none outline-none font-sans font-normal text-[18px] text-white placeholder-[#BEBEB8]"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </div>
          </div>

          {/* Vehicle Type Input */}
          <div className="w-full h-[88px] bg-[#252523] rounded-[18px] border border-[rgba(255,255,255,0.04)] px-[20px] flex items-center gap-[16px]">
            <Car className="w-[22px] h-[22px] text-[#C5A15D] flex-shrink-0" />
            <div className="flex flex-col flex-grow justify-center h-full">
              <span className="font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C5A15D] mb-[2px]">VEHICLE TYPE</span>
              <select 
                className="w-full bg-transparent border-none outline-none font-sans font-normal text-[18px] text-white appearance-none cursor-pointer"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              >
                <option value="sedan" className="bg-[#252523] text-white">Luxury Sedan (4 Seats)</option>
                <option value="suv" className="bg-[#252523] text-white">Premium SUV (6-7 Seats)</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-[820px] min-h-[400px] bg-[#1F1F1D] rounded-[24px] border border-[rgba(255,255,255,0.05)] p-[36px] flex flex-col mb-[18px]"
        >
          {/* Top Metrics */}
          <div className="flex items-center w-full mb-[40px]">
            {/* Distance */}
            <div className="flex items-center gap-[16px] flex-1 justify-center">
              <MapPin className="w-[42px] h-[42px] text-[#C5A15D]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-sans font-normal text-[16px] text-[#BEBEB8]">Estimated Distance</span>
                <span className="font-sans font-semibold text-[30px] text-white">{distance} km</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-[1px] h-[64px] bg-[rgba(255,255,255,0.08)] mx-[32px]"></div>
            
            {/* Time */}
            <div className="flex items-center gap-[16px] flex-1 justify-center">
              <Clock className="w-[42px] h-[42px] text-[#C5A15D]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-sans font-normal text-[16px] text-[#BEBEB8]">Estimated Time</span>
                <span className="font-sans font-semibold text-[30px] text-white">{time} mins</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center flex-grow mb-[24px]">
            <span className="font-sans font-medium text-[18px] tracking-[2px] uppercase text-[#C5A15D] mb-[8px]">ESTIMATED FARE</span>
            <span className="font-serif font-bold text-[82px] leading-[84px] text-[#C5A15D] mb-[12px]">₹{estimatedFare.toLocaleString('en-IN')}</span>
            <span className="font-sans font-normal text-[18px] text-[#D3D3D1] mb-[16px]">Includes base fare, taxes, and estimated distance.</span>
            
            <div className="flex items-center gap-[8px]">
              <ShieldCheck className="w-[18px] h-[18px] text-[#BEBEB8]" />
              <span className="font-sans font-normal text-[18px] text-[#BEBEB8]">No hidden charges. Verified drivers.</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleWhatsApp}
            disabled={!pickup || !dropoff}
            className="w-full h-[64px] bg-[#C5A15D] rounded-[16px] flex items-center justify-center gap-[12px] hover:bg-[#b89555] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <MessageCircle className="w-[24px] h-[24px] text-[#1E1E1C]" />
            <span className="font-sans font-semibold text-[20px] text-[#1E1E1C]">Request via WhatsApp</span>
            <ArrowRight className="w-[22px] h-[22px] text-[#1E1E1C]" />
          </button>
        </motion.div>

      </div>
    </div>
    <Footer />
    </>
  );
}
