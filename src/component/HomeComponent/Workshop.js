import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const workshops = [
  {
    title: "AI Bootcamp",
    desc: "Master the fundamentals of Artificial Intelligence and Machine Learning with practical hands-on exercises and real-world projects.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
  {
    title: "Robotics Workshop",
    desc: "Build, program, and control your own robots using Arduino, sensors, and motor controllers with guided mentorship.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800",
  },
  {
    title: "IoT & Embedded Systems",
    desc: "Explore how to connect hardware devices to the Internet and monitor them remotely using cloud integration tools.",
    img: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800",
  },
  {
    title: "Automation with Python",
    desc: "Automate daily workflows, hardware, and data collection processes using Python scripts and libraries.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
];

function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function Workshop() {
  const [duration, setDuration] = useState(40);

  useEffect(() => {
    function updateDuration() {
      const width = window.innerWidth;
      if (width < 640) setDuration(100); // mobile
      else if (width < 1024) setDuration(40); // tablet
      else setDuration(50); // desktop
    }

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div className="relative w-full py-16 bg-black text-white overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-10 tracking-wide">
        Workshops
      </h1>

      {/* Auto-moving container */}
      <motion.div
        className="flex gap-6 md:gap-8 px-4 md:px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...workshops, ...workshops].map((w, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 35px rgba(255, 215, 0, 0.55)", // 💛 Yellow glow
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="relative w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] bg-[#1a1a1a] rounded-2xl shadow-md overflow-hidden flex-shrink-0 hover:z-20 border border-gray-800"
          >
            <img
              src={w.img}
              alt={w.title}
              className="w-full h-36 sm:h-40 md:h-44 object-cover"
            />
            <div className="p-4 sm:p-5 flex flex-col items-center text-center">
              <h2 className="text-base sm:text-lg md:text-lg font-semibold mb-2">
                {w.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-gray-300 mb-4">
                {truncate(w.desc, 80)}
              </p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                className="px-4 sm:px-5 py-2 bg-[#FACC12] text-black font-semibold rounded-full hover:bg-[#FACC12] transition-all duration-300 text-xs sm:text-sm"
              >
                Know More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
}

export default Workshop;
