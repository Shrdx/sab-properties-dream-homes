import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gradient-dark pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-footer.png" alt="SAB Properties Logo" className="h-24 w-auto" />
            </div>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              A trusted and reputable name in the real estate sector, delivering exceptional services since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/properties" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#property-consultancy" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Property Consultancy</Link>
              </li>
              <li>
                <Link to="/services#portfolio-management" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Portfolio Management</Link>
              </li>
              <li>
                <Link to="/services#legal-assistance" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Legal Assistance</Link>
              </li>
              <li>
                <Link to="/services#market-insights" className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">Market Insights</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/60 font-body text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                1/22, Asaf Ali Road, Delhi - 110002
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                8700513200
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sabproperties.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  info@sabproperties.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} SAB Properties Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
