import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const CREATE_POST = gql`
  mutation article($status: String!, $slug: String!) {
    create_articles_items(data: [{ status: $status, slug: $slug }]) {
      id
    }
  }
`

const CreateArticles = () => {
  const [slug, setSlug] = useState('')
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST)

  const handleCreatePost = event => {
    event.preventDefault()
    // the mutate function also doesn't return a promise
    createPost({ variables: { slug, status } })
    if (!error && !loading) {
      setSuccess(!success)
    }
  }

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleCreatePost}>
        <label htmlFor='slug'>Slug</label>
        <input
          placeholder='/mon-slug-exemple'
          onChange={event => setSlug(event.target.value)}
        />
        <label htmlFor='status'>Status</label>
        <input
          placeholder='{published,draft}'
          onChange={event => setStatus(event.target.value)}
        />
        <button disabled={loading} type='submit'>
          Submit
        </button>
        {loading && <p>{'loading...'}</p>}
        {error && <><p>⭕</p><p>{error.message}</p></>}

        {success && !loading && !error && (
          <>
            <p>{'✅'}</p>
            <pre>{JSON.stringify(data.create_articles_items[0], null)}</pre>
          </>
        )}
      </form>
    </div>
  )
}

export default CreateArticles
