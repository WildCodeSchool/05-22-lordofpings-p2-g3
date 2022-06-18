import React from 'react'
import { gql , useQuery } from '@apollo/client'

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

const GetMusician = () => {
  const { loading, error, data } = useQuery(GET_MUSICIAN)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className='main'>
      <div className='container-80'>
        <h1>GET MUSCIAN</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default GetMusician
