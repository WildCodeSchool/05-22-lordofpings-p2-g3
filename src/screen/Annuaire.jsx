import React from 'react'
import { useState, useEffect } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'

import './Annuaire.css'

const Annuaire = ({ setIsHomePage }) => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <>
      <Formulaire />
      <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null}
    </>
  )
}

export default Annuaire
