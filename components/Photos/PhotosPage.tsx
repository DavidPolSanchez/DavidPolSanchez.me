"use client";
import React from "react";
import PhotoGrid from "./PhotoGrid";

const PhotosPage = () => {
  return (
    <div className="bg-[#050505] min-h-screen pb-20 pt-20 overflow-hidden">
      <div className="relative z-20 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <PhotoGrid />
      </div>
    </div>
  );
};

export default PhotosPage;
