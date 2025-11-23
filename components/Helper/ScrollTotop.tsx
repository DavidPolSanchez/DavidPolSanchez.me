"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTotop = () => {
  const [isvisible, setIsvisible] = useState(false);

  // Show button when page is scrolled upto given distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isvisible && (
        <button
          onClick={scrollToTop}
          className="bg-green-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
          <FaArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollTotop;
