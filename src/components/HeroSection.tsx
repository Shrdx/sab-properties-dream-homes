import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern commercial property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary-foreground/90 font-display font-semibold text-sm tracking-[0.25em] uppercase mb-4">
              Property Solutions in Delhi
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Commercial & Residential{" "}
              <span className="text-primary">Real Estate</span>
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-8 max-w-lg">
              SAB Properties Private Limited delivers exceptional property consultancy, 
              portfolio management, and legal assistance for all your real estate needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 gradient-cyan text-primary-foreground font-display font-bold px-8 py-4 rounded-md transition-all hover:opacity-90 shadow-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right - Query Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-foreground/40 backdrop-blur-lg rounded-xl p-8 border border-primary-foreground/20"
          >
            <h3 className="font-display font-extrabold text-2xl text-primary-foreground mb-2">
              Query Now
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm mb-6">
              Let's make your property journey seamless — schedule a consultation and let us bring your vision to life!
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <div className="flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-1 accent-primary" />
                <label className="text-primary-foreground/60 font-body text-xs leading-relaxed">
                  I authorize company representatives to Call, SMS, Email or WhatsApp me about products and offers.
                </label>
              </div>
              <button
                type="submit"
                className="w-full gradient-cyan text-primary-foreground font-display font-bold py-3.5 rounded-md text-sm tracking-wide hover:opacity-90 transition-all shadow-md"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
