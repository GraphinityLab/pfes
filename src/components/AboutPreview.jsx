import { motion } from "framer-motion";


const AboutPreview = () => {
  return (
    <section className="bg-black text-white py-28 px-6 border-t border-b border-[#B3001E]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-[#B3001E] leading-snug">
            About Us & Why We Are<br />
            The Best For the Job
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            At Powerflow, we are passionate about providing top-notch electrical services
            that prioritize safety, efficiency, and customer satisfaction. With years of
            experience in the electrical industry, we have built a reputation as a trusted
            and reliable contractor, committed to excellence in every project we undertake.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            Our team consists of licensed and highly trained electricians who bring a
            wealth of knowledge to every job, no matter the size or complexity. From
            residential to commercial and industrial projects, we deliver tailored solutions
            that meet and exceed expectations.
          </p>
          <div>
            <a
              href="/about"
              className="inline-flex items-center gap-3 bg-[#B3001E] text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-white hover:text-[#B3001E] transition-all duration-300 group"
          >
              Learn More About Us
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-80 md:h-full rounded-xl overflow-hidden border border-[#B3001E]/20"
        >
          <img
            src="/about-preview.webp"
            alt="Our team at work"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
