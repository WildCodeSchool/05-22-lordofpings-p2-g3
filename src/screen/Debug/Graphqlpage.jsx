import React, { useEffect, useStae } from 'react'
import GetArticles from '../../components/graphql/GetArticles'
import GetLocations from '../../components/graphql/GetLocations'

const GraphqlPage = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  return (
    <div className='main'>
      <div className='container-80'>
        <h1>Page GRAPHQL</h1>
        {/* <GetArticles /> */}
        <GetLocations />
      </div>
    </div>
  )
}
export default GraphqlPage
