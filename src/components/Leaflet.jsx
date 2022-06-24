import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
// import dataUser from './data/dataUser.json'
import { useState, useEffect } from 'react'
import './Leaflet.css'
//  étape 6 récupération de la props
export const Leaflet = ({ displayMOrG }) => {
  let navigate = useNavigate()
  const position = [47.389509, 0.693421]
  // const filteredStations = teslaData.filter(tsla => tsla.address.country === "USA")
  // console.log(filteredStations);

  // const URL_DIRECTUS = "https://7kb0t63m.directus.app/items/locations"

  const [dataM, setDataM] = useState([])

  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
      .then(res => res.json())
      .then(res => setDataM(res.results))
  }, [])

  useEffect(() => {
    // console.log(data)
  }, [dataM])

  const [dataG, setDataG] = useState([])

  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data_groupe.json')
      .then(res => res.json())
      .then(res => setDataG(res.results))
  }, [])

  useEffect(() => {
    // console.log(data)
  }, [dataG])

  return (
    <>
      <div className='wrap-leaf'>
        {
          <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {/* étape 7 mise en condition de la state  displayMOrG(avec de base useState =('')) => falsy et ne joue pas ce qui est à droite en attribuant la value récupérée dans le formulaire*/}
            {displayMOrG && displayMOrG === 'solo'
              ? dataM.length &&
                dataM.map(dt => (
                  <Marker
                    key={dt.id}
                    position={[
                      dt.location.coordinates.latitude,
                      dt.location.coordinates.longitude
                    ]}
                  >
                    <Popup
                      position={[
                        dt.location.coordinates.latitude,
                        dt.location.coordinates.longitude
                      ]}
                    >
                      <div className='pop_up-contain'>
                        <>
                          <img src={dt.picture.thumbnail} alt={dt.name.first} />
                          <h2>{`${dt.name.first} ${dt.name.last}`}</h2>
                          <p style={{ color: 'red' }}>{` ${[
                            dt.music.style
                          ]}`}</p>
                          <p
                            style={{ color: 'blue' }}
                          >{`Niveau:${dt.music.expérience}`}</p>
                          <p>{`${dt.music.instrument}`}</p>
                        </>
                        <button className='btn__leaflet'>Détail</button>
                      </div>
                    </Popup>
                  </Marker>
                ))
              : displayMOrG === 'crew' &&
                dataG.length &&
                dataG.map(dt => (
                  <Marker
                    key={dt.id}
                    position={[
                      dt.location.coordinates.latitude,
                      dt.location.coordinates.longitude
                    ]}
                  >
                    <Popup
                      position={[
                        dt.location.coordinates.latitude,
                        dt.location.coordinates.longitude
                      ]}
                    >
                      <div className='pop_up-contain'>
                        <>
                          <img src={dt.jacket} alt={dt.name} />
                          <h2>{`${dt.name}`}</h2>
                          <p style={{ color: 'red' }}> {dt.style.join(' ')}</p>
                          <p style={{ color: 'blue' }}>{`${dt.expérience}`}</p>
                          <p style={{ color: 'green' }}>Membres:{dt.members}</p>
                          <ul>
                            {console.log('map:', dt) ||
                              dt.instrument?.map(inst => <li>{`${inst}`}</li>)}
                          </ul>
                        </>
                        <button
                          className='leaflet_btn__card'
                          onClick={() => navigate(`/profilesdetails/${dt.id}`)}
                        >
                          Détail
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
          </MapContainer>
        }
      </div>
    </>
  )
}
