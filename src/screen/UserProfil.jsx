import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../contexts/UserContext'
const DIRECTUS_URL = 'https://yv3o2geh.directus.app'

const UserProfil = ({ setIsHomePage }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])

  const { userInfo } = useContext(UserContext);

  const token =
    localStorage.getItem('rock-your-band') != null
      ? '' || localStorage.getItem('rock-your-band').split('"')[1]
      : ''

  const { id } = useParams()
  useEffect(() => {
    setIsHomePage(false)
  }, [userInfo])

  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  
  // console.log(token, `${DIRECTUS_URL}/users/me`)

  useEffect(() => {
    axios
      .get(`${DIRECTUS_URL}/users/me`, config)
      .then(res => {
        console.log(res.data)
        setData(res.data)
        /** USeCOntext MAJ */
        userInfo.id = res.data.id
        userInfo.avatar = res.data.avatar
        userInfo.langage = res.data.langage
        /***  */
        console.log('context userProfil',userInfo)
      })
      .catch(error => {
        console.error(error.response.status)
        if (error.response.status === 401) {
          setError('vous devez vous connecter pour acceder a votre profil')
        }else{
            setError(error)
        }
        
      })
  }, [])

  return (
    <div className='main'>
      <h1> User n°{id} </h1>
      {error && <pre>{error}</pre>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default UserProfil
