import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath =
    location.pathname === "/" ? "" : location.pathname.replace("/", "");

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0F151B]/45 to-[#0F151B]/80 backdrop-blur-sm shadow-lg overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B3001E]/100 to-transparent pointer-events-none z-20" />

      {/* Top Contact Strip – Enhanced with Clickable Elements */}
      <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-[#01060A] text-white text-sm tracking-wide border-b border-white/10 shadow-sm z-40">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[#B3001E] w-4 h-4" />
            <span>1288 Ritson Rd N, STE 197, Oshawa ON</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-[#B3001E] w-4 h-4" />
            <a
              href="tel:9059228115"
              className="hover:text-[#B3001E] transition-colors"
            >
              905-922-8115
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-[#B3001E] w-4 h-4" />
            <a
              href="mailto:PowerflowElectricalServices@gmail.com"
              className="hover:text-[#B3001E] transition-colors"
            >
              PowerflowElectricalServices@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaIdCard className="text-[#B3001E] w-4 h-4" />
          <span>ESA/ECRA Licence #7013816</span>
        </div>
      </div>

      <div className="relative max-w-full mx-auto px-6 py-4 flex justify-between items-center text-white z-30">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/pfes-logo2.webp"
            alt="Powerflow Electrical Logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-14 font-semibold text-lg tracking-wide uppercase">
          {navItems.map((item) => {
            const isActive = currentPath === item.href.replace("/", "");

            return (
              <a
                key={item.label}
                href={item.href}
                className={`group relative pb-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#B3001E]"
                    : "text-white hover:text-[#B3001E]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#B3001E] transition-transform duration-300 origin-left ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="/contact-us"
            className="ml-8 px-5 py-2 rounded-full bg-[#B3001E] text-white font-bold text-sm shadow-md hover:shadow-lg hover:text-[#B3001E] hover:bg-white transition"
          >
            Request a Quote
          </a>
        </nav>

        {/* Mobile Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-white hover:text-[#B3001E] transition"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-[#0F151B]/80 px-6 pb-4 pt-2 border-t border-white/10 z-20">
          <nav className="flex flex-col space-y-5 text-base font-semibold uppercase text-white">
            {navItems.map((item) => {
              const isActive = currentPath === item.href.replace("/", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-[#B3001E]" : "hover:text-[#B3001E]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="/contact-us"
              className="mt-3 w-fit px-5 py-2 rounded-full bg-[#B3001E] text-white font-bold text-sm shadow-md hover:shadow-lg hover:text-[#B3001E] hover:bg-white transition"
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
