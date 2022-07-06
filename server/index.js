const { ApolloServer, gql } = require('apollo-server');

const { typeDefs } = require('./schema');

const { Query } = require('./resolvers/Query');

const resolvers = {
  Query,
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
