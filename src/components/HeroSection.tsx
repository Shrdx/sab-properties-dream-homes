import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern commercial property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-display font-bold text-sm tracking-[0.25em] uppercase mb-6">
              Premium Property Solutions
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Find Your Perfect{" "}
              <span className="text-primary">Commercial Space</span>
            </h1>
            <p className="text-white/80 font-body text-lg leading-relaxed mb-8 max-w-xl">
              From premium office spaces to retail outlets, we provide tailored real estate 
              solutions with transparency and excellence.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">500+ Properties</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">1000+ Clients</span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+918700513200" 
                className="inline-flex items-center gap-3 px-6 py-4 gradient-orange text-white font-display font-bold rounded-xl hover:opacity-90 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link 
                to="/properties" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-display font-bold px-6 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-foreground transition-all"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Location */}
            <p className="text-white/60 font-body text-sm mt-6">
              Based in Central Delhi, serving all of Delhi NCR
            </p>
          </motion.div>

          {/* Right - Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-1 gradient-orange rounded-3xl blur opacity-30" />
            
            {/* Glass form */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
              
              <div className="relative">
                <h3 className="font-display font-extrabold text-3xl text-white mb-2">
                  Quick Enquiry
                </h3>
                <p className="text-white/70 font-body text-sm mb-8">
                  Get a callback from our experts
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
                    />
                  </div>
                  <div className="relative">
                    <select className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white/70 font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm appearance-none">
                      <option value="" className="text-foreground">Select Requirement</option>
                      <option value="" className="text-foreground">Office Space</option>
                      <option value="" className="text-foreground">Retail Space</option>
                      <option value="" className="text-foreground">Co-working</option>
                      <option value="" className="text-foreground">Warehouse/Godown</option>
                      <option value="" className="text-foreground">Residential</option>
                    </select>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gradient-orange text-white font-display font-bold py-4 rounded-xl text-sm tracking-wide hover:opacity-90 transition-all shadow-lg backdrop-blur-sm"
                  >
                    Get Callback
                  </motion.button>
                </form>

                <p className="text-center text-white/50 text-xs mt-6">
                  <Link to="/contact" className="text-white/70 font-semibold hover:text-white transition-colors">
                    Or contact us directly →
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
