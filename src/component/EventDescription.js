import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Eventdata from "../Eventdata";

const EventDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = Eventdata[id];

  const [visibleImages, setVisibleImages] = useState(4);
  const [increment, setIncrement] = useState(4);

  // Set increments based on screen width
  useEffect(() => {
    const updateCounts = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages(8);
        setIncrement(8);
      } else {
        setVisibleImages(4);
        setIncrement(4);
      }
    };

    updateCounts();
    window.addEventListener("resize", updateCounts);
    return () => window.removeEventListener("resize", updateCounts);
  }, []);

  // Reset on event change and scroll to top
  useEffect(() => {
    if (!event) return;
    if (window.innerWidth >= 1024) {
      setVisibleImages(8);
      setIncrement(8);
    } else {
      setVisibleImages(4);
      setIncrement(4);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, event]);

  // Fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up-show");
        });
      },
      { threshold: 0.2 }
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
      Math.min(prev + increment, event.galleryImages.length)
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 pb-12 px-4 sm:px-6 lg:px-12">

      {/* Fade-up CSS */}
      <style>{`
        .fade-up { opacity: 0; transform: translateY(40px); transition: all 0.7s ease-out; }
        .fade-up-show { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Back Button */}
      <div className="flex justify-end mb-6 fade-up">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          ←
        </button>
      </div>

      {/* IMAGE + DESCRIPTION LAYOUT */}
      <div className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">

        {/* IMAGE — larger height on desktop */}
        <div className="rounded-2xl overflow-hidden lg:order-1">
          <img
            src={event.bannerImage}
            alt={event.name}
            loading="lazy"
            className="w-full h-80 lg:h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* DESCRIPTION — limited width so it aligns cleanly */}
        <div className="lg:order-2 max-w-[550px]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500 fade-up">
            {event.name}
          </h1>

          <p className="text-gray-300 leading-relaxed fade-up">
            {event.description}
          </p>
        </div>
      </div>

      {/* GALLERY */}
      {event.galleryImages?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500 fade-up">
            Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up">
            {event.galleryImages.slice(0, visibleImages).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-md bg-black/60 backdrop-blur-md hover:scale-105 transition-transform"
              >
                <img
                  src={img}
                  alt={`${event.name} ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          {visibleImages < event.galleryImages.length && (
            <div className="flex justify-center mt-6 fade-up">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
              >
                View More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EventDescription;
