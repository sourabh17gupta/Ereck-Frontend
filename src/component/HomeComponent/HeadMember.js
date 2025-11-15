import { motion } from "framer-motion";

function HeadMember() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      post: "President",
      name: "Vikas Saini",
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      post: "Vice-President",
      name: "Arushi",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8 px-3 sm:px-8 lg:px-12">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
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

      {/* Responsive Layout */}
      <div className="
        flex flex-col items-center gap-6
        sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        sm:gap-8 max-w-7xl mx-auto
      ">
        {data.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-black/70 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-md
              w-[80%] sm:w-full h-80 sm:h-96 flex flex-col"
          >

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/30 rounded-xl transition-opacity pointer-events-none"
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
            />

            {/* Image */}
            <div className="relative w-full flex-[0.7] overflow-hidden">
              <motion.img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Text */}
            <div className="p-4 sm:p-5 text-center flex flex-col justify-center items-center flex-[0.3]">
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
