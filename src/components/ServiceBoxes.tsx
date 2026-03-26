import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const boxes = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    title: "Office Spaces",
    subtitle: "Commercial",
    description: "Premium office spaces in prime business districts with modern amenities and flexible lease terms.",
    sqft: "100 - 50,000 sq.ft",
    category: "Office Space",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    title: "Retail Spaces",
    subtitle: "High Street",
    description: "Prime retail locations with high footfall perfect for flagship stores and showrooms.",
    sqft: "200 - 20,000 sq.ft",
    category: "Retail",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    title: "Godown",
    subtitle: "Warehouse",
    description: "Secure storage solutions with easy access for logistics and supply chain operations.",
    sqft: "1,000 - 1,00,000 sq.ft",
    category: "Godown",
  },
  {
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
    title: "Co-Working",
    subtitle: "Flexible",
    description: "Modern co-working spaces with hot desks, private cabins, and meeting rooms on demand.",
    sqft: "1 Desk - Full Floor",
    category: "Co-Working",
  },
];

const ServiceBoxes = () => {
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
          <span className="inline-block text-primary font-display font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Explore Our Portfolio
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Property Categories
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((box, i) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[350px] overflow-hidden">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Subtitle badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block gradient-orange text-white font-display font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {box.subtitle}
                  </span>
                </div>

                {/* Size badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-foreground font-display font-semibold text-xs px-3 py-1.5 rounded-full">
                    {box.sqft}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-extrabold text-2xl text-white mb-2 group-hover:text-primary transition-colors">
                    {box.title}
                  </h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed mb-4">
                    {box.description}
                  </p>
                  <Link 
                    to={`/properties?type=${encodeURIComponent(box.category)}`}
                    className="inline-flex items-center gap-2 text-white font-display font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Explore Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
