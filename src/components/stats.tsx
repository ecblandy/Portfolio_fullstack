"use client";
import CountUp from "react-countup";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { useParams } from "next/navigation";
import { Locale } from "@/config/i18n";
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
  SiBootstrap,
  SiCypress,
  SiExpress,
  SiGit,
  SiGithub,
  SiGrunt,
  SiJquery,
  SiLess,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
interface StatsProps {
  commit: number;
  experience: number;
  repositories: number;
}

export default function Stats({
  commit,
  experience,
  repositories,
}: StatsProps) {
  const { lang }: { lang: Locale } = useParams();
  const dict = getDictionaryUseClient(lang);

  // Skills data
  const skillList = [
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
  ];

  const stats = [
    {
      num: experience,
      text:
        experience > 1
          ? dict.home.stats.experience.plural
          : dict.home.stats.experience.singular,
    },
    {
      num: repositories,
      text: dict.home.stats.projects,
    },
    {
      num: skillList.length,
      text: dict.home.stats.techs,
    },
    {
      num: commit,
      text: dict.home.stats.commits,
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, index) => {
            const isDecimal = item.num % 1 !== 0;
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  start={0}
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-dark-primary dark:text-light-primary"
                  decimals={isDecimal ? 1 : 0} // Limitando para 1 casa decimal
                />

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-dark-primary/80 dark:text-light-primary/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
