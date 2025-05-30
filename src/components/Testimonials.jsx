import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "We had Powerflow handle the electrical work for our home renovation, and they were fantastic from start to finish. The team was professional, courteous, and completed the work ahead of schedule. We couldn’t be happier with the results!",
    author: "Sarah M.",
    title: "Homeowner",
    stars: 5,
  },
  {
    quote:
      "Our business needed a complete lighting upgrade, and Powerflow delivered exceptional service. They worked around our hours to minimize disruptions and provided top-notch workmanship. We’ve noticed a significant reduction in energy costs thanks to their expertise!",
    author: "James L.",
    title: "Business Owner",
    stars: 5,
  },
  {
    quote:
      "We had an emergency electrical issue, and Powerflow responded immediately. Their electrician arrived promptly, diagnosed the problem, and had it fixed in no time. Truly impressed with their efficiency and professionalism!",
    author: "Rachel T.",
    title: "Property Manager",
    stars: 5,
  },
  {
    quote:
      "I’ve used Powerflow for multiple projects, and they always deliver outstanding results. The team is trustworthy, communicative, and pays attention to every detail. I wouldn’t go anywhere else for my electrical needs.",
    author: "Mark D.",
    title: "General Contractor",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-t from-[#0F151B]/100 to-[#080A0E]/100 text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#B3001E]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-right mb-20 px-4">
        <h2 className="text-5xl font-bold  tracking-tight text-[#B3001E]">
          What Our Clients Say About Us
        </h2>
        <p className="text-white/70 mt-4 text-right text-lg max-w-4xl ml-auto leading-relaxed">
          We’re proud to be the trusted electrical partner for homeowners,
          businesses, and developers across Ontario. Here’s what they’re saying
          about our reliability, precision, and commitment to quality.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {testimonials.map(({ quote, author, title, stars }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 rounded-xl p-8 pt-6 pb-10 shadow-lg border border-white/10 hover:border-[#B3001E] hover:shadow-[0_0_30px_#B3001E66] transition-all duration-300"
          >
            <FaQuoteLeft className="text-[#B3001E] text-xl mb-4 opacity-70" />

            <p className="text-white/90 italic leading-relaxed mb-6">
              “{quote}”
            </p>

            <div className="flex items-center justify-end mb-3 space-x-1">
              {Array.from({ length: stars }).map((_, i) => (
                <motion.div
                  key={i}
                  className="group-hover:scale-120 group-hover:rotate-15 transition-transform duration-300"
                >
                  <FaStar className="text-[#FFD700] text-sm" />
                </motion.div>
              ))}
            </div>

            <div className="text-right">
              <p className="text-white font-semibold">{author}</p>
              <p className="text-white/60 text-sm">{title}</p>
            </div>

            <FaQuoteRight className="absolute bottom-4 right-4 text-[#B3001E] text-lg opacity-40 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
