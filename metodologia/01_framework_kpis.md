# Strategic Value™ — Framework de KPIs para o Strategic Assessment™

**Objetivo:** dar sustentação quantitativa (baseline + validação) ao Value Report™, cruzando KPIs primários (o que o cliente já deveria monitorar) com KPIs secundários (o que valida ou desmente o que o primário está sugerindo — evita diagnóstico raso baseado só em métrica de superfície).

**Princípio-guia (base: postura de diagnóstico observada em mentorias de turnaround/gestão de PME em crescimento):** todo sintoma reportado pelo cliente (ex.: "meu caixa está apertado") precisa ser rastreado até a causa estrutural via KPI secundário, nunca resolvido pela leitura do KPI primário isolado.

ICP de referência: PME/média empresa dos setores **e-commerce, logística e indústria** — todos com padrão comum de "crescimento rápido, estrutura financeira/processual capenga".

---

## 0. METODOLOGIA DE TRIAGEM E PRIORIZAÇÃO

Validado e ajustado após teste piloto com case real (Rota Sul Logística). Três regras obrigatórias antes de qualquer achado entrar no roadmap do Value Report™:

### 0.1 Regra do meta-gargalo (dependência entre achados)

Antes de priorizar, mapear se algum achado **bloqueia a validação de outros**. Um achado que impede medir/confirmar outras hipóteses não é "mais um item da lista" — é pré-requisito e deve ser tratado como prioridade estrutural, mesmo que seu próprio impacto econômico não seja o maior isoladamente.

*Sinal de meta-gargalo: se a resposta para "como sabemos o valor exato desse outro achado?" for "não sabemos, falta X", então X é o meta-gargalo.*

Exemplo do piloto: ausência de DRE gerencial por cliente/rota/veículo bloqueava a validação de 4 hipóteses simultâneas (rentabilidade de cliente, precificação, remuneração comercial, eficiência de frota). Isso a torna prioridade #1 mesmo sem impacto em R$ diretamente calculável.

### 0.2 Protocolo de divergência de dados entre fontes internas

Quando dois números internos sobre o mesmo fenômeno não batem (ex.: estimativa de um gestor vs. cálculo com dado formal), **isso vira achado documentado no relatório, nunca é resolvido escolhendo arbitrariamente qual número usar.**

Passos obrigatórios:
1. Registrar os dois valores e suas fontes.
2. Levantar hipóteses do porquê divergem (base de cálculo diferente? custo oculto não capturado? viés de percepção do gestor?).
3. Marcar o achado como "pendente de reconciliação" — **não dimensionar solução/investimento até resolver.**

Exemplo do piloto: turnover de motoristas calculado com dado formal (R$91-130k/ano) vs. estimativa do RH (R$250-350k/ano) — quase 3x de diferença. Isso virou nota própria no relatório em vez de ser arredondado para "R$ ~300k" e seguir em frente.

### 0.3 Separação entre impacto econômico e risco relacional

Nem todo achado crítico tem R$ quantificável imediato. Achados que envolvem **risco de perda de cliente estratégico, dano reputacional ou quebra de contrato** recebem classificação própria — **"Urgente"** — que pode superar em prioridade qualquer Quick Win financeiro, mesmo sem valor em reais anexado.

Critério para "Urgente": o achado já causou (não hipoteticamente, de fato) penalidade, perda ou reclamação formal de cliente que está dentro do grupo de concentração de receita (ex.: clientes que representam a maior fatia do faturamento).

### Classificação final de todo achado (obrigatória no Value Report™)
| Campo | Opções |
|---|---|
| Tipo de gargalo | Pessoas / Processo / Produto (ver seções por área) |
| É meta-gargalo? | Sim (bloqueia outros achados) / Não |
| Impacto econômico | Valor estimado + nível de confiança (Alta/Média/Baixa) |
| Risco relacional | Presente (Urgente) / Ausente |
| Esforço de captura | Baixo / Médio / Alto |
| Classificação no roadmap | Quick Win / Estruturante / Estratégica / Urgente |

---

## 1. FINANCEIRO

