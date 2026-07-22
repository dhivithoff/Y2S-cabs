import Image from "next/image";
import { Users, Briefcase, Snowflake, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Headphones } from "lucide-react";

export default function FleetSection() {
  const fleet = [
    {
      name: "Jaguar XF",
      image: "/jaguar.png",
      seats: "4 Seats",
      luggage: "2 Large Bags",
      ac: "Yes",
      price: "₹3000 / Day",
      type: "Premium Luxury"
    },
    {
      name: "Innova Crysta",
      image: "/innova.png",
      seats: "6-7 Seats",
      luggage: "4 Bags",
      ac: "Yes",
      price: "₹2500 / Day",
      type: "Family & Outstation"
    }
  ];

  return (
    <section className="bg-[#161615] pt-[72px] pb-[64px] px-[24px] lg:px-[48px] flex flex-col items-center">
      <div className="w-full flex flex-col items-start max-w-[840px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-[28px]">
          <span className="font-sans font-medium text-[18px] tracking-[7px] text-[#C7A35E] uppercase mb-[18px]">
            OUR FLEET
          </span>
          <div className="w-[54px] h-[2px] bg-[#C7A35E]"></div>
        </div>

        {/* Heading */}
        <h2 className="font-serif font-bold text-[48px] lg:text-[64px] leading-[1.1] lg:leading-[66px] tracking-[-1px] max-w-[620px] mb-[26px]">
          <span className="block text-[#F6F6F5]">Premium Cars</span>
          <span className="block text-[#C7A35E]">For Your Comfort</span>
        </h2>

        {/* Description */}
        <p className="font-sans font-normal text-[18px] leading-[34px] max-w-[520px] text-[#D2D2CF] mb-[46px]">
          Well-maintained, sanitized and driven by professionals.
        </p>

        {/* Fleet Cards */}
        <div className="w-full flex flex-col gap-[18px]">
          {fleet.map((car, index) => (
            <div 
              key={index} 
              className="w-full lg:w-[840px] h-auto lg:h-[270px] bg-[#1F1F1D] rounded-[24px] border border-[rgba(255,255,255,0.06)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-[24px] flex flex-col lg:flex-row items-center gap-[24px] lg:gap-[0px]"
            >
              {/* Car Image (52% on desktop) */}
              <div className="w-full lg:w-[52%] h-[215px] relative flex-shrink-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-contain lg:object-left"
                />
              </div>

              {/* Vehicle Details (48% on desktop) */}
              <div className="w-full lg:w-[48%] flex flex-col items-start justify-center h-full">
                <h3 className="font-serif font-bold text-[34px] leading-[38px] text-[#F6F6F4] mb-[18px]">
                  {car.name}
                </h3>
                
                <div className="w-[48px] h-[2px] bg-[#C7A35E] mb-[22px]"></div>
                
                <div className="grid grid-cols-2 gap-[18px] mb-[24px] w-full">
                  <div className="flex items-center gap-[10px]">
                    <Users className="w-[18px] h-[18px] text-[#C7A35E]" />
                    <span className="font-sans font-normal text-[16px] text-[#D2D2CF]">{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <Briefcase className="w-[18px] h-[18px] text-[#C7A35E]" />
                    <span className="font-sans font-normal text-[16px] text-[#D2D2CF]">{car.luggage}</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <Snowflake className="w-[18px] h-[18px] text-[#C7A35E]" />
                    <span className="font-sans font-normal text-[16px] text-[#D2D2CF]">A/C Available</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <ShieldCheck className="w-[18px] h-[18px] text-[#C7A35E]" />
                    <span className="font-sans font-normal text-[16px] text-[#D2D2CF]">GPS Tracking</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/12345678900?text=Hi%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(car.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-[335px] h-[58px] bg-[#C7A35E] rounded-[14px] flex items-center justify-center gap-[14px] hover:bg-[#b89555] transition-colors"
                >
                  <MessageCircle className="w-[22px] h-[22px] text-[#171717]" />
                  <span className="font-sans font-semibold text-[18px] text-[#171717]">Book on WhatsApp</span>
                  <ArrowRight className="w-[20px] h-[20px] text-[#171717]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Card */}
        <div className="w-full lg:w-[840px] h-auto lg:h-[135px] bg-[#20201E] rounded-[24px] border border-[rgba(255,255,255,0.05)] p-[24px] mt-[18px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-full gap-y-[24px] lg:gap-y-0">
            {/* Trust 1 */}
            <div className="flex items-center justify-center lg:justify-start gap-[16px] px-[16px] lg:border-r border-[rgba(255,255,255,0.08)]">
              <ShieldCheck className="w-[40px] h-[40px] text-[#C7A35E] flex-shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <span className="font-sans font-medium text-[18px] text-[#F6F6F4]">Verified Drivers</span>
                <span className="font-sans font-normal text-[14px] leading-[22px] text-[#BDBDB8]">Police verified</span>
              </div>
            </div>
            
            {/* Trust 2 */}
            <div className="flex items-center justify-center lg:justify-start gap-[16px] px-[16px] lg:border-r border-[rgba(255,255,255,0.08)]">
              <Clock className="w-[40px] h-[40px] text-[#C7A35E] flex-shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <span className="font-sans font-medium text-[18px] text-[#F6F6F4]">On Time</span>
                <span className="font-sans font-normal text-[14px] leading-[22px] text-[#BDBDB8]">Zero delays</span>
              </div>
            </div>

            {/* Trust 3 */}
            <div className="flex items-center justify-center lg:justify-start gap-[16px] px-[16px] lg:border-r border-[rgba(255,255,255,0.08)]">
              <MapPin className="w-[40px] h-[40px] text-[#C7A35E] flex-shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <span className="font-sans font-medium text-[18px] text-[#F6F6F4]">Across City</span>
                <span className="font-sans font-normal text-[14px] leading-[22px] text-[#BDBDB8]">Any destination</span>
              </div>
            </div>

            {/* Trust 4 */}
            <div className="flex items-center justify-center lg:justify-start gap-[16px] px-[16px]">
              <Headphones className="w-[40px] h-[40px] text-[#C7A35E] flex-shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col text-left">
                <span className="font-sans font-medium text-[18px] text-[#F6F6F4]">24/7 Support</span>
                <span className="font-sans font-normal text-[14px] leading-[22px] text-[#BDBDB8]">Always available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
