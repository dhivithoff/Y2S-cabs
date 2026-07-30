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
      className={`fixed top-0 w-full z-50 h-[88px] md:h-[105px] transition-colors duration-300 ${scrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-md border-b border-[rgba(255,255,255,0.05)]' : 'bg-transparent'}`}
    >
      <div className="relative w-full h-full max-w-[1440px] mx-auto flex items-center justify-between px-[16px] md:px-[32px]">
        {/* Logo Only */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0"
        >
          <div className="relative w-[72px] h-[72px] sm:w-[75px] sm:h-[75px] md:w-[92px] md:h-[92px] lg:w-[98px] lg:h-[98px] flex-shrink-0 transition-all">
            <Image
              src="/site-logo.png"
              alt="Y2S Cabs Logo"
              fill
              sizes="(max-width: 768px) 75px, 100px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-[36px] absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="font-sans font-medium text-[17px] lg:text-[18px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Home</Link>
          <Link href="/#services" className="font-sans font-medium text-[17px] lg:text-[18px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Services</Link>
          <Link href="/#fleet" className="font-sans font-medium text-[17px] lg:text-[18px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Fleet</Link>
          <Link href="/book" className="font-sans font-medium text-[17px] lg:text-[18px] text-[#A3A3A3] hover:text-[#C5A15D] transition-colors">Bookings</Link>
        </nav>

        {/* Call Button (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+919790279217"
            className="flex items-center gap-[10px] bg-[rgba(197,161,93,0.1)] border border-[#C5A15D] text-[#C5A15D] h-[50px] px-[24px] rounded-full font-sans font-medium hover:bg-[#C5A15D] hover:text-[#111111] transition-all text-[16px] lg:text-[17px]"
          >
            <Phone className="w-[19px] h-[19px]" strokeWidth={2} />
            <span>+91 97902 79217</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
