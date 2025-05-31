import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Categories
const categories = ["All", "Residential", "Commercial"];

// Gallery items with manual layout config
const galleryItems = [
  { title: "Upper-Level Lighting & Conduit Prep", img: "/gallery/residential/res1.webp", category: "Residential", layout: "hor" },
  { title: "Pot Light & Circuit Install, Basement Finish", img: "/gallery/residential/res2.webp", category: "Residential", layout: "square" },
  { title: "Exterior Wall Sconce Wiring, Night Testing", img: "/gallery/residential/res3.webp", category: "Residential", layout: "ver" },
  { title: "Recessed Lighting in Multi-Door Hallway", img: "/gallery/residential/res4.webp", category: "Residential", layout: "ver" },
  { title: "Main Breaker Panel, Labelled Circuits", img: "/gallery/residential/res5.webp", category: "Residential", layout: "ver" },
  { title: "Custom LED Cross Feature, Accent Wiring", img: "/gallery/residential/res6.webp", category: "Residential", layout: "ver" },
  { title: "Exterior Service Conduit & Gas Meter Clearance", img: "/gallery/residential/res7.webp", category: "Residential", layout: "ver" },
  { title: "Structured Wiring Panel with Network Termination", img: "/gallery/residential/res8.webp", category: "Residential", layout: "hor" },
{ title: "Industrial LED Bay Lights in Warehouse", img: "/gallery/commercial/com1.webp", category: "Commercial", layout: "ver" },
{ title: "Drop Ceiling Panel Lighting in Office", img: "/gallery/commercial/com2.webp", category: "Commercial", layout: "hor" },
{ title: "LED Grid Lighting Across Ceiling Layout", img: "/gallery/commercial/com3.webp", category: "Commercial", layout: "hor" },
{ title: "Multi Panel Disconnect and Switchgear Wall", img: "/gallery/commercial/com4.webp", category: "Commercial", layout: "ver" },
{ title: "Dedicated Griddle Circuit and Commercial Hookup", img: "/gallery/commercial/com5.webp", category: "Commercial", layout: "square" },
{ title: "Dual Fryer Installation with Power Routing", img: "/gallery/commercial/com6.webp", category: "Commercial", layout: "square" },
{ title: "Office Ceiling Light Grid and Ductwork Rough In", img: "/gallery/commercial/com7.webp", category: "Commercial", layout: "ver" },

];

// ImageCard component with layout-based aspect ratio
const ImageCard = ({ item }) => {
  let aspect = "1 / 1";
  if (item.layout === "hor") aspect = "3 / 2";
  if (item.layout === "ver") aspect = "2 / 3";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="break-inside-avoid overflow-hidden rounded-xl relative group bg-white/5 border border-white/10 backdrop-blur-md shadow hover:shadow-xl transition duration-300"
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ aspectRatio: aspect }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white text-sm font-semibold backdrop-blur bg-black/30">
        {item.title}
      </div>
    </motion.div>
  );
};

// Main Gallery component
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-[#0F151B] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl  font-bold text-center text-[#B3001E] mb-12">
          Work Portfolio Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-[#B3001E] text-white border-transparent shadow"
                    : "bg-transparent text-white border-white/20 hover:bg-white/10"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 transition-all duration-500">
          <AnimatePresence mode="sync">
            {filteredItems.map((item) => (
              <ImageCard key={item.img} item={item} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
