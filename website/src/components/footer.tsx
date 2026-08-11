import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-sv-navy-700/60 bg-sv-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo className="text-base" />
          <p className="mt-3 text-sm leading-relaxed text-sv-gray-500">
            Inteligência operacional para PME e média empresa em crescimento.
            Diagnóstico que vira resultado — e parceria que compartilha o
            risco desse resultado.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-sv-gray-300">Navegação</span>
            <Link href="/" className="text-sv-gray-500 hover:text-sv-gray-50">
              Home
            </Link>
            <Link
              href="/quem-somos"
              className="text-sv-gray-500 hover:text-sv-gray-50"
            >
              Quem Somos
            </Link>
            <Link
              href="/login"
              className="text-sv-gray-500 hover:text-sv-gray-50"
            >
              Área do Cliente
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sv-gray-300">Contato</span>
            <a
              href="mailto:contato@strategicvalue.com.br"
              className="text-sv-gray-500 hover:text-sv-gray-50"
            >
              contato@strategicvalue.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sv-navy-800 px-6 py-4 text-center text-xs text-sv-gray-700">
        © {new Date().getFullYear()} Strategic Value™. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
