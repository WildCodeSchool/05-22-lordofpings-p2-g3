import React from 'react'
import { useState, useEffect } from 'react'
import Event from '../components/Event'
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
      fetch(
        'https://gist.githubusercontent.com/Joshua35260/570274df963631defeac775a4ce472d3/raw/eee1a92e9baa6a36a3a4df3d9cb4f95e01091b83/data.json'
      )
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
      <div className='GaleryEvenements'>
        {evenements.map(evenement => (
          <Event
            key={evenement.id}
            name={evenement.name}
            image={evenement.image}
            description={evenement.description}
            id={evenement.id}
          />
        ))}
      </div>
    </>
  )
}

export default Evenements
