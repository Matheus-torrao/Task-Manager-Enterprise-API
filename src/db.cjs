const { PrismaClient } = require('@prisma/client');
const path = require('path');

// Mantemos o que funcionou para carregar o .env
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('--- Sistema de Banco de Dados ---');
console.log('Conexão configurada:', process.env.DATABASE_URL ? 'OK' : 'FALHA');

// Use o construtor VAZIO. O Prisma 7 lerá o DATABASE_URL automaticamente.
const prisma = new PrismaClient();

module.exports = { prisma };