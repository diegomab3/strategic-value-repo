"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "loading" | "sent" | "error";

export default function Login() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const email = new FormData(event.currentTarget).get("email") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setStatus(error ? "error" : "sent");
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-20">
      <p className="mb-3 text-sm tracking-widest text-sv-blue-400 uppercase">
        Área do Cliente
      </p>
      <h1 className="font-serif text-3xl text-sv-gray-50">
        Acesse seu Value Report
      </h1>
      <p className="mt-3 text-sm text-sv-gray-500">
        Informe o e-mail cadastrado. Enviamos um link de acesso — sem senha.
      </p>

      {status === "sent" ? (
        <div className="mt-8 rounded-sm border border-sv-blue-500/40 bg-sv-navy-900 p-6 text-sm text-sv-gray-300">
          Link enviado. Verifique sua caixa de entrada (e o spam) para
          concluir o acesso.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <input
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="rounded-sm border border-sv-navy-600 bg-sv-navy-900 px-4 py-3 text-sm text-sv-gray-50 placeholder:text-sv-gray-500 focus:border-sv-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-sm bg-sv-blue-600 px-6 py-3 text-sm font-medium text-sv-gray-50 transition-colors hover:bg-sv-blue-500 disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Enviar link de acesso"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-400">
              Não foi possível enviar o link agora. Tente novamente.
            </p>
          )}
        </form>
      )}

      <p className="mt-10 text-xs text-sv-gray-700">
        Ainda não é cliente?{" "}
        <Link href="/#contato" className="text-sv-blue-400 hover:underline">
          Solicite um diagnóstico
        </Link>
        .
      </p>
    </section>
  );
}
