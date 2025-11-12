"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackGround";

export const Hero = () => {
  return (
    <div
      className="relative h-screen items-center flex justify-center text-white 
    overflow-hidden flex-col"
    >
        
        <ParticlesHero/>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-bold flex items-center">
          Hey, I&apos;m David Pol Sanchez!
          <br />
          <br />
        </h2>
        <Image
          src="/images/profilepic.jpeg"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-5 border-gray-600"
        />

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          Creating software projects, <br />
          focusing on products,<br />
          <span className="text-green-900"> and user experiences.</span>
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Using technology
          <span className="text-gray-500 font-bold">
            <Typewriter
              options={{
                strings: [
                  "to connect bussiness to users.",
                  "to build a usefull tools.",
                  "to improve how affects people.",
                  "to be close to the people we care.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 bg-green-700 hover:bg-green-600 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
            <span>See more</span>
            <BsArrowRight className="inline-block ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
