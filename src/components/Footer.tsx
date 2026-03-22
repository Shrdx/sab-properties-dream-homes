import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-dark pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-footer.png" alt="SAB Properties Logo" className="h-20 w-auto" />
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
                1/22, Asaf Ali Road, Delhi - 110002
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                8700513200
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
