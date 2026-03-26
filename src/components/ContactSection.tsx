import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Ready to discuss your real estate needs? Our team of experts is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Our Office</h4>
                <p className="text-muted-foreground font-body text-sm">
                  1/22, Asaf Ali Road, Delhi - 110002
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground font-body text-sm">8700513200</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Email</h4>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sabproperties.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">info@sabproperties.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-1">Working Hours</h4>
                <p className="text-muted-foreground font-body text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5 bg-card p-8 rounded-xl border border-border" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors">
                  <option value="">Service Required</option>
                  <option>Property Consultancy</option>
                  <option>Portfolio Management</option>
                  <option>Legal Assistance</option>
                  <option>Market Insights</option>
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full gradient-orange text-primary-foreground font-display font-bold py-3.5 rounded-lg text-sm tracking-wide hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
