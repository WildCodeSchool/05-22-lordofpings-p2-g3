import React, { useEffect, useState, useContext } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { Link } from 'react-router-dom'
import close from '../../assets/images/knob--round.png'
import LoadingSpinner from '../LoadingSpinner'
import UserContext from '../../contexts/UserContext'
import axios from 'axios'

const POST_LOGIN = gql`
  mutation genereToken($email: String!, $password: String!) {
    auth_login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`

// const USER_ME = gql`
//   query userme {
//     users_me {
//       id
//       first_name
//       last_name
//       email
//       title
//       avatar {
//         filename_disk
//       }
//       description
//       theme
//     }
//   }
// `

const SignIn = () => {
  const DIRECTUS_URL = 'https://yv3o2geh.directus.app'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [userme, setUserMe] = useState('')
  const [nextPageRedirect, setNextPageRedirect] = useState(false)

  const { userInfo, setUserInfo } = useContext(UserContext)

  const [generateToken, { data, loading, error }] = useMutation(POST_LOGIN)

  // const { userme } = useQuery(USER_ME)

  let navigate = useNavigate()

  useEffect(() => {}, [generateToken, data])

  // useEffect(() => {
  //   let config = {
  //     headers: {
  //       Authorization:
  //         'Bearer ' + localStorage.getItem('rock-your-band').split('"')[1]
  //     }
  //   }
  //   axios
  //     .get(`${DIRECTUS_URL}/users/me`, config)
  //     .then(res => {
  //       console.log(res.data)

  //       /** USeCOntext MAJ */
  //       userInfo.id = res.data.id
  //       userInfo.avatar = res.data.avatar
  //       userInfo.langage = res.data.langage
  //       /***  */
  //       console.log('context userProfil', userInfo)
  //     })
  //     .catch(error => {
  //       console.error(error.response.status)
  //     })
  // }, [generateToken])

  const handleSubmit = async event => {
    event.preventDefault()
    // the mutate function also doesn't return a promise

    const genToken = await generateToken({ variables: { email, password } })
    if (!error && !loading) {
      localStorage.setItem(
        'rock-your-band',
        JSON.stringify(data.auth_login.access_token)
      )
      console.log('local', localStorage.getItem('rock-your-band'))
      console.log('token api', data.auth_login.access_token)
      const token =
        localStorage.getItem('rock-your-band') != null
          ? '' || localStorage.getItem('rock-your-band').split('"')[1]
          : ''

      let config = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
      axios
        .get(`${DIRECTUS_URL}/users/me`, config)
        .then(response => response.data)
        .then(res => {
          console.log('user me signin data', res.data)
          setUserMe(res.data)

          /*** MAJ du userContext */
          setUserInfo({
            ...userInfo,
            avatar: res.data.avatar,
            email: res.data.email,
            language: res.data.language
          })
        })

        .catch(error => {
          console.error(error.response.status)
        })
      setSuccess(!success)

      /****Valorisation du context user ici apres validation de l'authntification */

      navigate('/')
    }
  }

  // useEffect(() => {

  //   console.log('userme api test', userme)
  //   console.log('context test userInfo', userInfo)
  // }, [success])

  const handleClickClose = () => {}

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__container-bg'>
          <div className='login__container-form  flex-column flex-center'>
            <h2>Sign in Form</h2>
            <Link to='/'>
              <img onClick={handleClickClose} className='close' src={close} />
            </Link>
            <form
              className='login flex-column flex-center'
              onSubmit={handleSubmit}
            >
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='john.doe@gmail.com'
                onChange={event => setEmail(event.target.value)}
              />
              <label htmlFor='password'>Mot de passe</label>
              <input
                type='password'
                placeholder='*******'
                onChange={event => setPassword(event.target.value)}
              />

              <button disabled={loading} type='submit'>
                {'Se connecter'}
              </button>
              {loading && <LoadingSpinner className='error' />}
              {error && (
                <>
                  <span className='state'>⭕</span>
                  <div className='error'>{error.message}</div>
                </>
              )}
              {success && !loading && !error && (
                <>
                  <span className='state'>{'✅'}</span>

                  <div className='error'>
                    {/* <pre>
                      {JSON.stringify(data.auth_login.access_token, null, 2)}
                    </pre> */}
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
