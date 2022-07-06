import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'
import { useParams } from 'react-router-dom'

const Annuaire = ({ setIsHomePage, selectGroupe }) => {
  const [profiles, setProfiles] = useState([])
  const [displayMOrG, setDisplayMOrG] = useState('')
  const [profilesFilter, setProfilesFilter] = useState([])
  const [groupes, setGroupes] = useState([])
  const [groupesFilter, setGroupesFilter] = useState([])
  const [noResult, setNoResult] = useState(false)
  const [noCreteria, setNoCreteria] = useState(true)
  const [creteria, setCreteria] = useState({
    instrument: '',
    experience: '',
    style: '',
    location: '',
    objectif: '',
    gs: selectGroupe
  })

  useEffect(() => {
    !selectGroupe
      ? setCreteria({ ...creteria, gs: 'false' })
      : setCreteria({ ...creteria, gs: 'true' })
  }, [selectGroupe])

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

  const filterG1 = (arr, strCompareG) => {
    return arr.filter(el => el.instrument?.includes(strCompareG))
  }
  const filterG2 = (arr, strCompareG) => {
    return arr.filter(el => el.style?.includes(strCompareG))
  }

  const filterG3 = (arr, strCompareG) => {
    return arr.filter(el => el.experience?.includes(strCompareG))
  }

  const filterG4 = (arr, strCompareG) => {
    return arr.filter(el => el.location?.includes(strCompareG))
  }

  const filterG5 = (arr, strCompareG) => {
    return arr.filter(el => el.search.objectif?.includes(strCompareG))
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
        .then(res => setGroupes(res.results))
    }
    getData()
  }, [])

  const checkCreteria = (e, creteria, noCreteria) => {
    e.preventDefault()
    console.log('ETAT BORDEL', creteria, creteria.gs)
    let result = profiles
    result = creteria.instrument ? filter1(result, creteria.instrument) : result
    result = creteria.style ? filter2(result, creteria.style) : result
    result = creteria.experience ? filter3(result, creteria.experience) : result
    result = creteria.location ? filter4(result, creteria.location) : result
    result = creteria.objectif ? filter5(result, creteria.objectif) : result
    setCreteria(creteria)
    setProfilesFilter(result)
    setNoCreteria(noCreteria)
    setNoResult(true)

    let resultG = groupes
    resultG = creteria.instrument
      ? filterG1(resultG, creteria.instrument)
      : resultG
    resultG = creteria.style ? filterG2(resultG, creteria.style) : resultG
    resultG = creteria.experience
      ? filterG3(resultG, creteria.experience)
      : resultG
    resultG = creteria.location ? filterG4(resultG, creteria.location) : resultG
    resultG = creteria.objectif ? filterG5(resultG, creteria.objectif) : resultG
    setCreteria(creteria)
    setGroupesFilter(resultG)
    setNoCreteria(noCreteria)
    setNoResult(true)
  }

  return (
    <div>
      <div className='container-80'>
        <div className='titleForm1'>
          <h1>Bienvenue sur le groupe de recherche de musiciens n°1 !</h1>
        </div>
        <Formulaire isCheck={checkCreteria} selectGroupe={selectGroupe} />
        <div className='titleCard'>
          {console.log('BORDEL DE MERDE', creteria.gs)}
          <h3>Retrouvez vos futurs musiciens sur Rock Your Band ... </h3>
        </div>
      </div>
      {creteria.gs == 'false' && (
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
                        longitude={profileFiltre.location.coordinates.longitude}
                      />
                    ))}
                </MapContainer>
              }
            </div>
          </div>
        </div>
      )}
      <div className='title2'>
        <h3>Ou votre futur groupe de musique ... </h3>
      </div>

      {creteria.gs == 'true' && (
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
              groupes.map(groupeFiltre => (
                <Profiles
                  key={groupeFiltre.id}
                  id={groupeFiltre.id}
                  name={groupeFiltre.name}
                  image={groupeFiltre.jacket}
                  location={groupeFiltre.location.city}
                  instrument={groupeFiltre.instrument}
                  experience={groupeFiltre.experience}
                  style={groupeFiltre.style}
                  objectif={groupeFiltre.search.objectif}
                />
              ))}
          </div>
          <div>
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
          </div>
        </div>
      )}
    </div>
  )
}

export default Annuaire
