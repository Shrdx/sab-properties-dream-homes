import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const OfficeNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="SAB Properties Logo" 
              className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "h-12 md:h-16" : "h-16 md:h-20"
              }`} 
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="tel:+918700513200"
              className="group flex items-center justify-center gap-2 font-display font-bold text-xs md:text-sm px-5 py-2.5 md:px-7 md:py-3 rounded-full transition-all duration-300 active:scale-95 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Office Experts</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default OfficeNavbar;
