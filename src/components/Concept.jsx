import React, { useState, useEffect } from 'react'
import Aos from 'aos'

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
        // console.log(animText)
        // setAnimText(true)
      }
    })
  }, [])

  return (
    <>
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
          Effectuer votre recherche pour trouver d'autres musiciens selon vos
          critères.
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
    </>
  )
}

export default Concept
