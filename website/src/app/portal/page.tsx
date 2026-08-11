import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/sign-out-button";

const classificacaoLabel: Record<string, string> = {
  quick_win: "Quick Win",
  estruturante: "Estruturante",
  estrategica: "Estratégica",
  urgente: "Urgente",
};

function formatCurrency(value: number | null) {
  if (value === null) return null;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export default async function Portal() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("nome, empresa_id")
    .eq("id", user.id)
    .single();

  if (!profile?.empresa_id) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-6 py-20 text-center">
        <p className="text-sm tracking-widest text-sv-blue-400 uppercase">
          Área do Cliente
        </p>
        <h1 className="mt-3 font-serif text-2xl text-sv-gray-50">
          Sua conta ainda não está vinculada a uma empresa
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-sv-gray-500">
          Isso é esperado se você acabou de acessar pela primeira vez. Entre
          em contato para que possamos vincular seu acesso ao Value Report da
          sua empresa.
        </p>
        <div className="mt-8">
          <SignOutButton />
        </div>
      </section>
    );
  }

  const { data: empresa } = await supabase
    .from("empresas")
    .select("nome, setor, porte")
    .eq("id", profile.empresa_id)
    .single();

  const { data: assessments } = await supabase
    .from("assessments")
    .select(
      `id, data_inicio, data_fim, status,
       achados ( id, area, descricao_gargalo, tipo_gargalo, meta_gargalo, risco_relacional, impacto_economico_min, impacto_economico_max, confianca, classificacao ),
       value_reports ( id, resumo_executivo, url_documento, gerado_em )`
    )
    .eq("empresa_id", profile.empresa_id)
    .order("data_inicio", { ascending: false });

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-start justify-between border-b border-sv-navy-800 pb-8">
        <div>
          <p className="text-sm tracking-widest text-sv-blue-400 uppercase">
            Área do Cliente
          </p>
          <h1 className="mt-2 font-serif text-3xl text-sv-gray-50">
            {empresa?.nome ?? "Sua empresa"}
          </h1>
        </div>
        <SignOutButton />
      </div>

      {!assessments || assessments.length === 0 ? (
        <p className="mt-10 text-sm text-sv-gray-500">
          Nenhum assessment publicado ainda para sua empresa.
        </p>
      ) : (
        <div className="mt-10 flex flex-col gap-16">
          {assessments.map((assessment) => (
            <article key={assessment.id}>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-serif text-xl text-sv-gray-50">
                  Assessment{" "}
                  {assessment.data_inicio
                    ? new Date(assessment.data_inicio).toLocaleDateString(
                        "pt-BR"
                      )
                    : ""}
                </h2>
                <span className="rounded-full border border-sv-navy-600 px-3 py-1 text-xs text-sv-gray-300">
                  {assessment.status}
                </span>
              </div>

              {assessment.value_reports?.map((report) => (
                <div
                  key={report.id}
                  className="mt-4 rounded-sm border border-sv-blue-500/30 bg-sv-navy-900 p-6"
                >
                  <p className="text-xs tracking-widest text-sv-blue-400 uppercase">
                    Value Report™
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-sv-gray-300">
                    {report.resumo_executivo ?? "Resumo executivo em preparação."}
                  </p>
                  {report.url_documento && (
                    <a
                      href={report.url_documento}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-sm text-sv-blue-400 hover:underline"
                    >
                      Abrir documento completo →
                    </a>
                  )}
                </div>
              ))}

              {assessment.achados && assessment.achados.length > 0 && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {assessment.achados.map((achado) => (
                    <div
                      key={achado.id}
                      className={`rounded-sm border p-5 ${
                        achado.classificacao === "urgente"
                          ? "border-red-500/40 bg-red-950/20"
                          : "border-sv-navy-700 bg-sv-navy-900"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs uppercase tracking-wide text-sv-gray-500">
                          {achado.area}
                        </span>
                        <span className="text-xs text-sv-blue-400">
                          {classificacaoLabel[achado.classificacao ?? ""] ??
                            achado.classificacao}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-sv-gray-200">
                        {achado.descricao_gargalo}
                        {achado.meta_gargalo && (
                          <span className="ml-2 rounded-full bg-sv-blue-600/30 px-2 py-0.5 text-[10px] text-sv-blue-400">
                            META-GARGALO
                          </span>
                        )}
                      </p>
                      {(achado.impacto_economico_min ||
                        achado.impacto_economico_max) && (
                        <p className="mt-3 text-sm text-sv-gray-400">
                          Impacto estimado:{" "}
                          {formatCurrency(achado.impacto_economico_min)}
                          {achado.impacto_economico_max &&
                          achado.impacto_economico_max !==
                            achado.impacto_economico_min
                            ? ` – ${formatCurrency(achado.impacto_economico_max)}`
                            : ""}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
