import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './Leaflet.css'
import './LeafletEvents.css'

export const LeafletEvents = ({
  name,
  image,
  id,
  style,
  coordinates,
  city,
  url,
  tarif
}) => {
  const imgUrl = `https://yv3o2geh.directus.app/assets/${image}`
  return (
    <>
      <Marker key={id} position={[coordinates[1], coordinates[0]]}>
        {/* a modifier avec coordinates*/}
        <Popup position={[coordinates[1], coordinates[0]]}>
          {/* a modifier avec coordinates*/}
          <div className='pop_up-contain'>
            <img src={imgUrl} alt={name} />
            <div>
              <h2>{`${name}`}</h2>
              <p style={{ color: '#fc5209' }}>💰 {tarif}</p>
              <p style={{ color: '#fc5209' }}>📍 {city}</p>
              <p style={{ color: '#fc5209' }}>🎶Style:</p>
              <ul className='lf_ul'>
                {style.map(sty => (
                  <li>{`${sty}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className='leaflet_btn__card'
            onClick={() => window.open(`${url}`, '_blank')}
          >
            Details
          </button>
        </Popup>
      </Marker>
    </>
  )
}
