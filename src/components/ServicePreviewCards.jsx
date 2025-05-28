const services = [
  {
    title: "Residential",
    description: "Wiring, lighting, surge protection, and safety-focused upgrades for modern homes.",
  },
  {
    title: "Industrial",
    description: "Heavy-duty systems, machine wiring, audits, and automation for industrial environments.",
  },
  {
    title: "Commercial",
    description: "Retail and office wiring, energy-efficient lighting, and maintenance for business uptime.",
  },
  {
    title: "Specialty",
    description: "Smart homes, solar, EV charging, and generators — future-ready electrical solutions.",
  },
];

const ServicePreviewCards = () => {
  return (
    <section className="bg-white text-[#0F151B] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B3001E] mb-4">
          What We Offer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Powerflow delivers certified, high-performance electrical services across all sectors.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg bg-gradient-to-br from-white to-gray-50 transition hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-[#0F151B] mb-2 group-hover:text-[#B3001E] transition">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
            <a
              href="/services"
              className="inline-block mt-auto text-sm font-semibold text-[#B3001E] hover:underline"
            >
              Explore Services →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePreviewCards;
