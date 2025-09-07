import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Car, Phone, Mail, User } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    carType: "",
    rentalType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking form submission
    console.log("Booking data:", formData);
    alert("Booking request submitted! We'll contact you shortly.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Book Your Ride
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your perfect vehicle in just a few clicks. Quick, easy, and secure booking process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-3d bg-card border-border/20 shadow-premium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text">Complete Your Booking</CardTitle>
              <CardDescription>Fill in the details below to reserve your vehicle</CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                </div>

                {/* Location Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Pickup Location
                    </Label>
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      Drop-off Location
                    </Label>
                    <Input
                      id="dropoff"
                      placeholder="Enter drop-off address"
                      value={formData.dropoffLocation}
                      onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Pickup Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupDate">Date</Label>
                        <Input
                          id="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                          className="bg-muted/50 border-border/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickupTime">Time</Label>
                        <Input
                          id="pickupTime"
                          type="time"
                          value={formData.pickupTime}
                          onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                          className="bg-muted/50 border-border/20"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-secondary" />
                      Return Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="returnDate">Date</Label>
                        <Input
                          id="returnDate"
                          type="date"
                          value={formData.returnDate}
                          onChange={(e) => handleInputChange("returnDate", e.target.value)}
                          className="bg-muted/50 border-border/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="returnTime">Time</Label>
                        <Input
                          id="returnTime"
                          type="time"
                          value={formData.returnTime}
                          onChange={(e) => handleInputChange("returnTime", e.target.value)}
                          className="bg-muted/50 border-border/20"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-primary" />
                      Car Type
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("carType", value)}>
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select car type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy (₹800-1200/day)</SelectItem>
                        <SelectItem value="premium">Premium (₹2000-3500/day)</SelectItem>
                        <SelectItem value="luxury">Luxury (₹4000-6000/day)</SelectItem>
                        <SelectItem value="electric">Electric (₹2500-4000/day)</SelectItem>
                        <SelectItem value="suv">SUV (₹3000-5000/day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Rental Type
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("rentalType", value)}>
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select rental type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly Rental</SelectItem>
                        <SelectItem value="daily">Daily Rental</SelectItem>
                        <SelectItem value="weekly">Weekly Rental</SelectItem>
                        <SelectItem value="monthly">Monthly Rental</SelectItem>
                        <SelectItem value="airport">Airport Transfer</SelectItem>
                        <SelectItem value="outstation">Outstation Trip</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" className="btn-hero w-full text-lg py-3">
                    Book Now - Get Instant Quote
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Free cancellation up to 24 hours before pickup. No hidden charges.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;