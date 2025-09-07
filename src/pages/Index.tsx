import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <BookingForm />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