### KPIs primários (o que o cliente normalmente já acompanha, ou deveria)
| KPI | O que mede | Por que importa |
|---|---|---|
| Margem de contribuição por produto/linha/serviço | Rentabilidade real após custos variáveis | Base para decisão de mix — muitas empresas vendem mais do produto errado |
| EBITDA / Margem EBITDA | Geração de caixa operacional | Separa problema operacional de problema financeiro/contábil |
| DRE gerencial atualizado (mensal) | Visão real de resultado, não só fiscal | Empresa em crescimento rápido comumente perde isso primeiro |
| Ciclo de Conversão de Caixa (CCC) = PMR + PME − PMP | Quantos dias o dinheiro fica "preso" no ciclo operacional | É o indicador mais citado como causa raiz de aperto de caixa em empresa que cresce em vendas mas não em estrutura |
| Necessidade de Capital de Giro (NCG) | Quanto capital a operação exige para sustentar o crescimento atual | Vendas subindo sem NCG dimensionada é a receita clássica para "vender e quebrar" |

### KPIs secundários (usados para validar/contestar o primário)
| KPI | Valida o quê |
|---|---|
| Prazo Médio de Recebimento (PMR) vs. condição comercial praticada | Se a política comercial (prazo dado ao cliente) está descolada do que a empresa consegue sustentar financeiramente |
| Prazo Médio de Pagamento (PMP) vs. poder de negociação com fornecedor | Se a empresa está "financiando" fornecedor sem necessidade, ou o contrário |
| Distância até o teto do regime tributário atual (Simples Nacional, se aplicável) projetada nos próximos 12 meses | Risco de estouro de teto não planejado — gera multa e retrabalho, achado recorrente em empresas em crescimento acelerado |
| Composição do estoque por origem (nacional vs. importado) e giro de estoque | Se a empresa está sentada em capital parado; combinado com margem por linha, indica se vale reequilibrar mix |
| Endividamento de curto prazo vs. geração de caixa operacional | Se a empresa está tampando problema estrutural com dívida/rotativo (sintoma clássico de caixa mal gerido) |

**Nota metodológica:** nunca reporte CCC ou margem isolados no Value Report — sempre cruzados com o secundário correspondente. Ex.: "margem EBITDA caiu" só vira insight acionável quando cruzado com mix de produto e giro de estoque.

---

## 2. OPERAÇÕES

Aqui a lista muda de peso conforme o setor do ICP — marquei onde isso importa.

### KPIs primários
| KPI | O que mede | Setor onde pesa mais |
|---|---|---|
| Lead time (pedido → entrega) | Velocidade do processo ponta a ponta | Logística, e-commerce |
| OTIF (On Time In Full) | % de pedidos entregues completos e no prazo | Logística, e-commerce, indústria |
| Taxa de retrabalho / refugo | % de processo/produto que precisa ser refeito | Indústria |
| Custo operacional por unidade produzida/entregue | Eficiência de custo direto de operação | Todos |
| Produtividade por colaborador/turno | Output vs. capacidade instalada | Indústria, logística |

### KPIs secundários
| KPI | Valida o quê |
|---|---|
| Variação de lead time por fornecedor/rota/turno | Se o problema é sistêmico ou concentrado em um ponto específico da cadeia |
| SLA interno entre áreas (ex.: tempo entre pedido aprovado e separação) | Gargalos que não aparecem no lead time total, só no detalhamento por etapa |
| Nível de dependência de pessoa-chave em processo crítico (bus factor operacional) | Se o processo é resiliente ou depende de "quem sempre resolveu" |
| Custo de não-qualidade (retrabalho + devolução + garantia) | Se o refugo/retrabalho reportado é subestimado no relatório interno do cliente |

---

## 3. DP / GESTÃO DE PESSOAS

Área que o documento original da Strategic Value nem menciona como pilar de diagnóstico — e devia, porque "profissionalização" (contratar certo nas posições certas, principalmente financeiro/tributário/controladoria) foi apontado como alavanca de lucro recorrente em diagnósticos de PME em crescimento.

### KPIs primários
| KPI | O que mede |
|---|---|
| Turnover (geral e por área crítica) | Estabilidade da operação |
| Headcount vs. faturamento (produtividade por real investido em folha) | Se a estrutura de pessoal acompanha o crescimento do negócio |
| Tempo médio de posição vaga em cargo estratégico | Velocidade de resposta a gargalo de capital humano |
| Absenteísmo | Saúde do ambiente/gestão |

