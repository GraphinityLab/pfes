import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const categories = ["All", "Residential", "Commercial"];

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
  { title: "Office Ceiling Light Grid and Ductwork Rough In", img: "/gallery/commercial/com2.webp", category: "Commercial", layout: "hor" },
  { title: "Multi Panel Disconnect and Switchgear Wall", img: "/gallery/commercial/com3.webp", category: "Commercial", layout: "hor" },
  { title: "Dedicated Griddle Circuit and Commercial Hookup", img: "/gallery/commercial/com4.webp", category: "Commercial", layout: "ver" },
  { title: "Dual Fryer Installation with Power Routing", img: "/gallery/commercial/com5.webp", category: "Commercial", layout: "square" },
  { title: "LED Grid Lighting Across Ceiling Layout", img: "/gallery/commercial/com6.webp", category: "Commercial", layout: "square" },
];

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
      className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-2xl transition duration-300"
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ aspectRatio: aspect }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
        <div className="text-white text-sm font-medium flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full">
          <FaEye className="text-white/80 text-xs" />
          {item.title}
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-gradient-to-t from-[#06090B] to-[#0F151B] text-white rounded-4xl border border-[#B3001E] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#B3001E] to-[#B3001E] mb-12">
          Our Work
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border shadow-sm
                ${
                  activeCategory === cat
                    ? "bg-[#B3001E] text-white border-transparent shadow-md"
                    : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
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