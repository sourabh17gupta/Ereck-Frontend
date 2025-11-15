import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, Cpu } from "lucide-react";

function FrontPage() {
  const images = [
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456909/Ereck/duysaglegzkoflsdzayk.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456888/Ereck/yxyxp4zevyiw5qp5bz6v.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456870/Ereck/d2e0quhbntwohawiwm2k.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456691/Ereck/j2x7vropiezxjcwgctgr.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const headingLines = ["BUILD, SIMULATE", "AND MASTER", "ELECTRICAL CORE"];
  const [activeLine, setActiveLine] = useState(0);

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Heading loop with 1-second pause after complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLine((prev) => (prev + 1) % headingLines.length);
    }, activeLine === headingLines.length - 1 ? 3000 : 2000); // 2s per line + 1s pause on last line
    return () => clearTimeout(timer);
  }, [activeLine, headingLines.length]);

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-16 py-16 md:py-20 overflow-hidden bg-black"
      style={{
        minHeight: window.innerWidth < 768 ? "60vh" : "90vh",
        backgroundImage:
          window.innerWidth < 768 ? `url(${images[currentImage]})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LEFT TEXT */}
      <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-5 md:space-y-7 z-10 flex flex-col justify-center text-center md:text-left">
        {/* Heading */}
        <div className="text-yellow-400 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-2 text-center md:text-left">
          <AnimatePresence>
            {headingLines.slice(0, activeLine + 1).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Paragraph */}
        <motion.p
          className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mt-6 px-2 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Where technology meets creativity — explore, experiment, and engineer
          your path to innovation.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-medium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <span className="text-yellow-400 sm:text-gray-300">10+ Workshops</span>
          </div>

          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <span className="text-yellow-400 sm:text-gray-300">25+ Projects</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <span className="text-yellow-400 sm:text-gray-300">100+ Members</span>
          </div>
        </motion.div>
      </div>

      {/* RIGHT IMAGE SLIDER */}
      {window.innerWidth >= 768 && (
        <div className="relative flex-[0.8] w-full flex justify-center items-center mt-8 md:mt-0">
          {images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: idx === currentImage ? 1 : 0,
                scale: idx === currentImage ? 1.05 : 0.9,
              }}
              transition={{ duration: 1 }}
              className="absolute w-[80%] md:w-[90%] max-w-[550px] rounded-3xl shadow-2xl object-cover"
            />
          ))}
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60 pointer-events-none"></div>
    </section>
  );
}

export default FrontPage;
