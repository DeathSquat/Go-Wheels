import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Car, Shield } from "lucide-react";
import heroCars from "@/assets/hero-cars.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroCars})`,
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <Car className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
          <Shield className="h-6 w-6 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 float" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
          <Users className="h-10 w-10 text-accent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">India's #1 Premium Car Rental</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 leading-tight">
            <span className="gradient-text">Go Wheels</span>
            <br />
            <span className="text-3xl md:text-4xl text-foreground font-inter font-light">
              Affordable Rides, Pure Comfort
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience luxury transportation with our premium fleet. 
            <span className="text-primary font-medium"> Your Journey </span>
            starts with comfort, style, and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-hero text-lg px-8 py-4 group">
              Book Your Ride
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-outline-glow text-lg px-8 py-4">
              View Fleet
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="card-3d text-center">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Premium Cars</div>
            </div>
            <div className="card-3d text-center">
              <div className="text-3xl font-bold gradient-text-secondary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="card-3d text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="card-3d text-center">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;