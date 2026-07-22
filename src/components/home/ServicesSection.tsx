import { MessageCircle, ArrowRight, ArrowUpRight, CheckCircle2, ArrowDownUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Airport Transfer",
      description: "Punctual and comfortable rides to and from the airport. Never miss a flight.",
      category: "Airport",
      features: ["On Time", "Premium"],
      image: "/hero-mobile-bg.png", // Placeholder
      link: "/services#airport"
    },
    {
      title: "Local Taxi",
      description: "Navigate the city in style. Perfect for shopping, meetings, or town exploration.",
      category: "Local",
      features: ["Safe", "24/7"],
      image: "/hero-mobile-bg.png", // Placeholder
      link: "/services#local"
    },
    {
      title: "Outstation Taxi",
      description: "Explore new cities with our premium cabs. Safe, comfortable, and driven by experts.",
      category: "Outstation",
      features: ["Verified", "Safe"],
      image: "/hero-mobile-bg.png", // Placeholder
      link: "/services#outstation"
    },
    {
      title: "One Way Trip",
      description: "Pay only for the drop. Economical premium travel for your one-way journeys.",
      category: "One Way",
      features: ["Affordable", "Fast"],
      image: "/hero-mobile-bg.png", // Placeholder
      link: "/services#oneway"
    }
  ];

  return (
    <section className="bg-[#151514] pt-[64px] pb-[56px] px-[24px] lg:px-[40px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center max-w-[860px]">
        
        {/* Header Layout Structure */}
        <div className="w-full flex flex-col items-start text-left mb-[44px]">
          {/* Service Badge */}
          <div className="w-[182px] h-[48px] rounded-full bg-[rgba(197,161,93,0.08)] border border-[#C7A35E] flex items-center justify-center mb-[24px]">
            <span className="font-sans font-medium text-[18px] tracking-[7px] text-[#C7A35E] uppercase ml-[7px]">OUR SERVICES</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-[48px] lg:text-[66px] leading-[1.1] lg:leading-[68px] tracking-[-1px] w-full max-w-[620px] mb-[24px]">
            <span className="block text-[#F6F6F4]">Travel</span>
            <span className="block text-[#C7A35E]">Your Way</span>
          </h2>

          {/* Description */}
          <p className="font-sans font-normal text-[18px] leading-[34px] w-full max-w-[600px] text-[#D2D2CF]">
            Choose the service that suits your journey. We'll take care of the rest.
          </p>
        </div>

        {/* Service Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[24px] gap-y-[28px] mb-[28px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="w-full lg:w-[415px] h-auto lg:h-[470px] rounded-[28px] bg-[#1F1F1D] border border-[rgba(255,255,255,0.05)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] overflow-hidden relative group flex flex-col"
            >
              {/* Card Hero Image */}
              <div className="w-full h-[220px] relative flex-shrink-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
                
                {/* Category Badge */}
                <div className="absolute top-[18px] left-[18px] w-[128px] h-[42px] rounded-full bg-[rgba(28,28,26,0.90)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center z-10">
                  <span className="font-sans font-medium text-[16px] text-white">{service.category}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="flex flex-col flex-grow px-[22px] pt-[22px] pb-[32px] relative">
                <h3 className="font-serif font-bold text-[34px] leading-[38px] text-[#F6F6F4] mb-[12px]">
                  {service.title}
                </h3>
                
                <p className="font-sans font-normal text-[16px] leading-[30px] w-full max-w-[290px] text-[#D2D2CF] mb-[24px]">
                  {service.description}
                </p>

                {/* Feature Pills */}
                <div className="flex items-center gap-[12px] mt-auto">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="h-[34px] rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] px-[16px] flex items-center justify-center gap-[6px]">
                      <CheckCircle2 className="w-[16px] h-[16px] text-[#C7A35E]" />
                      <span className="font-sans text-[14px] text-[#D2D2CF]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow Button */}
                <Link 
                  href={service.link}
                  className="absolute bottom-[22px] right-[22px] w-[62px] h-[62px] rounded-full border border-[#C7A35E] bg-transparent flex items-center justify-center hover:bg-[#C7A35E]/10 transition-colors z-20"
                >
                  <ArrowUpRight className="w-[24px] h-[24px] text-[#C7A35E]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Wide Card (Round Trip) */}
        <div className="w-full lg:w-[860px] h-auto lg:h-[220px] rounded-[28px] bg-[#1F1F1D] border border-[rgba(255,255,255,0.05)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex flex-col lg:flex-row overflow-hidden mb-[28px]">
          {/* Left Content (45%) */}
          <div className="w-full lg:w-[45%] h-full flex flex-col justify-center p-[28px] lg:p-[40px]">
            <div className="w-[72px] h-[72px] rounded-full bg-[rgba(197,161,93,0.08)] border border-[rgba(197,161,93,0.18)] flex items-center justify-center mb-[20px]">
              <ArrowDownUp className="w-[34px] h-[34px] text-[#C7A35E]" />
            </div>
            <h3 className="font-serif font-bold text-[36px] text-[#F6F6F4] mb-[16px]">Round Trip</h3>
            <Link 
              href="/services#roundtrip"
              className="flex items-center gap-[12px] text-[#C7A35E] font-sans font-medium text-[16px] hover:underline"
            >
              Learn More
              <ArrowRight className="w-[20px] h-[20px]" />
            </Link>
          </div>
          {/* Vehicle Image (55%) */}
          <div className="w-full lg:w-[55%] h-[200px] lg:h-full relative">
             <Image 
                src="/innova.png" 
                alt="Round Trip Vehicle"
                fill
                className="object-cover lg:object-left"
             />
          </div>
        </div>

        {/* WhatsApp CTA Banner */}
        <div className="w-full lg:w-[860px] h-auto lg:h-[140px] bg-[#1E1E1C] rounded-[28px] border border-[rgba(255,255,255,0.05)] p-[28px] flex flex-col lg:flex-row items-center justify-between gap-[24px]">
          {/* Left Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[8px]">
            <h3 className="font-serif font-bold text-[34px] text-[#F6F6F4]">Need a custom trip?</h3>
            <p className="font-sans font-normal text-[18px] text-[#CFCFCB]">Our support team is available 24/7 to assist you.</p>
          </div>
          
          {/* CTA Button */}
          <a 
            href="https://wa.me/12345678900?text=Hi%2C%20I%20would%20like%20to%20plan%20a%20custom%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-[350px] h-[64px] bg-[#C7A35E] rounded-[16px] flex items-center justify-center gap-[12px] hover:bg-[#b89555] transition-colors flex-shrink-0 shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
          >
            <MessageCircle className="w-[24px] h-[24px] text-[#171717]" />
            <span className="font-sans font-semibold text-[20px] text-[#171717]">Book on WhatsApp</span>
            <ArrowRight className="w-[22px] h-[22px] text-[#171717]" />
          </a>
        </div>

      </div>
    </section>
  );
}
