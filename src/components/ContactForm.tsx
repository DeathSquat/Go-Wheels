import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form data:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "24/7 customer support"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@gowheels.com", "support@gowheels.com"],
      description: "We reply within 2 hours"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["123 Business Park, Tech City", "Mumbai, Maharashtra 400001"],
      description: "Visit us for special deals"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sun: 24/7 Operations", "Office: 9:00 AM - 8:00 PM"],
      description: "Always here when you need us"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 gradient-text">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need assistance? Our team is here to help you 24/7. Reach out to us anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card
                      key={index}
                      className="card-3d bg-card border-border/20 hover:scale-105 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-sm text-muted-foreground mb-1">
                                {detail}
                              </p>
                            ))}
                            <p className="text-xs text-primary mt-2">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* FAQ Quick Links */}
            <Card className="card-3d bg-card border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Quick Help
                </CardTitle>
                <CardDescription>
                  Common questions answered instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "How to book a car?",
                    "Cancellation policy?",
                    "Driver requirements?",
                    "Payment methods?",
                    "Insurance coverage?"
                  ].map((question, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-3d bg-card border-border/20 shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name</Label>
                    <Input
                      id="contactName"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email Address</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input
                      id="contactPhone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-muted/50 border-border/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Inquiry Type</Label>
                    <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">New Booking</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="corporate">Corporate Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactSubject">Subject</Label>
                  <Input
                    id="contactSubject"
                    placeholder="Brief subject of your inquiry"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="bg-muted/50 border-border/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactMessage">Message</Label>
                  <Textarea
                    id="contactMessage"
                    placeholder="Please provide details about your inquiry..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-muted/50 border-border/20 min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;