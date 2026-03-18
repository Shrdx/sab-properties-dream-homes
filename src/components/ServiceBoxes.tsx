import { motion } from "framer-motion";
import commercialImg from "@/assets/property-commercial.jpg";
import residentialImg from "@/assets/property-residential.jpg";
import retailImg from "@/assets/property-retail.jpg";

const boxes = [
  {
    image: commercialImg,
    title: "Office Spaces",
    description: "Discover modern office spaces tailored to your business needs, from sleek urban lofts to corporate headquarters, designed to inspire productivity and success.",
  },
  {
    image: residentialImg,
    title: "Residential Properties",
    description: "Explore premium residential options across Delhi's prime locations, offering comfort, convenience, and long-term value for families and investors.",
  },
  {
    image: retailImg,
    title: "Retail Spaces",
    description: "Elevate your retail presence with prime locations in high-traffic areas, providing the perfect platform to showcase your brand and attract customers.",
  },
];

const ServiceBoxes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {boxes.map((box, i) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-xl overflow-hidden h-80 cursor-pointer"
            >
              <img
                src={box.image}
                alt={box.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/70 transition-all duration-300" />
              
              {/* Default title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-display font-extrabold text-xl text-primary-foreground">{box.title}</h3>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-display font-extrabold text-xl text-primary-foreground mb-3">{box.title}</h3>
                <p className="text-primary-foreground/80 font-body text-sm leading-relaxed mb-4">{box.description}</p>
                <a href="#contact" className="inline-flex gradient-cyan text-primary-foreground font-display font-bold text-sm px-6 py-2.5 rounded-md w-fit hover:opacity-90 transition-all">
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
