import React, { useState, useEffect } from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Circle,
  CircleMarker
} from 'react-leaflet'
import './StreetMap.css'

const StreetMap = () => {
  const URL_DIRECTUS = `https://7kb0t63m.directus.app/items/locations`

  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }

  const center = [51.505, -0.09]

  const [data, setData] = useState([])
  useEffect(() => {
    fetch(URL_DIRECTUS)
      .then(res => res.json())
      .then(res => {
        return setData(res.data)
      })
  }, [])

  let position = [51.0, -0.1]

  useEffect(() => {
    // if (data.length){
    //   console.log(data)
    // }
    // console.log(data)
    // for (let i = 0; i < 10; i++) {
    //   // console.log(data.length && data[i].location.coordinates)
    // }
    // data.length && data.map(elt => {
  }, [data])

  return (
    <div className='leaflet d-flex justify-content-center m-30'>
      <div className='d-flex  justify-content-center'>
        <h1>FUCKING MAP in main component 🌎</h1>
      </div>

      <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {data.length &&
          data.map(dtc => (
            <Marker
              key={dtc.id}
              position={[
                dtc.location.coordinates[0],
                dtc.location.coordinates[1]
              ]}
            >
              <Popup
                position={[
                  dtc.location.coordinates[0],
                  dtc.location.coordinates[1]
                ]}
              >
                <div>
                  <h2>{`Name: ${dtc.name}`}</h2>
                  {/* <p>{`Street: ${tsla.address.street}`}</p> */}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}

export default StreetMap
