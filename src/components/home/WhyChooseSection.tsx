"use client";

import { ShieldCheck, UserCheck, CarFront, Clock } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Pro Drivers",
      description: "Highly trained and verified drivers for your safety.",
    },
    {
      icon: <CarFront className="w-6 h-6 md:w-8 md:h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Premium Fleet",
      description: "Comfortable luxury sedans and premium SUVs.",
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "On Time",
      description: "We always arrive exactly when you need us.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Safe & Secure",
      description: "GPS tracking and a 24/7 dedicated support team.",
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-[80px] px-[24px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[40px] md:mb-[56px]">
          <span className="font-sans font-medium text-[12px] md:text-[14px] tracking-[4px] text-[#C5A15D] uppercase mb-[12px] md:mb-[16px]">
            Why Choose Y2S
          </span>
          <div className="w-[40px] h-[2px] bg-[#C5A15D] mb-[20px] md:mb-[24px]"></div>
          <h2 className="font-serif font-bold text-[36px] md:text-[42px] leading-[1.1] tracking-[-1px] text-[#F5F5F5] max-w-[600px]">
            Redefining Travel
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[32px] w-full">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-[16px] md:p-[32px] rounded-[16px] md:rounded-[24px] bg-[#111111] border border-[rgba(255,255,255,0.03)] hover:border-[#C5A15D]/30 transition-colors duration-300"
            >
              <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full bg-[rgba(197,161,93,0.1)] border border-[rgba(197,161,93,0.2)] flex items-center justify-center mb-[16px] md:mb-[24px]">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-[16px] md:text-[22px] text-[#F5F5F5] mb-[8px] md:mb-[16px] leading-[1.2]">
                {feature.title}
              </h3>
              <p className="font-sans font-normal text-[12px] md:text-[15px] leading-[18px] md:leading-[26px] text-[#A3A3A3]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
