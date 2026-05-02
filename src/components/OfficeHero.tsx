import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const officeImages = [
  "/officeSpaces/officeSpace1.jpg",
  "/officeSpaces/officeSpace10.jpg",
  "/officeSpaces/officeSpace3.jpg",
  "/officeSpaces/officeSpace4.jpg",
  "/officeSpaces/officeSpace6.jpg",
];

const OfficeHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % officeImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % officeImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + officeImages.length) % officeImages.length);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-white/40 z-10" /> {/* Light overlay to keep it light-themed */}
            <img
              src={officeImages[currentImage]}
              alt="Premium Office Space"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 z-20" />
      </div>

      {/* Content Container */}
      <div className="container relative z-30 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 shadow-sm"
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-primary font-display text-xs font-bold tracking-widest uppercase">
                Premium Office Selection
              </span>
            </motion.div>
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-8 tracking-tight">
            Office Space <br />
            <span className="text-primary relative inline-block">
              in Delhi
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-2 bg-primary/10 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </h1>

          <p className="text-slate-900 font-body font-medium text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto drop-shadow-sm">
            Discover the finest selection of managed and raw office spaces in Delhi's premier business districts. Tailored for success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+918700513200"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-display font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-primary/30"
            >
              <Phone className="w-5 h-5" />
              <span>Call Our Experts</span>
            </a>
            
            <a
              href="#listings"
              className="group flex items-center justify-center gap-2 px-10 py-5 bg-white/80 backdrop-blur-md text-foreground font-display font-bold rounded-2xl border border-slate-200 hover:bg-white hover:border-primary/40 transition-all duration-300 shadow-lg"
            >
              <span>Explore Listings</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-slate-200/50">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display font-bold text-sm text-slate-800 tracking-wide drop-shadow-sm">Verified Hubs</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                   <Star className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display font-bold text-sm text-slate-800 tracking-wide drop-shadow-sm">15+ Yrs Excellence</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-30 hidden md:flex items-center gap-4">
        <button 
          onClick={prevImage}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextImage}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {officeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentImage === i ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OfficeHero;
