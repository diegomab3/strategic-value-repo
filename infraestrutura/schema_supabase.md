# Schema do Banco de Dados — Biblioteca Proprietária (Supabase)

Projeto Supabase: "Strategic Value" (project_id: lfrzkcqwxoojtojscydd)

## Tabelas

- **empresas** — clientes reais e casos de teste (fictícios ou reais públicos). Campo `tipo` distingue dado real de dado sintético.
- **assessments** — cada rodada de Strategic Assessment executada, ligada a uma empresa.
- **kpis_biblioteca** — catálogo mestre de KPIs (dado bruto necessário, fonte típica, fórmula, interpretação), por área.
- **achados** — cada gargalo identificado em um assessment: tipo (Pessoas/Processo/Produto), meta_gargalo, risco_relacional, impacto econômico, confiança, esforço, classificação, status.
- **intervencoes_biblioteca** — padrões de solução por tipo de gargalo, com contador `vezes_observado` que cresce a cada recorrência em novo caso — métrica de validação do padrão.
- **achado_intervencao** — liga achados às intervenções efetivamente aplicadas e ao resultado capturado.
- **value_reports** — metadados dos relatórios finais gerados.

## Lógica central

`achados` é o núcleo: cada linha é um dado estruturado (gargalo, tipo, confiança, impacto) que, agregado entre múltiplos clientes reais, forma a base de treino para um futuro agente de recomendação — ele poderia consultar, para um padrão de gargalo novo, qual intervenção tem maior `vezes_observado` e maior taxa de sucesso histórico em `achado_intervencao`.

## Status atual

Populado com 9 empresas (5 casos-teste dentro do ICP, 4 fora), 35 KPIs, 11 intervenções, 14 achados estruturados — todos com `tipo = 'case_teste_ficticio'` ou `'case_teste_real_publico'`. Nenhum dado de cliente real ainda.
