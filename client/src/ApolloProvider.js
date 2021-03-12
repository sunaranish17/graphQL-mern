import React from 'react';
import App from './App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);