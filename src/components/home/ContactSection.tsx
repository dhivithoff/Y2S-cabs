"use client";

import { PhoneCall, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#111111] py-[80px] px-[24px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[64px]">
          <span className="font-sans font-medium text-[14px] tracking-[4px] text-[#C5A15D] uppercase mb-[16px]">
            Get In Touch
          </span>
          <div className="w-[40px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
          <h2 className="font-serif font-bold text-[42px] leading-[1.1] tracking-[-1px] text-[#F5F5F5] max-w-[600px]">
            Contact & Location
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] w-full text-left">
          
          {/* Direct Contact Info */}
          <div className="bg-[#0a0a0a] rounded-[24px] p-[40px] border border-[rgba(255,255,255,0.03)] flex flex-col justify-center">
            <h3 className="font-serif font-bold text-[32px] text-[#F5F5F5] mb-[24px]">Reach Out Directly</h3>
            <p className="font-sans text-[16px] text-[#A3A3A3] mb-[40px] max-w-[400px]">
              Whether you need a quick ride to the airport or a luxury car for your wedding, we are just a call or message away.
            </p>

            <div className="flex flex-col gap-[32px]">
              {/* Phone */}
              <div className="flex items-center gap-[24px]">
                <div className="w-[56px] h-[56px] rounded-full bg-[rgba(197,161,93,0.1)] border border-[rgba(197,161,93,0.2)] flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-[24px] h-[24px] text-[#C5A15D]" />
                </div>
                <div>
                  <span className="block font-sans font-medium text-[14px] text-[#A3A3A3] mb-[4px]">Phone</span>
                  <a href="tel:+919790279217" className="font-sans font-bold text-[18px] text-[#F5F5F5] hover:text-[#C5A15D] transition-colors">
                    +91 97902 79217
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-[24px]">
                <div className="w-[56px] h-[56px] rounded-full bg-[rgba(37,211,102,0.1)] border border-[rgba(37,211,102,0.2)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-[24px] h-[24px] text-[#25D366]" />
                </div>
                <div>
                  <span className="block font-sans font-medium text-[14px] text-[#A3A3A3] mb-[4px]">WhatsApp</span>
                  <a href="https://wa.me/919790279217" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[18px] text-[#F5F5F5] hover:text-[#25D366] transition-colors">
                    +91 97902 79217
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[24px]">
                <div className="w-[56px] h-[56px] rounded-full bg-[rgba(197,161,93,0.1)] border border-[rgba(197,161,93,0.2)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-[24px] h-[24px] text-[#C5A15D]" />
                </div>
                <div>
                  <span className="block font-sans font-medium text-[14px] text-[#A3A3A3] mb-[4px]">Email</span>
                  <a href="mailto:y2scabstravels3024@gmail.com" className="font-sans font-bold text-[18px] text-[#F5F5F5] hover:text-[#C5A15D] transition-colors break-all">
                    y2scabstravels3024@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="bg-[#0a0a0a] rounded-[24px] p-[40px] border border-[rgba(255,255,255,0.03)] flex flex-col justify-center">
            
            {/* Address */}
            <div className="mb-[48px]">
              <div className="flex items-center gap-[16px] mb-[16px]">
                <MapPin className="w-[24px] h-[24px] text-[#C5A15D]" />
                <h3 className="font-serif font-bold text-[24px] text-[#F5F5F5]">Office Address</h3>
              </div>
              <p className="font-sans text-[16px] leading-[28px] text-[#A3A3A3] pl-[40px]">
                1/110-61A, SENTHIL NAGAR,<br />
                SEERANAMPALAYAM, IDUVAI,<br />
                TIRUPPUR
              </p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-[16px] mb-[16px]">
                <Clock className="w-[24px] h-[24px] text-[#C5A15D]" />
                <h3 className="font-serif font-bold text-[24px] text-[#F5F5F5]">Business Hours</h3>
              </div>
              <div className="pl-[40px]">
                <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.05)] pb-[12px]">
                  <span className="font-sans text-[16px] text-[#A3A3A3]">Monday - Sunday</span>
                  <span className="font-sans font-medium text-[16px] text-[#C5A15D]">24 Hours Open</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
