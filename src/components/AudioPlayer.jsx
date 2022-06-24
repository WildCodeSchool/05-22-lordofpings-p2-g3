import React, { useState, useEffect } from 'react'
import image from '../assets/images/pause-play-button.png'
import './AudioPlayer.css'
const AudioPlayer = ({ url ,title }) => {
  const [audio] = useState(new Audio(url)) //HTML audio element dans le state
  const [playing, setPlaying] = useState(false)

  const togglePlayBack = () => setPlaying(!playing)

  useEffect(() => {
    if (playing) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [playing])

  //Gestion de la fin de lecture du mp3 et rafraichissment du composant puis on set la lecture a false
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return (
    <div onClick={togglePlayBack} className='player__container'>
      <img
        className={`player  ${playing ? 'rotate' : 'notRotate'}`}
        src={image}
      />
      <div>{playing ? 'Pause' : 'Play'}</div>
      <span className={"title"}>{title}</span>
    </div>
  )
}

export default AudioPlayer
