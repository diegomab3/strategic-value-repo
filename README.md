# Strategic Value™ — Metodologia e Infraestrutura

Repositório da metodologia proprietária do Strategic Assessment™, biblioteca de KPIs, biblioteca de intervenções e histórico de casos-teste usados para validar o framework.

## Estrutura

- `/metodologia` — framework de KPIs por área (financeiro, operações, DP, comercial, marketing), metodologia de triagem e priorização, roteiro de coleta de dados e biblioteca de intervenções.
- `/cases-teste` — histórico de todos os casos usados para validar e refinar o framework (fictícios dentro do ICP, e empresas reais de grande porte usadas como teste de escala/limite).
- `/infraestrutura` — schema e documentação do banco de dados (Supabase) que armazena a biblioteca proprietária viva (achados, KPIs, intervenções, recorrência de padrões); inclui `/infraestrutura/dados`, snapshot em JSON do conteúdo real da biblioteca.
- `/agente` — futuro agente de recomendação (gargalo → intervenção mais validada). Bloqueado até haver dado real de resultado (ver pasta).
- `/website` — site institucional/comercial. Não iniciado.
- `/aplicativos` — apps voltados a cliente ou uso interno. Não iniciado.

## Status

Framework validado em 9 casos-teste (5 dentro do ICP, 4 fora — teste de escala). Nenhum cliente real pagante ainda. Próxima etapa: primeiro cliente real, para transição de dado sintético para dado real na biblioteca proprietária (ver `/infraestrutura`).

## ICP

PME / média empresa dos setores: e-commerce, logística, indústria (varejo físico em avaliação como possível expansão de ICP, ver `cases-teste/case_02-05...`).
