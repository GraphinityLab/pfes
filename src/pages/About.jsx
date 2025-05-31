import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Gallery from "../components/Gallery";


const reasons = [
  {
    title: "Experienced & Certified Professionals",
    desc: "Our electricians are fully licensed and certified, with extensive experience in diverse electrical environments. We bring expert insight to every project.",
  },
  {
    title: "Commitment to Safety",
    desc: "We follow strict safety standards and never compromise on procedures. Your safety and compliance are always protected.",
  },
  {
    title: "High-Quality Workmanship",
    desc: "We focus on precision, durability, and clean execution. Every job is done right the first time, with no loose ends.",
  },
  {
    title: "Prompt & Reliable Service",
    desc: "Our team is professional, punctual, and responsive. We respect your time and keep your project on track.",
  },
  {
    title: "Customer Satisfaction Guaranteed",
    desc: "We listen, adapt, and deliver. Our goal is to build lasting relationships by exceeding expectations.",
  },
  {
    title: "Advanced Technology & Solutions",
    desc: "We implement modern solutions from smart home upgrades to energy-efficient systems for long-term value.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen pt-[72px] bg-[#0F151B] text-[#d0d0d0]">
      <main className="flex-grow px-6 py-20 max-w-6xl mx-auto">
        {/* About Header */}
        <section className="mb-10 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-[#B3001E] tracking-tight mb-6"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-white/80 leading-relaxed"
          >
            At Powerflow Electrical Services, we’re passionate about delivering
            exceptional electrical solutions with a focus on safety, precision,
            and long-term reliability. Trusted across Ontario, we bring
            integrity and excellence to every project.
          </motion.p>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <button className="inline-flex items-center gap-3 bg-[#B3001E] text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-[#8e0017] transition-all duration-300 group">
            Get in Touch
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.section>
        {/* Why We're Best */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center text-[#B3001E] mb-12">
            Why We’re the Right Choice
          </h2>
          <div className="divide-y divide-[#B3001E]/75 overflow-hidden">
            {reasons.map((item, idx) => (
              <div key={idx} className="p-6  transition">
                <h3 className="text-xl font-semibold text-[#B3001E] uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="Gallery" className="w-full">
          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default About;
