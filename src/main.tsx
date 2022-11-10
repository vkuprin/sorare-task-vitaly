import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import 'tailwindcss/tailwind.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <ApolloProvider client={client}>
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    </ApolloProvider>
  );
}
