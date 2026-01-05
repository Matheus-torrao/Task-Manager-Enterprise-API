const prisma = require('../db.cjs');

const tarefaService = {

    criarTarefa: async (tarefa) =>{
        if(!titulo) {
            throw new Error('Título é obrigatório');
        }        
    
    const prioridadeFormatada = prioridade ? prioridade.toLowerCase(): null;

    const novaTarefa = await prisma.tarefa.create({
        data: {
            titulo,
            descricao,
            prioridade: prioridadeFormatada,
            concluida: false,
        },
    });

    return novaTarefa;

},
listarTarefas: async () => {
    const idInt = parseInt(id);
    const tarefaExistente = await prisma.tarefa.findUnique({
        where: {id: idInt},
    });
    if(!tarefaExistente){
        throw new Error(`Tarefa não encontrada: ${idInt}`);
    }
    return await prisma.tarefa.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
},
atualizarTarefa: async (id,tarefa) => {
    const idInt = parseInt(id);
    const tarefaExistente = await prisma.tarefa.findUnique({
        where: {id: idInt},
    });
    if(!tarefaExitente){
        throw new Error('Tarefa não encontrada');
    }
    return await prisma.tarefa.update({
        where: {id},
        data: tarefa,
    });
    return tarefaExistente;
},
excluirTarefa: async (id) => {
    const idInt = parseInt(id);

    const tarefaExistente = await prisma.tarefa.findUnique({
        where: {id: idInt},
    });
    if(!tarefaExistente){
        throw new Error('Tarefa não encontrada');
    }
    return await prisma.tarefa.delete({
        where: {id},
    });
    return tarefaExistente;
},

};
module.exports = tarefaService;