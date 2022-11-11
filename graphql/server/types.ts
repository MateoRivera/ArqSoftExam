import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { model1Types } from '@graphql/server/model1/types';
import { PedidoTypes } from '@graphql/server/Pedido/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [CommonTypes, model1Types, PedidoTypes];

export { globalTypes };
