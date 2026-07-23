"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake, ArrowRight, ShieldCheck, Clock, MapPin, Headphones, MessageCircle, Tag } from "lucide-react";

export default function FleetSection() {
  const fleet = [
    {
      id: "sedan",
      name: "Dzire (Sedan)",
      image: "/fleet-dzire-v2.jpg",
      seats: "4 Seats",
      bags: "3 Bags",
      ac: "AC",
      desc: "Ideal for City & Outstation Rides",
      baseFare: "₹500 (1st 20 km)",
      perKmRate: "₹14 / km",
    },
    {
      id: "mini",
      name: "Baleno (Mini)",
      image: "/fleet-baleno.jpg",
      seats: "4 Seats",
      bags: "2 Bags",
      ac: "AC",
      desc: "Compact & Efficient Local Rides",
      baseFare: "₹400 (1st 20 km)",
      perKmRate: "₹13 / km",
    },
    {
      id: "suv",
      name: "Rumion (SUV)",
      image: "/fleet-rumion.jpg",
      seats: "6-7 Seats",
      bags: "4 Bags",
      ac: "AC",
      desc: "Spacious Family & Group Travel",
      baseFare: "₹900 (1st 20 km)",
      perKmRate: "₹18 / km",
    },
    {
      id: "innova",
      name: "Innova Crysta",
      image: "/fleet-innova.jpg",
      seats: "7 Seats",
      bags: "5 Bags",
      ac: "AC",
      desc: "Premium Executive & Long Distance",
      baseFare: "₹1,000 (1st 20 km)",
      perKmRate: "₹20 / km",
    },
    {
      id: "tempo",
      name: "Tempo Traveller",
      image: "/fleet-tempo.jpg",
      seats: "12-14 Seats",
      bags: "8 Bags",
      ac: "AC",
      desc: "Luxury Minibus for Group Tours",
      baseFare: "₹1,500 (1st 20 km)",
      perKmRate: "₹26 / km",
    },
  ];

  return (
    <section id="fleet" className="bg-[#0a0a0a] pt-[80px] pb-[80px] px-[20px] sm:px-[24px] lg:px-[40px] flex flex-col items-center overflow-hidden">
      <div className="w-full flex flex-col items-center max-w-[800px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[40px]">
          <span className="font-sans font-medium text-[13px] md:text-[15px] tracking-[5px] text-[#C5A15D] uppercase mb-[12px]">
            OUR FLEET & TARIFF
          </span>
          <div className="w-[32px] md:w-[48px] h-[1px] bg-[#C5A15D] mb-[16px]"></div>
          <h2 className="font-serif font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] text-[#F5F5F5] mb-[8px]">
            Choose Your Ride
          </h2>
          <p className="font-sans text-[14px] sm:text-[16px] md:text-[18px] text-[#A3A3A3]">
            Transparent pricing • Well-maintained vehicles • Professional drivers
          </p>
        </div>

        {/* Fleet List */}
        <div className="w-full flex flex-col gap-[24px] mb-[32px]">
          {fleet.map((car, index) => {
            const waMessage = `Hi Y2S Cabs, I would like to book the ${car.name}. Please confirm tariff and driver availability.`;
            const waUrl = `https://wa.me/919790279217?text=${encodeURIComponent(waMessage)}`;

            return (
              <div 
                key={index} 
                className="w-full bg-[#111111] rounded-[20px] md:rounded-[24px] border border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row overflow-hidden group hover:border-[rgba(197,161,93,0.3)] transition-all duration-300"
              >
                {/* Car Image (Left side) */}
                <div className="w-full md:w-[45%] h-[210px] md:h-auto min-h-[210px] relative bg-[#0d0d0d] flex items-center justify-center p-3 flex-shrink-0">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#111111]/90 pointer-events-none"></div>
                </div>

                {/* Vehicle Details & Tariff (Right side) */}
                <div className="w-full md:w-[55%] flex flex-col justify-between p-[20px] sm:p-[24px] md:p-[28px] relative z-20">
                  <div>
                    {/* Name & Desc */}
                    <div className="flex justify-between items-start mb-[6px]">
                      <h3 className="font-serif font-bold text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-[#F5F5F5]">
                        {car.name}
                      </h3>
                    </div>
                    <p className="font-sans font-normal text-[13px] sm:text-[14px] md:text-[16px] text-[#A3A3A3] mb-[12px]">
                      {car.desc}
                    </p>

                    <div className="w-[32px] md:w-[40px] h-[2px] bg-[#C5A15D] mb-[16px]"></div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-[10px] mb-[16px]">
                      <div className="flex items-center gap-[6px] bg-[#171717] px-[10px] py-[6px] rounded-[8px] border border-[rgba(255,255,255,0.04)]">
                        <Users className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#C5A15D] flex-shrink-0" strokeWidth={2} />
                        <span className="font-sans font-normal text-[12px] md:text-[14px] text-[#D2D2CF] whitespace-nowrap">{car.seats}</span>
                      </div>
                      <div className="flex items-center gap-[6px] bg-[#171717] px-[10px] py-[6px] rounded-[8px] border border-[rgba(255,255,255,0.04)]">
                        <Briefcase className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#C5A15D] flex-shrink-0" strokeWidth={2} />
                        <span className="font-sans font-normal text-[12px] md:text-[14px] text-[#D2D2CF] whitespace-nowrap">{car.bags}</span>
                      </div>
                      <div className="flex items-center gap-[6px] bg-[#171717] px-[10px] py-[6px] rounded-[8px] border border-[rgba(255,255,255,0.04)]">
                        <Snowflake className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-[#C5A15D] flex-shrink-0" strokeWidth={2} />
                        <span className="font-sans font-normal text-[12px] md:text-[14px] text-[#D2D2CF] whitespace-nowrap">{car.ac}</span>
                      </div>
                    </div>

                    {/* Tariff Box */}
                    <div className="bg-[rgba(197,161,93,0.08)] border border-[rgba(197,161,93,0.2)] rounded-[12px] p-[12px] md:p-[14px] mb-[18px] flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <Tag className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#C5A15D]" />
                        <div className="flex flex-col">
                          <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-[#A3A3A3]">Base Fare</span>
                          <span className="font-sans font-semibold text-[14px] sm:text-[15px] md:text-[17px] text-[#F5F5F5]">{car.baseFare}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-[#A3A3A3]">Per Extra KM</span>
                        <span className="font-sans font-bold text-[15px] sm:text-[16px] md:text-[18px] text-[#C5A15D] block">{car.perKmRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-[12px]">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-[42px] sm:h-[46px] bg-[#C5A15D] rounded-[10px] flex items-center justify-center gap-[8px] px-[16px] hover:bg-[#b89555] transition-colors"
                    >
                      <MessageCircle className="w-[16px] h-[16px] text-[#111111]" strokeWidth={2} />
                      <span className="font-sans font-semibold text-[13px] sm:text-[14px] text-[#111111]">Book on WhatsApp</span>
                    </a>
                    <Link
                      href="/book"
                      className="h-[42px] sm:h-[46px] px-[14px] bg-[#171717] border border-[rgba(255,255,255,0.08)] rounded-[10px] flex items-center justify-center text-[#D2D2CF] hover:text-[#C5A15D] hover:border-[rgba(197,161,93,0.3)] transition-colors"
                    >
                      <ArrowRight className="w-[18px] h-[18px]" strokeWidth={1.8} />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
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

