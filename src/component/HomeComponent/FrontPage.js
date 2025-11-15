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

  // Heading lines
  const headingLines = ["BUILD, SIMULATE", "AND MASTER", "ELECTRICAL CORE"];
  const [activeLine, setActiveLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const typeLine = () => {
      const line = headingLines[activeLine];
      const typeInterval = setInterval(() => {
        setDisplayedText(line.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === line.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setActiveLine((prev) => (prev + 1) % headingLines.length);
          }, 1000);
        }
      }, 100);
    };
    typeLine();
  }, [activeLine]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        className={`relative flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-16 py-16 md:py-20 overflow-hidden
        ${window.innerWidth < 768 ? `bg-cover bg-center min-h-[60vh]` : `min-h-[90vh]`}`}
        style={{
          backgroundColor: "#000000",
          backgroundImage:
            window.innerWidth < 768 ? `url(${images[current]})` : "none",
        }}
      >
        {/* LEFT SIDE - Text */}
        <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-4 md:space-y-6 z-10 flex flex-col justify-center text-center md:text-left">
          {/* Typewriter Heading - each line separate */}
          {headingLines.map((line, index) => (
            <motion.h1
              key={index}
              className="font-extrabold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400"
              style={{ fontFamily: "Orbitron, sans-serif" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: index === activeLine ? 1 : 0,
                x: index === activeLine ? 0 : -50,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              {index === activeLine ? displayedText : ""}
              <span className={index === activeLine ? "blinking-cursor" : ""}>|</span>
            </motion.h1>
          ))}

          {/* Paragraph */}
          <motion.p
            className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mt-4 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1, ease: "easeOut" }}
          >
            Where technology meets creativity — explore, experiment, and engineer your path to innovation.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-medium">
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
          </div>
        </div>

        {/* RIGHT SIDE - Image Slider */}
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

      {/* Blinking cursor CSS */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: #facc15;
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default FrontPage;
