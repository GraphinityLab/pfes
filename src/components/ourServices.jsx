import { Link } from 'react-router-dom';

const services = [
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
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#0F151B] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B3001E] tracking-tight mb-4">
            Electrical Services
          </h2>
          <p className="text-xl md:text-2xl text-white/80">
            Expert Solutions for Residential, Commercial & Industrial Needs
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-white/60 text-base md:text-lg">
            At Powerflow, we provide a complete range of electrical services
            designed to deliver safety, innovation, and energy efficiency.
            Whether you're upgrading your home, expanding your business, or
            managing a facility, our experienced team delivers dependable results at every level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 shadow-lg border border-white/10 hover:border-[#B3001E] transition group"
            >
              <h3 className="text-xl font-bold text-[#B3001E] mb-2">
                {section.title}
              </h3>
              <p className="text-white/80 mb-4">{section.description}</p>
              <ul className="space-y-3 text-white/90 list-disc list-inside mb-6">
                {section.points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to={section.link}
                className="inline-block mt-auto px-4 py-2 rounded-full bg-[#B3001E] text-white font-semibold text-sm shadow-md hover:shadow-red-500/40 hover:scale-105 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
