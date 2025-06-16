import React from "react";
import Link from "next/link";
import Image from "next/image";
import GameImage from "../public/images/PATH_OF_ARTIFACTS.png";

const Projects = () => {
  return (
    <div className="bg-gray-950 bg-opacity-10 min-w-max h-auto text-white justify-items-center flex-col">
      <div className="items-center text-4xl pt-3">
        Projects
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      </div>
      <div className="px-3 grid grid-cols-2 grid-rows-2 items-center gap-2">
        <div className=" w-[150px] h-[150px] rounded-md bg-slate-950 py-4 my-6 items-center text-center">
          <p>Path of Artifacts:</p>
          <p>2D platformer web game build in Rust</p>
          <Link href={"https://undrscor.itch.io/path-of-artifacts"}>
            <p>Link</p>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] rounded-md bg-slate-950 py-4 my-6 items-center text-center">
          <p>Budget Smart:</p>
          <p>Budgeting app for individuals and groups.
            (Vue, Supabase)
          </p>
          <Link href={"https://www.budgetsmart.us"}>
            <p>Link</p>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] rounded-md bg-slate-950 py-4 my-6 items-center text-center">
          <p>NashWorld:</p>
          <p>Music educational Web app (Typescript, React, Tailwind)</p>
          <Link href={"https://www.budgetsmart.us"}>
            <p>Link</p>
          </Link>
        </div>
        <div className="w-[150px] h-[150px] rounded-md bg-slate-950 py-4 my-6 items-center text-center">
          <p>Pitch Turning Algorithm</p>
          <p>AI pitch detection GUI (Python)</p>
          <Link href={"https://github.com/nataniatedla/Pitch-Tuning-Algorithm"}>
            <p>Link</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
