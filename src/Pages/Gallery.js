// src/pages/Gallery.jsx
import React, { useState } from "react";
import { galleryData } from "../GalleryData";

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(Object.keys(galleryData)[0]);
  const events = Object.keys(galleryData);
  const images = galleryData[selectedEvent];

  return (
    <div className="min-h-screen bg-black py-10 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-yellow-400 mb-10">
          Event Gallery
        </h1>

        {/* Event Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {events.map((event) => (
            <button
              key={event}
              onClick={() => setSelectedEvent(event)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 
                ${
                  selectedEvent === event
                    ? "bg-yellow-400 text-black shadow-lg scale-105"
                    : "bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {event}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Lazy Loading Image */}
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-48 sm:h-60 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-0 animate-fadeIn"
                onLoad={(e) => (e.target.style.opacity = 1)}
              />

              {/* Overlay Caption */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-yellow-300 text-center text-sm md:text-base font-medium px-3">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
