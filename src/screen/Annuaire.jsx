import React from 'react'
import { useEffect, useState } from 'react'
import { Leaflet } from '../components/Leaflet'
import Formulaire from '../components/Formulaire'
import './Annuaire.css'
import Profiles from '../components/Profiles'
import '../components/Profiles.css'

const Annuaire = ({ setIsHomePage }) => {
  const [isDisplayMap, setIsDisplayMap] = useState(false)
  const [profiles, setProfiles] = useState([])
  const [group, setGroup] = useState([])
  const [dataCreteria, setDataCreteria] = useState('Tours')
  const [instCreteria, setInstCriteria] = useState('Piano')
  const [nivCreteria, setNivCreteria] = useState('débutant')
  const [styleCreteria, setStyleCreteria] = useState('Jazz')

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
        .then(res => console.log(res) || setGroup(res.results))
    }
    getData()
  }, [])

  const checkCreteria = (
    e,
    instCreteria,
    nivCreteria,
    styleCreteria,
    dataCreteria
  ) => {
    e.preventDefault()
    console.log(
      'appel annuaire',
      instCreteria,
      nivCreteria,
      styleCreteria,
      dataCreteria
    )
    setInstCriteria(instCreteria)
    setNivCreteria(nivCreteria)
    setStyleCreteria(styleCreteria)
    setDataCreteria(dataCreteria)
  }

  return (
    <div className='container-80'>
      <h1>Bienvenue sur le groupe de recherche de musiciens n°1!</h1>
      <Formulaire isCheck={checkCreteria} />
      <Leaflet />
      <div className=''>
        <p>Retrouvez les sur Rock Your Band ... </p>
      </div>
      <div className='clearfix'>
        <div className='row'>
          {/* {profiles !== null &&
            profiles 
              .filter(profileFiltre => {
                // console.log('0', profileFiltre)
                // console.log('1', profileFiltre.style, styleCreteria)
                // console.log('2', profileFiltre.style.includes(styleCreteria))
                profileFiltre.instrument.includes(instCreteria)
              })
              .map(profileFiltre => <Profiles key={profileFiltre.id} />)}  */}

          {profiles.map(
            (profile, index) =>
              index < 3 && (
                <Profiles
                  key={profile.id}
                  name={profile.name.first}
                  image={profile.picture.large}
                  location={profile.location.city}
                />
              )
          )}
          {group.map(
            (group, index) =>
              index < 3 && (
                <Profiles
                  key={group.id}
                  name={group.name}
                  image={group.jacket}
                  location={group.location.city}
                />
              )
          )}
        </div>
      </div>

      {/* <button onClick={() => setIsDisplayMap(!isDisplayMap)}>CHERCHER</button>
      {isDisplayMap ? <Leaflet /> : null} */}
    </div>
  )
}

export default Annuaire
