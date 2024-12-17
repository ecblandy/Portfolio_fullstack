"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksProps {
  name: string;
  path: string;
}

export const links: LinksProps[] = [
  {
    name: "início",
    path: "/",
  },
  {
    name: "serviços",
    path: "/services",
  },
  {
    name: "resumo",
    path: "/resume",
  },
  {
    name: "projetos",
    path: "/work",
  },
  {
    name: "contato",
    path: "/contact",
  },
];

export default function Navbar() {
  // exibe a rota, exemplo do home /
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
