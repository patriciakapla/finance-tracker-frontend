# Finance Tracker Frontend

Interface para controle de gastos residenciais desenvolvida em React.

- [Decisões arquiteturais](./adr.md)
- [Repositório do backend](https://github.com/patriciakapla/finance-tracker-backend)

## Requisitos

- Node.js
- npm
- Backend configurado e em execução

## Configuração

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Confirme que `VITE_API_URL` aponta para a API:

```env
VITE_API_URL=http://localhost:5217
```

Para configurar e executar a API e o banco de dados, siga as instruções do
[repositório do backend](https://github.com/patriciakapla/finance-tracker-backend).

## Executando o frontend

Com o backend em execução, rode:

```bash
npm run dev
```

O frontend ficará disponível em `http://localhost:5173`.
