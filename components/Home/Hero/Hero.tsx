import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return (
    <div
      className="relative h-screen items-center flex justify-center text-white 
    overflow-hidden flex-col"
    >
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/profilepic.jpeg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-5 border-gray-600"
        />
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
        Creating software projects, <br />
        focusing on products,
        <span className="text-green-900"> and user experiences.</span>
      </h1>
      <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
        Hi, I'm David - a passionate software developer specializing in building
        <span className="text-gray-500 font-bold">&nbsp;</span>
      </h2>
    </div>
  );
};

export default Hero;
