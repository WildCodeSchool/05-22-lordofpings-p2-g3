import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const GraphqlPage = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  const { data } = useQuery(gql`
    query location{
      locations {
        name
        location
      }
    }
  `)
  // const { data } = useQuery(gql`
  //   query musicien {
  //     Musican {
  //       status
  //       instruments
  //       id
  //       status
  //     }
  //   }
  // `)
    console.log(data)


  return (
    <div className='main'>
      <div className='container-80'>
        <h1>Page GRAPHQL</h1>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default GraphqlPage
