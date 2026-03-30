"use client";
import React from "react";
import { FaPlane, FaMusic, FaCamera, FaGamepad } from "react-icons/fa";

const hobbies = [
  { name: "Travelling", icon: <FaPlane className="w-8 h-8 text-blue-500" />, color: "bg-blue-500/10" },
  { name: "Music", icon: <FaMusic className="w-8 h-8 text-purple-500" />, color: "bg-purple-500/10" },
  { name: "Photography", icon: <FaCamera className="w-8 h-8 text-pink-500" />, color: "bg-pink-500/10" },
  { name: "Gaming", icon: <FaGamepad className="w-8 h-8 text-orange-500" />, color: "bg-orange-500/10" },
];

const HobbyGrid = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-12">Interests & Hobbies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl ${hobby.color} border border-white/5 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1`}
          >
            {hobby.icon}
            <span className="mt-4 font-medium text-gray-300">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbyGrid;
