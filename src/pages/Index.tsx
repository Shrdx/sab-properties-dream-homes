import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceBoxes from "@/components/ServiceBoxes";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertiesSection from "@/components/PropertiesSection";
import TrustedBy from "@/components/TrustedBy";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiceBoxes />
      <ServicesSection />
      <WhyChooseUs />
      <PropertiesSection />
      <TrustedBy />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
