import React from 'react'
import Profiles from './Profiles'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Leaflet } from '../components/Leaflet'

const Groupe = ({ groupes, groupesFilter, noCreteria, noResult, creteria }) => {
  return (
    <>
      {creteria == 'true' && (
        <div className='elment-annuaire'>
          <div className='containerSolo'>
            {!noCreteria && groupesFilter.length
              ? groupesFilter.map(groupe => (
                  <Profiles
                    key={groupe.id}
                    id={groupe.id}
                    name={groupe.name}
                    image={groupe.jacket}
                    location={groupe.location.city}
                    instrument={groupe.instrument}
                    experience={groupe.experience}
                    style={groupe.style}
                    objectif={groupe.search.objectif}
                  />
                ))
              : noResult && <p className='noResultAff'>Aucun résultat</p>}
            {noCreteria &&
              groupes !== null &&
              groupes.map(grpFiltre => (
                <Profiles
                  key={grpFiltre.id}
                  id={grpFiltre.id}
                  name={grpFiltre.name}
                  image={grpFiltre.jacket}
                  location={grpFiltre.location.city}
                  instrument={grpFiltre.instrument}
                  experience={grpFiltre.experience}
                  style={grpFiltre.style}
                  objectif={grpFiltre.search.objectif}
                />
              ))}
          </div>
          <div>
            <>
              <div className='wrap-leaf'>
                {
                  <MapContainer
                    center={[49.837965, 6.057441]}
                    zoom={5}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {!noCreteria &&
                      groupesFilter.length &&
                      groupesFilter.map(grpFiltre => (
                        <Leaflet
                          key={grpFiltre.id}
                          id={grpFiltre.id}
                          name={grpFiltre.name}
                          image={grpFiltre.jacket}
                          location={grpFiltre.location.city}
                          instrument={grpFiltre.instrument}
                          experience={grpFiltre.experience}
                          objectif={grpFiltre.search.objectif}
                          latitude={grpFiltre.location.coordinates.latitude}
                          longitude={grpFiltre.location.coordinates.longitude}
                        />
                      ))}
                    {noCreteria &&
                      groupes !== null &&
                      groupes.map(grpFiltre => (
                        <Leaflet
                          key={grpFiltre.id}
                          id={grpFiltre.id}
                          name={grpFiltre.name}
                          image={grpFiltre.jacket}
                          location={grpFiltre.location.city}
                          instrument={grpFiltre.instrument}
                          experience={grpFiltre.experience}
                          objectif={grpFiltre.search.objectif}
                          latitude={grpFiltre.location.coordinates.latitude}
                          longitude={grpFiltre.location.coordinates.longitude}
                        />
                      ))}
                  </MapContainer>
                }
              </div>
            </>
          </div>
        </div>
      )}
    </>
  )
}

export default Groupe
