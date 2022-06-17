import Formulaire from '../components/Formulaire'
import React, { useEffect } from 'react'
import './Annuaire.css'
import Profiles from '../components/Profiles'

const Annuaire = ({ setIsHomePage }) => {
  useEffect(() => {
    return setIsHomePage(false)
  }, [])

  return (
    <> 
   <Formulaire />
    <Profiles />  
    </>
  )
}

export default Annuaire
