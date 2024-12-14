import Link from "next/link";
import { Button } from "./ui/button";
// Components
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Vinícius<span className="text-accent">.</span>
            </h1>
          </Link>

          {/* desktop nav & botõo de contato */}
          <div className="hidden xl:flex items-center gap-8">
            <Navbar />
            <Link href="/contact">
              <Button>Contato</Button>
            </Link>
          </div>
          {/* mobile nav */}
          <div className="xl:hidden">Mobile nav</div>
        </div>
      </header>
    </>
  );
}
