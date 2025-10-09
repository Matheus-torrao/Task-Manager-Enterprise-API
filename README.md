

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](#)
[![Node.js](https://img.shields.io/badge/node-%3E%3D14-brightgreen)](#)

##  Descrição do Projeto

O objetivo é simular o desenvolvimento de um sistema de **gerenciamento de tarefas** aplicando **metodologias ágeis** (Kanban) e boas práticas de desenvolvimento em um repositório GitHub.

##  Funcionalidades

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Remover tarefas


##  Estrutura do Repositório

├── controller/ # Lógica de controle das rotas<br>
├── model/ # Estrutura de dados em memória<br>
├── app.cjs # Ponto de entrada da aplicação<br>
├── package.json # Dependências e scripts<br>
├── README.md # Este documento<br>
└── .gitignore



##  Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Matheus-torrao/CRUD_De_Tarefas.git
   npm install
   node app.cjs

Teste as rotas usando Postman, Insomnia ou cURL.

POST /tarefas → cria tarefa

GET /tarefas → lista todas

PUT /tarefas/:id → atualiza tarefa

DELETE /tarefas/:id → remove tarefa

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


