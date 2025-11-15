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
  const [resetType, setResetType] = useState(false);

  // Image slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Restart typewriter after pause
  useEffect(() => {
    const t = setTimeout(() => {
      setResetType((r) => !r);
    }, 5200);
    return () => clearTimeout(t);
  }, [resetType]);

  const stats = [
    { icon: <Zap />, label: "10+ Workshops" },
    { icon: <Cpu />, label: "25+ Projects" },
    { icon: <Users />, label: "100+ Members" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-16 py-16 md:py-20 overflow-hidden
          ${window.innerWidth < 768 ? "bg-cover bg-center min-h-[60vh]" : "min-h-[90vh]"}`}
        style={{
          backgroundColor: "#000",
          backgroundImage:
            window.innerWidth < 768 ? `url(${images[current]})` : "none",
        }}
      >
        {/* LEFT SIDE */}
        <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-4 md:space-y-6 z-10 flex flex-col justify-center text-center md:text-left">

          {/* ⭐ TYPEWRITER — YELLOW, NO BAR, PAUSE + REPEAT ⭐ */}
          <div
            key={resetType}
            className="font-extrabold text-yellow-400 leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="block overflow-hidden whitespace-nowrap"
            >
              BUILD, SIMULATE
            </motion.span>

            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                delay: 1.4,
              }}
              className="block overflow-hidden whitespace-nowrap mt-2"
            >
              AND MASTER
            </motion.span>

            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                delay: 2.8,
              }}
              className="block overflow-hidden whitespace-nowrap mt-2"
            >
              ELECTRICAL CORE
            </motion.span>
          </div>

          {/* Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2 sm:px-0">
            Where technology meets creativity — explore, experiment, and engineer your path to innovation.
          </p>

          {/* ⭐ FULL ANIMATION MIX FOR STATS ⭐ */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8">

            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.7, rotate: -10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: i * 0.3,
                  duration: 0.8,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.12,
                  rotate: 3,
                  boxShadow: "0 0 12px rgba(250,204,21,0.6)",
                }}
                className="flex items-center gap-2 text-[#facc15] sm:text-gray-300 text-sm sm:text-base md:text-lg cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.2, delay: i * 0.4 }}
                  className="w-6 h-6"
                >
                  {s.icon}
                </motion.div>

                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {s.label}
                </motion.span>
              </motion.div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE - Desktop Slider */}
        {window.innerWidth >= 768 && (
          <div className="relative flex-[0.8] w-full flex justify-center items-center mt-8 md:mt-0">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={"Slide " + index}
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
