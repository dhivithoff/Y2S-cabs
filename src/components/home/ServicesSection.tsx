import { Plane, Car, Map, Briefcase, Heart, Calendar } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-primary" />,
      title: "Airport Transfers",
      description: "Punctual and comfortable rides to and from the airport. Never miss a flight with our guaranteed on-time service.",
      link: "/services#airport"
    },
    {
      icon: <Map className="w-8 h-8 text-primary" />,
      title: "Outstation Taxi",
      description: "Explore new cities with our premium outstation cabs. Safe, comfortable, and driven by experts.",
      link: "/services#outstation"
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Local City Rides",
      description: "Navigate the city in style. Perfect for shopping, meetings, or simply exploring the town.",
      link: "/services#local"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Corporate Travel",
      description: "Impress your clients and ensure your executives travel with the highest level of professionalism.",
      link: "/services#corporate"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Wedding Cars",
      description: "Make your special day even more memorable with our decorated luxury wedding car rentals.",
      link: "/services#wedding"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Hourly Rentals",
      description: "Keep the car as long as you need. Ideal for multiple stops without the hassle of rebooking.",
      link: "/services#hourly"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold">Premium Transportation <br /> For Every Occasion</h3>
          </div>
          <Link href="/services" className="inline-flex items-center justify-center border-b-2 border-primary text-foreground font-semibold hover:text-primary pb-1 transition-colors">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border group hover:border-primary transition-all duration-300 hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500">
                {service.icon}
              </div>
              <div className="bg-background w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-inner">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-secondary-foreground mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>
              <Link href={service.link} className="text-primary font-semibold hover:underline relative z-10">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
