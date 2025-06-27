"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <div
      className={`fixed z-50 text-white flex items-center justify-between w-full px-4 py-4
      bg-neutral-900 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-3xl font-bold text-white">SYDS WRLD</h1>

      <ul className="hidden md:flex gap-6 text-lg">
        <li className="hover:text-stone-500 transition-colors duration-300">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-stone-500 transition-colors duration-300">
          <a href="#Projects">Projects</a>
        </li>
        <li className="hover:text-stone-500 transition-colors duration-300">
          <a href="#Experience">Experience</a>
        </li>
        <li className="hover:text-stone-500 transition-colors duration-300">
          <a href="#About">About</a>
        </li>
        <li className="hover:text-stone-500 transition-colors duration-300">
          <a href="#Music">Music</a>
        </li>
      </ul>

      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>

      <div
        className={`absolute top-[67px] left-0 w-full bg-neutral-900 text-white flex flex-col items-center gap-4 py-6 md:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#About" onClick={() => setIsOpen(false)}>About</a>
        <a href="#Music" onClick={() => setIsOpen(false)}>Music</a>
      </div>
    </div>
  );
};

export default Navigation;
