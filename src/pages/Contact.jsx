import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceFromURL = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceFromURL,
    budget: "",
    timeline: "",
    contactMethod: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex flex-col min-h-screen pt-[72px] bg-gradient-to-b from-[#06090B] to-[#0F151B] text-[#d0d0d0]">
      <main className="flex-grow px-4 py-16 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-[#B3001E] mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <p className="text-center max-w-2xl mx-auto text-white/60 mb-12">
          Let us know what you need and we’ll get back to you shortly. Fill out the form or reach us directly using the contact details below.
        </p>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 bg-gradient-to-b from-[#0F151B] to-[#06090B]  p-6 rounded-xl shadow-lg border border-[#2c394a] space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#B3001E] text-lg" />
                <p>Oshawa, ON</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#B3001E] text-lg" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#B3001E] text-lg" />
                <p>info@powerflowelectricalservices.ca</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex gap-4 text-white/80">
                <a href="#" className="hover:text-white" aria-label="Instagram"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-white" aria-label="Facebook"><FaFacebookF size={20} /></a>
                <a href="#" className="hover:text-white" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
              </div>
            </div>

            <div className="text-white/60 text-sm">
              <p>Business Hours: Mon – Fri, 8AM – 6PM</p>
              <p>Emergency services available upon request</p>
            </div>

            <img src="/contact-preview.webp" alt="Powerflow team" className="rounded-lg shadow-md border border-white/10" />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 space-y-4 bg-gradient-to-b from-[#0F151B] to-[#06090B] p-6 rounded-xl shadow-lg border border-[#2c394a]"
          >
            {[ 
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone Number", type: "text" },
              { name: "company", label: "Company Name (optional)", type: "text" },
              { name: "service", label: "Service Type", type: "text", placeholder: "Residential, Commercial, etc." },
              { name: "budget", label: "Estimated Budget", type: "text" },
              { name: "timeline", label: "Preferred Timeline", type: "text", placeholder: "e.g., 2 weeks, ASAP" },
              { name: "contactMethod", label: "Preferred Contact Method", type: "text", placeholder: "Phone, Email, Text" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block mb-1 font-medium text-sm text-[#d0d0d0]">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder || ""}
                  required={name !== "company"}
                  className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B3001E]"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-medium text-sm text-[#d0d0d0]">Project Description / Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#017ea4]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#B3001E] hover:bg-white text-white font-semibold px-6 py-2 rounded-md text-sm hover:text-[#B3001E] transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
