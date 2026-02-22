
const express = require('express');
const cors = require ('cors');

// Configuração de Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Importando as rotas e aplicando um Roteador prefixo
const tarefaRoutes = require('./src/routes/tarefaRoutes.cjs');
app.use('/tarefas', tarefaRoutes) //Todas as rotas de tarefas começam com /tarefas

app.get('/', (req, res) => {
    console.log(req.method);
    res.status(200).json({message: 'Servidor Funcionando!'})
});

const PORT = 3000; 
const HOST = '0.0.0.0';
app.listen(PORT, HOST, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;