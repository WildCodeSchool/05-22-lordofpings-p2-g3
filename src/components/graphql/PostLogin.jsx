import React from 'react'
import { gql, useMutation } from '@apollo/client'

const POST_LOGIN = gql`
  mutation login {
    auth_login(email: "v.degermain@gmail.com", password: "29101981") {
      access_token
      refresh_token
    }
  }
`

const PostLogin = () => {
  const { loading, error, data } = useMutation(POST_LOGIN)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className='main'>
      <div className='container-80'>
        <h1>Login</h1>
        <button>Log in</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}

export default PostLogin
