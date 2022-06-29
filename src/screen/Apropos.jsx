import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import DisplayDev from '../components/DisplayDev'
import AudioPlayer from '../components/AudioPlayer'
import audio1 from '../assets/sounds/test.mp3'
import audio2 from '../assets/sounds/urban-beat-20679.mp3'

// import './Apropos.css'

const Apropos = ({ setIsHomePage }) => {
  const [isactive, setIsactive] = useState(false)
  const [devProject, setDevProject] = useState([])

  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data_dev_p2.json')
      .then(res => res.json())
      .then(res => setDevProject(res.data))
  }, [])
  console.log(devProject)

  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  const handleClick = () => {
    setIsactive(!isactive)
  }
  return (
    <div className='main'>
      <div>
        <h1>A propos</h1>
      </div>
      <div className='wrapper-apropos'>
        {devProject.map(dev => (
          <DisplayDev
            key={dev.id}
            devName={dev.devName}
            devBack={dev.devBack}
            devAvatar={dev.devAvatar}
            devBtn={dev.devBtn}
          />
        ))}
      </div>
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
