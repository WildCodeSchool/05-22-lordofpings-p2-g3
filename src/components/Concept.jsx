import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import Equalizer from './Equalizer'

import 'aos/dist/aos.css'
import './Concept.css'

function Concept() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  // -------------------
  const [animText, setAnimText] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      //   console.log(scrollTop, scrollHeight, clientHeight)
      if (
        clientHeight + scrollTop >= scrollHeight - 600 &&
        animText === false
      ) {
        console.log(animText)
        setAnimText(true)
      }
    })
  }, [])

  useEffect(() => {
    animText && animate_text()
  }, [animText])

  function animate_text() {
    let delay = 60,
      delay_start = 0,
      contents,
      letters

    document.querySelectorAll('.animate-text').forEach(elem => {
      contents = elem.textContent.trim()
      elem.textContent = ''
      letters = contents.split('')
      elem.style.visibility = 'visible'

      letters.forEach((letter, index_1) => {
        setTimeout(() => {
          let span = document.createElement('span')
          span.innerHTML = letter.replace(/ /, '&nbsp;')
          elem.appendChild(span)
        }, delay_start + delay * index_1)
      })
      delay_start += delay * letters.length
    })
  }

  return (
    <>
      {/* <h2>Rock your Band</h2> */}
      <div data-aos='fade-up' className='wrapper_text'>
        <p className='animate-text'>
          Ce site est une scène numérique pour être en relation avec d'autres
          musiciens.
        </p>

        <h3 className='title_concept'>Notre concept</h3>

        <p className='animate-text'>
          C'est un espace permettant de prospecter dans le but de trouver la
          personne ou le groupe avec qui vous souhaitez développer une relation
          autour d'une même passion !
        </p>
        <h3 className='title_concept'>Comment ça marche ?</h3>
        <p className='animate-text'>
          Vous filtrez votre recherche avant de partager des momments.
        </p>
        <h3 className='title_concept'>N'hésitez plus !</h3>
        <p className='animate-text'>
          La musique est si vaste et le monde si petit !
        </p>
        <p className='animate-text'>
          Et n'oubliez pas que ... quand Chuck Norris joue dans un orchestre,
          c’est le chef qui le suit.
        </p>
      </div>
      <div className='equalizer'>
        <Equalizer />
      </div>
    </>
  )
}

export default Concept
