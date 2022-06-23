import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Leaflet.css'

export const LeafletDetails = ({ latitude, longitude, id }) => {
  const position = [latitude, longitude]
  console.log('position', position)

  return (
    <div className='lf-David'>
      {
        <MapContainer
          style={{ width: '250px', height: '250px', margin: '0px' }}
          center={position}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright/OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker key={id} position={[latitude, longitude]}></Marker>
        </MapContainer>
      }
    </div>
  )
}

export default LeafletDetails
