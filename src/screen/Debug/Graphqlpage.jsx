import React, { useEffect, useState } from 'react'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import CreateArticles from '../../components/graphql/CreateArticles'

import AudioPlayer from '../../components/AudioPlayer'
import SignIn from '../../components/graphql/SignIn'

import './Graphqlpage.css'
import { setContext } from '@apollo/client/link/context'
import GetLocations from '../../components/graphql/GetLocations'
import audio1 from '../../assets/sounds/lofi-study.mp3'
import audio2 from '../../assets/sounds/test.mp3'
import audio3 from '../../assets/sounds/urban-beat.mp3'
const playlist=[audio1, audio2,audio3];

const httpLink = new createHttpLink({
  uri: process.env.REACT_APP_DIRECTUS_API_URL_SYSTEM
})

const GraphqlPage = ({ setIsHomePage }) => {
  const [isActif, setIsActif] = useState(false)
  const [isActifToken, setIsActifToken] = useState(false)

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

  const client = new ApolloClient({
    uri: 'https://yv3o2geh.directus.app/graphql/',

    // link: directionalLink,
    cache: new InMemoryCache(),
    fetchOptions: {
      credentials: 'include'
    }
  })

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
        <h1>Votre player</h1>

        <AudioPlayer url={[audio1, audio2, audio3]} title={[audio1, audio2, audio3]}></AudioPlayer>
        <h1>Page GRAPHQL</h1>

        <ApolloProvider client={clientSystem}>
          <div className='container  mb-20'>
            <button className='card__btn-article' onClick={handleClickToken}>
              {!isActifToken ? `Sign in` : `Annulation`}
            </button>
            {isActifToken && <SignIn />}
          </div>
        </ApolloProvider>
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
        </div>

  
        <h2>Accès public / system</h2>
        <ApolloProvider client={client}>
          <GetLocations />
        </ApolloProvider>
      </div>
    </div>
  )
}
export default GraphqlPage
