import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/picture.jpg";

const team = [
  {
    name: "Sahil Bansal",
    role: "Director",
    description: "Visionary leader with 15+ years in commercial real estate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Arjun Mehta",
    role: "Leasing Head",
    description: "Expert in premium office space solutions across Delhi NCR",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Business Development Manager",
    description: "Strategic partnerships and client relationship specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Rahul Gupta",
    role: "Operations Head",
    description: "Ensuring seamless execution of all property operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

const testimonials = [
  {
    quote: "SAB Properties transformed our workspace experience. Their attention to detail and understanding of our business needs was exceptional.",
    name: "Vikram Malhotra",
    position: "CEO, TechNova Solutions",
  },
  {
    quote: "Professional, transparent, and client-focused. The team at SAB made our entire office relocation seamless and stress-free.",
    name: "Ananya Patel",
    position: "Director, Finance Hub",
  },
  {
    quote: "Outstanding service from start to finish. They found us the perfect commercial space that matched our requirements perfectly.",
    name: "Rajesh Kumar",
    position: "Managing Partner, Legal Eagles",
  },
];

const blogPosts = [
  {
    title: "The Future of Flexible Workspaces in 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Top 5 Considerations for Office Space Leasing",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
  },
  {
    title: "How to Choose the Perfect Commercial Property",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Office Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            About Us
          </h1>
          <p className="text-white/80 font-body text-xl md:text-2xl max-w-2xl mx-auto">
            Redefining the future of workspaces
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-10 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                We envision a dynamic future of work where businesses thrive in flexible, 
                innovative spaces designed for growth. We are committed to reshaping how 
                companies perceive and utilize their workspaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-10 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display font-extrabold text-3xl text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Our mission is to provide tailored, flexible, and inspiring workspace 
                solutions with transparency, service excellence, and a client-first 
                approach that ensures every business finds their perfect space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded Vision Block */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-8">
              We believe in removing traditional workspace limitations. Our approach enables 
              <span className="text-primary font-semibold"> collaboration, innovation, and flexibility</span> 
              at every level. We don't just provide spaces — we act as a 
              <span className="text-primary font-semibold"> catalyst for business growth</span>, 
              creating environments where companies can flourish and achieve their full potential.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 gradient-orange text-white font-display font-bold px-8 py-4 rounded-md hover:opacity-90 transition-all shadow-lg"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Dedicated professionals committed to transforming your workspace experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover ring-4 ring-orange/10"
                />
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground font-body text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Trusted by businesses across Delhi NCR
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-1 bg-orange mb-6 rounded-full" />
                <p className="text-foreground font-body text-base leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground font-body text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
              Insights & Articles
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Stay updated with the latest in commercial real estate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
