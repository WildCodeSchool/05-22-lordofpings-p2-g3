import React from 'react'
import './SingleCard.css'
import useSound from 'use-sound'
import boopSfx from '../assets/sounds/swish-memo.mp3'
import cover from '../assets/images/img-memo/cover.png'

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const [playbackRate, setPlaybackRate] = React.useState(1.5)

  const [play] = useSound(boopSfx, {
    playbackRate,
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true
  })

  const handleClick = () => {
    if (!disabled) {
      setTimeout(() => {
        // Do something
        handleChoice(card)
        setPlaybackRate(playbackRate)
        play()
      }, 200)
    }
  }

  return (
    <div className='card-memo'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src={cover}
          onClick={handleClick}
          alt='card back'
        />
      </div>
    </div>
  )
}

export default SingleCard
