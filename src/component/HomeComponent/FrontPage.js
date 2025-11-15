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
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const headline = "BUILD, SIMULATE AND MASTER ELECTRICAL CORE";
  const paragraph =
    "Where technology meets creativity — explore, experiment, and engineer your path to innovation.";

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Typewriter effect with loop
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (textIndex < headline.length + paragraph.length + 1) {
      timeout = setTimeout(() => {
        if (textIndex < headline.length) {
          setDisplayedText(headline.slice(0, textIndex + 1));
        } else {
          const paragraphIndex = textIndex - headline.length;
          setDisplayedText(
            headline + "\n" + paragraph.slice(0, paragraphIndex + 1)
          );
        }
        setTextIndex(textIndex + 1);
      }, 50); // Typing speed
    } else {
      // Pause before looping
      timeout = setTimeout(() => {
        setTextIndex(0);
        setDisplayedText("");
      }, 2000); // 2 second pause
    }

    return () => clearTimeout(timeout);
  }, [textIndex, headline, paragraph]);

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
        {/* LEFT SIDE */}
        <div className="flex-1 w-full max-w-full md:max-w-2xl space-y-4 md:space-y-6 z-10 flex flex-col justify-center text-center md:text-left">

          {/* Typewriter Headline + Paragraph */}
          <pre
            className="font-extrabold text-yellow-400 whitespace-pre-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {displayedText}
          </pre>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-medium">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">10+ Workshops</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">25+ Projects</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#facc15] sm:text-[#3b82f6]" />
              <span className="text-[#facc15] sm:text-gray-300">100+ Members</span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE - Desktop Images */}
        {window.innerWidth >= 768 && (
          <div className="relative flex-[0.8] w-full flex justify-center items-center mt-8 md:mt-0">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
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
