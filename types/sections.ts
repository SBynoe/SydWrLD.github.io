export type SECDataType = {
    title: string;
    author?: string;
    description?: string;
    image?: string;
    url?: string;
    keywords: string[];
};

export type socialLinksType = {
    [link: string]: string;
};

//Hero Section

export type GreetingsType = {
    name: string;
    title: string;
    description?: string;
    resumeLink?: string;
};

//Skills Segment
type SoftwareSkillType = {
    skillName: string;
    iconifyTag: string;
};

type SkillType = {
    title: string;
    lottieAnimationFile: string;
    skills: React.ReactNode[] | string[];
    softwareSkills: SoftwareSkillType[];
};


//Proficientcy Section

export type SkillBarsType = {
    Stack: string;
    progressPercentage: string;
};

//Education Section
export type EducationType = {
    schoolName: string;
    subHeader: string;
    duration: string;
    desc: string;
    grade?: string;
    descBullets?: string[];
};

//Experience Section

export type ExperienceType = {
    role: string;
    company: string;
    companyLogo: string;
    date: string;
    desc: string;
    descBullets?: string[];
};

//Project Segment

export type ProjectType = {
    name: string;
    desc: string;
    github?: string;
    link?: string;
};

//Feedback Section

export type FeedbackType = {
    name: string;
    role: string;
    feedback: string;
}