### KPIs secundários
| KPI | Valida o quê |
|---|---|
| Concentração de conhecimento crítico (quantas pessoas sabem executar processo X sem depender de 1 indivíduo) | Risco de continuidade — muito comum em PME onde "pessoa de confiança" nunca foi substituída apesar do crescimento |
| Qualificação da liderança em áreas técnicas (financeiro, tributário, controladoria) vs. porte atual da empresa | Se a empresa está com pessoas certas nas posições que mais geram risco/perda quando mal ocupadas |
| Clareza de indicadores por responsável (cada gestor sabe seus números a qualquer momento, sem esperar reunião mensal?) | Maturidade de cadência de gestão — sinaliza se a cultura de acompanhamento é semanal/real-time ou reativa |

---

## 4. COMERCIAL

**Lente de triagem (base: framework Pessoas → Processo → Produto, com raiz em metodologia Lean):** antes de otimizar qualquer KPI comercial, classificar o gargalo em um dos 3 níveis, nessa ordem de prioridade de investigação — porque resolver Produto quando o problema real é Processo (ou pior, Pessoas) desperdiça o investimento de melhoria.

- **Pessoas**: o time comercial tem a pessoa certa na função certa? Vendedor forte em fechamento não é necessariamente forte em prospecção — funções diferentes exigem perfis diferentes.
- **Processo**: existe funil de vendas sistematizado, com etapas e critérios de passagem definidos? Ou cada negociação é conduzida "no feeling" de quem está vendendo, sem repetibilidade?
- **Produto/Oferta**: a proposta de valor está clara e diferenciada, ou o cliente está comparando por preço porque não enxerga diferenciação (sinal de commoditização)?

### KPIs primários
| KPI | O que mede |
|---|---|
| Ticket médio | Valor médio por venda fechada |
| Taxa de conversão do funil (por etapa, não só ponta a ponta) | Onde exatamente o funil vaza |
| CAC (Custo de Aquisição de Cliente) | Eficiência de aquisição |
| Churn / taxa de recompra | Retenção e satisfação pós-venda |
| Ciclo médio de vendas (tempo entre 1º contato e fechamento) | Velocidade e previsibilidade do funil |

### KPIs secundários (validam a causa raiz — cruzam com a lente Pessoas/Processo/Produto)
| KPI | Valida o quê |
|---|---|
| Taxa de conversão por vendedor individual | Se o gargalo é de **Pessoas** (performance concentrada em 1-2 vendedores) ou sistêmico |
| Existência e adesão a script/playbook de vendas | Se o gargalo é de **Processo** (falta padronização) — funil que varia demais por pessoa é sintoma clássico de ausência de processo |
| Motivo de perda registrado por oportunidade (preço, prazo, concorrência, falta de fit) | Se o gargalo é de **Produto/Oferta** (perda por preço/comparação = sinal de proposta de valor fraca) |
| Margem por canal de venda | Se o canal mais ativo é o mais rentável, ou só o mais fácil |
| Concentração de receita por cliente (top 5 clientes / receita total) | Risco de dependência — muito comum em PME que "não vende, atende quem já compra" |
| Prazo médio de negociação vs. prazo praticado pelo financeiro | Cruza direto com PMR do financeiro — condição comercial pode estar descolada da capacidade de caixa |

---

## 5. MARKETING

Mesma lente Pessoas → Processo → Produto aplicada à aquisição: time de marketing tem competência para o canal escolhido (Pessoas)? Existe processo de teste e otimização de campanha, ou decisão é por achismo do dono (Processo)? A comunicação reflete uma proposta de valor real e diferenciada, ou vende commodity com adjetivo (Produto)?

### KPIs primários
| KPI | O que mede |
|---|---|
| CAC por canal | Eficiência de aquisição, comparável entre canais |
| LTV / LTV:CAC ratio | Sustentabilidade do modelo de aquisição no médio prazo |
| Taxa de conversão por canal de aquisição | Qualidade do tráfego/lead gerado por canal |
| Share of voice / awareness (quando aplicável ao porte) | Posicionamento relativo à concorrência direta |

### KPIs secundários
| KPI | Valida o quê |
|---|---|
| ROI por campanha vs. margem de contribuição do produto vendido | Evita "vender bem o produto errado" — campanha pode converter muito e ainda destruir margem |
| Custo de mídia como % de receita, comparado a benchmark do setor | Se o investimento está desproporcional ao retorno real gerado |
| Origem do lead (orgânico vs. pago) vs. taxa de fechamento comercial | Se o marketing está gerando lead qualificado ou só volume — cruza direto com taxa de conversão do funil comercial |
| Consistência de mensagem entre marketing e discurso real de vendas | Sinal de desalinhamento Produto/Processo — promessa de marketing que vendas não sustenta gera churn e reclamação |

