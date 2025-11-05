import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Eventdata from "../Eventdata";

const EventDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = Eventdata[id];

  const [visibleImages, setVisibleImages] = useState(0);
  const [increment, setIncrement] = useState(4);
  const loadMoreRef = useRef(null);

  // Set initial visible count based on screen size
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setVisibleImages(8);
      setIncrement(8);
    } else {
      setVisibleImages(4);
      setIncrement(4);
    }
  }, []);

  // Lazy load on scroll
  useEffect(() => {
    if (!event || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleImages((prev) =>
            Math.min(prev + increment, event.galleryImages.length)
          );
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [increment, event]);

  // Smooth scroll to top when new event loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!event) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Event not found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 pb-12 px-4 sm:px-6 lg:px-12 scroll-smooth">
      {/* Back Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          ←
        </button>
      </div>

      {/* Event Banner with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-lg mb-6"
      >
        <img
          src={event.bannerImage}
          alt={event.name}
          loading="lazy"
          className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Event Title & Description */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500 fade-in-section"
      >
        {event.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 mb-12 leading-relaxed fade-in-section"
      >
        {event.description}
      </motion.p>

      {/* Gallery Section */}
      {event.galleryImages && event.galleryImages.length > 0 && (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-4 text-yellow-500"
          >
            Gallery
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {event.galleryImages.slice(0, visibleImages).map((img, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50, // alternate left/right
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="overflow-hidden rounded-xl shadow-md bg-black/60 backdrop-blur-md transition-transform transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`${event.name} ${index + 1}`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Scroll trigger */}
          {visibleImages < event.galleryImages.length && (
            <div
              ref={loadMoreRef}
              className="h-10 mt-6 flex justify-center items-center"
            >
              <p className="text-gray-400 animate-pulse">Loading more...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventDescription;
