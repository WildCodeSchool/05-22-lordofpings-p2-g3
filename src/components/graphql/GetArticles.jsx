import React from 'react'
import { gql, useQuery } from '@apollo/client'

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
  }
`

const GetArticles = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES)
  console.log(data)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className='container-80'>
      <h1>GET ARTICLE</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default GetArticles
