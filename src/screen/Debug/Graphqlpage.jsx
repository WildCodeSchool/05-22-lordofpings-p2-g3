import React, { useEffect, useStae } from 'react'
import GetArticles from '../../components/graphql/GetArticles'
import GetLocations from '../../components/graphql/GetLocations'
import PostLogin from '../../components/graphql/PostLogin'
import GetFiles from '../../components/graphql/GetFiles'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import GetMusician from '../../components/graphql/GetMusician'

const GraphqlPage = ({ setIsHomePage }) => {
  const clientSystem = new ApolloClient({
    uri: 'https://7kb0t63m.directus.app/graphql/system/',

    // link: directionalLink,
    cache: new InMemoryCache(),
    fetchOptions: {
      credentials: 'include'
    }
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

  return (
    <div className='main'>
      <div className='container-80'>
        <h1>Page GRAPHQL</h1>
        <h2>Accès restreint / collections</h2>
        {/* <GetLocations /> */}
        {/**/}
       
          <GetMusician />
        {/* <GetArticles /> */}
        <h2>Accès public / system</h2>
        <ApolloProvider client={clientSystem}>
          <GetFiles />
        </ApolloProvider>
      </div>
    </div>
  )
}
export default GraphqlPage
