"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 h-[88px] bg-transparent"
    >
      <div className="relative w-full h-full">
        {/* Logo */}
        <Link 
          href="/" 
          className="absolute block" 
          style={{ top: '18px', left: '24px', width: '118px', height: '110px' }}
        >
          <Image
            src="/logo.png"
            alt="Y2S Cabs Logo"
            fill
            sizes="118px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Navigation Controls */}
        <div 
          className="absolute flex items-center gap-[16px]"
          style={{ top: '18px', right: '24px' }}
        >
          <a
            href="tel:+12345678900"
            className="flex items-center justify-center w-[52px] h-[52px] rounded-[16px] border border-[#8F7443] bg-transparent"
            aria-label="Call Us"
          >
            <Phone className="w-[24px] h-[24px] text-primary" />
          </a>
          <button
            className="flex items-center justify-center w-[52px] h-[52px] rounded-[16px] border border-[#8F7443] bg-transparent"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-[24px] h-[24px] text-primary" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
