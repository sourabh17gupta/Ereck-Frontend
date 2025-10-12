import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black/90 text-gray-200 py-12 px-6 backdrop-blur-sm flex items-center justify-center">
      <div className="max-w-6xl w-full bg-black/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-gray-700">
        <h1 className="text-4xl font-bold text-yellow-400 mb-12 text-center md:text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-items-center md:justify-items-stretch">
          {/* Left Side: Contact Details */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-8 border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:pr-8 w-full">
            <h2 className="text-3xl font-semibold text-yellow-400">Get in Touch</h2>
            <p className="text-gray-300 text-center md:text-left text-lg">
              We'd love to hear from you! Reach out with any questions, feedback, or collaborations.
            </p>

            <div className="flex flex-col space-y-5 w-full text-lg">
              <div className="flex items-center gap-4 text-gray-200 hover:text-yellow-400 transition-colors">
                <FaEnvelope className="text-yellow-400 text-2xl" />
                <a href="mailto:support@ereck.com" className="hover:underline">
                  support@ereck.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-200 hover:text-yellow-400 transition-colors">
                <FaPhone className="text-yellow-400 text-2xl" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200 hover:text-yellow-400 transition-colors">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Social Handles */}
            <div className="flex space-x-6 mt-6">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              {/** Name Field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-lg font-medium flex items-center gap-2">
                  <FaEnvelope className="text-yellow-400" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="rounded-xl px-4 py-4 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700 text-lg"
                  required
                />
              </div>

              {/** Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-lg font-medium flex items-center gap-2">
                  <FaEnvelope className="text-yellow-400" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="rounded-xl px-4 py-4 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700 text-lg"
                  required
                />
              </div>

              {/** Phone Field */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-lg font-medium flex items-center gap-2">
                  <FaPhone className="text-yellow-400" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="rounded-xl px-4 py-4 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700 text-lg"
                  required
                />
              </div>

              {/** Message Field */}
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-lg font-medium flex items-center gap-2">
                  <FaEnvelope className="text-yellow-400" /> Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="rounded-xl px-4 py-4 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-700 text-lg"
                  required
                />
              </div>

              {/** Submit Button */}
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors w-full md:w-auto text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
