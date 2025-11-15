import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../GalleryData";

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(Object.keys(galleryData)[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const events = Object.keys(galleryData);
  const images = galleryData[selectedEvent] || [];

  // Reset visible images on event change
  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisibleCount(4); // mobile
    } else {
      setVisibleCount(images.length); // desktop show all
    }
  }, [selectedEvent, images.length]);

  // Animation for items
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.85 },
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, images.length));
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="min-h-screen bg-black py-10 px-4 md:px-12 text-yellow-400 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-wide text-yellow-400"
        >
          Gallery
        </motion.h1>

        {/* Event Buttons */}
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

        {/* Gallery with smooth transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {images.slice(0, visibleCount).map((img) => (
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
                layout
                whileHover={{ scale: 1.03 }}
              >
                {/* Image with smooth load animation */}
                <motion.img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-48 sm:h-60 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Hover caption */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-yellow-300 text-center text-sm md:text-base font-medium px-3">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button (ONLY on mobile) */}
        {isMobile && visibleCount < images.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all"
            >
              View More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
