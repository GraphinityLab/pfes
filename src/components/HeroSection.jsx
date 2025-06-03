import { useEffect, useState } from "react";

// Configurable constants
const config = {
  images: [
    "/gallery/img1.webp",
    "/gallery/img2.webp",
    "/gallery/img3.webp",
    "/gallery/img4.webp",
  ],
  headline: "Commercial and Residential Electrical Services",

  imageChangeInterval: 5000,
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
            className={
              "text-md md:text-3xl max-w-4xl text-white/80 drop-shadow-md transition-opacity duration-500"
            }
          >
            Available, Affordable, Punctual, Reliable and Safe
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-3 bg-[#B3001E] text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-white hover:text-[#B3001E] transition-all duration-300 group"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
