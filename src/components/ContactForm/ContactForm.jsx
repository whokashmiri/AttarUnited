
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../../Layout/Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boutique: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here

    alert("Thank you for contacting us.");
  };

  return (
  <>
  <Navbar/>
  <Hero/>
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="w-24 h-px bg-[#c6a45f] mx-auto mb-8" />

          <h2 className="font-baskerville text-4xl md:text-5xl tracking-[0.25em] uppercase mb-4">
            Contact Us
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Schedule a private consultation, request boutique information,
            or connect with our luxury advisors.
          </p>
        </div>

        {/* Form */}
        <div className="border border-[#c6a45f]/30 rounded-2xl bg-[#0f0f0f] p-8 md:p-12 shadow-[0_0_40px_rgba(198,164,95,0.08)]">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-[#c6a45f] mb-3">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#c6a45f]/30 px-5 py-4 text-white placeholder-gray-500 focus:border-[#c6a45f] focus:outline-none focus:shadow-[0_0_20px_rgba(198,164,95,0.2)] transition"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs tracking-[0.3em] uppercase text-[#c6a45f] mb-3">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#111] border border-[#c6a45f]/30 px-5 py-4 text-white placeholder-gray-500 focus:border-[#c6a45f] focus:outline-none focus:shadow-[0_0_20px_rgba(198,164,95,0.2)] transition"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.3em] uppercase text-[#c6a45f] mb-3">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+966"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#111] border border-[#c6a45f]/30 px-5 py-4 text-white placeholder-gray-500 focus:border-[#c6a45f] focus:outline-none focus:shadow-[0_0_20px_rgba(198,164,95,0.2)] transition"
                />
              </div>

            </div>

            {/* Boutique */}
            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-[#c6a45f] mb-3">
                Preferred Boutique
              </label>

              <select
                name="boutique"
                value={formData.boutique}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#c6a45f]/30 px-5 py-4 text-white focus:border-[#c6a45f] focus:outline-none focus:shadow-[0_0_20px_rgba(198,164,95,0.2)] transition"
              >
                <option value="">Select Boutique</option>
                <option value="Chopard">Chopard</option>
                <option value="Hublot">Hublot</option>
                <option value="Graff">Graff</option>
                <option value="Saint Louis">Saint Louis</option>
                <option value="Azza Fahmy">Azza Fahmy</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-[#c6a45f] mb-3">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us how we can assist you..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#111] border border-[#c6a45f]/30 px-5 py-4 text-white placeholder-gray-500 resize-none focus:border-[#c6a45f] focus:outline-none focus:shadow-[0_0_20px_rgba(198,164,95,0.2)] transition"
              />
            </div>

            {/* Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="
                  px-10
                  py-4
                  bg-[#c6a45f]
                  text-black
                  text-xs
                  tracking-[0.35em]
                  uppercase
                  font-medium
                  hover:opacity-90
                  hover:scale-[1.02]
                  transition
                "
              >
                Submit Request
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactForm;

