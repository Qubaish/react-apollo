import React from 'react';
import Contacts from './Contacts';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';

const client = new ApolloClient();

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
