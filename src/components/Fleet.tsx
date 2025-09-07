import { Button } from "@/components/ui/button";
import { Star, Users, Fuel, Settings, ArrowRight } from "lucide-react";
import luxurySedan from "@/assets/luxury-sedan.jpg";
import electricSUV from "@/assets/electric-suv.jpg";
import sportsCar from "@/assets/sports-car.jpg";

const Fleet = () => {
  const cars = [
    {
      id: 1,
      name: "Luxury Sedan",
      category: "Premium",
      image: luxurySedan,
      price: "₹2,500",
      rating: 4.9,
      features: ["5 Seats", "Automatic", "Hybrid", "Premium"],
      description: "Experience ultimate comfort with our premium luxury sedan featuring leather interiors and advanced safety features."
    },
    {
      id: 2,
      name: "Electric SUV",
      category: "Eco-Friendly",
      image: electricSUV,
      price: "₹3,200",
      rating: 4.8,
      features: ["7 Seats", "Electric", "4WD", "Tech"],
      description: "Go green with our electric SUV offering zero emissions, spacious interiors, and cutting-edge technology."
    },
    {
      id: 3,
      name: "Sports Car",
      category: "Performance",
      image: sportsCar,
      price: "₹5,000",
      rating: 5.0,
      features: ["2 Seats", "Manual", "Turbo", "Premium"],
      description: "Feel the thrill with our high-performance sports car featuring turbocharged engine and racing dynamics."
    }
  ];

  const categories = [
    { name: "Economy", count: "25+ Cars", price: "From ₹800/day" },
    { name: "Premium", count: "40+ Cars", price: "From ₹2,000/day" },
    { name: "Luxury", count: "20+ Cars", price: "From ₹4,000/day" },
    { name: "Electric", count: "15+ Cars", price: "From ₹2,500/day" }
  ];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse collection of well-maintained, premium vehicles perfect for every occasion
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-3d text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{category.count}</p>
              <p className="text-xs text-accent font-medium">{category.price}</p>
            </div>
          ))}
        </div>

        {/* Featured Cars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="card-3d group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Car Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {car.category}
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span className="text-sm font-medium">{car.rating}</span>
                </div>
              </div>

              {/* Car Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {car.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{car.price}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {car.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button className="btn-hero flex-1 group">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="btn-outline-glow px-4">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center card-3d bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">
            Can't find the perfect car?
          </h3>
          <p className="text-muted-foreground mb-6">
            We have 500+ more vehicles in our fleet. Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Browse All Cars
            </Button>
            <Button className="btn-secondary-glow">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;