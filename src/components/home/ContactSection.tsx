"use client";

import { PhoneCall, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#111111] py-[48px] sm:py-[64px] md:py-[80px] lg:py-[96px] px-[16px] sm:px-[24px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-[32px] sm:mb-[48px] md:mb-[64px]">
          <span className="font-sans font-medium text-[12px] sm:text-[13px] md:text-[15px] tracking-[4px] text-[#C5A15D] uppercase mb-[10px] md:mb-[16px]">
            Get In Touch
          </span>
          <div className="w-[32px] md:w-[48px] h-[2px] bg-[#C5A15D] mb-[16px] md:mb-[24px]"></div>
          <h2 className="font-serif font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.15] tracking-[-1px] text-[#F5F5F5] max-w-[650px]">
            Contact & Location
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[28px] md:gap-[36px] w-full text-left">
          
          {/* Direct Contact Info */}
          <div className="bg-[#0a0a0a] rounded-[20px] sm:rounded-[24px] p-[20px] sm:p-[32px] md:p-[40px] border border-[rgba(255,255,255,0.03)] flex flex-col justify-center">
            <h3 className="font-serif font-bold text-[22px] sm:text-[28px] md:text-[34px] text-[#F5F5F5] mb-[12px] sm:mb-[20px]">Reach Out Directly</h3>
            <p className="font-sans text-[14px] sm:text-[16px] md:text-[18px] text-[#A3A3A3] mb-[24px] sm:mb-[36px] max-w-[440px]">
              Whether you need a quick ride to the airport or a luxury car for your wedding, we are just a call or message away.
            </p>

            <div className="flex flex-col gap-[20px] sm:gap-[28px] md:gap-[32px]">
              {/* Phone */}
              <div className="flex items-center gap-[16px] sm:gap-[24px]">
                <div className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-full bg-[rgba(197,161,93,0.1)] border border-[rgba(197,161,93,0.2)] flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-[#C5A15D]" />
                </div>
                <div>
                  <span className="block font-sans font-medium text-[12px] sm:text-[14px] md:text-[15px] text-[#A3A3A3] mb-[2px]">Phone</span>
                  <a href="tel:+919790279217" className="font-sans font-bold text-[16px] sm:text-[19px] md:text-[21px] text-[#F5F5F5] hover:text-[#C5A15D] transition-colors">
                    +91 97902 79217
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-[16px] sm:gap-[24px]">
                <div className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-full bg-[rgba(37,211,102,0.1)] border border-[rgba(37,211,102,0.2)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-[#25D366]" />
                </div>
                <div>
                  <span className="block font-sans font-medium text-[12px] sm:text-[14px] md:text-[15px] text-[#A3A3A3] mb-[2px]">WhatsApp</span>
                  <a href="https://wa.me/919790279217" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[16px] sm:text-[19px] md:text-[21px] text-[#F5F5F5] hover:text-[#25D366] transition-colors">
                    +91 97902 79217
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[16px] sm:gap-[24px]">
                <div className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-full bg-[rgba(197,161,93,0.1)] border border-[rgba(197,161,93,0.2)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-[#C5A15D]" />
                </div>
                <div>
                  <span className="block font-sans font-medium text-[12px] sm:text-[14px] md:text-[15px] text-[#A3A3A3] mb-[2px]">Email</span>
                  <a href="mailto:y2scabstravels3024@gmail.com" className="font-sans font-bold text-[15px] sm:text-[18px] md:text-[20px] text-[#F5F5F5] hover:text-[#C5A15D] transition-colors break-all">
                    y2scabstravels3024@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="bg-[#0a0a0a] rounded-[20px] sm:rounded-[24px] p-[20px] sm:p-[32px] md:p-[40px] border border-[rgba(255,255,255,0.03)] flex flex-col justify-center">
            
            {/* Address */}
            <div className="mb-[28px] sm:mb-[40px]">
              <div className="flex items-center gap-[12px] sm:gap-[16px] mb-[12px]">
                <MapPin className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] text-[#C5A15D]" />
                <h3 className="font-serif font-bold text-[20px] sm:text-[26px] md:text-[28px] text-[#F5F5F5]">Office Address</h3>
              </div>
              <p className="font-sans text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] md:leading-[30px] text-[#A3A3A3] pl-[32px] sm:pl-[42px]">
                1/110-61A, SENTHIL NAGAR,<br />
                SEERANAMPALAYAM, IDUVAI,<br />
                TIRUPPUR
              </p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-[12px] sm:gap-[16px] mb-[12px]">
                <Clock className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] text-[#C5A15D]" />
                <h3 className="font-serif font-bold text-[20px] sm:text-[26px] md:text-[28px] text-[#F5F5F5]">Business Hours</h3>
              </div>
              <div className="pl-[32px] sm:pl-[42px]">
                <div className="flex justify-between items-center border-b border-[rgba(255,255,255,0.05)] pb-[12px]">
                  <span className="font-sans text-[14px] sm:text-[16px] md:text-[18px] text-[#A3A3A3]">Monday - Sunday</span>
                  <span className="font-sans font-semibold text-[14px] sm:text-[16px] md:text-[18px] text-[#C5A15D]">24 Hours Open</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
