import React, { useEffect, useState } from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import AudioPlayer from '../components/AudioPlayer'
import audio1 from '../assets/sounds/test.mp3'
import audio2 from '../assets/sounds/urban-beat-20679.mp3'
import './Apropos.css'

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
        className={`about__container-player  ${isactive ? 'rotate' : 'notRotate'}`}
        url={audio2}
      />
    </div>
  )
}

export default Apropos
