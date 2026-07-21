import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroImg from "@/assets/market-insights.jpg";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Blog | SabProperties - Real Estate Insights</title>
        <meta
          name="description"
          content="Read the latest insights, tips, and news about commercial and residential real estate in Delhi from the SabProperties team."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Real Estate Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
          className="relative text-center px-4 pt-16"
        >
          <h1 className="font-display font-extrabold text-5xl md:text-6xl text-white mb-6">
            Real Estate Insights
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-body">
            Expert advice, market trends, and tips for finding the perfect property in Delhi NCR.
          </p>
        </motion.div>
      </section>

      <main className="flex-grow py-24 flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-800 mb-4">Coming Soon</h2>
            <p className="font-body text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              We are working hard to bring you exciting real estate insights and market trends. Stay tuned for our upcoming articles!
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
