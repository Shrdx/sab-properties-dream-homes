import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceBoxes from "@/components/ServiceBoxes";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import PropertiesSection from "@/components/PropertiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiceBoxes />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <PricingSection />
      <CTASection />
      <PropertiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
