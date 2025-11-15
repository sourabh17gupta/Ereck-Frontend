function HeadMember() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      post: "President",
      name: "Vikas Saini",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      post: "Vice-President",
      name: "Arushi",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8 px-3 sm:px-8 lg:px-12">

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 transition-all duration-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 tracking-wide">
          Head Members
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-lg md:text-xl">
          Meet the leadership team guiding Ereck towards success
        </p>
      </div>

      {/* Responsive Layout */}
      <div
        className="
          flex flex-col items-center gap-6
          sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          sm:gap-8 sm:px-0 max-w-7xl mx-auto
          justify-center
        "
      >
        {data.map((member, index) => (
          <div
            key={index}
            className="relative bg-black/70 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-md
            w-[80%] sm:w-full h-80 sm:h-96 flex flex-col
            transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

            {/* Image */}
            <div className="relative w-full flex-[0.7] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadMember;
