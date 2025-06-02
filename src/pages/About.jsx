import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Gallery from "../components/Gallery";

const reasons = [
  {
    title: "Experienced & Certified Professionals",
    desc: "Our electricians are fully licensed and certified, with deep experience in residential, commercial, and industrial settings.",
  },
  {
    title: "Commitment to Safety",
    desc: "We exceed safety codes with precision protocols that protect people, property, and compliance.",
  },
  {
    title: "High-Quality Workmanship",
    desc: "Clean installs. Zero shortcuts. We deliver flawless finishes and rock-solid reliability.",
  },
  {
    title: "Prompt & Reliable Service",
    desc: "We show up on time, communicate clearly, and stick to timelines without compromise.",
  },
  {
    title: "Customer Satisfaction Guaranteed",
    desc: "We tailor every job to your goals, making sure you're heard, supported, and satisfied.",
  },
  {
    title: "Advanced Technology & Solutions",
    desc: "From smart panels to energy-saving upgrades, we future-proof your systems with tech-forward installations.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen pt-[50px] bg-gradient-to-b from-[#06090B] to-[#0F151B] text-[#d0d0d0]">
      <main className="flex-grow px-6 py-20 max-w-6xl mx-auto">
        {/* Header */}
        <section className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[#B3001E] tracking-tight mb-6"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-white/80 leading-relaxed"
          >
            Powerflow Electrical delivers expert service with unwavering safety, precision, and trust. Backed by years of experience, we power homes and businesses across Ontario with confidence.
          </motion.p>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="text-white/60 text-sm mb-2 tracking-wider uppercase">Let’s Talk Power</p>
          <button className="inline-flex items-center gap-3 bg-[#B3001E] text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-white hover:text-[#B3001E] transition-all duration-300 group">
            Get in Touch
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.section>

        {/* Why We're Best */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-[#B3001E] mb-4"
          >
            Why Clients Choose Us
          </motion.h2>
          <p className="text-center text-white/60 text-base mb-12 max-w-xl mx-auto">
            Every wire we run is backed by purpose, pride, and proven quality.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#B3001E] uppercase mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="Gallery" className="w-full">
          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default About;