---

## COMO ISSO VIRA O VALUE REPORT™

Estrutura sugerida por área analisada:
1. **KPI primário observado** (o número)
2. **KPI secundário que valida/contesta** (a causa raiz)
3. **Gargalo identificado** (conclusão)
4. **Impacto econômico estimado** (R$ ou % — é isso que sustenta a cobrança de performance depois)
5. **Recomendação priorizada** (o que fazer primeiro, com base em impacto x esforço)

Isso também resolve um problema jurídico que já discutimos: cada recomendação do Value Report fica com baseline documentado (KPI no momento do diagnóstico), o que é pré-requisito para conseguir cobrar sobre resultado depois sem disputa de causalidade.

---

# ANEXO — HOW-TO: DADO BRUTO, FÓRMULA E INTERPRETAÇÃO POR KPI

Guia de campo para o analista: o que pedir ao cliente, de onde tipicamente vem, como calcular, e o que o resultado significa na prática.

## FINANCEIRO

| KPI | Dado bruto necessário | Fonte típica no cliente | Como calcular | Como interpretar |
|---|---|---|---|---|
| Margem de contribuição por produto/linha | Receita e custo variável por SKU/linha/contrato | ERP, planilha de custos, sistema de vendas | (Receita − Custo Variável) / Receita, por item | Linhas com margem abaixo da média geral são candidatas a reprecificação ou descontinuação |
| EBITDA / Margem EBITDA | DRE (receita, custos, despesas operacionais, excluindo juros/impostos/depreciação) | Contabilidade/financeiro | (Receita − Custos − Despesas Operacionais) / Receita | Comparar evolução no tempo, não só o valor absoluto — receita crescendo mais rápido que EBITDA é sinal de alerta estrutural |
| DRE gerencial atualizado | Lançamentos contábeis reclassificados por natureza gerencial (não só fiscal) | Contabilidade + ajuste do analista | Reclassificação manual se não existir sistema — este é o KPI mais frequentemente **inexistente** no cliente, tratar como possível meta-gargalo | Se o cliente só tem DRE fiscal (para imposto), isso já é um achado por si só |
| Ciclo de Conversão de Caixa (CCC) | Contas a receber, estoque médio, contas a pagar, custo de mercadoria vendida (CMV), receita | Financeiro/contábil | PMR + PME − PMP (em dias) | CCC alto = dinheiro parado no ciclo; comparar com ciclo de operação do setor (varejo é diferente de indústria pesada) |
| Necessidade de Capital de Giro (NCG) | Ativo circulante operacional − Passivo circulante operacional | Balanço patrimonial | NCG = ACO − PCO | NCG crescendo mais rápido que caixa disponível é sinal de que o crescimento está sendo financiado por dívida/antecipação, não por geração própria |
| Prazo Médio de Recebimento (PMR) | Contas a receber total, receita bruta, período analisado | Financeiro/contas a receber | (Contas a Receber / Receita Bruta) × Dias do período | Comparar com prazo comercial contratado — se PMR real > prazo contratado, há inadimplência/atraso sistemático |
| Prazo Médio de Pagamento (PMP) | Contas a pagar, compras/CMV, período | Financeiro/contas a pagar | (Contas a Pagar / Compras) × Dias do período | PMP muito curto = empresa não usa poder de negociação com fornecedor |
| Distância até teto de regime tributário | Faturamento acumulado nos últimos 12 meses, teto do regime atual (ex.: R$ 4,8M Simples Nacional) | Contabilidade | Teto − Faturamento 12 meses, projetado com taxa de crescimento atual | Se a projeção estoura o teto em menos de 6 meses, é achado "Urgente" — mudança de regime não planejada gera multa |
| Composição de estoque e giro | Valor de estoque por origem/categoria, CMV | ERP/estoque | Giro = CMV / Estoque Médio | Giro baixo = capital parado; cruzar com margem por categoria para decidir se vale reduzir estoque ou é estratégico |
| Endividamento de curto prazo vs. geração de caixa | Dívida de curto prazo, caixa gerado operacionalmente (EBITDA − variação de capital de giro) | Financeiro | Dívida CP / Geração de Caixa Operacional | Se a razão está subindo mês a mês, a empresa está usando dívida para tampar problema estrutural, não sazonalidade |

## OPERAÇÕES

