import { useEffect, useState } from "react";

// Configurable constants
const config = {
  images: [
    "/gallery/img1.webp",
    "/gallery/img2.webp",
    "/gallery/img3.webp",
    "/gallery/img4.webp",
  ],
  headline: "Licensed Electrical Contractor You Can Trust",
  subtexts: [
    "We provide expert electrical services for homes, businesses, and large facilities with safety and precision.",
    "From panel upgrades to advanced lighting, our team ensures fully compliant, high-quality installations.",
    "Rely on our certified professionals for industrial power systems, automation, and ongoing maintenance.",
    "We bring clean energy and smart technology to your property with unmatched attention to detail.",
  ],

  imageChangeInterval: 5000,
  textChangeInterval: 8000,
  headingColor: "#B3001E",
  overlayGradient: "from-black/80 via-black/45 to-black/0",
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [fadeSubtext, setFadeSubtext] = useState(true);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % config.images.length);
    }, config.imageChangeInterval);
    return () => clearInterval(imgInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeSubtext(false);
      setTimeout(() => {
        setSubIndex((prev) => (prev + 1) % config.subtexts.length);
        setFadeSubtext(true);
      }, 400); // fade out then fade in
    }, config.textChangeInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Images with smooth crossfade */}
      <div className="absolute inset-0 z-0">
        {config.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentImage ? 20 : 10 }}
          />
        ))}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${config.overlayGradient} z-30`}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-40 h-full flex items-center px-8 md:px-36">
        <div className="text-left max-w-4xl space-y-6">
          <h1
            className="text-2xl md:text-5xl font-bold drop-shadow-lg tracking-wide uppercase"
            style={{ color: config.headingColor }}
          >
            {config.headline}
          </h1>
          <p
            className={`text-md md:text-2xl max-w-4xl text-white/80 drop-shadow-md transition-opacity duration-500 ${
              fadeSubtext ? "opacity-100" : "opacity-0"
            }`}
          >
            {config.subtexts[subIndex]}
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-[#B3001E] text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
