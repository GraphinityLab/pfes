import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
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
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const currentPath =
    location.pathname === "/" ? "" : location.pathname.replace("/", "");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      setShowHeader(scrollingUp || currentScrollY < 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 w-full z-50 leading-none">
      <div className="w-full bg-[#01060A] shadow-lg">
        {/* Top Contact Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showHeader ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          } bg-[#01060A] border-b border-white/10`}
        >
          <div className="px-6 py-2 text-white text-sm tracking-wide space-y-2 lg:space-y-0 flex flex-col lg:flex-row justify-between items-start lg:items-center transition-opacity duration-300">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
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
            <div className="flex items-center space-x-2 pt-1 lg:pt-0">
              <FaIdCard className="text-[#B3001E] w-4 h-4" />
              <span>ESA/ECRA Licence #7013816</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`relative w-full px-6 py-1.5 flex justify-between items-center text-white bg-gradient-to-r from-[#0F151B]/45 to-[#0F151B]/80 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
            showHeader ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/pfes-logo2.webp"
              alt="Powerflow Electrical Logo"
              className="h-16 w-auto object-contain"
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-white hover:text-[#B3001E] transition"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
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
