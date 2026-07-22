"use client";

import { MessageCircle, ArrowRight, Plane, MapPin, Map, Navigation, RefreshCw, Briefcase, ShieldCheck, Clock, Calendar, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Airport Transfer",
      description: "Hassle-free airport pickups & drops.",
      category: "Airport",
      categoryIcon: <Plane className="w-4 h-4 text-[#C5A15D]" />,
      features: [
        { name: "On Time", icon: <Briefcase className="w-3 h-3 text-[#A3A3A3]" /> },
        { name: "Safe", icon: <ShieldCheck className="w-3 h-3 text-[#A3A3A3]" /> }
      ],
      image: "/hero-mobile-bg.png", // Replace with an actual airport background image later
      link: "/book"
    },
    {
      title: "Local Taxi",
      description: "Comfortable rides within the city.",
      category: "Local",
      categoryIcon: <MapPin className="w-4 h-4 text-[#C5A15D]" />,
      features: [
        { name: "Anytime", icon: <MapPin className="w-3 h-3 text-[#A3A3A3]" /> },
        { name: "24/7", icon: <Clock className="w-3 h-3 text-[#A3A3A3]" /> }
      ],
      image: "/hero-mobile-bg.png", // Replace with an actual local city background image later
      link: "/book"
    },
    {
      title: "Outstation Taxi",
      description: "Explore nearby cities with complete comfort.",
      category: "Outstation",
      categoryIcon: <Map className="w-4 h-4 text-[#C5A15D]" />,
      features: [
        { name: "Long Distance", icon: <Car className="w-3 h-3 text-[#A3A3A3]" /> },
        { name: "Premium", icon: <ShieldCheck className="w-3 h-3 text-[#A3A3A3]" /> }
      ],
      image: "/hero-mobile-bg.png", // Replace with an actual highway background image later
      link: "/book"
    },
    {
      title: "One Way Trip",
      description: "Flexible one-way travel options.",
      category: "One Way",
      categoryIcon: <Navigation className="w-4 h-4 text-[#C5A15D]" />,
      features: [
        { name: "Cost Effective", icon: <Calendar className="w-3 h-3 text-[#A3A3A3]" /> },
        { name: "No Return Fare", icon: <ShieldCheck className="w-3 h-3 text-[#A3A3A3]" /> }
      ],
      image: "/hero-mobile-bg.png", // Replace with an actual road background image later
      link: "/book"
    }
  ];

  return (
    <section id="services" className="bg-[#0a0a0a] pt-[80px] pb-[80px] px-[24px] lg:px-[40px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center max-w-[1200px]">
        
        {/* Header Layout Structure */}
        <div className="w-full flex flex-col items-center text-center mb-[56px]">
          {/* Service Badge */}
          <div className="w-[182px] h-[36px] rounded-full bg-transparent border border-[#C5A15D]/40 flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(197,161,93,0.15)]">
            <span className="font-sans font-medium text-[13px] tracking-[5px] text-[#C5A15D] uppercase ml-[5px]">OUR SERVICES</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-[48px] lg:text-[56px] leading-[1.1] tracking-[-1px] mb-[20px]">
            <span className="text-[#F5F5F5]">Travel </span>
            <span className="text-[#C5A15D]">Your Way</span>
          </h2>

          {/* Description */}
          <p className="font-sans font-normal text-[18px] leading-[30px] w-full max-w-[450px] text-[#D2D2CF]">
            Choose the service that suits your journey. We'll take care of the rest.
          </p>
        </div>

        {/* Service Grid - Compact Size */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[24px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="w-full h-[360px] rounded-[24px] bg-[#111111] overflow-hidden relative group flex flex-col border border-[rgba(255,255,255,0.05)]"
            >
              {/* Background Image full cover */}
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-0"
              />
              
              {/* Gradient Overlay bottom to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10"></div>

              <div className="relative z-20 flex flex-col h-full p-[24px]">
                {/* Top Badge */}
                <div className="w-max h-[32px] rounded-full bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.1)] flex items-center px-[12px] gap-[8px]">
                  {service.categoryIcon}
                  <span className="font-sans font-medium text-[13px] text-[#F5F5F5]">{service.category}</span>
                </div>
                
                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Bottom Content */}
                <div>
                  <h3 className="font-serif font-bold text-[28px] text-[#F5F5F5] mb-[8px]">
                    {service.title}
                  </h3>
                  <p className="font-sans font-normal text-[15px] leading-[22px] text-[#A3A3A3] mb-[20px] max-w-[220px]">
                    {service.description}
                  </p>
                  
                  {/* Features & Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px]">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="h-[28px] rounded-full bg-transparent border border-[rgba(255,255,255,0.15)] px-[12px] flex items-center gap-[6px]">
                          {feature.icon}
                          <span className="font-sans font-normal text-[12px] text-[#D2D2CF]">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={service.link}
                      className="w-[42px] h-[42px] rounded-full border border-[#C5A15D] flex items-center justify-center hover:bg-[#C5A15D]/10 transition-colors flex-shrink-0"
                    >
                      <ArrowRight className="w-[18px] h-[18px] text-[#C5A15D]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Round Trip Wide Card */}
        <div className="w-full h-auto md:h-[220px] rounded-[24px] bg-[#111111] overflow-hidden relative group flex flex-col md:flex-row mb-[24px] border border-[rgba(255,255,255,0.05)]">
          {/* Background Image - On top for mobile, on right for desktop */}
          <div className="w-full h-[180px] md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[60%] md:h-full z-0 relative">
             <Image 
                src="/innova.png" 
                alt="Round Trip Vehicle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover md:object-left"
             />
             {/* Gradient fade to left on desktop */}
             <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
             {/* Gradient fade from bottom to top for mobile */}
             <div className="md:hidden absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-[#111111] to-transparent z-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center h-full p-[24px] md:p-[32px] w-full md:w-[60%] flex-grow">
            <div className="flex items-start gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-full border border-[#C5A15D] flex items-center justify-center flex-shrink-0 mt-[4px]">
                <RefreshCw className="w-[20px] h-[20px] text-[#C5A15D]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif font-bold text-[28px] text-[#F5F5F5] mb-[8px]">
                  Round Trip
                </h3>
                <p className="font-sans font-normal text-[15px] leading-[22px] text-[#A3A3A3] mb-[16px] max-w-[240px]">
                  Perfect for your planned return journeys.
                </p>
                <div className="flex gap-[8px]">
                  <div className="h-[28px] rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.15)] px-[12px] flex items-center gap-[6px]">
                    <Calendar className="w-[12px] h-[12px] text-[#A3A3A3]" />
                    <span className="font-sans font-normal text-[12px] text-[#D2D2CF]">Your Schedule</span>
                  </div>
                  <div className="h-[28px] rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.15)] px-[12px] flex items-center gap-[6px]">
                    <Car className="w-[12px] h-[12px] text-[#A3A3A3]" />
                    <span className="font-sans font-normal text-[12px] text-[#D2D2CF]">Same Driver</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow on mobile absolute bottom right, on desktop absolute bottom right of card */}
            <Link 
              href="/book"
              className="absolute bottom-[24px] md:bottom-[32px] right-[24px] md:right-[32px] w-[42px] h-[42px] rounded-full border border-[rgba(255,255,255,0.3)] bg-black/40 flex items-center justify-center hover:bg-[#C5A15D]/20 transition-colors z-20"
            >
              <ArrowRight className="w-[18px] h-[18px] text-[#A3A3A3]" />
            </Link>
          </div>
        </div>

        {/* WhatsApp CTA Banner */}
        <div className="w-full h-auto min-h-[100px] rounded-[24px] bg-[#111111] border border-[rgba(255,255,255,0.05)] p-[24px] flex flex-col md:flex-row items-center justify-between gap-[20px]">
          
          <div className="flex items-center gap-[20px] w-full md:w-auto">
            <div className="w-[52px] h-[52px] rounded-full border border-[#25D366]/30 flex items-center justify-center bg-[rgba(37,211,102,0.05)] flex-shrink-0">
              <MessageCircle className="w-[28px] h-[28px] text-[#25D366]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[22px] text-[#F5F5F5]">Need a custom trip?</span>
              <span className="font-sans text-[15px] text-[#A3A3A3]">Chat with us on WhatsApp</span>
            </div>
          </div>

          <Link 
            href="/book"
            className="w-full md:w-auto h-[48px] rounded-[12px] bg-[#C5A15D] px-[24px] flex items-center justify-center gap-[12px] hover:bg-[#b89555] transition-colors shadow-[0_4px_14px_rgba(197,161,93,0.3)]"
          >
            <MessageCircle className="w-[18px] h-[18px] text-[#111111]" />
            <span className="font-sans font-medium text-[15px] text-[#111111]">Book Now</span>
            <ArrowRight className="w-[18px] h-[18px] text-[#111111]" />
          </Link>

        </div>

      </div>
    </section>
  );
}
