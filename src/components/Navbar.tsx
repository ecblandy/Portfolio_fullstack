"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

// Utils
import { selectLink } from "@/lib/links";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n";

export default function Navbar() {
  // exibe a rota, exemplo do home /
  const pathname = usePathname();
  const { lang }: { lang: Locale } = useParams();

  const dict = getDictionaryUseClient(lang);

  // Contém a linguagem atual, caminho da URL e o dicionario dos links de navegação(com a tradução)
  const selectLinkValues = {
    pathname,
    lng: lang,
    home: dict.navbar.home,
    services: dict.navbar.services,
    resume: dict.navbar.resume,
    projects: dict.navbar.projects,
    contact: dict.navbar.contact,
  };

  return (
    <nav className="flex gap-8">
      {selectLink(selectLinkValues).map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              isActive
                ? "text-accent border-b-2 border-accent"
                : "text-dark-primary dark:text-light-primary"
            } capitalize font-medium  hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
