import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers'
import React, { useState, useEffect } from 'react'
import image from '../assets/images/pause-play-button.png'
import './AudioPlayer.css'

const AudioPlayer = ({ url, title }) => {
  const track = useState(0)
  const [audio] = useState(new Audio(url[0])) //HTML audio element dans le state
  const [playing, setPlaying] = useState(false)
  const [next, setNext] = useState(false)
  const [prev, setPrev] = useState(false)

  const regex = '^\\(.+\\)*(.+)\\.(.+)$'
  const togglePlayBack = () => setPlaying(!playing)
  console.log(title)
  useEffect(() => {
    if (playing) {
      audio.play()
      // } else if (next) {
      //   audio.pause()
      //   audio.next()
      // } else if (prev) {
      //   audio.pause()
      //   audio.next()
      //   setNext(false)
      // } else if (track){
      //   audio.pause();
    } else {
      audio.pause()
    }
  }, [playing])

  const handleClick = index => {
    console.log(title[index])
    setNext(true)
    // useState(new Audio(url[index]))
  }
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
      <div className='playstop'>{playing ? 'Pause' : 'Play'}</div>
      {title.map((elt, index) => {
        return (
          <div key={index} onClick={() => handleClick(index)} className='title'>
            {elt.split('/').splice(-1)}
          </div>
        )
      })}
    </div>
  )
}

export default AudioPlayer
