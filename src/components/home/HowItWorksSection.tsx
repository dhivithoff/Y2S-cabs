"use client";

import { Smartphone, CheckCircle, Car } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8 text-[#111111]" strokeWidth={1.5} />,
      title: "1. Request a Ride",
      description: "Select your destination, choose your preferred vehicle, and get an instant fare estimate.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#111111]" strokeWidth={1.5} />,
      title: "2. Confirm Booking",
      description: "Get matched with a professional chauffeur nearby. Track your ride in real-time.",
    },
    {
      icon: <Car className="w-8 h-8 text-[#111111]" strokeWidth={1.5} />,
      title: "3. Enjoy the Journey",
      description: "Sit back and relax in our premium vehicles while we ensure a safe and comfortable trip.",
    }
  ];

  return (
    <section className="w-full bg-[#111111] py-[80px] px-[24px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[64px]">
          <span className="font-sans font-medium text-[14px] tracking-[4px] text-[#C5A15D] uppercase mb-[16px]">
            How It Works
          </span>
          <div className="w-[40px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
          <h2 className="font-serif font-bold text-[42px] leading-[1.1] tracking-[-1px] text-[#F5F5F5] max-w-[600px]">
            Simple Steps to Your Destination
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] w-full relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#C5A15D]/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-[#C5A15D] shadow-[0_0_30px_rgba(197,161,93,0.3)] flex items-center justify-center mb-[24px]">
                {step.icon}
              </div>
              <h3 className="font-serif font-bold text-[24px] text-[#F5F5F5] mb-[16px]">
                {step.title}
              </h3>
              <p className="font-sans font-normal text-[16px] leading-[28px] text-[#A3A3A3] max-w-[300px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
