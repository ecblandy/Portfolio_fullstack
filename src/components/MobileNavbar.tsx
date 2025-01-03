"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { selectLink } from "@/lib/links";
import { useParams, usePathname } from "next/navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./language-switcher";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n";

export default function MobileNavbar() {
  const pathname = usePathname();
  const { lang }: { lang: Locale } = useParams();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const dict = getDictionaryUseClient(lang);

  const selectLinkValues = {
    pathname,
    lng: lang,
    home: dict.navbar.home,
    services: dict.navbar.services,
    resume: dict.navbar.resume,
    projects: dict.navbar.projects,
    contact: dict.navbar.contact,
  };

  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <nav>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {/* Botão para abrir o Sheet */}
        <SheetTrigger className="flex items-center justify-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        {/* Conteúdo do Sheet */}
        <SheetContent
          side="right"
          className="flex flex-col p-4 space-y-6 bg-[#3f3e3e] dark:bg-[#232329]"
        >
          {/* Acessibilidade */}
          <div className="sr-only">
            <SheetTitle>Menu de Navegação</SheetTitle>
            <SheetDescription>Escolha um link para navegar</SheetDescription>
          </div>

          {/* Logo */}
          <div className="mb-8 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Vinícius<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          {/* Nav */}
          <nav className="flex flex-col justify-center items-center gap-4">
            {selectLink(selectLinkValues).map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
            <LanguageSwitcher />
            <ThemeSwitcher />
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
