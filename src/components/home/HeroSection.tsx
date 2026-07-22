"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, MapPin, Headphones, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mobile-bg.png"
          alt="Luxury Jaguar Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent h-[40%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent mt-auto h-[50%]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full pt-[140px] px-[24px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h1 className="font-serif font-bold text-[52px] leading-[1.05] tracking-[-1px] mb-[20px]">
            <span className="block text-[#F5F5F5]">Ride in</span>
            <span className="block text-[#C5A15D]">Prestige.</span>
          </h1>
          
          <div className="w-[42px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
          
          <p className="font-sans font-normal text-[14px] leading-[22px] text-[#D2D2CF] max-w-[280px] mb-[32px]">
            Premium taxi service for local,<br/>
            outstation & airport transfers.<br/>
            Safe. Reliable. Always on time.
          </p>

          <div className="h-[40px] md:h-[60px]" /> {/* Spacer to move button down */}

          <motion.a 
            href="https://wa.me/919790279217?text=Hi%2C%20I%20would%20like%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-max h-[48px] rounded-[10px] bg-[#C5A15D] px-[20px] gap-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] mb-[24px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-[12px]">
              <MessageCircle className="w-[18px] h-[18px] text-[#111111]" strokeWidth={1.5} />
              <span className="font-sans font-medium text-[15px] text-[#111111]">Book Ride</span>
            </div>
            <ArrowRight className="w-[18px] h-[18px] text-[#111111]" strokeWidth={1.5} />
          </motion.a>

          <div className="flex items-center gap-[8px]">
            <ShieldCheck className="w-[16px] h-[16px] text-[#C5A15D]" strokeWidth={1.5} />
            <span className="font-sans text-[13px] text-[#BDBDB8]">Trusted by thousands</span>
          </div>
        </motion.div>

        {/* Bottom Trust Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-[24px] right-[24px] bottom-[40px] md:bottom-[60px] rounded-[24px] bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.06)] p-[24px] z-20 shadow-2xl"
        >
          <div className="grid grid-cols-4 gap-0 relative h-full">
            
            {/* Dividers */}
            <div className="absolute top-[10%] bottom-[10%] left-[25%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="absolute top-[10%] bottom-[10%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="absolute top-[10%] bottom-[10%] left-[75%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>

            {/* Feature 1 */}
            <div className="flex flex-col items-center justify-center text-center px-[4px]">
              <ShieldCheck className="w-[28px] h-[28px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[11px] leading-[16px] text-[#F5F5F5] whitespace-nowrap mb-1">Safe & Secure</span>
              <span className="font-sans font-normal text-[10px] leading-[14px] text-[#A3A3A3] whitespace-nowrap">Verified Drivers</span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center justify-center text-center px-[4px]">
              <Clock className="w-[28px] h-[28px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[11px] leading-[16px] text-[#F5F5F5] whitespace-nowrap mb-1">On Time</span>
              <span className="font-sans font-normal text-[10px] leading-[14px] text-[#A3A3A3] whitespace-nowrap">Every Time</span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center justify-center text-center px-[4px]">
              <MapPin className="w-[28px] h-[28px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[11px] leading-[16px] text-[#F5F5F5] whitespace-nowrap mb-1">Across City</span>
              <span className="font-sans font-normal text-[10px] leading-[14px] text-[#A3A3A3] whitespace-nowrap">& Outstation</span>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center justify-center text-center px-[4px]">
              <Headphones className="w-[28px] h-[28px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-medium text-[11px] leading-[16px] text-[#F5F5F5] whitespace-nowrap mb-1">24/7 Support</span>
              <span className="font-sans font-normal text-[10px] leading-[14px] text-[#A3A3A3] whitespace-nowrap">Always Available</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
