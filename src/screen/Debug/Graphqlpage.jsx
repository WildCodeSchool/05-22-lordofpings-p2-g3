import React, { useEffect, useState } from 'react'
import GetArticles from '../../components/graphql/GetArticles'
import GetLocations from '../../components/graphql/GetLocations'
import GetFiles from '../../components/graphql/GetFiles'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import GetMusician from '../../components/graphql/GetMusician'
import CreateArticles from '../../components/graphql/CreateArticles'
import SignIn from '../../components/graphql/SignIn'

import './Graphqlpage.css'
import { setContext } from '@apollo/client/link/context'


// const httpLink = createHttpLink({
//   uri: 'https://7kb0t63m.directus.app/graphql/system'
// })

const httpLink = new createHttpLink({ uri: process.env.REACT_APP_DIRECTUS_API_URL_SYSTEM });



const GraphqlPage = ({ setIsHomePage }) => {
  const [isActif, setIsActif] = useState(false)
  const [isActifToken, setIsActifToken] = useState(false)
  
  
  const authLink = setContext((_, { headers }) => {
    const token = ""
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

  // const client = new ApolloClient({
  //   uri: 'https://7kb0t63m.directus.app/graphql/',

  //   // link: directionalLink,
  //   cache: new InMemoryCache(),
  //   fetchOptions: {
  //     credentials: 'include'
  //   }
  // })

  useEffect(() => {
    setIsHomePage(false)
  }, [])

  const handleClick = () => {
    setIsActif(!isActif)
  }

  const handleClickToken = () => {
    setIsActifToken(!isActifToken)
  }

  isActifToken
  return (
    
    <div className='main'>
      <div className='container-80'>
        <h1>Page GRAPHQL</h1>

        <ApolloProvider client={clientSystem}>
        <div className='container  mb-20'>
          <button className='card__btn-article' onClick={handleClickToken}>
            {!isActifToken ? `Sign in` : `Annulation`}
          </button>
          {isActifToken && <SignIn />}
        </div>
        </ApolloProvider >
        <br></br>
        <div className='container mb-20'>
          <button className='card__btn-article' onClick={handleClick}>
            {!isActif ? `create a New Post` : `Annulation`}
          </button>

          <p>
            {!isActif
              ? `vous devez etre authentfié préalablement pour effectuer cette action correctement`
              : ``}
          </p>
          {isActif && <CreateArticles />}
          <h2>Accès restreint / collections</h2>
          {/* <GetLocations /> */}
          {/**/}
        </div>
        <GetMusician />
        {/* <GetArticles /> */}
        <h2>Accès public / system</h2>
      <ApolloProvider client={clientSystem}>
          <GetFiles />
          </ApolloProvider >

      </div>
    </div>
  
  )
}
export default GraphqlPage