| KPI | Dado bruto necessário | Fonte típica | Como calcular | Como interpretar |
|---|---|---|---|---|
| Lead time (pedido → entrega) | Timestamps de pedido e entrega | TMS/ERP/sistema de pedidos | Data de entrega − Data do pedido, média | Comparar com SLA contratual e com concorrência do setor |
| OTIF | Entregas completas e no prazo, total de entregas | TMS | (Entregas completas e pontuais / Total de entregas) × 100 | Abaixo do SLA contratual de clientes-chave = achado "Urgente", não só operacional |
| Taxa de retrabalho/refugo | Unidades/processos refeitos, total produzido | Sistema de produção/qualidade | Retrabalho / Total produzido | Cruzar com custo de não-qualidade para virar R$ |
| Custo operacional por unidade | Custo total da operação, unidades produzidas/entregues | Financeiro + operação | Custo Total / Unidades | Comparar por período — tendência de alta sem explicação de volume é sinal de ineficiência crescente |
| Produtividade por colaborador/turno | Output por turno, headcount do turno | Operação/RH | Output / Headcount do turno | Grande variação entre turnos/equipes = problema de gestão local, não de sistema |
| Variação de lead time por fornecedor/rota/turno | Lead time segmentado | TMS (se detalhado) | Desvio padrão do lead time por segmento | Alta variação em 1 segmento específico aponta gargalo concentrado, não sistêmico |
| SLA interno entre áreas | Timestamps de cada etapa interna do processo | Sistema interno/observação direta se não houver registro | Tempo entre etapas | Gargalos "escondidos" no meio do processo que o lead time total não revela |
| Km rodado sem carga / ocupação de frota | Km total rodado, km com carga, capacidade utilizada vs. disponível | TMS/telemetria | (Km sem carga / Km total) × 100 | Alto km improdutivo = oportunidade de consolidação de carga e roteirização — mas só quantificável em R$ com custo/km real |
| Manutenção corretiva vs. preventiva | Gasto de manutenção por tipo | Sistema de manutenção/financeiro | Corretiva / Manutenção Total | Corretiva dominante = ausência de plano preventivo, geralmente custa mais e gera indisponibilidade não planejada |

## DP / GESTÃO DE PESSOAS

| KPI | Dado bruto necessário | Fonte típica | Como calcular | Como interpretar |
|---|---|---|---|---|
| Turnover (geral e por área) | Desligamentos no período, headcount médio | RH/folha | Desligamentos / Headcount Médio | Sempre perguntar a base exata usada (CLT? Inclui terceirizados/agregados?) — divergência de base é causa comum de erro |
| Headcount vs. faturamento | Headcount total, receita | RH + financeiro | Receita / Headcount | Comparar evolução no tempo — headcount crescendo mais rápido que receita é alerta |
| Tempo médio de vaga aberta em cargo estratégico | Data de abertura e fechamento de vaga | RH/recrutamento | Data fechamento − Data abertura, média | Cargos críticos (financeiro, controladoria) vagos por muito tempo = risco operacional direto |
| Absenteísmo | Faltas registradas, dias úteis totais | RH/ponto | Faltas / Dias Úteis Totais × Headcount | Cruzar com clima/liderança de área específica se concentrado |
| Concentração de conhecimento crítico | Mapeamento de "quem sabe fazer o quê" (levantamento qualitativo, não sistêmico geralmente) | Entrevista com gestores | Contagem de processos críticos com apenas 1 pessoa capacitada | Cada processo com bus factor = 1 é risco de continuidade, priorizar documentação/backup |
| Custo real de turnover | Custo de recrutamento, treinamento, produtividade perdida no período de adaptação | RH (frequentemente é estimativa, não dado exato) | Custo unitário × Nº de desligamentos | **Sempre validar contra cálculo direto (turnover% × headcount × custo unitário reportado) — se divergir, aplicar Protocolo 0.2** |

## COMERCIAL

