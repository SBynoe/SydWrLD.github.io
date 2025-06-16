"use client";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() =>{
    let lastScrollY = window.scrollY;
    
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollY = currentScrollY;
    }
    
    window.addEventListener("scroll", controlNavbar)

    return() => window.removeEventListener("scroll", controlNavbar)
  }, [])
  



  return (
    <>
      <div className={` fixed z-50 text-white flex items-center w-full mx-auto h-18 px-4 text-lg
       bg-red-950 transition-transform duration-300 ${ isVisible ? "translate-y-0": "-translate-y-full"}`}>
        <h1 className="text-3xl font-bold text-white ml-4">SYDS WRLD</h1>
        <ul className="hidden md:flex pl-9">
          <li className="p-2 hover:text-red-900 transition-colors duration-300">
            <a href="/">Home</a>
          </li>
          <li className="p-2 hover:text-red-900 transition-colors duration-300">
            <a href="/#Projects">Projects</a>
          </li>
          <li className="p-2 hover:text-red-900 transition-colors duration-300">
            <a href="/#Experience">Experience</a>
          </li>
          <li className="p-2 hover:text-red-900 transition-colors duration-300">
            <a href="/#About">About</a>
          </li>
          <li className="p-2 hover:text-red-900 transition-colors duration-300">
            <a href="/#Contact">Contact</a>
          </li>
          <li className="p-2 hover:text-red-900 transition-colors duration-300">
            <a href="/#Music">Music</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
