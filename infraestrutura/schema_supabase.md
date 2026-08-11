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
- **profiles** — liga um usuário autenticado (`auth.users`) a uma empresa; sustenta o login do portal do cliente em `/website`. Criada automaticamente e vazia no primeiro login; vínculo com `empresa_id` é manual.
- **leads** — contatos capturados pelo formulário do site institucional.

## Lógica central

`achados` é o núcleo: cada linha é um dado estruturado (gargalo, tipo, confiança, impacto) que, agregado entre múltiplos clientes reais, forma a base de treino para um futuro agente de recomendação — ele poderia consultar, para um padrão de gargalo novo, qual intervenção tem maior `vezes_observado` e maior taxa de sucesso histórico em `achado_intervencao`.

## Status atual

Populado com 9 empresas (5 casos-teste dentro do ICP, 4 fora), 35 KPIs, 11 intervenções, 14 achados estruturados — todos com `tipo = 'case_teste_ficticio'` ou `'case_teste_real_publico'`. Nenhum dado de cliente real ainda. `achado_intervencao` (achado → intervenção aplicada → resultado) está vazia — só populada quando um caso real fechar o ciclo.

## Dados exportados (`/dados`)

Cópia local, em JSON, do conteúdo vivo do Supabase — o Supabase é a fonte de verdade (é onde o dado é escrito e atualizado); os arquivos aqui são um snapshot para versionamento, backup e consumo por código sem depender de acesso ao banco:

- `dados/kpis_biblioteca.json` — os 35 KPIs completos (fórmula, fonte, interpretação).
- `dados/intervencoes_biblioteca.json` — os 11 padrões de intervenção, com `vezes_observado` (contador de validação por recorrência).
- `dados/achados.json` — os 14 achados estruturados dos casos-teste, com empresa, KPIs observados e classificação.

Snapshot tirado em 2026-08-11. Reexportar do Supabase (`project_id: lfrzkcqwxoojtojscydd`) sempre que a base mudar de forma relevante — não há sincronização automática ainda.
