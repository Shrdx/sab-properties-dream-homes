import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, Building2, X, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactHeroImg from "@/assets/contact-hero.png";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address").or(z.literal("")).optional(),
  companyName: z.string().optional(),
  requirement: z.string().min(1, "Please select a given requirement"),
  visitDate: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [searchParams] = useSearchParams();
  const propertyName = searchParams.get("property");
  const propertyType = searchParams.get("type");
  const propertyLocation = searchParams.get("location");
  const hasProperty = propertyName || propertyType;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const targetUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      if (!targetUrl) {
        alert("Error: Google Sheets URL is missing from your .env file!");
        setIsSubmitting(false);
        return;
      }

      const fullMessage = hasProperty 
        ? `[Inquiry for: ${propertyName || propertyType} ${propertyLocation ? `at ${propertyLocation}` : ''}] ${data.message || ''}` 
        : data.message;

      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("fullName", `${data.firstName} ${data.lastName}`);
      urlEncodedData.append("email", data.email || "");
      urlEncodedData.append("phone", data.phone);
      urlEncodedData.append("service", data.requirement);
      urlEncodedData.append("message", fullMessage || "");
      urlEncodedData.append("company", data.companyName || "");
      urlEncodedData.append("visitDate", data.visitDate || "");

      await fetch(targetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
        toast.error("Failed to send message.");
      } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (propertyType) {
      setValue("requirement", propertyType);
    }
    if (propertyName) {
      setValue("message", `I'm interested in "${propertyName}"${propertyLocation ? ` located at ${propertyLocation}` : ""}. Please share more details about this property and schedule a visit.`);
    }
  }, [propertyType, propertyName, propertyLocation, setValue]);

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
          <p className="text-white/80 font-body text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
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
              <p className="text-muted-foreground font-body text-lg lg:text-xl leading-relaxed mb-12">
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
                    <h4 className="font-display font-bold text-foreground text-lg lg:text-xl mb-1">Our Office</h4>
                    <p className="text-muted-foreground font-body text-base lg:text-lg">
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
                    <h4 className="font-display font-bold text-foreground text-lg lg:text-xl mb-1">Phone</h4>
                    <p className="text-muted-foreground font-body text-base lg:text-lg">
                      +91 8700513200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg lg:text-xl mb-1">Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sabproperties.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body text-base lg:text-lg hover:text-primary transition-colors">
                      info@sabproperties.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-lg lg:text-xl mb-1">Working Hours</h4>
                    <p className="text-muted-foreground font-body text-base lg:text-lg">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Note */}
              <div className="mt-12 p-6 bg-section rounded-xl border border-gray-200">
                <p className="text-muted-foreground font-body text-sm lg:text-base">
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

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit, (errs) => { console.log(errs); alert("Please check the form for errors in red."); })}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm lg:text-base mb-2">
                        First Name *
                      </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        placeholder="First Name"
                        className={`w-full px-4 py-3.5 rounded-xl bg-section border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} text-foreground placeholder:text-muted-foreground font-body text-base lg:text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        Last Name *
                      </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        placeholder="Last Name"
                        className={`w-full px-4 py-3.5 rounded-xl bg-section border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        Phone *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Phone or +91"
                        className={`w-full px-4 py-3.5 rounded-xl bg-section border ${errors.phone ? 'border-red-500' : 'border-gray-200'} text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-foreground font-display font-semibold text-sm mb-2">
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                        className={`w-full px-4 py-3.5 rounded-xl bg-section border ${errors.email ? 'border-red-500' : 'border-gray-200'} text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      {...register("companyName")}
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
                      {...register("requirement")}
                      className={`w-full px-4 py-3.5 rounded-xl bg-section border ${errors.requirement ? 'border-red-500' : 'border-gray-200'} text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                    >
                      <option value="" disabled>Space Requirement</option>
                      <option value="Office/Serviced Office">Office/Serviced Office</option>
                      <option value="Showroom">Showroom</option>
                      <option value="Co-Working">Co-Working</option>
                      <option value="Godown">Warehouse/Godown</option>
                      <option value="Residential">Residential</option>
                    </select>
                    {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement.message}</p>}
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Preferred Visit Date
                    </label>
                    <input
                      {...register("visitDate")}
                      type="date"
                      className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-foreground font-display font-semibold text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder={propertyName 
                        ? `I'm interested in ${propertyName}${propertyLocation ? ` at ${propertyLocation}` : ""}. Please provide more details.`
                        : "Message"}
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-orange text-white font-display font-bold py-4 rounded-xl text-sm tracking-wide hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {hasProperty ? "Schedule Visit" : "Send Message"}
                      </>
                    )}
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
