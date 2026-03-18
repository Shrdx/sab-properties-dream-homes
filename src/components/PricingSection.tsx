import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Commercial Space",
    price: "₹40",
    unit: "/- Starting Per Sq. Ft.",
    features: [
      "Flexible Layouts",
      "Modern Amenities",
      "Prime Location",
      "Fully Equipped",
      "Customizable Design",
      "High-Speed Internet",
      "Dedicated Parking",
      "Secure Access",
      "Professional Environment",
      "Natural Light",
    ],
  },
  {
    title: "Residential",
    price: "₹2.4 Cr",
    unit: " Starting",
    features: [
      "Luxury Apartments",
      "Gated Community",
      "Modern Interiors",
      "24/7 Security",
      "Power Backup",
      "Club House",
      "Swimming Pool",
      "Landscaped Gardens",
      "Children's Play Area",
      "Proximity to Metro",
    ],
  },
  {
    title: "Retail Space",
    price: "₹50",
    unit: "/- Starting Per Sq. Ft.",
    features: [
      "High Visibility",
      "Foot Traffic",
      "Storefront Signage",
      "Versatile Layout",
      "Ample Parking",
      "Street Level Access",
      "Showcase Windows",
      "Outdoor Seating",
      "Prominent Location",
      "Branding Opportunities",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            Our Plans
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Our Pricing
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            At SAB Properties, we offer competitive pricing tailored to your budget, ensuring cost-effective 
            solutions without compromising on quality or service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="gradient-cyan p-6 text-center">
                <h3 className="font-display font-extrabold text-xl text-primary-foreground">{plan.title}</h3>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="font-display font-extrabold text-4xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground font-body text-sm">{plan.unit}</span>
                </div>
                <a href="#contact" className="block w-full gradient-cyan text-primary-foreground font-display font-bold text-sm py-3 rounded-md text-center hover:opacity-90 transition-all mb-6">
                  Book Now
                </a>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
