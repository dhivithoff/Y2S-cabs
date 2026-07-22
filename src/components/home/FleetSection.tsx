"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake, ArrowRight, ShieldCheck, Clock, MapPin, Headphones } from "lucide-react";

export default function FleetSection() {
  const fleet = [
    {
      name: "Jaguar XF",
      image: "/jaguar.png",
      seats: "4 Seats",
      bags: "2 Bags",
      ac: "AC",
      desc: "Premium Sedan",
    },
    {
      name: "Innova Crysta",
      image: "/innova.png",
      seats: "7 Seats",
      bags: "5 Bags",
      ac: "AC",
      desc: "Spacious & Comfortable",
    },
    {
      name: "Sedan",
      image: "/hero-mobile-bg.png", // fallback placeholder
      seats: "4 Seats",
      bags: "3 Bags",
      ac: "AC",
      desc: "Ideal for City Rides",
    },
    {
      name: "SUV",
      image: "/hero-mobile-bg.png", // fallback placeholder
      seats: "6 Seats",
      bags: "4 Bags",
      ac: "AC",
      desc: "Powerful & Spacious",
    }
  ];

  return (
    <section id="fleet" className="bg-[#0a0a0a] pt-[80px] pb-[80px] px-[24px] lg:px-[40px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center max-w-[680px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[48px]">
          <span className="font-sans font-medium text-[13px] tracking-[5px] text-[#C5A15D] uppercase mb-[12px]">
            OUR FLEET
          </span>
          <div className="w-[32px] h-[1px] bg-[#C5A15D] mb-[20px]"></div>
          
          <h2 className="font-serif font-bold text-[48px] md:text-[56px] leading-[1.1] tracking-[-1px] mb-[16px]">
            <span className="block text-[#F5F5F5]">Premium Cars</span>
            <span className="block text-[#C5A15D]">For Your Comfort</span>
          </h2>
          
          <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[28px] text-[#D2D2CF] max-w-[340px]">
            Well-maintained, sanitized and driven by professionals.
          </p>
        </div>

        {/* Fleet List */}
        <div className="w-full flex flex-col gap-[20px] mb-[24px]">
          {fleet.map((car, index) => (
            <div 
              key={index} 
              className="w-full h-auto md:h-[220px] bg-[#111111] rounded-[24px] border border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row overflow-hidden group hover:border-[rgba(197,161,93,0.3)] transition-colors duration-300"
            >
              {/* Car Image (Left half) */}
              <div className="w-full md:w-[45%] h-[200px] md:h-full relative bg-black/40 flex-shrink-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay to blend into right side */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-[#111111] to-transparent z-10"></div>
                {/* Gradient for mobile */}
                <div className="md:hidden absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-[#111111] to-transparent z-10"></div>
              </div>

              {/* Vehicle Details (Right half) */}
              <div className="w-full md:w-[55%] flex flex-col justify-center px-[24px] py-[24px] relative z-20">
                <h3 className="font-serif font-bold text-[28px] text-[#F5F5F5] mb-[8px]">
                  {car.name}
                </h3>
                
                <div className="w-[32px] h-[2px] bg-[#C5A15D] mb-[20px]"></div>
                
                {/* Specs Grid */}
                <div className="flex flex-col gap-[12px] mb-[24px]">
                  {/* Row 1 */}
                  <div className="flex items-center">
                    <div className="flex items-center gap-[8px] w-[120px]">
                      <Users className="w-[16px] h-[16px] text-[#C5A15D]" strokeWidth={2} />
                      <span className="font-sans font-normal text-[14px] text-[#A3A3A3]">{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <Briefcase className="w-[16px] h-[16px] text-[#C5A15D]" strokeWidth={2} />
                      <span className="font-sans font-normal text-[14px] text-[#A3A3A3]">{car.bags}</span>
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="flex items-center">
                    <div className="flex items-center gap-[8px] w-[120px]">
                      <Snowflake className="w-[16px] h-[16px] text-[#C5A15D]" strokeWidth={2} />
                      <span className="font-sans font-normal text-[14px] text-[#A3A3A3]">{car.ac}</span>
                    </div>
                    <span className="text-[rgba(255,255,255,0.1)] mr-[12px]">|</span>
                    <span className="font-sans font-normal text-[14px] text-[#A3A3A3]">{car.desc}</span>
                  </div>
                </div>

                {/* Book Button */}
                <Link 
                  href="/book"
                  className="inline-flex w-full md:w-max h-[44px] bg-[#C5A15D] rounded-[10px] items-center justify-between gap-[32px] px-[20px] hover:bg-[#b89555] transition-colors"
                >
                  <span className="font-sans font-medium text-[15px] text-[#111111]">Book Now</span>
                  <ArrowRight className="w-[18px] h-[18px] text-[#111111]" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Features Card */}
        <div className="w-full bg-[#111111] rounded-[24px] border border-[rgba(255,255,255,0.06)] p-[24px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[24px] md:gap-y-0 relative">
            
            {/* Desktop Dividers */}
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[25%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[75%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            
            {/* Mobile Dividers (2x2 grid) */}
            <div className="md:hidden absolute top-[10%] bottom-[55%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="md:hidden absolute top-[55%] bottom-[10%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>

            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <ShieldCheck className="w-[24px] h-[24px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[12px] text-[#F5F5F5] mb-[2px]">Safe & Secure</span>
              <span className="font-sans font-normal text-[11px] text-[#A3A3A3]">Verified Drivers</span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <Clock className="w-[24px] h-[24px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[12px] text-[#F5F5F5] mb-[2px]">On Time</span>
              <span className="font-sans font-normal text-[11px] text-[#A3A3A3]">Every Time</span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <MapPin className="w-[24px] h-[24px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[12px] text-[#F5F5F5] mb-[2px]">Across City</span>
              <span className="font-sans font-normal text-[11px] text-[#A3A3A3]">& Outstation</span>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <Headphones className="w-[24px] h-[24px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[12px] text-[#F5F5F5] mb-[2px]">24/7 Support</span>
              <span className="font-sans font-normal text-[11px] text-[#A3A3A3]">Always Available</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
