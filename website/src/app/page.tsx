import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

const icp = [
  { setor: "E-commerce", nota: "ROAS bruto ≠ rentabilidade real" },
  { setor: "Logística", nota: "OTIF e margem por rota/cliente" },
  { setor: "Indústria", nota: "Custo Total da Não-Qualidade" },
];

const etapas = [
  {
    numero: "01",
    titulo: "Strategic Assessment™",
    texto:
      "Diagnóstico pago, estruturado em 5 fases de coleta — da liderança ao gestor intermediário — cruzando dado primário e secundário para nunca concluir a partir de métrica de superfície.",
  },
  {
    numero: "02",
    titulo: "Value Report™",
    texto:
      "Cada achado sai com KPI observado, impacto econômico estimado, nível de confiança e classificação de prioridade. Sem arredondar divergência de dado — divergência vira achado documentado.",
  },
  {
    numero: "03",
    titulo: "Roadmap priorizado",
    texto:
      "Achados ordenados por impacto × confiança × probabilidade de captura ÷ esforço. O que bloqueia a validação de outros achados (meta-gargalo) é tratado como prioridade estrutural.",
  },
  {
    numero: "04",
    titulo: "Parceria de performance",
    texto:
      "Baseline documentado no diagnóstico sustenta remuneração vinculada ao valor econômico efetivamente capturado — não só a entrega de um relatório.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-sv-navy-800 bg-gradient-to-b from-sv-navy-950 to-sv-black">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="mb-6 text-sm tracking-widest text-sv-blue-400 uppercase">
            Inteligência operacional para PME e média empresa
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-sv-gray-50 md:text-6xl">
            Sua empresa cresce em receita. A pergunta é onde ela está
            perdendo valor.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sv-gray-300">
            Não somos consultoria de prateleira. Somos parceria estratégica:
            diagnosticamos onde a margem escapa e compartilhamos o risco de
            capturar esse valor de volta.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="rounded-sm bg-sv-blue-600 px-6 py-3 text-sm font-medium text-sv-gray-50 transition-colors hover:bg-sv-blue-500"
            >
              Solicitar diagnóstico
            </a>
            <a
              href="#como-funciona"
              className="rounded-sm border border-sv-navy-600 px-6 py-3 text-sm text-sv-gray-300 transition-colors hover:border-sv-blue-400 hover:text-sv-gray-50"
            >
              Como funciona
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-sv-navy-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="max-w-2xl font-serif text-2xl leading-snug text-sv-gray-50 md:text-3xl">
            &ldquo;Vocês conseguem ver margem por cliente e por produto hoje,
            ou só a margem geral?&rdquo;
          </p>
          <p className="mt-4 max-w-2xl text-sv-gray-500">
            É a pergunta com que normalmente começamos. Na maioria das
            empresas que já analisamos, a resposta revela o primeiro
            meta-gargalo: sem margem granular, nenhuma outra decisão —
            precificação, remuneração comercial, mix de produto — pode ser
            validada com confiança.
          </p>
        </div>
      </section>

      <section id="como-funciona" className="border-b border-sv-navy-800 bg-sv-navy-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-sv-gray-50">Como funciona</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {etapas.map((etapa) => (
              <div key={etapa.numero} className="flex gap-5">
                <span className="font-serif text-2xl text-sv-blue-400">
                  {etapa.numero}
                </span>
                <div>
                  <h3 className="text-lg text-sv-gray-50">{etapa.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sv-gray-500">
                    {etapa.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-sv-navy-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-sv-gray-50">
            Setores onde atuamos
          </h2>
          <p className="mt-3 max-w-xl text-sv-gray-500">
            PME e média empresa, faturamento aproximado entre R$30M e R$90M —
            tipicamente em crescimento rápido, com estrutura financeira e
            processual que não acompanhou o ritmo.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {icp.map((item) => (
              <div
                key={item.setor}
                className="rounded-sm border border-sv-navy-700 bg-sv-navy-900 p-6"
              >
                <h3 className="text-sv-gray-50">{item.setor}</h3>
                <p className="mt-2 text-sm text-sv-gray-500">{item.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-sv-navy-950">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="font-serif text-3xl text-sv-gray-50">
            Solicitar diagnóstico
          </h2>
          <p className="mt-3 text-sv-gray-500">
            Conte um pouco sobre sua empresa. Respondemos para entender se há
            fit antes de qualquer proposta.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
          <p className="mt-8 text-sm text-sv-gray-700">
            Já é cliente?{" "}
            <Link href="/login" className="text-sv-blue-400 hover:underline">
              Acesse sua área do cliente
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
