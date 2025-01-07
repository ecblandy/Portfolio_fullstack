import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/social";
import Photo from "@/components/photo";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import { Locale } from "@/config/i18n";
import StatsRender from "@/components/status-rendering";

interface PropsType {
  params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: PropsType) {
  const { lang } = await params;

  const dict = await getDictionaryServerOnly(lang);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-dark-primary dark:text-light-primary">
              {dict.home.stack}
            </span>
            <h1 className="h1 mb-6 text-dark-primary dark:text-light-primary">
              {dict.home.hello} <br />
              <span className="text-accent">Vinícius Blandy</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-dark-primary/80 dark:text-light-primary/80 ">
              {dict.home.description}
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="hover:text-dark-primary"
              >
                <a
                  href="/assets/curriculo/viniciusCV.pdf"
                  download
                  className="uppercase flex items-center gap-2 "
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-dark-primary  hover:transition-all duration-500"
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
      <StatsRender />
    </section>
  );
}
