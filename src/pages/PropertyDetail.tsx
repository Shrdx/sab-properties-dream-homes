import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Maximize, ArrowRight, Building2, Phone, Mail, Check, X, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProperties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<typeof allProperties[0] | null>(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const prop = allProperties.find(p => p.id === parseInt(id || "0"));
    setProperty(prop || null);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-primary hover:underline">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="inline-block px-4 py-1 rounded-full bg-orange text-sm font-semibold mb-4">
            {property.category}
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            {property.title}
          </h1>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{property.location}</span>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 rounded-full bg-orange/10 text-orange font-semibold text-sm">
                    {property.status}
                  </span>
                  <span className="text-muted-foreground">Property ID: {property.id}</span>
                </div>

                <h2 className="font-display font-bold text-2xl mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {property.description}
                </p>

                <h2 className="font-display font-bold text-2xl mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {property.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>

                <h2 className="font-display font-bold text-2xl mb-4">Property Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-section rounded-xl">
                    <p className="text-muted-foreground text-sm">Area</p>
                    <p className="font-display font-bold text-lg">{property.area}</p>
                  </div>
                  <div className="p-4 bg-section rounded-xl">
                    <p className="text-muted-foreground text-sm">Floor</p>
                    <p className="font-display font-bold text-lg">{property.floor}</p>
                  </div>
                  <div className="p-4 bg-section rounded-xl">
                    <p className="text-muted-foreground text-sm">Facing</p>
                    <p className="font-display font-bold text-lg">{property.facing}</p>
                  </div>
                  <div className="p-4 bg-section rounded-xl">
                    <p className="text-muted-foreground text-sm">Property Age</p>
                    <p className="font-display font-bold text-lg">{property.age}</p>
                  </div>
                </div>

                {property.floorPlanUrl && (
                  <div className="mt-8 pt-8 border-t">
                    <h2 className="font-display font-bold text-2xl mb-4">Floor Plan</h2>
                    <a
                      href={property.floorPlanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary font-display font-bold hover:bg-primary/20 transition-all"
                    >
                      <Maximize className="w-5 h-5" />
                      View Full Floor Plan
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm">Price</p>
                  <p className="font-display font-extrabold text-4xl text-primary">{property.price}</p>
                </div>

                <button
                  onClick={() => setShowContact(!showContact)}
                  className="w-full gradient-orange text-white font-display font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg mb-4"
                >
                  Enquire Now
                </button>

                {showContact && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-section rounded-xl p-6 mt-4"
                  >
                    <h3 className="font-display font-bold text-lg mb-4">Contact Us</h3>
                    <div className="space-y-3">
                      <a href="tel:+918700513200" className="flex items-center gap-3 text-foreground hover:text-primary">
                        <Phone className="w-5 h-5" />
                        <span>+91 8700513200</span>
                      </a>
                      <a href="https://wa.me/919313638558" className="flex items-center gap-3 text-foreground hover:text-primary">
                        <span className="text-lg">💬</span>
                        <span>+91 9313638558</span>
                      </a>
                      <a href="mailto:info@sabproperties.in" className="flex items-center gap-3 text-foreground hover:text-primary">
                        <Mail className="w-5 h-5" />
                        <span>info@sabproperties.in</span>
                      </a>
                    </div>
                  </motion.div>
                )}

                <Link
                  to="/contact"
                  className="block text-center mt-4 text-primary hover:underline"
                >
                  Schedule a Visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
