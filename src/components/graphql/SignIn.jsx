import React, { useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { Link } from 'react-router-dom'
import close from '../../assets/images/knob--round.png'

const POST_LOGIN = gql`
  mutation genereToken($email: String!, $password: String!) {
    auth_login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const [generateToken, { data, loading, error }] = useMutation(POST_LOGIN)
  let navigate = useNavigate()
  const shouldRedirect = false

  useEffect(() => {}, [generateToken])

  useEffect(() => {
    shouldRedirect && navigate('/')
  }, [])

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
      setSuccess(!success)
      success && navigate('/', { replace: true })
    }
  }

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
                {success && !loading && !error ? (
                  <Link to='/'>Se connecter</Link>
                ) : (
                  'Se connecter'
                )}
              </button>

              {loading && <div className='error'>{'loading...'}</div>}
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
