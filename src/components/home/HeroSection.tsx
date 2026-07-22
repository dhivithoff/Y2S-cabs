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

          <div className="h-[80px] md:h-[140px]" /> {/* Spacer to move button down */}

          <motion.a 
            href="/book"
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

        </motion.div>
      </div>
    </section>
  );
}
