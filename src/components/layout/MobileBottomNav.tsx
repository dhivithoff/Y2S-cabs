"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Car, CalendarCheck } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Services", href: "/#services", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Fleet", href: "/#fleet", icon: <Car className="w-5 h-5" /> },
    { name: "Bookings", href: "/book", icon: <CalendarCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#111111]/95 backdrop-blur-md border-t border-[rgba(255,255,255,0.05)] z-40 flex items-center justify-around px-2 pb-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
              isActive ? "text-[#C5A15D]" : "text-[#A3A3A3] hover:text-[#D2D2CF]"
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-sans font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
