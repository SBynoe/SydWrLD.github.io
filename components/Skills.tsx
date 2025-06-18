import React from "react";
import Scroll from "./Scroll";

const Skills = () => {
  return (
    <div className="relative bg-gradient-to-r from-stone-500 to-stone-700 bg-opacity-10 text-white flex items-center justify-center flex-col h-auto w-full pb-7">
      <div className="justify-items-center">
        <Scroll>
          <div className="items-center text-4xl justify-center bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent">
            Experience
          </div>
        </Scroll>

        <div className=" justify-items-center">
          <div className="flex p-2 gap-1 justify-center">
            <div className="w-1/3 p-2 text-center">
              <Scroll>
                <p className="text-3xl text-neutral-800">Student Assistant </p>
                <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
                  Oct. 2021 – May. 2025
                </p>
              </Scroll>
              <Scroll>
                <li className="">
                  Assisted in building enterprise applications at Starline
                  Ventures; Collaborated with a skilled development team on
                  real-world projects
                </li>
                <li>
                  Contributed to coding, debugging, and enhancing software
                  performance both font-end and back￾end
                </li>
              </Scroll>
            </div>
            <div className="justify-items-center">
              <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            </div>
            <div className="w-1/3 p-2 text-center">
              <Scroll>
                <p className="text-3xl text-neutral-800">
                  Software Development Intern
                </p>
                <p className="bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent">
                  Nov. 2023 – Dec. 2024
                </p>
              </Scroll>
              <Scroll>
                <li className="">
                  Delivered technical support for faculty and staff including
                  device troubleshooting and issue resolution.
                </li>
                <li>
                  Maintained departmental tracking systems for expenses and
                  invoices using spreadsheets and internal tools.
                </li>
              </Scroll>
            </div>
          </div>
        </div>
      </div>
      <Scroll>
        <div className="items-center text-4xl justify-center bg-gradient-to-r from-stone-900 to-stone-800 bg-clip-text text-transparent pt-5">
          Skills
        </div>
      </Scroll>
      <Scroll>
        <div>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

          <ul className="flex flex-row space-x-10">
            <li className="p-3 hover:text-stone-300 transition-colors duration-300">
              Linux
            </li>
            <li className="p-3 hover:text-stone-300 transition-colors duration-300">
              Tailwind React
            </li>
            <li className="p-3 hover:text-stone-300 transition-colors duration-300">
              Java
            </li>
            <li className="p-3 hover:text-stone-300 transition-colors duration-300">
              Typescript
            </li>
          </ul>
        </div>
      </Scroll>
    </div>
  );
};

export default Skills;
