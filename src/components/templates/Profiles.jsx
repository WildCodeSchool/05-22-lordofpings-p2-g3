import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../templates/Profiles'

function Profiles(props) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data.json')
      .then(res => res.json())
      .then(res => setCharacters(res), [])
  })

  console.log('coucou',characters);
 
  }
export default Profiles
