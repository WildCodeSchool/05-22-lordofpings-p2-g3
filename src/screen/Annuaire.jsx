import React from 'react'
import { useEffect } from 'react'
// import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'

import './Annuaire.css'
import Profiles from '../components/Profiles'

const Annuaire = ({ setIsHomePage }) => {
  // const [isDisplayMap, setIsDisplayMap] = useState(false)
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <div className='container-80'>
      <h1>Bienvenue sur le groupe de recherche de musiciens n°1!</h1>
      <Formulaire />

      {/* <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null} */}
      <Profiles />
    </div>
  )
}

export default Annuaire
