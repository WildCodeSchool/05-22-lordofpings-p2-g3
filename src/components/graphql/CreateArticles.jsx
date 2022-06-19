import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const CREATE_POST = gql`
  mutation articles {
    create_articles_items(data: [{ status: $status, slug: $slug }]) {
      id
    }
  }
`

const CreateArticles = () => {
  const [slug, setSlug] = useState('')
  const [status, setStatus] = useState('')
  const [createPost, { loading, error }] = useMutation(CREATE_POST)

  const handleCreatePost = event => {
    event.preventDefault()
    // the mutate function also doesn't return a promise
    createPost({ variables: { slug, status } })
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
        {error && <p>{error.message}</p>}
      </form>
    </div>
  )
}

export default CreateArticles
