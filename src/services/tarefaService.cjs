const { prisma } = require('../lib/prisma.cjs')

const tarefaService = {

    criarTarefa: async (tarefa) =>{
        if(!tarefa.titulo) {
            throw new Error('Título é obrigatório');
        }        
    
        const prioridadeFormatada = tarefa.prioridade ? tarefa.prioridade.toLowerCase(): null;

        const novaTarefa = await prisma.tarefa.create({
            data: {
                titulo: tarefa.titulo,
                descricao: tarefa.descricao || null,
                prioridade: prioridadeFormatada,
                concluida: false,
            },
        });

        return novaTarefa;

    },
    listarTarefas: async () => {
        return await prisma.tarefa.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    },
    buscarPorID: async (id) => {
        const idInt = parseInt(id);
        if (isNaN(idInt)) {
            throw new Error('ID inválido');
        }
        const tarefaExistente = await prisma.tarefa.findUnique({
            where: {id: idInt},
        });
        return tarefaExistente;
    },
    atualizarTarefa: async (id, tarefa) => {
        const idInt = parseInt(id);
        if (isNaN(idInt)) {
            throw new Error('ID inválido');
        }
        const tarefaExistente = await prisma.tarefa.findUnique({
            where: {id: idInt},
        });
        if(!tarefaExistente){
            throw new Error('Tarefa não encontrada');
        }
        return await prisma.tarefa.update({
            where: {id: idInt},
            data: tarefa,
        });
    },
    excluirTarefa: async (id) => {
        const idInt = parseInt(id);
        if (isNaN(idInt)) {
            throw new Error('ID inválido');
        }

        const tarefaExistente = await prisma.tarefa.findUnique({
            where: {id: idInt},
        });
        if(!tarefaExistente){
            throw new Error('Tarefa não encontrada');
        }
        return await prisma.tarefa.delete({
            where: {id: idInt},
        });
    },

};
module.exports = tarefaService;