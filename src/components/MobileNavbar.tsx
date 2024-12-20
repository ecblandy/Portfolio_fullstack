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
import { links } from "./Navbar";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const pathname = usePathname();
  return (
    <nav>
      <Sheet>
        {/* Botão para abrir o Sheet */}
        <SheetTrigger className="flex items-center justify-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        {/* Conteúdo do Sheet */}
        <SheetContent side="right" className="flex flex-col p-4 space-y-6">
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
            {links.map((link, index) => {
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
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
