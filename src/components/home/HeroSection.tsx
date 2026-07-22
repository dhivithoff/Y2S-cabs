"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, MapPin, Headphones, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image */}
        <Image
          src="/hero-mobile-bg.png"
          alt="Luxury Jaguar Mobile Background"
          fill
          sizes="(max-width: 768px) 100vw, 1px"
          className="object-cover object-center md:hidden"
          priority
        />
        {/* Desktop / Windows Background Image */}
        <Image
          src="/hero-desktop-bg.jpg"
          alt="Luxury Jaguar Desktop Background"
          fill
          sizes="(min-width: 769px) 100vw, 1px"
          className="hidden md:block object-cover object-center"
          priority
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent h-[40%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent mt-auto h-[50%]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full pt-[140px] px-[24px] md:pt-[240px] md:px-[80px] max-w-[1400px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h1 className="font-serif font-bold text-[42px] sm:text-[52px] md:text-[80px] leading-[1.05] tracking-[-1px] mb-[20px] md:mb-[32px]">
            <span className="block text-[#F5F5F5]">Ride in</span>
            <span className="block text-[#C5A15D]">Prestige.</span>
          </h1>
          
          <div className="w-[42px] md:w-[64px] h-[2px] bg-[#C5A15D] mb-[24px] md:mb-[32px]"></div>
          
          <p className="font-sans font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[32px] text-[#D2D2CF] max-w-[280px] md:max-w-[480px] mb-[32px] md:mb-[0]">
            Premium taxi service for local,<br className="md:hidden"/>
            outstation & airport transfers.<br className="md:hidden"/>
            <span className="hidden md:inline"> Premium taxi service for local, outstation & airport transfers. </span>
            Safe. Reliable. Always on time.
          </p>

          <div className="h-[140px] md:h-[48px]" /> {/* Spacer to move button down on mobile only */}

          <motion.a 
            href="/book"
            className="inline-flex items-center justify-between w-max h-[48px] md:h-[56px] rounded-[10px] md:rounded-[12px] bg-[#C5A15D] px-[20px] md:px-[28px] gap-[32px] md:gap-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] mb-[24px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-[12px] md:gap-[16px]">
              <MessageCircle className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-[#111111]" strokeWidth={1.5} />
              <span className="font-sans font-medium text-[15px] md:text-[17px] text-[#111111]">Book Ride</span>
            </div>
            <ArrowRight className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-[#111111]" strokeWidth={1.5} />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
