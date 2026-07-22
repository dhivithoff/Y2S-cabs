"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-4 md:flex md:bottom-10 md:right-10">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        href="tel:+12345678900"
        className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        href="https://wa.me/12345678900?text=Hi%2C%20I%20would%20like%20to%20book%20a%20taxi."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-110 transition-transform relative"
        aria-label="Book via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </motion.a>
    </div>
  );
}
