# TESTE DO FRAMEWORK — 4 Cases (nicho automotivo: performance, peças e eletrônica embarcada)
**Vector Performance | Racebox Automotive | Nova Motorsport | Drift Tech Brasil**

---

## CASE — VECTOR PERFORMANCE (Eletrônica automotiva e performance, PME, R$42,8M, São Paulo/SP)

Multicanal: distribuidores, lojas especializadas, oficinas/preparadores, e-commerce e venda direta. EBITDA de R$4,49M (10,5% da receita bruta). Objetivo declarado pelo cliente: ganhar eficiência, não depender de crescer receita.

| Achado | Tipo | Impacto/Confiança | Classificação |
|---|---|---|---|
| Ausência de margem por SKU/canal, apesar de 5 canais com perfil distinto; despesas em centros de custo genéricos | Processo — **meta-gargalo** | Alta que existe; magnitude não quantificada | Estruturante — prioridade #1 |
| Comissão comercial baseada em faturamento, não margem | Processo (incentivo) → Pessoas | Média — mecanismo claro, magnitude depende do achado #1 | Estruturante |
| CRM com adesão desigual entre vendedores; motivo de perda não obrigatório | Processo (higiene de CRM) | Média — pipeline de R$18,7M (~44% da receita anual) não confiável | Quick Win |
| R$4,96M antecipados em 7 dos 12 meses; PMR de 42 dias com dispersão real de 15 a 90 dias entre clientes | Processo (crédito/cobrança) | Alta — dado direto; custo do desconto de antecipação não informado | Quick Win |

## CASE — RACEBOX AUTOMOTIVE (Peças/acessórios/eletrônica para performance, R$31,6M, Curitiba/PR)

Empresa familiar (fundada em 2017), crescimento puxado pelo digital. Loja física + e-commerce (R$10,8M) + B2B (R$13,1M).

| Achado | Tipo | Impacto/Confiança | Classificação |
|---|---|---|---|
| Dado espalhado entre ERP, marketplace, planilhas e financeiro; planilha paralela de compras rodando ao lado do ERP | Processo — **meta-gargalo** | Alta que existe | Estruturante — prioridade #1 |
| **ROAS bruto (R$1,26M/ano em mídia) usado sem descontar frete, taxa de marketplace, comissão e devolução** — cita literal do cliente: "não temos certeza se o ROAS representa a margem que realmente sobra" | Processo — **meta-gargalo** (2ª vez que esse padrão aparece) | Alta que o problema existe; magnitude real desconhecida até recalcular ROAS líquido | Estruturante |
| CRM com ~2.900 empresas cadastradas, sem integração com ERP — não valida quantas oportunidades viram pedido real | Processo | Média | Estruturante |
| Turnover geral 24,1%, concentrado em logística, atendimento e vendas | Pessoas | Alta (dado direto) | Estruturante |

## CASE — NOVA MOTORSPORT (Preparação automotiva, peças e serviços, R$19,8M, Belo Horizonte/MG)

Loja + oficina própria + e-commerce + B2B. **Faturamento abaixo da faixa de referência do ICP (R$30-90M)** — mantido como teste de limite inferior (`icp_fit = false` no banco), simétrico aos 4 cases de grande porte que testam o limite superior.

| Achado | Tipo | Impacto/Confiança | Classificação |
|---|---|---|---|
| Estoque de R$3,87M em 4.300 SKUs compartilhado entre loja, oficina e e-commerce, sem alocação por canal, **com divergência confirmada entre estoque físico e registrado** | Processo — **meta-gargalo** | Média — divergência relatada, não quantificada. **Protocolo de divergência de dados aplicável**: não dimensionar solução até reconciliar | Estruturante — prioridade #1 |
| Custo de mão de obra da oficina (37% da receita, 14 mecânicos) lançado como despesa geral, não por ordem de serviço; nem toda OS tem hora preenchida | Processo — **meta-gargalo** | Alta que existe — impede saber margem real por tipo de serviço no maior canal de receita | Estruturante |
| Comissão comercial só por volume de venda, sem diferenciação por margem | Processo (incentivo) | Alta — mesmo padrão de Vector, Rota Sul, Casa Prime, Via Norte | Estruturante |
| Turnover geral 27%, turnover de mecânicos 31% — a função mais crítica e mais difícil de repor do negócio | Pessoas | Alta (dado direto) | Estruturante |

## CASE — DRIFT TECH BRASIL (Tecnologia automotiva / eletrônica embarcada, média empresa, R$58,4M, Joinville/SC)

Engenharia própria + fabricação parcialmente terceirizada. 71% receita Brasil, 29% exportação América Latina. Maior operação de P&D entre os cases testados até agora.

