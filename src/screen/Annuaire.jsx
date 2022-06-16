import Formulaire from '../components/Formulaire'
import React, { useEffect } from 'react'
import './Annuaire.css'

const Annuaire = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <>
      <Formulaire />
    </>
  )
}

export default Annuaire
