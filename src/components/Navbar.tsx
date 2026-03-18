import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-cyan flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">S</span>
            </div>
            <div>
              <span className="font-display font-extrabold text-foreground text-lg tracking-wide">
                SAB PROPERTIES
              </span>
              <span className="block text-primary text-[10px] font-body tracking-[0.2em] uppercase -mt-1">
                Private Limited
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-display text-sm font-semibold tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 gradient-cyan text-primary-foreground font-display font-bold text-sm px-6 py-2.5 rounded-md transition-all hover:opacity-90 shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary font-display text-sm font-semibold py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2 gradient-cyan text-primary-foreground font-display font-bold text-sm px-5 py-2.5 rounded-md mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
