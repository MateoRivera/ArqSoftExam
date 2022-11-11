import { gql } from 'apollo-server-micro';

const PedidoTypes = gql`
  enum StatusPedido {
    Ingresado
    EnProceso
    Despachado
    Entregado
  }
  input PedidoInput {
    nombreCliente: String!
    direccion: String!
    estimatedTimeInMinutes: Int!
    descripcion: String!
  }
  type Pedido {
    id: ID!
    status: StatusPedido
    nombreCliente: String
    direccion: String
    descripcion: String
    date: String
    estimatedTimeInMinutes: Int
  }

  type Query {
    obtenerPedido(id: String): Pedido
  }
  type Mutation {
    crearPedido(data: PedidoInput): Pedido
  }
`;

export { PedidoTypes };
