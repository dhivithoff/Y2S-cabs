"use client";

import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FloatingButtons() {
  const pathname = usePathname();

  // Hide on homepage, since Navbar has the call button and it's a landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <>
      {/* Call Button (Left Side) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4 md:bottom-10 md:left-10">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          href="tel:+919790279217"
          className="w-14 h-14 rounded-full bg-[#111111] text-[#C5A15D] border border-[#C5A15D]/50 flex items-center justify-center shadow-[0_4px_14px_0_rgba(197,161,93,0.39)] hover:scale-110 hover:bg-[#C5A15D] hover:text-[#111111] transition-all"
          aria-label="Call Now"
        >
          <PhoneCall className="w-6 h-6" />
        </motion.a>
      </div>

      {/* WhatsApp Button (Right Side) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 md:bottom-10 md:right-10">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          href="https://wa.me/919790279217?text=Hi%2C%20I%20would%20like%20to%20book%20a%20taxi."
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
    </>
  );
}
