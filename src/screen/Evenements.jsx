import React from 'react'
import { useState, useEffect } from 'react'
import Events from '../components/Events'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LeafletEvents } from '../components/LeafletEvents'
import './Evenements.css'

const Evenements = ({ setIsHomePage }) => {
  useEffect(() => {
    setIsHomePage(false)
  }, [])

  const [noCreteria, setNoCreteria] = useState(true)
  const [creteria, setCreteria] = useState({
    style: '',
    info_pratique: ''
  })
  const [evenementsF, setEvenementsF] = useState([])
  const [evenements, setEvenements] = useState([])
  const [noResult, setNoResult] = useState(false)

  const filter1 = (arr, strCompare) => {
    return arr.filter(el => el.style?.includes(strCompare))
  }

  const filter2 = (arr, strCompare) => {
    return arr.filter(el => el.info_pratique?.includes(strCompare))
  }

  const checkCreteria = (e, creteria, noCreteria) => {
    e.preventDefault()
    console.log('TEST', creteria)
    let result = evenements
    result = creteria.style ? filter1(result, creteria.style) : result
    result = creteria.info_pratique
      ? filter2(result, creteria.info_pratique)
      : result

    setNoCreteria(false)
    setCreteria(creteria)
    setEvenementsF(result)
    setNoCreteria(noCreteria)
    setNoResult(true)
  }

  useEffect(() => {
    const getData = () => {
      fetch('https://yv3o2geh.directus.app/items/evenements/')
        .then(res => res.json())
        .then(res => {
          console.log(res) || setEvenements(res.data)
        })
    }
    getData()
  }, [])

  const handleChange = target => {
    if (target.id === 'selectStyle') {
      setCreteria({ ...creteria, style: target.value })
    }
    if (target.id === 'month') {
      setCreteria({ ...creteria, info_pratique: target.value })
    }
  }
  useEffect(() => {
    console.log(evenements[0])
  }, [evenements])
  return (
    <>
      <h1 className='h1event'>
        Tenez-vous informé des événements musicaux en cours ou à venir
      </h1>
      <form className='form-event'>
        <div className='contener-form-event'>
          Genre musical :
          <select
            className='selectForm eventForm'
            id='selectStyle'
            onChange={e => handleChange(e.target)}
          >
            <option value=''>Tous</option>
            <option value='Rock'>Rock</option>
            <option value='Metal'>Metal</option>
            <option value='Electro'>Electro</option>
            <option value='Rap'>Rap</option>
            <option value='Hip-Hop'>Hip-Hop</option>
            <option value='Pop'>Pop</option>
            <option value='Classic'>Classic</option>
          </select>
          Date:
          <select
            className='selectForm eventForm'
            id='month'
            name='month'
            onChange={e => handleChange(e.target)}
          >
            <option value='Janvier'>Janvier</option>
            <option value='Février'>Février</option>
            <option value='Mars'>Mars</option>
            <option value='Avril'>Avril</option>
            <option value='Mai'>Mai</option>
            <option value='Juin'>Juin</option>
            <option value='Juillet'>Juillet</option>
            <option value='Août'>Août</option>
            <option value='Septembre'>Septembre</option>
            <option value='Octobre'>Octobre</option>
            <option value='Novembre'>Novembre</option>
            <option value='Décembre'>Décembre</option>
          </select>
          <button
            className='buttonForm buttonEvent'
            onClick={e => checkCreteria(e, creteria)}
          >
            RECHERCHE
            {console.log(evenements.date_start)}
          </button>
        </div>
      </form>
      <div className='elment-annuaire'>
        <div className='containerSolo'>
          {!noCreteria && evenementsF.length
            ? evenementsF.map(evenement => (
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
                  city={evenement.city}
                  date_start={evenement.date_start}
                  infos={evenement.info_pratique}
                />
              ))
            : noResult && <p className='noResultAff'>Aucun résultat</p>}
          {noCreteria &&
            evenements !== null &&
            evenements.map(evenementF => (
              <Events
                key={evenementF.id}
                name={evenementF.name}
                image={evenementF.image}
                description={evenementF.description}
                id={evenementF.id}
                url={evenementF.url}
                tarif={evenementF.tarif}
                style={evenementF.style}
                location={evenementF.location}
                city={evenementF.city}
                date_start={evenementF.date_start}
                infos={evenementF.info_pratique}
              />
            ))}
        </div>

        <div>
          <div className='wrap-leaf'>
            {
              <MapContainer
                center={[47.146135, 2.325562]}
                zoom={5}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {!noCreteria && evenementsF.length
                  ? evenementsF.map(evenement => (
                      <LeafletEvents
                        key={evenement.id}
                        name={evenement.name}
                        image={evenement.image}
                        id={evenement.id}
                        url={evenement.url}
                        tarif={evenement.tarif}
                        style={evenement.style}
                        city={evenement.city}
                        date_start={evenement.date_start}
                        coordinates={evenement.location.coordinates}
                      />
                    ))
                  : noResult && <p className='noResultAff'>Aucun résultat</p>}

                {noCreteria &&
                  evenements !== null &&
                  evenements.map(evenementF => (
                    <LeafletEvents
                      key={evenementF.id}
                      name={evenementF.name}
                      image={evenementF.image}
                      id={evenementF.id}
                      url={evenementF.url}
                      tarif={evenementF.tarif}
                      style={evenementF.style}
                      city={evenementF.city}
                      date_start={evenementF.date_start}
                      coordinates={evenementF.location.coordinates}
                    />
                  ))}
              </MapContainer>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Evenements
