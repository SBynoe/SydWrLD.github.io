import React from "react";
import Scroll from "./Scroll";

const Skills = () => {
  return (
    <div className="relative bg-gradient-to-r from-stone-500 to-stone-700 bg-opacity-10 text-white flex flex-col items-center justify-center w-full pb-10 px-4">
      <section id="Experience" />

      <div className="text-center">
        <Scroll>
          <h2 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
        </Scroll>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl items-start justify-center gap-6 mt-4">
        <div className="md:w-1/2 p-2 text-center space-y-2">
          <Scroll>
            <p className="text-xl sm:text-2xl text-neutral-800">
              Student Assistant
            </p>
            <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
              Oct. 2021 – May. 2025
            </p>
          </Scroll>
          <Scroll>
            <ul className="text-sm sm:text-base text-left list-disc list-inside space-y-1 mt-2">
              <li>
                Assisted in building enterprise applications at Starline
                Ventures; Collaborated with a skilled development team on
                real-world projects.
              </li>
              <li>
                Contributed to coding, debugging, and enhancing software
                performance both front-end and back-end.
              </li>
            </ul>
          </Scroll>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="h-[200px] w-0.5 bg-neutral-100 dark:bg-white/10" />
        </div>

        <div className="md:w-1/2 p-2 text-center space-y-2">
          <Scroll>
            <p className="text-xl sm:text-2xl text-neutral-800">
              Software Development Intern
            </p>
            <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
              Nov. 2023 – Dec. 2024
            </p>
          </Scroll>
          <Scroll>
            <ul className="text-sm sm:text-base text-left list-disc list-inside space-y-1 mt-2">
              <li>
                Delivered technical support for faculty and staff including
                device troubleshooting and issue resolution.
              </li>
              <li>
                Maintained departmental tracking systems for expenses and
                invoices using spreadsheets and internal tools.
              </li>
            </ul>
          </Scroll>
        </div>
      </div>

      <Scroll>
        <h2 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent pt-10 text-center">
          Skills
        </h2>
      </Scroll>

      <Scroll>
        <div className="w-full max-w-4xl mt-4">
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg">
            {["Linux", "Tailwind React", "Java", "Typescript"].map((skill) => (
              <li
                key={skill}
                className="p-2 hover:text-stone-300 transition-colors duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Scroll>
    </div>
  );
};

export default Skills;
