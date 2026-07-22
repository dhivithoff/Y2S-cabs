"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, MapPin, Headphones, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden bg-[#1C1C1A]">
      {/* Background Image - Absolute to the whole page essentially */}
      <div className="absolute inset-0 z-0 h-[852px] w-full">
        <Image
          src="/hero-mobile-bg.png"
          alt="Luxury Jaguar Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Spacer for Navbar (88px) */}
      <div className="h-[88px] relative z-10 w-full flex-shrink-0" />

      {/* Hero Content Section */}
      <div className="relative z-10 h-[760px] px-[24px] pt-[46px] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col relative z-20"
        >
          <h1 
            className="font-serif font-bold text-[64px] leading-[62px] tracking-[-1.2px] mb-[28px]"
            style={{ width: '265px' }}
          >
            <span className="block text-[#F5F5F5]">Ride in</span>
            <span className="block text-[#C6A15D]">Prestige.</span>
          </h1>
          
          <div className="w-[42px] h-[2px] bg-[#C6A15D] mb-[24px]"></div>
          
          <p 
            className="font-sans font-normal text-[16px] leading-[31px] text-[#D5D5D5] mb-[30px]"
            style={{ width: '290px' }}
          >
            Premium taxi service for local, outstation & airport transfers.<br />
            Safe. Reliable. Always on time.
          </p>

          <motion.a 
            href="https://wa.me/12345678900?text=Hi%2C%20I%20would%20like%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[228px] h-[56px] rounded-[14px] bg-[#C5A05C] gap-[12px] shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
            style={{ padding: '18px 22px' }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="w-[20px] h-[20px] text-[#161616]" />
            <span className="font-sans font-semibold text-[17px] text-[#161616]">Book on WhatsApp</span>
            <ArrowRight className="w-[20px] h-[20px] text-[#161616]" />
          </motion.a>

          <div className="flex items-center gap-[6px] mt-[20px]">
            <ShieldCheck className="w-[16px] h-[16px] text-[#BDBDB8]" />
            <span className="font-sans text-[15px] text-[#BDBDB8]">Trusted by thousands</span>
          </div>
        </motion.div>
        
        {/* Jaguar Image */}
        <div className="absolute bottom-0 right-[-18px] w-[365px] h-[235px] z-10 pointer-events-none">
           <Image 
             src="/hero-mobile-bg.png" 
             alt="Jaguar"
             fill
             className="object-cover object-right-bottom"
           />
        </div>
      </div>

      {/* Feature Card Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: -4 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-20 w-[345px] h-[145px] mx-auto rounded-[24px] bg-[#2B2B28] border border-[rgba(255,255,255,0.05)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-[22px] mb-[120px]"
      >
        <div className="flex items-center h-full gap-[18px] overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Feature 1 */}
          <div className="flex flex-col items-center justify-center min-w-[70px]">
            <ShieldCheck className="w-[38px] h-[38px] text-[#C6A15D] mb-[8px] stroke-[1.5]" />
            <span className="font-sans font-medium text-[18px] text-white whitespace-nowrap leading-tight mb-1">Safe</span>
            <span className="font-sans font-normal text-[14px] leading-[24px] text-[#BDBDB8] whitespace-nowrap">Verified</span>
          </div>
          <div className="w-[1px] h-full bg-[rgba(255,255,255,0.08)] flex-shrink-0"></div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center justify-center min-w-[70px]">
            <Clock className="w-[38px] h-[38px] text-[#C6A15D] mb-[8px] stroke-[1.5]" />
            <span className="font-sans font-medium text-[18px] text-white whitespace-nowrap leading-tight mb-1">Time</span>
            <span className="font-sans font-normal text-[14px] leading-[24px] text-[#BDBDB8] whitespace-nowrap">On Time</span>
          </div>
          <div className="w-[1px] h-full bg-[rgba(255,255,255,0.08)] flex-shrink-0"></div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center justify-center min-w-[70px]">
            <MapPin className="w-[38px] h-[38px] text-[#C6A15D] mb-[8px] stroke-[1.5]" />
            <span className="font-sans font-medium text-[18px] text-white whitespace-nowrap leading-tight mb-1">City</span>
            <span className="font-sans font-normal text-[14px] leading-[24px] text-[#BDBDB8] whitespace-nowrap">Anywhere</span>
          </div>
          <div className="w-[1px] h-full bg-[rgba(255,255,255,0.08)] flex-shrink-0"></div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center justify-center min-w-[70px]">
            <Headphones className="w-[38px] h-[38px] text-[#C6A15D] mb-[8px] stroke-[1.5]" />
            <span className="font-sans font-medium text-[18px] text-white whitespace-nowrap leading-tight mb-1">24/7</span>
            <span className="font-sans font-normal text-[14px] leading-[24px] text-[#BDBDB8] whitespace-nowrap">Support</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
