import HeroSection from "../components/HeroSection";
import ServicePreviewCards from "../components/ServicePreviewCards";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero with background gallery + rotating headlines */}
      <HeroSection />

      {/* Services preview section */}
      <section id="services" className="w-full bg-white text-[#0F151B]">
        <ServicePreviewCards />
      </section>
    </div>
  );
};

export default Home;
