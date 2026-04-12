import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceBoxes from "@/components/ServiceBoxes";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PropertiesSection from "@/components/PropertiesSection";
import TrustedBy from "@/components/TrustedBy";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "SAB Properties Private Limited",
    "url": "https://sabproperties.in",
    "logo": "https://sabproperties.in/logo.png",
    "image": "https://sabproperties.in/og-image.jpg",
    "description": "Trusted real estate consultancy in New Delhi specializing in office spaces, godowns, and showrooms.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6433",
      "longitude": "7.2285"
    },
    "telephone": "+918700513200",
    "openingHours": "Mo-Sa 10:00-19:00",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61579467053882",
      "https://www.instagram.com/sabpropertiesdel/"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="SAB Properties Private Limited | Real Estate Experts in Delhi"
        description="Sab Properties in Delhi is one of the leading businesses in the Estate Agents. Also known for Estate Agents, Loans, Property Consultants, Commercial Properties, and Office Spaces."
        canonical="/"
        structuredData={orgSchema}
      />
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
