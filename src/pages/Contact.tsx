import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, Building2, X, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeroImg from "@/assets/contact-hero.png";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const propertyName = searchParams.get("property");
  const propertyType = searchParams.get("type");
  const propertyLocation = searchParams.get("location");
  const hasProperty = propertyName || propertyType;

  useEffect(() => {
    if (propertyType) {
      const select = document.querySelector('select[name="requirement"]') as HTMLSelectElement;
      if (select) {
        select.value = propertyType;
      }
    }
  }, [propertyType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHeroImg} alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
          className="relative text-center px-4"
        >
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/80 font-body text-xl md:text-2xl max-w-2xl mx-auto">
            Get in touch with our team of experts
          </p>
        </motion.div>
      </section>

      {/* Property Inquiry Banner */}
      {hasProperty && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary/10 to-orange-50 py-4 border-b border-primary/20"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-orange flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">Inquiring about:</p>
                  <p className="font-display font-bold text-sm text-primary">{propertyName || propertyType}</p>
                  {propertyLocation && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {propertyLocation}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Our team will prioritize this inquiry</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Contact Section */}
      <section className="py-16 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
              className="bg-white rounded-2xl p-10 shadow-xl"
            >
              <h2 className="font-display font-extrabold text-4xl text-foreground mb-6">
                Let's Connect
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-12">
                {hasProperty 
                  ? "Complete the form to schedule a visit or get more details about this property. We're here to help!"
                  : "Whether you're looking for your dream workspace or have questions about our services, we're here to help."}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-1">Our Office</h4>
                    <p className="text-muted-foreground font-body">
                      1/22, Asaf Ali Road<br />
                      Near Ajmeri Gate<br />
                      Delhi - 110002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground font-body">
                      +91 8700513200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-1">Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sabproperties.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body hover:text-primary transition-colors">
                      info@sabproperties.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg mb-1">Working Hours</h4>
                    <p className="text-muted-foreground font-body">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Note */}
              <div className="mt-12 p-6 bg-section rounded-xl border border-gray-200">
                <p className="text-muted-foreground font-body text-sm">
                  <span className="font-semibold text-foreground">SAB Properties</span> is a subsidiary of 
                  SAB Group, a diversified business conglomerate with interests in real estate, hospitality, 
                  and infrastructure development across India.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
                {hasProperty ? (
                  <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-primary font-display font-semibold text-sm">
                      You're one step away from scheduling a visit!
                    </p>
                  </div>
                ) : null}
                
                <h3 className="font-display font-extrabold text-2xl text-foreground mb-2">
                  {hasProperty ? "Schedule Your Visit" : "Send us a Message"}
                </h3>
                <p className="text-muted-foreground font-body mb-8">
                  {hasProperty 
                    ? "Fill out the form and our team will contact you to confirm the visit timing."
                    : "Fill out the form below and we'll get back to you within 24 hours."}
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone"
                        className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Space Requirement *
                    </label>
                    <select 
                      name="requirement"
                      required
                      defaultValue={propertyType || ""}
                      className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="" disabled>Space Requirement</option>
                      <option value="Office Space">Office Space</option>
                      <option value="Retail">Retail Space</option>
                      <option value="Co-Working">Co-Working</option>
                      <option value="Godown">Warehouse/Godown</option>
                      <option value="Residential">Residential</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Preferred Visit Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder={propertyName 
                        ? `I'm interested in ${propertyName}${propertyLocation ? ` at ${propertyLocation}` : ""}. Please provide more details.`
                        : "Message"}
                      rows={4}
                      defaultValue={propertyName 
                        ? `I'm interested in "${propertyName}"${propertyLocation ? ` located at ${propertyLocation}` : ""}. Please share more details about this property and schedule a visit.`
                        : ""}
                      className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-orange text-white font-display font-bold py-4 rounded-xl text-sm tracking-wide hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {hasProperty ? "Schedule Visit" : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
