import { Resolver } from 'types';
import prisma from '@config/prisma';

const PedidoResolvers: Resolver = {
  Query: {
    obtenerPedido: async (parent, args) =>
      await prisma.pedido.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    crearPedido: async (parent, args) =>
      await prisma.pedido.create({
        data: {
          nombreCliente: args.data.nombreCliente,
          direccion: args.data.direccion,
          descripcion: args.data.descripcion,
          estimatedTimeInMinutes: args.data.estimatedTimeInMinutes,
        },
      }),
  },
};

export { PedidoResolvers };
