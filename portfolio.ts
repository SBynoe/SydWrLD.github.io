import { title } from "process";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
//   SkillsSectionType,
  SkillBarsType,
//   SEODataType,
//   SocialLinksType,
  GreetingsType,
  socialLinksType,
} from "./types/sections";

export const greetings: GreetingsType = {
    name: "Sydney Bynoe",
    title: "Hey, I'm Sydney",
    description:
        "I'm a senior studying Computer Science at GSU. I have a passion in fullstack development, Machine Learning, and Music. I have experience in React, Python, Java, and SQLite.",
    resumeLink: "#",
};

export const openSource = {
    githubUserName: "Sbynoe",
};

export const contact = {};

export const socialLinks: socialLinksType = {
    email: "mailto:sbynoe1@student.gsu.edu",
    linkedin: "https://www.linkedin.com/in/sydney-bynoe-9023b4237/",
    github: "",
    instagram: "",

};


// export const skillsSection: SkillsSectionType = {
//     title: "What I do",
//     subTitle: "",
//     data: [
//         {
//             title: "Full Stack Development",
//             lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
//             skills: [

//             ],
//             softwareSkills: [
//                 {
//                     skillName: "",
//                     iconifyTag: "",
//                 },
//             ],
//         },
//     ],

// };