import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Vivek Patel",
    role: "Logistics Manager",
    title: "Warehouse Purchase in NCR",
    content: "Our growing business needed a large warehouse in the NCR region, and Sab Properties was the perfect partner. Their expertise made the entire process straightforward and hassle-free.",
    rating: 5
  },
  {
    name: "Suman Arora",
    role: "Entrepreneur",
    title: "Office Space for Rent in Delhi",
    content: "I was looking to rent office space in Delhi, and Sab Properties came highly recommended. The lease terms were fair, and the support from their team was outstanding.",
    rating: 5
  },
  {
    name: "Rajesh Mehta",
    role: "Investor",
    title: "Commercial Property Investment",
    content: "As a first-time commercial property investor, I was nervous about the process. Sab Properties guided me through every step, explaining all the details clearly.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Retail Chain Owner",
    title: "Retail Space Acquisition",
    content: "Finding the perfect retail location in Mumbai was challenging until we worked with Sab Properties. Their market knowledge and negotiation skills secured us a prime location.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-section overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
              What Our Clients Say
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-dark-heading mt-4 mb-6">
              Trusted by Industry <span className="text-gradient">Leaders</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Don't just take our word for it. Here's what our valued clients have to say 
              about their experiences with SAB Properties.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover-lift card-3d relative group"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-primary" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <h4 className="font-display font-bold text-lg mb-2 text-dark-heading">
                {testimonial.title}
              </h4>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="mt-auto border-t pt-6 border-border/40">
                <p className="font-display font-extrabold text-dark-heading">
                  {testimonial.name}
                </p>
                <p className="text-primary font-body text-xs font-semibold uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
