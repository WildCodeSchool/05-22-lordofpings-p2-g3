import React, { useEffect, useState } from 'react'

import AudioPlayer from '../components/AudioPlayer'
import audio1 from '../assets/sounds/test.mp3'
import audio2 from '../assets/sounds/urban-beat.mp3'
import './Apropos.css'
import { Link } from 'react-router-dom'

const Apropos = ({ setIsHomePage }) => {
  const [isactive, setIsactive] = useState(false)

  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  const handleClick = () => {
    setIsactive(!isactive)
  }
  return (
    <div className='main'>
      <h1>A propos</h1>
      <div className='about__container' />
      <h2>Mon Player</h2>

      <AudioPlayer
        onClick={handleClick}
        className={`about__container-player  ${
          isactive ? 'rotate' : 'notRotate'
        }`}
        url={audio2}
      />

      <Link to='/graph'>graql</Link>
    </div>
  )
}

export default Apropos
