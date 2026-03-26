import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Maximize, ArrowRight, Lock, User, Phone, CheckCircle } from "lucide-react";
import residentialImg from "@/assets/property-residential.jpg";
import commercialImg from "@/assets/property-commercial.jpg";
import retailImg from "@/assets/property-retail.jpg";

const properties = [
  {
    image: commercialImg,
    type: "Commercial",
    title: "Premium Office Space",
    location: "Connaught Place, New Delhi",
    area: "2,500 sq ft",
  },
  {
    image: residentialImg,
    type: "Residential",
    title: "Luxury Apartment Complex",
    location: "1/22, Asaf Ali Road, Delhi",
    area: "1,800 sq ft",
  },
  {
    image: retailImg,
    type: "Retail",
    title: "Prime Retail Showroom",
    location: "Karol Bagh, New Delhi",
    area: "3,200 sq ft",
  },
];

const PropertiesSection = () => {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [showDetails, setShowDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePropertyClick = (index: number) => {
    setSelectedProperty(index);
    setShowDetails(false);
    setSubmitted(false);
    setFormData({ name: "", phone: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setShowDetails(false);
    setSubmitted(false);
  };

  const priceOptions = ["₹1.8 Cr", "₹2.4 Cr", "₹3.1 Cr"];

  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            Featured Listings
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Explore Our Properties
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Handpicked properties across Delhi's most sought-after locations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handlePropertyClick(i)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="font-display font-semibold text-sm text-foreground">View Details</span>
                  </motion.div>
                </div>
                <span className="absolute top-4 left-4 gradient-orange text-primary-foreground font-display font-bold text-xs px-3 py-1.5 rounded-md">
                  {property.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-extrabold text-lg text-foreground mb-3">
                  {property.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    {property.location}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5 text-muted-foreground text-sm font-body">
                    <Maximize className="w-4 h-4" />
                    {property.area}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-display font-bold text-sm group-hover:gap-2 transition-all">
                    Click to View
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 gradient-orange text-white font-display font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            View More Properties
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProperty !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <div className="relative h-32">
                  <img
                    src={properties[selectedProperty].image}
                    alt={properties[selectedProperty].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button onClick={closeModal} className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40">
                    <ArrowRight className="w-4 h-4 rotate-45" />
                  </button>
                  <div className="absolute bottom-3 left-4">
                    <span className="gradient-orange text-white text-xs px-2 py-1 rounded-full">{properties[selectedProperty].type}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Lock className="w-5 h-5" />
                    <span className="font-display font-bold">Unlock Property Details</span>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <button type="submit" className="w-full gradient-orange text-white font-display font-bold py-3 rounded-xl">
                      Unlock Details
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full gradient-orange flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">Details Unlocked!</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Property</span>
                    <span className="font-semibold text-foreground">{properties[selectedProperty].title}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold text-foreground">{properties[selectedProperty].location}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Area</span>
                    <span className="font-semibold text-foreground">{properties[selectedProperty].area}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-bold text-xl text-primary">{priceOptions[selectedProperty]}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link to="/contact" onClick={closeModal} className="flex-1 text-center gradient-orange text-white font-display font-bold py-3 rounded-xl">
                    Schedule Visit
                  </Link>
                  <button onClick={closeModal} className="px-4 py-3 border border-gray-300 rounded-xl text-foreground font-display font-semibold">
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PropertiesSection;