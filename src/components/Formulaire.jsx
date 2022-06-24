import React, { useInsertionEffect } from 'react'
import { useState, useEffect } from 'react'
//import { Leaflet } from '../components/Leaflet'
//import { Profiles } from '../components/Profiles'
import './Formulaire.css'
// étape 4 récupe de la props dans le formulaire
const Formulaire = ({ setDisplayMOrG }) => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)

  // const Formulaire = ({ isCheck }) => {
  //const [isDisplayMap, setIsDisplayMap] = useState(false)
  //const [search, setSearch] = useState(false)
  const [dataFilter, setDataFilter] = useState([])
  const [instFilter, setInstFilter] = useState([])
  const [nivFilter, setNivFilter] = useState([])
  const [styleFilter, setStyleFilter] = useState([])
  // filtres selectionnés
  const [dataCreteria, setDataCreteria] = useState([])
  const [instCreteria, setInstCreteria] = useState([])
  const [nivCreteria, setNivCreteria] = useState([])
  const [styleCreteria, setStyleCreteria] = useState([])

  // const handleClick = e => {
  //   e.preventDefault()

  //   isCheck('toto')
  // }

  // useEffect(() => {}, [isDisplayMap])
  // const handleClick = e => {
  //   e.preventDefault()
  //   setIsDisplayMap(!isDisplayMap)
  // }

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
            Recherche Groupe / <br />
            Personne solos :
            <select
              className='selectForm'
              onChange={e => setDisplayMOrG(e.target.value)} // étape 5 utilise la props récupérée en ciblant la valeur de l'input /onChange
            >
              <option value=''>---Type---</option>
              <option value='crew'>Groupe</option>
              <option value='solo'>Solo</option>
            </select>
          </label>
          <label htmlFor='select' className='labelFrom'>
            Instruments :
            <select
              className='selectForm'
              onChange={e => setInstCreteria(e.target.value)}
            >
              <option value=''> chosir un instrument</option>
              {instFilter.length &&
                instFilter.map((inst, i) => (
                  <option key={i} value={inst.name}>
                    {inst.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className='contener-1'>
          <label htmlFor='select' className='labelFrom'>
            Niveau :
            <select
              className='selectForm'
              onChange={e => setNivCreteria(e.target.value)}
            >
              <option value=''>choisir niveau</option>
              {nivFilter.length &&
                nivFilter.map((niv, i) => (
                  <option key={i} value={niv.niveau}>
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
            <select
              className='selectForm'
              onChange={e => setStyleCreteria(e.target.value)}
            >
              <option value=''>choisir un style</option>
              {styleFilter.length &&
                styleFilter.map((sty, i) => (
                  <option key={i} value={sty.name}>
                    {sty.name}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <button
          className='buttonForm'
          // onClick={e =>
          //   isCheck(e, instCreteria, nivCreteria, styleCreteria, dataCreteria)
          // }
        >
          CHERCHER
        </button>
      </form>
    </div>
  )
}

export default Formulaire
