const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    Coins: [Coin!]!
  }
  type Coin {
    name: String!
    rate: Float!
    symbol: String!
    imageUrl: String!
  }
`;
