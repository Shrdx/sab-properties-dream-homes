import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-primary font-display font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Let's Find Your Perfect Space
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-6">
            Ready to find your dream property?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 gradient-orange text-white font-display font-bold text-lg px-10 py-5 rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
