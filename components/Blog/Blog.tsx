"use client";
import React from "react";

import BlogEntry from "./BlogEntry";
import BlogList from "./BlogList";
import BlogHero from "./BlogHero";

const Blog = () => {
  return (
    <div className="bg-[#050505] min-h-screen pb-20 overflow-hidden">
      <BlogHero />
      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] px-4 sm:px-8">
        <div className="h-px bg-linear-to-r from-transparent via-gray-800 to-transparent max-w-4xl mx-auto my-8" />
        <BlogList />

      </div>
    </div>
  );
};

export default Blog;

