import { Shield, Clock, MapPin, Award } from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Availability",
      description: "We are always ready to serve you, day or night, ensuring you never miss a flight or appointment.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safe & Secure",
      description: "Our vehicles are GPS tracked and our drivers are thoroughly vetted and professionally trained.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Anywhere, Anytime",
      description: "From local city rides to intercity outstation travels, we cover all your transportation needs.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Fleet",
      description: "Travel in comfort and luxury with our well-maintained fleet of top-tier vehicles.",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Y2S Cabs?</h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto">
            We don't just offer rides; we offer an experience. Reliability, safety, and luxury are the cornerstones of our service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-secondary-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
