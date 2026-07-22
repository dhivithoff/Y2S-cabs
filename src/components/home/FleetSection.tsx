import Image from "next/image";
import { Users, Briefcase, Snowflake, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Headphones } from "lucide-react";

export default function FleetSection() {
  const fleet = [
    {
      name: "Jaguar XF",
      image: "/jaguar.png",
      seats: "4 Seats",
      bags: "2 Bags",
      ac: "AC",
      desc: "Premium Sedan",
    },
    {
      name: "Innova Crysta",
      image: "/innova.png",
      seats: "7 Seats",
      bags: "5 Bags",
      ac: "AC",
      desc: "Spacious & Comfortable",
    },
    {
      name: "Sedan",
      image: "/hero-mobile-bg.png", // fallback placeholder
      seats: "4 Seats",
      bags: "3 Bags",
      ac: "AC",
      desc: "Ideal for City Rides",
    },
    {
      name: "SUV",
      image: "/hero-mobile-bg.png", // fallback placeholder
      seats: "6 Seats",
      bags: "4 Bags",
      ac: "AC",
      desc: "Powerful & Spacious",
    }
  ];

  return (
    <section className="bg-[#111111] pt-[72px] pb-[64px] px-[24px] lg:px-[48px] flex flex-col items-center font-sans">
      <div className="w-full flex flex-col items-center max-w-[840px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[28px]">
          <span className="font-sans font-medium text-[14px] md:text-[16px] tracking-[6px] text-[#C5A15D] uppercase mb-[16px]">
            OUR FLEET
          </span>
          <div className="w-[48px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
          
          <h2 className="font-serif font-bold text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-1px] max-w-[620px] mb-[24px]">
            <span className="block text-[#F6F6F5]">Premium Cars</span>
            <span className="block text-[#C5A15D]">For Your Comfort</span>
          </h2>
          
          <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-[#D2D2CF]">
            Well-maintained, sanitized and<br />driven by professionals.
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="w-full flex flex-col gap-[20px] mb-[20px]">
          {fleet.map((car, index) => (
            <div 
              key={index} 
              className="w-full lg:w-[840px] h-auto lg:h-[270px] bg-[#161615] rounded-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_12px_28px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Car Image (Left Half) */}
              <div className="w-full lg:w-[50%] h-[200px] lg:h-[270px] relative flex-shrink-0 bg-black/20">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
                {/* Subtle gradient overlay to blend image into card on desktop */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#161615] to-transparent z-10"></div>
                <div className="lg:hidden absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-[#161615] to-transparent z-10"></div>
              </div>

              {/* Vehicle Details (Right Half) */}
              <div className="w-full lg:w-[50%] flex flex-col justify-center px-[32px] py-[32px] lg:py-0 relative z-20">
                <h3 className="font-serif font-bold text-[32px] md:text-[36px] text-[#F6F6F4] mb-[12px]">
                  {car.name}
                </h3>
                
                <div className="w-[40px] h-[2px] bg-[#C5A15D] mb-[24px]"></div>
                
                {/* Specs Grid */}
                <div className="flex flex-col gap-[16px] mb-[28px]">
                  {/* Row 1 */}
                  <div className="flex items-center">
                    <div className="flex items-center gap-[10px] w-[110px]">
                      <Users className="w-[18px] h-[18px] text-[#C5A15D]" strokeWidth={2} />
                      <span className="font-sans font-normal text-[15px] text-[#D2D2CF]">{car.seats}</span>
                    </div>
                    
                    <div className="flex items-center gap-[10px] pl-[12px]">
                      <Briefcase className="w-[18px] h-[18px] text-[#C5A15D]" strokeWidth={2} />
                      <span className="font-sans font-normal text-[15px] text-[#D2D2CF]">{car.bags}</span>
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="flex items-center mt-[12px]">
                    <div className="flex items-center gap-[10px] w-[110px]">
                      <Snowflake className="w-[18px] h-[18px] text-[#C5A15D]" strokeWidth={2} />
                      <span className="font-sans font-normal text-[15px] text-[#D2D2CF]">{car.ac}</span>
                    </div>
                    <span className="text-[rgba(255,255,255,0.15)] mx-[12px]">|</span>
                    <div className="flex items-center gap-[10px]">
                      <span className="font-sans font-normal text-[15px] text-[#D2D2CF]">{car.desc}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a 
                  href={`https://wa.me/12345678900?text=Hi%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(car.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-max h-[44px] md:h-[48px] bg-[#C5A15D] rounded-[10px] items-center gap-[48px] px-[20px] hover:bg-[#b89555] transition-colors"
                >
                  <div className="flex items-center gap-[12px]">
                    <MessageCircle className="w-[20px] h-[20px] text-[#111111]" strokeWidth={1.5} />
                    <span className="font-sans font-medium text-[15px] text-[#111111]">Book on WhatsApp</span>
                  </div>
                  <ArrowRight className="w-[18px] h-[18px] text-[#111111]" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Card */}
        <div className="w-full lg:w-[840px] bg-[#161615] rounded-[24px] border border-[rgba(255,255,255,0.06)] shadow-[0_12px_28px_rgba(0,0,0,0.4)] p-[32px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[32px] md:gap-y-0 relative">
            
            {/* Divider lines for desktop */}
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[25%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[75%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            
            {/* Divider line for mobile (2x2 grid) */}
            <div className="md:hidden absolute top-[10%] bottom-[55%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>
            <div className="md:hidden absolute top-[55%] bottom-[10%] left-[50%] w-[1px] bg-[rgba(255,255,255,0.06)]"></div>

            {/* Trust 1 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <ShieldCheck className="w-[36px] h-[36px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-normal text-[14px] text-[#A3A3A3] leading-[20px]">Safe & Secure</span>
              <span className="font-sans font-medium text-[14px] text-[#D2D2CF] leading-[20px]">Verified Drivers</span>
            </div>
            
            {/* Trust 2 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <Clock className="w-[36px] h-[36px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-normal text-[14px] text-[#A3A3A3] leading-[20px]">On Time</span>
              <span className="font-sans font-medium text-[14px] text-[#D2D2CF] leading-[20px]">Every Time</span>
            </div>

            {/* Trust 3 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <MapPin className="w-[36px] h-[36px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-normal text-[14px] text-[#A3A3A3] leading-[20px]">Across City</span>
              <span className="font-sans font-medium text-[14px] text-[#D2D2CF] leading-[20px]">& Outstation</span>
            </div>

            {/* Trust 4 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <Headphones className="w-[36px] h-[36px] text-[#C5A15D] mb-[12px]" strokeWidth={1.2} />
              <span className="font-sans font-normal text-[14px] text-[#A3A3A3] leading-[20px]">24/7 Support</span>
              <span className="font-sans font-medium text-[14px] text-[#D2D2CF] leading-[20px]">Always Available</span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
