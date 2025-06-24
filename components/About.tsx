import React from "react";
import Scroll from "./Scroll";
import AboutImages from "@/components/AboutImages";

const About = () => {
  return (
    <div>
      <div className="justify-items-center">
        <Scroll>
          <div className="items-center text-4xl justify-center bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent">
            About Me
          </div>
        </Scroll>

        <div className=" justify-items-center">
          <div className="flex p-2 gap-1 justify-center">
            <div className="w-1/3 p-2 text-center">
              <Scroll>
                <p>
                  I'm a Spring 2025 college graduate from Georgia State
                  University. My primary interests are in full-stack
                  development. Outside of work, I am a music producer who works
                  in Fruit Loops Studio and Ableton Live 11. I am also a bassist
                  at my local church.
                </p>
              </Scroll>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-items-center">
        <AboutImages />
      </div>
    </div>
  );
};

export default About;
