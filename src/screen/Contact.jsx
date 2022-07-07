import React from 'react'
import { useEffect, useState } from 'react'
import './Contact.css'
import GroupeRock from '../assets/images/Groupeguitare.jpeg'

const Contact = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  return (
    <form className='container-contact-global'>
      <div className='container-contact'>
        <div className='contact-box'>
          <img src={GroupeRock} className='left'></img>
          <div className='right'>
            <h2 className='titre2-contact'>Contactez-nous!</h2>
            <div>
              <input
                placeholder='Votre nom'
                className='field-contact'
                type='text'
              />
            </div>
            <div>
              <input
                placeholder='Votre prénom'
                className='field-contact'
                type='text'
              />
            </div>
            <div>
              <input
                placeholder='Votre e-mail'
                className='field-contact'
                type='text'
              />
            </div>
            <div>
              <textarea
                placeholder='Votre message ici'
                className='field-contact'
              />
            </div>
            <button className='bouton-contact'>Envoyer</button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default Contact
