# Finance Tracker Frontend

Frontend em React para o projeto `finance-tracker-backend`.

Para conhecer as decisões arquiteturais, veja o arquivo adr.md

## Requisitos

- Node.js
- npm
- Backend configurado e em execução
- Banco PostgreSQL do backend em execução

## Configuração

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env`:

```bash
cp .env.example .env
```

Confirme a URL da API:

```bash
VITE_API_URL=http://localhost:5217
```

## Rodando com o backend

No repositório do backend, suba o banco:

```bash
docker compose up -d
```

Ainda no backend, rode a API:

```bash
dotnet run --project backend/FinanceTracker.Api
```

A API deve ficar disponível em:

```bash
http://localhost:5217
```

No repositório do frontend, rode:

```bash
npm run dev
```

O frontend normalmente fica disponível em:

```bash
http://localhost:5173
```

```

## Rotas

- `/`: transações
- `/users`: usuários
- `/report`: relatório
```
