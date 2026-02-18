
# Task Manager Enterprise API

O objetivo é o desenvolvimento de um sistema de **Gerenciamento de tarefas** aplicando **metodologias ágeis** e boas práticas de desenvolvimento.

##  Estrutura do Repositório (Arquitetura em Camadas):

```
├── src/
│   ├── routes/      # Definição dos endpoints e roteamento das requisições
│   ├── controllers/ # Orquestração da requisição (recebe dados e envia resposta)
│   ├── services/    # Regras de negócio e comunicação direta com o Prisma Client
│   └── app.cjs      # Ponto de entrada e configuração do servidor Express
├── prisma/          # Schema do banco de dados e arquivos de migração
├── docker-compose.yml # Orquestração de containers (Postgres 18 + API)
├── package.json     # Dependências e scripts do projeto
└── README.md        # Documentação técnica
```
##  Funcionalidades
- Criar tarefas com níveis de prioridade.
- Listagem completa de atividades.
- Busca refinada por ID.
- Atualização de status e descrição.
- Remoção definitiva de registros.

##  Como Executar o Projeto

1. Clone o repositório:

   ```Bash
   git clone https://github.com/Matheus-torrao/Task-Manager-Enterprise-API.git
   cd Task-Manager-Enterprise-API
2. Via Docker
   Comando para subir container (API + Banco de Dados):
   ```bash
      docker compose up -d
   ```
   Comando para executar migrations para criação das tabelas:
   ```bash
      docker exec -it backend_api npx prisma migrate dev --name init
   ```
3. Execução Local
   
   npm install
   Crie um arquivo *.env* na raiz do projeto com sua string de conexão.
   Gere o Prisma Client e rode as migrations.
      ```bash
      Comandos: npx prisma generate | npx prisma migrate dev
      Comando para iniciar Servidor: npm run dev
      ```

Testando as Rotas:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/tarefas` | Cria uma nova tarefa |
| **GET** | `/tarefas` | Lista todas as tarefas cadastradas |
| **PUT** | `/tarefas/:id` | Atualiza uma tarefa existente pelo ID |
| **DELETE** | `/tarefas/:id` | Remove uma tarefa do banco de dados |

### Exemplo de Corpo Json para o **POST**:

```json
{
   "titulo": "Titulo tarefa",
   "descricao": "Descrição da tarefa",
   "prioridade": "Prioridade da tarefa"
}