| KPI | Dado bruto necessário | Fonte típica | Como calcular | Como interpretar |
|---|---|---|---|---|
| Ticket médio | Receita total, número de vendas/contratos | CRM/financeiro | Receita / Nº de vendas | Comparar por segmento de cliente, não só geral |
| Taxa de conversão por etapa do funil | Nº de oportunidades em cada etapa do CRM | CRM | Oportunidades na etapa seguinte / Etapa anterior | Identifica exatamente onde o funil "vaza", não só a taxa ponta a ponta |
| CAC | Custo total de aquisição (comercial + marketing atribuído), nº de clientes novos | Financeiro + marketing + CRM | Custo Total de Aquisição / Nº Clientes Novos | **Cuidado**: se marketing e comercial calculam CAC separadamente sem reconciliar, aplicar Protocolo 0.2 |
| Churn / recompra | Clientes ativos início e fim do período, clientes perdidos | CRM/financeiro | Clientes Perdidos / Clientes Ativos no Início | Cruzar com motivo de perda registrado — sem isso, churn é número sem causa |
| Ciclo médio de vendas | Data de 1º contato, data de fechamento, por oportunidade | CRM | Data Fechamento − Data 1º Contato, média | Ciclo muito longo ou com alta variação indica falta de processo padronizado |
| Taxa de conversão por vendedor | Oportunidades e fechamentos por vendedor individual | CRM | Fechamentos / Oportunidades, por vendedor | Concentração de performance em 1-2 pessoas = risco de dependência (Pessoas), não necessariamente sucesso do processo |
| Motivo de perda por oportunidade | Campo de motivo de perda preenchido no CRM | CRM (frequentemente mal preenchido — checar qualidade do dado antes de confiar) | Contagem por categoria de motivo | Perda concentrada em "preço" é sinal de Produto/Oferta fraca, não de execução comercial |
| Margem por canal de venda | Receita e custo por canal | Financeiro + CRM | Margem = (Receita − Custo) / Receita, por canal | Canal mais ativo nem sempre é o mais rentável |
| Concentração de receita por cliente | Receita por cliente, receita total | Financeiro/CRM | Top 5 ou Top 20% clientes / Receita Total | Acima de 60-70% em poucos clientes é risco relacional relevante — cruzar com achados de risco (Protocolo 0.3) |
| Prazo médio de negociação vs. financeiro | Prazo de pagamento oferecido por venda, PMR real do financeiro | CRM + Financeiro | Comparação direta | Se o comercial oferece prazo que o financeiro não sustenta, o problema não é vendas, é alinhamento interno |

## MARKETING

| KPI | Dado bruto necessário | Fonte típica | Como calcular | Como interpretar |
|---|---|---|---|---|
| CAC por canal | Investimento por canal, clientes convertidos por canal | Plataformas de mídia + CRM | Investimento no Canal / Clientes Convertidos do Canal | Comparar entre canais — o mais barato não é sempre o melhor se a qualidade do lead for baixa |
| LTV / LTV:CAC | Ticket médio, tempo médio de retenção (1/churn), margem | Financeiro + CRM | LTV = Ticket Médio × Margem × (1/Churn); Ratio = LTV/CAC | Abaixo de 3:1 geralmente indica modelo de aquisição insustentável no médio prazo |
| Taxa de conversão por canal | Leads gerados por canal, leads convertidos em cliente | CRM + marketing | Convertidos / Leads Gerados, por canal | Canal com muito volume e baixa conversão pode estar trazendo lead desqualificado |
| ROI por campanha vs. margem | Investimento por campanha, receita gerada, margem do produto vendido | Marketing + financeiro | (Receita × Margem − Investimento) / Investimento | Campanha "bem-sucedida" em volume pode destruir valor se vender produto de baixa margem |
| Custo de mídia como % de receita | Investimento total em mídia, receita total | Marketing + financeiro | Investimento / Receita | Comparar com benchmark do setor, não com percepção interna |
| Origem do lead vs. taxa de fechamento comercial | Leads por origem (orgânico/pago), status de fechamento no CRM | Marketing + CRM (**normalmente não integrados — checar isso primeiro**) | Fechamentos / Leads, por origem | Se marketing e CRM não conversam, este KPI simplesmente não existe até a integração ser corrigida — tratar como achado de Processo |
| Consistência de mensagem marketing vs. discurso de vendas | Material de marketing + roteiro/discurso real usado pelo comercial (levantamento qualitativo) | Entrevista/observação | Comparação qualitativa | Promessa de marketing que vendas não sustenta gera churn precoce — conecta com achado de churn do Comercial |

**Regra geral de campo**: sempre que a "fonte típica" de um KPI aparecer como duas fontes diferentes que normalmente não conversam entre si (ex.: CRM + Marketing, Financeiro + Comercial), isso já é candidato a achado de Processo antes mesmo de calcular o número — a fragmentação de dado é, ela mesma, um gargalo.
