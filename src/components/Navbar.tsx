import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Properties", path: "/properties" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5" 
          : "bg-white"
      }`}>
        {/* Gradient border at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="SAB Properties Logo" 
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`relative px-4 py-2 font-display text-sm font-semibold tracking-wide transition-all duration-300 ${
                      isActive 
                        ? "text-primary" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`} />
                    {/* Hover glow effect */}
                    <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                );
              })}
              
              <div className="ml-4 pl-4 border-l border-gray-200">
                <a
                  href="tel:+918700513200"
                  className="group flex items-center gap-2 gradient-orange text-white font-display font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                >
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/5 font-display font-medium transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 pt-4 border-t border-gray-100"
                >
                  <a
                    href="tel:+918700513200"
                    className="flex items-center justify-center gap-2 gradient-orange text-white font-display font-bold text-sm px-6 py-3.5 rounded-full mx-4"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
