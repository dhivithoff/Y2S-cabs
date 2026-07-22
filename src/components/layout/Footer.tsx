import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.06)] pt-[56px] pb-[40px] px-[24px] md:px-[64px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[40px]">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[32px] pb-[32px] border-b border-[rgba(255,255,255,0.06)]">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-[12px]">
            <div className="relative w-[140px] h-[40px]">
              <Image
                src="/logo.png"
                alt="Y2S Cabs Logo"
                fill
                sizes="140px"
                className="object-contain object-left"
              />
            </div>
            <p className="font-sans font-normal text-[14px] text-[#A3A3A3] max-w-[320px]">
              Premium luxury taxi service offering 24x7 local, airport, and outstation rides across South India.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap items-center gap-[20px] md:gap-[36px]">
            <Link href="/" className="font-sans font-medium text-[15px] text-[#D2D2CF] hover:text-[#C5A15D] transition-colors">Home</Link>
            <Link href="/services" className="font-sans font-medium text-[15px] text-[#D2D2CF] hover:text-[#C5A15D] transition-colors">Services</Link>
            <Link href="/fleet" className="font-sans font-medium text-[15px] text-[#D2D2CF] hover:text-[#C5A15D] transition-colors">Fleet</Link>
            <Link href="/fare-calculator" className="font-sans font-medium text-[15px] text-[#D2D2CF] hover:text-[#C5A15D] transition-colors">Fare Calculator</Link>
            <Link href="/book" className="font-sans font-medium text-[15px] text-[#D2D2CF] hover:text-[#C5A15D] transition-colors">Bookings</Link>
          </nav>
        </div>

        {/* Contact Info Badges */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] text-[14px] text-[#A3A3A3]">
          <div className="flex items-center gap-[10px]">
            <Phone className="w-[16px] h-[16px] text-[#C5A15D] shrink-0" />
            <a href="tel:+919790279217" className="hover:text-[#F5F5F5] transition-colors">+91 97902 79217</a>
          </div>

          <div className="flex items-center gap-[10px]">
            <Mail className="w-[16px] h-[16px] text-[#C5A15D] shrink-0" />
            <a href="mailto:y2scabstravels3024@gmail.com" className="hover:text-[#F5F5F5] transition-colors">y2scabstravels3024@gmail.com</a>
          </div>

          <div className="flex items-center gap-[10px]">
            <MapPin className="w-[16px] h-[16px] text-[#C5A15D] shrink-0" />
            <span>Tiruppur, Tamil Nadu</span>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[16px] text-[13px] text-[#737373] pt-[20px] border-t border-[rgba(255,255,255,0.04)]">
          <p>&copy; {new Date().getFullYear()} Y2S Cabs & Travels. All rights reserved.</p>
          <div className="flex items-center gap-[24px]">
            <Link href="/privacy-policy" className="hover:text-[#A3A3A3] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#A3A3A3] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
