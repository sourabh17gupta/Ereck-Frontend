import React, { useState } from "react";
import { motion } from "framer-motion";
import { galleryData } from "../GalleryData";

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(Object.keys(galleryData)[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const events = Object.keys(galleryData);
  const images = galleryData[selectedEvent] || [];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black py-10 px-4 md:px-12 text-yellow-400 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-wide text-yellow-400"
        >
          Event Gallery
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-4"
        >
          {events.map((event) => (
            <motion.button
              key={event}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (selectedEvent !== event) {
                  setSelectedEvent(event);
                  setSelectedImage(null);
                }
              }}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${selectedEvent === event
                  ? "bg-yellow-400 text-black shadow-lg scale-105"
                  : "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {event}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer
                ${selectedImage === img.id
                  ? "border-4 border-yellow-400 scale-105"
                  : "border border-transparent"
                }`}
              onClick={() =>
                setSelectedImage(selectedImage === img.id ? null : img.id)
              }
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-48 sm:h-60 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-0"
                onLoad={(e) => (e.target.style.opacity = 1)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-yellow-300 text-center text-sm md:text-base font-medium px-3">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
              }
