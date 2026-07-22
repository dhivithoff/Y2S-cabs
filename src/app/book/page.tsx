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
    const text = "*🚖 New Booking Request*\n\n*Name:* " + formData.name + "\n*Phone:* " + formData.phone + "\n*Trip Type:* " + formData.tripType + "\n*Pickup:* " + formData.pickup + "\n*Destination:* " + formData.destination + "\n*Vehicle:* " + formData.vehicle + "\n*Date:* " + formData.date + "\n*Time:* " + formData.time + "\n*Notes:* " + formData.notes + "\n\nPlease confirm my booking.";
    window.open("https://wa.me/12345678900?text=" + encodeURIComponent(text), "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Book Your Ride</h1>
          <p className="text-secondary-foreground">Complete the details below to book instantly via WhatsApp.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary -z-10 -translate-y-1/2 rounded-full"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 rounded-full transition-all duration-300" style={{ width: (((step - 1) / 3) * 100) + "%" }}></div>
          
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={"w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 " + (step >= i ? "bg-primary text-primary-foreground" : "bg-card border-2 border-secondary text-secondary-foreground")}>
              {step > i ? <CheckCircle2 className="w-6 h-6" /> : i}
            </div>
          ))}
        </div>

        {/* Form Steps */}
        <div className="bg-card p-6 md:p-10 rounded-3xl border border-border shadow-2xl relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-2xl font-bold mb-4">Trip Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-3">Trip Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["one-way", "round-trip", "airport", "hourly"].map((type) => (
                      <button
                        key={type}
                        onClick={() => updateForm("tripType", type)}
                        className={"py-3 px-4 rounded-xl border text-sm font-medium capitalize transition-all " + (formData.tripType === type ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 text-foreground")}
                      >
                        {type.replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-foreground mb-2">Pickup Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter pickup address" 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary"
                      value={formData.pickup}
                      onChange={(e) => updateForm("pickup", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-foreground mb-2">Destination</label>
                    <input 
                      type="text" 
                      placeholder="Enter destination" 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary"
                      value={formData.destination}
                      onChange={(e) => updateForm("destination", e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={nextStep}
                    disabled={!formData.pickup || !formData.destination}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
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
                className="flex flex-col gap-6"
              >
                <h2 className="text-2xl font-bold mb-4">Date & Time</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-foreground mb-2">Pickup Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary color-scheme-dark"
                      value={formData.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-foreground mb-2">Pickup Time</label>
                    <input 
                      type="time" 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary color-scheme-dark"
                      value={formData.time}
                      onChange={(e) => updateForm("time", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-3">Vehicle Preference</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => updateForm("vehicle", "sedan")}
                      className={"p-4 rounded-xl border flex flex-col items-start gap-2 transition-all " + (formData.vehicle === "sedan" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 text-foreground")}
                    >
                      <span className="font-bold text-lg">Luxury Sedan</span>
                      <span className="text-sm opacity-80">Up to 4 passengers</span>
                    </button>
                    <button
                      onClick={() => updateForm("vehicle", "suv")}
                      className={"p-4 rounded-xl border flex flex-col items-start gap-2 transition-all " + (formData.vehicle === "suv" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 text-foreground")}
                    >
                      <span className="font-bold text-lg">Premium SUV</span>
                      <span className="text-sm opacity-80">Up to 6-7 passengers</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button 
                    onClick={prevStep}
                    className="px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
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
                className="flex flex-col gap-6"
              >
                <h2 className="text-2xl font-bold mb-4">Passenger Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-foreground mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary"
                      value={formData.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-foreground mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter phone number" 
                      className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary"
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-foreground mb-2">Additional Notes (Optional)</label>
                  <textarea 
                    placeholder="Flight number, extra luggage, etc." 
                    rows={3}
                    className="w-full bg-background border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary resize-none"
                    value={formData.notes}
                    onChange={(e) => updateForm("notes", e.target.value)}
                  ></textarea>
                </div>

                <div className="mt-8 flex justify-between">
                  <button 
                    onClick={prevStep}
                    className="px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={!formData.name || !formData.phone}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    Review Booking <ChevronRight className="w-5 h-5" />
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
                className="flex flex-col gap-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Review & Confirm</h2>
                  <p className="text-secondary-foreground">Please review your details before confirming.</p>
                </div>
                
                <div className="bg-background rounded-2xl p-6 border border-border grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-secondary-foreground block mb-1">Pickup</span>
                    <span className="font-medium text-foreground text-base">{formData.pickup}</span>
                  </div>
                  <div>
                    <span className="text-secondary-foreground block mb-1">Destination</span>
                    <span className="font-medium text-foreground text-base">{formData.destination}</span>
                  </div>
                  <div>
                    <span className="text-secondary-foreground block mb-1">Date & Time</span>
                    <span className="font-medium text-foreground text-base">{formData.date} at {formData.time}</span>
                  </div>
                  <div>
                    <span className="text-secondary-foreground block mb-1">Vehicle</span>
                    <span className="font-medium text-foreground text-base capitalize">{formData.vehicle}</span>
                  </div>
                  <div className="md:col-span-2 pt-4 border-t border-border mt-2">
                    <span className="text-secondary-foreground block mb-1">Passenger</span>
                    <span className="font-medium text-foreground text-base">{formData.name} ({formData.phone})</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button 
                    onClick={prevStep}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                  >
                    Edit Details
                  </button>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#20b858] transition-all shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
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
