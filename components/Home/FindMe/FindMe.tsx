"use client";
import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SiLinkedin, SiYoutube } from "react-icons/si";
import { SiMastodon } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const apps = [
  {
    name: "Instagram",
    icon: <SlSocialInstagram />,
    username: "DaveLoopCave",
    url: "https://www.instagram.com/daveloopcave/",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    username: "David Pol Sánchez Martos",
    url: "https://www.linkedin.com/in/david-pol-sanchez/",
  },
  {
    name: "Mastodon",
    icon: <SiMastodon />,
    username: "@DaveLoop",
    url: "https://mastodon.social/@DaveLoop",
  },{
    name: "Youtube",
    icon: <SiYoutube />,
    username: "@DaveLoopCave",
    url: "https://www.youtube.com/@DaveLoopCave",
  },
];
const FindMe = () => {
  return (
    <div className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            Find Me On <span className="text-green-300"> Social Media </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {apps.map((app) => {
                return (
                    <Tilt key={app.name} scale={1.02} transitionSpeed={400}>
                    <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={app.name}
                        className="flex flex-col items-center bg-green-900/20 p-8 rounded-lg hover:bg-green-900/40 transition-all duration-300 cursor-pointer"
                    >
                        <div className="text-6xl mb-4 text-green-300">{app.icon}</div>

                        <h2 className="text-xl font-bold mb-2">{app.name}</h2>
                    </a>
                    </Tilt>
                );
            })} 
        </div>
    </div>

  );
};

export default FindMe;
