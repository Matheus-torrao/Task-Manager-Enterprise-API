const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const prisma = new PrismaClient({
    datasourceURL: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});
console.log('Conexão com o banco de dados estabelecida');
module.exports = { prisma };
