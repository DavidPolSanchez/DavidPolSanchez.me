import NavLinks from "@/constants/constants";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
export const MobileNav = ({ closeNav, showNav }: Props) => {

  const navOpen= showNav ? "translate-x-0" : "translate-x-[100%]";
  
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-100002 bg-black 
      opacity-70 w-full h-screen`}></div>
      {/* NavLinks */}
      <div
        className={`text-black ${navOpen} fixed justify-center flex flex-col h-full transform transition-all 
      duration-500 delay-300 w-[80%] sm:w-[60%] bg-green-800 space-y-6 z-1000050 right-0`}
      >
        {NavLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.url}
              className="text-black w-fit text-xl ml-12 border-b-[1.5px] pb-1  sm:text-[30px]"
            >
              <p>{link.label} </p>
            </a>
          );
        })}
        {/*/ Cross Icon  */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};
export default MobileNav;
