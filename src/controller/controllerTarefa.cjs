const tarefaService = require('../service/tarefaService.cjs');

const tarefaController = {
  async criar(req,res) { 
    try {
      const novaTarefa = await tarefaService.criarTarefa(req.body);
      res.status(201).json(novaTarefa)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  },
  async listar(req,res) {
    try {
      const tarefas = await tarefaService.listarTarefas();
      res.status(200).json(tarefas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar tarefas' });
    }
  },
  async buscarPorID(req,res) {
    try {
      const tarefa = await tarefaService.buscarPorID(req.params.id);
      if (!tarefa) return res.status(404).json({error: 'Tarefa não encontrada'});
      return res.status(200).json(tarefa);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar tarefa por ID' });
    }
  }
};