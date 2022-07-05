import React, { useState, useEffect } from 'react'
import './Formulaire.css'

// étape 4 récupe de la props dans le formulaire
const Formulaire = ({ setDisplayMOrG, isCheck }) => {
  //const [isDisplayMap, setIsDisplayMap] = useState(false)
  const [noCreteria, setNoCreteria] = useState(true)
  const [creteria, setCreteria] = useState({
    instrument: '',
    experience: '',
    style: '',
    location: '',
    objectif: ''
  })
  //const [state, setState] = useState(() => new Set());
  const [locFilter, setLocFilter] = useState([])
  const [instFilter, setInstFilter] = useState([])
  const [nivFilter, setNivFilter] = useState([])
  const [styleFilter, setStyleFilter] = useState([])
  const [objFilter, setObjFilter] = useState([])
  // filtres selectionnés
  // const [locCreteria, setLocCreteria] = useState([])
  // const [instCreteria, setInstCreteria] = useState([])
  // const [nivCreteria, setNivCreteria] = useState([])
  // const [styleCreteria, setStyleCreteria] = useState([])
  // const [objCreteria, setObjCreteria] = useState([])

  const handleChange = target => {
    setNoCreteria(false)

    if (target.id === 'selectInst') {
      setCreteria({ ...creteria, instrument: target.value })
      // setInstCreteria(target.value)
    }
    if (target.id === 'selectNiv') {
      setCreteria({ ...creteria, experience: target.value })
      //setNivCreteria(target.value)
    }
    if (target.id === 'selectObj') {
      setCreteria({ ...creteria, objectif: target.value })
      //setObjCreteria
    }
    if (target.id === 'selectLoc') {
      setCreteria({ ...creteria, location: target.value })
      //setLocCreteria(target.value)
    }
    if (target.id === 'selectStyle') {
      setCreteria({ ...creteria, style: target.value })
      //setStyleCreteria(target.value)
    }
  }

  //const [results, setResults] = useState([])
  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
      .then(res => res.json())
      .then(res => {
        let a = res.results.map(el => el.location.city)
        console.log('ARR MAP', a)
        a = a.filter((item, index) => a.indexOf(item) === index)

        console.log('FILTRE TEST', a)
        return setLocFilter(a)
      })
  }, [])

  useEffect(() => {
    fetch('https://yv3o2geh.directus.app/items/objectif')
      .then(res => res.json())
      .then(res => setObjFilter(res.data))
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
              id='selectGs'
              className='selectForm'
              onChange={e => setDisplayMOrG(e.target.value)} // peut etre changer plus d'interaction avec Leaflet
            >
              <option value=''>---Type---</option>
              <option value='crew'>Groupe</option>
              <option value='solo'>Solo</option>
            </select>
          </label>
          <label htmlFor='select' className='labelFrom'>
            Instruments :
            <select
              id='selectInst'
              className='selectForm'
              onChange={e => handleChange(e.target)}
            >
              <option value=''>---Type---</option>
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
              id='selectNiv'
              className='selectForm'
              placeholder='Choisir niveau'
              onChange={e => handleChange(e.target)}
            >
              <option value=''>---Type---</option>
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
            <select
              id='selectObj'
              className='selectForm'
              onChange={e => handleChange(e.target)}
            >
              <option value=''>---Type---</option>
              {objFilter.length &&
                objFilter.map((obj, i) => (
                  <option key={i} value={obj.objectif}>
                    {obj.objectif}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className='contener-1'>
          <label className='labelFrom'>
            Localisation :
            <select
              id='selectLoc'
              className='selectForm'
              onChange={e => handleChange(e.target)}
            >
              <option value=''>---Type---</option>
              {locFilter.length &&
                locFilter.map((loc, i) => (
                  <option key={i} value={loc}>
                    {loc}
                  </option>
                ))}
            </select>
          </label>
          <label className='labelFrom'>
            Genre musical :
            <select
              id='selectStyle'
              className='selectForm'
              onChange={e => handleChange(e.target)}
            >
              <option value=''>---Type---</option>
              {styleFilter.length &&
                styleFilter.map((sty, i) => (
                  <option key={i} value={sty.name}>
                    {sty.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className='contButton'>
          <button className='buttonForm' onClick={e => isCheck(e, creteria)}>
            RECHERCHE
          </button>
        </div>
      </form>
    </div>
  )
}

export default Formulaire
