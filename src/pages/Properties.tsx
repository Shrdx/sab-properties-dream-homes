import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Maximize, ArrowRight, Building2, Home, Store, Warehouse, Users, Search, SlidersHorizontal, X, ChevronDown, Check, Lock, Phone, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import propertiesImg from "@/assets/properties.jpg";
import propertyHeroImg from "@/assets/property-hero.png";

const locations = ["All Locations", "Connaught Place", "Karol Bagh", "Okhla", "Cyber Hub Gurugram", "Golf Course Road", "Vasant Kunj"];
const propertyTypes = ["All Types", "Office Space", "Retail", "Godown", "Co-Working", "Serviced Office"];
const statusOptions = ["All", "Raw", "Furnished", "Unfurnished"];
const priceRanges = [];
const sizeRanges = ["Any Size", "Under 1000 sq.ft", "1000-5000 sq.ft", "5000-10000 sq.ft", "10000+ sq.ft"];

export const allProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    category: "Office Space",
    status: "Raw",
    title: "Premium Office at Connaught Place",
    location: "Connaught Place, New Delhi",
    address: "Connaught Place, New Delhi",
    area: "5,000 sq ft",
    size: 5000,
    price: "₹4.5 Lac/month",
    priceValue: 4.5,
    featured: true,
    description: "Experience luxury at its finest with this premium office space located in the heart of Connaught Place. Features include modern glass facades, central air conditioning, 24/7 security, and dedicated parking spaces.",
    amenities: ["Central AC", "Power Backup", "Security 24/7", "Lift", "Parking", "Pantry"],
    floor: "12th Floor",
    facing: "East",
    age: "New Construction",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Retail",
    status: "Raw",
    title: "High Street Retail Space",
    location: "Karol Bagh, New Delhi",
    address: "Karol Bagh, New Delhi",
    area: "2,500 sq ft",
    size: 2500,
    price: "₹3.2 Lac/month",
    priceValue: 3.2,
    featured: true,
    description: "Prime retail location on the busiest high street in Karol Bagh. Perfect for flagship stores, boutiques, or restaurants with high footfall throughout the day.",
    amenities: ["Showcase Windows", "Storage Room", "Staff Room", "Toilets", "Street Access"],
    floor: "Ground Floor",
    facing: "Main Road",
    age: "5 Years Old",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "Godown",
    status: "Raw",
    title: "Warehouse in Industrial Area",
    location: "Okhla, New Delhi",
    address: "Okhla, New Delhi",
    area: "10,000 sq ft",
    size: 10000,
    price: "₹2.8 Lac/month",
    priceValue: 2.8,
    featured: false,
    description: "Spacious warehouse facility in Okhla Industrial Area with easy access to major highways. Ideal for storage, logistics, or manufacturing operations.",
    amenities: ["High Ceiling", "Loading Dock", "Power Capacity 50KW", "Fire Safety", "CCTV"],
    floor: "Ground Floor",
    facing: "North",
    age: "8 Years Old",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    category: "Co-Working",
    status: "Furnished",
    title: "Flexible Co-Working Space",
    location: "Cyber Hub Gurugram",
    address: "Cyber Hub Gurugram",
    area: "10 - 100 Seats",
    size: 100,
    price: "₹8,000/desk/month",
    priceValue: 0.008,
    featured: true,
    description: "Modern co-working space at Cyber Hub with flexible seating options. Includes high-speed internet, meeting rooms, and a vibrant community of startups and enterprises.",
    amenities: ["High-Speed WiFi", "Meeting Rooms", "Printer Access", "Lounge", "Kitchen", "Events Space"],
    floor: "Multiple Floors",
    facing: "Open Layout",
    age: "New Setup",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
