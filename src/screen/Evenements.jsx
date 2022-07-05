import React from 'react'
import { useState, useEffect } from 'react'
import Events from '../components/Events'
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

  const [evenements, setEvenements] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch('https://yv3o2geh.directus.app/items/evenements/')
        .then(res => res.json())
        .then(res => console.log(res) || setEvenements(res.data))
    }
    getData()
  }, [])

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
            <option value='metal'>Metal</option>
            <option value='electro'>Electro</option>
            <option value='rap'>Rap</option>
            <option value='hip-hop'>Hip-Hop</option>
            <option value='pop'>Pop</option>
            <option value='classic'>Classic</option>
          </select>
          <input type='text' name='' className='selectForm' />
          <label>
            Veuillez saisir la date de début:
            <input
              type='date'
              name='bday'
              required
              pattern='\d{4}-\d{2}-\d{2}'
            />
            <span className='validity'></span>
          </label>
          <label>
            Veuillez saisir la date de fin:
            <input
              type='date'
              name='bday'
              required
              pattern='\d{4}-\d{2}-\d{2}'
            />
            <span className='validity'></span>
          </label>
          Localisation :
          <button className='button-event' onClick={handleClick}>
            CHERCHER
          </button>
        </div>

        {isDisplayMap && <Leaflet />}
      </form>
      <div className='GaleryEvenements'>
        {evenements.map(evenement => (
          <Events
            key={evenement.id}
            name={evenement.name}
            image={evenement.image}
            description={evenement.description}
            id={evenement.id}
            url={evenement.url}
            tarif={evenement.tarif}
            style={evenement.style}
            location={evenement.location}
          />
        ))}
      </div>
    </>
  )
}

export default Evenements
