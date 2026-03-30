"use client";
import React from "react";
import PhotoItem from "./PhotoItem";

const photos = [
  { src: "/images/photos/architecture.png", alt: "Modern Architecture" },
  { src: "/images/photos/art.png", alt: "Public Art" },
  { src: "/images/photos/nature_path.png", alt: "Nature Path" },

];

const PhotoGrid = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <PhotoItem key={index} src={photo.src} alt={photo.alt} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGrid;