| Achado | Tipo | Impacto/Confiança | Classificação |
|---|---|---|---|
| ~520 SKUs com nomenclatura divergente entre a lista da engenharia e o ERP | Processo — **meta-gargalo** | Alta que existe | Estruturante |
| 22 projetos ativos de P&D (31 pessoas, R$3,8M/ano), nem todos com orçamento atualizado — **cliente relata diretamente não saber quais projetos priorizar** | Processo — **meta-gargalo** (novo padrão, ver síntese) | Alta — dor declarada pelo próprio cliente | Estruturante — prioridade #1 |
| Motivo de perda comercial preenchido em só parte das oportunidades, mesmo em Salesforce maduro (desde 2022) | Processo (higiene de CRM) | Média | Quick Win |
| Fabricação terceirizada com 12 fornecedores/parceiros; dados de rejeição, atraso e devolução existem soltos, sem consolidação em scorecard único | Processo | Alta que o problema existe | Estruturante |

**Nota — não formalizado como achado**: os "20 maiores clientes" representam "parcela relevante" da receita, segundo o próprio cliente, mas sem percentual exato informado. Fica registrado como ponto a levantar na próxima rodada de coleta — não dá para classificar risco relacional sem o número.

---

## SÍNTESE — O QUE ESSES 4 CASES CONFIRMAM E O QUE ADICIONAM AO FRAMEWORK

### Padrão universal, agora com 10 casos de sustentação
**Ausência de margem granular (por SKU/canal/contrato/serviço) segue sendo o meta-gargalo mais recorrente** — apareceu em Vector e, em variação de serviço (custeio de mão de obra por OS), em Nova Motorsport. Biblioteca: `vezes_observado` sobe de 6 para 7.

### Comissão por faturamento, não margem — 5 de 10 casos
Vector e Nova Motorsport confirmam de novo o padrão já visto em Rota Sul, Casa Prime e Via Norte. `vezes_observado`: 3 → 5.

### "ROAS ≠ rentabilidade real" deixa de ser achado isolado — 2 de 10 casos
Depois de Nexus Home, Racebox reproduz exatamente o mesmo padrão, inclusive com a mesma frase-tipo do gestor ("não sabemos se o ROAS representa a margem que sobra"). `vezes_observado`: 1 → 2. Isso já justifica citar no discurso de venda para prospect de e-commerce/marketplace como "problema que encontramos toda vez que olhamos mídia paga sem cruzar com margem".

### Dados fragmentados entre sistemas — 2 de 10 casos, primeira vez batizado de meta-gargalo explícito
Racebox (ERP + marketplace + planilhas + financeiro) e Drift Tech (engenharia vs. ERP) mostram a mesma fragmentação em contextos diferentes — um por multiplicidade de sistemas de venda, outro por cadastro mestre de produto divergente entre áreas. `vezes_observado`: 3 → 5.

### Quatro adições novas ao framework

**1. Turnover elevado concentrado em função técnica/operacional crítica** (Racebox, Nova Motorsport) — turnover *geral* mascara o problema; o que importa é isolar o turnover da função mais cara de repor (mecânico, logística). Virou padrão formal na biblioteca de intervenções, `vezes_observado = 2` (nasce validado, não como hipótese isolada).

**2. Estoque compartilhado entre canais sem alocação, com divergência física vs. sistema** (Nova Motorsport) — primeira vez que o Protocolo de Divergência de Dados se aplica a estoque, não só a números financeiros/RH. Reforça que o protocolo é genérico, não específico de um tipo de dado.

**3. Custo de mão de obra de serviço não alocado por ordem de serviço** (Nova Motorsport) — variação do meta-gargalo de margem granular específica de negócio com componente de serviço (oficina), não só produto. Relevante porque expande o framework para além de negócios puramente produto/SKU.

**4. Portfólio de projetos (P&D/produto) sem orçamento atualizado e sem priorização formal** (Drift Tech) — primeiro caso do framework com operação de P&D relevante (31 pessoas, maior área da empresa). O cliente nomeou o problema diretamente ("não sabemos quais deveriam receber prioridade"), o que é o padrão mais forte de sinal de meta-gargalo que existe: a dor já articulada pelo próprio cliente.

### Nota sobre ICP — Nova Motorsport testa o limite inferior de faturamento
R$19,8M está abaixo da faixa de referência (R$30-90M). Diferente dos 4 cases de grande porte (JSL, Mercado Livre, WEG, Renner) que testaram o limite superior, este é o primeiro teste do limite *inferior*. Os mesmos padrões estruturais apareceram (meta-gargalo de margem, incentivo comercial desalinhado, turnover concentrado) — sinal de que o framework pode generalizar para baixo também, mas como no caso Casa Prime, essa é uma decisão sua: manter o piso do ICP em R$30M ou testar formalmente a faixa R$15-30M com mais casos antes de mudar o critério.

### Nota de setor — primeiro cluster de nicho (performance automotiva)
Os 4 cases compartilham o mesmo nicho (peças, eletrônica e serviços de performance automotiva), diferente dos clusters anteriores (logística, e-commerce genérico, indústria, varejo de materiais). Vale observar: mesmo dentro de um nicho estreito, os achados recorrentes continuam sendo os mesmos meta-padrões (margem granular, incentivo comercial, fragmentação de dado) — reforça que o framework diagnostica estrutura de gestão, não especificidade de produto/mercado.
