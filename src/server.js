import gql from "graphql-tag";
import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    sayHello(name: String): String!
  }

  type Mutation {
    sayHello(name: String!): String!
  }
`;

const resolvers = {
  Query: {
    sayHello: (obj, args, context, info) => {
      return `Hello ${args.name}!`;
    }
  },
  Mutation: {
    sayHello: (obj, args, context, info) => {
      return `Hello ${args.name}!`;
    }
  }
};

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

app.listen(3000, () => {
  console.log(
    `🚀Server ready at http://localhost:3000${apolloServer.graphqlPath}!`
  );
});
