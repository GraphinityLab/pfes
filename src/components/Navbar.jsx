import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const navItems = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname === "/" ? "" : location.pathname.replace("/", "");

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-[#0F151B]/80 border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/pfes-logo.webp"
            alt="Powerflow Electrical Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-14 font-semibold text-lg tracking-wide uppercase">
          {navItems.map((item) => {
            const path = item === "Home" ? "" : item.toLowerCase();
            const isActive = currentPath === path;

            return (
              <a
                key={item}
                href={`/${path}`}
                className={`group relative pb-1 transition-colors duration-200 ${
                  isActive ? "text-[#B3001E]" : "text-white hover:text-[#B3001E]"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#B3001E] transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="/contact"
            className="ml-8 px-5 py-2 rounded-full bg-[#B3001E] text-white font-bold text-sm shadow-md hover:shadow-lg hover:text-[#B3001E] hover:bg-white transition"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white hover:text-[#B3001E] transition"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-[#0F151B]/80 px-6 pb-4 pt-2 border-t border-white/10">
          <nav className="flex flex-col space-y-5 text-base font-semibold uppercase text-white">
            {navItems.map((item) => {
              const path = item === "Home" ? "" : item.toLowerCase();
              const isActive = currentPath === path;

              return (
                <a
                  key={item}
                  href={`/${path}`}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-[#B3001E]" : "hover:text-[#B3001E]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              );
            })}
            <a
              href="/contact"
              className="mt-3 w-fit px-5 py-2 rounded-full bg-[#B3001E] text-white font-bold text-sm shadow-md hover:shadow-lg hover:text-[#B3001E] hover:bg-white transition"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
