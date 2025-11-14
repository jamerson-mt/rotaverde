<!-- Copilot / AI agent instructions for the Rotaverde frontend -->
# Copilot Usage Notes — rotaverde (frontend)

Objetivo rápido: dar a um agente AI tudo que é necessário para ser produtivo rapidamente no projeto `rotaverde/` (frontend) e entender a integração com `rotaverdeapi/` (backend).

- Arquitetura geral:
  - Frontend: Ionic + Vue 3 + Pinia + Vite (pasta `rotaverde/`). Código Typescript, Tailwind para estilos.
  - Backend: .NET 8 Web API em `rotaverdeapi/` (`RotaVerdeAPI.csproj`) — usa EF Core (SQLite) e expõe endpoints consumidos pelo frontend.
  - Mobile: Capacitor configurado (`capacitor.config.json`) com projeto Android em `android/`.

- Comandos essenciais (executar a partir da raiz `rotaverde/`):
  - Instalar dependências: `npm install`
  - Rodar frontend em dev: `npm run dev` (Vite)
    - Se PowerShell bloquear `npm.ps1`, use `cmd /c "npm run dev"` ou `& "$env:ProgramFiles\nodejs\npm.cmd" run dev` ou ajuste `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
  - Build frontend: `npm run build`
  - Preview build: `npm run preview`
  - Rodar backend (em `rotaverdeapi/`):
    ```powershell
    cd ../rotaverdeapi
    dotnet restore
    dotnet run
    ```
  - Hot-reload frontend: `dotnet watch run` não se aplica ao frontend; use `dotnet watch run` para o backend (no `rotaverdeapi/`) e `npm run dev` no frontend.

- Testes e lint:
  - Unit: `npm run test:unit` (Vitest)
  - E2E: `npm run test:e2e` (Cypress)
  - Lint: `npm run lint` (ESLint)

- Padrões e convenções do repositório:
  - Feature-based layout: `src/domains/<feature>/` contém `components/`, `router/`, `services/`, `store/`, `views/`.
  - Rotas: `src/router/index.ts` é o ponto central das rotas do app.
  - Stores: usar Pinia; procure pastas `store` dentro dos domínios.
  - Utilitários: funções compartilhadas em `src/utils/` (ex.: `adjusteUrlFiles.ts`, `audioManager.ts`, `textToSpeech.ts`). Prefira essas utilidades antes de adicionar duplicação.
  - Estilos: `src/theme/` contém `base.css` e `variables.css`; `tailwind.css` também é usado.

- Integrações e dependências externas:
  - Firebase: configuração em `firebaseConfig.js` — revise antes de modificar integrações com auth/storage.
  - Capacitor plugins: app, haptics, keyboard, status-bar — mudanças nativas exigem `npx cap sync` e abertura do projeto no Android Studio (`android/`).
  - Backend .NET: endpoints esperados; busque chamadas de API no frontend e ajuste URLs em `adjusteUrlFiles.ts`.

- Quando modificar código:
  - Mantenha mudanças focadas e mínimas. Não reformatar arquivos inteiros nem alterar estilos globais sem necessidade.
  - Atualize tipos TypeScript e rode `npm run build` localmente ao alterar contratos entre frontend e backend.
  - Se tocar em fluxos de dados, adicione/ajuste testes unitários (`Vitest`) e, se necessário, um teste E2E (Cypress).

- Arquivos e pontos de referência úteis (comece por estes):
  - `src/main.ts` — bootstrapping do app
  - `src/router/index.ts` — rotas
  - `src/domains/*/router/*` — rotas por domínio
  - `src/domains/*/store/*` — stores Pinia por domínio
  - `public/` — assets estáticos (ícones, imagens, áudios)
  - `capacitor.config.json` — config Capacitor (mobile)
  - `android/` — projeto Android nativo
  - `rotaverdeapi/RotaVerdeAPI.csproj` — backend (.NET 8)

- Boas práticas específicas deste projeto para agentes AI:
  - Ao implementar mudanças no frontend que afetam a API, atualize e verifique no `rotaverdeapi/` a compatibilidade de contrato (tipos/nome de campos).
  - Prefira reutilizar utilitários em `src/utils/` antes de criar funções novas semelhante.
  - Para alterações nativas (Android), documente os passos `npx cap sync`, `npx cap open android` e note que builds nativos exigem Android Studio.
  - Cite arquivos de exemplo ao propor alterações (linhas/trechos) e use `apply_patch` para alterações de código.

Se algo estiver faltando ou se quiser que eu amplie uma seção (ex.: fluxo de autenticação, scripts npm adicionais, detalhes da API), diga o que devo incluir. Depois de confirmar, aplico o arquivo ao repositório e ajusto conforme seu feedback.
