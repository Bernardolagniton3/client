import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink  } from "@apollo/client";

import { Provider } from 'react-redux';

import  store  from './store';

const link = new HttpLink({
  uri: "http://localhost:8000/graphql"
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <ApolloProvider client={client}>
     <App />
    </ApolloProvider>
    </BrowserRouter>
    </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
