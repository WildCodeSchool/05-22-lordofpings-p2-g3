import React from 'react'
import { useEffect } from 'react'

import Formulaire from '../components/Formulaire'

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
