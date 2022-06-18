import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink
} from '@apollo/client'



// const myLinkDirectusItem = new HttpLink({
//   uri: 'https://7kb0t63m.directus.app/graphql/',
//   // other link options...
// });

// const myLinkDirectusSystem = new HttpLink({
//   uri: 'https://7kb0t63m.directus.app/graphql/system',
//   // other link options...
// });

const client = new ApolloClient({
  uri: 'https://7kb0t63m.directus.app/graphql/',
  cache: new InMemoryCache(),
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('authToken') || ''
    console.log('token root',token)
    operation.setContext({
      headers: {
        Authorization: `JWT `
      }
    })
  },
  clientState: {
    default: {
      isLoggedIn: !!localStorage.getItem('authToken')
    }
  }
})

// const Root = () => {
//   <Query query={ME_QUERY}>
//     {({ data, loading, error }) => {
//       if (loading) return <div>LOADING...</div>
//       if (error) return <div>Error</div>
//       { console.log(data)}
//       return <div>{JSON.stringify(data, null, 2)}</div>

//     }}
//   </Query>
// }

// const ME_QUERY =gql`
// query me{
// 	users_by_id(id: "4b891ad2-04f8-48de-bfb7-05e0f76f68df") {
// 		first_name
// 		last_name
// 		email
// 	}
// }

// `
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
