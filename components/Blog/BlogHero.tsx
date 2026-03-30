"use client";
import React from "react";
import ParticlesHero from "../Home/Hero/ParticleBackGround";

const BlogHero = () => {
  return (
    <div className="relative h-[40vh] flex flex-col items-center justify-center text-white overflow-hidden">
      <ParticlesHero />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Blog
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Thoughts on software engineering, product design, and technology.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;
