import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { getCommit, yearsOfJob, repos } from "@/lib/githubServices";

export default async function Home() {
  const commit = await getCommit();
  const experienceYears = yearsOfJob();
  const repositories = await repos();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor de Software</span>
            <h1 className="h1 mb-6">
              Olá eu sou <br />{" "}
              <span className="text-accent">Vinícius Blandy</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              Desenvolvedor frontend em constante evolução, com conhecimento em
              diversas tecnologias. Atualmente, mergulhando no universo do
              backend.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button variant="outline" size="lg">
                <a
                  href="/assets/curriculo/viniciusCV.pdf"
                  download
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats
        commit={commit}
        experience={experienceYears}
        repositories={repositories}
      />
    </section>
  );
}
