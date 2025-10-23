import { useParams, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from "react";
import Eventdata from "../Eventdata";

const EventDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = Eventdata[id];

  // Determine initial number of visible images based on screen width
  const [visibleImages, setVisibleImages] = useState(0);
  const [increment, setIncrement] = useState(4); // Number of images to load on click

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setVisibleImages(8);
      setIncrement(8); // Laptop/Desktop: 8 at a time
    } else {
      setVisibleImages(4);
      setIncrement(4); // Mobile/Tablet: 4 at a time
    }
  }, []);

  if (!event) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Event not found.
      </p>
    );
  }

  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + increment, event.galleryImages.length));
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 pb-12 px-4 sm:px-6 lg:px-12">
      {/* Back Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          ←
        </button>
      </div>

      {/* Event Banner */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src={event.bannerImage}
          alt={event.name}
          loading="lazy"
          className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Event Title & Description */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500">
        {event.name}
      </h1>
      <p className="text-gray-300 mb-12">
        {event.description}
      </p>

      {/* Gallery Section */}
      {event.galleryImages && event.galleryImages.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {event.galleryImages.slice(0, visibleImages).map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md bg-black/60 backdrop-blur-md transition-transform transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`${event.name} ${index + 1}`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          {/* View More Button */}
          {visibleImages < event.galleryImages.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMoreImages}
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
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
