import { PhoneCall, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Contact Us | Y2S Cabs & Travels",
  description: "Get in touch with Y2S Cabs & Travels. We are available 24/7 for booking inquiries, support, and feedback.",
};

export default function ContactPage() {
  return (
    <>
    <div className="flex flex-col min-h-screen pt-[120px] pb-[80px]">
      <section className="bg-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <span className="font-sans font-medium text-[18px] tracking-[7px] text-[#C5A15D] uppercase">SUPPORT</span>
            <div className="w-[54px] h-[2px] bg-[#C5A15D]"></div>
          </div>
          
          <h1 className="font-serif font-bold text-[48px] lg:text-[66px] leading-[1.1] text-[#F6F6F4] mb-[48px]">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Get In Touch</h2>
                <p className="text-secondary-foreground leading-relaxed mb-8">
                  Whether you need a quick ride to the airport or a luxury car for your wedding, we are just a call or message away.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <PhoneCall className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+12345678900" className="text-secondary-foreground hover:text-primary transition-colors text-lg">
                      +1 234 567 8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366]/10 p-4 rounded-full">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/12345678900" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary-foreground hover:text-[#25D366] transition-colors text-lg"
                    >
                      +1 234 567 8900
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:booking@y2scabs.com" className="text-secondary-foreground hover:text-primary transition-colors text-lg">
                      booking@y2scabs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border flex flex-col justify-center">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-serif font-bold">Office Address</h3>
                </div>
                <p className="text-secondary-foreground text-lg leading-relaxed pl-9">
                  123 Luxury Drive,<br />
                  Business District,<br />
                  New York, NY 10001
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-serif font-bold">Business Hours</h3>
                </div>
                <ul className="text-secondary-foreground text-lg leading-relaxed pl-9 flex flex-col gap-2">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Monday - Sunday</span>
                    <span className="font-medium text-foreground">24 Hours Open</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Customer Support</span>
                    <span className="font-medium text-foreground">24/7 Available</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <a 
                  href="tel:+12345678900"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
