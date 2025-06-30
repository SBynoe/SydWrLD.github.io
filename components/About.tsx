import React from "react";
import Scroll from "./Scroll";
import AboutImages from "@/components/AboutImages";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <section id="About" />
      <Scroll>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent mt-8">
          About Me
        </h2>
      </Scroll>

      <div className="w-full max-w-4xl mt-6">
        <Scroll>
          <p className="text-base sm:text-lg text-center text-white leading-relaxed">
            I&apos;m a Spring 2025 college graduate from Georgia State
            University. My primary interests are in full-stack development.
            Outside of work, I am a music producer who works in FL Studio and
            Ableton Live 11. I am also a bassist at my local church.
          </p>
        </Scroll>
      </div>

      <div className="w-full mt-8 mb-10">
        <AboutImages />
      </div>

      <div className="w-full flex justify-center mb-8">
        <hr className="w-3/4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      </div>
    </div>
  );
};

export default About;
