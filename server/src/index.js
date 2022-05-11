const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
  typeDefs,
  csrfPrevention: true,
  resolvers,
  dataSources: () => ({ trackAPI : new TrackAPI() }),
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
