import React from 'react'
import { useEffect } from 'react'
// import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import { Leaflet } from '../components/Leaflet'
import Profiles from '../components/Profiles'

import './Annuaire.css'

const Annuaire = ({ setIsHomePage }) => {
  // const [isDisplayMap, setIsDisplayMap] = useState(false)
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  return (
    <div className='container-80'>
      <div className='div1'>
        <h1>Bienvenue sur le groupe de recherche de musiciens n°1!</h1>
        <Formulaire />
      </div>
      <div className='div2'>
        {/* <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
        {isDisplayMap ? <Leaflet /> : null} */}
        <Profiles />
      </div>
      <div className='div3'>
        <Leaflet />
      </div>
    </div>
  )
}

export default Annuaire
