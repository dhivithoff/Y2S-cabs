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
      image: "/airport.png",
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
      image: "/temple.png",
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
      image: "/outstation.png",
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
      image: "/oneway.png",
      link: "/book"
    }
  ];

  return (
    <section id="services" className="bg-[#0a0a0a] pt-[80px] pb-[80px] px-[24px] lg:px-[40px] flex flex-col items-center overflow-hidden">
      <div className="w-full flex flex-col items-center max-w-[1200px]">
        
        {/* Header Layout Structure */}
        <div className="w-full flex flex-col items-center text-center mb-[40px] md:mb-[56px]">
          {/* Service Badge */}
          <div className="w-max px-[18px] h-[36px] rounded-full bg-transparent border border-[#C5A15D]/40 flex items-center justify-center mb-[16px] shadow-[0_0_15px_rgba(197,161,93,0.15)]">
            <span className="font-sans font-medium text-[12px] md:text-[13px] tracking-[4px] text-[#C5A15D] uppercase">
              Cab Services in Tiruppur
            </span>
          </div>

          <h2 className="font-serif font-bold text-[26px] sm:text-[34px] md:text-[42px] text-[#F5F5F5] mb-[8px]">
            Airport, Local & Outstation Taxi Booking
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] text-[#A3A3A3] max-w-[580px]">
            Reliable 24/7 cab service in Tiruppur for airport transfers, local rides, one-way cabs, and outstation family trips.
          </p>
        </div>

        {/* Service Grid - Compact Size */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px] mb-[24px]">
          {services.map((service, index) => (
            <div 
              key={index}
              className="w-full h-[180px] md:h-[360px] rounded-[16px] md:rounded-[24px] bg-[#111111] overflow-hidden relative group flex flex-col border border-[rgba(255,255,255,0.05)]"
            >
              {/* Background Image full cover */}
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-0"
              />
              
              {/* Gradient Overlay bottom to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10"></div>

              <div className="relative z-20 flex flex-col h-full p-[14px] sm:p-[16px] md:p-[24px]">
                {/* Top Badge */}
                <div className="w-max h-[26px] sm:h-[28px] md:h-[32px] rounded-full bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.1)] flex items-center px-[8px] sm:px-[10px] md:px-[12px] gap-[4px] sm:gap-[6px] md:gap-[8px]">
                  {service.categoryIcon}
                  <span className="font-sans font-medium text-[10px] sm:text-[11px] md:text-[13px] text-[#F5F5F5]">{service.title}</span>
                </div>
                
                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Mobile Bottom Content (Only on Mobile screens, Windows version unchanged) */}
                <div className="md:hidden flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-[6px]">
                    <div className="flex flex-col">
                      <h3 className="font-serif font-bold text-[14px] sm:text-[16px] text-[#F5F5F5] leading-[1.2] mb-[2px]">
                        {service.title}
                      </h3>
                      <p className="font-sans font-normal text-[10px] sm:text-[11px] leading-[14px] text-[#D2D2CF] line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <Link 
                      href={service.link}
                      className="w-[28px] h-[28px] rounded-full border border-[#C5A15D] flex items-center justify-center flex-shrink-0 bg-[#111111]/70 mb-[2px]"
                    >
                      <ArrowRight className="w-[12px] h-[12px] text-[#C5A15D]" />
                    </Link>
                  </div>
                </div>

                {/* Bottom Content - Hidden on Mobile / Shown on Windows */}
                <div className="hidden md:flex flex-col">
                  <div className="flex items-start justify-between gap-[12px] mb-[16px]">
                    <div className="flex flex-col">
                      <h3 className="font-serif font-bold text-[20px] md:text-[28px] text-[#F5F5F5] mb-[4px] md:mb-[8px] leading-[1.2]">
                        {service.title}
                      </h3>
                      <p className="font-sans font-normal text-[12px] md:text-[15px] leading-[18px] md:leading-[22px] text-[#A3A3A3] max-w-[220px]">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Arrow Button */}
                    <Link 
                      href={service.link}
                      className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full border border-[#C5A15D] flex items-center justify-center hover:bg-[#C5A15D]/10 transition-colors flex-shrink-0 mt-[4px]"
                    >
                      <ArrowRight className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#C5A15D]" />
                    </Link>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-[6px] md:gap-[8px]">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="h-[24px] md:h-[28px] rounded-full bg-transparent border border-[rgba(255,255,255,0.15)] px-[8px] md:px-[12px] flex items-center gap-[4px] md:gap-[6px]">
                        {feature.icon}
                        <span className="font-sans font-normal text-[10px] md:text-[12px] text-[#D2D2CF] whitespace-nowrap">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Round Trip Wide Card */}
        <div className="w-full h-[180px] md:h-[220px] rounded-[16px] md:rounded-[24px] bg-[#111111] overflow-hidden relative group flex flex-col md:flex-row mb-[24px] border border-[rgba(255,255,255,0.05)]">
          {/* Background Image - Full cover for mobile, right side for desktop */}
          <div className="absolute inset-0 md:right-0 md:left-auto md:w-[60%] md:h-full z-0">
             <Image 
                src="/roundtrip.png" 
                alt="Round Trip Vehicle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover md:object-left"
             />
             {/* Gradient fade to left on desktop */}
             <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
             {/* Gradient fade from bottom to top for mobile */}
             <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent z-10"></div>
          </div>

          {/* Mobile Top Badge */}
          <div className="md:hidden absolute top-[14px] left-[14px] z-20 w-max h-[26px] rounded-full bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.1)] flex items-center px-[10px] gap-[6px]">
            <RefreshCw className="w-[12px] h-[12px] text-[#C5A15D]" />
            <span className="font-sans font-medium text-[11px] text-[#F5F5F5]">Round Trip</span>
          </div>

          {/* Mobile Content for Round Trip */}
          <div className="md:hidden relative z-20 flex flex-col justify-end h-full p-[14px]">
            <div className="flex items-end justify-between gap-[10px]">
              <div className="flex flex-col">
                <h3 className="font-serif font-bold text-[16px] text-[#F5F5F5] leading-[1.2] mb-[2px]">
                  Round Trip
                </h3>
                <p className="font-sans font-normal text-[11px] leading-[14px] text-[#D2D2CF] max-w-[230px]">
                  Perfect for your planned return journeys with same driver & schedule.
                </p>
              </div>
              <Link 
                href="/book"
                className="w-[30px] h-[30px] rounded-full border border-[#C5A15D] flex items-center justify-center flex-shrink-0 bg-[#111111]/80 mb-[2px]"
              >
                <ArrowRight className="w-[13px] h-[13px] text-[#C5A15D]" />
              </Link>
            </div>
          </div>

          {/* Desktop Content - Hidden on Mobile */}
          <div className="hidden md:flex relative z-20 flex-col justify-center h-full p-[24px] md:p-[32px] w-full md:w-[60%] flex-grow">
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
            
            {/* Desktop Arrow */}
            <Link 
              href="/book"
              className="absolute bottom-[32px] right-[32px] w-[42px] h-[42px] rounded-full border border-[rgba(255,255,255,0.3)] bg-black/40 flex items-center justify-center hover:bg-[#C5A15D]/20 transition-colors z-20"
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
