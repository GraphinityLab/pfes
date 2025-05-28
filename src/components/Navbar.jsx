// components/Navbar.jsx
const Navbar = () => {
  return (
    <header className="bg-[#017ea4] text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src="/pfes-logo.webp"
            alt="Powerflow Electrical Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-[#ffb400] transition">Home</a>
          <a href="/about-us" className="hover:text-[#ffb400] transition">About</a>
          <a href="/electrical-services" className="hover:text-[#ffb400] transition">Electrical Services</a>
          <a href="/contact-us" className="hover:text-[#ffb400] transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;