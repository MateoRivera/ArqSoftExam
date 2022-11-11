-- CreateEnum
CREATE TYPE "Enum_Status" AS ENUM ('Ingresado', 'EnProceso', 'Despachado', 'Entregado');

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "status" "Enum_Status" NOT NULL DEFAULT 'Ingresado',
    "nombreCliente" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estimatedTimeInMinutes" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);
