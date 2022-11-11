import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { PedidoResolvers } from '@graphql/server/Pedido/resolvers';

const globalResolvers: Resolver[] = [model1Resolvers, PedidoResolvers];

export { globalResolvers };
