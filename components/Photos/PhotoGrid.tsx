"use client";
import React from "react";
import PhotoItem from "./PhotoItem";
import Lightbox, { type Photo } from "./Lightbox";

const photos: Photo[] = [
  { src: "/images/photos/architecture.png", alt: "White apartment building with balconies behind a palm tree" },
  { src: "/images/photos/art.png", alt: "Stack of rainbow-painted stones in a park with palm trees" },
  { src: "/images/photos/nature_path.png", alt: "Stone path through a tropical palm forest" },
  { src: "/images/photos/chinatown.png", alt: "Busy Chinatown street lit by red lanterns and neon signs" },
  { src: "/images/photos/ferris_wheel.png", alt: "Colourful Ferris wheel at a crowded fairground" },
  { src: "/images/photos/red_cabin.png", alt: "Red wooden cabin in a snowy pine forest" },
];

const PhotoGrid = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <PhotoItem
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            eager={index < 3}
            onOpen={() => setOpenIndex(index)}
          />
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
};

export default PhotoGrid;
