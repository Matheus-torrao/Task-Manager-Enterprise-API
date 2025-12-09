-- CreateTable
CREATE TABLE "Tarefa" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "prioridade" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tarefa_pkey" PRIMARY KEY ("id")
);
