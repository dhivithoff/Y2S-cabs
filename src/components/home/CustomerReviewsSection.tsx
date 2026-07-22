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
    <section className="w-full bg-[#0a0a0a] py-[80px] px-[24px]">
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="flex flex-col text-left p-[40px] rounded-[24px] bg-[#111111] border border-[rgba(255,255,255,0.03)] relative overflow-hidden group hover:border-[#C5A15D]/30 transition-colors duration-300"
            >
              <Quote className="absolute top-[32px] right-[32px] w-[64px] h-[64px] text-[rgba(197,161,93,0.05)] group-hover:text-[rgba(197,161,93,0.1)] transition-colors duration-300" />
              
              <div className="flex gap-[4px] mb-[24px]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-[18px] h-[18px] text-[#C5A15D] fill-[#C5A15D]" />
                ))}
              </div>
              
              <p className="font-sans font-normal text-[16px] leading-[28px] text-[#D2D2CF] mb-[32px] flex-grow italic">
                "{review.content}"
              </p>
              
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[18px] text-[#F5F5F5]">
                  {review.name}
                </span>
                <span className="font-sans text-[14px] text-[#A3A3A3]">
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
