import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaHome, FaIndustry, FaBuilding, FaSolarPanel } from "react-icons/fa";

const service = [
  {
    title: "Residential Electrical Services",
    description:
      "Tailored solutions for modern homes. We upgrade, install, and protect your household electrical systems to ensure safety, comfort, and efficiency.",
    points: [
      "Home Wiring & Rewiring: Safe and up-to-date wiring for new constructions, renovations, or outdated systems.",
      "Lighting Installations: Indoor and outdoor lighting, including energy-efficient solutions.",
      "Electrical Panel Upgrades: Ensure your home’s electrical system can handle modern energy demands.",
      "Surge Protection: Protect your home from power surges and electrical damage.",
      "Troubleshooting & Repairs: Fast diagnosis and repair of electrical issues to keep your home safe.",
    ],
    link: "/contact?service=residential",
    icon: <FaHome className="text-2xl text-[#B3001E]" />,
    image: "/services/res.webp",
  },
  {
    title: "Industrial Electrical Services",
    description:
      "Comprehensive and durable solutions for industrial operations. We handle high-capacity systems, automation, and preventive strategies.",
    points: [
      "Machine & Equipment Wiring: Safe and precise wiring solutions for heavy machinery and equipment.",
      "Electrical Safety Audits: Comprehensive inspections to ensure compliance and safety.",
      "Power Distribution: Custom power distribution systems designed for your facility’s needs.",
      "Preventive Maintenance: Keep your systems running smoothly with routine checks and servicing.",
      "Automation & Control Systems: Advanced control systems for efficient facility management.",
    ],
    link: "/contact?service=industrial",
    icon: <FaIndustry className="text-2xl text-[#B3001E]" />,
    image: "/services/indus.webp",
  },
  {
    title: "Commercial Electrical Services",
    description:
      "Reliable infrastructure to keep your business running. From lighting upgrades to emergency support, we’ve got it covered.",
    points: [
      "Office & Retail Installations: From wiring to lighting, we power your business space efficiently.",
      "Data & Communication Cabling: Reliable and efficient network cabling solutions for your business.",
      "LED Lighting Upgrades: Energy-saving lighting installations to reduce operational costs.",
      "Electrical System Maintenance: Regular checks and preventive maintenance to avoid downtime.",
      "Emergency Services: Rapid response for unexpected electrical issues affecting your operations.",
    ],
    link: "/contact?service=commercial",
    icon: <FaBuilding className="text-2xl text-[#B3001E]" />,
    image: "/services/com.webp",
  },
  {
    title: "Specialty Services",
    description:
      "Innovative energy and smart home solutions. Upgrade your lifestyle or business with solar, EV charging, and smart integrations.",
    points: [
      "Backup Generators: Installation and maintenance of reliable backup power solutions.",
      "Smart Home & Automation: Integrate the latest smart technology for convenience and efficiency.",
      "Solar Panel Installation: Harness the power of the sun with our expert solar energy services.",
      "EV Charging Stations: Convenient electric vehicle charging solutions for homes and businesses.",
    ],
    link: "/contact?service=specialty",
    icon: <FaSolarPanel className="text-2xl text-[#B3001E]" />,
    image: "/services/special.webp",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#06090B] to-[#0F151B] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#B3001E] tracking-tight py-10 mb-4">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-white/80">
            Expert Solutions for Residential, Commercial & Industrial Needs
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-white/60 text-base md:text-lg">
            At Powerflow, we provide a complete range of electrical services
            designed to deliver safety, innovation, and energy efficiency.
            Whether you're upgrading your home, expanding your business, or
            managing a facility, our experienced team delivers dependable
            results at every level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {service.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 shadow-lg border border-white/10 hover:border-[#B3001E] transition group flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className="text-xl font-bold text-[#B3001E]">{section.title}</h3>
                </div>

                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-white/10"
                />

                <p className="text-white/80 mb-4">{section.description}</p>

                <ul className="space-y-3 text-white/90 list-disc list-inside">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={section.link}
                className="mt-8 inline-flex items-center gap-2 self-start text-sm bg-[#B3001E] text-white px-6 py-2.5 rounded-full font-medium shadow hover:bg-white hover:text-[#B3001E] transition-all duration-300 group"
              >
                Learn More
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
