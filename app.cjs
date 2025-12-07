
const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

// Configuração de Middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Importando as rotas e aplicando um Roteador prefixo
const tarefaRoutes = require('./src/routes/tarefaRoutes.cjs');
app.use('/tarefas', tarefaRoutes) //Todas as rotas de tarefas começam com /tarefas

app.get('/', (req, res) => {
    console.log(req.method);
    res.status(200).json({message: 'Servidor Funcionando!'})
});

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost${PORT}`);
});

module.exports = app;