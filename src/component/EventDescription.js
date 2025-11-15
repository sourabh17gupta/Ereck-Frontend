import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Eventdata from "../Eventdata";

const EventDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = Eventdata[id];

  const [visibleImages, setVisibleImages] = useState(4);
  const [increment, setIncrement] = useState(4);

  // Set initial visible count and increment depending on screen width
  useEffect(() => {
    const setCounts = () => {
      if (window.innerWidth >= 1024) {
        setVisibleImages((prev) => Math.max(prev, 8));
        setIncrement(8);
      } else {
        setVisibleImages((prev) => Math.max(prev, 4));
        setIncrement(4);
      }
    };

    setCounts();
    window.addEventListener("resize", setCounts);
    return () => window.removeEventListener("resize", setCounts);
  }, []);

  // Reset images and scroll to top when event id changes
  useEffect(() => {
    if (!event) return;
    // reset visible count appropriate for screen
    if (window.innerWidth >= 1024) {
      setVisibleImages(8);
      setIncrement(8);
    } else {
      setVisibleImages(4);
      setIncrement(4);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, event]);

  // Fade-up intersection observer for elements with class "fade-up"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-show");
          }
        });
      },
      { threshold: 0.18 }
    );

    const els = document.querySelectorAll(".fade-up");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleImages, event]); // re-run to catch newly added gallery items

  if (!event) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">Event not found.</p>
    );
  }

  const loadMore = () => {
    setVisibleImages((prev) => Math.min(prev + increment, event.galleryImages.length));
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 pb-12 px-4 sm:px-6 lg:px-12 scroll-smooth">

      {/* Embed the fade-up CSS here so it's self-contained.
          Move to global CSS if you prefer. */}
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

      {/* LEFT-RIGHT LAYOUT (mobile: stacked; desktop: 2 columns) */}
      <div className="fade-up grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">

        {/* LEFT side: text (on mobile this appears first if you want description first;
            but per your Option A you asked banner on top on mobile, so we place the image first in DOM.
            To ensure mobile shows image first, we give the text lg:order-1 and image lg:order-2.
            On small screens image appears first (default). */}
        <div className="lg:order-1">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500 fade-up">
            {event.name}
          </h1>

          <p className="text-gray-300 leading-relaxed fade-up">
            {event.description}
          </p>
        </div>

        {/* RIGHT side: banner image (will appear on top on mobile due to DOM order) */}
        <div className="rounded-2xl overflow-hidden lg:order-2 fade-up">
          <img
            src={event.bannerImage}
            alt={event.name}
            loading="lazy"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Gallery heading */}
      {event.galleryImages?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500 fade-up">
            Gallery
          </h2>

          {/* Gallery grid: 2 cols on small, 4 on md+ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up">
            {event.galleryImages.slice(0, visibleImages).map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-md bg-black/60 backdrop-blur-md hover:scale-105 transition-transform"
              >
                <img
                  src={img}
                  alt={`${event.name} ${i + 1}`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          {/* View More button */}
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
