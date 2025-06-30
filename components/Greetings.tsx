"use client";
import dynamic from "next/dynamic";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const Showcase = dynamic(() => import("../components/Showcase"));

const Greetings = () => {
  return (
    <main className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gradient-to-r from-stone-500 to-stone-700 px-4 pt-10 gap-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 px-4">
          <div className="text-white flex flex-col gap-6">
            <div>
              <p className="text-4xl sm:text-5xl sm:pt-10 sm: mt-10 font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent">
                Syd.WrLD
              </p>
              <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

              <div className="text-2xl sm:text-3xl font-semibold text-neutral-800">
                <TypeAnimation
                  sequence={[
                    "Front-end Programmer",
                    1000,
                    "Music Producer",
                    1000,
                    "Bassist",
                    1000,
                    "Computer Science Graduate",
                    1000,
                  ]}
                  wrapper="span"
                  speed={35}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>

            <div className="text-base sm:text-lg">
              <p>
                Hey, I&apos;m Syd Bynoe. I&apos;m a Computer Science graduate
                from Georgia State.
              </p>
              <p>I am open to work all roles!</p>
            </div>

            <div className="grid grid-cols-3 row-span-1 gap-10 w-3 md:w-auto md:justify-items-center sm:w-auto sm:justify-items-center">
              <Link href={"https://github.com/SBynoe"}>
                <SiGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/sydney-bynoe-9023b4237/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="24px"
                  viewBox="0,0,70,70"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5,5)">
                      <path d="M2.75781,1c-0.96484,0 -1.75781,0.79297 -1.75781,1.75781v9.48828c0,0.96094 0.79297,1.75391 1.75781,1.75391h9.48828c0.96094,0 1.75391,-0.79297 1.75391,-1.75391v-9.48828c0,-0.96484 -0.79297,-1.75781 -1.75391,-1.75781zM2.75781,2h9.48828c0.42188,0 0.75391,0.33203 0.75391,0.75781v9.48828c0,0.42188 -0.33203,0.75391 -0.75391,0.75391h-9.48828c-0.42578,0 -0.75781,-0.33203 -0.75781,-0.75391v-9.48828c0,-0.42578 0.33203,-0.75781 0.75781,-0.75781zM4,3c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1zM3,6v6h2v-6zM6,6v6h2v-2.67969c0,-0.83203 0.07813,-1.57813 1.07813,-1.57813c0.98438,0 0.92188,0.89453 0.92188,1.63281v2.625h2v-2.96094c0,-1.71875 -0.35937,-3.03906 -2.30859,-3.03906c-0.9375,0 -1.41016,0.375 -1.66797,0.875h-0.02344v-0.875z"></path>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link href={"mailto:sbynoe17@gmail.com"}>
                <SiGmail />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center px-4 mt-9">
          <p className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent text-center md:text-left">
            Music Showcase:
          </p>
          <span className="text-xs text-white mb-2 text-center md:text-left">
            Brent X Cole
          </span>
          <Showcase />
        </div>
      </div>

      <div className="flex justify-center my-8">
        <hr className="w-3/4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      </div>
    </main>
  );
};

export default Greetings;
