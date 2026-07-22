"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";

type TripType = "one-way" | "round-trip" | "airport" | "hourly";
type VehicleType = "sedan" | "suv";

export default function BookRide() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: "one-way" as TripType,
    pickup: "",
    destination: "",
    vehicle: "sedan" as VehicleType,
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: ""
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleWhatsApp = () => {
    const text = `*🚖 New Booking Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Trip Type:* ${formData.tripType}\n*Pickup:* ${formData.pickup}\n*Destination:* ${formData.destination}\n*Vehicle:* ${formData.vehicle}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Notes:* ${formData.notes}\n\nPlease confirm my booking.`;
    window.open(`https://wa.me/12345678900?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#151514] pt-[120px] pb-[80px] px-[24px] items-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C7A35E]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>

      <div className="w-full flex flex-col items-center max-w-[860px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[48px]">
          <h1 className="font-serif font-bold text-[48px] lg:text-[66px] leading-[1.1] text-[#F6F6F4] mb-[16px]">
            Book Your Ride
          </h1>
          <p className="font-sans font-normal text-[18px] text-[#D2D2CF]">
            Complete the details below to book instantly via WhatsApp.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex justify-between mb-[48px] relative max-w-[600px] mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[rgba(255,255,255,0.05)] -translate-y-1/2 z-0"></div>
          <div className="absolute top-1/2 left-0 h-[2px] bg-[#C7A35E] -translate-y-1/2 transition-all duration-500 ease-in-out z-0" style={{ width: (((step - 1) / 3) * 100) + "%" }}></div>
          
          {[1, 2, 3, 4].map((i) => {
            const isActive = step >= i;
            const isCompleted = step > i;
            return (
              <div 
                key={i} 
                className={`w-[48px] h-[48px] rounded-full flex items-center justify-center font-sans font-medium text-[16px] transition-all duration-300 z-10 ${
                  isActive 
                    ? "bg-[#C7A35E] text-[#171717] shadow-[0_0_15px_rgba(197,161,93,0.4)]" 
                    : "bg-[#1F1F1D] border border-[rgba(255,255,255,0.05)] text-[#D2D2CF]"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-[24px] h-[24px]" /> : i}
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="w-full min-h-[500px] bg-[#1F1F1D] rounded-[28px] border border-[rgba(255,255,255,0.05)] shadow-[0_12px_28px_rgba(0,0,0,0.18)] p-[32px] lg:p-[48px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[32px]"
              >
                <h2 className="font-serif font-bold text-[34px] text-[#F6F6F4]">Trip Details</h2>
                
                {/* Trip Type */}
                <div>
                  <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">
                    Trip Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                    {["one-way", "round-trip", "airport", "hourly"].map((type) => {
                      const isActive = formData.tripType === type;
                      return (
                        <button
                          key={type}
                          onClick={() => updateForm("tripType", type)}
                          className={`h-[56px] rounded-[16px] font-sans font-medium text-[16px] capitalize transition-all ${
                            isActive 
                              ? "bg-[rgba(197,161,93,0.08)] border border-[#C7A35E] text-[#C7A35E]" 
                              : "bg-[#252523] border border-[rgba(255,255,255,0.04)] text-[#D2D2CF] hover:border-[rgba(255,255,255,0.1)]"
                          }`}
                        >
                          {type.replace("-", " ")}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div>
                    <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Pickup Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter pickup address" 
                      className="w-full h-[64px] bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] px-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors"
                      value={formData.pickup}
                      onChange={(e) => updateForm("pickup", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Destination</label>
                    <input 
                      type="text" 
                      placeholder="Enter destination" 
                      className="w-full h-[64px] bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] px-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors"
                      value={formData.destination}
                      onChange={(e) => updateForm("destination", e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-[16px] flex justify-end">
                  <button 
                    onClick={nextStep}
                    disabled={!formData.pickup || !formData.destination}
                    className="h-[64px] bg-[#C7A35E] rounded-[16px] px-[32px] flex items-center justify-center gap-[12px] font-sans font-semibold text-[20px] text-[#171717] hover:bg-[#b89555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step <ChevronRight className="w-[24px] h-[24px]" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[32px]"
              >
                <h2 className="font-serif font-bold text-[34px] text-[#F6F6F4]">Date & Time</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div>
                    <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Pickup Date</label>
                    <input 
                      type="date" 
                      className="w-full h-[64px] bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] px-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors color-scheme-dark"
                      style={{ colorScheme: 'dark' }}
                      value={formData.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Pickup Time</label>
                    <input 
                      type="time" 
                      className="w-full h-[64px] bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] px-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors color-scheme-dark"
                      style={{ colorScheme: 'dark' }}
                      value={formData.time}
                      onChange={(e) => updateForm("time", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Vehicle Preference</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    <button
                      onClick={() => updateForm("vehicle", "sedan")}
                      className={`p-[24px] rounded-[24px] flex flex-col items-start gap-[8px] transition-all text-left ${
                        formData.vehicle === "sedan" 
                          ? "bg-[rgba(197,161,93,0.08)] border-2 border-[#C7A35E]" 
                          : "bg-[#252523] border-2 border-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.1)]"
                      }`}
                    >
                      <span className={`font-serif font-bold text-[28px] leading-[32px] ${formData.vehicle === "sedan" ? "text-[#C7A35E]" : "text-[#F6F6F4]"}`}>Luxury Sedan</span>
                      <span className="font-sans font-normal text-[16px] text-[#BEBEB8]">Up to 4 passengers • 2 Bags</span>
                    </button>
                    <button
                      onClick={() => updateForm("vehicle", "suv")}
                      className={`p-[24px] rounded-[24px] flex flex-col items-start gap-[8px] transition-all text-left ${
                        formData.vehicle === "suv" 
                          ? "bg-[rgba(197,161,93,0.08)] border-2 border-[#C7A35E]" 
                          : "bg-[#252523] border-2 border-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.1)]"
                      }`}
                    >
                      <span className={`font-serif font-bold text-[28px] leading-[32px] ${formData.vehicle === "suv" ? "text-[#C7A35E]" : "text-[#F6F6F4]"}`}>Premium SUV</span>
                      <span className="font-sans font-normal text-[16px] text-[#BEBEB8]">Up to 6-7 passengers • 4 Bags</span>
                    </button>
                  </div>
                </div>

                <div className="mt-[16px] flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    className="h-[64px] bg-transparent border border-[#C7A35E] rounded-[16px] px-[32px] flex items-center justify-center font-sans font-semibold text-[20px] text-[#C7A35E] hover:bg-[rgba(197,161,93,0.08)] transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className="h-[64px] bg-[#C7A35E] rounded-[16px] px-[32px] flex items-center justify-center gap-[12px] font-sans font-semibold text-[20px] text-[#171717] hover:bg-[#b89555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step <ChevronRight className="w-[24px] h-[24px]" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[32px]"
              >
                <h2 className="font-serif font-bold text-[34px] text-[#F6F6F4]">Passenger Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div>
                    <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full h-[64px] bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] px-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter phone number" 
                      className="w-full h-[64px] bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] px-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors"
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans font-medium text-[14px] tracking-[1.8px] uppercase text-[#C7A35E] mb-[12px]">Additional Notes (Optional)</label>
                  <textarea 
                    placeholder="Flight number, extra luggage, etc." 
                    rows={4}
                    className="w-full bg-[#252523] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-[20px] font-sans text-[18px] text-white placeholder-[#BEBEB8] focus:border-[#C7A35E] focus:outline-none transition-colors resize-none"
                    value={formData.notes}
                    onChange={(e) => updateForm("notes", e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-[16px] flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    className="h-[64px] bg-transparent border border-[#C7A35E] rounded-[16px] px-[32px] flex items-center justify-center font-sans font-semibold text-[20px] text-[#C7A35E] hover:bg-[rgba(197,161,93,0.08)] transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.phone}
                    className="h-[64px] bg-[#C7A35E] rounded-[16px] px-[32px] flex items-center justify-center gap-[12px] font-sans font-semibold text-[20px] text-[#171717] hover:bg-[#b89555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Review Booking <ChevronRight className="w-[24px] h-[24px]" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-[32px]"
              >
                <div className="text-center mb-[16px]">
                  <h2 className="font-serif font-bold text-[34px] text-[#F6F6F4] mb-[8px]">Review & Confirm</h2>
                  <p className="font-sans font-normal text-[18px] text-[#D2D2CF]">Please review your details before confirming.</p>
                </div>
                
                <div className="bg-[#252523] rounded-[24px] border border-[rgba(255,255,255,0.04)] p-[32px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div>
                    <span className="font-sans font-medium text-[14px] tracking-[1.5px] uppercase text-[#BEBEB8] block mb-[8px]">Pickup</span>
                    <span className="font-sans font-medium text-[18px] text-white">{formData.pickup}</span>
                  </div>
                  <div>
                    <span className="font-sans font-medium text-[14px] tracking-[1.5px] uppercase text-[#BEBEB8] block mb-[8px]">Destination</span>
                    <span className="font-sans font-medium text-[18px] text-white">{formData.destination}</span>
                  </div>
                  <div>
                    <span className="font-sans font-medium text-[14px] tracking-[1.5px] uppercase text-[#BEBEB8] block mb-[8px]">Date & Time</span>
                    <span className="font-sans font-medium text-[18px] text-white">{formData.date} at {formData.time}</span>
                  </div>
                  <div>
                    <span className="font-sans font-medium text-[14px] tracking-[1.5px] uppercase text-[#BEBEB8] block mb-[8px]">Vehicle</span>
                    <span className="font-sans font-medium text-[18px] text-white capitalize">{formData.vehicle}</span>
                  </div>
                  <div className="md:col-span-2 pt-[24px] border-t border-[rgba(255,255,255,0.04)]">
                    <span className="font-sans font-medium text-[14px] tracking-[1.5px] uppercase text-[#BEBEB8] block mb-[8px]">Passenger</span>
                    <span className="font-sans font-medium text-[18px] text-white">{formData.name} ({formData.phone})</span>
                  </div>
                </div>

                <div className="mt-[16px] flex flex-col sm:flex-row gap-[16px] items-center justify-between">
                  <button 
                    onClick={prevStep}
                    className="w-full sm:w-auto h-[64px] bg-transparent border border-[#C7A35E] rounded-[16px] px-[32px] flex items-center justify-center font-sans font-semibold text-[20px] text-[#C7A35E] hover:bg-[rgba(197,161,93,0.08)] transition-colors"
                  >
                    Edit Details
                  </button>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto flex items-center justify-center gap-[12px] bg-[#C7A35E] text-[#171717] px-[40px] h-[64px] rounded-[16px] font-sans font-semibold text-[20px] hover:bg-[#b89555] transition-colors shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
                  >
                    <MessageCircle className="w-[24px] h-[24px]" />
                    Confirm on WhatsApp
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
