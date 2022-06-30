import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'

const Annuaire = ({ setIsHomePage }) => {
  const [profiles, setProfiles] = useState([])
  const [displayMOrG, setDisplayMOrG] = useState('') // etape 1
  const [profilesFilter, setProfilesFilter] = useState([])
  const [group, setGroup] = useState([])
<<<<<<< HEAD
=======
  const [noResult, setNoResult] = useState(false)
>>>>>>> dev
  const [noCreteria, setNoCreteria] = useState(true)
  const [creteria, setCreteria] = useState({
    instrument: '',
    experience: '',
    style: '',
    location: '',
    objectif: ''
  })
  const [deso, setDeso] = useState(false)

  const filter1 = (arr, strCompare) => {
    return arr.filter(el => el.music.instrument?.includes(strCompare))
  }

  const filter2 = (arr, strCompare) => {
    return arr.filter(el => el.music.style?.includes(strCompare))
  }

  const filter3 = (arr, strCompare) => {
    return arr.filter(el => el.music.experience?.includes(strCompare))
  }

  const filter4 = (arr, strCompare) => {
    return arr.filter(el => el.location.city?.includes(strCompare))
  }

  const filter5 = (arr, strCompare) => {
    return arr.filter(el => el.music.search.objectif?.includes(strCompare))
  }

  useEffect(() => {
    setIsHomePage(false)
  }, [])

  useEffect(() => {
    const getData = () => {
      fetch('https://kinotonik.github.io/jsonapi/data_musicien.json')
        .then(res => res.json())
        .then(res => setProfiles(res.results))
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = () => {
      fetch('https://kinotonik.github.io/jsonapi/data_groupe.json')
        .then(res => res.json())
        .then(res => setGroup(res.results))
    }
    getData()
  }, [])

  const checkCreteria = (e, creteria, noCreteria) => {
    e.preventDefault()

    let result = profiles
    result = creteria.instrument ? filter1(result, creteria.instrument) : result
    result = creteria.style ? filter2(result, creteria.style) : result
    result = creteria.experience ? filter3(result, creteria.experience) : result
    result = creteria.location ? filter4(result, creteria.location) : result
<<<<<<< HEAD
    result = creteria.goal ? filter5(result, creteria.goal) : result

    setCreteria(creteria)
    setProfilesFilter(result)
    setNoCreteria(noCreteria)
    setDeso(true)
=======
    result = creteria.objectif ? filter5(result, creteria.objectif) : result
    setCreteria(creteria)
    setProfilesFilter(result)
    setNoCreteria(noCreteria)
    setNoResult(true)
>>>>>>> dev
  }

  return (
    <div className='container-80'>
      <div className='titleForm1'>
        <h1>Bienvenue sur le groupe de recherche de musiciens n°1 !</h1>
      </div>
      <Formulaire setDisplayMOrG={setDisplayMOrG} isCheck={checkCreteria} />
      <div className='title1'>
        <h3>Retrouvez vos futurs musiciens sur Rock Your Band ... </h3>
      </div>
      <div className='containerSolo'>
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
<<<<<<< HEAD
                />
              ))
            : deso && <p>deso gros</p>}
=======
                  objectif={profile.music.search.objectif}
                />
              ))
            : noResult && <p className='noResultAff'>Aucun résultat</p>}
>>>>>>> dev
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
      </div>
      <div className='title2'>
        <h3>Ou votre futur groupe de musique ... </h3>
      </div>
      <div className='containerGroupe'>
        {group.map(
          (group, index) =>
            index < 11 && (
              <div className='containerGroupe'>
                <Profiles
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  image={group.jacket}
                  location={group.location.city}
                  instrument={group.instrument}
                  experience={group.experience}
                />
              </div>
            )
        )}

        <div>
          <>
            <div className='wrap-leaf'>
              {
                <MapContainer
                  center={[47.389509, 0.693421]}
                  zoom={10}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />

                  {!noCreteria && profilesFilter.length
                    ? profilesFilter.map(profile => (
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
                      ))
                    : deso && <p>deso gros</p>}

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
                        longitude={profileFiltre.location.coordinates.longitude}
                      />
                    ))}
                </MapContainer>
              }
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

export default Annuaire
