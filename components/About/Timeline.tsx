"use client";
import React from "react";

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Freelance",
    period: "2024 – Now",
    description: "Building modern web applications for clients across various industries."
  },
  {
    role: "Frontend Engineer Intern",
    company: "Sánchez & Co.",
    period: "2023 – 2024",
    description: "Assisted in the development of customer-facing dashboards."
  },
  {
    role: "Computer Science Degree",
    company: "University of Technology",
    period: "2019 – 2023",
    description: "Focused on Software Engineering and user-centric design."
  }
];

const Timeline = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 md:gap-8 group">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-green-700 border-4 border-black ring-2 ring-green-900 ring-offset-bg-black"></div>
              {index !== experiences.length - 1 && (
                <div className="w-1 h-full bg-gray-800 -mt-px group-hover:bg-green-900 transition-colors duration-300"></div>
              )}
            </div>
            <div className="pb-8">
              <span className="text-sm font-medium text-green-500 uppercase tracking-wider">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
              <p className="text-gray-400 font-medium">{exp.company}</p>
              <p className="mt-3 text-gray-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
