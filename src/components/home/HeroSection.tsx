"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image */}
        <Image
          src="/hero-mobile-bg.png"
          alt="24/7 Cab Service in Tiruppur Mobile Background"
          fill
          sizes="(max-width: 768px) 100vw, 1px"
          className="object-cover object-center md:hidden"
          priority
        />
        {/* Desktop / Windows Background Image */}
        <Image
          src="/hero-desktop-bg.jpg"
          alt="24/7 Cab Service in Tiruppur Desktop Background"
          fill
          sizes="(min-width: 769px) 100vw, 1px"
          className="hidden md:block object-cover object-center"
          priority
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent h-[40%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent mt-auto h-[50%]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full pt-[130px] px-[20px] sm:px-[24px] md:pt-[220px] md:px-[80px] max-w-[1400px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Local SEO Eyebrow Badge */}
          <div className="w-max h-[32px] md:h-[36px] rounded-full bg-[rgba(197,161,93,0.12)] border border-[#C5A15D]/40 flex items-center px-[12px] md:px-[16px] mb-[16px] md:mb-[24px] backdrop-blur-md">
            <span className="font-sans font-medium text-[11px] md:text-[13px] tracking-[3px] text-[#C5A15D] uppercase">
              24/7 Cab Service in Tiruppur
            </span>
          </div>

          <h1 className="font-serif font-bold text-[36px] sm:text-[48px] md:text-[80px] lg:text-[86px] leading-[1.08] tracking-[-1px] mb-[16px] md:mb-[28px]">
            <span className="block text-[#F5F5F5]">Ride in Comfort &</span>
            <span className="block text-[#C5A15D]">Prestige.</span>
          </h1>
          
          <div className="w-[42px] md:w-[64px] h-[2px] bg-[#C5A15D] mb-[20px] md:mb-[28px]"></div>
          
          <p className="font-sans font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[22px] md:leading-[32px] text-[#D2D2CF] max-w-[320px] sm:max-w-[420px] md:max-w-[580px] mb-[28px] md:mb-[36px]">
            Top-rated cab service in Tiruppur for Coimbatore airport transfers, local rides & outstation travel. Safe, licensed drivers • Transparent pricing.
          </p>

          {/* Action CTA (Gold Book Ride button linking to /book) */}
          <motion.a 
            href="/book"
            className="inline-flex items-center justify-between w-max h-[48px] md:h-[58px] rounded-[10px] md:rounded-[12px] bg-[#C5A15D] px-[20px] md:px-[32px] gap-[32px] md:gap-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.3)] mb-[24px] hover:bg-[#b89555] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-[12px] md:gap-[16px]">
              <MessageCircle className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-[#111111]" strokeWidth={1.5} />
              <span className="font-sans font-semibold text-[15px] md:text-[18px] text-[#111111]">Book Ride</span>
            </div>
            <ArrowRight className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] text-[#111111]" strokeWidth={1.5} />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
