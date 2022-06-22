import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// import dataUser from './data/dataUser.json'
import { useState, useEffect } from 'react'
import './Leaflet.css'

export const Leaflet = () => {
  const position = [47.389509, 0.693421]
  // const filteredStations = teslaData.filter(tsla => tsla.address.country === "USA")
  // console.log(filteredStations);

  // const URL_DIRECTUS = "https://7kb0t63m.directus.app/items/locations"

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
      .then(res => res.json())
      .then(res => setData(res.results))
  }, [])

  useEffect(() => {
    // console.log(data)
  }, [data])

  return (
    <>
      <div className='wrap-leaf'>
        {
          <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {data.length &&
              data.map(dt => (
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
                    <div>
                      <img src={dt.picture.thumbnail} alt={dt.name.first} />
                      <h2>{`Name: ${dt.name.last}`}</h2>
                      <p>{`Ville: ${dt.location.city}`}</p>
                      <p>{`Instrument: ${dt.music.instrument}`}</p>
                      <button className='btn__card'>Détail</button>
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
