import { motion } from "framer-motion";
import { MapPin, Maximize, ArrowRight } from "lucide-react";
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
    price: "₹1.8 Cr",
  },
  {
    image: residentialImg,
    type: "Residential",
    title: "Luxury Apartment Complex",
    location: "Asaf Ali Road, New Delhi",
    area: "1,800 sq ft",
    price: "₹2.4 Cr",
  },
  {
    image: retailImg,
    type: "Retail",
    title: "Prime Retail Showroom",
    location: "Karol Bagh, New Delhi",
    area: "3,200 sq ft",
    price: "₹3.1 Cr",
  },
];

const PropertiesSection = () => {
  return (
    <section id="properties" className="py-24 bg-section">
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
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 gradient-cyan text-primary-foreground font-display font-bold text-xs px-3 py-1.5 rounded-md">
                  {property.type}
                </span>
                <span className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground font-display font-bold text-sm px-3 py-1.5 rounded-md">
                  {property.price}
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
                  <a href="#contact" className="flex items-center gap-1 text-primary font-display font-bold text-sm hover:gap-2 transition-all">
                    Enquire <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
