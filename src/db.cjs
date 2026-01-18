const { PrismaClient } = require('./generate/prisma');

const prisma = new PrismaClient();
module.exports = prisma;
console.log('--- Sistema de Banco de Dados ---');
console.log('Conexão configurada:', process.env.DATABASE_URL ? 'OK' : 'FALHA');