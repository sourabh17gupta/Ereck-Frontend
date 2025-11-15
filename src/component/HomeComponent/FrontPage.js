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

  const JoinNowBtn = () => navigate("/signup");
  const JoinBtn = () => navigate("/event");

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
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] text-transparent bg-clip-text leading-snug drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]"
            style={{
              fontFamily: "Orbitron, sans-serif",
              letterSpacing: "1px",
              textShadow:
                "0 0 6px rgba(250,204,21,0.4), 0 0 12px rgba(250,204,21,0.3)",
            }}
          >
            BUILD, SIMULATE <br className="hidden sm:block" /> AND MASTER <br className="hidden sm:block" /> ELECTRICAL CORE
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2 sm:px-0">
            Where technology meets creativity — explore, experiment, and engineer your path to innovation.
          </p>

    

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8 text-gray-300 text-xs sm:text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Zap className="text-[#3b82f6] w-5 h-5 sm:w-6 sm:h-6" /> <span>10+ Workshops</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="text-[#3b82f6] w-5 h-5 sm:w-6 sm:h-6" /> <span>25+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-[#3b82f6] w-5 h-5 sm:w-6 sm:h-6" /> <span>100+ Members</span>
            </div>
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

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60 pointer-events-none"></div>
      </section>
    </>
  );
}

export default FrontPage;
