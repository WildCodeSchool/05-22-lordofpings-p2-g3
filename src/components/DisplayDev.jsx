import React from 'react'
import './DisplayDev.css'

function DisplayDev({ devName, devDescription, devAvatar, devBck, devBtn }) {
  console.log({ devBck })
  return (
    <div>
      <div className='container-apropos'>
        <div
          className='banner-apropos'
          style={{ backgroundImage: `${devBck}` }}
        ></div>
        <img className='img-apropos' src={devAvatar} alt={devName} />
        <h1 className='name-apropos'>{devName}</h1>
        <p className='description-apropos'>{devDescription}</p>
        <button
          className='btn-apropos'
          onClick={() => (location.href = `${devBtn}`)}
        >
          Ma musique
        </button>
      </div>
    </div>
  )
}

export default DisplayDev
