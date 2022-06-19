import React from 'react'
import { gql, useMutation } from '@apollo/client'

const AUTH_LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    auth_login(email: $email, password: $password) {
      access_token
      refresh_token
      expires
    }
  }
`

const AuthLogin = () => {
  let input
  return (
    <Mutation mutation={AUTH_LOGIN}>
      {(addPerson, { data, loading, error }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              addPerson({
                variables: { email: 'v.degermain@gmail.com', password: 'd...' }
              })
              input.value = ''
            }}
          >
            <input
              ref={node => {
                input = node
              }}
            />
            <button type='submit'>Add Person</button>
            {loading && <div>adding person…</div>}
            {data && <div>response data</div>}
            {error && <div>Error adding person…</div>}
          </form>
        </div>
      )}
    </Mutation>
  )
}

export default AuthLogin
