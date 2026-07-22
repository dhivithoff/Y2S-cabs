"use client";

import { MessageCircle, PhoneCall, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FloatingButtons() {
  const pathname = usePathname();

  // Show a specific floating call button on the top right for the homepage
  if (pathname === "/") {
    return (
      <div className="hidden fixed top-[100px] right-6 z-50 md:flex flex-col gap-4 md:top-[120px] md:right-10">
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
    );
  }

  // Remove bottom buttons on other pages
  return null;
}
