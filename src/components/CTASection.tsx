import { motion } from "framer-motion";
import heroImg from "@/assets/hero-building.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Join SAB Properties" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
            SAB Properties — where every client is valued.
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-8">
            Wish to explore our properties?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 gradient-orange text-primary-foreground font-display font-bold px-8 py-4 rounded-md hover:opacity-90 transition-all shadow-lg"
          >
            Contact Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
