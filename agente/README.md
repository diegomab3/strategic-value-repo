# Agente de Recomendação

Futuro agente que consulta a biblioteca proprietária (`/infraestrutura`, tabela `achados` + `intervencoes_biblioteca` + `achado_intervencao` no Supabase) para sugerir, dado um padrão de gargalo observado, a intervenção historicamente mais validada.

## Status

**Bloqueado.** A tabela `achado_intervencao` (achado → intervenção aplicada → resultado observado → impacto capturado) está com 0 linhas — é o sinal de treino real do agente, e só existe depois que um cliente real passa por assessment → intervenção → resultado. Hoje só há dado sintético/teste (5 casos fictícios + 4 empresas públicas de grande porte usadas como teste de escala), sem nenhum resultado real associado.

Pré-requisito para começar: pelo menos 1 caso real com `achado_intervencao` preenchido. Ver `/infraestrutura/schema_supabase.md`.
