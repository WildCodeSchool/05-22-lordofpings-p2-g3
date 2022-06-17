import React, { useState, useEffect } from 'react'

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
    <button onClick={togglePlayBack} icon labelPosition='left'>
      <div name={playing ? 'pause' : 'play'}>play</div>
      {playing ? 'Pause' : 'Play'}
    </button>
  )
}

export default AudioPlayer
