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
        {/* Logo */}
        <Link 
          href="/" 
          className="relative w-[90px] h-[85px] mt-[10px] flex-shrink-0" 
        >
          <Image
            src="/logo.png"
            alt="Y2S Cabs Logo"
            fill
            sizes="90px"
            className="object-contain object-top"
            priority
          />
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-[32px] absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Home</Link>
          <Link href="/#services" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Services</Link>
          <Link href="/#fleet" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Fleet</Link>
          <Link href="/book" className="font-sans font-medium text-[15px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Bookings</Link>
        </nav>

        {/* Call Button (Right Corner) */}
        <div className="flex items-center">
          {/* Desktop/Tablet explicit call button */}
          <a
            href="tel:+919790279217"
            className="hidden sm:flex items-center gap-[10px] bg-[rgba(197,161,93,0.1)] border border-[#C5A15D] text-[#C5A15D] h-[46px] px-[20px] rounded-full font-sans font-medium hover:bg-[#C5A15D] hover:text-[#111111] transition-all"
          >
            <Phone className="w-[18px] h-[18px]" strokeWidth={2} />
            <span className="text-[15px]">+91 97902 79217</span>
          </a>
          
          {/* Mobile icon call button */}
          <a
            href="tel:+919790279217"
            className="flex sm:hidden items-center justify-center w-[46px] h-[46px] flex-shrink-0 rounded-full border border-[#C5A15D] bg-[rgba(197,161,93,0.1)] hover:bg-[#C5A15D] hover:text-[#111111] text-[#C5A15D] transition-colors"
            aria-label="Call Us"
          >
            <Phone className="w-[20px] h-[20px]" strokeWidth={2} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
