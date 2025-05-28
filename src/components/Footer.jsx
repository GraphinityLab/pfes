const Footer = () => {
  return (
    <div className="bg-[#666666] text-white text-sm mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-bold text-[#ffb400] mb-2">
            Powerflow Electrical
          </h2>
          <p>
            Providing trusted residential, commercial, and industrial electrical
            services across Ontario.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold text-[#ffb400] mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-[#fc0301]">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#fc0301]">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#fc0301]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#fc0301]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-[#ffb400] mb-2">Contact</h3>
          <p>Email: info@powerflow.ca</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: Toronto, ON</p>
        </div>
      </div>
      <div className="text-center bg-[#017ea4] py-4 text-xs">
        © {new Date().getFullYear()} Powerflow Electrical Services Inc. All
        rights reserved.
      </div>
    </div>
  );
};

export default Footer;
