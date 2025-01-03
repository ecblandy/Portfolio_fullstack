"use client";

import { motion } from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaGulp,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
  SiSass,
  SiLess,
  SiGrunt,
  SiExpress,
  SiGithub,
  SiGit,
  SiMysql,
  SiMongodb,
  SiCypress,
  SiJquery,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { yearsOfJob } from "@/lib/githubServices";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams } from "next/navigation";
import { Locale } from "@/config/i18n";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export default function Resume() {
  const { lang }: { lang: Locale } = useParams();
  const dict = getDictionaryUseClient(lang);

  const experienceYears = yearsOfJob();
  // About data
  const about = {
    title: dict.resume.sidebar.title.about,
    description: dict.resume.sidebar.description.about,
    info: [
      {
        fieldName: dict.resume.sidebar.content.about.fieldName.name,
        fieldValue: "Vinícius Blandy",
      },
      {
        fieldName: dict.resume.sidebar.content.about.fieldName.phone,
        fieldValue: "(71) 99402-7893",
      },
      {
        fieldName: dict.resume.sidebar.content.about.fieldName.experience,
        fieldValue:
          experienceYears > 1
            ? `${experienceYears} ${dict.resume.sidebar.content.about.fieldValue.experience.plural}`
            : `${experienceYears} ${dict.resume.sidebar.content.about.fieldValue.experience.singular}`,
      },
      {
        fieldName: dict.resume.sidebar.content.about.fieldName.nationality,
        fieldValue: dict.resume.sidebar.content.about.fieldValue.nationality,
      },
      {
        fieldName: "Email",
        fieldValue: "devblandy@hotmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: dict.resume.sidebar.content.about.fieldValue.freelance,
      },
      {
        fieldName: dict.resume.sidebar.content.about.fieldName.languages,
        fieldValue: dict.resume.sidebar.content.about.fieldValue.languages,
      },
    ],
  };
  // Experience data
  const experience = {
    icon: "/assets/resume/badge.svg",
    title: dict.resume.sidebar.title.experience,
    description: dict.resume.sidebar.description.experience,
    items: [
      {
        company: "Freelancer",
        position: dict.resume.sidebar.content.card.experience.stack,
        duration: `2024 - ${dict.resume.sidebar.content.card.experience.date.stats}`,
      },
    ],
  };

  // Education
  const education = {
    icon: "/assets/resume/cap.svg",
    title: dict.resume.sidebar.title.education,
    description: dict.resume.sidebar.description.education,
    items: [
      {
        institution:
          dict.resume.sidebar.content.card.education.info.institution.course
            .title,
        degree:
          dict.resume.sidebar.content.card.education.info.institution.course
            .stack,
        duration: "2023 - 2024",
      },
      {
        institution:
          dict.resume.sidebar.content.card.education.info.institution.college
            .title,
        degree:
          dict.resume.sidebar.content.card.education.info.institution.college
            .stack,
        duration: `2024 - ${dict.resume.sidebar.content.card.education.info.stats}`,
      },
    ],
  };

  // Skills data
  const skills = {
    title: dict.resume.sidebar.title.skills,
    description: dict.resume.sidebar.description.skills,
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <SiBootstrap />,
        name: "bootstrap",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
      {
        icon: <SiTypescript />,
        name: "typescript",
      },
      {
        icon: <SiSass />,
        name: "sass",
      },
      {
        icon: <SiLess />,
        name: "less",
      },
      {
        icon: <SiGrunt />,
        name: "grunt",
      },
      {
        icon: <SiExpress />,
        name: "express",
      },
      {
        icon: <SiGithub />,
        name: "github",
      },
      {
        icon: <SiGit />,
        name: "git",
      },
      {
        icon: <FaGulp />,
        name: "gulp",
      },
      {
        icon: <SiMysql />,
        name: "mysql",
      },
      {
        icon: <SiMongodb />,
        name: "mongodb",
      },
      {
        icon: <FaVuejs />,
        name: "vue.js",
      },
      {
        icon: <SiCypress />,
        name: "cypress",
      },
      {
        icon: <SiJquery />,
        name: "jquery",
      },
      {
        icon: <TbApi />,
        name: "jquery",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">
              {dict.resume.tabs.experience}
            </TabsTrigger>
            <TabsTrigger value="education">
              {dict.resume.tabs.education}
            </TabsTrigger>
            <TabsTrigger value="skills">{dict.resume.tabs.skills}</TabsTrigger>
            <TabsTrigger value="about">{dict.resume.tabs.about}</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-dark-primary dark:text-light-primary">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-dark-primary/60  dark:text-light-primary/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#3f3e3e] dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-dark-primary dark:text-light-primary">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-dark-primary/60  dark:text-light-primary/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#3f3e3e] dark:bg-[#232329] h-[200px]] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full mb-5">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-dark-primary dark:text-light-primary">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-dark-primary/60  dark:text-light-primary/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#3f3e3e] dark:bg-[#232329]  rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-dark-primary">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-dark-primary dark:text-light-primary">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-dark-primary/60  dark:text-light-primary/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-wrap items-center justify-center xl:justify-start gap-[10px] xl:gap-[20px] w-full"
                      >
                        <span className="text-dark-primary/60 dark:text-white/60 w-full xl:w-auto">
                          {item.fieldName}
                        </span>
                        <span className="text-xl break-words w-full xl:w-auto text-dark-primary dark:text-light-primary">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
