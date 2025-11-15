import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Cpu } from "lucide-react";

function FrontPage() {
  const images = [
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456909/Ereck/duysaglegzkoflsdzayk.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456888/Ereck/yxyxp4zevyiw5qp5bz6v.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456870/Ereck/d2e0quhbntwohawiwm2k.jpg",
    "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760456691/Ereck/j2x7vropiezxjcwgctgr.jpg",
  ];

  const headings = [" BUILD, SIMULATE AND MASTER ELECTRICAL CORE"];
  
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Image slider interval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Typewriter effect
  useEffect(() => {
  let headingIndex = 0; // track current heading locally
  let charIndex = 0;

  const typeWriter = () => {
    const currentHeading = headings[headingIndex];
    if (charIndex < currentHeading.length-1) {
      setDisplayedText((prev) => prev + currentHeading[charIndex]);
      charIndex += 1;
      timeoutRef.current = setTimeout(typeWriter, 120);
    } else {
      // Wait before moving to next heading
      timeoutRef.current = setTimeout(() => {
        setDisplayedText("");
        charIndex = 0;
        headingIndex = (headingIndex + 1) % headings.length;
        typeWriter();
      }, 1000);
    }
  };

  typeWriter();

  return () => clearTimeout(timeoutRef.current);
}, []);


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-16 py-16 md:py-20 overflow-hidden
        ${isMobile ? `bg-cover bg-center min-h-[60vh]` : `min-h-[90vh]`}`}
        style={{ backgroundColor: "#000000" }}
      >
        {/* MOBILE BACKGROUND */}
        {isMobile && (
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
          />
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex-1 w-full max-w-full md:max-w-2xl space-y-5 md:space-y-7 z-10 flex flex-col justify-center text-center md:text-left"
        >
          {/* TYPEWRITER HEADING */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-yellow-400 leading-snug"
            style={{
              fontFamily: "Orbitron, sans-serif",
              letterSpacing: "1px",
              minHeight: "5.5rem",
            }}
          >
            {displayedText}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2 sm:px-0"
          >
            Where technology meets creativity — explore, experiment, and engineer your path to innovation.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-medium"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">10+ Workshops</span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">25+ Projects</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">100+ Members</span>
            </div>
          </motion.div>
        </motion.div>

        {/* DESKTOP IMAGE SLIDER */}
        {!isMobile && (
          <div className="relative flex-[0.8] w-full flex justify-center items-center mt-8 md:mt-0">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Slide ${index}`}
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

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60 pointer-events-none"></div>
      </section>
    </>
  );
}

export default FrontPage;
