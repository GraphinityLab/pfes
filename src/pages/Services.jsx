const Services = () => {
  return (
    <div className="flex flex-col min-h-screen pt-[72px] bg-white text-[#666666]">
      <main className="flex-grow px-6 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#017ea4] mb-4">
          Electrical Services
        </h1>
        <p className="text-xl mb-10">
          Providing a Range of <span className="text-[#ffb400] font-semibold">Commercial & Residential Services</span>
        </p>

        <p className="mb-10 text-lg">
          At Powerflow, we are dedicated to providing reliable, efficient, and high-quality electrical solutions for residential, commercial, and industrial clients. Our certified and experienced team ensures every project is completed safely and to the highest standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Residential Services */}
          <div>
            <h2 className="text-2xl font-bold text-[#fc0301] mb-4">Residential Electrical Services</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Home Wiring & Rewiring</li>
              <li>Lighting Installations</li>
              <li>Electrical Panel Upgrades</li>
              <li>Surge Protection</li>
              <li>Troubleshooting & Repairs</li>
            </ul>
          </div>

          {/* Industrial Services */}
          <div>
            <h2 className="text-2xl font-bold text-[#fc0301] mb-4">Industrial Electrical Services</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Machine & Equipment Wiring</li>
              <li>Electrical Safety Audits</li>
              <li>Power Distribution</li>
              <li>Preventive Maintenance</li>
              <li>Automation & Control Systems</li>
            </ul>
          </div>

          {/* Commercial Services */}
          <div>
            <h2 className="text-2xl font-bold text-[#fc0301] mb-4">Commercial Electrical Services</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Office & Retail Installations</li>
              <li>Data & Communication Cabling</li>
              <li>LED Lighting Upgrades</li>
              <li>Electrical System Maintenance</li>
              <li>Emergency Services</li>
            </ul>
          </div>

          {/* Specialty Services */}
          <div>
            <h2 className="text-2xl font-bold text-[#fc0301] mb-4">Specialty Services</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Backup Generators</li>
              <li>Smart Home & Automation</li>
              <li>Solar Panel Installation</li>
              <li>EV Charging Stations</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
