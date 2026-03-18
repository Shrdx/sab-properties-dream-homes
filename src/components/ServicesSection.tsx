import { motion } from "framer-motion";
import { Building2, Briefcase, Scale, TrendingUp, MapPin, Key } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Fully Furnished Office",
    description: "SAB Properties offers fully equipped office spaces with modern furnishings, amenities, and infrastructure for a hassle-free working environment.",
  },
  {
    icon: Key,
    title: "Ready To Move In",
    description: "Experience convenience with our ready-to-occupy property solutions, meticulously designed to meet the immediate needs of businesses and residents.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Strategic management of your real estate portfolio to maximize returns and minimize risk exposure with data-driven insights.",
  },
  {
    icon: Scale,
    title: "Legal Assistance",
    description: "Comprehensive legal support for property transactions, documentation, and regulatory compliance across all types of properties.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Benefit from strategically located properties in high-traffic areas across Delhi, positioned to maximize visibility and accessibility.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Data-driven market analysis and insights to help you make informed investment decisions in the ever-evolving real estate market.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            SAB Properties offers a comprehensive suite of real estate solutions, including property consultancy, 
            portfolio management, and legal assistance, tailored to meet the unique needs of every client.
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
              className="group bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-cyan flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex gradient-cyan text-primary-foreground font-display font-bold text-sm px-6 py-2.5 rounded-md hover:opacity-90 transition-all">
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
