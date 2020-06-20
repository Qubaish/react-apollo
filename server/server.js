
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';

// Construct a schema, using GraphQL schema language
const contacts = [
    {
      id: 1,
      firstName: 'Manny',
      lastName: 'Henri'
    },
    {
      id: 2,
      firstName: 'Jasmine',
      lastName: 'Henri-Rainville'
    },
      {
      id: 3,
      firstName: 'Jeremy',
      lastName: 'Henri-Rainville'
    }
  ]
  
const typeDefs = gql`
  type Contact {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    contacts: [Contact]
  }

  type Mutation {
    addContact(firstName: String!, lastName: String!): Contact
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        contacts: () => {
          return contacts;   
        },
      },
      Mutation: {
        addContact: (root, args) => {
          const newId = require('crypto').randomBytes(5).toString('hex');
          const newContact = { id: newId, firstName: args.firstName, lastName: args.lastName};
          contacts.push(newContact);
          return newContact;
        }
      }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use('*', cors({ origin: 'http://localhost:3000'}));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);