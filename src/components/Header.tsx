"use client";
import Link from "next/link";
// Components
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  return (
    <>
      <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold text-dark-primary dark:text-light-primary">
              Vinícius
              <span className="text-accent">.</span>
            </h1>
          </Link>

          {/* desktop nav & botõo de contato */}
          <div className="hidden xl:flex items-center gap-8">
            <Navbar />
            <ThemeSwitcher />
          </div>
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNavbar />
          </div>
        </div>
      </header>
    </>
  );
}
