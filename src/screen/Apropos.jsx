import React, { useEffect, useState } from 'react'
import Memory from '../components/Memory'
import boomer from '../assets/images/boomer.png'
import partoch from '../assets/images/partoch.png'
import DisplayDev from '../components/DisplayDev'
// import AudioPlayer from '../components/AudioPlayer'
// import audio1 from '../assets/sounds/test.mp3'
// import audio2 from '../assets/sounds/urban-beat.mp3'
// import './Apropos.css'

const Apropos = ({ setIsHomePage }) => {
  const [isactive, setIsactive] = useState(false)
  const [devProject, setDevProject] = useState([])

  useEffect(() => {
    fetch('https://yv3o2geh.directus.app/items/team')
      .then(res => res.json())
      .then(res => setDevProject(res.data))
  }, [])
  console.log(devProject)

  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  // const handleClick = () => {
  //   setIsactive(!isactive)
  // }
  return (
    <div className='bigwrapper-apropos'>
      <div className='wrapper-parallax'>
        <div className='header-apropos'>
          <img className='boomer' src={boomer} alt='boomer' />
          <img className='partoch' src={partoch} alt='partoch' />
          <h1 className='h1-apropos'>A propos</h1>
        </div>

        <div className='wrapper-apropos'>
          {devProject.map(dev => (
            <DisplayDev
              key={dev.id}
              devBck={dev.devBck}
              devAvatar={dev.devAvatar}
              devName={dev.devName}
              devDescription={dev.devDescription}
              devBtn={dev.devBtn}
            />
          ))}
        </div>
        {/* <div className='app-memo'>
          <Memory />
        </div> */}
      </div>
    </div>
  )
}

export default Apropos