category: "Office Space",
    status: "Raw",
    title: "Office Space in Vasant Kunj",
    location: "Vasant Kunj, New Delhi",
    address: "Vasant Kunj, New Delhi",
    area: "2,400 sq ft",
    size: 2400,
    price: "₹2.4 Cr",
    priceValue: 24,
    featured: false,
    description: "Stunning 4BHK luxury apartment in Vasant Kunj with premium finishes, modular kitchen, and access to world-class amenities including pool and gym.",
    amenities: ["Swimming Pool", "Gym", "Club House", "Garden", "Kids Play Area", "24/7 Security"],
    floor: "8th Floor",
    facing: "East",
    age: "2 Years Old",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop",
    category: "Office Space",
    status: "Furnished",
    title: "IT Park Office Suite",
    location: "Golf Course Road, Gurugram",
    address: "Golf Course Road, Gurugram",
    area: "8,000 sq ft",
    size: 8000,
    price: "₹6.5 Lac/month",
    priceValue: 6.5,
    featured: true,
    description: "State-of-the-art IT park office with world-class amenities, high-speed internet, and professional environment ideal for IT/ITES companies.",
    amenities: ["High-Speed WiFi", "Server Room", "Conference Rooms", "Cafeteria", "Gym", "24/7 Security"],
    floor: "5th Floor",
    facing: "East",
    age: "New Setup",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    category: "Godown",
    status: "Raw",
    title: "Industrial Warehouse",
    location: "Okhla Phase 2, New Delhi",
    address: "Okhla Phase 2, New Delhi",
    area: "15,000 sq ft",
    size: 15000,
    price: "₹4.5 Lac/month",
    priceValue: 4.5,
    featured: false,
    description: "Large industrial warehouse in Okhla with excellent loading facilities and proximity to major highways. Perfect for manufacturing or logistics operations.",
    amenities: ["Loading Dock", "High Ceiling", "Power 100KW", "CCTV", "Fire Safety", "Office Space"],
    floor: "Ground Floor",
    facing: "North",
    age: "10 Years Old",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
    category: "Retail",
    status: "Raw",
    title: "Mall Retail Space",
    location: "Connaught Place, New Delhi",
    address: "Connaught Place, New Delhi",
    area: "3,200 sq ft",
    size: 3200,
    price: "₹5.5 Lac/month",
    priceValue: 5.5,
    featured: false,
    description: "Premium mall retail space with excellent visibility and footfall. Perfect for premium brands looking to establish presence in CP.",
    amenities: ["Escalator Access", "Central AC", "Storage", "Staff Room", "Attractive Display Area"],
    floor: "1st Floor",
    facing: "Mall Interior",
    age: "New Setup",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    category: "Co-Working",
    status: "Furnished",
    title: "Premium Startup Hub",
    location: "Sector 44, Gurugram",
    address: "Sector 44, Gurugram",
    area: "20 - 150 Seats",
    size: 150,
    price: "₹10,500/desk/month",
    priceValue: 0.0105,
    featured: false,
    description: "Modern vibrant co-working hub specifically designed for fast-growing startups and creative agencies. Features expansive glass windows, phone booths, and an artisan coffee bar.",
    amenities: ["High-Speed WiFi", "Artisan Coffee", "Phone Booths", "Meeting Rooms", "Biometric Access"],
    floor: "3rd & 4th Floors",
    facing: "North East",
    age: "1 Year Old",
  },

];
const Properties = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedSize, setSelectedSize] = useState("Any Size");
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState<typeof allProperties[0] | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormData, setLeadFormData] = useState({ name: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedType(categoryParam);
      setShowFilters(true);
      const filtered = allProperties.filter(p => p.category === categoryParam);
      setFilteredProperties(filtered);
      setActiveFiltersCount(1);
    }
  }, [searchParams]);

  const applyFilters = () => {
    let filtered = [...allProperties];
    let count = 0;

    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(p => p.location.includes(selectedLocation));
      count++;
    }
    if (selectedType !== "All Types") {
      filtered = filtered.filter(p => p.category === selectedType);
      count++;
    }
    if (selectedStatus !== "All") {
      filtered = filtered.filter(p => p.status === selectedStatus);
      count++;
    }
    if (selectedSize !== "Any Size") {
      if (selectedSize === "Under 1000 sq.ft") filtered = filtered.filter(p => p.size < 1000);
      else if (selectedSize === "1000-5000 sq.ft") filtered = filtered.filter(p => p.size >= 1000 && p.size <= 5000);
      else if (selectedSize === "5000-10000 sq.ft") filtered = filtered.filter(p => p.size > 5000 && p.size <= 10000);
      else if (selectedSize === "10000+ sq.ft") filtered = filtered.filter(p => p.size > 10000);
      count++;
    }

    setFilteredProperties(filtered);
    setActiveFiltersCount(count);
  };

  const clearFilters = () => {
    setSelectedLocation("All Locations");
    setSelectedType("All Types");
    setSelectedStatus("All");
    setSelectedSize("Any Size");
    setFilteredProperties(allProperties);
    setActiveFiltersCount(0);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    if (query === "") {
      applyFilters();
    } else {
      const filtered = allProperties.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.location.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
      setFilteredProperties(filtered);
    }
  };

  const handlePropertyClick = (property: typeof allProperties[0]) => {
    setSelectedProperty(property);
    setShowLeadForm(true);
    setFormSubmitted(false);
    setLeadFormData({ name: "", phone: "" });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeModal = () => {
    setShowLeadForm(false);
    setSelectedProperty(null);
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={propertyHeroImg} alt="Our Properties" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
          className="relative text-center px-4"
        >
          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Our Properties
          </h1>
          <p className="text-white/80 font-body text-xl">
            Discover premium spaces across Delhi NCR
          </p>
        </motion.div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, location, or category..."
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-display font-semibold text-sm">Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={applyFilters}
              className="gradient-orange text-white font-display font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-md"
            >
              Search
            </motion.button>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6 border-t">
                  <div className="relative">
                    <label className="block text-xs font-display font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => { setSelectedLocation(e.target.value); applyFilters(); }}
                      className="w-full px-4 py-2.5 rounded-lg bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-display font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Property Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => { setSelectedType(e.target.value); applyFilters(); }}
                      className="w-full px-4 py-2.5 rounded-lg bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      {propertyTypes.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-display font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => { setSelectedStatus(e.target.value); applyFilters(); }}
                      className="w-full px-4 py-2.5 rounded-lg bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      {statusOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-display font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Size</label>
                    <select
                      value={selectedSize}
                      onChange={(e) => { setSelectedSize(e.target.value); applyFilters(); }}
                      className="w-full px-4 py-2.5 rounded-lg bg-section border border-gray-200 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      {sizeRanges.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 bottom-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation !== "All Locations" && (
                      <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                      >
                        {selectedLocation}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedLocation("All Locations")} />
                      </motion.span>
                    )}
                    {selectedType !== "All Types" && (
                      <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                      >
                        {selectedType}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedType("All Types")} />
                      </motion.span>
                    )}
                    {selectedStatus !== "All" && (
                      <motion.span
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                      >
                        {selectedStatus}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedStatus("All")} />
                      </motion.span>
                    )}
                  </div>
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-primary hover:text-primary/80 font-display font-semibold text-sm transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results Count */}
      {(selectedLocation !== "Faridabad" && selectedLocation !== "East of Kailash") && (
      <section className="py-6 bg-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground font-body">
              {filteredProperties.length === 0 
                ? "Showing 0 properties" 
                : `Showing ${filteredProperties.length} properties`}
            </p>
          </div>
        </div>
      </section>
      )}

      {/* Properties Grid */}
      <section className={`py-12 ${(selectedLocation === "Faridabad" || selectedLocation === "East of Kailash") ? "bg-section" : "relative"}`}>
        {(selectedLocation !== "Faridabad" && selectedLocation !== "East of Kailash") && (
        <div className="absolute inset-0">
          <img src={propertiesImg} alt="Properties" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        )}
        <div className="relative container mx-auto px-4 lg:px-8">
          {(selectedLocation === "Faridabad" || selectedLocation === "East of Kailash") ? (
            <div className="flex flex-col items-center justify-center py-32">
              <h2 className="font-display font-extrabold text-5xl md:text-6xl text-primary mb-4">Coming Soon!</h2>
              <p className="text-muted-foreground font-body text-lg">Properties in {selectedLocation} will be available soon.</p>
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32">
              <h2 className="font-display font-extrabold text-5xl md:text-6xl text-primary mb-4">Coming Soon!</h2>
              <p className="text-muted-foreground font-body text-lg">No properties available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, i) => (
              <motion.div
                key={property.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
                    >
                      <Lock className="w-4 h-4 text-primary" />
                      <span className="font-display font-semibold text-sm text-foreground">Click to Enquire</span>
                    </motion.div>
                  </div>
                  <span className="absolute top-4 left-4 gradient-orange text-white font-display font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {property.category}
                  </span>
                  {property.featured && (
                    <span className="absolute top-4 right-4 bg-white text-foreground font-display font-bold text-xs px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-body mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    {property.address || property.location}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4" />
                      {property.area}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-primary" />
                      {property.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:gap-3 transition-all">
                      Click to View
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lead Form Modal */}
      <AnimatePresence>
        {showLeadForm && selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {!formSubmitted ? (
                <>
                  {/* Property Preview */}
                  <div className="relative h-40">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="gradient-orange text-white font-display font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedProperty.category}
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-white mt-2">
                        {selectedProperty.title}
                      </h3>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6 p-4 bg-primary/5 rounded-xl">
                      <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground">Unlock Property Details</h4>
                        <p className="text-muted-foreground text-sm">Fill in your details to view complete information</p>
                      </div>
                    </div>

                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-display font-semibold text-foreground mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="text"
                            required
                            value={leadFormData.name}
                            onChange={(e) => setLeadFormData({ ...leadFormData, name: e.target.value })}
                            placeholder="Enter your name"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-display font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="tel"
                            required
                            value={leadFormData.phone}
                            onChange={(e) => setLeadFormData({ ...leadFormData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-section border border-gray-200 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full gradient-orange text-white font-display font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 mt-6"
                      >
                        View Complete Details
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </form>

                    <p className="text-center text-muted-foreground text-xs mt-4">
                      By submitting, you agree to receive calls/messages about this property.
                    </p>
                  </div>
                </>
              ) : (
                /* Property Details */
                <div className="max-h-[85vh] overflow-y-auto">
                  <div className="relative h-56">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="gradient-orange text-white font-display font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedProperty.category}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl text-white mt-2">
                        {selectedProperty.title}
                      </h3>
                      <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {selectedProperty.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Quick Info */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-section rounded-xl">
                        <Maximize className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="font-display font-bold text-sm text-foreground">{selectedProperty.area}</p>
                        <p className="text-xs text-muted-foreground">Size</p>
                      </div>
                      <div className="text-center p-3 bg-section rounded-xl">
                        <Check className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="font-display font-bold text-sm text-foreground">{selectedProperty.category}</p>
                        <p className="text-xs text-muted-foreground">Condition</p>
                      </div>
                      <div className="text-center p-3 bg-section rounded-xl">
                        <Building2 className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="font-display font-bold text-sm text-foreground">{selectedProperty.floor}</p>
                        <p className="text-xs text-muted-foreground">Floor</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="font-display font-bold text-foreground mb-2">About This Property</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedProperty.description}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-display font-bold text-foreground mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProperty.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-section rounded-xl">
                      <div>
                        <p className="text-muted-foreground text-xs">Facing</p>
                        <p className="font-display font-semibold text-sm text-foreground">{selectedProperty.facing}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Property Age</p>
                        <p className="font-display font-semibold text-sm text-foreground">{selectedProperty.age}</p>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-orange-50 rounded-xl mb-6">
                      <div>
                        <p className="text-muted-foreground text-xs">Price</p>
                        <p className="font-display font-extrabold text-2xl text-primary">{selectedProperty.price}</p>
                      </div>
                      <Link
                        to={`/contact?property=${encodeURIComponent(selectedProperty.title)}&category=${encodeURIComponent(selectedProperty.category)}&location=${encodeURIComponent(selectedProperty.location)}`}
                        onClick={closeModal}
                        className="gradient-orange text-white font-display font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
                      >
                        Schedule Visit
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Contact Note */}
                    <p className="text-center text-muted-foreground text-xs">
                      Our team will contact you within 24 hours to discuss this property.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Properties;
