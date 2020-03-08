import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Map from './pages/map'

const client = new ApolloClient({
  uri: 'http://localhost:5100',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Map />
    </ApolloProvider>
  );
}