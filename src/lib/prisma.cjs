require("dotenv/config");
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

// Garantir que as variáveis de ambiente estão carregadas
if (!process.env.DATABASE_URL) {
  console.warn('AVISO: DATABASE_URL não encontrada nas variáveis de ambiente');
}

const connectionString = process.env.DATABASE_URL || '';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = global.prisma || new PrismaClient({
  adapter: adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

module.exports = { prisma };
