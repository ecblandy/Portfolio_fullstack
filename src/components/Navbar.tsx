"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { selectLink } from "@/lib/links";

export default function Navbar() {
  // exibe a rota, exemplo do home /
  const pathname = usePathname();
  const { lang } = useParams();

  return (
    <nav className="flex gap-8">
      {selectLink(pathname, lang).map((link, index) => {
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
