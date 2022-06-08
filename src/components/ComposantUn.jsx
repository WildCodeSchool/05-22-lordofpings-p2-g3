import React from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'

const ComposantUn = () => {
  const position = [51.505, -0.09]



  return (
    <div>
        
       <h1>ComposantUn incrustation dans Composant MAIN</h1> 

         <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        
    </div>
  )
}

export default ComposantUn