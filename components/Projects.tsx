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
    desc: "2D platformer web game built in Rust",
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
    link: "https://portfolio-starter-kit-liard-eight.vercel.app",
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

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideIndex] = useState(0);
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth / 3;
      console.log(x);
      api.start({ x: -slideIndex * width });
    }
  }, [slideIndex, api]);

  return (
    <div className="px-4 pt-8">
      <section id="Projects" />
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent">
          Projects
        </h2>
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      </div>

      <div
        ref={containerRef}
        className="flex flex-wrap justify-center gap-6 mt-10"
      >
        {projectItems.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%] max-w-sm pb-7"
          >
            <Link href={project.link} passHref>
              <div className="group relative w-full aspect-square overflow-hidden rounded-lg border-2 border-transparent bg-black transition">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/95 text-white opacity-0 p-4 transition-opacity group-hover:opacity-100">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                      {project.name}
                    </span>
                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-stone-300 to-neutral-400">
                      {project.desc}
                    </span>
                    <span className="text-xs bg-gradient-to-r from-stone-400 to-emerald-500 bg-clip-text text-transparent">
                      {project.lang}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
