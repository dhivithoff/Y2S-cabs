import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="relative w-[150px] h-[40px] mb-6">
              <Image
                src="/logo.png"
                alt="Y2S Cabs Logo"
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <p className="text-secondary-foreground mb-6">
              Premium luxury taxi service offering 24x7 local, airport, and outstation rides with top-class comfort, professional drivers, and unmatched safety.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-secondary-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-secondary-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/fleet" className="text-secondary-foreground hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/fare-calculator" className="text-secondary-foreground hover:text-primary transition-colors">Fare Calculator</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services#airport" className="text-secondary-foreground hover:text-primary transition-colors">Airport Transfers</Link></li>
              <li><Link href="/services#outstation" className="text-secondary-foreground hover:text-primary transition-colors">Outstation Taxi</Link></li>
              <li><Link href="/services#local" className="text-secondary-foreground hover:text-primary transition-colors">Local City Rides</Link></li>
              <li><Link href="/services#corporate" className="text-secondary-foreground hover:text-primary transition-colors">Corporate Travel</Link></li>
              <li><Link href="/services#wedding" className="text-secondary-foreground hover:text-primary transition-colors">Wedding Cars</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-secondary-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>1/110-61A, SENTHIL NAGAR, SEERANAMPALAYAM, IDUVAI, TIRUPPUR</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919790279217" className="hover:text-primary transition-colors">+91 97902 79217</a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:y2scabstravels3024@gmail.com" className="hover:text-primary transition-colors">y2scabstravels3024@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground text-sm">
            &copy; {new Date().getFullYear()} Y2S Cabs & Travels. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-secondary-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-secondary-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-secondary-foreground hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
