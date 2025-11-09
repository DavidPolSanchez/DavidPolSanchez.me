"use client";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants/contant";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

export const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? " bg-[#0fd142ed9] shadow-md " : "fixed"
      } duration-200 h-[12vh] z-10000 fixed w-full `}
    >
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/*LOGO*/}
            <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center flex-col">
                <Image
                src="/images/Logo.png"
                alt="Logo de mi sitio web"
                width={30}
                height={50}
                />
            </div>
            <h1 className="text-x1  hidden sm:block md:text-2x1 text-white font-bold">
                DavidPolSanchez
            </h1>
            </div>
            {/* navLinks*/}
            <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((link) => {
                return (
                <Link
                    key={link.id}
                    href={link.url}
                    className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
                >
                    <p>{link.label} </p>
                </Link>
                );
            })}
            </div>
            {/*Buttons*/}
            <div className="flex items-center space-x-4">
            {/* CV Button */}
            <button
                className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
                    transition-all duration-300 text-white flex items-center space-x-2"
            >
                <BiDownload className="w-5 h-5" />
                <span>Download CV</span>
            </button>
            {/* Burguer Menu */}
            <HiBars3BottomRight
                onClick={openNav}
                className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
            </div>
        </div>
    </div>
  );
};

export default Nav;
