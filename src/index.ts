const { ApolloServer, gql } = require('apollo-server');
import { makeExecutableSchema } from 'graphql-tools';
import Story from './Story'

const typeDef = gql`type Query`;

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs: [typeDef, Story.typeDef], resolvers: [Story.resolver] });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(4001).then(() => {
    // console.log(`🚀  Server ready at ${url}`);
});