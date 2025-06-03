import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCardAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our-Services", href: "/our-services" },
  { label: "Contact Us", href: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="bg-[#01060A] text-white text-sm">
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B3001E]/100 to-transparent pointer-events-none" />

        {/* Company Overview */}
        <div>
          <h2 className="text-2xl font-bold text-[#B3001E] mb-4 tracking-tight ">
            Powerflow Electrical Services Inc
          </h2>
          <p className="text-white/70 leading-relaxed text-sm">
            Delivering trusted residential, commercial, and industrial
            electrical services across Ontario with certified expertise and
            attention to detail.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#B3001E] mb-4 border-b border-white/10 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 uppercase text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-[#B3001E] transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#B3001E] mb-4 border-b border-white/10 pb-2">
            Contact
          </h3>
          <ul className="text-white/70 space-y-2 text-sm">
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-[#B3001E]" /> powerflowelectricalservices@gmail.com
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-[#B3001E]" /> +1 (905) 922-8115
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-[#B3001E]" /> 1288 Ritson Rd N STE 197, Oshawa, ON, L1G 8B2
            </li>
            <li className="flex items-center">
              <FaIdCardAlt className="mr-3 text-[#B3001E]" /> ESA/ECRA License #7013816
            </li>
          </ul>

          {/* Social Icons 
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="text-white/60 hover:text-[#B3001E] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#B3001E] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#B3001E] transition"
            >
              <FaLinkedinIn />
            </a>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center bg-[#0B0F13] py-5 text-xs tracking-wide border-t border-[#B3001E]/30">
        <p>
          © {new Date().getFullYear()} Powerflow Electrical Services Inc. All
          rights reserved.
        </p>
        <p className="mt-1 text-white/80">
          Designed by{" "}
          <a
            href="https://www.graphinitylab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#B3001E] hover:underline"
          >
            Graphinity Lab
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
