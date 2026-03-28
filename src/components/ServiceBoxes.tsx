import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "retail",
    title: "RETAIL",
    description: "Spaces where businesses and customers seamlessly connect.",
    properties: "50+ Properties",
    cta: "Explore Retail Spaces",
    link: "/properties?category=Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1200&fit=crop",
  },
  {
    id: "office",
    title: "OFFICE",
    description: "Business environments that inspire success and productivity.",
    properties: "100+ Properties",
    cta: "Explore Office Spaces",
    link: "/properties?category=Office Space",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1200&fit=crop",
  },
  {
    id: "godown",
    title: "GODOWN",
    description: "Spacious godown facilities with loading docks and secure storage solutions.",
    properties: "30+ Properties",
    cta: "Explore Godown Spaces",
    link: "/properties?category=Godown",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop",
  },
  {
    id: "coworking",
    title: "CO-WORKING",
    description: "Modern co-working spaces with flexible seating and premium facilities.",
    properties: "25+ Properties",
    cta: "Explore Co-Working Spaces",
    link: "/properties?category=Co-Working",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=1200&fit=crop",
  },
];

const ServiceBoxes = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-primary font-display font-bold text-sm tracking-[0.25em] uppercase mb-4">
            Explore Our
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground">
            Property Categories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 130, damping: 18, delay: i * 0.07 }}
            >
              <Link
                to={category.link}
                className="group relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden block shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                {/* Background Image & Zoom Effect */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.15]"
                  />
                </div>

                {/* Sleek Gradient Overlays */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
                <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-primary/20 mix-blend-multiply transition-colors duration-700" />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                  <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    {/* Category Title */}
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-white tracking-wider uppercase mb-2 drop-shadow-md">
                      {category.title}
                    </h3>

                    {/* Properties Count */}
                    <p className="font-body font-semibold text-xs text-primary tracking-widest uppercase mb-1">
                      {category.properties}
                    </p>
                  </div>

                  {/* Sliding Glass Panel Description & CTA */}
                  <div className="overflow-hidden">
                    <div className="h-0 opacity-0 transform translate-y-6 group-hover:h-[90px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                      <p className="font-body text-white/80 text-xs md:text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-display font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                        {category.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative glow line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
