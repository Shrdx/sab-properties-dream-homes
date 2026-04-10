const fs = require('fs');
const path = require('path');

const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'excel_data_all.json'), 'utf8'));
const others = rawData['Others'];

const categoryImages = {
  "Office Space": [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
  ],
  "Showroom": [
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
  ],
  "Godown": [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?w=800&h=600&fit=crop"
  ],
  "Co-Working": [
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1527192491265-7e15c65a1f5a?w=800&h=600&fit=crop"
  ]
};

const mapCategory = (use) => {
  if (!use) return "Office Space";
  const low = use.toLowerCase();
  if (low.includes('office')) return "Office Space";
  if (low.includes('godown')) return "Godown";
  if (low.includes('showroom')) return "Showroom";
  if (low.includes('cowork')) return "Co-Working";
  return "Office Space";
};

const getArea = (sqft) => {
  if (!sqft) return "On Request";
  if (typeof sqft === 'number') return `${sqft} sq ft`;
  return sqft.includes('sq ft') ? sqft : `${sqft} sq ft`;
};

const customCaptions = [
  "Plug & Play Office for 5–6 Team",
  "Modern Office Space for 6–10 Team",
  "Premium Office Setup for 10–15 Team",
  "Customizable Managed Office in Central Delhi",
  "Scalable Office Space for Teams up to 60",
  "Large Office Setup for 100+ Team",
  "Warehouse Space Near Kamla Market",
  "Warehouse with Independent Entry",
  "Spacious Godown with Parking",
  "Retail Showroom Near Ajmeri Gate",
  "Prime Showroom in Asaf Ali Road Market",
  "Large Showroom for Retail Chains",
  "Affordable Coworking Space in Central Delhi",
  "Flexible Coworking Office in Central Delhi",
  "Modern Coworking Space in East of Kailash",
  "Premium Coworking Office in Kirti Nagar",
  "Managed Office Space in Connaught Place",
  "Retail Showroom in CP Inner Circle",
  "Retail Showroom in Karol Bagh Market",
  "Basement Warehouse for Storage & Logistics",
  "Office Space on DB Road",
  "Large Showroom in Okhla Phase 1",
  "Industrial Warehouse in Okhla Phase 1",
  "Raw Office Space in Time Tower",
  "Managed Office in JMD Tower",
  "Retail Showroom in Lajpat Nagar Market"
];

const customDetails = [
  "5–6 Seats", "6–10 Seats", "10–15 Seats", "Managed Setup", "Up to 60 Seats", "100+ Seats",
  "Logistics Ready", "Independent Entry", "Ample Parking",
  "Retail Frontage", "Market Hub", "Premium Visibility",
  "Flexible Desk", "Managed Office", "Premium Workzone", "West Delhi Hub",
  "Premium Managed", "CP Inner Circle",
  "Market Frontage", "Basement Logistics", "Professional Setup",
  "Okhla Flagship", "Industrial Zone",
  "Raw Setup", "Managed Hub",
  "Fashion Market"
];

const categoryPoints = {
  "Office Space": ["Fully Furnished", "High-Speed WiFi", "Meeting Room"],
  "Showroom": ["Prime Frontage", "High Visibility", "Retail Display"],
  "Godown": ["Ample Storage", "Independent Entry", "Secure Access"],
  "Co-Working": ["Standard Amenities", "Managed Setup", "Networking Hub"],
  "Serviced Office": ["Fully Managed", "Premium Setup", "Concierge Service"]
};

const properties = others
  .filter(item => {
    const use = item['Prefered Use'] || "";
    const low = use.toLowerCase();
    return low.includes('office') || low.includes('godown') || low.includes('showroom') || low.includes('cowork');
  })
  .map((item, index) => {
    const use = item['Prefered Use'] || "";
    const lowUse = use.toLowerCase();
    
    let category = "Office Space";
    if (lowUse.includes('serviced')) {
      category = "Serviced Office";
    } else if (lowUse.includes('office')) {
      category = "Office Space";
    } else if (lowUse.includes('godown')) {
      category = "Godown";
    } else if (lowUse.includes('showroom')) {
      category = "Showroom";
    } else if (lowUse.includes('cowork')) {
      category = "Co-Working";
    }

    const images = categoryImages[category] || categoryImages["Office Space"];
    const image = images[index % images.length];
    const caption = customCaptions[index] || item['Address/ Caption'] || "Premium Commercial Space";
    const seats = customDetails[index] || (category === "Office Space" ? "Variable Capacity" : "Prime Use");
    const highlights = categoryPoints[category] || ["Premium Location", "Verified Listing", "Modern Amenities"];
    
    // Capitalize location properly
    const rawLocation = item['Location'] || "Central Delhi";
    const formattedLocation = rawLocation.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const description = `${caption}. This premium ${category.toLowerCase()} is strategically located in the heart of ${formattedLocation}, offering exceptional connectivity and visibility for your business. With a spacious area of ${getArea(item['Square Feet'])}, this property is designed to meet modern commercial standards, providing a professional environment that fosters productivity and growth. Ideal for companies looking for a prestigious address in one of Delhi's most sought-after commercial hubs.`;

    const featuredIds = [12, 15, 17];

    return {
      id: item['Property ID'] || (index + 1),
      image: image,
      category: category,
      status: "Raw",
      title: caption,
      location: formattedLocation,
      area: getArea(item['Square Feet']),
      size: typeof item['Square Feet'] === 'number' ? item['Square Feet'] : parseInt(item['Square Feet']) || 0,
      price: "On Request",
      priceValue: 0,
      featured: featuredIds.includes(item['Property ID'] || (index + 1)),
      description: description,
      amenities: ["Prime Location", "Power Backup", "Modern Infrastructure"],
      floor: "N/A",
      facing: "N/A",
      age: "N/A",
      highlights: highlights,
      seats: seats
    };
  });

const output = `export interface Property {
  id: number;
  image: string;
  category: string;
  status: string;
  title: string;
  location: string;
  address?: string;
  area: string;
  size: number;
  price: string;
  priceValue: number;
  featured: boolean;
  description: string;
  amenities: string[];
  floor: string;
  facing: string;
  age: string;
  highlights?: string[];
  seats?: string;
  floorPlanUrl?: string;
}

export const allProperties: Property[] = ${JSON.stringify(properties, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src/data/properties.ts'), output);
console.log(`Generated ${properties.length} properties in src/data/properties.ts`);
