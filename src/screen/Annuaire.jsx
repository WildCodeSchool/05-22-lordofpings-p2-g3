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
    <div className='container-80'>
      <h1>Bienvenu sur le groupe de recherche de musiciens numéro 1</h1>
      <Formulaire />
      <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null}
    </div>
  )
}

export default Annuaire
