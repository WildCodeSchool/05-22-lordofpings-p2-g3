import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import './Memory.css'
import batterie from '../assets/images/img-memo/batterie-1.png'
import flute from '../assets/images/img-memo/flute-1.png'
import guitare from '../assets/images/img-memo/guitare-1.png'
import piano from '../assets/images/img-memo/piano-1.png'
import saxo from '../assets/images/img-memo/saxo-1.png'
import violon from '../assets/images/img-memo/violon-1.png'
const cardImages = [
  { src: `${batterie}`, matched: false },
  { src: `${flute}`, matched: false },
  { src: `${guitare}`, matched: false },
  { src: `${piano}`, matched: false },
  { src: `${saxo}`, matched: false },
  { src: `${violon}`, matched: false }
]

function Memory() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTurns(0)
  }

  // console.log(cards, turns);

  // handle a choice
  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 select cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              // console.log("c'est bon!");
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        // console.log('those do not match');
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  //  reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // start new game automagically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className='wrapper-memory'>
      <h1>Memory Card</h1>
      <button className='btn-memory' onClick={shuffleCards}>
        Nouvelle partie
      </button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Truns: {turns}</p>
    </div>
  )
}

export default Memory
