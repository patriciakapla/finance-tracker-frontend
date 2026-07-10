# ADR

## 01 - ORGANIZAÇÃO DO BACKEND

- O frontend foi organizado por funcionalidade dentro de src/features, separando domínios como users e transactions.

- Cada feature concentra seus próprios componentes, hooks, tipos, chamadas de API e constantes.

- Componentes genéricos ficam em src/components, utilitários em src/utils e tipos compartilhados em src/types.

- Essa estrutura facilita encontrar e evoluir funcionalidades sem misturar regras de domínios diferentes.

## 02 - ROTAS

- A aplicação usa TanStack Router com as rotas principais: transações, usuários e relatório.

- O QueryClientProvider fica no topo da aplicação para que todas as telas compartilhem o mesmo cache do React Query.

- A rota inicial (/) abre diretamente a tela de transações, evitando uma Home sem função prática.

## 03 - REACT QUERY

- O projeto usa React Query para centralizar consultas, mutations, cache e invalidação de dados vindos da API.

- Essa decisão reduz código manual de carregamento e atualização das telas, além de manter listas e relatórios sincronizados após operações como criação ou remoção de registros.

- O React Query encapsula consultas e mutations em hooks específicos de cada feature.

- Mutations invalidam as queries relacionadas após sucesso, mantendo tabelas e relatórios atualizados.

- As query keys identificam cada recurso no cache do React Query. Query keys precisam ser específicas para cada formato de resposta, evitando reaproveitar cache de lista onde a tela espera um objeto único.

## 04 - VALIDAÇÃO DE FORMULÁRIOS

- Os formulários usam React Hook Form para controlar campos, envio, erros e estado de validade.

- O Zod concentra as regras de validação fora do JSX.

- A integração entre React Hook Form e Zod é feita com zodResolver.

- Formulário para criar usuário usa schema fixo

- Formulário para criar transações depende de dados externos para validar se o usuário é menor de idade, por isso usa uma fábrica de schemas que recebe a lista de usuários ativos, permitindo acesso aos seus dados.
