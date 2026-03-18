import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-cyan flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">S</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-primary-foreground text-lg">SAB PROPERTIES</span>
                <span className="block text-primary text-[10px] font-body tracking-[0.2em] uppercase -mt-1">Private Limited</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              A trusted and reputable name in the real estate sector, delivering exceptional services since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Properties", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-primary-foreground/60 hover:text-primary font-body text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Property Consultancy", "Portfolio Management", "Legal Assistance", "Market Insights"].map((s) => (
                <li key={s}>
                  <span className="text-primary-foreground/60 font-body text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/60 font-body text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Asaf Ali Road, New Delhi - 110002
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +91 123 456 7890
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@sabproperties.com
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
