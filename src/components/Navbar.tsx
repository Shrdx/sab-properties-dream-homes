import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Properties", path: "/properties" },
  { label: "Contact", path: "/contact" },
];

interface NavbarProps {
  solid?: boolean;
}

const Navbar = ({ solid = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(solid);
  const location = useLocation();

  useEffect(() => {
    if (solid) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [solid]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-white/95 backdrop-blur-2xl border-gray-100 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.05)]" 
          : "bg-transparent border-transparent py-4"
      }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-24 sm:h-28" : "h-32 sm:h-36"
          }`}>
            
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
              <Link to="/" className="flex items-center group relative z-10 py-1">
                <img 
                  src={!scrolled ? "/newlogo.png" : "/logo.png"}
                  alt="SAB Properties Logo" 
                  className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                    scrolled ? "h-16 sm:h-20 lg:h-24" : "h-24 sm:h-28 lg:h-32"
                  } ${
                    !scrolled ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" : ""
                  }`} 
                />
              </Link>
            </div>

            {/* Center: Desktop Nav Links */}
            <div className="hidden lg:flex flex-[2] justify-center items-center gap-6 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                
                // Determine text color based on scroll state
                const textColorClass = !scrolled
                  ? isActive ? "text-white drop-shadow-md" : "text-white/80 hover:text-white drop-shadow-sm"
                  : isActive ? "text-black" : "text-gray-600 hover:text-black";
                  
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`relative text-base xl:text-lg whitespace-nowrap font-display font-semibold transition-colors duration-300 ${textColorClass}`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span 
                        layoutId="navUnderline"
                        className={`absolute -bottom-2 left-0 right-0 h-[1.5px] rounded-full origin-center ${!scrolled ? "bg-white" : "bg-primary"}`} 
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Actions */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
              <a
                href="tel:+918700513200"
                className={`group flex items-center justify-center gap-2 font-display font-bold text-sm px-7 py-3 rounded-md transition-all duration-300 active:scale-95 border ${
                  !scrolled 
                    ? "bg-white text-black border-white hover:bg-gray-200 hover:scale-[1.02]" 
                    : "bg-[#1C1C1C] text-white border-transparent hover:bg-black hover:scale-[1.02] shadow-lg"
                }`}
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative w-12 h-12 flex items-center justify-end transition-all duration-300 ${!scrolled ? "text-white" : "text-black"}`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-t ${
                !scrolled 
                  ? "bg-black/80 backdrop-blur-2xl border-white/10" 
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  
                  const mobileTextClass = !scrolled
                    ? isActive ? "text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/5"
                    : isActive ? "text-black bg-gray-100" : "text-gray-600 hover:text-black hover:bg-gray-50";

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3.5 rounded-xl font-display text-lg font-medium transition-all duration-300 ${mobileTextClass}`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`mt-6 pt-6 border-t ${!scrolled ? "border-white/10" : "border-gray-100"}`}
                >
                  <a
                    href="tel:+918700513200"
                    className={`flex items-center justify-center gap-3 font-display font-bold text-base px-6 py-4 rounded-xl active:scale-95 transition-transform ${
                      !scrolled ? "bg-white text-black" : "bg-[#1C1C1C] text-white"
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
