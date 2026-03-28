import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.05 }}
            className="block text-primary font-display font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Let's Find Your Perfect Space
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
            className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-6"
          >
            Ready to find your dream property?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.15 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 gradient-orange text-white font-display font-bold text-lg px-10 py-5 rounded-xl hover:opacity-90 transition-all shadow-lg hover-lift glow-orange-hover"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
