"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
    <nav
      className={`fixed top-0 z-50 w-full bg-neutral-900 text-white px-4 py-4 flex justify-between items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">SYDS WRLD</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-base lg:text-lg font-medium">
        {["Home", "Projects", "Experience", "About", "Music"].map((label) => (
          <li
            key={label}
            className="hover:text-stone-500 transition-colors duration-300"
          >
            {label === "Home" ? (
              <Link href="/">{label}</Link>
            ) : (
              <a href={`#${label}`}>{label}</a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-neutral-900 text-white md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[300px] py-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-lg font-medium">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <a href="#Projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>
          </li>
          <li>
            <a href="#About" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#Music" onClick={() => setIsOpen(false)}>
              Music
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
