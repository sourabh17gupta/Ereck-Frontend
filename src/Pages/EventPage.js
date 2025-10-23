import React from "react";
import { useNavigate } from "react-router-dom";
import Eventdata from "../Eventdata";
import { motion } from "framer-motion";

const EventPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6 space-y-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-yellow-500 mb-12">
        Our Events
      </h1>

      {/* Zig-Zag Event Cards with horizontal shift */}
      <div className="flex flex-col gap-16 max-w-7xl mx-auto">
        {Eventdata.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col lg:flex-row items-center gap-8 rounded-2xl overflow-hidden shadow-lg bg-black/70 backdrop-blur-md border border-gray-700 transition-transform duration-300
              ${index % 2 === 0 ? "ml-auto" : "mr-auto"}  // shift card horizontally
              `}
            style={{ minHeight: "450px", maxWidth: "85%" }} // limit card width
          >
            {/* Image Container */}
            <div className="lg:w-1/2 flex justify-center items-center p-4">
              <div className="w-full h-80 lg:h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-md">
                <motion.img
                  src={event.bannerImage}
                  alt={event.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Description */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-yellow-500">
                {event.name}
              </h2>
              <p className="text-gray-300 mb-6 whitespace-pre-line">
                {event.description.length > 300
                  ? event.description.slice(0, 300) + "..."
                  : event.description}
              </p>
              <button
                onClick={() => navigate(`/eventdescription/${index}`)}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors w-max"
              >
                Know More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
