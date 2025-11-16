import React from "react";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent{" "}
        <span className="text-green-300"> Projects </span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/*Project module in the future*/}
        <div>
          <Image
            src="/images/p1.png"
            alt="img"
            width={800}
            height={900}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Cypress Cucumber Boilerplate 
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Automation, Testing Framework
          </h1>
        </div>
        <div>
          <Image
            src="/images/p2.png"
            alt="img"
            width={800}
            height={900}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            React Routering Project 
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
             Frontend, ReactJS Vite
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
