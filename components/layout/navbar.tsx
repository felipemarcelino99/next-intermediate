import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white">
      <nav className="mx-auto flex w-full max-w-5xl justify-between py-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link className={cn(buttonVariants({ variant: "link" }))} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={cn(buttonVariants({ variant: "link" }))}
              href="/sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className={cn(buttonVariants({ variant: "link" }))}
              href="/vagas"
            >
              Vagas
            </Link>
          </li>
          <li>
            <Link
              className={cn(buttonVariants({ variant: "link" }))}
              href="/vagas/cadastro"
            >
              Cadastrar Vaga
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
