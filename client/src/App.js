import React from 'react';
import Contacts from './Contacts';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';

const link = new HttpLink({uri: "http://localhost:4000/graphql"});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h2>CRM</h2>
      <Contacts />
    </div>
    </ApolloProvider>
  );
}

export default App;
