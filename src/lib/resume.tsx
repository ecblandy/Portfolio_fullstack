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
import { yearsOfJob } from "./githubServices";

const experienceYears = yearsOfJob();
// About data
export const about = {
  title: "Sobre mim",
  description: "Aqui você encontrará algumas informações pessoais sobre mim.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Vinícius Blandy",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(71) 99402-7893",
    },
    {
      fieldName: "Experiência",
      fieldValue:
        experienceYears > 1
          ? `${experienceYears} anos`
          : `${experienceYears} ano`,
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasil",
    },
    {
      fieldName: "Email",
      fieldValue: "devblandy@hotmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Línguas",
      fieldValue: "Português, Inglês, Espanhol",
    },
  ],
};
// Experience data
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiências",
  description:
    "Aqui você encontrará um resumo das minhas experiências profissionais na área.",
  items: [
    {
      company: "Freelancer",
      position: "Desenvolvedor Full Stack",
      duration: "2024 - Atualmente",
    },
  ],
};

// Education
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educação",
  description:
    "Aqui você encontrará um resumo da minha formação acadêmica e as principais áreas de estudo que me prepararam para minha carreira.",
  items: [
    {
      institution: "EBAC - Escola Britanica de Artes Criativas e Tecnologia.",
      degree: "Engenheiro Frontend",
      duration: "2023 - 2024",
    },
    {
      institution:
        "UNIME - União Metropolitana de Educação e Cultura da Bahia.",
      degree: "ADS",
      duration: "2024 - Cursando",
    },
  ],
};

// Skills data
export const skills = {
  title: "Habilidades",
  description:
    "Aqui você encontrará um resumo das tecnologias que domino e utilizo no meu dia a dia, essenciais para o meu trabalho como desenvolvedor.",
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
