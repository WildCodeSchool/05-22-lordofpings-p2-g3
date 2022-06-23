import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

//recuperation des variables environnement
const DIRECTUS_API_TOKEN = '' || process.env.REACT_APP_DIRECTUS_API_TOKEN

// Apollo Client est une bibliothèque complète de gestion d'état pour JavaScript qui vous permet de gérer des données locales et distantes avec GraphQL.

const httpLink = createHttpLink({
  uri: 'https://7kb0t63m.directus.app/graphql/',
  credentials: 'include'
})

//context de l'application pour appolo client pour la gestion de l'etat grahpql
const authLink = setContext((_, { headers }) => {
  const token = DIRECTUS_API_TOKEN
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// instancaition d'un' client appolo pour le end point directus/../item
const client = new ApolloClient({
  link: authLink.concat(httpLink), // on inject le context du header dans notre client appolo lié au end point
  cache: new InMemoryCache() // strategie mis ene cache
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
