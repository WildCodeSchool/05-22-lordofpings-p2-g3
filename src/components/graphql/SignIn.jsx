import React, { useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'

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
  


  const handleSubmit = event => {
    event.preventDefault()
    // the mutate function also doesn't return a promise
    generateToken({ variables: { email, password } })
    if (!error && !loading) {
      localStorage.setItem('rock-your-band', JSON.stringify(data.auth_login.access_token));
      setSuccess(!success)
    }
  }
  console.log(data)
  return (
    <div>
      <h2>Sign in Form</h2>
      <form onSubmit={handleSubmit}>
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
          Se connecter
        </button>
        {loading && <p>{'loading...'}</p>}
        {error && <><span>⭕</span><p>{error.message}</p></>}
        {success && !loading && !error && (
          <>
            <span >{'✅'}</span>
<p><pre>{JSON.stringify(data.auth_login.access_token, null, 2)}</pre></p>
          </>
        )}
      </form>
    </div>
  )
}

export default SignIn
