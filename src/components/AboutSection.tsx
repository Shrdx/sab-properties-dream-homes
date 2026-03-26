import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-3 leading-tight">
              We offer comprehensive real estate solutions that suit your needs
            </h2>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              At SAB Properties, we're more than just a real estate company — we're your partners in success. 
              With a commitment to innovation, excellence, and personalized service, we provide tailored 
              real estate solutions that foster growth and build lasting relationships. Based at 1/22, Asaf Ali Road, 
              in the heart of Delhi's commercial hub, we bring expertise and integrity to every transaction.
            </p>
            <a href="#services" className="inline-flex items-center gap-2 text-primary font-display font-bold text-sm hover:gap-3 transition-all">
              More About Us <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
