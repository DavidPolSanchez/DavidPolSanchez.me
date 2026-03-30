"use client";
import React from "react";
import AboutHero from "./AboutHero";
import Biography from "./Biography";
import Timeline from "./Timeline";
import HobbyGrid from "./HobbyGrid";

const About = () => {
  return (
    <div className="bg-[#050505] min-h-screen pb-20 overflow-hidden">
      <AboutHero />
      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] px-4 sm:px-8">
        <Biography />
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent max-w-4xl mx-auto my-8"></div>
        <Timeline />
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent max-w-4xl mx-auto my-8"></div>
        <HobbyGrid />
      </div>
    </div>
  );
};

export default About;
