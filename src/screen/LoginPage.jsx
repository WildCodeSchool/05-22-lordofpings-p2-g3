import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import React, { useEffect } from 'react'
import SignIn from '../components/graphql/SignIn'
import './LoginPage.css'

const LoginPage = ({ setIsHomePage }) => {
    const httpLink = new createHttpLink({
        uri: process.env.REACT_APP_DIRECTUS_API_URL_SYSTEM
    })
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

    const authLink = setContext((_, { headers }) => {
        const token = ''
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ''
            }
        }
    })

    const clientSystem = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })

  return (
      <ApolloProvider client={clientSystem}>
    <div className="signin__container d-flex-center">
      <SignIn />
    </div>
    </ApolloProvider>
  )
}

export default LoginPage
