import React from "react";

const Skills = () => {
  return (
    <div className="relative bg-gray-950 bg-opacity-10 text-white flex items-center justify-center flex-col h-auto w-full">
      <div className="items-center text-4xl justify-center">Experience</div>
      <div className="grid grid-cols-3 p-9 justify-items-center">
        <div className="w-2/4">
          <p>Student Assistant </p>

          <li className="">
            Assisted in building enterprise applications at Starline Ventures;
            Collaborated with a skilled development team on real-world projects
          </li>
          <li>
            Contributed to coding, debugging, and enhancing software performance
            both font-end and back￾end
          </li>
        </div>
        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
        <div className="w-2/4">
          <p>Software Development Intern</p>
          <li className="">
            Delivered technical support for faculty and staff including device
            troubleshooting and issue resolution.
          </li>
          <li>
            Maintained departmental tracking systems for expenses and invoices
            using spreadsheets and internal tools.
          </li>
        </div>
      </div>

      <div className="items-center text-4xl justify-center">Skills</div>
      <div>
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        <ul className="flex flex-row space-x-10">
          <li className="p-3 hover:text-pink-600 transition-colors duration-300">
            Linux
          </li>
          <li className="p-3 hover:text-pink-600 transition-colors duration-300">
            Tailwind React
          </li>
          <li className="p-3 hover:text-pink-600 transition-colors duration-300">
            Java
          </li>
          <li className="p-3 hover:text-pink-600 transition-colors duration-300">
            Typescript
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
