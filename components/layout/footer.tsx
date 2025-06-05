import { Github, Instagram, Mail } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex bg-black py-4 text-gray-400">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between py-4">
        <div className="w-sm">
          <Logo bg="dark" />
          <p className="mt-3 text-sm font-light">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex items-center">
          {/* Social Media */}
          <ul className="flex items-center gap-3 transition-colors">
            <li className="transition-colors hover:text-blue-400">
              <Link href="https://www.instagram.com/">
                <Instagram />
              </Link>
            </li>
            <li className="transition-colors hover:text-blue-400">
              <Link href="https://www.github.com/">
                <Github />
              </Link>
            </li>
            <li className="transition-colors hover:text-blue-400">
              <Link href="mailto:teste@teste.com">
                <Mail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
