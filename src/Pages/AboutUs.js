import {motion} from "framer-motion";
<<<<<<< HEAD

=======
>>>>>>> origin/main
function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white px-5 sm:px-10 lg:px-20 flex flex-col justify-start items-center pt-10 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 tracking-wide">
          About <span className="text-white">Ereck</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto">
          Empowering minds through innovation, technology, and teamwork.
        </p>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full flex flex-col items-center text-center space-y-6 mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400">
          Who We Are
        </h2>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          <strong>Ereck</strong> is the official Electrical Society of{" "}
          <strong>NIT Kurukshetra</strong>, driven by a passion for innovation
          and technology. Our goal is to foster technical excellence and
          provide a platform where creativity meets engineering.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          We organize workshops, hackathons, and project exhibitions to
          empower students in embedded systems, IoT, robotics, and software
          development. Ereck encourages learning through doing — nurturing both
          technical and leadership skills.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          United by curiosity and collaboration, our members aim to make a
          tangible impact through real-world projects, innovation, and
          teamwork.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-12"
      >
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To cultivate a culture of innovation and technical excellence among
            students, bridging the gap between theoretical knowledge and
            practical application through projects, workshops, and collaboration.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition duration-300">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To be recognized as a premier technical society that inspires
            innovation, promotes cutting-edge research, and nurtures the next
            generation of leaders in technology and engineering.
          </p>
        </div>
      </motion.div>

      

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-32 h-[3px] bg-yellow-400 mt-6 rounded-full"
      />
    </div>
  );
}

export default AboutUs;
