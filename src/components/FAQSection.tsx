import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between an office space and co-working space?",
    answer: "An office space is a private facility that your business rents solely, so you're free to layout, brand, and customize it into a consistent and dedicated workspace. Whereas a co-working space is a communal managed workspace where different businesses work alongside each other using shared facilities and common areas. Office spaces are ideal for established teams that require private and stable work environment, co-working spaces are the best option for start-ups, freelancers, or teams that require the utmost flexibility over long-term investment commitments. Both types are available in central Delhi through SAB Properties.",
  },
  {
    question: "What is the cost of commercial office space in central Delhi?",
    answer: "The cost of commercial office space in central Delhi depends upon factors like size, location, and build-out. Certain areas like Asaf Ali Road, and Connaught Place are extremely popular for commercial office space and the price could range from market rates in serviced and managed office spaces to costlier large floor plates for large companies with 100+ employees. For an exact estimation you need to consult a professional. SAB Properties provides market price for commercial office spaces in central Delhi based on client's need and requirement.",
  },
  {
    question: "Should I buy a showroom if customers regularly visit my business?",
    answer: "Absolutely yes! If your clients frequently visit your store to browse, select and purchase products/services then a showroom is exactly what you need as prime location and high visibility will directly boost your sales. High footfall areas like Ajmeri Gate, and Asaf Ali Road provide visibility with potential of thousands of customers viewing your store on a daily basis. However, if your client engagement is mainly through consultations (meetings and presentations) than office spaces might suit you better.",
  },
  {
    question: "Can I start a business from co-working and move into a private office space later on?",
    answer: "This is perhaps the most conventional and logical approach taken by many start-up ventures in Delhi. Co-working space gives you the advantage of professional address, infrastructure and networking opportunities at considerably lower costs with a reduced long-term financial commitment. Transitioning to a managed office space or a private office floor once your business grows and demands predictable space requirements ensures complete privacy and branding as per business standards. SAB Properties is equipped to facilitate this transitional plan to any of the available options.",
  },
  {
    question: "What all factors should be considered when choosing a commercial space in Delhi?",
    answer: (
      <div className="space-y-2">
        <p>When opting for commercial space in Delhi, keep the following factors in mind:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Location and footfall:</strong> the centre of the city holds prime visibility</li>
          <li><strong>Size and scalability:</strong> your team will grow; anticipate size requirements over next 12-24 months</li>
          <li><strong>Lease flexibility:</strong> what is the duration of your commitment?</li>
          <li><strong>Infrastructure readiness:</strong> IT, power back-up, security, parking etc.</li>
          <li><strong>Legal and documentation clarity:</strong> check OC obtained, property is registered, and clear title deed.</li>
        </ul>
        <p>A reputable consultant like SAB Properties can verify these crucial factors prior to making any recommendations.</p>
      </div>
    ),
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-display font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our real estate services and properties in Delhi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-100 last:border-0 py-2">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
