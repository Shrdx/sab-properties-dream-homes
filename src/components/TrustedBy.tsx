import { motion } from "framer-motion";

const clients = [
  "/clients/Amul.jpg",
  "/clients/Aquila.jfif",
  "/clients/Gostops.png",
  "/clients/ase.png",
  "/clients/berger.png",
  "/clients/bisleri.png",
  "/clients/boi.png",
  "/clients/fonzo.jpg",
  "/clients/img-Alembic-Pharma.jpg",
  "/clients/mutooth.jpg",
  "/clients/nerolac.jpg",
  "/clients/orient.jpg",
  "/clients/policybazaar-com-online-websites-o89di.jpg",
  "/clients/powertex.png",
  "/clients/promoskope.png",
  "/clients/sbi.png",
  "/clients/shopx.jpg",
  "/clients/swiggy.png",
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-primary font-display font-bold text-sm tracking-[0.2em] uppercase">
          Our Partners
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-3">
          Trusted By Leading Brands
        </h2>
      </motion.div>

      <div className="relative">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* First set of logos */}
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 my-4"
            >
              <img
                src={logo}
                alt={`Client ${i + 1}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
