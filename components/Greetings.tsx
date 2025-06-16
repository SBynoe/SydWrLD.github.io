"use client";
import dynamic from "next/dynamic";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { SiGithub, SiLinkerd, SiReact } from '@icons-pack/react-simple-icons';
import Link from "next/link";
const Showcase = dynamic(() => import("../components/Showcase"));

const Greetings = () => {
  return (
    <main>
      <div className="flex justify-self-stretch w-full h-full pt-[150px] relative mb-7">
        <div className=" mt-11 mr-11 mb-11 min-h-[440px] max-w-[50%]">
          <div className="py-10 text-white h-auto flex flex-col md:gap-6 gap-12 px-10 mx-11 justify-left">
            <div className="flex-col my-auto md:mx-0">
              <p className="md:text-5xl sm:text-4xl font-bold text-gray-200 mb-0">
                Syd.WrLD
              </p>
              <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

              <div className="pt-1 pb-3 font-semibold text-3xl">
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
            <div className="col-span-2 row-span-1">
              <Link href={"https://github.com/SBynoe"}>
                <SiGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/sydney-bynoe-9023b4237/"}
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 m-3 relative">
          <Showcase />
        </div>
      </div>
    </main>
  );
};

export default Greetings;
