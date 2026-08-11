import Link from "next/link";
import { Logo } from "./logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/#contato", label: "Contato" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-sv-navy-700/60 bg-sv-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-sv-gray-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-sv-gray-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          className="rounded-sm border border-sv-blue-500/60 px-4 py-2 text-sm text-sv-gray-50 transition-colors hover:border-sv-blue-400 hover:bg-sv-blue-600/20"
        >
          Área do Cliente
        </Link>
      </div>
    </header>
  );
}
