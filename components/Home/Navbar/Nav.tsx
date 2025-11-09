import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import { NavLinks } from "@/constants/contant";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-10000 fixed w-full">
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
      </div>
    </div>
  );
};

export default Nav;
