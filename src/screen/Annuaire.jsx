import Formulaire from '../components/Formulaire'
import React, { useEffect } from 'react'
import './Annuaire.css'

const Annuaire = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <div className='container-80'>
      <h1>Bienvenu sur le groupe de recherche de musiciens numéro 1</h1>
      <Formulaire />
    </div>
  )
}

export default Annuaire
