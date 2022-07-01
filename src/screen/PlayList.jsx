import React, { useEffect, useState } from 'react'
import './PlayList.css'
import AudioPlayer from '../components/AudioPlayer'
import audio1 from '../assets/sounds/lofi-study.mp3'
import audio2 from '../assets/sounds/test.mp3'
import audio3 from '../assets/sounds/urban-beat.mp3'

import './Apropos.css'
import { Link } from 'react-router-dom'

const Playlist = ({ setIsHomePage }) => {
  const playlist = [audio1, audio2, audio3]
  const [isactive, setIsactive] = useState(false)

  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  const handleClick = () => {
    setIsactive(!isactive)
  }
  return (
    <div className='playlist-main'>
      <h1>A propos</h1>
      <div className='about__container' />
      <h2>Mon Player</h2>
      <AudioPlayer
        url={[audio1, audio2, audio3]}
        title={[audio1, audio2, audio3]}
      ></AudioPlayer>
      {/* <AudioPlayer
                onClick={handleClick}
                className={`about__container-player  ${isactive ? 'rotate' : 'notRotate'
                    }`}
                url={audio2}
            /> */}

      <Link to='/graph'>graql</Link>
    </div>
  )
}

export default Playlist
