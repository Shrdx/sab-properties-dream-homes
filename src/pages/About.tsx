import { motion } from "framer-motion";
import { ArrowRight, Target, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/picture.jpg";

const team = [
  {
    name: "Sanjay Gupta",
    role: "Designation",
    description: "With extensive experience in the real estate industry, they bring a wealth of knowledge and expertise to the team, ensuring exceptional service and results for all clients.",
  },
  {
    name: "Kushagra Gupta",
    role: "Designation",
    description: "Dedicated professional committed to transforming your workspace experience with personalized solutions and attention to detail.",
  },
  {
    name: "Kashish Gupta",
    role: "Designation",
    description: "Focused on delivering outstanding results and building lasting relationships with clients through transparency and reliability.",
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Dedicated professionals committed to transforming your workspace experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-28 h-28 rounded-full mx-auto mb-4 bg-gray-200" />
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
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
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
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
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
