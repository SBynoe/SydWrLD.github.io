"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSpring } from "react-spring";
import Link from "next/link";
import Image from "next/image";

const projectItems = [
  {
    id: 1,
    name: "Path of Artifacts",
    imageUrl: "./images/PATH_OF_ARTIFACTS.png",
    link: "https://undrscor.itch.io/path-of-artifacts",
    desc: "2D platformer web game build in Rust",
    lang: "(Rust, Bevy, LDTK)",
  },
  {
    id: 2,
    name: "Budget Smart",
    imageUrl: "./images/homeback.jpg",
    link: "https://www.budgetsmart.us",
    desc: "Budgeting app for individuals and groups",
    lang: "(Vue, Supabase)",
  },
  {
    id: 3,
    name: "NashWorld",
    imageUrl: "./images/bass.png",
    link: "https://www.nashwrld.us",
    desc: "Music educational Web app",
    lang: "(Typescript, React, Tailwind)",
  },
  {
    id: 4,
    name: "Pitch Turning Algorithm",
    imageUrl: "./images/tuner.png",
    link: "https://github.com/nataniatedla/Pitch-Tuning-Algorithm",
    desc: "AI pitch detection GUI",
    lang: "(Python)",
  },
];

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideIndex] = useState(0);
  // const [slideWidth, setSlideWidth] = useState(0);

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // Set slideWidth based on container width / visible count (3)
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth / 3;
      // setSlideWidth(width);
      api.start({ x: -slideIndex * width });
      console.log(x);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current?.offsetWidth]);

  return (
    <div className="justify-items-center pt-8">
      <section id="Projects"> </section>
      <div className="w-1/2">
        <div className="text-center text-4xl bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent pt-5">
          Projects
        </div>
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 z-40" />
      </div>

      <div
        ref={containerRef}
        className="flex md:flex-row relative w-full overflow-hidden mt-10 h-[500PX] justify-items-center justify-center"
      >
        {projectItems.map((project) => (
          <li
            key={project.id}
            className="flex-none lg:w-[400px] lg:h-[400px] sm:w-[200px] sm:h-[200px] p-2 list-none"
          >
            <Link href={project.link} passHref>
              <div className="group relative w-full aspect-square overflow-hidden rounded-lg border-2 border-transparent bg-black  transition">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/95 text-white opacity-0 p-4 transition-opacity group-hover:opacity-100">
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold">
                      {project.name}
                    </span>
                    <span className="bg-gradient-to-r from-stone-300 to-neutral-400 bg-clip-text text-transparent">
                      {project.desc}
                    </span>
                    <span className="text-xs bg-gradient-to-r from-stone-400 to-emerald-500 bg-clip-text text-transparent">
                      {project.lang}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
