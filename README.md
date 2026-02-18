

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](#)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14-brightgreen)](#)

##  Descrição do Projeto

O objetivo é o desenvolvimento de um sistema de **Gerenciamento de tarefas** aplicando **metodologias ágeis** e boas práticas de desenvolvimento.

##  Funcionalidades

- Criar tarefas
- Listar tarefas
- Buscar por Id
- Atualizar tarefas
- Remover tarefas por Id

##  Estrutura do Repositório

├── src/
│   ├── routes/      # Definição dos endpoints e roteamento das requisições
│   ├── controllers/ # Orquestração da requisição (recebe dados e envia resposta)
│   ├── services/    # Regras de negócio e comunicação direta com o Prisma Client
│   └── app.cjs      # Ponto de entrada e configuração do servidor Express
├── prisma/          # Schema do banco de dados e arquivos de migração
├── docker-compose.yml # Orquestração de containers (Postgres 18 + API)
├── package.json     # Dependências e scripts do projeto
└── README.md        # Documentação técnica

##  Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Matheus-torrao/Task-Manager-Enterprise-API.git
2. Via Docker
   Comando para subir container (API + Banco de Dados): 
      **docker compose up -d**
   Comando para executar migrations para criação das tabelas:
      **docker exec -it backend_api npx prisma migrate dev --name init**
3. Execução Local
   **npm install**
   Crie um arquivo **.env** na raiz do projeto com sua string de conexão.
   Gere o Prisma Client e rode as migrations.
      Comandos: **npx prisma generate** | **npx prisma migrate dev**
      Comando para iniciar Servidor: **npm run dev**

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
   "descricão": "Descrição da tarefa",
   "prioridade": "Prioridade da tarefa"
}

## Metodologia Ágil

   Quadro Kanban no GitHub Projects com colunas:
   A Fazer, Em Progresso, Concluído.

   O fluxo de trabalho é atualizado a cada etapa de desenvolvimento.

   Uma mudança de escopo foi simulada (ex.: adicionar prioridade de tarefa) para demonstrar adaptabilidade.

## Controle de Qualidade

   Testes automatizados básicos (exemplo: validar resposta da rota).

   Pipeline configurado com GitHub Actions para rodar os testes em cada push.

## Requisitos e UML

   Requisitos Funcionais: cadastrar, listar, editar e excluir tarefas.

   Requisitos Não Funcionais: simplicidade, código legível, testes automatizados.

## Diagramas UML:

   Casos de uso (usuário interage com CRUD de tarefas).

   Diagrama de classes (Tarefa, Controlador, Aplicação).

   (Diagramas disponíveis na pasta docs/ – usar draw.io para edição).

   Simulação de Mudança de Escopo

   Adicionada a funcionalidade de prioridade em tarefas.

   Justificativa: permite que usuários priorizem atividades críticas, alinhado ao contexto ágil.

   Atualização refletida no README e no quadro Kanban.


