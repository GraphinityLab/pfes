import AboutPreview from '../components/AboutPreview';
import HeroSection from '../components/HeroSection';
import LineBreaker from '../components/LineBreaker';
import ServicePreviewCards from '../components/ServicePreviewCards';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero with background gallery + rotating headlines */}
      <HeroSection />

      {/* Services preview section */}
      <section id="services" className="w-full">
        <ServicePreviewCards />
      </section>

      <section className="w-full  bg-[#0F151B]">
        <LineBreaker />
      </section>

      {/* About section */}
      <section id="about" className="w-full ">
        <AboutPreview />
      </section>

      <section className="w-full  bg-[#0F151B]">
        <LineBreaker />
      </section>

      {/* About section */}
      <section id="about" className="w-full ">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
