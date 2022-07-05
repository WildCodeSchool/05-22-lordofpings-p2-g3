import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import '../screen/Annuaire.css'
import Profiles from '../components/Profiles'

const Musicien = ({
  noCreteria,
  profilesFilter,
  noResult,
  profiles,
  creteria
}) => {
  return (
    <>
      {creteria == 'false' && (
        <div className='elment-annuaire'>
          <div className='containerSolo'>
            {!noCreteria && profilesFilter.length
              ? profilesFilter.map(profile => (
                  <Profiles
                    key={profile.id}
                    id={profile.id}
                    name={profile.name.first}
                    image={profile.picture.large}
                    location={profile.location.city}
                    instrument={profile.music.instrument}
                    experience={profile.music.experience}
                    style={profile.music.style}
                    objectif={profile.music.search.objectif}
                  />
                ))
              : noResult && <p className='noResultAff'>Aucun résultat</p>}
            {noCreteria &&
              profiles !== null &&
              profiles.map(profileFiltre => (
                <Profiles
                  key={profileFiltre.id}
                  id={profileFiltre.id}
                  name={profileFiltre.name.first}
                  image={profileFiltre.picture.large}
                  location={profileFiltre.location.city}
                  instrument={profileFiltre.music.instrument}
                  experience={profileFiltre.music.experience}
                  style={profileFiltre.music.style}
                  objectif={profileFiltre.music.search.objectif}
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
                      profilesFilter.length &&
                      profilesFilter.map(profile => (
                        <Leaflet
                          key={profile.id}
                          id={profile.id}
                          name={profile.name.first}
                          image={profile.picture.large}
                          location={profile.location.city}
                          instrument={profile.music.instrument}
                          experience={profile.music.experience}
                          style={profile.music.style}
                          latitude={profile.location.coordinates.latitude}
                          longitude={profile.location.coordinates.longitude}
                        />
                      ))}

                    {noCreteria &&
                      profiles !== null &&
                      profiles.map(profileFiltre => (
                        <Leaflet
                          key={profileFiltre.id}
                          id={profileFiltre.id}
                          name={profileFiltre.name.first}
                          image={profileFiltre.picture.large}
                          location={profileFiltre.location.city}
                          instrument={profileFiltre.music.instrument}
                          experience={profileFiltre.music.experience}
                          style={profileFiltre.music.style}
                          latitude={profileFiltre.location.coordinates.latitude}
                          longitude={
                            profileFiltre.location.coordinates.longitude
                          }
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

export default Musicien
