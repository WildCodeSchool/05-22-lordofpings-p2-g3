import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_FILE = gql`
  query files {
    files {
      filename_disk
    }
  }
`

const GetArticles = () => {
  const { loading, error, data } = useQuery(GET_FILE)
  console.log(data)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className='container-80'>
      <h1>GET FILE / SYSTEM </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default GetArticles
