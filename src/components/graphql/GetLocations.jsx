import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_LOCATIONS = gql`
query locations {
	locations {
		name
		location
	}

}

`
	// locations_aggregated {
	// 	countAll
	// 	group
	// }
const GetLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS)

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

export default GetLocations
