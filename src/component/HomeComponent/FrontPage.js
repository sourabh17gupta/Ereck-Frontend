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
  const isMobile = window.innerWidth < 768;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const JoinNowBtn = () => navigate("/signup");
  const JoinBtn = () => navigate("/event");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* MAIN SECTION */}
      <section
        className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-16 py-16 md:py-20 overflow-hidden ${
          isMobile ? "bg-cover bg-center min-h-[60vh]" : "min-h-[90vh]"
        }`}
        style={{
          backgroundColor: "#000",
          backgroundImage: isMobile ? `url(${images[current]})` : "none",
        }}
      >
        {/* LEFT SIDE – TEXT */}
        <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-6 z-10 flex flex-col justify-center text-center md:text-left">

          {/* FIXED TYPEWRITER HEADING */}
          <div
            className="font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {/* Line 1 */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="block overflow-hidden whitespace-nowrap text-white border-r-4 border-yellow-400 pr-2"
            >
              BUILD, SIMULATE
            </motion.span>

            {/* Line 2 */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                delay: 1.4,
              }}
              className="block overflow-hidden whitespace-nowrap text-white border-r-4 border-yellow-400 pr-2 mt-2"
            >
              AND MASTER
            </motion.span>

            {/* Line 3 */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                delay: 2.8,
              }}
              className="block overflow-hidden whitespace-nowrap text-white border-r-4 border-yellow-400 pr-2 mt-2"
            >
              ELECTRICAL CORE
            </motion.span>
          </div>

          {/* SUBTEXT */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2 sm:px-0">
            Where technology meets creativity — explore, experiment, and engineer
            your path to innovation.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 text-xs sm:text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Zap
                className={`w-6 h-6 ${
                  isMobile ? "text-yellow-400" : "text-blue-500"
                }`}
              />
              <span className={isMobile ? "text-yellow-400" : "text-gray-300"}>
                10+ Workshops
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu
                className={`w-6 h-6 ${
                  isMobile ? "text-yellow-400" : "text-blue-500"
                }`}
              />
              <span className={isMobile ? "text-yellow-400" : "text-gray-300"}>
                25+ Projects
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Users
                className={`w-6 h-6 ${
                  isMobile ? "text-yellow-400" : "text-blue-500"
                }`}
              />
              <span className={isMobile ? "text-yellow-400" : "text-gray-300"}>
                100+ Members
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – DESKTOP SLIDER */}
        {!isMobile && (
          <div className="relative flex-[0.8] flex justify-center items-center mt-8 md:mt-0">
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

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60 pointer-events-none"></div>
      </section>
    </>
  );
}

export default FrontPage;
