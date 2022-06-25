import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserProfil = ({ setIsHomePage }) => {
  const { id } = useParams()
  useEffect(() => {
    setIsHomePage(false)
  }, [])
  return (
    <div className='main'>
      <h1> User n°{id} </h1>
    </div>
  )
}

export default UserProfil
