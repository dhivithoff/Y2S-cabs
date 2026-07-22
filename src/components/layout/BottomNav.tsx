"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, CarFront, FileText, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: CarFront },
    { name: "Bookings", href: "/book", icon: FileText },
    { name: "Profile", href: "#", icon: User },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[88px] bg-[#0a0a0a] pb-safe"
    >
      <div className="flex justify-between items-center h-full px-[24px]">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 gap-[4px] h-full"
            >
              <Icon 
                className="w-[26px] h-[26px]" 
                strokeWidth={1.5}
                color={isActive ? "#C6A15D" : "#D3D3D3"}
              />
              <span 
                className={"font-sans text-[14px] font-medium " + (isActive ? "text-[#C6A15D]" : "text-[#D3D3D3]")}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
