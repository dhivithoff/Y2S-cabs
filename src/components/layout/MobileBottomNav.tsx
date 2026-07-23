"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, Phone, CalendarCheck, Briefcase } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" />, isCall: false },
    { name: "Fleet", href: "/#fleet", icon: <Car className="w-5 h-5" />, isCall: false },
    { name: "Call", href: "tel:+919790279217", icon: <Phone className="w-5 h-5" />, isCall: true },
    { name: "Bookings", href: "/book", icon: <CalendarCheck className="w-5 h-5" />, isCall: false },
    { name: "Services", href: "/#services", icon: <Briefcase className="w-5 h-5" />, isCall: false },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#111111]/95 backdrop-blur-md border-t border-[rgba(255,255,255,0.08)] z-40 flex items-center justify-around px-1 pb-1">
      {navItems.map((item) => {
        const isActive = !item.isCall && (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));

        if (item.isCall) {
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 h-full gap-1 text-[#C5A15D] hover:text-[#b89555] transition-colors"
              aria-label="Call Now"
            >
              {item.icon}
              <span className="text-[10px] font-sans font-medium">{item.name}</span>
            </a>
          );
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
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
