const { ApolloServer, gql } = require('apollo-server');

const BASE_URL = 'https://api.coinstats.app/public/v1/fiats';

const typeDefs = gql`
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

const resolvers = {
  Query: {
    Coins: async () => {
      const res = await fetch(`${BASE_URL}`);
      return res.json();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
