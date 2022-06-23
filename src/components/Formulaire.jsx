import React, { useInsertionEffect } from 'react'
import { useState, useEffect } from 'react'
import { Leaflet } from '../components/Leaflet'
import { Profiles } from '../components/Profiles'
import './Formulaire.css'

const Formulaire = () => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)
  const [search, setSearch] = useState(false)
  const [dataFilter, setDataFilter] = useState([])
  const [instFilter, setInstFilter] = useState([])
  const [nivFilter, setNivFilter] = useState([])
  const [styleFilter, setStyleFilter] = useState([])

  useEffect(() => {}, [isDisplayMap])
  const handleClick = e => {
    e.preventDefault()
    setIsDisplayMap(!isDisplayMap)
  }

  const [results, setResults] = useState([])
  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
      .then(res => res.json())
      .then(res => setDataFilter(res.results))
  }, [])

  useEffect(() => {
    fetch('https://yv3o2geh.directus.app/items/instruments')
      .then(res => res.json())
      .then(res => setInstFilter(res.data))
  }, [])

  useEffect(() => {
    fetch('https://yv3o2geh.directus.app/items/level')
      .then(res => res.json())
      .then(res => setNivFilter(res.data))
  }, [])

  useEffect(() => {
    fetch('https://yv3o2geh.directus.app/items/style')
      .then(res => res.json())
      .then(res => setStyleFilter(res.data))
  }, [])

  return (
    <div className='contener'>
      <form className='form'>
        <div className='contener-1'>
          <label htmlFor='select' className='labelFrom'>
            Localisation :
            <select className='selectForm'>
              <option value=''> chosir localisation</option>
              {dataFilter.length &&
                dataFilter.map(df => (
                  <option key={df} value={df.location.city}>
                    {df.location.city}
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor='select' className='labelFrom'>
            Instruments :
            <select className='selectForm'>
              <option value=''> chosir un instrument</option>
              {instFilter.length &&
                instFilter.map(inst => (
                  <option key={inst.id} value={inst.name}>
                    {inst.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className='contener-1'>
          <label htmlFor='select' className='labelFrom'>
            Niveau :
            <select className='selectForm'>
              <option value=''>choisir niveau</option>
              {nivFilter.length &&
                nivFilter.map(niv => (
                  <option key={niv.id} value={niv.niveau}>
                    {niv.niveau}
                  </option>
                ))}
            </select>
          </label>
          <label htmlFor='select' className='labelFrom'>
            Objectif recherché :
            <select className='selectForm'>
              <option value='loisir'>Loisir</option>
              <option value='professionnel'>Professionnel</option>
            </select>
          </label>
        </div>
        <div className='contener-1'>
          <label className='labelFrom'>
            Recherche avancée :
            <input type='text' name='' className='selectForm' />
          </label>
          <label className='labelFrom'>
            Genre musical :
            <select className='selectForm'>
              <option value=''>choisir un style</option>
              {styleFilter.length &&
                styleFilter.map(sty => (
                  <option key={sty.id} value={sty.name}>
                    {sty.name}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <button className='buttonForm' onClick={handleClick}>
          CHERCHER
        </button>

        {isDisplayMap && <Leaflet />}
      </form>
    </div>
  )
}

export default Formulaire
