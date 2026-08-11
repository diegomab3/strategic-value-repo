# VALUE REPORT™ (PILOTO) — Rota Sul Logística Ltda.
**Diagnóstico preliminar — teste do framework Strategic Assessment™**

---

## SUMÁRIO EXECUTIVO

Receita cresceu 31% em 3 anos; EBITDA cresceu apenas 4% no mesmo período. Margem EBITDA atual: 5,4%. Isso não é uma empresa em crise — é uma empresa **estruturalmente vazando valor em múltiplos pontos simultâneos**, nenhum sozinho fatal, mas somados representam a diferença entre 5,4% e os 8-9% de EBITDA que a diretoria persegue.

**Achado mais importante do diagnóstico: o gargalo #1 não é operacional nem comercial — é a ausência de uma camada básica de mensuração (DRE gerencial por cliente/rota/veículo).** Sem isso, pelo menos 4 das 10 hipóteses da diretoria (H1, H2, H3, H7) não podem ser validadas com precisão — só estimadas por percepção de gestor. Isso confirma, na prática, a tese arquitetural da Strategic Value (Camada 1-2: integração de dados e métricas como pré-requisito de qualquer inteligência de negócio).

---

## MAPA DE ACHADOS

| # | Área | Gargalo (triagem P-P-P*) | Impacto econômico estimado | Confiança | Classificação |
|---|---|---|---|---|---|
| 1 | Financeiro | **Processo** — cobrança/gestão de crédito inexistente apesar de dado disponível | R$ 540k–780k/ano (custo real de antecipação de recebíveis já pago) | **Alta** — dado direto | Quick Win |
| 2 | Financeiro/Tecnologia | **Processo** — ausência de DRE gerencial por cliente/rota/veículo (META-GARGALO) | Não quantificável isoladamente — bloqueia validação de R$ 1M+ em outras hipóteses | Alta (problema confirmado pelo próprio relato interno) | **Estruturante — prioridade #1** |
| 3 | Comercial/Operações | **Processo** — 3 clientes estratégicos já penalizaram a empresa por OTIF abaixo do SLA contratual (91,2% vs. >95% exigido) | Não é economia, é **risco de perda de receita concentrada** (19 clientes = 80% da receita, ~R$ 34M) | Alta — fato já ocorrido, não hipótese | **Urgente** |
| 4 | Financeiro/Comercial | **Processo** — contratos antigos sem reajuste, 2 clientes perdidos por reajuste agressivo simultâneo em outra ponta | R$ 400k–600k/ano (hipótese do gestor financeiro) | Média — plausível e coerente com padrão observado (churn recente) | Quick Win / Estruturante |
| 5 | Operações | **Processo** — roteirização dependente de experiência do operador, sem sistema | Km improdutivo 14,7%, ocupação 72% — hipótese de 8-12% de redução não validada | Média — hipótese interna, falta dado de custo/km real | Estruturante |
| 6 | Operações | **Processo** — manutenção corretiva = 68% do gasto total de manutenção | Não quantificável com o dado disponível (falta custo de indisponibilidade) | Baixa quanto à magnitude, Alta quanto ao problema existir | Estruturante — precisa mais dado |
| 7 | Comercial | **Processo** (desenho de incentivo) → efeito direto em **Pessoas** (comportamento do vendedor) | Conecta diretamente com achado #1 do H1 (15-20% dos clientes com margem baixa) — magnitude real depende do achado #2 estar resolvido | Média-Alta — mecanismo claro, valor exato pendente | Estruturante |
| 8 | Comercial | **Processo** — higiene de CRM: 230 leads cadastrados, só 73 ativos (68% "mortos" sem status) | Pipeline não confiável — imprevisibilidade comercial | Alta que o problema existe; impacto em R$ não quantificável ainda | Quick Win |
| 9 | DP | **Pessoas + Processo** — turnover de motoristas 31%/ano | **Ver nota de divergência abaixo** | Média — números não batem entre si | Estruturante — reconciliar antes de agir |
| 10 | Marketing | **Processo** (falta integração marketing-CRM-vendas) + **Produto** (posicionamento genérico: "confiável, ágil e segura" não diferencia de commodity) | R$ 348k/ano investidos sem atribuição de receita comprovada — não significa desperdício, significa que ninguém sabe se é ROI positivo | Baixa quanto ao impacto exato, Alta quanto ao problema de mensuração | Estruturante + Estratégica |
| 11 | Compras | **Processo** — sem política de cotação/negociação estruturada, 37 fornecedores | R$ 150k–300k/ano estimado (preços 5-12% acima de concorrentes em itens não-combustível) | Média — benchmark informal da diretoria | Quick Win |

*P-P-P = triagem Pessoas → Processo → Produto (ordem de investigação)

---

## NOTA DE DIVERGÊNCIA — Achado #9 (exemplo de validação em ação)

Este é o achado mais importante metodologicamente, não financeiramente.

- **Dado da empresa**: turnover de motoristas = 31% ao ano; custo de substituição = R$ 7k–10k por motorista; 42 motoristas próprios.
- **Cálculo direto**: 31% × 42 = ~13 substituições/ano × R$ 7k–10k = **R$ 91k–130k/ano**.
- **Estimativa do RH (hipótese informal, não confirmada)**: R$ 250k–350k/ano — **quase 3x o valor calculado com o dado formal fornecido**.

Essa divergência não é erro — é exatamente o tipo de sinal que a estrutura primário/secundário existe para capturar. Duas explicações possíveis, ambas precisam ser investigadas antes de dimensionar qualquer solução:
1. A base de cálculo do RH pode incluir os 31 motoristas agregados (que também geram custo de renegociação/substituição, mesmo não sendo CLT) — nesse caso a base correta é 73, não 42.
2. O custo unitário de R$ 7k-10k pode estar subestimado — o case já mostra avarias (1,9%) e atrasos (7,4%) que podem estar parcialmente conectados a motoristas novatos em curva de aprendizado, custo que hoje não é atribuído ao turnover.

**Não avançamos para "programa de retenção" sem resolver essa reconciliação primeiro — senão o business case do investimento fica em uma faixa de incerteza de quase 300%.**

---

## ROADMAP PRIORIZADO (valor × probabilidade de captura ÷ esforço)

**Quick Wins (0-30 dias)**
1. DRE gerencial por cliente/rota/veículo — ainda que manual (Excel/Power BI), não esperar sistema ideal
2. Ação imediata de recuperação de SLA nos contratos dos 3 clientes que já penalizaram a empresa
3. Cobrança ativa dos R$ 2,2M em atraso + revisão de política de crédito
4. Reajuste dos contratos mais antigos sem correção
5. Higiene de CRM (reativar ou descartar os 157 leads sem status)
6. Cotação estruturada (RFP) com os principais fornecedores não-combustível

**Estruturantes (30-120 dias)**
7. Redesenho de remuneração comercial: receita → margem/contribuição
8. Reconciliação do custo real de turnover + programa de retenção de motoristas
9. Plano de manutenção preventiva
10. Integração marketing-CRM-vendas (atribuição de ROI real)

**Estratégicas (120-180 dias)**
11. Sistema/algoritmo de roteirização (reduzir dependência de "experiência do operador")
12. Reposicionamento de marca / proposta de valor diferenciada
13. BI unificado definitivo (Camada 1-2 completa, não só DRE gerencial manual)
