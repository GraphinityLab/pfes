import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaIdCardAlt,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

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

  useEffect(() => {
    if (serviceFromURL) {
      const section = document.getElementById("contact-form");
      setTimeout(() => {
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, [serviceFromURL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex flex-col min-h-screen pt-[80px] bg-gradient-to-b from-[#06090B] to-[#0F151B] text-[#d0d0d0]">
      <main className="flex-grow px-4 sm:px-6 py-16 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-[#B3001E] mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <p className="text-center max-w-2xl mx-auto text-white/60 mb-12">
          Let us know what you need and we’ll get back to you shortly. Fill out
          the form or reach us directly using the contact details below.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col bg-gradient-to-b from-[#0F151B] to-[#06090B] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#2c394a] space-y-6"
            >
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex items-start gap-x-3">
                  <FaEnvelope className="mt-[2px] text-[#B3001E]" />
                  <span className="break-words">powerflowelectricalservices@gmail.com</span>
                </li>
                <li className="flex items-start gap-x-3">
                  <FaPhone className="mt-[2px] text-[#B3001E]" />
                  <span>+1 (905) 922-8115</span>
                </li>
                <li className="flex items-start gap-x-3">
                  <FaMapMarkerAlt className="mt-[2px] text-[#B3001E]" />
                  <span>1288 Ritson Rd N STE 197, Oshawa, ON, L1G 8B2</span>
                </li>
                <li className="flex items-start gap-x-3">
                  <FaIdCardAlt className="mt-[2px] text-[#B3001E]" />
                  <span>ESA/ECRA License #7013816</span>
                </li>
              </ul>

              <div className="text-white/60 text-sm">
                <p>Business Hours: Mon – Fri, 8AM – 6PM</p>
                <p>Emergency services available upon request</p>
              </div>

              <img
                src="/contact-preview.webp"
                alt="Powerflow team"
                className="w-full h-[20rem] object-cover rounded-lg shadow-md border border-white/10"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.form
              id="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col bg-gradient-to-b from-[#0F151B] to-[#06090B] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#2c394a] space-y-4"
            >
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone Number", type: "text" },
                { name: "company", label: "Company Name (optional)", type: "text" },
                { name: "budget", label: "Estimated Budget", type: "text" },
                { name: "timeline", label: "Preferred Timeline", type: "text", placeholder: "e.g., 2 weeks, ASAP" },
                { name: "contactMethod", label: "Preferred Contact Method", type: "text", placeholder: "Phone, Email, Text" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block mb-1 font-medium text-sm text-[#d0d0d0]">
                    {label}
                  </label>
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
                <label className="block mb-1 font-medium text-sm text-[#d0d0d0]">
                  Service Type
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B3001E]"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Electrical Services</option>
                  <option value="commercial">Commercial Electrical Services</option>
                  <option value="industrial">Industrial Electrical Services</option>
                  <option value="specialty">Specialty Services</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium text-sm text-[#d0d0d0]">
                  Project Description / Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#017ea4]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B3001E] hover:bg-white text-white font-semibold px-6 py-2 rounded-md text-sm hover:text-[#B3001E] transition"
              >
                Submit
              </button>
            </motion.form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
