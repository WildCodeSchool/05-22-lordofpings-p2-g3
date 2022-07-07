import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import facebookImg from '../assets/images/logoResaux/facebook.png'
import instagramImg from '../assets/images/logoResaux/instagram.png'
import youtubeImg from '../assets/images/logoResaux/youtube.png'
import axios from 'axios'
import UserContext from '../contexts/UserContext'
const DIRECTUS_URL = 'https://yv3o2geh.directus.app'

const UserProfil = ({ setIsHomePage }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])

  const { userInfo, setUserInfo } = useContext(UserContext)

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

  const fetchData = async () => {
    try {
      let res = await axios.get(`${DIRECTUS_URL}/users/me`, config)
      setData(res.data.data)
    } catch (error) {
      setError(
        'vous devez vous connecter pour acceder a votre profil',
        error.message
      )
    } finally {
      console.log(error.message)
    }
  }

  useEffect(() => {
    axios
      .get(`${DIRECTUS_URL}/users/me`, config)
      .then(res => {
        console.log(res.data)
        setData(res.data.data)
        const user = userInfo
        console.warn('user--->',user)
        setUserInfo({
          ...userInfo,
          language: res.data.data.language,
          avatar: res.data.data.avatar,
          test:'mlkmlk'
        })
        
        const user2=userInfo
        console.warn('user after state--->', user2)
        console.log('context userProfil.jsx', userInfo)
      })
      .catch(error => {
        console.error(error.response.status)
        if (error.response.status === 401) {
          setError('vous devez vous connecter pour acceder a votre profil')
        } else {
          setError(error)
        }
      })
  }, [])

  return (
    <div className='main'>
      <h1> Mon profil {data.id} </h1>
      {error && <pre>{error}</pre>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className='profile-container'>
        <div className='profile-gutter'>
          <div className='profile-coninfo'>
            {console.log('url vart', data)}
            {/* `${DIRECTUS_URL}/assets/${data.avatar}` */}
            <img
              src={`${DIRECTUS_URL}/assets/${data.avatar}`}
              alt='profile photo'
              className='profile-image'
            />
          </div>
          <div className='profile-info'>
            <div className='profile-liens'>
              <div className='profile-social'>
                <div className='profile-name'>
                  <h3>
                    {data.first_name} {data.last_name}
                  </h3>
                  <h4>{data.description}</h4>
                </div>
                <div className='profile-resbtn'>
                  <div className='profile-reseaux'>
                    <div className='profile-resfain'>
                      <a href='https://www.facebook.com/'>
                        <img src={facebookImg} alt='logo facebook'></img>
                      </a>
                    </div>
                    <div className='profile-resfain'>
                      <a href='https://www.instagram.com/?hl=fr'>
                        <img src={instagramImg} alt='logo twitter'></img>
                      </a>
                    </div>
                    <div className='profile-resyoutub'>
                      <a href='https://www.youtube.com/'>
                        <img src={youtubeImg} alt='logo youtube'></img>
                      </a>
                    </div>
                  </div>
                  <button className='profile-totobtn'>
                    <span>Contact</span>
                  </button>
                </div>
              </div>
              <div className='profile-title'>
                <h4>Email : </h4> <p>{data.email} </p>
              </div>
              <div className='profile-cubes'>
                <div className='profile-cube1'>
                  <h4>Title : </h4>
                  <h6>{data.title} </h6>
                </div>
                <div className='profile-cube2'>
                  <h4>Spec: </h4>
                  <h6> {data.tags?.map((elt, index) => elt).join(', ')}</h6>
                </div>
                <div className='profile-cube3'>
                  <h4>Localisation:</h4>
                  <h6>{data.location}</h6>
                  <h6>{}</h6>
                </div>
                <div className='profile-cube4'>
                  <h4>language:</h4>
                  <h6>{data.language}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfil
