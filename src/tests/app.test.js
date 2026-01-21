const { prisma } = require('../lib/prisma.cjs');


describe('Testes da Tabela Tarefa', () => {
  beforeEach(async () => {
    await prisma.tarefa.deleteMany();
  });

  test('Deve acessar o banco usando a instância existente', async () => {
    const tarefas = await prisma.tarefa.findMany();
    expect(Array.isArray(tarefas)).toBe(true);
  });

});