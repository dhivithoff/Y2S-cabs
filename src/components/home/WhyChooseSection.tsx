"use client";

import { ShieldCheck, UserCheck, CarFront, Clock } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Professional Chauffeurs",
      description: "Our drivers are highly trained, well-mannered, and strictly verified for your safety and peace of mind.",
    },
    {
      icon: <CarFront className="w-8 h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Premium Fleet",
      description: "Travel in comfort and style with our well-maintained luxury sedans and premium SUVs.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Punctual Service",
      description: "We value your time. Our cabs always arrive at your location exactly when you need them.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C5A15D]" strokeWidth={1.5} />,
      title: "Safe & Secure",
      description: "Sanitized vehicles, GPS tracking, and a 24/7 dedicated support team ensure your journey is flawless.",
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-[80px] px-[24px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[56px]">
          <span className="font-sans font-medium text-[14px] tracking-[4px] text-[#C5A15D] uppercase mb-[16px]">
            Why Choose Y2S
          </span>
          <div className="w-[40px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
          <h2 className="font-serif font-bold text-[42px] leading-[1.1] tracking-[-1px] text-[#F5F5F5] max-w-[600px]">
            Redefining Your Travel Experience
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] w-full">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-[32px] rounded-[24px] bg-[#111111] border border-[rgba(255,255,255,0.03)] hover:border-[#C5A15D]/30 transition-colors duration-300"
            >
              <div className="w-[64px] h-[64px] rounded-full bg-[rgba(197,161,93,0.1)] border border-[rgba(197,161,93,0.2)] flex items-center justify-center mb-[24px]">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-[22px] text-[#F5F5F5] mb-[16px]">
                {feature.title}
              </h3>
              <p className="font-sans font-normal text-[15px] leading-[26px] text-[#A3A3A3]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
