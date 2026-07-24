"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 h-[88px] transition-colors duration-300 ${scrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-md border-b border-[rgba(255,255,255,0.05)]' : 'bg-transparent'}`}
    >
      <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-between px-[16px] md:px-[32px]">
        {/* Logo & Brand Name */}
        <Link 
          href="/" 
          className="flex items-center gap-[8px] sm:gap-[12px] flex-shrink-0" 
        >
          <div className="relative w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Y2S Cabs Logo"
              fill
              sizes="70px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif font-bold text-[15px] sm:text-[18px] md:text-[20px] text-[#F5F5F5] tracking-tight leading-tight">
            Y2S Cabs & Services
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-[32px] absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Home</Link>
          <Link href="/#services" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Services</Link>
          <Link href="/#fleet" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Fleet</Link>
          <Link href="/book" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Bookings</Link>
        </nav>

        {/* Call Button (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+919790279217"
            className="flex items-center gap-[10px] bg-[rgba(197,161,93,0.1)] border border-[#C5A15D] text-[#C5A15D] h-[46px] px-[20px] rounded-full font-sans font-medium hover:bg-[#C5A15D] hover:text-[#111111] transition-all"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={2} />
            <span className="text-[15px]">+91 97902 79217</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
