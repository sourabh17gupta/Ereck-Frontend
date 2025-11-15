import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Eventdata from "../Eventdata";

const EventDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = Eventdata[id];

  const [visibleImages, setVisibleImages] = useState(4);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle screen resize (mobile vs desktop)
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (!mobile) {
        setVisibleImages(event.galleryImages.length); // desktop: show all
      } else {
        setVisibleImages(4); // mobile default
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [event]);

  // Fade animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up-show");
        }),
      { threshold: 0.22 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleImages]);

  if (!event) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">Event not found.</p>
    );
  }

  const loadMore = () => {
    setVisibleImages((prev) =>
      Math.min(prev + 4, event.galleryImages.length)
    );
  };

  const collapse = () => setVisibleImages(4);

  return (
    <div className="min-h-screen bg-black text-gray-100 pb-16 px-4 sm:px-6 lg:px-20">

      {/* Fade Animation */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(35px) scale(0.97);
          transition: all 0.7s ease-out;
        }
        .fade-up-show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      {/* Back Button */}
      <div className="flex justify-end mb-10 fade-up">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 transition-all"
        >
          ← Back
        </button>
      </div>

      {/* DESCRIPTION + IMAGE (closer spacing) */}
      <div className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">

        {/* DESCRIPTION */}
        <div className="max-w-[600px]">
          <h1 className="text-4xl font-bold mb-4 text-yellow-500 tracking-wide">
            {event.name}
          </h1>

          <p className="text-gray-300 leading-relaxed text-[16px] md:text-[17px] tracking-wide">
            {event.description}
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
            rounded-2xl overflow-hidden border border-yellow-500/40 shadow-xl
            lg:max-w-[430px] lg:ml-auto
            bg-black/40 backdrop-blur-md
            hover:shadow-yellow-500/30 hover:scale-[1.02]
            transition-all duration-500
          "
        >
          <img
            src={event.bannerImage}
            alt={event.name}
            loading="lazy"
            className="w-full h-[280px] md:h-[340px] object-cover"
          />
        </div>
      </div>

      {/* GALLERY */}
      {event.galleryImages?.length > 0 && (
        <>
          <h2 className="text-3xl font-semibold mb-6 text-yellow-500 fade-up tracking-wide">
            Gallery
          </h2>

          {/* Align gallery under BOTH sides */}
          <div className="max-w-[1100px] mx-auto">

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 fade-up">
              {event.galleryImages.slice(0, visibleImages).map((img, i) => (
                <div
                  key={i}
                  className="
                    fade-up group overflow-hidden rounded-xl 
                    border border-yellow-500/20 bg-black/40 backdrop-blur-sm 
                    shadow-md hover:shadow-lg 
                    hover:border-yellow-400/80 
                    transition-all duration-500 cursor-pointer
                  "
                >
                  <img
                    src={img}
                    alt={`${event.name} ${i + 1}`}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            {/* MOBILE-ONLY VIEW MORE / LESS */}
            {isMobile && (
              <div className="flex justify-center mt-10 fade-up">
                {visibleImages < event.galleryImages.length ? (
                  <button
                    onClick={loadMore}
                    className="px-8 py-3 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition-all"
                  >
                    View More
                  </button>
                ) : (
                  <button
                    onClick={collapse}
                    className="px-8 py-3 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition-all"
                  >
                    View Less
                  </button>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EventDescription;
