import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

// Utils
import { LanguageType } from "./contact-form";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export default function ContactInfo({ lang }: LanguageType) {
  const dict = getDictionaryUseClient(lang);

  // Informação de contato, na página contato.
  const sidebar = [
    {
      icon: <FaPhoneAlt />,
      title: dict.contact.sidebar.phone,
      description: "71 99402-7893",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "devblandy@hotmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: dict.contact.sidebar.address,
      description: "Salvador - BA",
    },
  ];
  return (
    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
      <ul className="flex flex-col gap-10">
        {sidebar.map((item, index) => {
          return (
            <li key={index} className="flex items-center gap-6 ">
              <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#3f3e3e] dark:bg-[#232329] text-accent rounded-md flex items-center justify-center">
                <div className="text-[28px]">{item.icon}</div>
              </div>
              <div className="flex-1">
                <p className="text-dark-primary/60 dark:text-light-primary/60">
                  {item.title}
                </p>
                <h3 className="text-xl text-dark-primary dark:text-light-primary">
                  {item.description}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
