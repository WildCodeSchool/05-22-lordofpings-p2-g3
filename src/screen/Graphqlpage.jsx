import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_LOCATIONS = gql`
  query location {
    locations {
      name
      location
    }
  }
`

const GET_MUSICIAN = gql`
  query musicien {
    musican {
      status
      instruments
      id
      status
    }
  }
`

const GET_FILE = gql`
  query files {
    files {
      filename_disk
    }
  }
`
const GET_ARTICLES = gql`
query articles {
  articles {
    id
    status
    author {
      email
      location
      password
      first_name
      avatar
    }
  }
}`

const GraphqlPage = ({ setIsHomePage }) => {
  // const [musicien, setMusicien] = useState({})

  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  const { loading, error, data } = useQuery(GET_ARTICLES)
  // useEffect(() => {
  //   { loading, error, data }=
  // }, [])

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log(data)

  return (
    <div className='main'>
      <div className='container-80'>
        <h1>Page GRAPHQL</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default GraphqlPage
