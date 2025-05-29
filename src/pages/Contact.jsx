import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceFromURL = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    service: serviceFromURL,
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
    // Optional: integrate email sending or backend API
  };

  return (
    <div className="flex flex-col min-h-screen pt-[72px] bg-[#0F151B] text-[#d0d0d0]">
      <main className="flex-grow px-6 py-20 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-[#B3001E] mb-6">Contact Us</h1>

        <p className="mb-2 text-lg">📍 Toronto, ON</p>
        <p className="mb-2 text-lg">📞 (123) 456-7890</p>
        <p className="mb-8 text-lg">📧 info@powerflowelectricalservices.ca</p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1a222c] p-6 rounded-xl shadow-lg border border-[#2c394a]"
        >
          <div>
            <label className="block mb-1 font-semibold text-[#d0d0d0]">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white focus:outline-none focus:ring-2 focus:ring-[#017ea4]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#d0d0d0]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white focus:outline-none focus:ring-2 focus:ring-[#017ea4]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#d0d0d0]">Service Type</label>
            <input
              type="text"
              name="service"
              value={form.service}
              onChange={handleChange}
              placeholder="Residential, Commercial, etc."
              className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white focus:outline-none focus:ring-2 focus:ring-[#017ea4]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-[#d0d0d0]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md bg-[#0F151B] border border-[#2c394a] text-white focus:outline-none focus:ring-2 focus:ring-[#017ea4]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#017ea4] hover:bg-[#B3001E] text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
