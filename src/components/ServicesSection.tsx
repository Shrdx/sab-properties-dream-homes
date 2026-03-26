import { motion } from "framer-motion";
import { Building2, Briefcase, Scale, TrendingUp, MapPin, Key, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Fully Furnished Office",
    description: "Move-in ready spaces with modern furniture, high-speed internet, and all amenities included.",
    features: ["Premium Furniture", "24/7 Access", "IT Infrastructure", "Meeting Rooms"],
  },
  {
    icon: Key,
    title: "Ready To Move In",
    description: "Immediate possession properties with complete interiors and zero waiting time.",
    features: ["Instant Possession", "Complete Interiors", "OC Received", "Registered Property"],
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Expert management of your real estate assets for maximum ROI and minimal hassle.",
    features: ["Tenant Management", "Rent Collection", "Property Maintenance", "Market Analysis"],
  },
  {
    icon: Scale,
    title: "Legal Assistance",
    description: "End-to-end legal support for smooth and transparent property transactions.",
    features: ["Title Verification", "Agreement Drafting", "Registration", "Dispute Resolution"],
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Premium commercial and residential spaces in Delhi NCR's most sought-after areas.",
    features: ["DLF Locations", "Metro Connectivity", "Business Parks", "Commercial Hubs"],
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Data-backed market intelligence for informed real estate investment decisions.",
    features: ["Price Trends", "Location Analytics", "Investment advisory", "Future Projections"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-display font-bold text-sm tracking-[0.2em] uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            From flexible office spaces to comprehensive property management, we provide 
            end-to-end real estate solutions designed for modern businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 gradient-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-6 group-hover:gradient-orange transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display font-extrabold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-primary font-display font-bold text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-body text-lg mb-6">
            Need a customized solution? We're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 gradient-orange text-white font-display font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
