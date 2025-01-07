"use client"; // Componente do lado do cliente

import Link from "next/link";
import { useParams } from "next/navigation";

// Components
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import { ThemeSwitcher } from "./theme-switcher";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const { lang } = useParams(); // me retorna a página atual exemplo resume.

  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo com link que usa o parâmetro de idioma validado */}
        <Link href={`/${lang}`} onClick={() => console.log("clicou")}>
          <h1 className="text-4xl font-semibold text-dark-primary dark:text-light-primary">
            Vinícius
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & botão de contato */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
