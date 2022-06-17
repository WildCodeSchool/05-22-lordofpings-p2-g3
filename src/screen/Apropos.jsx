import React, { useEffect } from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import AudioPlayer from '../components/AudioPlayer'
import audio1 from '../assets/sounds/test.mp3'
import audio2 from '../assets/sounds/urban-beat-20679.mp3'
import './Apropos.css'

const Apropos = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <div>
      <h1>A propos</h1>
      <h2>Mon PLayer</h2>
      <div>
        <AudioPlayer url={audio2} />
      </div>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Apropos
