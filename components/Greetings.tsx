"use client";
import dynamic from "next/dynamic";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  SiGithub,
  SiGmail,
  SiLinkerd,
  SiReact,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
const Showcase = dynamic(() => import("../components/Showcase"));

const Greetings = () => {
  return (
    <main>
      <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-stone-500 to-stone-700 px-4">
        <div className="mt-6 mr-11 mb-11 min-h-[440px] max-w-[50%]">
          <div className="py-5 text-white h-auto flex flex-col md:gap-6 gap-12 px-10 mx-11 justify-left">
            <div className="flex-col my-auto md:mx-0">
              <p className="md:text-5xl sm:text-4xl font-bold mb-0 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent">
                Syd.WrLD
              </p>
              <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

              <div className="pt-1 pb-3 font-semibold text-3xl text-neutral-800">
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
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div>
              <p>
                Hey, I'm Syd Bynoe. I'm a Computer Science graduate from Georgia
                State.
              </p>
              <p> I am open to work all rolls!</p>
            </div>
            <div className="grid grid-cols-3 row-span-1 gap-10 w-3">
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
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
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
        <div className="flex flex-col max-w-[50%] w-full p-4 h-max">
          <p className="text-center md:text-5xl sm:text-4xl font-bold mb-0 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent">
            Music Showcase:
          </p>
          <span className="text-center text-xs">Brent X Cole</span>

          <Showcase />
        </div>
      </div>
      <div className="justify-items-center mb-8 pb-8">
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 w-[75%] justify-items-center" />
      </div>
    </main>
  );
};

export default Greetings;
