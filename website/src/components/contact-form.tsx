"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);

    const supabase = createClient();
    const { error } = await supabase.from("leads").insert({
      nome: data.get("nome") as string,
      empresa: data.get("empresa") as string,
      email: data.get("email") as string,
      telefone: data.get("telefone") as string,
      mensagem: data.get("mensagem") as string,
      origem: "site_home",
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-sv-blue-500/40 bg-sv-navy-900 p-8 text-center">
        <p className="font-serif text-xl text-sv-gray-50">Mensagem recebida.</p>
        <p className="mt-2 text-sm text-sv-gray-300">
          Vamos analisar seu contato e responder em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <input
        name="nome"
        required
        placeholder="Nome"
        className="rounded-sm border border-sv-navy-600 bg-sv-navy-900 px-4 py-3 text-sm text-sv-gray-50 placeholder:text-sv-gray-500 focus:border-sv-blue-400 focus:outline-none"
      />
      <input
        name="empresa"
        placeholder="Empresa"
        className="rounded-sm border border-sv-navy-600 bg-sv-navy-900 px-4 py-3 text-sm text-sv-gray-50 placeholder:text-sv-gray-500 focus:border-sv-blue-400 focus:outline-none"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="E-mail"
        className="rounded-sm border border-sv-navy-600 bg-sv-navy-900 px-4 py-3 text-sm text-sv-gray-50 placeholder:text-sv-gray-500 focus:border-sv-blue-400 focus:outline-none"
      />
      <input
        name="telefone"
        placeholder="Telefone / WhatsApp"
        className="rounded-sm border border-sv-navy-600 bg-sv-navy-900 px-4 py-3 text-sm text-sv-gray-50 placeholder:text-sv-gray-500 focus:border-sv-blue-400 focus:outline-none"
      />
      <textarea
        name="mensagem"
        rows={4}
        placeholder="Conte brevemente o contexto da sua empresa"
        className="rounded-sm border border-sv-navy-600 bg-sv-navy-900 px-4 py-3 text-sm text-sv-gray-50 placeholder:text-sv-gray-500 focus:border-sv-blue-400 focus:outline-none sm:col-span-2"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-sm bg-sv-blue-600 px-6 py-3 text-sm font-medium text-sv-gray-50 transition-colors hover:bg-sv-blue-500 disabled:opacity-50 sm:col-span-2"
      >
        {status === "loading" ? "Enviando..." : "Solicitar diagnóstico"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400 sm:col-span-2">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
}
