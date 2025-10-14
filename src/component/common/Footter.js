import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaFileAlt, FaHome, FaCalendarAlt } from "react-icons/fa";

const Footer = () => {
  const logo = process.env.REACT_APP_ERECK_LOGO;

  return (
    <footer className="bg-black text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center sm:justify-items-start">

        {/* Logo + Socials */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pb-6 sm:pb-0">
          {logo && (
            <img
              src={logo}
              alt="Ereck Logo"
              className="w-24 h-auto mb-4"
            />
          )}
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Ereck</h2>
          <p className="text-sm text-gray-400 mb-4">
            Empowering events and communities through technology.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Horizontal divider */}
          <div className="border-t border-gray-700 w-1/2 mt-4 mb-4"></div>
        </div>

        {/* Guideline Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pb-6 sm:pb-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Guideline</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <FaFileAlt /> <a href="/Privacy-Policy">Privacy Policy</a>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <FaFileAlt /> <a href="/Terms-and-condition">Terms & Conditions</a>
            </li>
          </ul>
          <div className="border-t border-gray-700 w-1/2 mt-4 mb-4"></div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pb-6 sm:pb-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <FaEnvelope /> <a href="/ContactUs">Contact Page</a>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <FaEnvelope /> <a href="mailto:support@ereck.com">support@ereck.com</a>
            </li>
          </ul>
          <div className="border-t border-gray-700 w-1/2 mt-4 mb-4"></div>
        </div>

        {/* Explore Us Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left pb-6 sm:pb-0">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Explore Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <FaHome /> <a href="/">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <FaCalendarAlt /> <a href="/event">Event Page</a>
            </li>
          </ul>
          <div className="border-t border-gray-700 w-1/2 mt-4"></div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">Ereck</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
