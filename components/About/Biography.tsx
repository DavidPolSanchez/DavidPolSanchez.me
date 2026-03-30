"use client";
import React from "react";
import Image from "next/image";

const Biography = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-white">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">Hey there! 👋</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm David, a Software Developer based in Spain, that loves to code and build products with a delightful user experience.
            I love working in between product, engineering and developer experience.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            Currently focusing on building modern web applications using React, Next.js, and TypeScript.
            Some things that make me excited are JavaScript, Open Source, and building meaningful user-centric products.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="/images/profilepic.jpeg"
            alt="David Pol Sanchez"
            width={300}
            height={400}
            className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Biography;
