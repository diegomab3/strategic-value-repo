import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos — Strategic Value™",
};

const valores = [
  {
    titulo: "Rigor antes de conforto",
    texto:
      "Quando dois números internos sobre o mesmo fenômeno divergem, não escolhemos arbitrariamente qual usar. Documentamos os dois, investigamos a causa da divergência e só depois dimensionamos solução.",
  },
  {
    titulo: "Meta-gargalo primeiro",
    texto:
      "Antes de otimizar o que já é visível, identificamos o que impede enxergar o resto — mesmo quando esse achado não tem o maior impacto em R$ isoladamente.",
  },
  {
    titulo: "Risco compartilhado",
    texto:
      "Parte da nossa remuneração é atrelada ao valor econômico efetivamente capturado, não apenas à entrega de um relatório. Se o resultado não aparece, nosso incentivo também não.",
  },
  {
    titulo: "Transparência com o dado",
    texto:
      "Toda recomendação do Value Report™ carrega o baseline que a sustenta — o KPI, a fonte, o nível de confiança. Nada entra no roadmap sem lastro.",
  },
  {
    titulo: "Ação, não prateleira",
    texto:
      "Um diagnóstico que vira PDF arquivado não gerou valor nenhum. Cada achado sai priorizado por impacto, confiança e esforço — pronto para virar decisão.",
  },
];

export default function QuemSomos() {
  return (
    <>
      <section className="border-b border-sv-navy-800 bg-gradient-to-b from-sv-navy-950 to-sv-black">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="mb-6 text-sm tracking-widest text-sv-blue-400 uppercase">
            Quem Somos
          </p>
          <h1 className="font-serif text-4xl leading-tight text-sv-gray-50 md:text-5xl">
            Uma tese simples: empresa em crescimento raramente perde dinheiro
            por falta de venda.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-sv-gray-300">
            Perde por não enxergar, com granularidade, onde a margem escapa —
            no cliente errado, no contrato mal precificado, no incentivo
            desalinhado, no processo que ninguém documentou. A Strategic
            Value nasce para fechar essa lacuna: um diagnóstico rigoroso de
            onde o valor econômico está sendo perdido, seguido de uma
            parceria que assume parte do risco de recuperá-lo.
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-sv-gray-500">
            Antes de levar isso a campo, testamos a metodologia contra casos
            dentro do perfil de cliente que atendemos — e também contra
            empresas de grande porte, como teste de limite — para saber onde
            o framework se aplica e onde não se aplica. Preferimos essa
            disciplina a vender um diagnóstico genérico.
          </p>
        </div>
      </section>

      <section className="border-b border-sv-navy-800">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-sv-gray-50">Missão</h2>
            <p className="mt-4 leading-relaxed text-sv-gray-400">
              Converter valor econômico latente — em pessoas, processo ou
              produto — em resultado mensurável para PME e média empresa em
              crescimento, com o rigor analítico de uma auditoria e a
              proximidade de quem assume parte do risco do resultado.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-sv-gray-50">Visão</h2>
            <p className="mt-4 leading-relaxed text-sv-gray-400">
              Ser referência em inteligência operacional para a PME e média
              empresa brasileira — ao ponto de remuneração vinculada a
              performance deixar de ser exceção e se tornar o padrão da
              categoria.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sv-navy-950">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-serif text-2xl text-sv-gray-50">Valores</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {valores.map((valor) => (
              <div key={valor.titulo}>
                <h3 className="text-sv-gray-50">{valor.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sv-gray-500">
                  {valor.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
