import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Maximize, ArrowRight, Lock, X, CheckCircle } from "lucide-react";
import { allProperties } from "@/data/properties";

const PropertiesSection = () => {
  const [selectedProperty, setSelectedProperty] = useState<typeof allProperties[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const featuredProperties = allProperties.filter(p => p.featured).slice(0, 3);

  const handlePropertyClick = (property: typeof allProperties[0]) => {
    setSelectedProperty(property);
    setSubmitted(false);
    setFormData({ name: "", phone: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const targetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      if (targetUrl) {
        const urlEncodedData = new URLSearchParams();
        urlEncodedData.append("fullName", formData.name);
        urlEncodedData.append("phone", formData.phone);
        urlEncodedData.append("service", "Property Unlock");
        urlEncodedData.append("message", `Property: ${selectedProperty?.title} | Category: ${selectedProperty?.category} | Location: ${selectedProperty?.location}`);
        
        await fetch(targetUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlEncodedData.toString(),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    
    setSubmitted(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setSubmitted(false);
  };

  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
          {featuredProperties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer card-3d"
              onClick={() => handlePropertyClick(property)}
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
                    <span className="font-display font-semibold text-sm text-foreground">Enquire Now</span>
                  </motion.div>
                </div>
                <span className="absolute top-4 left-4 gradient-orange text-primary-foreground font-display font-bold text-xs px-3 py-1.5 rounded-md">
                  {property.category}
                </span>
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-foreground font-display font-bold text-[10px] px-2 py-1 rounded-md uppercase tracking-wider">
                  {property.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-extrabold text-lg text-foreground mb-3 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-4">
                  <span className="flex items-center gap-1.5 line-clamp-1">
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
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3, delay: 0.1 }}
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
      <AnimatePresence>
        {selectedProperty !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 text-left"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {!submitted ? (
                <>
                  <div className="relative h-40">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40">
                      <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-4">
                      <span className="gradient-orange text-white text-xs px-3 py-1 rounded-full">{selectedProperty.category}</span>
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
                      <button type="submit" className="w-full gradient-orange text-white font-display font-bold py-3 rounded-xl shadow-lg">
                        Unlock Details
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full gradient-orange flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-foreground">Details Unlocked!</h3>
                    <p className="text-muted-foreground text-sm mt-1">Our team will contact you soon.</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground text-sm font-body">Property</span>
                      <span className="font-display font-bold text-foreground text-right max-w-[60%] line-clamp-1">{selectedProperty.title}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground text-sm font-body">Location</span>
                      <span className="font-display font-bold text-foreground">{selectedProperty.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-3 border-b">
                      <div>
                        <span className="text-muted-foreground text-sm font-body block mb-1">Area</span>
                        <span className="font-display font-bold text-foreground">{selectedProperty.area}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-body block mb-1">Floor</span>
                        <span className="font-display font-bold text-foreground">{selectedProperty.floor}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-3 border-b">
                      <div>
                        <span className="text-muted-foreground text-sm font-body block mb-1">Facing</span>
                        <span className="font-display font-bold text-foreground">{selectedProperty.facing}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-body block mb-1">Condition</span>
                        <span className="font-display font-bold text-foreground">{selectedProperty.category}</span>
                      </div>
                    </div>
                    <div className="flex justify-between py-3 items-center">
                      <span className="text-muted-foreground text-sm font-body">Asking Price</span>
                      <span className="font-display font-extrabold text-2xl text-primary">{selectedProperty.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to={`/properties/${selectedProperty.id}`} 
                      onClick={closeModal} 
                      className="w-full text-center gradient-orange text-white font-display font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all"
                    >
                      View Full Details
                    </Link>
                    <button onClick={closeModal} className="w-full py-4 border border-gray-200 rounded-xl text-foreground font-display font-semibold hover:bg-gray-50 transition-all">
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PropertiesSection;