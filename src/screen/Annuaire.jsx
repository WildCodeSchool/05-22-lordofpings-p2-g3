import React from 'react'
import { useState } from 'react'
import { Leaflet } from '../components/Leaflet'

import './Annuaire.css'

const Annuaire = () => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)

  return (
    <>
      <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null}
    </>
  )
}

export default Annuaire
