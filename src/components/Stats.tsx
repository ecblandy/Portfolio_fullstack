"use client";
import { skills } from "@/lib/resume";
import CountUp from "react-countup";

interface StatsProps {
  commit: number;
  experience: number;
  repositories: number;
}

const { skillList } = skills;

export default function Stats({
  commit,
  experience,
  repositories,
}: StatsProps) {
  const stats = [
    {
      num: experience, //parseFloat(`${experience.years}.${experience.months})`
      text: experience > 1 ? "Anos de experiência" : "Ano de experiência",
    },
    {
      num: repositories,
      text: "Projetos completos",
    },
    {
      num: skillList.length,
      text: "Tecnologias dominadas",
    },
    {
      num: commit,
      text: "Commits de código",
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
                  className="text-4xl xl:text-6xl font-extrabold"
                  decimals={isDecimal ? 1 : 0} // Limitando para 1 casa decimal
                />

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
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
