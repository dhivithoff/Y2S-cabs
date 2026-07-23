"use client";

import { Star, Quote } from "lucide-react";

export default function CustomerReviewsSection() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Business Executive",
      content: "Exceptional service! The chauffeur was highly professional, and the car was immaculate. Y2S Cabs is now my go-to for all airport transfers.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Regular Commuter",
      content: "I've been using their service for my daily commute to the IT park. Always on time, incredibly safe, and the luxury feel makes the traffic bearable.",
      rating: 5,
    },
    {
      name: "Arun Patel",
      role: "Tourist",
      content: "Booked them for a weekend outstation trip. The entire process from WhatsApp booking to the actual journey was seamless and transparent.",
      rating: 5,
    }
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-[80px] px-[24px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[64px]">
          <span className="font-sans font-medium text-[14px] tracking-[4px] text-[#C5A15D] uppercase mb-[16px]">
            Testimonials
          </span>
          <div className="w-[40px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
          <h2 className="font-serif font-bold text-[42px] leading-[1.1] tracking-[-1px] text-[#F5F5F5] max-w-[600px]">
            What Our Clients Say
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden relative flex">
          
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-[40px] md:w-[100px] bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[40px] md:w-[100px] bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee gap-[20px] sm:gap-[28px] md:gap-[32px] hover:[animation-play-state:paused]">
            {/* Double the reviews to create a seamless loop */}
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div 
                key={index} 
                className="flex flex-col text-left p-[24px] sm:p-[32px] md:p-[36px] rounded-[20px] sm:rounded-[24px] bg-[#111111] border border-[rgba(255,255,255,0.03)] relative overflow-hidden group hover:border-[#C5A15D]/30 transition-colors duration-300 w-[270px] sm:w-[300px] md:w-[330px] flex-shrink-0"
              >
                <Quote className="absolute top-[24px] right-[24px] w-[48px] h-[48px] md:w-[64px] md:h-[64px] text-[rgba(197,161,93,0.05)] group-hover:text-[rgba(197,161,93,0.1)] transition-colors duration-300" />
                
                <div className="flex gap-[4px] mb-[16px] sm:mb-[20px]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#C5A15D] fill-[#C5A15D]" />
                  ))}
                </div>
                
                <p className="font-sans font-normal text-[14px] sm:text-[15px] md:text-[17px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#D2D2CF] mb-[24px] sm:mb-[32px] flex-grow italic">
                  "{review.content}"
                </p>
                
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-[16px] sm:text-[18px] md:text-[19px] text-[#F5F5F5]">
                    {review.name}
                  </span>
                  <span className="font-sans text-[13px] sm:text-[14px] text-[#A3A3A3]">
                    {review.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
