"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Locale } from "@/config/i18n";
import { useParams } from "next/navigation";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export default function Services() {
  const { lang }: { lang: Locale } = useParams();
  const dict = getDictionaryUseClient(lang);
  const services = [
    {
      num: "01",
      title: dict.services.title,
      description: dict.services.description,
      href: "",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline  text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-dark-primary group-hover:text-dark-primary dark:bg-light-primary dark:text-dark-primary group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-dark-primary dark:text-light-primary group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-dark-primary/80 dark:text-white/60 ">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-dark-primary/20 dark:border-light-primary/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
