import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FrontPage() {
  const images = [
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456909/Ereck/duysaglegzkoflsdzayk.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456888/Ereck/yxyxp4zevyiw5qp5bz6v.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456870/Ereck/d2e0quhbntwohawiwm2k.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456691/Ereck/j2x7vropiezxjcwgctgr.jpg",
  ];

  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Heading lines and typewriter state
  const headingLines = ["BUILD, SIMULATE", "AND MASTER", "ELECTRICAL CORE"];
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [centerAlign, setCenterAlign] = useState(false);

  // Typewriter + center effect
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setDisplayText(headingLines[lineIndex].slice(0, charIndex + 1));
      if (charIndex < headingLines[lineIndex].length - 1) {
        setCharIndex((prev) => prev + 1);
      } else {
        // line finished, center-align after a short delay
        setTimeout(() => {
          setCenterAlign(true);
          setTimeout(() => {
            // move to next line
            setCharIndex(0);
            setLineIndex((prev) => (prev + 1) % headingLines.length);
            setCenterAlign(false);
          }, 1000); // pause before next line
        }, 200); // slight delay after line complete
      }
    }, 100); // typing speed
    return () => clearTimeout(typingTimeout);
  }, [charIndex, lineIndex]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-16 py-16 md:py-20 overflow-hidden
        ${window.innerWidth < 768 ? `bg-cover bg-center min-h-[60vh]` : `min-h-[90vh]}`}
        style={{
          backgroundColor: "#000000",
          backgroundImage:
            window.innerWidth < 768 ? `url(${images[current]})` : "none",
        }}
      >
        {/* LEFT SIDE - Text */}
        <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-4 md:space-y-6 z-10 flex flex-col justify-center text-center md:text-left">
          {/* Typewriter Heading */}
          <motion.div
            className={`font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow-400`}
            style={{
              fontFamily: "Orbitron, sans-serif",
              textAlign: centerAlign ? "center" : "left",
              transition: "text-align 0.3s ease",
            }}
          >
            {displayText}
          </motion.div>

          {/* Animated Paragraph */}
          <motion.p
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2 sm:px-0 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Where technology meets creativity — explore, experiment, and engineer your path to innovation.
          </motion.p>

          {/* Animated Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-medium">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">10+ Workshops</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">25+ Projects</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">100+ Members</span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE - Image Slider for Desktop */}
        {window.innerWidth >= 768 && (
          <div className="relative flex-[0.8] w-full flex justify-center items-center mt-8 md:mt-0">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Ereck Slide ${index + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: index === current ? 1 : 0,
                  scale: index === current ? 1.05 : 0.9,
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
    </>
  );
}

export default FrontPage;
