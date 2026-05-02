import { motion } from "framer-motion";
import { MapPin, TrendingUp, Building2, Target } from "lucide-react";

const locations = [
  {
    title: "Central Delhi & Connaught Place",
    description: "The heart of India's capital. Finding office space in Central Delhi means being at the center of business and political power. Connaught Place (CP) remains the most prestigious address for corporate headquarters and professional firms.",
    keywords: ["Office space in Central Delhi", "Connaught Place Office", "Premium Address"],
    icon: Target,
    stats: "Highest ROI Area"
  },
  {
    title: "Asaf Ali Road",
    description: "Strategically located between Old and New Delhi, Asaf Ali Road is a commercial powerhouse. It offers excellent connectivity to major transport hubs and is ideal for logistics, finance, and trading businesses looking for visibility.",
    keywords: ["Asaf Ali Road office space", "Commercial Hub", "Ajmeri Gate Connectivity"],
    icon: Building2,
    stats: "Prime Commercial Zone"
  },
  {
    title: "Karol Bagh & DB Gupta Road",
    description: "A vibrant commercial district known for its diverse business ecosystem. Office spaces here offer a perfect blend of high footfall and accessibility, making it suitable for both retail-focused offices and corporate setups.",
    keywords: ["Karol Bagh office", "DB Gupta Road space", "Business District"],
    icon: MapPin,
    stats: "Growth Corridor"
  },
  {
    title: "Okhla & South Delhi",
    description: "Okhla Industrial Area and surrounding South Delhi locations are the preferred choice for tech companies, creative agencies, and industrial headquarters. These areas offer larger floor plates and modern infrastructure.",
    keywords: ["Okhla Office Space", "South Delhi Commercial", "Tech Hub"],
    icon: TrendingUp,
    stats: "Tech & Innovation"
  }
];

const LocationInsights = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Text Overlay for SEO and Design */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="font-display font-black text-[20vw] leading-none text-foreground rotate-[-5deg]">DELHI OFFICE</span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-10 h-[2px] bg-primary"></span>
            <span className="text-primary font-display font-bold text-xs tracking-widest uppercase">Location Intelligence</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Strategic Business Locations <br />
            <span className="text-primary">Optimized for Success</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Choosing the right location is critical for your business operations. We provide deep insights into Delhi's commercial landscapes to help you make an informed decision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <loc.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl text-foreground">{loc.title}</h3>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">{loc.stats}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {loc.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {loc.keywords.map((kw, i) => (
                      <span key={i} className="text-[11px] font-display font-semibold text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Block */}
        <div className="mt-20 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="font-display font-bold text-2xl text-foreground mb-8 text-center">Why Businesses Choose Delhi for Office Spaces?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Unmatched Connectivity</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Delhi's world-class metro network and road infrastructure connect major business districts like Asaf Ali Road, Central Delhi, and Okhla seamlessly. This ensures easy access for employees and clients alike.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Professional Ecosystem</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Being the capital, Delhi hosts a dense network of financial institutions, legal experts, and government bodies. An office in Central Delhi puts your business in the middle of this high-value ecosystem.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Market Visibility</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Areas like Asaf Ali Road and Karol Bagh offer unparalleled commercial visibility. For businesses that rely on brand presence and prestige, these locations are second to none in the Indian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInsights;
