import React from 'react'
import { useEffect, useState } from 'react'
import './Contact.css'
import GroupeRock from '../assets/images/Groupeguitare.jpeg'
import { useForm, ValidationError } from '@formspree/react'

const Contact = ({ setIsHomePage }) => {
  const [state, handleSubmit] = useForm('xvolbrlp')

  useEffect(() => {
    setIsHomePage(false)
  }, [])

  // useEffect(()=>{
  //   console.log('message envoyé'
  // }, [handleSubmit])
  const handleSubmits = e => {
    // e.preventDefault()

   console.log(state)
  }
  return (
    <div className='container-contact'>
      <div className='contact-box'>
        <img src={GroupeRock} className='left'></img>
        <form onSubmit={handleSubmit}>
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
                id='email'
                type='email'
                name='email'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>
            <div>
              <textarea
                placeholder='Votre message ici'
                className='field-contact'
                id='message'
                name='message'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              type='submit'
              disabled={state.submitting}
              className='bouton-contact'
            >
              Envoyer
            </button>
            {state.succeeded ?<p>Nous avons bien reçu votre demande !</p> : <p></p>}
          </div>
        </form>

     
      </div>
    </div>
  )
}
export default Contact
