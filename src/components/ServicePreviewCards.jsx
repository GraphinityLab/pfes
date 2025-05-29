import { motion } from "framer-motion";
import { FaHome, FaIndustry, FaBuilding, FaBolt } from "react-icons/fa";

const services = [
  {
    title: "Residential Electrical Services",
    icon: FaHome,
    points: [
      {
        label: "Home Wiring & Rewiring",
        text: "Safe and up-to-date wiring for new constructions, renovations, or outdated systems.",
      },
      {
        label: "Lighting Installations",
        text: "Indoor and outdoor lighting, including energy-efficient solutions.",
      },
      {
        label: "Electrical Panel Upgrades",
        text: "Ensure your home’s electrical system can handle modern energy demands.",
      },
      {
        label: "Surge Protection",
        text: "Protect your home from power surges and electrical damage.",
      },
      {
        label: "Troubleshooting & Repairs",
        text: "Fast diagnosis and repair of electrical issues to keep your home safe.",
      },
    ],
  },
  {
    title: "Commercial Electrical Services",
    icon: FaBuilding,
    points: [
      {
        label: "Office & Retail Installations",
        text: "From wiring to lighting, we power your business space efficiently.",
      },
      {
        label: "Data & Communication Cabling",
        text: "Reliable and efficient network cabling solutions for your business.",
      },
      {
        label: "LED Lighting Upgrades",
        text: "Energy-saving lighting installations to reduce operational costs.",
      },
      {
        label: "Electrical System Maintenance",
        text: "Preventive maintenance to avoid downtime.",
      },
      {
        label: "Emergency Services",
        text: "Rapid response for unexpected electrical issues affecting your operations.",
      },
    ],
  },
  {
    title: "Industrial Electrical Services",
    icon: FaIndustry,
    points: [
      {
        label: "Machine & Equipment Wiring",
        text: "Safe and precise wiring solutions for heavy machinery and equipment.",
      },
      {
        label: "Electrical Safety Audits",
        text: "Comprehensive inspections to ensure compliance and safety.",
      },
      {
        label: "Power Distribution",
        text: "Custom power distribution systems designed for your facility’s needs.",
      },
      {
        label: "Preventive Maintenance",
        text: "Keep your systems running smoothly with routine checks and servicing.",
      },
      {
        label: "Automation & Control Systems",
        text: "Advanced control systems for efficient facility management.",
      },
    ],
  },
  {
    title: "Specialty Services",
    icon: FaBolt,
    points: [
      {
        label: "Backup Generators",
        text: "Installation and maintenance of reliable backup power solutions.",
      },
      {
        label: "Smart Home & Automation",
        text: "Integrate the latest smart technology for convenience and efficiency.",
      },
      {
        label: "Solar Panel Installation",
        text: "Harness the power of the sun with expert solar energy services.",
      },
      {
        label: "EV Charging Stations",
        text: "Electric vehicle charging solutions for homes and businesses.",
      },
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#0F151B] text-white py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#B3001E]/10 via-transparent to-[#0F151B] opacity-20 pointer-events-none" />
      <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-20 relative z-10">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-[#B3001E] drop-shadow-sm">
            Full-Scope Electrical Services
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            From modern homes to industrial infrastructure, Powerflow delivers
            certified, high-performance electrical solutions built for
            reliability and precision. Explore our specialties across
            residential, commercial, industrial, and smart energy systems.
          </p>
          <div>
            <a
              href="/services"
              className="inline-block px-6 py-3 rounded-full bg-[#B3001E] text-white font-semibold text-sm shadow-lg hover:scale-105 hover:bg-[#990019] transition-transform"
            >
              Explore All Services
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 w-full justify-center px-4 relative">
          {services.map(({ title, points, icon: Icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#181C22] border border-[#B3001E]/25 rounded-2xl p-6 shadow-xl transition-all duration-300 group hover:shadow-[0_0_20px_#B3001E99] hover:border-[#B3001E]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-[#B3001E] text-2xl group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white leading-tight">
                  {title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                {points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-white font-medium">
                      {point.label}:
                    </span>{" "}
                    {point.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
