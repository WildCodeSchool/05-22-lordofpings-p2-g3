import React from 'react'
import { useState, useEffect } from 'react'
import Slider from '../components/Slider'
import { Leaflet } from '../components/Leaflet'
import './Evenements.css'

const Evenements = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  const [isDisplayMap, setIsDisplayMap] = useState(false)

  useEffect(() => {}, [isDisplayMap])
  const handleClick = e => {
    e.preventDefault()
    setIsDisplayMap(!isDisplayMap)
  }

  return (
    <>
      <h1 className='h1event'>
        Tenez-vous informé des événements musicaux en cours ou à venir
      </h1>
      <form className='form-event'>
        <div className='contener-form-event'>
          Type d'événement
          <select className='select-event'>
            <option value='tous'>Tous</option>
            <option value='festival'>Festival</option>
            <option value='concert'>Concert</option>
            <option value='guinguette'>Guinguette</option>
          </select>
          Genre musical :
          <select className='select-event'>
            <option value='tous'>Tous</option>
            <option value='rock'>Rock</option>
            <option value='classic'>Classic</option>
          </select>
          Localisation :
          <input type='text' name='' className='selectForm' />
          <button className='button-event' onClick={handleClick}>
            CHERCHER
          </button>
        </div>

        {isDisplayMap && <Leaflet />}
      </form>
      <Slider />
    </>
  )
}

export default Evenements
