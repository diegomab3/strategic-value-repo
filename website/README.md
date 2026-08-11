# Strategic Value™ — Site institucional e área do cliente

Next.js 16 (App Router) + TypeScript + Tailwind v4 + Supabase (Auth + DB).

## Estrutura

- `/` — home institucional (proposta de valor, ICP, como funciona, captura de lead).
- `/quem-somos` — missão, visão, valores.
- `/login` — acesso do cliente via magic link (sem senha).
- `/portal` — área do cliente (protegida): lista assessments, achados e Value Reports da empresa do usuário logado.
- `/auth/callback` — troca o código do magic link por sessão.

## Identidade visual

Paleta fixa em azul escuro / preto / cinza (tokens em `src/app/globals.css`, prefixo `--sv-*`), sem tema claro — decisão deliberada de marca, não uma lacuna de acessibilidade. Tipografia: Source Serif 4 para títulos (tom editorial/consultoria), Inter para corpo de texto.

## Banco de dados

Usa o mesmo projeto Supabase da biblioteca proprietária (`lfrzkcqwxoojtojscydd`, ver `/infraestrutura`). Tabelas específicas do site:

- `profiles` — liga `auth.users` a uma `empresas.id`. Criada automaticamente (vazia, sem empresa) no primeiro login via trigger `on_auth_user_created`; o vínculo com a empresa é feito manualmente por um admin até existir um fluxo de convite.
- `leads` — captura do formulário de contato da home. Inserção pública (`anon`/`authenticated`), leitura restrita (sem policy de select — só service role).

RLS do portal: `empresas`, `assessments`, `achados` e `value_reports` têm policies de `select` restritas à própria empresa do usuário, via `profiles.empresa_id`. A biblioteca proprietária (`kpis_biblioteca`, `intervencoes_biblioteca`, `achado_intervencao`) permanece sem policy — não é exposta ao portal.

## Rodando localmente

```bash
npm install
npm run dev
```

Requer `.env.local` com `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` (ver `.env.local.example`).

## Pendências conhecidas

- Copy de "Quem Somos" (missão/visão/valores) é um primeiro rascunho — revisar antes de publicar.
- E-mail de contato no rodapé (`contato@strategicvalue.com.br`) é placeholder — não existe domínio/e-mail real ainda.
- Sem deploy configurado (Vercel ou outro) — só rodei localmente até aqui.
- Sem fluxo de convite de cliente: hoje o vínculo `profiles.empresa_id` é feito manualmente via SQL depois do primeiro login do cliente.
