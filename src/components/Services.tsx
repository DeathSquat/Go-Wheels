import { Car, Shield, Clock, MapPin, Headphones, CreditCard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Latest models from top brands with regular maintenance and sanitization",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Shield,
      title: "Full Insurance",
      description: "Comprehensive coverage for complete peace of mind during your journey",
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability with instant booking and quick delivery",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time location tracking and navigation assistance throughout your trip",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support via phone, chat, and WhatsApp for instant help",
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Multiple payment options including UPI, cards, and digital wallets",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience excellence with our comprehensive car rental services designed for your comfort and convenience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`card-3d group hover:scale-105 transition-all duration-500 bg-gradient-to-br ${service.gradient} border border-border/10`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-card to-background flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Powered by <span className="gradient-text">Advanced Technology</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Next.js", desc: "React Framework" },
              { name: "MongoDB", desc: "Database" },
              { name: "Convex", desc: "Backend & APIs" },
              { name: "Razorpay", desc: "Payments" },
              { name: "Twilio", desc: "SMS & WhatsApp" },
              { name: "Google Maps", desc: "Navigation" }
            ].map((tech, index) => (
              <div key={index} className="card-3d p-4 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-sm font-medium text-primary mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;