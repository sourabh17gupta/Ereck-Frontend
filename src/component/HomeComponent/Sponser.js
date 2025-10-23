import React from "react";
import LogoLoop from "./LogoLoop";

function Sponser() {
  const sponsors = [
    { src: "https://res.cloudinary.com/dmavfiwwt/image/upload/v1760462563/Ereck/ksoxlqigisqebvsil8pp.jpg", alt: "Wayspire" },
    { src: "http://res.cloudinary.com/dmavfiwwt/image/upload/v1760462587/Ereck/hngfh5qn4ykatyl7pu16.png", alt: "Honda" },
    { src: "http://res.cloudinary.com/dmavfiwwt/image/upload/v1760462610/Ereck/h2guo0prhg0rpwrojihy.jpg", alt: "Unstop" },
    { src: "http://res.cloudinary.com/dmavfiwwt/image/upload/v1760462681/Ereck/xjjrurupeodsjpyzzamt.jpg", alt: "Tata" },
    { src: "http://res.cloudinary.com/dmavfiwwt/image/upload/v1760456870/Ereck/d2e0quhbntwohawiwm2k.jpg", alt: "Siemens" },
  ];

  return (
    <section className="py-4 bg-black">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Our Past Sponsors
      </h2>

      <LogoLoop
        logos={sponsors}
        speed={120}
        direction="left"
        logoHeight={60}
        gap={48}
        fadeOut
        scaleOnHover
        fadeOutColor="#000000ff"
        className="max-w-6xl mx-auto"
      />
    </section>
  );
}

export default Sponser;
