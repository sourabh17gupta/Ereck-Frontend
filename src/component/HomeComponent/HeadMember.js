import { motion } from "framer-motion";

function HeadMember() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      post: "President",
      name: "Vikas Saini",
    },
    {
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      post: "Vice-President",
      name: "Arushi",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8 px-3 sm:px-8 lg:px-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 tracking-wide">
          Head Members
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-lg md:text-xl">
          Meet the leadership team guiding Ereck towards success
        </p>
      </motion.div>

      {/* FLEX Layout */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-7xl mx-auto">
        {data.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0px 20px 40px rgba(250, 204, 21, 0.5)",
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0px 10px 20px rgba(250, 204, 21, 0.3)",
            }}
            className="
              relative
              bg-black/70 backdrop-blur-md border border-gray-700 
              rounded-xl overflow-hidden shadow-md 
              transition-all duration-300
              w-[85%] 
              sm:w-[45%] 
              md:w-[30%] 
              lg:w-[22%] 
              h-80 sm:h-96
              flex flex-col
            "
          >
            {/* Image */}
            <div className="relative w-full flex-[0.7] overflow-hidden">
              <motion.img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transform transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>

            {/* Text */}
            <div className="p-4 sm:p-5 text-center flex flex-col justify-center items-center flex-[0.3] relative z-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400">
                {member.name}
              </h2>
              <p className="text-gray-300 mt-2 text-sm sm:text-base uppercase tracking-wide">
                {member.post}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HeadMember;
