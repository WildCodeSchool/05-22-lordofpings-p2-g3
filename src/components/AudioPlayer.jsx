import React, { useState, useEffect } from 'react'
import image from '../assets/images/pause-play-button-64.png'

const AudioPlayer = ({ url }) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const togglePlayBack = () => setPlaying(!playing)

  useEffect(() => {
    if (playing) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return (
    <div onClick={togglePlayBack} className='player__container'>
      <img className='player__img-play' src={image}/>
      <div>{playing ? 'Pause' : 'Play'}</div>
    </div>
  )
}

export default AudioPlayer
