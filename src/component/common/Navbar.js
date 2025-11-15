import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logo = process.env.REACT_APP_ERECK_LOGO;

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Event", path: "/event" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    {
      name: "Team",
      dropdown: [
        { name: "Core", field: "core" },
        { name: "Content Writing", field: "contentwriting" },
        { name: "Design", field: "design" },
        { name: "Management", field: "management" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
        setTeamOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md shadow-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          {logo ? (
            <img src={logo} alt="Ereck Logo" className="w-28 h-auto" />
          ) : (
            <span className="text-yellow-400 font-bold text-4xl">Ereck</span>
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 text-gray-200 font-medium text-lg">
            {links.map((link) =>
              link.dropdown ? (
                <li key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setTeamOpen((prev) => !prev)}
                    className="cursor-pointer flex items-center gap-1 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        teamOpen ? "rotate-180 text-yellow-400" : "text-gray-200"
                      }`}
                    />
                  </button>

                  {teamOpen && (
                    <ul className="absolute left-0 top-full mt-2 w-52 bg-black/70 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
                      {link.dropdown.map((item) => (
                        <li key={item.field}>
                          <Link
                            to={`/team/${item.field}`}
                            className="block px-4 py-2 text-gray-200 hover:bg-yellow-400 hover:text-black transition-colors"
                            onClick={() => setTeamOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div> {/* ← FIXED MISSING CLOSING TAG */}

        {/* Mobile Menu Button */}
        <div className="md:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md" ref={menuRef}>
          <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-200 font-medium text-lg">
            {links.map((link) =>
              link.dropdown ? (
                <li key={link.name}>
                  <button
                    onClick={() => setTeamOpen(!teamOpen)}
                    className="flex justify-between items-center w-full font-semibold hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                    <FaChevronDown
                      className={`transition-transform ${
                        teamOpen ? "rotate-180 text-yellow-400" : ""
                      }`}
                    />
                  </button>

                  {teamOpen && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <li key={item.field}>
                          <Link
                            to={`/team/${item.field}`}
                            className="block hover:text-yellow-400 transition-colors"
                            onClick={() => {
                              setMenuOpen(false);
                              setTeamOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-yellow-400 transition-colors block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
