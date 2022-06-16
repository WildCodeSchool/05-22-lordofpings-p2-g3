import { useState, useEffect } from 'react'
import './Profiles.css'

function Profiles(props) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://github.com/kinotonik/jsonapi/blob/gh-pages/data.json')
      .then(res => res.json())
      .then(res => setCharacters(res), [])
  })

  return (
    <div className='container'>
      <img
        className='chara-img'
        src={characters.picture.medium}
        alt={characters.name}
      />
      <p>
        {characters.name.title} {characters.name.first} {characters.name.last}{' '}
      </p>
      <p>{characters.location.city}</p>
    </div>
  )
}

export default Profiles
